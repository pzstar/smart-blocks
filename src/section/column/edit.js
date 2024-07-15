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

export default function Edit({attributes, setAttributes, className, isSelected, clientId, toggleSelection}) {
	const {updateBlockAttributes} = useDispatch('core/block-editor');

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
        columnBgColor
    } = attributes;

    const stylesCSS = `#${id} {
        ${columnMarginSmTop ? '--sb-column-margin-top-sm: ' + columnMarginSmTop + columnMarginUnit + ';' : ''}
        ${columnMarginSmRight ? '--sb-column-margin-right-sm: ' + columnMarginSmRight + columnMarginUnit + ';' : ''}
        ${columnMarginSmBottom ? '--sb-column-margin-bottom-sm: ' + columnMarginSmBottom + columnMarginUnit + ';' : ''}
        ${columnMarginSmLeft ? '--sb-column-margin-left-sm: ' + columnMarginSmLeft + columnMarginUnit + ';' : ''}
        ${columnMarginMdTop ? '--sb-column-margin-top-md: ' + columnMarginMdTop + columnMarginUnit + ';' : ''}
        ${columnMarginMdRight ? '--sb-column-margin-right-md: ' + columnMarginMdRight + columnMarginUnit + ';' : ''}
        ${columnMarginMdBottom ? '--sb-column-margin-bottom-md: ' + columnMarginMdBottom + columnMarginUnit + ';' : ''}
        ${columnMarginMdLeft ? '--sb-column-margin-left-md: ' + columnMarginMdLeft + columnMarginUnit + ';' : ''}
        ${columnMarginTop ? '--sb-column-margin-top-lg: ' + columnMarginTop + columnMarginUnit + ';' : ''}
        ${columnMarginRight ? '--sb-column-margin-right-lg: ' + columnMarginRight + columnMarginUnit + ';' : ''}
        ${columnMarginBottom ? '--sb-column-margin-bottom-lg: ' + columnMarginBottom + columnMarginUnit + ';' : ''}
        ${columnMarginLeft ? '--sb-column-margin-left-lg: ' + columnMarginLeft + columnMarginUnit + ';' : ''}
        ${columnPaddingSmTop ? '--sb-column-padding-top-sm: ' + columnPaddingSmTop + columnPaddingUnit + ';' : ''}
        ${columnPaddingSmRight ? '--sb-column-padding-right-sm: ' + columnPaddingSmRight + columnPaddingUnit + ';' : ''}
        ${columnPaddingSmBottom ? '--sb-column-padding-bottom-sm: ' + columnPaddingSmBottom + columnPaddingUnit + ';' : ''}
        ${columnPaddingSmLeft ? '--sb-column-padding-left-sm: ' + columnPaddingSmLeft + columnPaddingUnit + ';' : ''}
        ${columnPaddingMdTop ? '--sb-column-padding-top-md: ' + columnPaddingMdTop + columnPaddingUnit + ';' : ''}
        ${columnPaddingMdRight ? '--sb-column-padding-right-md: ' + columnPaddingMdRight + columnPaddingUnit + ';' : ''}
        ${columnPaddingMdBottom ? '--sb-column-padding-bottom-md: ' + columnPaddingMdBottom + columnPaddingUnit + ';' : ''}
        ${columnPaddingMdLeft ? '--sb-column-padding-left-md: ' + columnPaddingMdLeft + columnPaddingUnit + ';' : ''}
        ${columnPaddingTop ? '--sb-column-padding-top-lg: ' + columnPaddingTop + columnPaddingUnit + ';' : ''}
        ${columnPaddingRight ? '--sb-column-padding-right-lg: ' + columnPaddingRight + columnPaddingUnit + ';' : ''}
        ${columnPaddingBottom ? '--sb-column-padding-bottom-lg: ' + columnPaddingBottom + columnPaddingUnit + ';' : ''}
        ${columnPaddingLeft ? '--sb-column-padding-left-lg: ' + columnPaddingLeft + columnPaddingUnit + ';' : ''}
        ${columnBgColor ? '--sb-column-bg-color: ' + columnBgColor + ';' : ''}
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
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		const block = getBlock( clientId );
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
		const columnContainer = document.getElementById(`block-${ clientId }`);
		if (null !== columnContainer) {
			if (isDesktop) {
				columnContainer.style.flexBasis = `${columnWidth}%`;
			} else {
				columnContainer.style.flexBasis = '';
			}
		}
	};

	const onResizeStart = () => {
		const handle = document.querySelector(`#block-${ clientId } .sb-column-resize-container-handle .components-resizable-box__handle`);
		const handleTooltipLeft = document.createElement('div');
		const handleTooltipRight = document.createElement('div');

		handleTooltipLeft.setAttribute('class', 'resizable-tooltip resizable-tooltip-left');
		handleTooltipLeft.innerHTML = `${parseFloat(columnWidth).toFixed(0)}%`;
		handle.appendChild(handleTooltipLeft);
		handleTooltipRight.setAttribute('class', 'resizable-tooltip resizable-tooltip-right');
		handleTooltipRight.innerHTML = `${ parseFloat(adjacentBlock.attributes.columnWidth).toFixed(0)}%`;
		handle.appendChild(handleTooltipRight);

		setCurrentWidth(columnWidth);
		setNextWidth(adjacentBlock.attributes.columnWidth);
		toggleSelection(false);
	};

	const onResize = (event, direction, elt, delta) => {
		const parent = document.getElementById(`block-${parentClientId}`);
		const parentWidth = parent.getBoundingClientRect().width;
		const changedWidth = (delta.width / parentWidth) * 100;
		const width = parseFloat( currentWidth ) + changedWidth;
		const nextColumnWidth = nextWidth - changedWidth;
		const handleTooltipLeft = document.querySelector('.resizable-tooltip-left');
		const handleTooltipRight = document.querySelector('.resizable-tooltip-right');

		if (10 <= width && 10 <= nextColumnWidth) {
			handleTooltipLeft.innerHTML = `${width.toFixed(0)}%`;
			handleTooltipRight.innerHTML = `${nextColumnWidth.toFixed(0)}%`;
			setAttributes({columnWidth: width.toFixed(2)});
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