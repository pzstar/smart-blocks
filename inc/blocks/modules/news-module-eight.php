<?php

namespace Smart_Blocks;

class Smart_Blocks_News_Module_Eight {

    public $attributes = array();

    /** Render Layout */
    public function render($attributes) {
        $this->attributes = $attributes;
        $featured_post_image_size = $this->attributes['featuredImageSize'];
        $side_post_image_size = $this->attributes['sideImageSize'];
        $content_rendered = '';
        $content_rendered .= '<div id="' . esc_attr($this->attributes['id']) . '">';
        $content_rendered .= '<div ' . get_block_wrapper_attributes(['class' => 'sb-news-module-eight wp-block-smart-blocks']) . '>';
        $content_rendered .= $this->render_header();

        $content_rendered .= '<div class="sb-news-module-eight-wrap">';
        $args = $this->query_args();
        $query = new \WP_Query($args);
        while ($query->have_posts()):
            $query->the_post();
            $index = $query->current_post + 1;
            $last = $query->post_count;

            if ($index == 1) {
                $content_rendered .= '<div class="sb-big-block">';
                $content_rendered .= '<div class="sb-post-item sb-clearfix">';
                $content_rendered .= '<div class="sb-post-thumb">';
                $content_rendered .= '<a href="' . get_the_permalink() . '">';
                $content_rendered .= '<div class="sb-thumb-container">';
                if (has_post_thumbnail()) {
                    $image = wp_get_attachment_image_src(get_post_thumbnail_id(), $featured_post_image_size);
                    $content_rendered .= '<img alt="' . the_title_attribute(array('echo' => false)) . '" src="' . esc_url($image[0]) . '">';
                }
                $content_rendered .= '</div>';
                $content_rendered .= '</a>';
                if ($this->attributes['featuredPostCategory'] == 'yes') {
                    $content_rendered .= get_the_category_list();
                }
                $content_rendered .= '</div>';

                $content_rendered .= '<div class="sb-post-content">';
                $content_rendered .= '<h3 class="sb-big-title sb-post-title ' . smart_blocks_get_font_class($this->attributes['featuredTypographyFamily'], $this->attributes['featuredTypographyWeight'], $this->attributes['featuredTypographyTextTransform'], $this->attributes['featuredTypographyTextDecoration']) . '"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h3>';
                $content_rendered .= $this->get_post_meta($index);
                $content_rendered .= $this->get_post_excerpt($index);
                $content_rendered .= '</div>';
                $content_rendered .= '</div>';
                $content_rendered .= '</div>';
            } else {
                if ($index == 2) {
                    $content_rendered .= '<div class="sb-small-block">';
                    $content_rendered .= '<div class="sb-small-block-wrap">';
                }
                $content_rendered .= '<div class="sb-post-item sb-clearfix">';
                $content_rendered .= '<div class="sb-post-thumb">';
                $content_rendered .= '<a href="' . get_the_permalink() . '">';
                $content_rendered .= '<div class="sb-thumb-container">';
                if (has_post_thumbnail()) {
                    $image = wp_get_attachment_image_src(get_post_thumbnail_id(), $side_post_image_size);
                    $content_rendered .= '<img alt="' . the_title_attribute(array('echo' => false)) . '" src="' . esc_url($image[0]) . '">';
                }
                $content_rendered .= '</div>';
                $content_rendered .= '</a>';
                if ($this->attributes['sidePostCategory'] == 'yes')
                    $content_rendered .= smart_blocks_get_the_primary_category();
                $content_rendered .= '</div>';

                $content_rendered .= '<div class="sb-post-content">';
                $content_rendered .= '<h3 class="sb-post-title ' . smart_blocks_get_font_class($this->attributes['sideTypographyFamily'], $this->attributes['sideTypographyWeight'], $this->attributes['sideTypographyTextTransform'], $this->attributes['sideTypographyTextDecoration']) . '"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h3>';
                $content_rendered .= $this->get_post_meta($index);
                $content_rendered .= '</div>';
                $content_rendered .= '</div>';
                if ($index == $last) {
                    $content_rendered .= '</div>';
                    $content_rendered .= '</div>';
                }
            }
        endwhile;
        wp_reset_postdata();
        $content_rendered .= '</div>';
        $content_rendered .= '</div>';
        $content_rendered .= '</div>';
        return apply_filters('smart_blocks_news_module_eight_render', $content_rendered, $attributes);
    }

