import classnames from 'classnames';

import { times } from 'lodash';
import { useViewportMatch } from '@wordpress/compose';

import { useDispatch, useSelect } from '@wordpress/data';
import { InnerBlocks } from '@wordpress/block-editor';

import { Fragment, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import defaultAttributes from './attributes.js';
import layouts from '../layouts.js';
import Controls from './controls.js';
import Inspector from './inspector.js';
import BlockNavigatorControl from '../../components/block-navigator-control/index.js';
import {blockInit} from '../../helpers/block-utility.js';
import LayoutSelector from './layoutselector.js';

const Edit = ({attributes, setAttributes, className, clientId}) => {
	const {
		id,
        columns,
        columnsWidth,
        columnsHTMLTag,
        layout,
        layoutTablet,
        layoutMobile,
        columnsGap,
        verticalAlign,
        horizontalAlign,
        reverseColumnsTablet,
        reverseColumnsMobile,
        hideTablet,
        hideMobile,
        blockMargin,
        blockPadding,
        columnsHeight,
        columnsHeightCustom,
        columnAlignment,
        columnJustify
    } = attributes;
	const {updateBlockAttributes} = useDispatch('core/block-editor');

	const stylesCSS = `#${id} {
        ${columnsWidth.sm ? '--sb-column-width-sm: ' + columnsWidth.sm + 'px;' : ''}
        ${columnsWidth.md ? '--sb-column-width-md: ' + columnsWidth.md + 'px;' : ''}
        ${columnsWidth.lg ? '--sb-column-width-lg: ' + columnsWidth.lg + 'px;' : ''}
        ${horizontalAlign.sm ? '--sb-horizontal-align-sm: ' + horizontalAlign.sm + ';' : ''}
        ${horizontalAlign.md ? '--sb-horizontal-align-md: ' + horizontalAlign.md + ';' : ''}
        ${horizontalAlign.lg ? '--sb-horizontal-align-lg: ' + horizontalAlign.lg + ';' : ''}
        ${columnsGap.sm ? '--sb-column-gap-sm: ' + columnsGap.sm + ';' : ''}
        ${columnsGap.md ? '--sb-column-gap-md: ' + columnsGap.md + ';' : ''}
        ${columnsGap.lg ? '--sb-column-gap-lg: ' + columnsGap.lg + ';' : ''}
        ${columnAlignment.sm ? '--sb-horizontal-align-sm: ' + columnAlignment.sm + ';' : ''}
        ${columnAlignment.md ? '--sb-horizontal-align-md: ' + columnAlignment.md + ';' : ''}
        ${columnAlignment.lg ? '--sb-horizontal-align-lg: ' + columnAlignment.lg + ';' : ''}
        ${columnJustify.sm ? '--sb-horizontal-align-sm: ' + columnJustify.sm + ';' : ''}
        ${columnJustify.md ? '--sb-horizontal-align-md: ' + columnJustify.md + ';' : ''}
        ${columnJustify.lg ? '--sb-horizontal-align-lg: ' + columnJustify.lg + ';' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustom.sm ? '--sb-column-width-sm: ' + columnsHeightCustom.sm + 'px;' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustom.md ? '--sb-column-width-md: ' + columnsHeightCustom.md + 'px;' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustom.lg ? '--sb-column-width-lg: ' + columnsHeightCustom.lg + 'px;' : ''}
        ${blockMargin.sm.top ? '--sb-block-margin-top-sm: ' + blockMargin.sm.top + blockMargin.unit + ';' : ''}
        ${blockMargin.sm.right ? '--sb-block-margin-right-sm: ' + blockMargin.sm.right + blockMargin.unit + ';' : ''}
        ${blockMargin.sm.bottom ? '--sb-block-margin-bottom-sm: ' + blockMargin.sm.bottom + blockMargin.unit + ';' : ''}
        ${blockMargin.sm.left ? '--sb-block-margin-left-sm: ' + blockMargin.sm.left + blockMargin.unit + ';' : ''}
        ${blockMargin.md.top ? '--sb-block-margin-top-md: ' + blockMargin.md.top + blockMargin.unit + ';' : ''}
        ${blockMargin.md.right ? '--sb-block-margin-right-md: ' + blockMargin.md.right + blockMargin.unit + ';' : ''}
        ${blockMargin.md.bottom ? '--sb-block-margin-bottom-md: ' + blockMargin.md.bottom + blockMargin.unit + ';' : ''}
        ${blockMargin.md.left ? '--sb-block-margin-left-md: ' + blockMargin.md.left + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.top ? '--sb-block-margin-top-lg: ' + blockMargin.lg.top + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.right ? '--sb-block-margin-right-lg: ' + blockMargin.lg.right + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.bottom ? '--sb-block-margin-bottom-lg: ' + blockMargin.lg.bottom + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.left ? '--sb-block-margin-left-lg: ' + blockMargin.lg.left + blockMargin.unit + ';' : ''}
        ${blockPadding.sm.top ? '--sb-block-padding-top-sm: ' + blockPadding.sm.top + blockPadding.unit + ';' : ''}
        ${blockPadding.sm.right ? '--sb-block-padding-right-sm: ' + blockPadding.sm.right + blockPadding.unit + ';' : ''}
        ${blockPadding.sm.bottom ? '--sb-block-padding-bottom-sm: ' + blockPadding.sm.bottom + blockPadding.unit + ';' : ''}
        ${blockPadding.sm.left ? '--sb-block-padding-left-sm: ' + blockPadding.sm.left + blockPadding.unit + ';' : ''}
        ${blockPadding.md.top ? '--sb-block-padding-top-md: ' + blockPadding.md.top + blockPadding.unit + ';' : ''}
        ${blockPadding.md.right ? '--sb-block-padding-right-md: ' + blockPadding.md.right + blockPadding.unit + ';' : ''}
        ${blockPadding.md.bottom ? '--sb-block-padding-bottom-md: ' + blockPadding.md.bottom + blockPadding.unit + ';' : ''}
        ${blockPadding.md.left ? '--sb-block-padding-left-md: ' + blockPadding.md.left + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.top ? '--sb-block-padding-top-lg: ' + blockPadding.lg.top + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.right ? '--sb-block-padding-right-lg: ' + blockPadding.lg.right + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.bottom ? '--sb-block-padding-bottom-lg: ' + blockPadding.lg.bottom + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.left ? '--sb-block-padding-left-lg: ' + blockPadding.lg.left + blockPadding.unit + ';' : ''}
    }`

	const { sectionBlock, isViewportAvailable, isPreviewDesktop, isPreviewTablet, isPreviewMobile } = useSelect( select => {
		const { getBlock } = select( 'core/block-editor' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
		const sectionBlock = getBlock( clientId );
		return {
			sectionBlock,
			isViewportAvailable: __experimentalGetPreviewDeviceType ? true : false,
			isPreviewDesktop: __experimentalGetPreviewDeviceType ? 'Desktop' === __experimentalGetPreviewDeviceType() : false,
			isPreviewTablet: __experimentalGetPreviewDeviceType ? 'Tablet' === __experimentalGetPreviewDeviceType() : false,
			isPreviewMobile: __experimentalGetPreviewDeviceType ? 'Mobile' === __experimentalGetPreviewDeviceType() : false
		};
	}, []);

	const isLarger = useViewportMatch('large', '>=');
	const isLarge = useViewportMatch('large', '<=');
	const isSmall = useViewportMatch('small', '>=');
	const isSmaller = useViewportMatch('small', '<=');

	useEffect(() => {
		const unsubscribe = blockInit(clientId, defaultAttributes);
		return () => unsubscribe(id);
	}, [id]);

	let isDesktop = isLarger && !isLarge && isSmall && !isSmaller;
	let isTablet = !isLarger && !isLarge && isSmall && !isSmaller;
	let isMobile = !isLarger && !isLarge && !isSmall && !isSmaller;

	if (isViewportAvailable && !isMobile) {
		isDesktop = isPreviewDesktop;
		isTablet = isPreviewTablet;
		isMobile = isPreviewMobile;
	}

	const Tag = columnsHTMLTag;


	// let innerStyle = {};

	// if (columnsWidth) {
	// 	innerStyle = {maxWidth: columnsWidth + 'px'};
	// }

	const classes = classnames(
		className,
		`has-${columns}-columns`,
		`has-desktop-${layout}-layout`,
		`has-tablet-${layoutTablet}-layout`,
		`has-mobile-${layoutMobile}-layout`,
		`has-${columnsGap}-gap`,
		`has-vertical-${verticalAlign}`,
		// `has-horizontal-${horizontalAlign}`,
		{'has-reverse-columns-tablet': (reverseColumnsTablet && !hideTablet && 'collapsedRows' === layoutTablet)},
		{'has-reverse-columns-mobile': (reverseColumnsMobile && !hideMobile && 'collapsedRows' === layoutMobile)},
		{'has-viewport-desktop': isDesktop},
		{'has-viewport-tablet': isTablet},
		{'has-viewport-mobile': isMobile}
	);

	const updateColumnsWidth = (columns, layout) => {
		(sectionBlock.innerBlocks).map((innerBlock, i) => {
			updateBlockAttributes(innerBlock.clientId, {
				columnWidth: layouts[columns][layout][i]
			});
		});
	};

	const setupColumns = (columns, layout) => {
		if (1 >= columns) {
			setAttributes({
				columns,
				layout,
				layoutTablet: 'equal',
				layoutMobile: 'equal'
			});
		} else {
			setAttributes({
				columns,
				layout,
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
		}
	};

	const getColumnsTemplate = cols => {
		return times(cols, i => ['smart-blocks/column', {columnWidth: layouts[cols][layout][i]}]);
	};

	if (!columns) {
		return (<LayoutSelector clientId={clientId} setupColumns={setupColumns} />);
	}

	return (
		<Fragment>
			<BlockNavigatorControl clientId={clientId} />

			<Controls
				attributes={attributes}
				setAttributes={setAttributes}
			/>

			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				updateColumnsWidth={updateColumnsWidth}
			/>

			<Tag className={classes} id={id}>
				<div className="innerblocks-wrap"
				/* style={innerStyle} */
				>
					<InnerBlocks
						allowedBlocks={['smart-blocks/column']}
						template={getColumnsTemplate(columns)}
						templateLock="all"
					/>
				</div>
			</Tag>
		</Fragment>
	);
};

export default Edit;