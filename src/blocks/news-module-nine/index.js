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
import {News9} from '../../utils/svgicons';

import {__} from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
smartblocks.activeBlocks.includes('news-module-nine') && registerBlockType('smart-blocks/news-module-nine', {
	icon: <News9 />,
	supports: {
		html: false
	},
	category: "smart-blocks-magazine-modules",
	title: __("News Module 9", 'smart-blocks'),
	description: __("Smart Blocks News Modules", 'smart-blocks'),
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
