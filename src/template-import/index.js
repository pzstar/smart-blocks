/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import { Tile1 } from '../utils/svgicons';

import { __ } from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('smart-blocks/template-import', {
    icon: <Tile1 />,
    supports: {
        "html": false
    },
    category: "smart-blocks-block-modules",
    title: __("Template Library", 'smart-blocks'),
    attributes: {
        isLibraryOpen: {
            type: 'boolean'
        }
    },
    description: __("Import Blocks and Templates Library", 'smart-blocks'),
    keywords: ["Import", "Template", "Block", "Widget", "Section", "Patterns", "Reusable", "Library", "Tools"],
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save,
});
