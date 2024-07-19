/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes.js';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import { Tile1 } from '../../../utils/svgicons';

import { __ } from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('smart-blocks/columns', {
    icon: <Tile1 />,
    supports: {
        "align": ['wide', 'full'],
        "html": false
    },
    category: "smart-blocks-block-modules",
    attributes,
    title: __("Section", 'smart-blocks'),
    description: __("Add a Section block that displays content in multiple columns, then add whatever content blocks you’d like", 'smart-blocks'),
    keywords: ["section", "column"],
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save: Save,
});
