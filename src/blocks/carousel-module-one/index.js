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
import {Carousel1} from '../../utils/svgicons';

import {__} from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('smart-blocks/carousel-module-one', {
	icon: <Carousel1 />,
	supports: {
		html: false
	},
	category: "smart-blocks-magazine-modules",
	title: __("Carousel Module", 'smart-blocks'),
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
