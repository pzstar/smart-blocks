import { ResizableBox } from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';
import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import defaultAttributes from './attributes.js';
import layouts from '../layouts.js';
import Inspector from './inspector.js';
import { blockInit } from '../../helpers/block-utility.js';
import { responsiveDimensionVars, dimensionVars, boxShadowVars, bgImgVars, responsiveSliderVars } from '../../utils/helper';

export default function Edit({ attributes, setAttributes, className, isSelected, clientId, toggleSelection }) {
	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const {
		id,
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

		style,
		columnBgColor,

		columnBgType,
		columnBgImgURL,
		columnBgImgID,
		columnBgAttachment,
		columnBgSize,
		columnBgPositionX,
		columnBgPositionY,
		columnBgRepeat,
		columnBgGradient,

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

		columnCustomOrder,
		columnCustomOrderSm,
		columnCustomOrderMd
	} = attributes;

	const stylesCSS = `#${id} {
        ${'--sb-column-width: ' + columnWidth + '%;'}
    	${responsiveDimensionVars('column-margin', columnMarginTop, columnMarginRight, columnMarginBottom, columnMarginLeft,
		columnMarginSmTop, columnMarginSmRight, columnMarginSmBottom, columnMarginSmLeft,
		columnMarginMdTop, columnMarginMdRight, columnMarginMdBottom, columnMarginMdLeft, columnMarginUnit)}
    	${responsiveDimensionVars('column-padding', columnPaddingTop, columnPaddingRight, columnPaddingBottom, columnPaddingLeft,
			columnPaddingSmTop, columnPaddingSmRight, columnPaddingSmBottom, columnPaddingSmLeft,
			columnPaddingMdTop, columnPaddingMdRight, columnPaddingMdBottom, columnPaddingMdLeft, columnPaddingUnit)}
       --sb-column-bg-color:${columnBgColor ? columnBgColor : 'transparent'};
		
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

        ${bgImgVars('column-bg-img', columnBgImgURL, columnBgAttachment, columnBgSize, columnBgPositionX, columnBgPositionY, columnBgRepeat)}

        ${responsiveSliderVars('column-align-self', columnAlignSelf, columnAlignSelfSm, columnAlignSelfMd)}
        ${responsiveSliderVars('column-custom-order', columnCustomOrder, columnCustomOrderSm, columnCustomOrderMd)}
    }`
	setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });

	const {
		adjacentBlockClientId,
		adjacentBlock,
		parentClientId,
		parentBlock,
		hasInnerBlocks,
		isViewportAvailable,
		isPreviewDesktop,
		isPreviewTablet,
		isPreviewMobile
	} = useSelect(select => {
		const {
			getAdjacentBlockClientId,
			getBlock,
			getBlockRootClientId
		} = select('core/block-editor');
		const { __experimentalGetPreviewDeviceType } = select('core/edit-post') ? select('core/edit-post') : false;
		const block = getBlock(clientId);
		const adjacentBlockClientId = getAdjacentBlockClientId(clientId);
		const adjacentBlock = getBlock(adjacentBlockClientId);
		const parentClientId = getBlockRootClientId(clientId);
		const parentBlock = getBlock(parentClientId);
		const hasInnerBlocks = !!(block && block.innerBlocks.length);

		return {
			adjacentBlockClientId,
			adjacentBlock,
			parentClientId,
			parentBlock,
			hasInnerBlocks,
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

	useEffect(() => {
		updateWidth();
	}, [columnWidth]);

	const [currentWidth, setCurrentWidth] = useState(0);
	const [nextWidth, setNextWidth] = useState(0);

	let isDesktop = isLarger && !isLarge && isSmall && !isSmaller;
	let isTablet = !isLarger && !isLarge && isSmall && !isSmaller;
	let isMobile = !isLarger && !isLarge && !isSmall && !isSmaller;

	if (isViewportAvailable && !isMobile) {
		isDesktop = isPreviewDesktop;
		isTablet = isPreviewTablet;
		isMobile = isPreviewMobile;
	}

	if (columnWidth === undefined) {
		(parentBlock.innerBlocks).map((innerBlock, i) => {
			if (clientId === innerBlock.clientId) {
				const columns = parentBlock.attributes.columns;
				const layout = parentBlock.attributes.layout;
				updateBlockAttributes(clientId, {
					columnWidth: layouts[columns][layout][i]
				});
			}
		});
	}

	const updateWidth = () => {
		const columnContainer = document.getElementById(`block-${clientId}`);
		if (null !== columnContainer) {
			if (isDesktop) {
				columnContainer.style.flexBasis = `${columnWidth}%`;
			} else {
				columnContainer.style.flexBasis = '';
			}
		}
	};

	const onResizeStart = () => {
		const handle = document.querySelector(`#block-${clientId} .sb-column-resize-container-handle .components-resizable-box__handle`);
		const handleTooltipLeft = document.createElement('div');
		const handleTooltipRight = document.createElement('div');

		handleTooltipLeft.setAttribute('class', 'resizable-tooltip resizable-tooltip-left');
		handleTooltipLeft.innerHTML = `${parseFloat(columnWidth).toFixed(0)}%`;
		handle.appendChild(handleTooltipLeft);
		handleTooltipRight.setAttribute('class', 'resizable-tooltip resizable-tooltip-right');
		handleTooltipRight.innerHTML = `${parseFloat(adjacentBlock.attributes.columnWidth).toFixed(0)}%`;
		handle.appendChild(handleTooltipRight);

		setCurrentWidth(columnWidth);
		setNextWidth(adjacentBlock.attributes.columnWidth);
		toggleSelection(false);
	};

	const onResize = (event, direction, elt, delta) => {
		const parent = document.getElementById(`block-${parentClientId}`);
		const parentWidth = parent.getBoundingClientRect().width;
		const changedWidth = (delta.width / parentWidth) * 100;
		const width = parseFloat(currentWidth) + changedWidth;
		const nextColumnWidth = nextWidth - changedWidth;
		const handleTooltipLeft = document.querySelector('.resizable-tooltip-left');
		const handleTooltipRight = document.querySelector('.resizable-tooltip-right');

		if (10 <= width && 10 <= nextColumnWidth) {
			handleTooltipLeft.innerHTML = `${width.toFixed(0)}%`;
			handleTooltipRight.innerHTML = `${nextColumnWidth.toFixed(0)}%`;
			setAttributes({ columnWidth: width.toFixed(2) });
			updateBlockAttributes(adjacentBlockClientId, {
				columnWidth: nextColumnWidth.toFixed(2)
			});
		}
	};

	const onResizeStop = () => {
		const handleTooltipLeft = document.querySelector('.resizable-tooltip-left');
		const handleTooltipRight = document.querySelector('.resizable-tooltip-right');
		handleTooltipLeft.parentNode.removeChild(handleTooltipLeft);
		handleTooltipRight.parentNode.removeChild(handleTooltipRight);
		toggleSelection(true);
	};

	const Tag = columnsHTMLTag;

	return (
		<div {...useBlockProps()}>
			<style jsx>
				{style}
			</style>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				isSelected={isSelected}
				clientId={clientId}
				adjacentBlock={adjacentBlock}
				parentBlock={parentBlock}
				updateBlockAttributes={updateBlockAttributes}
				adjacentBlockClientId={adjacentBlockClientId}
			/>

			<ResizableBox
				className="block-library-spacer__resize-container sb-column-resize-container"
				enable={{
					right: adjacentBlockClientId ? true : false
				}}
				handleWrapperClass="sb-column-resize-container-handle"
				onResizeStart={onResizeStart}
				onResize={onResize}
				onResizeStop={onResizeStop}

			>
				<Tag className={className} id={id}>
					<InnerBlocks
						templateLock={false}
						renderAppender={!hasInnerBlocks && InnerBlocks.ButtonBlockAppender}
					/>
				</Tag>
			</ResizableBox>
		</div>
	);
}