<?php

if (!function_exists('smart_blocks_custom_excerpt')) {

    function smart_blocks_custom_excerpt($limit) {
        if ($limit) {
            $content = get_the_content();
            $content = wp_strip_all_tags($content);
            $content = strip_shortcodes($content);
            $excerpt = mb_substr($content, 0, $limit);

            if (strlen($content) >= $limit) {
                $excerpt = $excerpt . '...';
            }

            return $excerpt;
        }
    }

}

if (!function_exists('smart_blocks_author_name')) {

    function smart_blocks_author_name($class = '') {
        return '<span class="sb-post-author ' . esc_attr($class) . '"><i class="mdi-account"></i>' . get_the_author() . '</span>';
    }

}

if (!function_exists('smart_blocks_comment_count')) {

    function smart_blocks_comment_count($class = '') {
        return '<span class="sb-post-comment ' . esc_attr($class) . '"><i class="mdi-comment-outline"></i>' . get_comments_number() . '</span>';
    }

}

if (!function_exists('smart_blocks_post_date')) {

    function smart_blocks_post_date($format = '', $class = '') {

        if ($format) {
            return '<span class="sb-post-date ' . esc_attr($class) . '"><i class="mdi-clock-time-four-outline"></i>' . get_the_date($format) . '</span>';
        } else {
            return '<span class="sb-post-date ' . esc_attr($class) . '"><i class="mdi-clock-time-four-outline"></i>' . get_the_date() . '</span>';
        }
    }

}

if (!function_exists('smart_blocks_time_ago')) {

    function smart_blocks_time_ago($class = '') {
        return '<span class="sb-post-date ' . esc_attr($class) . '"><i class="mdi-clock-time-four-outline"></i>' . human_time_diff(get_the_time('U'), current_time('timestamp')) . ' ' . __('ago', 'smart-blocks') . '</span>';
    }

}

if (!function_exists('smart_blocks_get_the_primary_category')) {

    function smart_blocks_get_the_primary_category($class = "post-categories", $link_class = '') {
        $post_categories = smart_blocks_get_post_primary_category(get_the_ID());
        $content = '';

        if (!empty($post_categories)) {
            $category_obj = $post_categories['primary_category'];
            $category_link = get_category_link($category_obj->term_id);
            $content .= '<ul class="' . esc_attr($class) . '">';
            $content .= '<li><a class="sb-primary-cat sb-category-' . esc_attr($category_obj->term_id) . ' ' . esc_attr($link_class) . '" href="' . esc_url($category_link) . '">' . esc_html($category_obj->name) . '</a></li>';
            $content .= '</ul>';
        }
        return $content;
    }

}

if (!function_exists('smart_blocks_get_post_primary_category')) {

    function smart_blocks_get_post_primary_category($post_id, $term = 'category', $return_all_categories = false) {
        $return = array();

        if (class_exists('WPSEO_Primary_Term')) {
            // Show Primary category by Yoast if it is enabled & set
            $wpseo_primary_term = new WPSEO_Primary_Term($term, $post_id);
            $primary_term = get_term($wpseo_primary_term->get_primary_term());

            if (!is_wp_error($primary_term)) {
                $return['primary_category'] = $primary_term;
            }
        }

        if (empty($return['primary_category']) || $return_all_categories) {
            $categories_list = get_the_terms($post_id, $term);

            if (empty($return['primary_category']) && !empty($categories_list)) {
                $return['primary_category'] = $categories_list[0];  //get the first category
            }

            if ($return_all_categories) {
                $return['all_categories'] = array();

                if (!empty($categories_list)) {
                    foreach ($categories_list as &$category) {
                        $return['all_categories'][] = $category->term_id;
                    }
                }
            }
        }

        return $return;
    }

}

if (!function_exists('smart_blocks_css_strip_whitespace')) {

    function smart_blocks_css_strip_whitespace($css) {
        $replace = array(
            "#/\*.*?\*/#s" => "", // Strip C style comments.
            "#\s\s+#" => " ", // Strip excess whitespace.
        );
        $search = array_keys($replace);
        $css = preg_replace($search, $replace, $css);

        $replace = array(
            ": " => ":",
            "; " => ";",
            " {" => "{",
            " }" => "}",
            ", " => ",",
            "{ " => "{",
            ";}" => "}", // Strip optional semicolons.
            ",\n" => ",", // Don't wrap multiple selectors.
            "\n}" => "}", // Don't wrap closing braces.
            "} " => "}\n", // Put each rule on it's own line.
        );
        $search = array_keys($replace);
        $css = str_replace($search, $replace, $css);

        return trim($css);
    }

}

if (!function_exists('smart_blocks_is_taxonomy_assigned_to_post_type')) {

    function smart_blocks_is_taxonomy_assigned_to_post_type($post_type, $taxonomy = NULL) {
        if (is_object($post_type))
            $post_type = $post_type->post_type;

        if (empty($post_type))
            return false;

        $taxonomies = get_object_taxonomies($post_type);

        if (empty($taxonomy))
            $taxonomy = get_query_var('taxonomy');

        return in_array($taxonomy, $taxonomies);
    }

}

if (!function_exists('smart_blocks_get_CPTs')) {

    function smart_blocks_get_CPTs() {
        return get_post_types(array('_builtin' => false, 'public' => true));
    }

}

