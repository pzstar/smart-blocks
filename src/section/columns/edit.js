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
        sectionBgColor,
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

		sectionBgImgURL,
        sectionBgImgID,
        sectionBgAttachment,
        sectionBgSize,
        sectionBgPosition,
        sectionBgRepeat,

        borderNormalBoxShadowHorizontal,
        borderNormalBoxShadowVertical,
        borderNormalBoxShadowBlur,
        borderNormalBoxShadowSpread,
        borderNormalBoxShadowColor,
        borderNormalBoxShadowInset,

        borderHoverBoxShadowHorizontal,
        borderHoverBoxShadowVertical,
        borderHoverBoxShadowBlur,
        borderHoverBoxShadowSpread,
        borderHoverBoxShadowColor,
        borderHoverBoxShadowInset,

        sectionContentWidth
    } = attributes;
	const {updateBlockAttributes} = useDispatch('core/block-editor');

	const stylesCSS = `#${id} {
        ${columnsWidthSm ? '--sb-columns-width-sm: ' + columnsWidthSm + 'px;' : ''}
        ${columnsWidthMd ? '--sb-columns-width-md: ' + columnsWidthMd + 'px;' : ''}
        ${columnsWidth ? '--sb-columns-width-lg: ' + columnsWidth + 'px;' : ''}

        ${horizontalAlignSm ? '--sb-columns-horizontal-align-sm: ' + horizontalAlignSm + ';' : ''}
        ${horizontalAlignMd ? '--sb-columns-horizontal-align-md: ' + horizontalAlignMd + ';' : ''}
        ${horizontalAlign ? '--sb-columns-horizontal-align-lg: ' + horizontalAlign + ';' : ''}

        ${columnsGapSm ? '--sb-columns-gap-sm: ' + columnsGapSm + 'px;' : ''}
        ${columnsGapMd ? '--sb-columns-gap-md: ' + columnsGapMd + 'px;' : ''}
        ${columnsGap ? '--sb-columns-gap-lg: ' + columnsGap + 'px;' : ''}

        ${columnAlignmentSm ? '--sb-columns-align-sm: ' + columnAlignmentSm + ';' : ''}
        ${columnAlignmentMd ? '--sb-columns-align-md: ' + columnAlignmentMd + ';' : ''}
        ${columnAlignment ? '--sb-columns-align-lg: ' + columnAlignment + ';' : ''}

        ${columnJustifySm ? '--sb-columns-justify-sm: ' + columnJustifySm + ';' : ''}
        ${columnJustifyMd ? '--sb-columns-justify-md: ' + columnJustifyMd + ';' : ''}
        ${columnJustify ? '--sb-columns-justify-lg: ' + columnJustify + ';' : ''}

        ${columnsHeight == 'custom' && columnsHeightCustomSm ? '--sb-columns-width-sm: ' + columnsHeightCustomSm + 'px;' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustomMd ? '--sb-columns-width-md: ' + columnsHeightCustomMd + 'px;' : ''}
        ${columnsHeight == 'custom' && columnsHeightCustom ? '--sb-columns-width-lg: ' + columnsHeightCustom + 'px;' : ''}

        ${columnsMarginSmTop ? '--sb-columns-margin-top-sm: ' + columnsMarginSmTop + columnsMarginUnit + ';' : ''}
        ${columnsMarginSmRight ? '--sb-columns-margin-right-sm: ' + columnsMarginSmRight + columnsMarginUnit + ';' : ''}
        ${columnsMarginSmBottom ? '--sb-columns-margin-bottom-sm: ' + columnsMarginSmBottom + columnsMarginUnit + ';' : ''}
        ${columnsMarginSmLeft ? '--sb-columns-margin-left-sm: ' + columnsMarginSmLeft + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdTop ? '--sb-columns-margin-top-md: ' + columnsMarginMdTop + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdRight ? '--sb-columns-margin-right-md: ' + columnsMarginMdRight + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdBottom ? '--sb-columns-margin-bottom-md: ' + columnsMarginMdBottom + columnsMarginUnit + ';' : ''}
        ${columnsMarginMdLeft ? '--sb-columns-margin-left-md: ' + columnsMarginMdLeft + columnsMarginUnit + ';' : ''}
        ${columnsMarginTop ? '--sb-columns-margin-top-lg: ' + columnsMarginTop + columnsMarginUnit + ';' : ''}
        ${columnsMarginRight ? '--sb-columns-margin-right-lg: ' + columnsMarginRight + columnsMarginUnit + ';' : ''}
        ${columnsMarginBottom ? '--sb-columns-margin-bottom-lg: ' + columnsMarginBottom + columnsMarginUnit + ';' : ''}
        ${columnsMarginLeft ? '--sb-columns-margin-left-lg: ' + columnsMarginLeft + columnsMarginUnit + ';' : ''}

        ${columnsPaddingSmTop ? '--sb-columns-padding-top-sm: ' + columnsPaddingSmTop + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingSmRight ? '--sb-columns-padding-right-sm: ' + columnsPaddingSmRight + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingSmBottom ? '--sb-columns-padding-bottom-sm: ' + columnsPaddingSmBottom + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingSmLeft ? '--sb-columns-padding-left-sm: ' + columnsPaddingSmLeft + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdTop ? '--sb-columns-padding-top-md: ' + columnsPaddingMdTop + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdRight ? '--sb-columns-padding-right-md: ' + columnsPaddingMdRight + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdBottom ? '--sb-columns-padding-bottom-md: ' + columnsPaddingMdBottom + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingMdLeft ? '--sb-columns-padding-left-md: ' + columnsPaddingMdLeft + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingTop ? '--sb-columns-padding-top-lg: ' + columnsPaddingTop + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingRight ? '--sb-columns-padding-right-lg: ' + columnsPaddingRight + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingBottom ? '--sb-columns-padding-bottom-lg: ' + columnsPaddingBottom + columnsPaddingUnit + ';' : ''}
        ${columnsPaddingLeft ? '--sb-columns-padding-left-lg: ' + columnsPaddingLeft + columnsPaddingUnit + ';' : ''}

        ${borderNormal ? '--sb-columns-border-normal: ' + borderNormal + ';' : ''}
        ${borderHover ? '--sb-columns-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-columns-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-columns-border-hover-color: ' + borderHoverColor + ';' : ''}
        ${borderNormalWidthTop ? '--sb-columns-border-normal-width-top: ' + borderNormalWidthTop + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthRight ? '--sb-columns-border-normal-width-right: ' + borderNormalWidthRight + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthBottom ? '--sb-columns-border-normal-width-bottom: ' + borderNormalWidthBottom + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthLeft ? '--sb-columns-border-normal-width-left: ' + borderNormalWidthLeft + borderNormalWidthUnit + ';' : ''}
        ${borderHoverWidthTop ? '--sb-columns-border-hover-width-top: ' + borderHoverWidthTop + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthRight ? '--sb-columns-border-hover-width-right: ' + borderHoverWidthRight + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthBottom ? '--sb-columns-border-hover-width-bottom: ' + borderHoverWidthBottom + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthLeft ? '--sb-columns-border-hover-width-left: ' + borderHoverWidthLeft + borderHoverWidthUnit + ';' : ''}
        ${borderNormalRadiusTop ? '--sb-columns-border-normal-radius-top: ' + borderNormalRadiusTop + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusRight ? '--sb-columns-border-normal-radius-right: ' + borderNormalRadiusRight + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusBottom ? '--sb-columns-border-normal-radius-bottom: ' + borderNormalRadiusBottom + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusLeft ? '--sb-columns-border-normal-radius-left: ' + borderNormalRadiusLeft + borderNormalRadiusUnit + ';' : ''}
        ${borderHoverRadiusTop ? '--sb-columns-border-hover-radius-top: ' + borderHoverRadiusTop + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusRight ? '--sb-columns-border-hover-radius-right: ' + borderHoverRadiusRight + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusBottom ? '--sb-columns-border-hover-radius-bottom: ' + borderHoverRadiusBottom + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusLeft ? '--sb-columns-border-hover-radius-left: ' + borderHoverRadiusLeft + borderHoverRadiusUnit + ';' : ''}
        ${borderNormalBoxShadowHorizontal ? '--sb-columns-border-normal-box-shadow-horizontal: ' + borderNormalBoxShadowHorizontal + 'px;' : ''}
        ${borderNormalBoxShadowVertical ? '--sb-columns-border-normal-box-shadow-vertical: ' + borderNormalBoxShadowVertical + 'px;' : ''}
        ${borderNormalBoxShadowBlur ? '--sb-columns-border-normal-box-shadow-blur: ' + borderNormalBoxShadowBlur + 'px;' : ''}
        ${borderNormalBoxShadowSpread ? '--sb-columns-border-normal-box-shadow-spread: ' + borderNormalBoxShadowSpread + 'px;' : ''}
        ${borderNormalBoxShadowColor ? '--sb-columns-border-normal-box-shadow-color: ' + borderNormalBoxShadowColor + ';' : ''}
        ${borderNormalBoxShadowInset ? '--sb-columns-border-normal-box-shadow-inset: ' + borderNormalBoxShadowInset + ';' : ''}
        ${borderHoverBoxShadowHorizontal ? '--sb-columns-border-hover-box-shadow-horizontal: ' + borderHoverBoxShadowHorizontal + 'px;' : ''}
        ${borderHoverBoxShadowVertical ? '--sb-columns-border-hover-box-shadow-vertical: ' + borderHoverBoxShadowVertical + 'px;' : ''}
        ${borderHoverBoxShadowBlur ? '--sb-columns-border-hover-box-shadow-blur: ' + borderHoverBoxShadowBlur + 'px;' : ''}
        ${borderHoverBoxShadowSpread ? '--sb-columns-border-hover-box-shadow-spread: ' + borderHoverBoxShadowSpread + 'px;' : ''}
        ${borderHoverBoxShadowColor ? '--sb-columns-border-hover-box-shadow-color: ' + borderHoverBoxShadowColor + ';' : ''}
        ${borderHoverBoxShadowInset ? '--sb-columns-border-hover-box-shadow-inset: ' + borderHoverBoxShadowInset + ';' : ''}
        ${sectionBgColor ? '--sb-columns-bg-color: ' + sectionBgColor + ';' : ''}

		${sectionBgImgURL ? '--sb-columns-bg-img-url: url(' + sectionBgImgURL + ');' : ''}
		${sectionBgAttachment ? '--sb-columns-bg-img-attachment: ' + sectionBgAttachment + ';' : ''}
		${sectionBgSize ? '--sb-columns-bg-img-size: ' + sectionBgSize + ';' : ''}
		${sectionBgPosition ? '--sb-columns-bg-img-position: ' + sectionBgPosition + ';' : ''}
		${sectionBgRepeat ? '--sb-columns-bg-img-repeat: ' + sectionBgRepeat + ';' : ''}
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
		{'has-viewport-mobile': isMobile},
		`has-${sectionContentWidth}-width`
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
				<div className="wp-block-smart-blocks-innerblocks-wrap">
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