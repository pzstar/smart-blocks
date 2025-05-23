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
import {Container} from '../../utils/svgicons';

import {__} from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
smartblocks.activeBlocks.includes('container') && registerBlockType('smart-blocks/container', {
    icon: <Container />,
    supports: {
        "align": ['wide', 'full'],
        "html": false
    },
    category: "smart-blocks-block-modules",
    attributes,
    title: __("Container", 'smart-blocks'),
    description: __("Display container wrapper for elements", 'smart-blocks'),
    keywords: ["section", "column", "row", "container"],
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save: Save,
});