if (!function_exists('smart_blocks_get_relative_dates')) {

    function smart_blocks_get_relative_dates($post) {
        return array(
            'created' => human_time_diff(get_the_date('U', $post['id'])) . ' ' . __('ago', 'smart-blocks'),
            'modified' => human_time_diff(get_the_modified_date('U', $post['id'])) . ' ' . __('ago', 'smart-blocks')
        );
    }

}

if (!function_exists('smart_blocks_get_font_class')) {

    function smart_blocks_get_font_class($family = '', $weight = '', $textTransform = '', $textDecoration = '') {
        $retrun_classes = array();

        if (strtolower($family) != 'inherit') {
            $retrun_classes[] = 'sb-ff';
        }
        if (strtolower($weight) != 'inherit') {
            $retrun_classes[] = 'sb-fw';
        }
        if (strtolower($textTransform) != 'inherit') {
            $retrun_classes[] = 'sb-tt';
        }
        if (strtolower($textDecoration) != 'inherit') {
            $retrun_classes[] = 'sb-td';
        }
        return implode(' ', $retrun_classes);
    }

}


if (!function_exists('smart_blocks_get_all_blocks_list')) {
    function smart_blocks_get_all_blocks_list() {
        $all_wid = apply_filters('eead_all_widgets_list', array(
            'carousel-module-one' => array(
                'name' => 'Carousel Module',
                'icon' => 'eead-icons-accordion',
                'category' => 'essential'
            ),
            'container' => array(
                'name' => 'Container',
                'icon' => 'eead-icons-button',
                'category' => 'creative'
            ),
            'news-module-eight' => array(
                'name' => 'News Module Eight',
                'icon' => 'eead-icons-advanced-heading',
                'category' => 'creative'
            ),
            'news-module-eleven' => array(
                'name' => 'News Module Eleven',
                'icon' => 'eead-icons-icon-text',
                'category' => 'essential'
            ),
            'news-moduel-fifteen' => array(
                'name' => 'News Module Fifteen',
                'icon' => 'eead-icons-map',
                'category' => 'essential'
            ),
            'news-module-five' => array(
                'name' => 'News Module Five',
                'icon' => 'eead-icons-animated-heading',
                'category' => 'creative'
            ),
            'news-module-four' => array(
                'name' => 'News Module Four',
                'icon' => 'eead-icons-business-hours',
                'category' => 'listing'
            ),
            'news-module-fourteen' => array(
                'name' => 'News Module Fourteen',
                'icon' => 'eead-icons-circular-bar',
                'category' => 'essential'
            ),
            'news-module-nine' => array(
                'name' => 'News Module Nine',
                'icon' => 'eead-icons-count-down',
                'category' => 'essential'
            ),
            'news-module-one' => array(
                'name' => 'News Module One',
                'icon' => 'eead-icons-counter',
                'category' => 'essential'
            ),
            'news-module-seven' => array(
                'name' => 'News Module Seven',
                'icon' => 'eead-icons-drop-box',
                'category' => 'essential'
            ),
            'news-module-six' => array(
                'name' => 'News Module Six',
                'icon' => 'eead-icons-dual-buttons',
                'category' => 'creative'
            ),
            'news-module-ten' => array(
                'name' => 'News Module Ten',
                'icon' => 'eead-icons-dual-heading',
                'category' => 'creative'
            ),
            'news-module-thirteen' => array(
                'name' => 'News Module Thirteen',
                'icon' => 'eead-icons-feature-list',
                'category' => 'listing'
            ),
            'news-moduel-three' => array(
                'name' => 'News Module Three',
                'icon' => 'eead-icons-flip-box',
                'category' => 'creative'
            ),
            'news-module-twelve' => array(
                'name' => 'News Module Twelve',
                'icon' => 'eead-icons-horizontal-tab',
                'category' => 'advanced'
            ),
            'news-module-two' => array(
                'name' => 'News Module Two',
                'icon' => 'eead-icons-horizontal-timeline',
                'category' => 'advanced'
            ),
            'section' => array(
                'name' => 'Section',
                'icon' => 'eead-icons-hot-spot',
                'category' => 'creative'
            ),
            'single-news-one' => array(
                'name' => 'Single News One',
                'icon' => 'eead-icons-icon-list',
                'category' => 'listing'
            ),
            'template-import' => array(
                'name' => 'Template Import',
                'icon' => 'eead-icons-image-accordion',
                'category' => 'listing'
            ),
            'ticker-module' => array(
                'name' => 'Ticker Module',
                'icon' => 'eead-icons-compare',
                'category' => 'advanced'
            ),
            'tile-module-one' => array(
                'name' => 'Tile Module One',
                'icon' => 'eead-icons-image-gallery',
                'category' => 'advanced'
            ),
            'tile-module-three' => array(
                'name' => 'Tile Module Three',
                'icon' => 'eead-icons-link',
                'category' => 'essential'
            ),
            'tile-module-two' => array(
                'name' => 'Tile Module Two',
                'icon' => 'eead-icons-logo-carousel',
                'category' => 'essential'
            )
        ));
        ksort($all_wid);
        return $all_wid;
    }
}