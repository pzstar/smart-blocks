import classnames from 'classnames';

import {__} from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	RangeControl,
	SelectControl,
	GradientPicker,
	Tooltip,
	ToggleControl
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import {
	useEffect,
	useRef,
	useState
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import DimensionControl from '../../../controls/dimension';
import ColorControl from '../../../controls/color';
import ImageBackgroundControl from '../../../controls/imagebackground';
import BoxShadowControl from '../../../controls/boxshadow';
import BorderControl from '../../../controls/border';
import Tabs from '../../../utils/tabs';
import ButtonGroupControl from '../../../controls/buttongroup';

import {
	LayoutIcon,
	StyleIcon,
	AdvancedIcon,
	AlignFlexStart,
	AlignCenter,
	AlignFlexEnd,
	AlignStretch
} from '../../../utils/svgicons';

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

		columnBgType,
		columnBgColor,
		columnBgImgURL,
		columnBgImgID,
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

	const getView = useSelect((select) => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	useEffect(() => {
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
			<div className="sb-head-panel-tabs">
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
								{(1 < parentBlock.innerBlocks.length) && (
									<RangeControl
										label={__('Column Width', 'smart-blocks')}
										value={Number(attributes.columnWidth)}
										onChange={changeColumnWidth}
										min={10}
										max={(Number(attributes.columnWidth) + Number(nextBlockWidth.current)) - 10}
									/>
								)}
							</PanelBody>

							<PanelBody
								title={__('Layout', 'smart-blocks')}
								initialOpen={false}
							>

								<ButtonGroupControl
									label={__('Align Self', 'smart-blocks')}
									responsive={!0}
									options={[
										{
											value: 'start',
											icon: <i class="sbi-align-start-v"></i>,
											label: __('Start', 'smart-blocks')
										},
										{
											value: 'center',
											icon: <i class="sbi-align-center-v"></i>,
											label: __('Center', 'smart-blocks')
										},
										{
											value: 'end',
											icon: <i class="sbi-align-end-v"></i>,
											label: __('Stretch', 'smart-blocks')
										},
										{
											value: 'srtetch',
											icon: <i class="sbi-align-stretch-v"></i>,
											label: __('Stretch', 'smart-blocks')
										}
									]}
									value={columnAlignSelf}
									setValue={(value) => setAttributes({columnAlignSelf: value})}
									valueSm={columnAlignSelfSm}
									setValueSm={(value) => setAttributes({columnAlignSelfSm: value})}
									valueMd={columnAlignSelfMd}
									setValueMd={(value) => setAttributes({columnAlignSelfMd: value})}
								/>


							</PanelBody>
						</>
					) || 'style' === activeTab && (
						<>
							<PanelBody
								title={__('Spacing', 'smart-blocks')}
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
								title={__('Border', 'smart-blocks')}
								initialOpen={false}
							>
								<Tabs>
									<div tabTitle={__("Normal", 'smart-blocks')}>
										<BorderControl
											value={borderNormal}
											setValue={(borderNormal) => setAttributes({borderNormal})}
										/>
										{borderNormal && (
											<ColorControl
												label={__('Border Color', 'smart-blocks')}
												enableAlpha
												value={borderNormalColor}
												setValue={(borderNormalColor) => setAttributes({borderNormalColor})}
											/>
										)}
										<DimensionControl
											label={__('Border Width', 'smart-blocks')}
											units={['px', 'em']}
											dimensionTop={borderNormalWidthTop}
											setDimensionTop={value => setAttributes({borderNormalWidthTop: value})}
											dimensionLeft={borderNormalWidthLeft}
											setDimensionLeft={value => setAttributes({borderNormalWidthLeft: value})}
											dimensionRight={borderNormalWidthRight}
											setDimensionRight={value => setAttributes({borderNormalWidthRight: value})}
											dimensionBottom={borderNormalWidthBottom}
											setDimensionBottom={value => setAttributes({borderNormalWidthBottom: value})}

											unit={borderNormalWidthUnit}
											setUnit={value => setAttributes({borderNormalWidthUnit: value})}
										/>
										<DimensionControl
											label={__('Border Radius', 'smart-blocks')}
											dimensionTop={borderNormalRadiusTop}
											setDimensionTop={value => setAttributes({borderNormalRadiusTop: value})}
											dimensionLeft={borderNormalRadiusLeft}
											setDimensionLeft={value => setAttributes({borderNormalRadiusLeft: value})}
											dimensionRight={borderNormalRadiusRight}
											setDimensionRight={value => setAttributes({borderNormalRadiusRight: value})}
											dimensionBottom={borderNormalRadiusBottom}
											setDimensionBottom={value => setAttributes({borderNormalRadiusBottom: value})}

											unit={borderNormalRadiusUnit}
											setUnit={value => setAttributes({borderNormalRadiusUnit: value})}
										/>
										<BoxShadowControl
											valueHorizontal={borderNormalBoxShadowHorizontal}
											setValueHorizontal={(borderNormalBoxShadowHorizontal) => setAttributes({borderNormalBoxShadowHorizontal})}
											valueVertical={borderNormalBoxShadowVertical}
											setValueVertical={(borderNormalBoxShadowVertical) => setAttributes({borderNormalBoxShadowVertical})}
											valueBlur={borderNormalBoxShadowBlur}
											setValueBlur={(borderNormalBoxShadowBlur) => setAttributes({borderNormalBoxShadowBlur})}
											valueSpread={borderNormalBoxShadowSpread}
											setValueSpread={(borderNormalBoxShadowSpread) => setAttributes({borderNormalBoxShadowSpread})}
											valueColor={borderNormalBoxShadowColor}
											setValueColor={(borderNormalBoxShadowColor) => setAttributes({borderNormalBoxShadowColor})}
											valueInset={borderNormalBoxShadowInset}
											setValueInset={(borderNormalBoxShadowInset) => setAttributes({borderNormalBoxShadowInset})}
										/>
									</div>
									<div tabTitle={__("Hover", 'smart-blocks')}>
										<BorderControl
											value={borderHover}
											setValue={(borderHover) => setAttributes({borderHover})}
										/>
										{borderHover && (
											<ColorControl
												label={__('Border Color', 'smart-blocks')}
												enableAlpha
												value={borderHoverColor}
												setValue={(borderHoverColor) => setAttributes({borderHoverColor})}
											/>
										)}
										<DimensionControl
											label={__('Border Width', 'smart-blocks')}
											units={['px', 'em']}
											dimensionTop={borderHoverWidthTop}
											setDimensionTop={value => setAttributes({borderHoverWidthTop: value})}
											dimensionLeft={borderHoverWidthLeft}
											setDimensionLeft={value => setAttributes({borderHoverWidthLeft: value})}
											dimensionRight={borderHoverWidthRight}
											setDimensionRight={value => setAttributes({borderHoverWidthRight: value})}
											dimensionBottom={borderHoverWidthBottom}
											setDimensionBottom={value => setAttributes({borderHoverWidthBottom: value})}

											unit={borderHoverWidthUnit}
											setUnit={value => setAttributes({borderHoverWidthUnit: value})}
										/>
										<DimensionControl
											label={__('Border Radius', 'smart-blocks')}
											dimensionTop={borderHoverRadiusTop}
											setDimensionTop={value => setAttributes({borderHoverRadiusTop: value})}
											dimensionLeft={borderHoverRadiusLeft}
											setDimensionLeft={value => setAttributes({borderHoverRadiusLeft: value})}
											dimensionRight={borderHoverRadiusRight}
											setDimensionRight={value => setAttributes({borderHoverRadiusRight: value})}
											dimensionBottom={borderHoverRadiusBottom}
											setDimensionBottom={value => setAttributes({borderHoverRadiusBottom: value})}

											unit={borderHoverRadiusUnit}
											setUnit={value => setAttributes({borderHoverRadiusUnit: value})}
										/>
										<BoxShadowControl
											valueHorizontal={borderHoverBoxShadowHorizontal}
											setValueHorizontal={(borderHoverBoxShadowHorizontal) => setAttributes({borderHoverBoxShadowHorizontal})}
											valueVertical={borderHoverBoxShadowVertical}
											setValueVertical={(borderHoverBoxShadowVertical) => setAttributes({borderHoverBoxShadowVertical})}
											valueBlur={borderHoverBoxShadowBlur}
											setValueBlur={(borderHoverBoxShadowBlur) => setAttributes({borderHoverBoxShadowBlur})}
											valueSpread={borderHoverBoxShadowSpread}
											setValueSpread={(borderHoverBoxShadowSpread) => setAttributes({borderHoverBoxShadowSpread})}
											valueColor={borderHoverBoxShadowColor}
											setValueColor={(borderHoverBoxShadowColor) => setAttributes({borderHoverBoxShadowColor})}
											valueInset={borderHoverBoxShadowInset}
											setValueInset={(borderHoverBoxShadowInset) => setAttributes({borderHoverBoxShadowInset})}
										/>
									</div>
								</Tabs>
							</PanelBody>

							<PanelBody
								title={__('Background', 'smart-blocks')}
								initialOpen={false}
							>
								<div className="sb-field sb-inspect-tabs ">
									<div className="components-tab-panel__tabs">
										<Tooltip text={__("Image/Color", 'smart-blocks')}>
											<button className={('imageOrColor' === columnBgType ? "active-tab" : "") + " components-button sb-tab-menu"}
												onClick={() => setAttributes({columnBgType: 'imageOrColor'})}
											>
												{__("Image/Color", 'smart-blocks')}
											</button>
										</Tooltip>

										<Tooltip text={__("Gradient", 'smart-blocks')}>
											<button className={('gradient' === columnBgType ? "active-tab" : "") + " components-button sb-tab-menu"}
												onClick={() => setAttributes({columnBgType: 'gradient'})}
											>
												{__("Gradient", 'smart-blocks')}
											</button>
										</Tooltip>
									</div>
									<div className="sb-field-tab-items">
										{'imageOrColor' === columnBgType && (
											<>
												<ColorControl
													label={__('Background Color', 'smart-blocks')}
													enableAlpha={!0}
													value={columnBgColor}
													setValue={(columnBgColor) => setAttributes({columnBgColor})}
												/>

												<ImageBackgroundControl
													label={__("Background Image", 'smart-blocks')}
													imageURL={columnBgImgURL}
													setImageURL={value => setAttributes({columnBgImgURL: value})}
													imageID={columnBgImgID}
													setImageID={value => setAttributes({columnBgImgID: value})}
													imageAttachment={columnBgAttachment}
													setImageAttachment={value => setAttributes({columnBgAttachment: value})}
													imageSize={columnBgSize}
													setImageSize={value => setAttributes({columnBgSize: value})}
													imagePositionX={columnBgPositionX}
													setImagePositionX={value => setAttributes({columnBgPositionX: value})}
													imagePositionY={columnBgPositionY}
													setImagePositionY={value => setAttributes({columnBgPositionY: value})}
													imageRepeat={columnBgRepeat}
													setImageRepeat={value => setAttributes({columnBgRepeat: value})}
													imageOverlayColor={columnBgOverlayColor}
													setImageOverlayColor={value => setAttributes({columnBgOverlayColor: value})}
												/>
											</>
										) || 'gradient' === columnBgType && (
											<>
												<GradientPicker
													label={__('Background Gradient', 'smart-blocks')}
													value={columnBgGradient}
													onChange={value => setAttributes({columnBgGradient: value})}
												/>
											</>
										)}
									</div>
								</div>
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