    /** Render Header */
    public function render_header() {
        $content = '';
        if (isset($this->attributes['headerTitle']) && $this->attributes['headerTitle']) {
            $content .= '<h2 class="sb-block-title ' . esc_attr($this->attributes['headerStyle']) . ' ' . smart_blocks_get_font_class($this->attributes['headerTitleTypographyFamily'], $this->attributes['headerTitleTypographyWeight'], $this->attributes['headerTitleTypographyTextTransform'], $this->attributes['headerTitleTypographyTextDecoration']) . '">';
            $content .= '<span>';
            $content .= wp_kses_post($this->attributes['headerTitle']);
            $content .= '</span>';
            $content .= '</h2>';
        }
        return $content;
    }

    /** Query Args */
    public function query_args() {

        $post_type = $args['post_type'] = $this->attributes['postsPostType'];
        $args['orderby'] = $this->attributes['orderBy'];
        $args['order'] = $this->attributes['order'];
        $args['ignore_sticky_posts'] = 1;
        $args['post_status'] = 'publish';
        if (isset($this->attributes['offset']))
            $args['offset'] = $this->attributes['offset'];
        $args['posts_per_page'] = 5;
        $args['post__not_in'] = isset($this->attributes['excludePosts']) && $this->attributes['excludePosts'] ? $this->attributes['excludePosts'] : [];

        $args['tax_query'] = [];

        if (isset($this->attributes['categories']) && $this->attributes['categories']) {
            foreach ($this->attributes['categories'] as $taxonomy => $terms) {
                if (smart_blocks_is_taxonomy_assigned_to_post_type($this->attributes['postsPostType'], $taxonomy) && !empty($terms)) {
                    $args['tax_query'][] = [
                        'taxonomy' => $taxonomy,
                        'field' => 'term_id',
                        'terms' => $terms,
                    ];
                }
            }
        }
        return $args;
    }

    /** Get Post Excerpt */
    public function get_post_excerpt($count) {
        $excerpt_length = $count == 1 ? $this->attributes['featuredExcerptLength'] : 0;
        if ($excerpt_length) {
            return '<div class="sb-excerpt">' . smart_blocks_custom_excerpt($excerpt_length) . '</div>';
        }
    }

    /** Get Post Metas */
    public function get_post_meta($count) {
        $content = '';
        $post_author = $count == 1 ? $this->attributes['featuredPostAuthor'] : $this->attributes['sidePostAuthor'];
        $post_date = $count == 1 ? $this->attributes['featuredPostDate'] : $this->attributes['sidePostDate'];
        $post_comment = $count == 1 ? $this->attributes['featuredPostComments'] : $this->attributes['sidePostComments'];

        if ($post_author == 'yes' || $post_date == 'yes' || $post_comment == 'yes') {
            $content .= '<div class="sb-post-meta">';
            if ($post_author == 'yes') {
                $content .= smart_blocks_author_name();
            }

            if ($post_date == 'yes') {
                $date_format = $this->attributes['dateFormat'];

                if ($date_format == 'relative_format') {
                    $content .= smart_blocks_time_ago();
                } else if ($date_format == 'default') {
                    $content .= smart_blocks_post_date();
                } else if ($date_format == 'custom') {
                    $format = $this->attributes['customDateFormat'];
                    $content .= smart_blocks_post_date($format);
                }
            }

            if ($post_comment == 'yes') {
                $content .= smart_blocks_comment_count();
            }
            $content .= '</div>';
        }
        return $content;
    }

}
