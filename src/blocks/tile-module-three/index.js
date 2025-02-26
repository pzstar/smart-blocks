/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import {Tile3} from '../../utils/svgicons';

import {__} from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('smart-blocks/tile-module-three', {
    icon: <Tile3 />,
    supports: {
        "html": false
    },
    category: "smart-blocks-magazine-modules",
    title: esc_html__("Tile Module 3", 'smart-blocks'),
    description: esc_html__("Smart Blocks News Modules", 'smart-blocks'),
    keywords: ["posts"],
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save,
});
