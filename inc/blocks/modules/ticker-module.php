<?php

namespace Smart_Blocks;

class Smart_Blocks_Ticker_Module extends Smart_Blocks_Module {

    protected ?int $posts_per_page = null;

    /** Render Layout */
    public function render($attributes) {
        $this->attributes = $attributes;
        $content_rendered = '';

        $ticker_pause = $this->attributes['pause'];

        $parameters = array(
            'pause' => intval($ticker_pause),
            'autoplay' => $this->attributes['autoplay'] == 'yes' ? true : false,
        );

        $parameters_json = wp_json_encode($parameters);


        $args = $this->query_args();
        $query = new \WP_Query($args);
        $content_rendered .= '<div id="' . esc_attr($this->attributes['id']) . '">';
        if ($query->have_posts()):
            $content_rendered .= '<div ' . get_block_wrapper_attributes(['class' => 'wp-block-smart-blocks']) . '>';
            $content_rendered .= '<div class="sb-ticker">';
            $content_rendered .= '<span class="sb-ticker-title">';
            $ticker_title = isset($this->attributes['tickerTitle']) ? $this->attributes['tickerTitle'] : NULL;
            if ($ticker_title) {
                $content_rendered .= esc_html($ticker_title);
            }
            $content_rendered .= '</span>';
            $content_rendered .= '<div class="sb-ticker-posts"><div class="owl-carousel" data-params="' . esc_attr($parameters_json) . '">';
            while ($query->have_posts()):
                $query->the_post();
                $content_rendered .= '<a href="' . esc_url(get_permalink()) . '">' . esc_html(get_the_title()) . '</a>';
            endwhile;
            wp_reset_postdata();
            $content_rendered .= '</div></div>';
            $content_rendered .= '</div>';
            $content_rendered .= '</div>';
        endif;
        $content_rendered .= '</div>';
        return apply_filters('smart_blocks_ticker_module_render', $content_rendered, $attributes);
    }


}
