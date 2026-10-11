<?php
defined('ABSPATH') || die;
/*
  Plugin Name:       Smart Blocks - WordPress Gutenberg Blocks
  Description:       Collection of advanced blocks to be used with WordPress Gutenberg Pagebuilder
  Version:           2.9
  Author:            HashThemes
  Author URI:        http://hashthemes.com
  License:           GPLv2 or later
  License URI:       https://www.gnu.org/licenses/gpl-2.0.html
  Requires at least: 6.6
  Requires PHP:      7.4
  Domain Path:       /languages
  Text Domain:       smart-blocks
 */

define('SMART_BLOCKS_FILE', __FILE__);
define('SMART_BLOCKS_PATH', plugin_dir_path(SMART_BLOCKS_FILE));
define('SMART_BLOCKS_URL', plugins_url('/', SMART_BLOCKS_FILE));
define('SMART_BLOCKS_BASENAME', plugin_basename(SMART_BLOCKS_FILE));
define('SMART_BLOCKS_VERSION', '2.9');

if (!class_exists('Smart_Blocks')) {

    class Smart_Blocks {

        /**
         * Version of the plugin's stored data.
         *
         * Bump this when install() needs to run again on existing sites.
         */
        const DB_VERSION = '2';

        /**
         * Screen id of the plugin settings page, set once the menu is registered.
         *
         * @var string
         */
        private string $settings_screen = '';

        private static ?Smart_Blocks $instance = NULL;

        public static function get_instance() {
            // If the single instance hasn't been set, set it now.
            if (NULL === self::$instance) {
                self::$instance = new self;
            }
            return self::$instance;
        }

        public function __construct() {
            add_action('init', array($this, 'load_textdomain'));
            add_action('init', array($this, 'registerPostMeta'));
            add_action('init', array($this, 'add_page_templates_in_post_types'), 999);

            add_action('enqueue_block_editor_assets', array($this, 'block_localization'));

            // Initialize Blocks
            add_action('init', array($this, 'create_block_init'), 1000);

            // Load necessary files.
            add_action('plugins_loaded', array($this, 'init'));

            // Add new Category for blocks
            add_filter('block_categories_all', array($this, 'register_category'), 10, 2);

            // Group Smart Blocks layouts in the inserter's Patterns tab.
            add_action('init', array($this, 'register_pattern_categories'), 15);

            // Add custom fields for post types
            add_action('rest_api_init', array($this, 'register_custom_fields'));

            // Allow more orderBy values for posts
            add_filter('rest_post_collection_params', array($this, 'post_query_vars'));

            // Review Notification
            add_action('admin_notices', array($this, 'admin_notice_content'));
            add_action('admin_init', array($this, 'welcome_init'));
            add_action('admin_enqueue_scripts', array($this, 'add_admin_scripts'));

            add_action('enqueue_block_editor_assets', array($this, 'block_editor_assets'));

            if (is_admin()) {
                add_filter('admin_body_class', array($this, 'add_editor_body_class'));
            }

            add_action('admin_menu', array($this, 'register_admin_menu'));

            add_action('wp_ajax_sb_settings_save', [$this, 'sb_settings_save']);
            add_action('wp_ajax_sb_blocks_save', [$this, 'sb_blocks_save']);

            add_action('wp_head', array($this, 'sb_block_styles'));
            add_action('admin_head', array($this, 'sb_block_styles'));

            add_action('init', array($this, 'maybe_run_one_time_setup'));

            add_filter('plugin_action_links_' . SMART_BLOCKS_BASENAME, array($this, 'add_settings_link'));
        }

        /**
         * Loads the plugin's bundled translations.
         *
         * Without this the languages folder shipped with the plugin was never
         * read, so only translations installed into WP_LANG_DIR applied.
         */
        public function load_textdomain() {
            load_plugin_textdomain('smart-blocks', false, dirname(SMART_BLOCKS_BASENAME) . '/languages');
        }

        /**
         * Runs install and upgrade routines when the stored version is stale.
         *
         * The version option is autoloaded, so the common case is a single
         * in-memory comparison rather than any write.
         */
        public function maybe_run_one_time_setup() {
            if (self::DB_VERSION === get_option('sb_db_version')) {
                return;
            }

            self::install();
        }

        /**
         * Creates or updates the plugin's stored data.
         *
         * Idempotent: safe to run on activation and on every version bump.
         *
         * @return void
         */
        public static function install() {
            if (!function_exists('smart_blocks_get_all_blocks_list')) {
                require_once SMART_BLOCKS_PATH . 'inc/helper-functions.php';
            }

            // First install: every block starts enabled. On existing sites the
            // stored selection is left alone.
            if (!get_option('sb_setup_done')) {
                update_option('sb_blocks', array_keys(smart_blocks_get_all_blocks_list()));
                update_option('sb_setup_done', true);
            }

            self::migrate_block_slugs();

            if (!get_option('smart_blocks_first_activation')) {
                update_option('smart_blocks_first_activation', time());
            }

            update_option('sb_db_version', self::DB_VERSION);
        }

        /**
         * Repairs enabled-block slugs that were stored under a misspelled key.
         *
         * "news-moduel-three" never matched the registered "news-module-three"
         * block, so the block was missing from the inserter on existing sites.
         *
         * @return void
         */
        private static function migrate_block_slugs() {
            $blocks = get_option('sb_blocks');

            if (!is_array($blocks)) {
                return;
            }

            $renamed = array('news-moduel-three' => 'news-module-three');
            $changed = false;

            foreach ($blocks as $index => $slug) {
                if (isset($renamed[$slug])) {
                    $blocks[$index] = $renamed[$slug];
                    $changed = true;
                }
            }

            if ($changed) {
                update_option('sb_blocks', array_values(array_unique($blocks)));
            }
        }

        /**
         * Prints the site-wide custom properties used by the layout blocks.
         */
        public function sb_block_styles() {
            $settings = get_option('sb_general_settings');
            $width = is_array($settings) && isset($settings['default_section_width']) ? absint($settings['default_section_width']) : 0;

            if (!$width) {
                return;
            }

            printf('<style id="smart-blocks-inline-css">body{--sb-columns-width:%dpx;}</style>' . "\n", $width);
        }

        public function sb_blocks_save() {
            $this->verify_settings_request();

            $submitted = isset($_POST['blocks']) ? wp_unslash($_POST['blocks']) : array();
            $submitted = is_array($submitted) ? $submitted : array();

            // Only persist slugs the plugin actually knows about, so the option
            // can never be used to smuggle arbitrary strings into the editor.
            $known = array_keys(smart_blocks_get_all_blocks_list());
            $blocks = array_values(array_intersect($known, array_map('sanitize_key', $submitted)));

            update_option('sb_blocks', $blocks);

            wp_send_json_success(esc_html__('Saved successfully!', 'smart-blocks'));
        }

        public function sb_settings_save() {
            $this->verify_settings_request();

            $submitted = isset($_POST['data']) ? wp_unslash($_POST['data']) : array();
            $settings = array();

            if (is_array($submitted)) {
                foreach ($submitted as $field) {
                    if (!is_array($field) || !isset($field['name'])) {
                        continue;
                    }

                    $name = sanitize_key($field['name']);

                    if ('' === $name) {
                        continue;
                    }

                    $settings[$name] = $this->sanitize_setting($name, isset($field['value']) ? $field['value'] : '');
                }
            }

            update_option('sb_general_settings', $settings);

            wp_send_json_success(esc_html__('Saved successfully!', 'smart-blocks'));
        }

        /**
         * Rejects settings requests that are not a nonce-backed admin action.
         */
        private function verify_settings_request() {
            if (!current_user_can('manage_options')) {
                wp_send_json_error(esc_html__('You are not allowed to perform this action.', 'smart-blocks'), 403);
            }

            check_ajax_referer('sb_ajax_nonce', 'sb_nonce');
        }

        /**
         * Sanitizes one settings field according to what it holds.
         *
         * @param string $name  Sanitized field name.
         * @param mixed  $value Raw submitted value.
         * @return mixed
         */
        private function sanitize_setting($name, $value) {
            if (is_array($value)) {
                return array_map('sanitize_text_field', $value);
            }

            $value = (string) $value;

            // Rich fields keep their markup; everything else is plain text.
            $html_fields = apply_filters('sb_settings_html_fields', array('maintenance_text'));

            if (in_array($name, $html_fields, true)) {
                return wp_kses_post($value);
            }

            if (false !== strpos($name, 'color')) {
                return sanitize_text_field($value);
            }

            if (false !== strpos($name, 'image') || false !== strpos($name, 'logo') || false !== strpos($name, 'url')) {
                return esc_url_raw($value);
            }

            return sanitize_text_field($value);
        }

        // Enqueue localization data for our blocks.
        public function block_localization() {
            if (function_exists('wp_set_script_translations')) {
                wp_set_script_translations('sb-blocks', 'smart-blocks', SMART_BLOCKS_PATH . 'languages');
            }
        }

        public function init() {
            require SMART_BLOCKS_PATH . 'inc/helper-functions.php';
            require SMART_BLOCKS_PATH . 'inc/blocks/blocks-manager.php';
            require SMART_BLOCKS_PATH . 'inc/blocks/blocks-render.php';
            require SMART_BLOCKS_PATH . 'inc/generate-css.php';
            require SMART_BLOCKS_PATH . 'inc/blocks/attributes.php';
            // require SMART_BLOCKS_PATH . 'inc/template-library.php';
        }

        public function create_block_init() {
            // Register the shared styles and scripts first. The Pro plugin
            // depends on these handles, so they must exist even when the
            // editor bundle below is missing.
            wp_register_style('owl-carousel', SMART_BLOCKS_URL . 'inc/assets/css/owl.carousel.css', array(), SMART_BLOCKS_VERSION);
            wp_register_style('materialdesignicons', SMART_BLOCKS_URL . 'inc/assets/css/materialdesignicons.css', array(), SMART_BLOCKS_VERSION);
            wp_register_style('smart-blocks-icons', SMART_BLOCKS_URL . 'inc/assets/css/smart-blocks-icons.css', array(), SMART_BLOCKS_VERSION);
            wp_register_style('sb-style', SMART_BLOCKS_URL . 'inc/assets/css/sb-style.css', array('materialdesignicons', 'owl-carousel'), SMART_BLOCKS_VERSION);
            wp_register_style('sb-block-editor', SMART_BLOCKS_URL . 'inc/assets/css/editor.css', array('smart-blocks-icons'), SMART_BLOCKS_VERSION);

            wp_register_script('owl-carousel', SMART_BLOCKS_URL . 'inc/assets/js/owl.carousel.js', array('jquery'), SMART_BLOCKS_VERSION, true);
            wp_register_script('sb-script', SMART_BLOCKS_URL . 'inc/assets/js/sb-script.js', array('jquery', 'owl-carousel'), SMART_BLOCKS_VERSION, true);

            // The editor bundle is generated at build time; without it there is
            // no editor UI to register blocks against.
            $asset_path = SMART_BLOCKS_PATH . 'build/index.asset.php';

            if (!file_exists($asset_path)) {
                return;
            }

            $asset_file = include $asset_path;

            if (!is_array($asset_file) || !isset($asset_file['dependencies'], $asset_file['version'])) {
                return;
            }

            wp_register_script('sb-blocks', SMART_BLOCKS_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version'], true);
            wp_localize_script('sb-blocks', 'smartblocks', array(
                'userRoles' => $this->get_user_roles(),
                // Always an array: the editor calls .includes() on this, and a
                // false value there stops every block from registering.
                'activeBlocks' => smart_blocks_get_active_blocks()
            ));

            $block_render = new Smart_Blocks_Blocks_Render();
            $blocks = array(
                // 'template-import',
                'columns',
                'column',
                'container'
            );

            foreach ($blocks as $block) {
                register_block_type(
                    'smart-blocks/' . $block, array(
                        // These three were left on the default API version 1
                        // while every other block here is version 2, even
                        // though their edit() already renders its own wrapper
                        // through useBlockProps. Under version 1 the editor
                        // adds a second wrapper of its own, so the block came
                        // out nested one level deeper than it saves.
                        'api_version' => 2,
                        // The singular editor_script/style/script arguments are
                        // soft deprecated in favour of the *_handles arrays.
                        'editor_script_handles' => array('sb-blocks'),
                        'editor_style_handles' => array('sb-block-editor'),
                        'style_handles' => array('sb-style'),
                        'script_handles' => array('sb-script'),
                    )
                );
            }

            $news_blocks = array(
                'news-module-one',
                'news-module-two',
                'news-module-three',
                'news-module-four',
                'news-module-five',
                'news-module-six',
                'news-module-seven',
                'news-module-eight',
                'news-module-nine',
                'news-module-ten',
                'news-module-eleven',
                'news-module-twelve',
                'news-module-thirteen',
                'news-module-fourteen',
                'news-module-fifteen',
                'tile-module-one',
                'tile-module-two',
                'tile-module-three',
                'carousel-module-one',
                'single-news-one',
                'single-news-two',
                'ticker-module'
            );

            foreach ($news_blocks as $block) {
                $module = str_replace('-', '_', $block);
                $attributes_callback = 'smart_blocks_attributes_' . $module;

                register_block_type(
                    'smart-blocks/' . $block, array(
                        'api_version' => 2,
                        'editor_script_handles' => array('sb-blocks'),
                        'editor_style_handles' => array('sb-block-editor'),
                        'style_handles' => array('sb-style'),
                        'script_handles' => array('sb-script'),
                        'attributes' => function_exists($attributes_callback) ? call_user_func($attributes_callback) : array(),
                        'render_callback' => array($block_render, 'smart_blocks_render_' . $module)
                    )
                );
            }
        }

        /**
         * Returns the site's roles for the editor's condition controls.
         *
         * @return array
         */
        private function get_user_roles() {
            $roles = function_exists('wp_roles') ? wp_roles() : null;

            return ($roles && !empty($roles->roles)) ? $roles->roles : array();
        }


        /**
         * Gutenberg block category.
         *
         * @param array  $categories Block categories.
         * @param object $post Post object.
         */
        public function register_category($categories, $post) {
            return array_merge(
                $categories, array(
                    array(
                        'slug' => 'smart-blocks-block-modules',
                        'title' => __('SB Block Modules', 'smart-blocks')
                    ),
                    array(
                        'slug' => 'smart-blocks-magazine-modules',
                        'title' => __('SB Magazine Modules', 'smart-blocks')
                    ),
                )
            );
        }

        /**
         * Registers the block pattern categories Smart Blocks layouts use.
         *
         * Patterns are the editor's native way to offer ready made layouts:
         * they appear in the inserter's Patterns tab with a live preview,
         * search and category filters. Registering the categories here means
         * they exist whether or not the Templates add-on is installed, and any
         * theme or add-on can drop patterns into them.
         *
         * @return void
         */
        public function register_pattern_categories() {
            if (!function_exists('register_block_pattern_category')) {
                return;
            }

            $categories = apply_filters('smart_blocks_pattern_categories', array(
                'smart-blocks' => _x('Smart Blocks', 'Block pattern category', 'smart-blocks'),
                'smart-blocks-header' => _x('Smart Blocks: Headers', 'Block pattern category', 'smart-blocks'),
                'smart-blocks-hero' => _x('Smart Blocks: Hero', 'Block pattern category', 'smart-blocks'),
                'smart-blocks-news' => _x('Smart Blocks: News', 'Block pattern category', 'smart-blocks'),
                'smart-blocks-features' => _x('Smart Blocks: Features', 'Block pattern category', 'smart-blocks'),
                'smart-blocks-footer' => _x('Smart Blocks: Footers', 'Block pattern category', 'smart-blocks'),
            ));

            foreach ($categories as $slug => $label) {
                register_block_pattern_category($slug, array('label' => $label));
            }
        }

        public function register_custom_fields() {
            // POST fields
            register_rest_field(
                'post', 'relative_dates', array(
                    'get_callback' => 'smart_blocks_get_relative_dates',
                    'update_callback' => NULL,
                    'schema' => NULL,
                )
            );

            register_rest_field(
                'page', 'relative_dates', array(
                    'get_callback' => 'smart_blocks_get_relative_dates',
                    'update_callback' => NULL,
                    'schema' => NULL,
                )
            );

            // CPT fields
            foreach (smart_blocks_get_CPTs() as $cpt) {
                register_rest_field(
                    $cpt, 'relative_dates', array(
                        'get_callback' => 'smart_blocks_get_relative_dates',
                        'update_callback' => NULL,
                        'schema' => NULL,
                    )
                );
            }
        }

        public function post_query_vars($query_params) {
            $query_params['orderby']['enum'][] = 'rand';
            $query_params['orderby']['enum'][] = 'comment_count';
            return $query_params;
        }

        public function admin_notice_content() {
            if ($this->should_show_review_notice()) {
                $this->review_notice();
            }
        }

        /**
         * Whether the review request should be shown on the current screen.
         *
         * @return bool
         */
        private function should_show_review_notice() {
            if (!current_user_can('manage_options') || self::is_dismissed('review')) {
                return false;
            }

            $activated = (int) get_option('smart_blocks_first_activation');

            return $activated > 0 && time() > $activated + 15 * DAY_IN_SECONDS;
        }

        public static function is_dismissed($notice) {
            $dismissed = get_option('smart_blocks_dismissed_notices', array());

            if (!is_array($dismissed)) {
                $dismissed = array();
            }

            // Handle legacy user meta
            $dismissed_meta = get_user_meta(get_current_user_id(), 'smart_blocks_dismissed_notices', true);
            if (is_array($dismissed_meta)) {
                if (array_diff($dismissed_meta, $dismissed)) {
                    $dismissed = array_merge($dismissed, $dismissed_meta);
                    update_option('smart_blocks_dismissed_notices', $dismissed);
                }
                if (!is_multisite()) {
                    // Don't delete on multisite to avoid the notices to appear in other sites.
                    delete_user_meta(get_current_user_id(), 'smart_blocks_dismissed_notices');
                }
            }

            return in_array($notice, $dismissed, true);
        }

        public function review_notice() {
            ?>
            <div class="smart-blocks-notice notice notice-info">
                <?php $this->dismiss_button('review'); ?>
                <div class="smart-blocks-notice-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 256 256">
                        <path d="M116 5c-14.5 3.1-28.8 9.8-41.7 19.6C55 39.4 22.4 80 11 103.5c-6.4 13.2-8.3 20.6-8.2 33 0 13.2 2.8 23.9 9.7 38 11 22.5 26.6 38.5 56.2 57.9 12.1 7.9 30.3 16.8 39.3 19.2 8.4 2.2 22.5 2.2 31 0 18.6-4.9 59.2-30.9 79.6-51.1 27.3-27.1 40.2-60.3 35-90.1-6.5-37.5-37.6-78.2-73.3-95.9C158.8 3.9 136.6.6 116 5zm39.6 56.5c12 5.3 28.7 12.5 36.9 16.1 8.3 3.5 15.7 6.9 16.5 7.4 1.2.8.6 1.8-3.5 6-2.7 2.7-5.5 5-6.3 5-.8 0-15.4-6.1-32.4-13.5-28.7-12.4-31.2-13.3-33.1-12-1.2.8-10 9.3-19.5 18.8l-17.3 17.3 14.3 6.2c7.9 3.3 24.2 10.4 36.3 15.7 12.1 5.3 25.4 11 29.5 12.7 4.1 1.7 7.8 3.4 8.3 3.8.4.3-5.2 6.5-12.5 13.6s-21 20.5-30.5 29.8c-10.1 9.9-17.7 16.7-18.5 16.4-3.6-1.5-76.4-33.1-76.8-33.5-.2-.2 2.1-2.8 5.1-5.9l5.5-5.5 11.4 5c6.3 2.7 20.8 8.9 32.1 13.9l20.5 8.9 19.5-18.8c18.7-18.1 19.3-18.8 16.9-19.7-1.4-.6-15.5-6.7-31.5-13.6-15.9-7-35-15.2-42.2-18.4-7.3-3.1-13.2-6-13-6.3.6-1.4 60.3-58.9 61.3-58.9.6 0 10.9 4.3 23 9.5zM153.8 94c10 4.4 18.6 8 19.2 8 2 0 .9 1.8-4.5 6.9l-5.4 5.2-9.8-4.2c-5.4-2.3-11.2-4.8-12.8-5.5-2.9-1.2-3.3-1-7.9 3.2-2.7 2.4-5.5 4.4-6.1 4.4-1 0-12.1-4.6-13.3-5.5-.5-.4 20.4-20.5 21.4-20.5.6 0 9.2 3.6 19.2 8zm-45.4 55.1 11.1 4.9 4.9-4.9 4.9-4.9 7.1 3c3.9 1.7 7.2 3.1 7.4 3.3.5.4-19.9 20-21.2 20.3-.6.1-9.4-3.3-19.5-7.8-10-4.4-18.6-8-19.2-8-1.8 0-.8-1.5 4.3-6.7 6-6.1 4.4-6.1 20.2.8z" />
                    </svg>
                </div>

                <div class="smart-blocks-notice-content">
                    <p>
                        <?php
                        printf(
                            /* translators: %1$s is link start tag, %2$s is link end tag. */
                            esc_html__('Great to see that you have been using Smart Blocks - WordPress Gutenberg Blocks for some time. We hope you love it, and we would really appreciate it if you would %1$sgive us a 5 stars rating%2$s and spread your words to the world.', 'smart-blocks'), '<a target="_blank" href="https://wordpress.org/support/plugin/smart-blocks/reviews/?filter=5">', '</a>'
                        );
                        ?>
                    </p>
                    <a target="_blank" class="button button-primary button-large" href="https://wordpress.org/support/plugin/smart-blocks/reviews/?filter=5"><span class="dashicons dashicons-thumbs-up"></span><?php echo esc_html__('Yes, of course', 'smart-blocks') ?></a>
                    &nbsp;
                    <a class="button button-large" href="<?php echo esc_url(wp_nonce_url(add_query_arg('smart-blocks-hide-notice', 'review'), 'review', 'smart_blocks_notice_nonce')); ?>"><span class="dashicons dashicons-yes"></span><?php echo esc_html__('I have already rated', 'smart-blocks') ?></a>
                </div>
            </div>
            <?php
        }

        public function welcome_init() {
            if (isset($_GET['smart-blocks-hide-notice'], $_GET['smart_blocks_notice_nonce'])) {
                $notice = sanitize_key($_GET['smart-blocks-hide-notice']);
                check_admin_referer($notice, 'smart_blocks_notice_nonce');
                self::dismiss($notice);
                wp_safe_redirect(remove_query_arg(array('smart-blocks-hide-notice', 'smart_blocks_notice_nonce'), wp_get_referer()));
                exit;
            }
        }

        public function dismiss_button($name) {
            ?>
            <a class="notice-dismiss" href="<?php echo esc_url(wp_nonce_url(add_query_arg('smart-blocks-hide-notice', $name), $name, 'smart_blocks_notice_nonce')); ?>">
                <span class="screen-reader-text"><?php echo esc_html__('Dismiss this notice.', 'smart-blocks'); ?></span>
            </a>
            <?php
        }

        public static function dismiss($notice) {
            $dismissed = get_option('smart_blocks_dismissed_notices', array());

            if (!is_array($dismissed)) {
                $dismissed = array();
            }

            if (!in_array($notice, $dismissed, true)) {
                $dismissed[] = $notice;
                update_option('smart_blocks_dismissed_notices', array_unique($dismissed));
            }
        }

        /**
         * Loads the settings-screen assets.
         *
         * These are only useful on the plugin's own page, so they are not
         * enqueued across the rest of wp-admin.
         *
         * @param string $hook Current admin page hook suffix.
         */
        public function add_admin_scripts($hook) {
            $is_settings_screen = $this->settings_screen && $hook === $this->settings_screen;

            // The review notice can appear on any admin screen and is styled by
            // this stylesheet, so it loads slightly more widely than the rest.
            if ($is_settings_screen || $this->should_show_review_notice()) {
                wp_enqueue_style('smart-blocks-admin-style', SMART_BLOCKS_URL . 'inc/assets/css/admin-style.css', array(), SMART_BLOCKS_VERSION);
            }

            if (!$is_settings_screen) {
                return;
            }

            wp_enqueue_style('wp-color-picker');
            wp_enqueue_media();

            wp_enqueue_script('smart-blocks-admin-script', SMART_BLOCKS_URL . 'inc/assets/js/admin-script.js', array('jquery', 'wp-color-picker'), SMART_BLOCKS_VERSION, true);
            wp_localize_script('smart-blocks-admin-script', 'sb_ajax_obj', [
                'ajaxURL' => admin_url('admin-ajax.php'),
                'adminNonce' => wp_create_nonce('sb_ajax_nonce')
            ]);
            wp_enqueue_script('smart-blocks-jquery-condition', SMART_BLOCKS_URL . 'inc/assets/js/jquery-condition.js', array('jquery'), SMART_BLOCKS_VERSION, true);
        }

        public function block_editor_assets() {
            // wp_enqueue_script('sb-block-editor-assets', SMART_BLOCKS_URL . 'inc/assets/js/editor-assets.js', array(), '1.0', true);
            wp_enqueue_script('sb-editor-sidebar', SMART_BLOCKS_URL . 'inc/assets/js/editor-sidebar.js', array('wp-components', 'wp-data', 'wp-editor', 'wp-element', 'wp-i18n', 'wp-plugins'), SMART_BLOCKS_VERSION, true);
        }

        public function registerPostMeta() {
            register_post_meta('', 'sb_editor_width', array(
                'show_in_rest' => true,
                'single' => true,
                'type' => 'string',
            ));
        }

        public function add_editor_body_class($classes) {
            if (!function_exists('get_current_screen')) {
                return $classes;
            }

            $screen = get_current_screen();

            if (!$screen || 'post' !== $screen->base) {
                return $classes;
            }

            $post = get_post();

            if (!$post) {
                return $classes;
            }

            $editor_width = get_post_meta($post->ID, 'sb_editor_width', true);

            if ($editor_width) {
                $classes .= ' sb-editor-width-' . sanitize_html_class($editor_width) . ' ';
            }

            return $classes;
        }

        public function add_page_templates_in_post_types() {
            $post_types = get_post_types();

            foreach ($post_types as $post_type) {
                add_filter("theme_{$post_type}_templates", [$this, 'add_page_templates'], 10, 4);
            }
            add_filter('page_template', array($this, 'redirect_page_template'), 999);
        }

        public function add_page_templates($templates) {
            $templates['template-sb-full-width.php'] = __('Smart Blocks Full Width', 'smart-blocks');
            return $templates;
        }

        public function redirect_page_template($template) {
            $post = get_post();

            if (!$post) {
                return $template;
            }

            $page_template = get_post_meta($post->ID, '_wp_page_template', true);

            if (!$page_template || 'template-sb-full-width.php' !== basename($page_template)) {
                return $template;
            }

            if (class_exists('WC_Template_Loader')) {
                remove_action('template_include', array('WC_Template_Loader', 'template_loader'));
            }

            return SMART_BLOCKS_PATH . 'inc/page-templates/template-sb-full-width.php';
        }

        public static function is_fse_template() {
            global $_wp_current_template_content;
            if (current_theme_supports('block-templates') && $_wp_current_template_content) {
                return true;
            }
            return false;
        }

        public function register_admin_menu() {

            $this->settings_screen = add_menu_page(esc_html__('Smart Blocks Settings', 'smart-blocks'), esc_html__('Smart Blocks', 'smart-blocks'), 'manage_options', 'sb-block-settings', array($this, 'sb_blocks_settings_page_display'), 'data:image/svg+xml;base64,' . base64_encode('<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.72 213.12"><g><g><path d="M221.08 54.39c5.71-5.85 6.55-7.25 4.88-8.36-1.12-.7-11.44-5.44-23-10.33s-34.73-15.06-51.47-22.45C134.61 6 120.24 0 119.4 0 118 0 34.74 80.2 33.91 82.15c-.28.42 8 4.46 18.13 8.78s36.68 15.9 58.86 25.67 42 18.13 43.93 19c3.35 1.26 2.51 2.24-23.57 27.48l-27.2 26.22-28.59-12.45c-15.76-7-36-15.62-44.77-19.39l-15.9-7-7.67 7.67c-4.18 4.32-7.39 8-7.11 8.23.55.64 102.09 44.64 107.11 46.75 1.12.42 11.71-9.07 25.8-22.87 13.25-13 32.36-31.66 42.54-41.57s18-18.54 17.43-19a108 108 0 0 0-11.57-5.3c-5.72-2.37-24.27-10.32-41.15-17.72S100.57 89.4 89.56 84.8l-20-8.65L93.74 52c13.25-13.25 25.52-25.1 27.2-26.22 2.65-1.81 6.13-.56 46.16 16.74 23.71 10.32 44.07 18.83 45.19 18.83s5.02-3.19 8.79-6.96"></path><path d="M57.48 134.31c-7.11 7.25-8.51 9.34-6 9.34.84 0 12.83 5 26.78 11.16s26.36 11 27.2 10.88c1.81-.42 30.26-27.75 29.56-28.31-.28-.28-4.88-2.23-10.32-4.6l-9.9-4.19-6.8 6.84-6.84 6.83-15.48-6.83c-22.06-9.63-19.83-9.63-28.2-1.12M149 58.58c-14-6.14-26-11.16-26.81-11.16-1.39 0-30.54 28-29.84 28.59 1.67 1.26 17.15 7.67 18.55 7.67.83 0 4.74-2.79 8.5-6.13 6.42-5.86 7-6.14 11-4.47 2.23 1 10.32 4.47 17.85 7.67l13.67 5.86 7.53-7.25c7.53-7.11 9.07-9.63 6.28-9.63-.82 0-12.81-5.02-26.73-11.15"></path></g></g></svg>'), 99);
        }

        public function sb_blocks_settings_page_display() {
            include SMART_BLOCKS_PATH . 'inc/admin-settings-page.php';
        }

        public function get_block_field($label, $val, $icon = '', $premium = false, $category = '') {
            $active = smart_blocks_get_active_blocks();
            ?>

            <div class="sb-block-wrap <?php echo $premium ? 'sb-premium' : ''; ?>" data-main="<?php echo $premium ? 'pro' : 'free'; ?>" data-sub="<?php echo esc_attr($category); ?>">
                <span>
                    <?php
                    if ($icon) {
                        echo '<i class="' . esc_attr($icon) . '"></i>';
                    }
                    echo esc_html($label);
                    ?>
                </span>

                <div class="sb-checkbox">
                    <input type="checkbox" class="sb-block-checkbox" name="blocks" value="<?php echo esc_attr($val); ?>" <?php checked(in_array($val, $active, true)); ?>>
                    <label></label>
                </div>
            </div>

            <?php
        }

        public function add_settings_link($links) {
            $settings_link = '<a href="' . esc_url(admin_url('admin.php?page=sb-block-settings')) . '">' . esc_html__('Settings', 'smart-blocks') . '</a>';
            array_unshift($links, $settings_link);
            return $links;
        }

    }

}


/**
 * Returns instanse of the plugin class.
 *
 * @since  1.0.0
 * @return object
 */
if (!function_exists('smart_blocks')) {

    function smart_blocks() {
        return Smart_Blocks::get_instance();
    }

}

register_activation_hook(SMART_BLOCKS_FILE, array('Smart_Blocks', 'install'));

smart_blocks();
