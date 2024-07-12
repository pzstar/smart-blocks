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
		blockMargin,
		blockPadding,
		style
    } = attributes;

    const stylesCSS = `#${id} {
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
		const handle = document.querySelector(`#block-${ clientId } .wp-smart-block-column-resize-container-handle .components-resizable-box__handle`);
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
				className="block-library-spacer__resize-container wp-smart-block-column-resize-container"
				enable={{
					right: adjacentBlockClientId ? true : false
				}}
				handleWrapperClass="wp-smart-block-column-resize-container-handle"
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