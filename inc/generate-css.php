<?php
/**
 * HHGB CSS.
 *
 * @package HHGB
 */
if (!class_exists('Smart_Blocks_CSS')) {

    final class Smart_Blocks_CSS {

        private static $instance;
        public static $stylesheet;
        public static $gfonts = array();

        public static function get_instance() {
            if (!isset(self::$instance)) {
                self::$instance = new self;
            }
            return self::$instance;
        }

        public function __construct() {
            // Simple use `render_block` in FSE themes to enqueue assets.
            add_action('wp', function () {
                if (current_theme_supports('block-templates')) {
                    // Parse all blocks.
                    add_action('render_block', array($this, 'render_block_asset'), 11, 2);

                    // Parse blocks manually from content and custom locations in Classic themes.
                } else {
                    add_filter('widget_block_content', array($this, 'addFrontendWidgetAssets'), 8);
                    $this->generate_stylesheet();
                }
            });
            add_action('wp_footer', array($this, 'print_stylesheet'), 11);
        }

        public function render_block_asset($block_content, $block) {
            $block_css_arr = [];
            $block_css = '';

            if (is_array($block)) {
                $block_css_arr = array_merge($block_css_arr, self::get_inner_block_css_arr($block));
                $blockAttrs = $block['attrs'];

                foreach ($blockAttrs as $attrs => $value) {
                    $family = '';
                    $weight = '';
                    if (str_contains($attrs, 'Family')) {
                        $family = $value;
                        $weight = $blockAttrs[str_replace('Family', 'Weight', $attrs)];
                    }
                    if ($family && $family != 'inherit') {
                        self::blocks_google_font($family, $weight ? str_replace('italic', 'i', $weight) : 400);
                    }
                }

                // Get CSS for the Block.
                if (isset($blockAttrs['sbStyle'])) {
                    $block_css_arr[$blockAttrs['id']] = is_array($blockAttrs['sbStyle']) ? '' : $blockAttrs['sbStyle'];
                }
            }

            foreach ($block_css_arr as $val) {
                $block_css .= $val;
            }
            self::$stylesheet .= $block_css;
            return $block_content;
        }

        public function addFrontendWidgetAssets($text) {
            if (is_admin()) {
                return $text;
            }

            if (isset($text)) {
                $blocks = $this->parse($text);
                if (!is_array($blocks) || empty($blocks)) {
                    return $text;
                }
                self::$stylesheet .= $this->get_stylesheet($blocks);
            }

            return $text;
        }

        public function print_stylesheet() {

            if (is_null(self::$stylesheet) || '' === self::$stylesheet) {
                return;
            }

            wp_register_style('sb-style-frontend', false, array(), SMART_BLOCKS_VERSION);
            wp_enqueue_style('sb-style-frontend');
            wp_add_inline_style('sb-style-frontend', smart_blocks_css_strip_whitespace(self::$stylesheet));

            $frontend_gfonts = $this->frontend_gfonts();
            $sb_general_settings = get_option('sb_general_settings');
            $load_fonts_locally = isset($sb_general_settings['load_fonts_locally']) && $sb_general_settings['load_fonts_locally'] ? $sb_general_settings['load_fonts_locally'] : '';

            if ($frontend_gfonts && $load_font_locally == 'on') {
                require_once UWCC_PATH . 'inc/wptt-webfont-loader.php';
                $frontend_gfonts = wptt_get_webfont_url($frontend_gfonts);
            }
            wp_enqueue_style('sb-fonts-frontend', $frontend_gfonts, array(), NULL);
        }

        public function frontend_gfonts() {
            if (empty(self::$gfonts)) {
                return;
            }
            $link = '';
            $subsets = array();

            foreach (self::$gfonts as $key => $gfont_values) {
                if (!empty($link)) {
                    $link .= '%7C'; // Append a new font to the string.
                }
                $link .= $gfont_values['fontfamily'];
                if (!empty($gfont_values['fontvariants'])) {
                    $link .= ':';
                    $link .= implode(',', $gfont_values['fontvariants']);
                }

                if (!empty($gfont_values['fontsubsets'])) {
                    foreach ($gfont_values['fontsubsets'] as $subset) {
                        if (!in_array($subset, $subsets, true)) {
                            array_push($subsets, $subset);
                        }
                    }
                }
            }

            if (!empty($subsets)) {
                $link .= '&amp;subset=' . implode(',', $subsets);
            }

            return 'https://fonts.googleapis.com/css?family=' . esc_attr(str_replace('|', '%7C', $link));
        }

        public static function blocks_google_font($font_family, $font_weight, $font_subset = NULL) {
            if (strtolower($font_family) != 'inherit') {

                if (!array_key_exists($font_family, self::$gfonts)) {
                    $add_font = array(
                        'fontfamily' => $font_family,
                        'fontvariants' => (isset($font_weight) && !empty($font_weight) ? array($font_weight) : array()),
                        'fontsubsets' => (isset($font_subset) && !empty($font_subset) ? array($font_subset) : array()),
                    );
                    self::$gfonts[$font_family] = $add_font;

                } else {
                    if (isset($font_weight) && ($font_weight != 'inherit') && !empty($font_weight)) {
                        if (!in_array($font_weight, self::$gfonts[$font_family]['fontvariants'], true)) {
                            array_push(self::$gfonts[$font_family]['fontvariants'], $font_weight);
                        }
                    }
                    if (isset($font_subset) && !empty($font_subset)) {
                        if (!in_array($font_subset, self::$gfonts[$font_family]['fontsubsets'], true)) {
                            array_push(self::$gfonts[$font_family]['fontsubsets'], $font_subset);
                        }
                    }
                }
            }
        }

        public function generate_stylesheet() {
            $this_post = array();

            if (is_single() || is_page() || is_404()) {
                global $post;
                $this_post = $post;
                $this->_generate_stylesheet($this_post);
                if (!is_object($post)) {
                    return;
                }

            } elseif (is_archive() || is_home() || is_search()) {
                global $wp_query;

                foreach ($wp_query as $post) {
                    $this->_generate_stylesheet($post);
                }
            }
        }

        public function _generate_stylesheet($this_post) {
            if (!is_object($this_post) || !isset($this_post->ID)) {
                return;
            }

            if (has_blocks($this_post->ID)) {
                if (isset($this_post->post_content)) {
                    $blocks = $this->parse($this_post->post_content);
                    if (!is_array($blocks) || empty($blocks)) {
                        return;
                    }

                    self::$stylesheet .= $this->get_stylesheet($blocks);
                }
            }
        }

        /**
         * Parse Guten Block.
         *
         * @param string $content the content string.
         * @since 1.1.0
         */
        public function parse($content) {
            global $wp_version;
            return (version_compare($wp_version, '5', '>=')) ? parse_blocks($content) : gutenberg_parse_blocks($content);
        }

        /**
         * Generates stylesheet for reusable blocks.
         *
         * @param array $blocks Blocks array.
         * @since 1.1.0
         */
        public function get_stylesheet($blocks) {
            $block_css_arr = [];
            $block_css = '';
            foreach ($blocks as $i => $block) {
                if (is_array($block)) {
                    $block_css_arr = array_merge($block_css_arr, self::get_inner_block_css_arr($block));
                    $blockAttrs = $block['attrs'];
                    foreach ($blockAttrs as $attrs => $value) {
                        $family = '';
                        $weight = '';
                        if (str_contains($attrs, 'Family')) {
                            $family = $value;
                            $weight = $blockAttrs[str_replace('Family', 'Weight', $attrs)];
                        }
                        if ($family && $family != 'inherit') {
                            self::blocks_google_font($family, $weight ? str_replace('italic', 'i', $weight) : 400);
                        }
                    }
                    // Get CSS for the Block.
                    if (isset($blockAttrs['sbStyle'])) {
                        $block_css_arr[$blockAttrs['id']] = is_array($blockAttrs['sbStyle']) ? '' : $blockAttrs['sbStyle'];
                    }
                }
            }

            foreach ($block_css_arr as $val) {
                $block_css .= $val;
            }
            return $block_css;
        }


        public function get_inner_block_css_arr($block) {
            $block_css_arr = [];
            $blockAttrs = $block['attrs'];
            foreach ($blockAttrs as $attrs => $value) {
                $family = '';
                $weight = '';
                if (str_contains($attrs, 'Family')) {
                    $family = $value;
                    $weight = $blockAttrs[str_replace('Family', 'Weight', $attrs)];
                }
                if ($family && $family != 'inherit') {
                    self::blocks_google_font($family, $weight ? str_replace('italic', 'i', $weight) : 400);
                }
            }

            // Get CSS for the Block.
            if (isset($blockAttrs['sbStyle'])) {
                $block_css_arr[$blockAttrs['id']] = is_array($blockAttrs['sbStyle']) ? '' : $blockAttrs['sbStyle'];
            }

            if (!empty($block['innerBlocks'])) {
                foreach ($block['innerBlocks'] as $innerblock) {
                    $block_css_arr = array_merge($block_css_arr, self::get_inner_block_css_arr($innerblock));
                }
            }
            return $block_css_arr;
        }

    }

    Smart_Blocks_CSS::get_instance();
}