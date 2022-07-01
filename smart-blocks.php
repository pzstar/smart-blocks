<?php

defined('ABSPATH') || die;
/*
  Plugin Name:       Smart Blocks - Wordpress Gutenberg Blocks
  Description:       Collection of advanced blocks to be used with WordPress Gutenberg Pagebuilder
  Version:           1.0.0
  Author:            HashThemes
  Author URI:        http://hashthemes.com
  License:           GPLv2 or later
  License URI:       https://www.gnu.org/licenses/gpl-2.0.html
  Domain Path:       /languages
  Text Domain:       smart-blocks
 */

define('Smart_Blocks_FILE', __FILE__);
define('Smart_Blocks_PATH', plugin_dir_path(Smart_Blocks_FILE));
define('Smart_Blocks_URL', plugins_url('/', Smart_Blocks_FILE));
define('Smart_Blocks_VERSION', '1.0');

if (!class_exists('Smart_Blocks')) {

    class Smart_Blocks {

        private static $instance = null;

        public static function get_instance() {
            // If the single instance hasn't been set, set it now.
            if (self::$instance == null) {
                self::$instance = new self;
            }
            return self::$instance;
        }

        public function __construct() {

            // Load translation files
            add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
            add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );

            // Initialize Blocks
            add_action('init', array($this, 'sb_create_block_init'));

            // Load necessary files.
            add_action('plugins_loaded', array($this, 'init'));

            // Add new Category for blocks
            add_filter('block_categories_all', array($this, 'register_category'), 10, 2);

            // Add custom fields for post types
            add_action('rest_api_init', array($this, 'register_custom_fields'));

            // Allow more orderBy values for posts
            add_filter('rest_post_collection_params', array($this, 'post_query_vars'));
        }

        public function load_textdomain() {
            load_plugin_textdomain('smart-blocks', false, Smart_Blocks_PATH . 'languages');
        }

        // Enqueue localization data for our blocks.
        public function block_localization() {
            if ( function_exists( 'wp_set_script_translations' ) ) {
                wp_set_script_translations('sb-blocks', 'smart-blocks', Smart_Blocks_PATH . 'languages');
            }
        }

        public function init() {
            require Smart_Blocks_PATH . 'inc/helper-functions.php';
            require Smart_Blocks_PATH . 'inc/blocks/blocks-manager.php';
            require Smart_Blocks_PATH . 'inc/blocks/blocks-render.php';
            require Smart_Blocks_PATH . 'inc/generate-css.php';
            require Smart_Blocks_PATH . 'inc/blocks/attributes.php';
        }

        public function sb_create_block_init() {
            // automatically load dependencies and version
            $asset_file = include( Smart_Blocks_PATH . 'build/index.asset.php');
            wp_register_style('owl-carousel', Smart_Blocks_URL . 'inc/assets/css/owl.carousel.css', array(), Smart_Blocks_VERSION);
            wp_register_style('materialdesignicons', Smart_Blocks_URL . 'inc/assets/css/materialdesignicons.css', array(), Smart_Blocks_VERSION);
            wp_register_style('sb-style', Smart_Blocks_URL . 'inc/assets/css/sb-style.css', array('materialdesignicons', 'owl-carousel'), Smart_Blocks_VERSION);
            wp_register_style('sb-block-editor', Smart_Blocks_URL . 'inc/assets/css/editor.css', array(), Smart_Blocks_VERSION);

            wp_register_script('owl-carousel', Smart_Blocks_URL . 'inc/assets/js/owl.carousel.js', array('jquery'), Smart_Blocks_VERSION, true);
            wp_register_script('sb-script', Smart_Blocks_URL . 'inc/assets/js/sb-script.js', array('jquery', 'owl-carousel'), Smart_Blocks_VERSION, true);

            wp_register_script(
                    'sb-blocks', Smart_Blocks_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version']
            );

            $block_render = new Smart_Blocks_Blocks_Render();
            $blocks = array(
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
            foreach ($blocks as $block) {
                register_block_type('smart-blocks/' . $block, array(
                    'api_version' => 2,
                    'editor_script' => 'sb-blocks',
                    'editor_style' => 'sb-block-editor',
                    'style' => 'sb-style',
                    'attributes' => function_exists('smart_blocks_attributes_' . str_replace('-', '_', $block)) ? call_user_func('smart_blocks_attributes_' . str_replace('-', '_', $block)) : [],
                    'script' => 'sb-script',
                    'render_callback' => [$block_render, 'smart_blocks_render_' . str_replace('-', '_', $block)]
                ));
            }
        }

        /**
         * Gutenberg block category.
         *
         * @param array  $categories Block categories.
         * @param object $post Post object.
         */
        public function register_category( $categories, $post ) {
            return array_merge(
                    $categories, array(
                array(
                    'slug' => 'smart-blocks-magazine-modules',
                    'title' => esc_html__('SB Magazine Modules', 'smart-blocks')
                ),
                    )
            );
        }

        public function register_custom_fields() {
            // POST fields
            register_rest_field('post', 'relative_dates', array(
                'get_callback' => 'sb_get_relative_dates',
                'update_callback' => null,
                'schema' => null,
                    )
            );

            register_rest_field('page', 'relative_dates', array(
                'get_callback' => 'sb_get_relative_dates',
                'update_callback' => null,
                'schema' => null,
                    )
            );

            // CPT fields
            foreach (sb_get_CPTs() as $cpt) {
                register_rest_field($cpt, 'relative_dates', array(
                    'get_callback' => 'sb_get_relative_dates',
                    'update_callback' => null,
                    'schema' => null,
                        )
                );
            }
        }

        public function post_query_vars($query_params) {
            $query_params['orderby']['enum'][] = 'rand';
            $query_params['orderby']['enum'][] = 'comment_count';
            return $query_params;
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

smart_blocks();