import classnames from 'classnames';

import { times } from 'lodash';
import { useViewportMatch } from '@wordpress/compose';

import { useDispatch, useSelect } from '@wordpress/data';
import { InnerBlocks } from '@wordpress/block-editor';

import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import defaultAttributes from './attributes.js';
import layouts from '../layouts.js';
import Inspector from './inspector.js';
import {blockInit} from '../../helpers/block-utility.js';
import LayoutSelector from './layoutselector.js';

const Edit = ({attributes, setAttributes, className, clientId}) => {
	const {
		id,
        columns,

        columnsWidth,
		columnsWidthMd,
		columnsWidthSm,

        columnsHTMLTag,
        layout,
        layoutTablet,
        layoutMobile,

        columnsGap,
        columnsGapSm,
        columnsGapMd,

        reverseColumnsTablet,
        reverseColumnsMobile,
        hideTablet,
        hideMobile,
        borderNormal,
        borderHover,
        borderNormalColor,
        borderHoverColor,

        borderNormalWidthTop,
        borderNormalWidthLeft,
        borderNormalWidthRight,
        borderNormalWidthBottom,
        borderNormalWidthUnit,
        borderHoverWidthTop,
        borderHoverWidthLeft,
        borderHoverWidthRight,
        borderHoverWidthBottom,
        borderHoverWidthUnit,
        borderNormalRadiusTop,
        borderNormalRadiusLeft,
        borderNormalRadiusRight,
        borderNormalRadiusBottom,
        borderNormalRadiusUnit,
        borderHoverRadiusTop,
        borderHoverRadiusLeft,
        borderHoverRadiusRight,
        borderHoverRadiusBottom,
        borderHoverRadiusUnit,

        borderNormalBoxShadow,
        borderHoverBoxShadow,
        blockBgColor,
        columnsHeight,

        columnsHeightCustom,
        columnsHeightCustomSm,
        columnsHeightCustomMd,

        style,

        horizontalAlign,
		horizontalAlignSm,
		horizontalAlignMd,
		columnAlignment,
		columnAlignmentSm,
		columnAlignmentMd,
		columnJustify,
		columnJustifySm,
		columnJustifyMd,

		columnsMarginSmTop,
		columnsMarginSmRight,
		columnsMarginSmBottom,
		columnsMarginSmLeft,
		columnsMarginMdTop,
		columnsMarginMdRight,
		columnsMarginMdBottom,
		columnsMarginMdLeft,
		columnsMarginTop,
		columnsMarginRight,
		columnsMarginBottom,
		columnsMarginLeft,
		columnsMarginUnit,

		columnsPaddingSmTop,
		columnsPaddingSmRight,
		columnsPaddingSmBottom,
		columnsPaddingSmLeft,
		columnsPaddingMdTop,
		columnsPaddingMdRight,
		columnsPaddingMdBottom,
		columnsPaddingMdLeft,
		columnsPaddingTop,
		columnsPaddingRight,
		columnsPaddingBottom,
		columnsPaddingLeft,
		columnsPaddingUnit,
    } = attributes;
	const {updateBlockAttributes} = useDispatch('core/block-editor');

	const stylesCSS = `#${id} {
        ${columnsWidthSm ? '--sb-column-width-sm: ' + columnsWidthSm + 'px;' : ''}
        ${columnsWidthMd ? '--sb-column-width-md: ' + columnsWidthMd + 'px;' : ''}
        ${columnsWidth ? '--sb-column-width-lg: ' + columnsWidth + 'px;' : ''}

        ${horizontalAlignSm ? '--sb-horizontal-align-sm: ' + horizontalAlignSm + ';' : ''}
        ${horizontalAlignMd ? '--sb-horizontal-align-md: ' + horizontalAlignMd + ';' : ''}
        ${horizontalAlign ? '--sb-horizontal-align-lg: ' + horizontalAlign + ';' : ''}

        ${columnsGapSm ? '--sb-column-gap-sm: ' + columnsGapSm + ';' : ''}
        ${columnsGapMd ? '--sb-column-gap-md: ' + columnsGapMd + ';' : ''}
        ${columnsGap ? '--sb-column-gap-lg: ' + columnsGap + ';' : ''}

        ${columnAlignmentSm ? '--sb-horizontal-align-sm: ' + columnAlignmentSm + ';' : ''}
        ${columnAlignmentMd ? '--sb-horizontal-align-md: ' + columnAlignmentMd + ';' : ''}
        ${columnAlignment ? '--sb-horizontal-align-lg: ' + columnAlignment + ';' : ''}

        ${columnJustifySm ? '--sb-horizontal-align-sm: ' + columnJustifySm + ';' : ''}
        ${columnJustifyMd ? '--sb-horizontal-align-md: ' + columnJustifyMd + ';' : ''}
        ${columnJustify ? '--sb-horizontal-align-lg: ' + columnJustify + ';' : ''}

        ${columnsHeight == 'custom' && columnsHeightCustomSm ? '--sb-column-width-sm: ' + columnsHeightCustomSm + 'px;' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustomMd ? '--sb-column-width-md: ' + columnsHeightCustomMd + 'px;' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustom ? '--sb-column-width-lg: ' + columnsHeightCustom + 'px;' : ''}

        ${columnsMarginSmTop ? '--sb-block-margin-top-sm: ' + columnsMarginSmTop + columnsMarginUnit + ';' : ''}
        ${columnsMarginSmRight ? '--sb-block-margin-right-sm: ' + columnsMarginSmRight + columnsMarginUnit + ';' : ''}
        ${columnsMarginSmBottom ? '--sb-block-margin-bottom-sm: ' + columnsMarginSmBottom + columnsMarginUnit + ';' : ''}
        ${columnsMarginSmLeft ? '--sb-block-margin-left-sm: ' + columnsMarginSmLeft + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdTop ? '--sb-block-margin-top-md: ' + columnsMarginMdTop + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdRight ? '--sb-block-margin-right-md: ' + columnsMarginMdRight + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdBottom ? '--sb-block-margin-bottom-md: ' + columnsMarginMdBottom + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdLeft ? '--sb-block-margin-left-md: ' + columnsMarginMdLeft + columnsMarginUnit + ';' : ''}
        ${columnsMarginTop ? '--sb-block-margin-top-lg: ' + columnsMarginTop + columnsMarginUnit + ';' : ''}
        ${columnsMarginRight ? '--sb-block-margin-right-lg: ' + columnsMarginRight + columnsMarginUnit + ';' : ''}
        ${columnsMarginBottom ? '--sb-block-margin-bottom-lg: ' + columnsMarginBottom + columnsMarginUnit + ';' : ''}
        ${columnsMarginLeft ? '--sb-block-margin-left-lg: ' + columnsMarginLeft + columnsMarginUnit + ';' : ''}

        ${columnsPaddingSmTop ? '--sb-block-padding-top-sm: ' + columnsPaddingSmTop + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingSmRight ? '--sb-block-padding-right-sm: ' + columnsPaddingSmRight + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingSmBottom ? '--sb-block-padding-bottom-sm: ' + columnsPaddingSmBottom + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingSmLeft ? '--sb-block-padding-left-sm: ' + columnsPaddingSmLeft + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdTop ? '--sb-block-padding-top-md: ' + columnsPaddingMdTop + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdRight ? '--sb-block-padding-right-md: ' + columnsPaddingMdRight + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdBottom ? '--sb-block-padding-bottom-md: ' + columnsPaddingMdBottom + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdLeft ? '--sb-block-padding-left-md: ' + columnsPaddingMdLeft + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingTop ? '--sb-block-padding-top-lg: ' + columnsPaddingTop + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingRight ? '--sb-block-padding-right-lg: ' + columnsPaddingRight + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingBottom ? '--sb-block-padding-bottom-lg: ' + columnsPaddingBottom + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingLeft ? '--sb-block-padding-left-lg: ' + columnsPaddingLeft + columnsPaddingUnit + ';' : ''}

        ${borderNormal ? '--sb-border-normal: ' + borderNormal + ';' : ''}
        ${borderHover ? '--sb-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor + ';' : ''}
        ${borderNormalWidthTop ? '--sb-border-normal-width-top: ' + borderNormalWidthTop + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthRight ? '--sb-border-normal-width-right: ' + borderNormalWidthRight + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthBottom ? '--sb-border-normal-width-bottom: ' + borderNormalWidthBottom + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthLeft ? '--sb-border-normal-width-left: ' + borderNormalWidthLeft + borderNormalWidthUnit + ';' : ''}
        ${borderHoverWidthTop ? '--sb-border-hover-width-top: ' + borderHoverWidthTop + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthRight ? '--sb-border-hover-width-right: ' + borderHoverWidthRight + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthBottom ? '--sb-border-hover-width-bottom: ' + borderHoverWidthBottom + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthLeft ? '--sb-border-hover-width-left: ' + borderHoverWidthLeft + borderHoverWidthUnit + ';' : ''}
        ${borderNormalRadiusTop ? '--sb-border-normal-radius-top: ' + borderNormalRadiusTop + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusRight ? '--sb-border-normal-radius-right: ' + borderNormalRadiusRight + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusBottom ? '--sb-border-normal-radius-bottom: ' + borderNormalRadiusBottom + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusLeft ? '--sb-border-normal-radius-left: ' + borderNormalRadiusLeft + borderNormalRadiusUnit + ';' : ''}
        ${borderHoverRadiusTop ? '--sb-border-hover-radius-top: ' + borderHoverRadiusTop + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusRight ? '--sb-border-hover-radius-right: ' + borderHoverRadiusRight + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusBottom ? '--sb-border-hover-radius-bottom: ' + borderHoverRadiusBottom + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusLeft ? '--sb-border-hover-radius-left: ' + borderHoverRadiusLeft + borderHoverRadiusUnit + ';' : ''}
        ${borderNormalBoxShadow.horizontal ? '--sb-border-normal-box-shadow-horizontal: ' + borderNormalBoxShadow.horizontal + 'px;' : ''}
        ${borderNormalBoxShadow.vertical ? '--sb-border-normal-box-shadow-vertical: ' + borderNormalBoxShadow.vertical + 'px;' : ''}
        ${borderNormalBoxShadow.blur ? '--sb-border-normal-box-shadow-blur: ' + borderNormalBoxShadow.blur + 'px;' : ''}
        ${borderNormalBoxShadow.spread ? '--sb-border-normal-box-shadow-spread: ' + borderNormalBoxShadow.spread + 'px;' : ''}
        ${borderNormalBoxShadow.color ? '--sb-border-normal-box-shadow-color: ' + borderNormalBoxShadow.color + ';' : ''}
        ${borderNormalBoxShadow.inset ? '--sb-border-normal-box-shadow-inset: ' + borderNormalBoxShadow.inset + ';' : ''}
        ${borderHoverBoxShadow.horizontal ? '--sb-border-hover-box-shadow-horizontal: ' + borderHoverBoxShadow.horizontal + 'px;' : ''}
        ${borderHoverBoxShadow.vertical ? '--sb-border-hover-box-shadow-vertical: ' + borderHoverBoxShadow.vertical + 'px;' : ''}
        ${borderHoverBoxShadow.blur ? '--sb-border-hover-box-shadow-blur: ' + borderHoverBoxShadow.blur + 'px;' : ''}
        ${borderHoverBoxShadow.spread ? '--sb-border-hover-box-shadow-spread: ' + borderHoverBoxShadow.spread + 'px;' : ''}
        ${borderHoverBoxShadow.color ? '--sb-border-hover-box-shadow-color: ' + borderHoverBoxShadow.color + ';' : ''}
        ${borderHoverBoxShadow.inset ? '--sb-border-hover-box-shadow-inset: ' + borderHoverBoxShadow.inset + ';' : ''}
        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}
    }`
    setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });

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

	const classes = classnames(
		className,
		`has-${columns}-columns`,
		`has-desktop-${layout}-layout`,
		`has-tablet-${layoutTablet}-layout`,
		`has-mobile-${layoutMobile}-layout`,
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
		<>
            <style jsx>
                {style}
            </style>

			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				updateColumnsWidth={updateColumnsWidth}
			/>

			<Tag className={classes} id={id}>
				<div className="innerblocks-wrap">
					<InnerBlocks
						allowedBlocks={['smart-blocks/column']}
						template={getColumnsTemplate(columns)}
						templateLock="all"
					/>
				</div>
			</Tag>
		</>
	);
};

export default Edit;