/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';
import attributes from './attributes.js';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import {Column} from '../../../utils/svgicons';

import {__} from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('smart-blocks/column', {
    icon: <Column />,
    supports: {
        "inserter": false,
        "reusable": false,
        "html": false
    },
    category: "smart-blocks-block-modules",
    attributes,
    title: esc_html__("Column", 'smart-blocks'),
    description: esc_html__("A single column within a columns block.", 'smart-blocks'),
    parent: ['smart-blocks/columns'],
    keywords: ['column'],
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save: Save,
});
