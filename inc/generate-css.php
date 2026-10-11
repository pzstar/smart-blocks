<?php

/**
 * Collects and prints the per-block inline CSS and Google Font requests.
 *
 * Block styles are authored in the editor and stored in the `sbStyle` attribute
 * of each block. On the front end we walk the block tree, collect those styles
 * keyed by block id (so a block rendered twice only contributes once) and print
 * the result as a single inline stylesheet.
 *
 * @package Smart_Blocks
 */
defined('ABSPATH') || die;

if (!class_exists('Smart_Blocks_CSS')) {

    final class Smart_Blocks_CSS {

        /**
         * Singleton instance.
         *
         * @var Smart_Blocks_CSS|null
         */
        private static $instance = null;

        /**
         * Collected CSS, keyed by block id so duplicates collapse.
         *
         * @var array
         */
        private static $block_css = array();

        /**
         * Google fonts to request, keyed by family name.
         *
         * @var array
         */
        private static $gfonts = array();

        public static function get_instance() {
            if (null === self::$instance) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct() {
            add_action('wp', array($this, 'setup_collection'));
            add_action('wp_footer', array($this, 'print_stylesheet'), 11);
        }

        /**
         * Chooses how block styles are harvested for the current request.
         *
         * Block themes render everything through `render_block`, so we can hook
         * there and pick up templates, template parts and synced patterns too.
         * Classic themes never run that filter for content outside the loop, so
         * we parse the queried posts up front instead.
         */
        public function setup_collection() {
            if (is_admin()) {
                return;
            }

            add_filter('widget_block_content', array($this, 'collect_widget_css'), 8);

            if (current_theme_supports('block-templates')) {
                add_filter('render_block', array($this, 'collect_rendered_block_css'), 11, 2);
                return;
            }

            $this->collect_queried_posts_css();
        }

        /**
         * Harvests styles from a block as it is rendered (block themes).
         *
         * @param string $block_content Rendered block markup.
         * @param array  $block         Parsed block.
         * @return string Unmodified markup.
         */
        public function collect_rendered_block_css($block_content, $block) {
            if (is_array($block)) {
                $this->collect_block($block);
            }
            return $block_content;
        }

        /**
         * Harvests styles from block widgets.
         *
         * @param string $text Widget content.
         * @return string Unmodified content.
         */
        public function collect_widget_css($text) {
            if (is_admin() || !is_string($text) || '' === $text) {
                return $text;
            }

            foreach ($this->parse($text) as $block) {
                if (is_array($block)) {
                    $this->collect_block($block);
                }
            }

            return $text;
        }

        /**
         * Harvests styles from the posts in the main query (classic themes).
         */
        public function collect_queried_posts_css() {
            if (is_singular() || is_404()) {
                $this->collect_post_css(get_post());
                return;
            }

            if (is_archive() || is_home() || is_search()) {
                global $wp_query;

                if (!$wp_query instanceof WP_Query || empty($wp_query->posts)) {
                    return;
                }

                foreach ($wp_query->posts as $queried_post) {
                    $this->collect_post_css($queried_post);
                }
            }
        }

        /**
         * Harvests styles from a single post's content.
         *
         * @param WP_Post|null $post Post to scan.
         */
        public function collect_post_css($post) {
            if (!$post instanceof WP_Post || empty($post->post_content) || !has_blocks($post->post_content)) {
                return;
            }

            foreach ($this->parse($post->post_content) as $block) {
                if (is_array($block)) {
                    $this->collect_block($block);
                }
            }
        }

        /**
         * Recursively collects the style and font requirements of a block.
         *
         * This is the single place that understands the attribute shape, so the
         * rendered-block, widget and parsed-content paths all stay in step.
         *
         * @param array $block Parsed block.
         */
        private function collect_block($block) {
            $attrs = isset($block['attrs']) && is_array($block['attrs']) ? $block['attrs'] : array();

            if ($attrs) {
                $this->collect_fonts($attrs);

                // `sbStyle` holds the compiled CSS string for this block instance.
                if (isset($attrs['id']) && isset($attrs['sbStyle']) && is_string($attrs['sbStyle']) && '' !== $attrs['sbStyle']) {
                    self::$block_css[$attrs['id']] = $attrs['sbStyle'];
                }
            }

            if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
                foreach ($block['innerBlocks'] as $inner_block) {
                    if (is_array($inner_block)) {
                        $this->collect_block($inner_block);
                    }
                }
            }
        }

        /**
         * Queues the Google fonts referenced by a block's typography attributes.
         *
         * Typography controls store a `<prefix>Family` attribute alongside a
         * matching `<prefix>Weight`, so the weight is looked up by name.
         *
         * @param array $attrs Block attributes.
         */
        private function collect_fonts($attrs) {
            foreach ($attrs as $name => $value) {
                if (!is_string($value) || '' === $value || false === strpos($name, 'Family')) {
                    continue;
                }

                if ('inherit' === strtolower($value)) {
                    continue;
                }

                $weight_key = str_replace('Family', 'Weight', $name);
                $weight = isset($attrs[$weight_key]) && $attrs[$weight_key] ? $attrs[$weight_key] : 400;

                if (is_string($weight)) {
                    $weight = str_replace('italic', 'i', $weight);
                }

                self::add_google_font($value, $weight);
            }
        }

        /**
         * Registers a family/variant pair for the Google Fonts request.
         *
         * @param string      $font_family Family name.
         * @param string|int  $font_weight Variant, e.g. 400 or "700i".
         * @param string|null $font_subset Optional subset.
         */
        public static function add_google_font($font_family, $font_weight, $font_subset = null) {
            if (!$font_family || 'inherit' === strtolower($font_family)) {
                return;
            }

            if (!isset(self::$gfonts[$font_family])) {
                self::$gfonts[$font_family] = array(
                    'fontfamily' => $font_family,
                    'fontvariants' => array(),
                    'fontsubsets' => array(),
                );
            }

            if ($font_weight && 'inherit' !== strtolower((string) $font_weight)
                    && !in_array($font_weight, self::$gfonts[$font_family]['fontvariants'], true)) {
                self::$gfonts[$font_family]['fontvariants'][] = $font_weight;
            }

            if ($font_subset && !in_array($font_subset, self::$gfonts[$font_family]['fontsubsets'], true)) {
                self::$gfonts[$font_family]['fontsubsets'][] = $font_subset;
            }
        }

        /**
         * Prints the collected block CSS and enqueues the font stylesheet.
         */
        public function print_stylesheet() {
            $this->print_block_css();
            $this->enqueue_fonts();
        }

        private function print_block_css() {
            if (empty(self::$block_css)) {
                return;
            }

            $css = smart_blocks_css_strip_whitespace(implode('', self::$block_css));

            // The CSS is authored in the editor and stored in the block markup.
            // It is printed inside a <style> element, so nothing in it may be
            // able to close that element.
            $css = preg_replace('#</?\s*style[^>]*>?#i', '', $css);

            if ('' === $css) {
                return;
            }

            wp_register_style('sb-style-frontend', false, array(), SMART_BLOCKS_VERSION);
            wp_enqueue_style('sb-style-frontend');
            wp_add_inline_style('sb-style-frontend', $css);
        }

        private function enqueue_fonts() {
            $fonts_url = $this->get_google_fonts_url();

            if (!$fonts_url) {
                return;
            }

            $settings = get_option('sb_general_settings');
            $load_locally = is_array($settings) && isset($settings['load_fonts_locally']) ? $settings['load_fonts_locally'] : '';

            if ('on' === $load_locally) {
                require_once SMART_BLOCKS_PATH . 'inc/wptt-webfont-loader.php';

                if (function_exists('wptt_get_webfont_url')) {
                    $local_url = wptt_get_webfont_url($fonts_url);

                    if ($local_url) {
                        $fonts_url = $local_url;
                    }
                }
            }

            wp_enqueue_style('sb-fonts-frontend', $fonts_url, array(), null);
        }

        /**
         * Builds the Google Fonts request URL for the collected families.
         *
         * @return string Empty string when no fonts were collected.
         */
        public function get_google_fonts_url() {
            if (empty(self::$gfonts)) {
                return '';
            }

            $families = array();
            $subsets = array();

            foreach (self::$gfonts as $gfont) {
                $family = $gfont['fontfamily'];

                if (!empty($gfont['fontvariants'])) {
                    $family .= ':' . implode(',', $gfont['fontvariants']);
                }

                $families[] = $family;

                foreach ($gfont['fontsubsets'] as $subset) {
                    if (!in_array($subset, $subsets, true)) {
                        $subsets[] = $subset;
                    }
                }
            }

            $query = array('family' => implode('|', $families));

            if ($subsets) {
                $query['subset'] = implode(',', $subsets);
            }

            return add_query_arg(array_map('rawurlencode', $query), 'https://fonts.googleapis.com/css');
        }

        /**
         * Parses block markup into a block tree.
         *
         * @param string $content Post or widget content.
         * @return array
         */
        public function parse($content) {
            if (!is_string($content) || '' === $content) {
                return array();
            }

            $blocks = parse_blocks($content);

            return is_array($blocks) ? $blocks : array();
        }

    }

    Smart_Blocks_CSS::get_instance();
}
