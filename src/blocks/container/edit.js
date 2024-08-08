import classnames from 'classnames';
import {useDispatch, useSelect} from '@wordpress/data';
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import {Fragment, useEffect, useState} from '@wordpress/element';
import {applyFilters} from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import defaultAttributes from './attributes.js';
import Inspector from './inspector.js';
import {responsiveDimensionVars, dimensionVars, boxShadowVars, bgVars, responsiveSliderVars} from '../../utils/helper';
import {responsiveGapVars} from '../../utils/helper';

export default function Edit(props) {
	const {attributes, setAttributes, clientId, className} = props;
	const {
		id,
		enableSticky,
		stickyOffsetTop,
		stickyOffsetTopUnit,
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

		flexibleContentDisplay,
		flexDirection,
		flexDirectionSm,
		flexDirectionMd,

		justifyContent,
		justifyContentSm,
		justifyContentMd,

		justifyItems,
		justifyItemsSm,
		justifyItemsMd,

		alignItems,
		alignItemsSm,
		alignItemsMd,

		containerWrap,
		containerWrapSm,
		containerWrapMd,

		containerGapRow,
		containerGapSmRow,
		containerGapMdRow,

		containerGapColumn,
		containerGapSmColumn,
		containerGapMdColumn,
		containerGapUnit,

		gridColumnNumber,
		gridColumnNumberSm,
		gridColumnNumberMd,

		containerWidthEnable,
		containerWidth,
		containerWidthSm,
		containerWidthMd,
		containerWidthUnit,

	} = attributes;

	const {
		hasInnerBlocks
	} = useSelect(select => {
		const {getBlock} = select('core/block-editor');
		const block = getBlock(clientId);
		const hasInnerBlocks = !!(block && block.innerBlocks.length);
		return {
			hasInnerBlocks
		};
	}, []);

	setAttributes({id: useBlockProps()['id']});
	const stylesCSS = `#${id} {
    	${responsiveDimensionVars('container-margin', columnMarginTop, columnMarginRight, columnMarginBottom, columnMarginLeft,
		columnMarginSmTop, columnMarginSmRight, columnMarginSmBottom, columnMarginSmLeft,
		columnMarginMdTop, columnMarginMdRight, columnMarginMdBottom, columnMarginMdLeft, columnMarginUnit)}
    	${responsiveDimensionVars('container-padding', columnPaddingTop, columnPaddingRight, columnPaddingBottom, columnPaddingLeft,
			columnPaddingSmTop, columnPaddingSmRight, columnPaddingSmBottom, columnPaddingSmLeft,
			columnPaddingMdTop, columnPaddingMdRight, columnPaddingMdBottom, columnPaddingMdLeft, columnPaddingUnit)}

    	${containerWidthEnable ? responsiveSliderVars('container-width', containerWidth, containerWidthSm, containerWidthMd, containerWidthUnit) : ''}

		--sb-container-border-normal:${borderNormal ? borderNormal : '0'};
        --sb-container-border-hover: ${borderHover ? borderNormal : 'var(--sb-container-border-normal)'};
        --sb-container-border-normal-color: ${borderNormalColor ? borderNormalColor : 'initial'};
        --sb-container-border-hover-color: ${borderHoverColor ? borderHoverColor : 'var(--sb-container-border-normal-color)'};

        ${dimensionVars('container-border-normal-width', borderNormalWidthTop, borderNormalWidthRight, borderNormalWidthBottom, borderNormalWidthLeft, borderNormalWidthUnit)}
        ${dimensionVars('container-border-hover-width', borderHoverWidthTop, borderHoverWidthRight, borderHoverWidthBottom, borderHoverWidthLeft, borderHoverWidthUnit)}
        ${dimensionVars('container-border-normal-radius', borderNormalRadiusTop, borderNormalRadiusRight, borderNormalRadiusBottom, borderNormalRadiusLeft, borderNormalRadiusUnit)}
        ${dimensionVars('container-border-hover-radius', borderHoverRadiusTop, borderHoverRadiusRight, borderHoverRadiusBottom, borderHoverRadiusLeft, borderHoverRadiusUnit)}

        ${boxShadowVars('container-border-normal-box-shadow', borderNormalBoxShadowHorizontal, borderNormalBoxShadowVertical, borderNormalBoxShadowBlur, borderNormalBoxShadowSpread, borderNormalBoxShadowColor, borderNormalBoxShadowInset, 'px')}
        ${boxShadowVars('container-border-hover-box-shadow', borderHoverBoxShadowHorizontal, borderHoverBoxShadowVertical, borderHoverBoxShadowBlur, borderHoverBoxShadowSpread, borderHoverBoxShadowColor, borderHoverBoxShadowInset, 'px')}

        ${bgVars('container-bg', columnBgImgURL, columnBgAttachment, columnBgSize, columnBgPositionX, columnBgPositionY, columnBgRepeat, columnBgType, columnBgGradient, columnBgColor, columnBgOverlayColor)}

        --sb-container-sticky-offset:${stickyOffsetTop ? stickyOffsetTop + 'px' : '0px'};

        --sb-container-flexible-display:${flexibleContentDisplay ? flexibleContentDisplay : 'flex'};
        ${responsiveSliderVars('container-flex-direction', flexDirection, flexDirectionSm, flexDirectionMd)}
        ${responsiveSliderVars('container-flex-justify-content', justifyContent, justifyContentSm, justifyContentMd)}
		${responsiveSliderVars('container-flex-justify-items', justifyItems, justifyItemsSm, justifyItemsMd)}
        ${responsiveSliderVars('container-flex-align-items', alignItems, alignItemsSm, alignItemsMd)}
		${responsiveGapVars('container-gap', containerGapRow, containerGapSmRow, containerGapMdRow, containerGapColumn, containerGapSmColumn, containerGapMdColumn, containerGapUnit)}
        ${responsiveSliderVars('container-flex-wrap', containerWrap, containerWrapSm, containerWrapMd)}
        ${responsiveSliderVars('container-grid-columns', gridColumnNumber, gridColumnNumberSm, gridColumnNumberMd)}

    }`
	setAttributes({sbStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")});

	const Tag = columnsHTMLTag;
	const classes = classnames(
		className,
		enableSticky ? 'sb-sticky-container' : '',
		{'sb-transform-yes': props.attributes.sbTransformEnable},
		{'sb-float-yes': props.attributes.sbFloatEffectEnable},
		{'sb-parallax-yes': (props.attributes.sbParallaxStyle && props.attributes.sbParallaxStyle != 'none')}
	);

	return (
		<>
			<style jsx>
                {applyFilters('smartblocks.editorcss', sbStyle, props)}
                {applyFilters('smartblocks.containercss', '', props)}
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
			</Tag >
		</>
	);
}