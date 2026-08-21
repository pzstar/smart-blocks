<?php

/**
 * Loads and instantiates block module classes on demand.
 *
 * @package Smart_Blocks
 */
defined('ABSPATH') || die;

class Smart_Blocks_Blocks_Manager {

    /**
     * Module instances, keyed by module name.
     *
     * Modules are stateless renderers, so one instance per request is enough.
     *
     * @var array
     */
    private static $instances = array();

    /**
     * Returns the renderer for a module, loading its file on first use.
     *
     * @param string $block_type Module name in underscore form, e.g. "news_module_one".
     * @return object|null Null when the module cannot be resolved.
     */
    public static function get_instance($block_type) {
        if (!is_string($block_type) || '' === $block_type) {
            return null;
        }

        // Only ever build a path from a safe slug; the name reaches us from a
        // block callback and must never be able to escape the modules folder.
        if (!preg_match('/^[a-z0-9_]+$/', $block_type)) {
            return null;
        }

        if (isset(self::$instances[$block_type])) {
            return self::$instances[$block_type];
        }

        $file = SMART_BLOCKS_PATH . 'inc/blocks/modules/' . str_replace('_', '-', $block_type) . '.php';

        if (!file_exists($file)) {
            return null;
        }

        require_once SMART_BLOCKS_PATH . 'inc/blocks/module.php';
        require_once $file;

        $block_class = '\Smart_Blocks\\' . self::get_class_name($block_type);

        if (!class_exists($block_class)) {
            return null;
        }

        self::$instances[$block_type] = new $block_class();

        return self::$instances[$block_type];
    }

    /**
     * Builds the class name for a module.
     *
     * @param string $template_id Module name in underscore form.
     * @return string
     */
    public static function get_class_name($template_id) {
        return 'Smart_Blocks_' . ucwords($template_id, '_');
    }

}
