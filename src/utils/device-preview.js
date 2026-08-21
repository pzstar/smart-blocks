/**
 * Reads the editor's current device preview, across WordPress versions.
 *
 * The device preview state moved from core/edit-post to core/editor in
 * WordPress 6.5, and __experimentalGetPreviewDeviceType was removed from
 * core/edit-post afterwards. Every responsive control here called that
 * experimental selector directly and silently fell back to a plugin local
 * value, so on a current WordPress the controls stopped following the
 * editor's own device switcher.
 *
 * @param {Function} select The select function from useSelect.
 * @return {string} 'Desktop', 'Tablet' or 'Mobile'.
 */
export const getPreviewDeviceType = (select) => {
    const editor = select('core/editor');

    if (editor && typeof editor.getDeviceType === 'function') {
        return editor.getDeviceType();
    }

    const editPost = select('core/edit-post');

    if (editPost && typeof editPost.__experimentalGetPreviewDeviceType === 'function') {
        return editPost.__experimentalGetPreviewDeviceType();
    }

    const local = select('smart-blocks/data');

    return local && typeof local.getView === 'function' ? local.getView() : 'Desktop';
};

/**
 * Returns the matching setter for the device preview.
 *
 * @param {Function} dispatch  The dispatch function.
 * @param {Function} updateView Fallback that writes to this plugin's store.
 * @return {Function} Setter taking 'Desktop' | 'Tablet' | 'Mobile'.
 */
export const getPreviewDeviceSetter = (dispatch, updateView) => {
    const editor = dispatch('core/editor');

    if (editor && typeof editor.setDeviceType === 'function') {
        return editor.setDeviceType;
    }

    const editPost = dispatch('core/edit-post');

    if (editPost && typeof editPost.__experimentalSetPreviewDeviceType === 'function') {
        return editPost.__experimentalSetPreviewDeviceType;
    }

    return updateView;
};

/**
 * True when the editor exposes a device preview at all.
 *
 * @param {Function} select The select function from useSelect.
 * @return {boolean}
 */
export const isPreviewDeviceAvailable = (select) => {
    const editor = select('core/editor');

    if (editor && typeof editor.getDeviceType === 'function') {
        return true;
    }

    const editPost = select('core/edit-post');

    return !!(editPost && typeof editPost.__experimentalGetPreviewDeviceType === 'function');
};
