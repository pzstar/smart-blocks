<?php

if (!function_exists('smart_blocks_custom_excerpt')) {

    /**
     * Trims the current post's content to a character limit.
     *
     * @param int $limit Maximum number of characters.
     * @return string
     */
    function smart_blocks_custom_excerpt($limit) {
        $limit = (int) $limit;

        if ($limit < 1) {
            return '';
        }

        $content = strip_shortcodes(get_the_content());
        $content = wp_strip_all_tags($content);
        $content = trim(preg_replace('/\s+/u', ' ', $content));

        // Measure in characters, not bytes, so the ellipsis decision matches
        // what mb_substr() actually trimmed on multibyte content.
        if (mb_strlen($content) <= $limit) {
            return $content;
        }

        return mb_substr($content, 0, $limit) . '...';
    }

}

if (!function_exists('smart_blocks_author_name')) {

    function smart_blocks_author_name($class = '') {
        return '<span class="sb-post-author ' . esc_attr($class) . '"><i class="mdi-account"></i>' . esc_html(get_the_author()) . '</span>';
    }

}

if (!function_exists('smart_blocks_comment_count')) {

    function smart_blocks_comment_count($class = '') {
        return '<span class="sb-post-comment ' . esc_attr($class) . '"><i class="mdi-comment-outline"></i>' . esc_html(get_comments_number()) . '</span>';
    }

}

if (!function_exists('smart_blocks_post_date')) {

    function smart_blocks_post_date($format = '', $class = '') {
        $date = $format ? get_the_date($format) : get_the_date();

        return '<span class="sb-post-date ' . esc_attr($class) . '"><i class="mdi-clock-time-four-outline"></i>' . esc_html($date) . '</span>';
    }

}

if (!function_exists('smart_blocks_time_ago')) {

    function smart_blocks_time_ago($class = '') {
        /* translators: %s is a human readable time difference, e.g. "2 hours". */
        $ago = sprintf(__('%s ago', 'smart-blocks'), human_time_diff(get_the_time('U'), time()));

        return '<span class="sb-post-date ' . esc_attr($class) . '"><i class="mdi-clock-time-four-outline"></i>' . esc_html($ago) . '</span>';
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
        if (is_object($post_type)) {
            $post_type = $post_type->post_type;
        }

        if (empty($post_type)) {
            return false;
        }

        if (empty($taxonomy)) {
            $taxonomy = get_query_var('taxonomy');
        }

        if (empty($taxonomy)) {
            return false;
        }

        return in_array($taxonomy, get_object_taxonomies($post_type), true);
    }

}

if (!function_exists('smart_blocks_get_CPTs')) {

    function smart_blocks_get_CPTs() {
        return get_post_types(array('_builtin' => false, 'public' => true));
    }

}

