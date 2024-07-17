import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	Dashicon,
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
	useEffect
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import LayoutControl from '../components/layout-control';
import DimensionControl from '../../controls/dimension';
import RangeSliderControl from '../../controls/rangeslider';
import ButtonGroupControl from '../../controls/buttongroup';
import ColorControl from '../../controls/color';
import ImageBackgroundControl from '../../controls/imagebackground';
import BoxShadowControl from '../../controls/boxshadow';
import BorderControl from '../../controls/border';
import {
	LayoutIcon,
	StyleIcon,
	AdvancedIcon,
	AlignFlexStart,
	AlignCenter,
	AlignFlexEnd,
	AlignStretch,
	AlignBaseline,
	JustifyFlexStart,
	JustifyCenter,
	JustifyFlexEnd,
	JustifySpaceBetween,
	JustifySpaceAround,
	JustifySpaceEvenly
} from '../../utils/svgicons';
import Tabs from '../../utils/tabs';

const Inspector = ({
	attributes,
	setAttributes,
	updateColumnsWidth
}) => {
	const {
		columns,
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
		sectionBgColor,

		horizontalAlign,
		horizontalAlignSm,
		horizontalAlignMd,
		columnAlignment,
		columnAlignmentSm,
		columnAlignmentMd,
		columnJustify,
		columnJustifySm,
		columnJustifyMd,

		layout,
		layoutTablet,
		layoutMobile,

		columnsGap,
		columnsGapMd,
		columnsGapSm,

		columnsWidth,
		columnsWidthMd,
		columnsWidthSm,
		columnsWidthUnit,

		columnsHeight,

		columnsHeightCustom,
		columnsHeightCustomSm,
		columnsHeightCustomMd,
		columnsHeightCustomUnit,

		hide,
		hideTablet,
		hideMobile,
		reverseColumnsTablet,
		reverseColumnsMobile,
		columnsHTMLTag,

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

		sectionContentWidth,

		sectionFlexDirection,
		sectionFlexDirectionSm,
		sectionFlexDirectionMd
	} = attributes;

	const getView = useSelect((select) => {
		const { getView } = select('smart-blocks/data');
		const { __experimentalGetPreviewDeviceType } = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const [activeTab, setActiveTab] = useState('layout');
	const [hasColumnsChanged, setColumnsChanged] = useState(false);

	const changeColumns = value => {
		if (6 >= value) {
			setAttributes({
				columns: value,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
		}

		if (6 < value) {
			setAttributes({
				columns: 6,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
		}

		if (1 >= value) {
			setAttributes({
				columns: 1,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'equal'
			});
		}

		setColumnsChanged(true);
	};

	useEffect(() => {
		if (!hasColumnsChanged) {
			return;
		}

		if (6 >= columns) {
			updateColumnsWidth(columns, 'equal');
		} else if (6 < columns) {
			updateColumnsWidth(6, 'equal');
		} else if (1 >= columns) {
			updateColumnsWidth(1, 'equal');
		}
		setColumnsChanged(false);
	}, [columns]);

	const changeLayout = value => {
		if ('Desktop' === getView) {
			setAttributes({ layout: value });
			updateColumnsWidth(columns, value);
		}
		if ('Tablet' === getView) {
			setAttributes({ layoutTablet: value });
		}
		if ('Mobile' === getView) {
			setAttributes({ layoutMobile: value });
		}
	};


	const changeHideStatus = (value, type) => {
		if ('Desktop' === type) {
			setAttributes({ hide: value });
		}
		if ('Tablet' === type) {
			setAttributes({ hideTablet: value });
		}
		if ('Mobile' === type) {
			setAttributes({ hideMobile: value });
		}
	};

	const changeReverseColumns = (value, type) => {
		if ('Tablet' === type) {
			setAttributes({ reverseColumnsTablet: value });
		}
		if ('Mobile' === type) {
			setAttributes({ reverseColumnsMobile: value });
		}
	};


	const changeID = value => {
		setAttributes({ id: value });
	};

	const changeColumnsHeight = value => {
		setAttributes({ columnsHeight: value });
	};

	return (
		<>
			<InspectorControls>
				<div className="sb-field sb-head-panel-tabs">
					<div className="sb-panel-tabs-wrap">
						<Button
							className={classnames('sb-panel-tab', { 'active-tab': 'layout' === activeTab })}
							onClick={() => setActiveTab('layout')}
						>
							<span className="dashicons">
								<LayoutIcon />
							</span>
							{__('Layout', 'smart-blocks')}
						</Button>

						<Button
							className={classnames('sb-panel-tab', { 'active-tab': 'style' === activeTab })}
							onClick={() => setActiveTab('style')}
						>
							<span className="dashicons">
								<StyleIcon />
							</span>
							{__('Style', 'smart-blocks')}
						</Button>

						<Button
							className={classnames('sb-panel-tab', { 'active-tab': 'advanced' === activeTab })}
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
									title={__('Columns & Layout', 'smart-blocks')}
									initialOpen={false}
								>
									<RangeControl
										label={__('Columns', 'smart-blocks')}
										value={columns}
										onChange={changeColumns}
										min={1}
										max={6}
									/>

									<LayoutControl
										label={__('Layout', 'smart-blocks')}
										columns={columns}
										layout={layout}
										layoutTablet={layoutTablet}
										layoutMobile={layoutMobile}
										onClick={changeLayout}
									/>

									<RangeSliderControl
										label={__('Column Gap', 'smart-blocks')}
										min={0}
										max={100}
										responsive={!0}
										value={columnsGap}
										setValue={(value) => setAttributes({ columnsGap: value })}
										valueSm={columnsGapSm}
										setValueSm={(value) => setAttributes({ columnsGapSm: value })}
										valueMd={columnsGapMd}
										setValueMd={(value) => setAttributes({ columnsGapMd: value })}
									/>

									<SelectControl
										label={__('Content Width', 'smart-blocks')}
										value={sectionContentWidth}
										options={[
											{ label: __('Full Width', 'smart-blocks'), value: 'full' },
											{ label: __('Boxed', 'smart-blocks'), value: 'boxed' },
										]}
										onChange={value => setAttributes({ sectionContentWidth: value })}
									/>

									<RangeSliderControl
										label={__('Content Max Width', 'smart-blocks')}
										min={0}
										max={1800}
										responsive={!0}
										value={columnsWidth}
										setValue={(value) => setAttributes({ columnsWidth: value })}
										valueSm={columnsWidthSm}
										setValueSm={(value) => setAttributes({ columnsWidthSm: value })}
										valueMd={columnsWidthMd}
										setValueMd={(value) => setAttributes({ columnsWidthMd: value })}
										useUnit={!0}
										units={['px', 'em', '%', 'vw']}
										unit={columnsWidthUnit}
										setUnit={(value) => setAttributes({ columnsWidthUnit: value })}
									/>

									<ButtonGroupControl
										label={__('Direction', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'right',
												icon: <Dashicon icon="arrow-right-alt" />,
												label: __('Flex Start', 'smart-blocks')
											},
											{
												value: 'bottom',
												icon: <Dashicon icon="arrow-down-alt" />,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'left',
												icon: <Dashicon icon="arrow-left-alt" />,
												label: __('Flex End', 'smart-blocks')
											},
											{
												value: 'top',
												icon: <Dashicon icon="arrow-up-alt" />,
												label: __('Stretch', 'smart-blocks')
											},
										]}
										value={sectionFlexDirection}
										setValue={(value) => setAttributes({ sectionFlexDirection: value })}
										valueSm={sectionFlexDirectionSm}
										setValueSm={(value) => setAttributes({ sectionFlexDirectionSm: value })}
										valueMd={sectionFlexDirectionMd}
										setValueMd={(value) => setAttributes({ sectionFlexDirectionMd: value })}
									/>

									<ButtonGroupControl
										label={__('Column Alignment', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'flex-start',
												icon: <AlignFlexStart />,
												label: __('Flex Start', 'smart-blocks')
											},
											{
												value: 'center',
												icon: <AlignCenter />,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'flex-end',
												icon: <AlignFlexEnd />,
												label: __('Flex End', 'smart-blocks')
											},
											{
												value: 'stretch',
												icon: <AlignStretch />,
												label: __('Stretch', 'smart-blocks')
											},
											{
												value: 'baseline',
												icon: <AlignBaseline />,
												label: __('Baseline', 'smart-blocks')
											}
										]}
										value={columnAlignment}
										setValue={(value) => setAttributes({ columnAlignment: value })}
										valueSm={columnAlignmentSm}
										setValueSm={(value) => setAttributes({ columnAlignmentSm: value })}
										valueMd={columnAlignmentMd}
										setValueMd={(value) => setAttributes({ columnAlignmentMd: value })}
									/>

									<ButtonGroupControl
										label={__('Column Justify', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'flex-start',
												icon: <JustifyFlexStart />,
												label: __('Flex Start', 'smart-blocks')
											},
											{
												value: 'center',
												icon: <JustifyCenter />,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'flex-end',
												icon: <JustifyFlexEnd />,
												label: __('Flex End', 'smart-blocks')
											},
											{
												value: 'space-between',
												icon: <JustifySpaceBetween />,
												label: __('Space Between', 'smart-blocks')
											},
											{
												value: 'space-around',
												icon: <JustifySpaceAround />,
												label: __('Space Around', 'smart-blocks')
											},
											{
												value: 'space-evenly',
												icon: <JustifySpaceEvenly />,
												label: __('Space Evenly', 'smart-blocks')
											}
										]}
										value={columnJustify}
										setValue={(value) => setAttributes({ columnJustify: value })}
										valueSm={columnJustifySm}
										setValueSm={(value) => setAttributes({ columnJustifySm: value })}
										valueMd={columnJustifyMd}
										setValueMd={(value) => setAttributes({ columnJustifyMd: value })}
									/>

									<ButtonGroupControl
										label={__('Content Horizontal Align', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'flex-start',
												icon: 'editor-alignleft',
												label: __('Left', 'smart-blocks')
											},
											{
												value: 'center',
												icon: 'editor-aligncenter',
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'right',
												icon: 'editor-alignright',
												label: __('Right', 'smart-blocks')
											}
										]}
										value={horizontalAlign}
										setValue={(value) => setAttributes({ horizontalAlign: value })}
										valueSm={horizontalAlignSm}
										setValueSm={(value) => setAttributes({ horizontalAlignSm: value })}
										valueMd={horizontalAlignMd}
										setValueMd={(value) => setAttributes({ horizontalAlignMd: value })}
									/>

								</PanelBody>

								<PanelBody
									title={__('Block Size & Spacing', 'smart-blocks')}
									initialOpen={false}
								>

									<SelectControl
										label={__('Minimum Height', 'smart-blocks')}
										value={columnsHeight}
										options={[
											{ label: __('Default', 'smart-blocks'), value: 'auto' },
											{ label: __('Fit to Screen', 'smart-blocks'), value: '100vh' },
											{ label: __('Custom', 'smart-blocks'), value: 'custom' }
										]}
										onChange={changeColumnsHeight}
									/>

									{'custom' === columnsHeight && (
										<RangeSliderControl
											label={__('Custom Height', 'smart-blocks')}
											min={1}
											max={100}
											responsive={!0}
											value={columnsHeightCustom}
											setValue={(value) => setAttributes({ columnsHeightCustom: value })}
											valueSm={columnsHeightCustomSm}
											setValueSm={(value) => setAttributes({ columnsHeightCustomSm: value })}
											valueMd={columnsHeightCustomMd}
											setValueMd={(value) => setAttributes({ columnsHeightCustomMd: value })}
											useUnit={!0}
											units={['px', 'em', '%', 'vh']}
											unit={columnsHeightCustomUnit}
											setUnit={(value) => setAttributes({ columnsHeightCustomUnit: value })}
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

										dimensionTop={columnsMarginTop}
										setDimensionTop={value => setAttributes({ columnsMarginTop: value })}
										dimensionMdTop={columnsMarginMdTop}
										setDimensionMdTop={value => setAttributes({ columnsMarginMdTop: value })}
										dimensionSmTop={columnsMarginSmTop}
										setDimensionSmTop={value => setAttributes({ columnsMarginSmTop: value })}

										dimensionLeft={columnsMarginLeft}
										setDimensionLeft={value => setAttributes({ columnsMarginLeft: value })}
										dimensionMdLeft={columnsMarginMdLeft}
										setDimensionMdLeft={value => setAttributes({ columnsMarginMdLeft: value })}
										dimensionSmLeft={columnsMarginSmLeft}
										setDimensionSmLeft={value => setAttributes({ columnsMarginSmLeft: value })}

										dimensionRight={columnsMarginRight}
										setDimensionRight={value => setAttributes({ columnsMarginRight: value })}
										dimensionMdRight={columnsMarginMdRight}
										setDimensionMdRight={value => setAttributes({ columnsMarginMdRight: value })}
										dimensionSmRight={columnsMarginSmRight}
										setDimensionSmRight={value => setAttributes({ columnsMarginSmRight: value })}

										dimensionBottom={columnsMarginBottom}
										setDimensionBottom={value => setAttributes({ columnsMarginBottom: value })}
										dimensionMdBottom={columnsMarginMdBottom}
										setDimensionMdBottom={value => setAttributes({ columnsMarginMdBottom: value })}
										dimensionSmBottom={columnsMarginSmBottom}
										setDimensionSmBottom={value => setAttributes({ columnsMarginSmBottom: value })}

										unit={columnsMarginUnit}
										setUnit={value => setAttributes({ columnsMarginUnit: value })}
									/>

									<DimensionControl
										label={__('Padding', 'smart-blocks')}
										min="0"
										max="100"
										responsive={!0}

										dimensionTop={columnsPaddingTop}
										setDimensionTop={value => setAttributes({ columnsPaddingTop: value })}
										dimensionMdTop={columnsPaddingMdTop}
										setDimensionMdTop={value => setAttributes({ columnsPaddingMdTop: value })}
										dimensionSmTop={columnsPaddingSmTop}
										setDimensionSmTop={value => setAttributes({ columnsPaddingSmTop: value })}

										dimensionLeft={columnsPaddingLeft}
										setDimensionLeft={value => setAttributes({ columnsPaddingLeft: value })}
										dimensionMdLeft={columnsPaddingMdLeft}
										setDimensionMdLeft={value => setAttributes({ columnsPaddingMdLeft: value })}
										dimensionSmLeft={columnsPaddingSmLeft}
										setDimensionSmLeft={value => setAttributes({ columnsPaddingSmLeft: value })}

										dimensionRight={columnsPaddingRight}
										setDimensionRight={value => setAttributes({ columnsPaddingRight: value })}
										dimensionMdRight={columnsPaddingMdRight}
										setDimensionMdRight={value => setAttributes({ columnsPaddingMdRight: value })}
										dimensionSmRight={columnsPaddingSmRight}
										setDimensionSmRight={value => setAttributes({ columnsPaddingSmRight: value })}

										dimensionBottom={columnsPaddingBottom}
										setDimensionBottom={value => setAttributes({ columnsPaddingBottom: value })}
										dimensionMdBottom={columnsPaddingMdBottom}
										setDimensionMdBottom={value => setAttributes({ columnsPaddingMdBottom: value })}
										dimensionSmBottom={columnsPaddingSmBottom}
										setDimensionSmBottom={value => setAttributes({ columnsPaddingSmBottom: value })}

										unit={columnsPaddingUnit}
										setUnit={value => setAttributes({ columnsPaddingUnit: value })}
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
												setValue={(borderNormal) => setAttributes({ borderNormal })}
											/>
											{borderNormal && (
												<ColorControl
													label={__('Border Color', 'smart-blocks')}
													enableAlpha
													value={borderNormalColor}
													setValue={(borderNormalColor) => setAttributes({ borderNormalColor })}
												/>
											)}
											<DimensionControl
												label={__('Border Width', 'smart-blocks')}
												units={['px', 'em']}
												dimensionTop={borderNormalWidthTop}
												setDimensionTop={value => setAttributes({ borderNormalWidthTop: value })}
												dimensionLeft={borderNormalWidthLeft}
												setDimensionLeft={value => setAttributes({ borderNormalWidthLeft: value })}
												dimensionRight={borderNormalWidthRight}
												setDimensionRight={value => setAttributes({ borderNormalWidthRight: value })}
												dimensionBottom={borderNormalWidthBottom}
												setDimensionBottom={value => setAttributes({ borderNormalWidthBottom: value })}

												unit={borderNormalWidthUnit}
												setUnit={value => setAttributes({ borderNormalWidthUnit: value })}
											/>
											<DimensionControl
												label={__('Border Radius', 'smart-blocks')}
												dimensionTop={borderNormalRadiusTop}
												setDimensionTop={value => setAttributes({ borderNormalRadiusTop: value })}
												dimensionLeft={borderNormalRadiusLeft}
												setDimensionLeft={value => setAttributes({ borderNormalRadiusLeft: value })}
												dimensionRight={borderNormalRadiusRight}
												setDimensionRight={value => setAttributes({ borderNormalRadiusRight: value })}
												dimensionBottom={borderNormalRadiusBottom}
												setDimensionBottom={value => setAttributes({ borderNormalRadiusBottom: value })}

												unit={borderNormalRadiusUnit}
												setUnit={value => setAttributes({ borderNormalRadiusUnit: value })}
											/>
											<BoxShadowControl
												valueHorizontal={borderNormalBoxShadowHorizontal}
												setValueHorizontal={(borderNormalBoxShadowHorizontal) => setAttributes({ borderNormalBoxShadowHorizontal })}
												valueVertical={borderNormalBoxShadowVertical}
												setValueVertical={(borderNormalBoxShadowVertical) => setAttributes({ borderNormalBoxShadowVertical })}
												valueBlur={borderNormalBoxShadowBlur}
												setValueBlur={(borderNormalBoxShadowBlur) => setAttributes({ borderNormalBoxShadowBlur })}
												valueSpread={borderNormalBoxShadowSpread}
												setValueSpread={(borderNormalBoxShadowSpread) => setAttributes({ borderNormalBoxShadowSpread })}
												valueColor={borderNormalBoxShadowColor}
												setValueColor={(borderNormalBoxShadowColor) => setAttributes({ borderNormalBoxShadowColor })}
												valueInset={borderNormalBoxShadowInset}
												setValueInset={(borderNormalBoxShadowInset) => setAttributes({ borderNormalBoxShadowInset })}
											/>
										</div>
										<div tabTitle={__("Hover", 'smart-blocks')}>
											<BorderControl
												value={borderHover}
												setValue={(borderHover) => setAttributes({ borderHover })}
											/>
											{borderHover && (
												<ColorControl
													label={__('Border Color', 'smart-blocks')}
													enableAlpha
													value={borderHoverColor}
													setValue={(borderHoverColor) => setAttributes({ borderHoverColor })}
												/>
											)}
											<DimensionControl
												label={__('Border Width', 'smart-blocks')}
												units={['px', 'em']}
												dimensionTop={borderHoverWidthTop}
												setDimensionTop={value => setAttributes({ borderHoverWidthTop: value })}
												dimensionLeft={borderHoverWidthLeft}
												setDimensionLeft={value => setAttributes({ borderHoverWidthLeft: value })}
												dimensionRight={borderHoverWidthRight}
												setDimensionRight={value => setAttributes({ borderHoverWidthRight: value })}
												dimensionBottom={borderHoverWidthBottom}
												setDimensionBottom={value => setAttributes({ borderHoverWidthBottom: value })}

												unit={borderHoverWidthUnit}
												setUnit={value => setAttributes({ borderHoverWidthUnit: value })}
											/>
											<DimensionControl
												label={__('Border Radius', 'smart-blocks')}
												dimensionTop={borderHoverRadiusTop}
												setDimensionTop={value => setAttributes({ borderHoverRadiusTop: value })}
												dimensionLeft={borderHoverRadiusLeft}
												setDimensionLeft={value => setAttributes({ borderHoverRadiusLeft: value })}
												dimensionRight={borderHoverRadiusRight}
												setDimensionRight={value => setAttributes({ borderHoverRadiusRight: value })}
												dimensionBottom={borderHoverRadiusBottom}
												setDimensionBottom={value => setAttributes({ borderHoverRadiusBottom: value })}

												unit={borderHoverRadiusUnit}
												setUnit={value => setAttributes({ borderHoverRadiusUnit: value })}
											/>
											<BoxShadowControl
												valueHorizontal={borderHoverBoxShadowHorizontal}
												setValueHorizontal={(borderHoverBoxShadowHorizontal) => setAttributes({ borderHoverBoxShadowHorizontal })}
												valueVertical={borderHoverBoxShadowVertical}
												setValueVertical={(borderHoverBoxShadowVertical) => setAttributes({ borderHoverBoxShadowVertical })}
												valueBlur={borderHoverBoxShadowBlur}
												setValueBlur={(borderHoverBoxShadowBlur) => setAttributes({ borderHoverBoxShadowBlur })}
												valueSpread={borderHoverBoxShadowSpread}
												setValueSpread={(borderHoverBoxShadowSpread) => setAttributes({ borderHoverBoxShadowSpread })}
												valueColor={borderHoverBoxShadowColor}
												setValueColor={(borderHoverBoxShadowColor) => setAttributes({ borderHoverBoxShadowColor })}
												valueInset={borderHoverBoxShadowInset}
												setValueInset={(borderHoverBoxShadowInset) => setAttributes({ borderHoverBoxShadowInset })}
											/>
										</div>
									</Tabs>
								</PanelBody>

								<PanelBody
									title={__('Background', 'smart-blocks')}
									initialOpen={false}
								>
									<ColorControl
										label={__('Background Color', 'smart-blocks')}
										enableAlpha={!0}
										value={sectionBgColor}
										setValue={(sectionBgColor) => setAttributes({ sectionBgColor })}
									/>

									<ImageBackgroundControl
										label={__("Background Image", 'smart-blocks')}
										imageURL={sectionBgImgURL}
										setImageURL={value => setAttributes({ sectionBgImgURL: value })}
										imageID={sectionBgImgID}
										setImageID={value => setAttributes({ sectionBgImgID: value })}
										imageAttachment={sectionBgAttachment}
										setImageAttachment={value => setAttributes({ sectionBgAttachment: value })}
										imageSize={sectionBgSize}
										setImageSize={value => setAttributes({ sectionBgSize: value })}
										imagePosition={sectionBgPosition}
										setImagePosition={value => setAttributes({ sectionBgPosition: value })}
										imageRepeat={sectionBgRepeat}
										setImageRepeat={value => setAttributes({ sectionBgRepeat: value })}
									/>
								</PanelBody>
							</>
						) || 'advanced' === activeTab && (
							<>
								<PanelBody
									title={__('Responsive', 'smart-blocks')}
									initialOpen={false}
								>
									<ToggleControl
										label={__('Hide this section in Desktop devices?', 'smart-blocks')}
										checked={hide}
										onChange={e => changeHideStatus(e, 'Desktop')}
									/>

									<ToggleControl
										label={__('Hide this section in Tablet devices?', 'smart-blocks')}
										checked={hideTablet}
										onChange={e => changeHideStatus(e, 'Tablet')}
									/>

									<ToggleControl
										label={__('Hide this section in Mobile devices?', 'smart-blocks')}
										checked={hideMobile}
										onChange={e => changeHideStatus(e, 'Mobile')}
									/>

									<hr />

									{(!hideTablet && 'collapsedRows' === layoutTablet) && (
										<ToggleControl
											label={__('Reverse Columns in Tablet devices?', 'smart-blocks')}
											checked={reverseColumnsTablet}
											onChange={e => changeReverseColumns(e, 'Tablet')}
										/>
									)}

									{(!hideMobile && 'collapsedRows' === layoutMobile) && (
										<ToggleControl
											label={__('Reverse Columns in Mobile devices?', 'smart-blocks')}
											checked={reverseColumnsMobile}
											onChange={e => changeReverseColumns(e, 'Mobile')}
										/>
									)}
								</PanelBody>

								<PanelBody
									title={__('Section Settings', 'smart-blocks')}
									initialOpen={false}
								>
									<SelectControl
										label={__('HTML Tag', 'smart-blocks')}
										value={columnsHTMLTag}
										options={[
											{ label: __('Default (div)', 'smart-blocks'), value: 'div' },
											{ label: 'section', value: 'section' },
											{ label: 'header', value: 'header' },
											{ label: 'footer', value: 'footer' },
											{ label: 'article', value: 'article' },
											{ label: 'main', value: 'main' }
										]}
										onChange={value => setAttributes({ columnsHTMLTag: value })}
									/>
								</PanelBody>
							</>
						)}
					</div>
				</div>
			</InspectorControls>
		</>
	);
};

export default Inspector;
