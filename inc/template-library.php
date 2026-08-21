<?php

class Smart_blocks_Template_Library {

	function __construct() {
		add_action('rest_api_init', array($this, 'register_routes'));
	}

	public function register_routes() {
		register_rest_route('smart-blocks/v1', '/fetch_templates', array(
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array($this, 'fetch_templates'),
				'permission_callback' => function () {
					return current_user_can('edit_posts');
				},
			),
		));

		register_rest_route('smart-blocks/v1', '/import_template', array(
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array($this, 'import_template'),
				'args' => array(
					'url' => array(
						'type' => 'string',
						'required' => true,
						'description' => __('URL of the JSON file.', 'smart-blocks'),
					),
					'preview' => array(
						'type' => 'boolean',
						'default' => false,
						'description' => __('Load for Block Preview.', 'smart-blocks'),
					),
				),
				'permission_callback' => function () {
					return current_user_can('upload_files');
				},
			),
		));
	}

	public function fetch_templates(\WP_REST_Request $request) {
		if (!current_user_can('edit_posts')) {
			return false;
		}

		$templates_list = array();
		$response = wp_safe_remote_get('https://smartblocks.hashcreation.com/wp-json/v2/templates', array('timeout' => 15));

		if (!is_wp_error($response)) {
		    $response_dat = json_decode(wp_remote_retrieve_body($response), true);
		    if (isset($response_dat['data'])) {
		    	$templates_list = $response_dat['data'];
		    }
		}

		$templates = apply_filters('smart_block_templates', $templates_list);
		return rest_ensure_response($templates);
	}


	public function import_template($request) {
		// Importing pulls in remote files and sideloads media, so it needs more
		// than the contributor level capability used for merely browsing.
		if (!current_user_can('upload_files')) {
			return new \WP_Error(
				'smart_blocks_forbidden',
				__('You are not allowed to import templates.', 'smart-blocks'),
				array('status' => 403)
			);
		}

		$url = $request->get_param('url');
		$preview = $request->get_param('preview');

		if (!$this->is_allowed_url($url)) {
			return new \WP_Error(
				'smart_blocks_invalid_url',
				__('That template URL is not allowed.', 'smart-blocks'),
				array('status' => 400)
			);
		}

		// wp_safe_remote_get() refuses private and loopback addresses, so the
		// URL cannot be used to reach services inside the network. The previous
		// local-path branch was removed: it mapped any same-host URL onto a
		// filesystem path and read it, which allowed traversal outside the
		// intended directory.
		$response = wp_safe_remote_get($url, array('timeout' => 15));

		if (is_wp_error($response)) {
			return $response;
		}

		if (200 !== (int) wp_remote_retrieve_response_code($response)) {
			return new \WP_Error(
				'smart_blocks_fetch_failed',
				__('The template could not be downloaded.', 'smart-blocks'),
				array('status' => 502)
			);
		}

		$json = wp_remote_retrieve_body($response);
		$obj = json_decode($json);
		if (!isset($obj->__file) || 'wp_export' !== $obj->__file || !isset($obj->content) || $preview) {
			return rest_ensure_response($obj);
		}
		$regex = '/https?:\/\/\S+(?:png|jpg|jpeg|gif|webp)/';
		preg_match_all($regex, $obj->content, $images, PREG_SET_ORDER, 0);

		if (count($images) >= 1) {
			foreach ($images as $image) {
				$image = $image[0];
				$value = $this->import_image($image);
				if ($value) {
					$obj->content = str_replace($image, $value, $obj->content);
				}
			}
		}
		return rest_ensure_response($obj);
	}

	/**
	 * Whether a URL may be fetched by the importer.
	 *
	 * Only plain http(s) URLs are accepted, and only from hosts the site owner
	 * has allowed. Everything else, including schemes such as file:// and ftp://,
	 * is rejected before any request is made.
	 *
	 * @param mixed $url Requested URL.
	 * @return bool
	 */
	public function is_allowed_url($url) {
		if (!is_string($url) || '' === $url) {
			return false;
		}

		$parts = wp_parse_url($url);

		if (empty($parts['scheme']) || empty($parts['host'])) {
			return false;
		}

		if (!in_array(strtolower($parts['scheme']), array('http', 'https'), true)) {
			return false;
		}

		/**
		 * Filters the hosts the template importer may download from.
		 *
		 * Defaults to the official library plus the current site.
		 *
		 * @param array $hosts Allowed host names.
		 */
		$allowed_hosts = apply_filters('smart_blocks_template_import_hosts', array(
			'smartblocks.hashcreation.com',
			wp_parse_url(home_url(), PHP_URL_HOST),
		));

		$allowed_hosts = array_filter(array_map('strtolower', (array) $allowed_hosts));

		return in_array(strtolower($parts['host']), $allowed_hosts, true);
	}

	public function hasDangerousExtension($filename) {
	    // Extensions that should NEVER be allowed
	    $dangerous = ['php', 'php3', 'php4', 'php5', 'phtml', 'exe', 'sh', 'pl', 'cgi', 'js', 'html', 'htm'];
	    $parts = explode('.', strtolower($filename));

	    // If there are multiple extensions, check them all
	    foreach ($parts as $ext) {
	        if (in_array($ext, $dangerous, true)) {
	            return true;
	        }
	    }
	    return false;
	}

	public function get_saved_image($url) {
		global $wpdb;
		$post_id = $wpdb->get_var($wpdb->prepare(
			'SELECT `post_id` FROM `' . $wpdb->postmeta . '` WHERE `meta_key` = \'_smart_blocks_image_hash\' AND `meta_value` = %s LIMIT 1;',
			sha1($url)
		));
		if ($post_id) {
			return $post_id;
		}
		return false;
	}

	public function import_image($url) {
		if ($this->hasDangerousExtension($url)) {
			return false;
		}

		// The URLs here come out of a downloaded template, so they get the same
		// scheme and host checks as the template itself before anything is
		// fetched. This keeps the importer from being pointed at internal hosts.
		if (!$this->is_allowed_url($url)) {
			return false;
		}

		$saved_image = $this->get_saved_image($url);
		if ($saved_image) {
			return wp_get_attachment_url($saved_image);
		}

		if (!function_exists('media_handle_sideload')) {
			require_once ABSPATH . '/wp-admin/includes/file.php';
			require_once ABSPATH . 'wp-admin/includes/image.php';
			require_once ABSPATH . 'wp-admin/includes/media.php';
		}

		$tmp = download_url($url);
		if (is_wp_error($tmp)) {
			// $file_array is not built yet at this point; there is nothing to clean up.
			return $tmp;
		}
		$file_array = array(
			'name' => basename(wp_parse_url($url, PHP_URL_PATH)),
			'tmp_name' => $tmp,
		);

		// Use Fileinfo (recommended)
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$mime = finfo_file($finfo, $tmp);
		finfo_close($finfo);

		// Only allow specific safe image types
		$allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

		if (in_array($mime, $allowed, true)) {
			$id = media_handle_sideload($file_array);
			if (is_wp_error($id)) {
				wp_delete_file($file_array['tmp_name']);
				return $id;
			}
			update_post_meta($id, '_smart_blocks_image_hash', sha1($url));
			$value = wp_get_attachment_url($id);
			return $value;
		}

		// Not an image we accept; do not leave the download behind.
		wp_delete_file($tmp);

		return false;
	}
}

new Smart_blocks_Template_Library();