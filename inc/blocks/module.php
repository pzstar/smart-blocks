<?php

/**
 * Base class shared by every Smart Blocks post module.
 *
 * The modules all build the same WP_Query from the same block attributes and
 * differ only in how many posts they show and how they lay them out, so the
 * query building lives here rather than being repeated in each module.
 *
 * @package Smart_Blocks
 */

namespace Smart_Blocks;

defined('ABSPATH') || die;

abstract class Smart_Blocks_Module {

    /**
     * Attributes for the block instance being rendered.
     *
     * @var array
     */
    public array $attributes = array();

    /**
     * How many posts this layout shows.
     *
     * Modules with a fixed layout set a number. Modules that let the user
     * choose set null, which falls back to the `noOfPosts` attribute.
     *
     * @var int|null
     */
    protected ?int $posts_per_page = 3;

    /**
     * Renders the block.
     *
     * @param array $attributes Block attributes.
     * @return string
     */
    abstract public function render($attributes);

    /**
     * Stores the attributes for the current render pass.
     *
     * @param array $attributes Block attributes.
     * @return void
     */
    protected function set_attributes($attributes): void {
        $this->attributes = is_array($attributes) ? $attributes : array();
    }

    /**
     * Reads one attribute, falling back when it is missing or empty.
     *
     * @param string $key     Attribute name.
     * @param mixed  $default Value to use when unset, null or an empty string.
     * @return mixed
     */
    public function get_attr(string $key, $default = null) {
        if (!isset($this->attributes[$key]) || '' === $this->attributes[$key]) {
            return $default;
        }

        return $this->attributes[$key];
    }

    /**
     * Resolves how many posts to query for this render.
     *
     * @return int
     */
    protected function get_posts_per_page(): int {
        if (null === $this->posts_per_page) {
            return max(1, (int) $this->get_attr('noOfPosts', 3));
        }

        return max(1, $this->posts_per_page);
    }

    /**
     * Builds the WP_Query arguments for the module.
     *
     * @return array
     */
    public function query_args(): array {
        $post_type = $this->get_attr('postsPostType', 'post');

        $args = array(
            'post_type' => $post_type,
            'orderby' => $this->get_attr('orderBy', 'date'),
            'order' => $this->get_attr('order', 'desc'),
            'ignore_sticky_posts' => 1,
            'post_status' => 'publish',
            'posts_per_page' => $this->get_posts_per_page(),
            'post__not_in' => (array) $this->get_attr('excludePosts', array()),
            'tax_query' => $this->get_tax_query($post_type),
        );

        $offset = $this->get_attr('offset');

        if (null !== $offset) {
            $args['offset'] = (int) $offset;
        }

        /**
         * Filters the query arguments for a Smart Blocks module.
         *
         * @param array                $args   Query arguments.
         * @param Smart_Blocks_Module  $module The module instance.
         */
        return apply_filters('smart_blocks_module_query_args', $args, $this);
    }

    /**
     * Builds the taxonomy clauses from the selected terms.
     *
     * @param string $post_type Post type being queried.
     * @return array
     */
    protected function get_tax_query(string $post_type): array {
        $tax_query = array();
        $categories = $this->get_attr('categories');

        if (!is_array($categories)) {
            return $tax_query;
        }

        foreach ($categories as $taxonomy => $terms) {
            if (empty($terms) || !smart_blocks_is_taxonomy_assigned_to_post_type($post_type, $taxonomy)) {
                continue;
            }

            $tax_query[] = array(
                'taxonomy' => $taxonomy,
                'field' => 'term_id',
                'terms' => $terms,
            );
        }

        return $tax_query;
    }

    /**
     * Runs the module's query.
     *
     * @return \WP_Query
     */
    protected function get_query(): \WP_Query {
        return new \WP_Query($this->query_args());
    }

}
