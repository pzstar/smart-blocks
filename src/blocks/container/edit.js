import classnames from 'classnames';
import {useDispatch, useSelect} from '@wordpress/data';
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import {Fragment, useEffect, useState} from '@wordpress/element';

/**
 * Internal dependencies
 */
import defaultAttributes from './attributes.js';
import Inspector from './inspector.js';
import {responsiveDimensionVars, dimensionVars, boxShadowVars, bgVars, responsiveSliderVars} from '../../utils/helper';

export default function Edit({attributes, setAttributes, clientId, className}) {
	const {
		id,
		enableSticky,
		stickyOffsetTop,
		stickyOffsetTopSm,
		stickyOffsetTopMd,
		stickyOffsetTopUnit,
		columnWidth,
		columnsHTMLTag,
		columnMarginSmTop,
		columnMarginSmRight,
		columnMarginSmBottom,
		columnMarginSmLeft,
		columnMarginMdTop,
		columnMarginMdRight,
		columnMarginMdBottom,
		columnMarginMdLeft,
		columnMarginTop,
		columnMarginRight,
		columnMarginBottom,
		columnMarginLeft,
		columnMarginUnit,

		columnPaddingSmTop,
		columnPaddingSmRight,
		columnPaddingSmBottom,
		columnPaddingSmLeft,
		columnPaddingMdTop,
		columnPaddingMdRight,
		columnPaddingMdBottom,
		columnPaddingMdLeft,
		columnPaddingTop,
		columnPaddingRight,
		columnPaddingBottom,
		columnPaddingLeft,
		columnPaddingUnit,

		sbStyle,
		columnBgColor,

		columnBgType,
		columnBgImgURL,
		columnBgAttachment,
		columnBgSize,
		columnBgPositionX,
		columnBgPositionY,
		columnBgRepeat,
		columnBgGradient,
		columnBgOverlayColor,

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

		columnAlignSelf,
		columnAlignSelfSm,
		columnAlignSelfMd,

	} = attributes;

	const {
		hasInnerBlocks
	} = useSelect(select => {
		const { getBlock } = select('core/block-editor');
		const block = getBlock(clientId);
		const hasInnerBlocks = !!(block && block.innerBlocks.length);
		return {
			hasInnerBlocks
		};
	}, []);

	const stylesCSS = `#${id} {
    	${responsiveDimensionVars('column-margin', columnMarginTop, columnMarginRight, columnMarginBottom, columnMarginLeft,
		columnMarginSmTop, columnMarginSmRight, columnMarginSmBottom, columnMarginSmLeft,
		columnMarginMdTop, columnMarginMdRight, columnMarginMdBottom, columnMarginMdLeft, columnMarginUnit)}
    	${responsiveDimensionVars('column-padding', columnPaddingTop, columnPaddingRight, columnPaddingBottom, columnPaddingLeft,
			columnPaddingSmTop, columnPaddingSmRight, columnPaddingSmBottom, columnPaddingSmLeft,
			columnPaddingMdTop, columnPaddingMdRight, columnPaddingMdBottom, columnPaddingMdLeft, columnPaddingUnit)}
		
		--sb-column-border-normal:${borderNormal ? borderNormal : '0'};
        --sb-column-border-hover: ${borderHover ? borderNormal : 'var(--sb-column-border-normal);'};
        --sb-column-border-normal-color: ${borderNormalColor ? borderNormalColor : 'initial'};
        --sb-column-border-hover-color: ${borderHoverColor ? borderHoverColor : 'var(--sb-column-border-normal-color)'};

        ${dimensionVars('column-border-normal-width', borderNormalWidthTop, borderNormalWidthRight, borderNormalWidthBottom, borderNormalWidthLeft, borderNormalWidthUnit)}
        ${dimensionVars('column-border-hover-width', borderHoverWidthTop, borderHoverWidthRight, borderHoverWidthBottom, borderHoverWidthLeft, borderHoverWidthUnit)}
        ${dimensionVars('column-border-normal-radius', borderNormalRadiusTop, borderNormalRadiusRight, borderNormalRadiusBottom, borderNormalRadiusLeft, borderNormalRadiusUnit)}
        ${dimensionVars('column-border-hover-radius', borderHoverRadiusTop, borderHoverRadiusRight, borderHoverRadiusBottom, borderHoverRadiusLeft, borderHoverRadiusUnit)}

        ${boxShadowVars('column-border-normal-box-shadow', borderNormalBoxShadowHorizontal, borderNormalBoxShadowVertical, borderNormalBoxShadowBlur, borderNormalBoxShadowSpread, borderNormalBoxShadowColor, borderNormalBoxShadowInset, 'px')}
        ${boxShadowVars('column-border-hover-box-shadow', borderHoverBoxShadowHorizontal, borderHoverBoxShadowVertical, borderHoverBoxShadowBlur, borderHoverBoxShadowSpread, borderHoverBoxShadowColor, borderHoverBoxShadowInset, 'px')}

        ${bgVars('column-bg', columnBgImgURL, columnBgAttachment, columnBgSize, columnBgPositionX, columnBgPositionY, columnBgRepeat, columnBgType, columnBgGradient, columnBgColor, columnBgOverlayColor)}

        ${responsiveSliderVars('column-align-self', columnAlignSelf, columnAlignSelfSm, columnAlignSelfMd)}
        ${responsiveSliderVars('sticky-offset', stickyOffsetTop, stickyOffsetTopSm, stickyOffsetTopMd, stickyOffsetTopUnit)}
    }`
	setAttributes({sbStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")});

	const Tag = columnsHTMLTag;
	const classes = classnames(
		className,
		enableSticky ? 'sb-sticky-container' : ''
	);

	return (
		<div {...useBlockProps()}>
			<style jsx>
				{sbStyle}
			</style>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
			/>

			<Tag
				id={id}
				className={classes}
			>
				<InnerBlocks
					templateLock={false}
					renderAppender={!hasInnerBlocks && InnerBlocks.ButtonBlockAppender}
				/>
			</Tag>
		</div>
	);
}