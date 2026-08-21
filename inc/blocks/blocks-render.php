<?php

/**
 * Render callbacks for the dynamic Smart Blocks.
 *
 * Every dynamic block resolves to a module class that exposes a `render()`
 * method, so the callbacks only differ by module name. Rather than repeat the
 * same three lines per block, `__call()` dispatches
 * `smart_blocks_render_<module>` to the matching module.
 *
 * @package Smart_Blocks
 */
defined('ABSPATH') || die;

class Smart_Blocks_Blocks_Render {

    /**
     * Prefix shared by every render callback registered with register_block_type().
     */
    const CALLBACK_PREFIX = 'smart_blocks_render_';

    /**
     * Modules that may be rendered, as an allow list.
     *
     * Keeps `__call()` from turning an arbitrary method name into a file
     * include, and documents the set of dynamic blocks in one place.
     *
     * @var array
     */
    private static $modules = array(
        'news_module_one',
        'news_module_two',
        'news_module_three',
        'news_module_four',
        'news_module_five',
        'news_module_six',
        'news_module_seven',
        'news_module_eight',
        'news_module_nine',
        'news_module_ten',
        'news_module_eleven',
        'news_module_twelve',
        'news_module_thirteen',
        'news_module_fourteen',
        'news_module_fifteen',
        'tile_module_one',
        'tile_module_two',
        'tile_module_three',
        'carousel_module_one',
        'single_news_one',
        'single_news_two',
        'ticker_module',
    );

    /**
     * Dispatches `smart_blocks_render_<module>()` calls to the module.
     *
     * @param string $name      Called method name.
     * @param array  $arguments Callback arguments; the first is the attributes array.
     * @return string Rendered markup, or an empty string when unknown.
     */
    public function __call($name, $arguments) {
        if (0 !== strpos($name, self::CALLBACK_PREFIX)) {
            return '';
        }

        $module = substr($name, strlen(self::CALLBACK_PREFIX));
        $attributes = isset($arguments[0]) && is_array($arguments[0]) ? $arguments[0] : array();

        return self::render($module, $attributes);
    }

    /**
     * Reports the callbacks handled by `__call()` so `is_callable()` agrees.
     *
     * @param string $name Method name.
     * @return bool
     */
    public static function has_callback($name) {
        if (0 !== strpos($name, self::CALLBACK_PREFIX)) {
            return false;
        }

        return in_array(substr($name, strlen(self::CALLBACK_PREFIX)), self::$modules, true);
    }

    /**
     * Renders a single module.
     *
     * @param string $module     Module name in underscore form.
     * @param array  $attributes Block attributes.
     * @return string
     */
    public static function render($module, $attributes) {
        if (!in_array($module, self::$modules, true)) {
            return '';
        }

        $block = Smart_Blocks_Blocks_Manager::get_instance($module);

        if (!$block || !method_exists($block, 'render')) {
            return '';
        }

        $output = $block->render($attributes);

        return is_string($output) ? wp_kses_post($output) : '';
    }

    /**
     * Returns the modules this class can render.
     *
     * @return array
     */
    public static function get_modules() {
        return self::$modules;
    }

}
