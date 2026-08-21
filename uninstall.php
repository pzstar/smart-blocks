<?php

/**
 * Removes the data Smart Blocks stores when the plugin is deleted.
 *
 * Only the plugin's own options and post meta are touched. Post content is
 * left alone: blocks stay in the content and render again if the plugin is
 * reinstalled.
 *
 * @package Smart_Blocks
 */
// Only ever run as WordPress's uninstall routine.
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

/**
 * Options written by the plugin.
 *
 * The Pro add-on shares `sb_blocks` and `sb_general_settings`, so those are
 * only removed when Pro is not installed alongside it.
 */
function smart_blocks_uninstall_options(): array {
    $options = array(
        'sb_setup_done',
        'sb_db_version',
        'sb_blocks_slug_migrated',
        'smart_blocks_first_activation',
        'smart_blocks_dismissed_notices',
    );

    if (!file_exists(WP_PLUGIN_DIR . '/smart-blocks-pro/smart-blocks-pro.php')) {
        $options[] = 'sb_blocks';
        $options[] = 'sb_general_settings';
    }

    return $options;
}

/**
 * Deletes the plugin's data for a single site.
 */
function smart_blocks_uninstall_site(): void {
    global $wpdb;

    foreach (smart_blocks_uninstall_options() as $option) {
        delete_option($option);
    }

    // Per-post editor width preference.
    $wpdb->delete($wpdb->postmeta, array('meta_key' => 'sb_editor_width'));

    // Legacy per-user notice dismissals.
    $wpdb->delete($wpdb->usermeta, array('meta_key' => 'smart_blocks_dismissed_notices'));
}

if (is_multisite()) {
    $site_ids = get_sites(array('fields' => 'ids', 'number' => 0));

    foreach ($site_ids as $site_id) {
        switch_to_blog($site_id);
        smart_blocks_uninstall_site();
        restore_current_blog();
    }
} else {
    smart_blocks_uninstall_site();
}
