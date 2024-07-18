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
import { blockInit } from '../../helpers/block-utility.js';
import LayoutSelector from './layoutselector.js';
import { responsiveDimensionVars, dimensionVars, responsiveSliderVars, boxShadowVars, responsiveGapVars, bgImgVars } from '../../utils/helper';

const Edit = ({ attributes, setAttributes, className, clientId }) => {
	const {
		id,
		columns,

		columnsWidth,
		columnsWidthMd,
		columnsWidthSm,
		columnsWidthUnit,

		columnsHTMLTag,
		layout,
		layoutTablet,
		layoutMobile,

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
		columnsHeightSm,
		columnsHeightMd,
		columnsHeightUnit,

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

		sectionContentWidth,

		sectionFlexDirection,
		sectionFlexDirectionMd,
		sectionFlexDirectionSm,

		columnsGapRow,
		columnsGapSmRow,
		columnsGapMdRow,
		columnsGapColumn,
		columnsGapSmColumn,
		columnsGapMdColumn,
		columnsGapUnit,
	} = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const stylesCSS = `#${id} {
		${responsiveSliderVars('columns-width', columnsWidth, columnsWidthSm, columnsWidthMd, columnsWidthUnit)}
		${responsiveSliderVars('columns-horizontal-align', horizontalAlign, horizontalAlignSm, horizontalAlignMd, '')}
		${responsiveGapVars('columns-gap', columnsGapRow, columnsGapSmRow, columnsGapMdRow, columnsGapColumn, columnsGapSmColumn, columnsGapMdColumn, columnsGapUnit)}
		${responsiveSliderVars('columns-align', columnAlignment, columnAlignmentSm, columnAlignmentMd, '')}
		${responsiveSliderVars('columns-justify', columnJustify, columnJustifySm, columnJustifyMd, '')}
		${responsiveSliderVars('columns-flex-direction', sectionFlexDirection, sectionFlexDirectionSm, sectionFlexDirectionMd, '')}


        ${responsiveDimensionVars('columns-margin', columnsMarginTop, columnsMarginRight, columnsMarginBottom, columnsMarginLeft,
		columnsMarginSmTop, columnsMarginSmRight, columnsMarginSmBottom, columnsMarginSmLeft,
		columnsMarginMdTop, columnsMarginMdRight, columnsMarginMdBottom, columnsMarginMdLeft, columnsMarginUnit)}
    	${responsiveDimensionVars('columns-padding', columnsPaddingTop, columnsPaddingRight, columnsPaddingBottom, columnsPaddingLeft,
			columnsPaddingSmTop, columnsPaddingSmRight, columnsPaddingSmBottom, columnsPaddingSmLeft,
			columnsPaddingMdTop, columnsPaddingMdRight, columnsPaddingMdBottom, columnsPaddingMdLeft, columnsPaddingUnit)}

        ${borderNormal ? '--sb-columns-border-normal: ' + borderNormal + ';' : ''}
        ${borderHover ? '--sb-columns-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-columns-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-columns-border-hover-color: ' + borderHoverColor + ';' : ''}


        ${dimensionVars('columns-border-normal-width', borderNormalWidthTop, borderNormalWidthRight, borderNormalWidthBottom, borderNormalWidthLeft, borderNormalWidthUnit)}
        ${dimensionVars('columns-border-hover-width', borderHoverWidthTop, borderHoverWidthRight, borderHoverWidthBottom, borderHoverWidthLeft, borderHoverWidthUnit)}
        ${dimensionVars('columns-border-normal-radius', borderNormalRadiusTop, borderNormalRadiusRight, borderNormalRadiusBottom, borderNormalRadiusLeft, borderNormalRadiusUnit)}
        ${dimensionVars('columns-border-hover-radius', borderHoverRadiusTop, borderHoverRadiusRight, borderHoverRadiusBottom, borderHoverRadiusLeft, borderHoverRadiusUnit)}


        ${boxShadowVars('columns-border-normal-box-shadow', borderNormalBoxShadowHorizontal, borderNormalBoxShadowVertical, borderNormalBoxShadowBlur, borderNormalBoxShadowSpread, borderNormalBoxShadowColor, borderNormalBoxShadowInset, 'px')}
        ${boxShadowVars('columns-border-hover-box-shadow', borderHoverBoxShadowHorizontal, borderHoverBoxShadowVertical, borderHoverBoxShadowBlur, borderHoverBoxShadowSpread, borderHoverBoxShadowColor, borderHoverBoxShadowInset, 'px')}

        ${sectionBgColor ? '--sb-columns-bg-color: ' + sectionBgColor + ';' : ''}

        ${bgImgVars('columns-bg-img', sectionBgImgURL, sectionBgAttachment, sectionBgSize, sectionBgPosition, sectionBgRepeat)}

		${responsiveSliderVars('columns-height', columnsHeight, columnsHeightSm, columnsHeightMd, columnsHeightUnit)}
    }`
	setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });

	const { sectionBlock, isViewportAvailable, isPreviewDesktop, isPreviewTablet, isPreviewMobile } = useSelect(select => {
		const { getBlock } = select('core/block-editor');
		const { __experimentalGetPreviewDeviceType } = select('core/edit-post') ? select('core/edit-post') : false;
		const sectionBlock = getBlock(clientId);
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
		{ 'has-reverse-columns-tablet': (reverseColumnsTablet && !hideTablet && 'collapsedRows' === layoutTablet) },
		{ 'has-reverse-columns-mobile': (reverseColumnsMobile && !hideMobile && 'collapsedRows' === layoutMobile) },
		{ 'has-viewport-desktop': isDesktop },
		{ 'has-viewport-tablet': isTablet },
		{ 'has-viewport-mobile': isMobile },
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
		return times(cols, i => ['smart-blocks/column', { columnWidth: layouts[cols][layout][i] }]);
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