if (!function_exists('smart_blocks_get_relative_dates')) {

    function smart_blocks_get_relative_dates($post) {
        $post_id = is_array($post) && isset($post['id']) ? (int) $post['id'] : 0;

        if (!$post_id) {
            return array('created' => '', 'modified' => '');
        }

        /* translators: %s is a human readable time difference, e.g. "2 hours". */
        $format = __('%s ago', 'smart-blocks');

        return array(
            'created' => sprintf($format, human_time_diff((int) get_the_date('U', $post_id))),
            'modified' => sprintf($format, human_time_diff((int) get_the_modified_date('U', $post_id))),
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
        $all_wid = apply_filters('sb_all_blocks_list', array(
            'section' => array(
                'name' => 'Columns',
                'category' => 'creative',
                'icon' => ''
            ),
            'container' => array(
                'name' => 'Container',
                'category' => 'creative',
                'icon' => ''
            ),
            'news-module-one' => array(
                'name' => 'News Module One',
                'category' => 'essential',
                'icon' => ''
            ),
            'news-module-two' => array(
                'name' => 'News Module Two',
                'category' => 'advanced',
                'icon' => ''
            ),
            'news-module-three' => array(
                'name' => 'News Module Three',
                'category' => 'creative',
                'icon' => ''
            ),
            'news-module-four' => array(
                'name' => 'News Module Four',
                'category' => 'listing',
                'icon' => ''
            ),
            'news-module-five' => array(
                'name' => 'News Module Five',
                'category' => 'creative',
                'icon' => ''
            ),
            'news-module-six' => array(
                'name' => 'News Module Six',
                'category' => 'creative',
                'icon' => ''
            ),
            'news-module-seven' => array(
                'name' => 'News Module Seven',
                'category' => 'essential',
                'icon' => ''
            ),
            'news-module-eight' => array(
                'name' => 'News Module Eight',
                'category' => 'creative',
                'icon' => ''
            ),
            'news-module-nine' => array(
                'name' => 'News Module Nine',
                'category' => 'essential',
                'icon' => ''
            ),
            'news-module-ten' => array(
                'name' => 'News Module Ten',
                'category' => 'creative',
                'icon' => ''
            ),
            'news-module-eleven' => array(
                'name' => 'News Module Eleven',
                'category' => 'essential',
                'icon' => ''
            ),
            'news-module-twelve' => array(
                'name' => 'News Module Twelve',
                'category' => 'advanced',
                'icon' => ''
            ),
            'news-module-thirteen' => array(
                'name' => 'News Module Thirteen',
                'category' => 'listing',
                'icon' => ''
            ),
            'news-module-fourteen' => array(
                'name' => 'News Module Fourteen',
                'category' => 'essential',
                'icon' => ''
            ),
            'news-module-fifteen' => array(
                'name' => 'News Module Fifteen',
                'category' => 'essential',
                'icon' => ''
            ),
            'tile-module-one' => array(
                'name' => 'Tile Module One',
                'category' => 'advanced',
                'icon' => ''
            ),
            'tile-module-two' => array(
                'name' => 'Tile Module Two',
                'category' => 'essential',
                'icon' => ''
            ),
            'tile-module-three' => array(
                'name' => 'Tile Module Three',
                'category' => 'essential',
                'icon' => ''
            ),
            'carousel-module-one' => array(
                'name' => 'Carousel Module',
                'category' => 'essential',
                'icon' => ''
            ),
            'ticker-module' => array(
                'name' => 'Ticker Module',
                'category' => 'advanced',
                'icon' => ''
            ),
            'single-news-one' => array(
                'name' => 'Single News One',
                'category' => 'listing',
                'icon' => ''
            ),
            'single-news-two' => array(
                'name' => 'Single News Two',
                'category' => 'listing',
                'icon' => ''
            ),
            // 'template-import' => array(
            //     'name' => 'Template Import',
            //     'icon' => 'sb-icons-image-accordion',
            //     'category' => 'listing'
            // ),
        ));
        return $all_wid;
    }
}



if (!function_exists('smart_blocks_get_active_blocks')) {

    /**
     * Returns the slugs of the blocks the site has enabled.
     *
     * Falls back to every known block so a missing or corrupt option can never
     * leave the editor with nothing to register.
     *
     * @return array
     */
    function smart_blocks_get_active_blocks() {
        $active = get_option('sb_blocks');

        if (!is_array($active)) {
            return array_keys(smart_blocks_get_all_blocks_list());
        }

        return array_values(array_filter(array_map('strval', $active)));
    }

}

if (!function_exists('sb_get_all_blocks_desc')) {

function sb_get_all_blocks_desc() {
    return array(
        'section' => esc_html__('Place content side by side inside a Columns block', 'smart-blocks'),
        'container' => esc_html__('Group blocks together for layout or styling', 'smart-blocks'),
        'news-module-one' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-two' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-three' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-four' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-five' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-six' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-seven' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-eight' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-nine' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-ten' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-eleven' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-twelve' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-thirteen' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-fourteen' => esc_html__('Displays News Posts', 'smart-blocks'),
        'news-module-fifteen' => esc_html__('Displays News Posts', 'smart-blocks'),
        'ticker-module' => esc_html__('Displays News Posts', 'smart-blocks'),
        'tile-module-one' => esc_html__('Displays News Posts', 'smart-blocks'),
        'tile-module-two' => esc_html__('Displays News Posts', 'smart-blocks'),
        'tile-module-three' => esc_html__('Displays News Posts', 'smart-blocks'),
        'single-news-one' => esc_html__('Displays News Posts', 'smart-blocks'),
        'single-news-two' => esc_html__('Displays News Posts', 'smart-blocks'),
        'carousel-module-one' => esc_html__('Displays News Posts', 'smart-blocks'),
    );
}

}