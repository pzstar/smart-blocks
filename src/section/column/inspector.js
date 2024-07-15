import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	RangeControl,
	SelectControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useEffect,
	useRef,
	useState
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import {LayoutIcon, StyleIcon, AdvancedIcon} from '../../utils/svgicons';
import DimensionControl from '../../controls/dimension';
import ColorControl from '../../controls/color';

const Inspector = ({
	attributes,
	setAttributes,
	isSelected,
	clientId,
	adjacentBlock,
	parentBlock,
	updateBlockAttributes,
	adjacentBlockClientId,
}) => {
	const {
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
		columnWidth,
		columnBgColor
    } = attributes;

	const getView = useSelect((select) => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	useEffect( () => {
		if (1 < parentBlock.innerBlocks.length) {
			if (!adjacentBlockClientId) {
				const blockId = parentBlock.innerBlocks.findIndex(e => e.clientId === clientId);
				const previousBlock = parentBlock.innerBlocks[blockId - 1];
				nextBlock.current = previousBlock.clientId;
				nextBlockWidth.current = previousBlock.attributes.columnWidth;
			}
		}
	}, []);

	useEffect(() => {
		if (1 < parentBlock.innerBlocks.length) {
			if (!adjacentBlockClientId) {
				const blockId = parentBlock.innerBlocks.findIndex(e => e.clientId === clientId);
				const previousBlock = parentBlock.innerBlocks[blockId - 1];
				nextBlockWidth.current = previousBlock.attributes.columnWidth;
				nextBlock.current = previousBlock.clientId;
				currentBlockWidth.current = attributes.columnWidth;
			} else {
				nextBlockWidth.current = adjacentBlock.attributes.columnWidth;
				nextBlock.current = adjacentBlockClientId;
				currentBlockWidth.current = attributes.columnWidth;
			}
		}
	}, [isSelected, attributes.columnWidth, parentBlock.innerBlocks.length]);

	const [activeTab, setActiveTab] = useState('layout');

	const currentBlockWidth = useRef(attributes.columnWidth);
	const nextBlock = useRef(adjacentBlockClientId && adjacentBlockClientId);
	const nextBlockWidth = useRef(adjacentBlock && adjacentBlock.attributes.columnWidth);

	const changeColumnWidth = value => {
		const width = value || 10;
		const nextWidth = (Number(currentBlockWidth.current) - width) + Number(nextBlockWidth.current);
		currentBlockWidth.current = width;
		nextBlockWidth.current = nextWidth;
		setAttributes({columnWidth: width.toFixed(2)});
		updateBlockAttributes(nextBlock.current, {
			columnWidth: nextWidth.toFixed(2)
		});
	};


	const changeColumnsHTMLTag = value => {
		setAttributes({columnsHTMLTag: value});
	};

	return (
		<InspectorControls>
			<div className="sb-field sb-head-panel-tabs">
                    <div className="sb-panel-tabs-wrap">
                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'layout' === activeTab})}
                            onClick={() => setActiveTab('layout')}
                        >
                            <span className="dashicons">
                                <LayoutIcon />
                            </span>
                            {__('Layout', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'style' === activeTab})}
                            onClick={() => setActiveTab('style')}
                        >
                            <span className="dashicons">
                                <StyleIcon />
                            </span>
                            {__('Style', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'advanced' === activeTab})}
                            onClick={() => setActiveTab('advanced')}
                        >
                            <span className="dashicons">
                                <AdvancedIcon />
                            </span>
                            {__('Advanced', 'smart-blocks')}
                        </Button>
                    </div>
                    <div className="sb-panel-tab-fields">
                        {'layout' === activeTab && (
							<>
								<PanelBody
									title={__('Spacing', 'smart-blocks')}
									initialOpen={false}
								>
									{( 1 < parentBlock.innerBlocks.length ) && (
										<RangeControl
											label={__('Column Width', 'smart-blocks')}
											value={Number( attributes.columnWidth )}
											onChange={changeColumnWidth}
											min={10}
											max={( Number( attributes.columnWidth ) + Number( nextBlockWidth.current ) ) - 10}
										/>
									)}
								</PanelBody>
							</>
                        ) || 'style' === activeTab && (
							<>
	                        	<PanelBody
									title={__('Layout', 'smart-blocks')}
									initialOpen={false}
								>
									<DimensionControl
                                        label={__('Margin', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        responsive={!0}

                                        dimensionTop={columnMarginTop}
                                        setDimensionTop={value => setAttributes({columnMarginTop: value})}
                                        dimensionMdTop={columnMarginMdTop}
                                        setDimensionMdTop={value => setAttributes({columnMarginMdTop: value})}
                                        dimensionSmTop={columnMarginSmTop}
                                        setDimensionSmTop={value => setAttributes({columnMarginSmTop: value})}

                                        dimensionLeft={columnMarginLeft}
                                        setDimensionLeft={value => setAttributes({columnMarginLeft: value})}
                                        dimensionMdLeft={columnMarginMdLeft}
                                        setDimensionMdLeft={value => setAttributes({columnMarginMdLeft: value})}
                                        dimensionSmLeft={columnMarginSmLeft}
                                        setDimensionSmLeft={value => setAttributes({columnMarginSmLeft: value})}

                                        dimensionRight={columnMarginRight}
                                        setDimensionRight={value => setAttributes({columnMarginRight: value})}
                                        dimensionMdRight={columnMarginMdRight}
                                        setDimensionMdRight={value => setAttributes({columnMarginMdRight: value})}
                                        dimensionSmRight={columnMarginSmRight}
                                        setDimensionSmRight={value => setAttributes({columnMarginSmRight: value})}

                                        dimensionBottom={columnMarginBottom}
                                        setDimensionBottom={value => setAttributes({columnMarginBottom: value})}
                                        dimensionMdBottom={columnMarginMdBottom}
                                        setDimensionMdBottom={value => setAttributes({columnMarginMdBottom: value})}
                                        dimensionSmBottom={columnMarginSmBottom}
                                        setDimensionSmBottom={value => setAttributes({columnMarginSmBottom: value})}

                                        unit={columnMarginUnit}
                                        setUnit={value => setAttributes({columnMarginUnit: value})}
                                    />
                                    <DimensionControl
                                        label={__('Padding', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        responsive={!0}

                                        dimensionTop={columnPaddingTop}
                                        setDimensionTop={value => setAttributes({columnPaddingTop: value})}
                                        dimensionMdTop={columnPaddingMdTop}
                                        setDimensionMdTop={value => setAttributes({columnPaddingMdTop: value})}
                                        dimensionSmTop={columnPaddingSmTop}
                                        setDimensionSmTop={value => setAttributes({columnPaddingSmTop: value})}

                                        dimensionLeft={columnPaddingLeft}
                                        setDimensionLeft={value => setAttributes({columnPaddingLeft: value})}
                                        dimensionMdLeft={columnPaddingMdLeft}
                                        setDimensionMdLeft={value => setAttributes({columnPaddingMdLeft: value})}
                                        dimensionSmLeft={columnPaddingSmLeft}
                                        setDimensionSmLeft={value => setAttributes({columnPaddingSmLeft: value})}

                                        dimensionRight={columnPaddingRight}
                                        setDimensionRight={value => setAttributes({columnPaddingRight: value})}
                                        dimensionMdRight={columnPaddingMdRight}
                                        setDimensionMdRight={value => setAttributes({columnPaddingMdRight: value})}
                                        dimensionSmRight={columnPaddingSmRight}
                                        setDimensionSmRight={value => setAttributes({columnPaddingSmRight: value})}

                                        dimensionBottom={columnPaddingBottom}
                                        setDimensionBottom={value => setAttributes({columnPaddingBottom: value})}
                                        dimensionMdBottom={columnPaddingMdBottom}
                                        setDimensionMdBottom={value => setAttributes({columnPaddingMdBottom: value})}
                                        dimensionSmBottom={columnPaddingSmBottom}
                                        setDimensionSmBottom={value => setAttributes({columnPaddingSmBottom: value})}

                                        unit={columnPaddingUnit}
                                        setUnit={value => setAttributes({columnPaddingUnit: value})}
                                    />
								</PanelBody>

                                <PanelBody
                                    title={__('Background', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Background Color', 'smart-blocks')}
                                        enableAlpha={!0}
                                        value={columnBgColor}
                                        setValue={(columnBgColor) => setAttributes({ columnBgColor })}
                                    />
                                </PanelBody>
							</>
                        ) || 'advanced' === activeTab && (
                        	<>
								<PanelBody
									title={__('Section Settings', 'smart-blocks')}
									initialOpen={false}
								>
									<SelectControl
										label={__('HTML Tag', 'smart-blocks')}
										value={attributes.columnsHTMLTag}
										options={[
											{label: __('Default (div)', 'smart-blocks'), value: 'div'},
											{label: 'section', value: 'section'},
											{label: 'header', value: 'header'},
											{label: 'footer', value: 'footer'},
											{label: 'article', value: 'article'},
											{label: 'main', value: 'main'}
										]}
										onChange={changeColumnsHTMLTag}
									/>
								</PanelBody>
							</>
                        )}
                    </div>
                </div>
		</InspectorControls>
	);
};

export default Inspector;
