import classnames from 'classnames';

import {__} from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	Dashicon,
	PanelBody,
	RangeControl,
	GradientPicker,
	Tooltip
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import {
	useState,
	useEffect
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import LayoutControl from '../components/layout-control';
import DimensionControl from '../../../controls/dimension';
import RangeSliderControl from '../../../controls/rangeslider';
import ButtonGroupControl from '../../../controls/buttongroup';
import ColorControl from '../../../controls/color';
import ImageBackgroundControl from '../../../controls/imagebackground';
import BoxShadowControl from '../../../controls/boxshadow';
import BorderControl from '../../../controls/border';
import GapControl from '../../../controls/gap';
import ToggleControl from '../../../controls/toggle';
import SelectControl from '../../../controls/select';
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
} from '../../../utils/svgicons';
import Tabs from '../../../utils/tabs';
import {applyFilters} from '@wordpress/hooks';

const Inspector = (props) => {
	const {attributes, setAttributes, updateColumnsWidth} = props;
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

		layout,
		layoutTablet,
		layoutMobile,

		columnsWidth,
		columnsWidthMd,
		columnsWidthSm,
		columnsWidthUnit,

		columnsHeight,
		columnsHeightSm,
		columnsHeightMd,
		columnsHeightUnit,

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

		sectionBgType,
		sectionBgImgURL,
		sectionBgImgID,
		sectionBgAttachment,
		sectionBgSize,
		sectionBgPositionX,
		sectionBgPositionY,
		sectionBgRepeat,
		sectionBgGradient,
		sectionBgOverlayColor,

		sectionContentWidth,

		columnsGapRow,
		columnsGapSmRow,
		columnsGapMdRow,

		columnsGapColumn,
		columnsGapSmColumn,
		columnsGapMdColumn,
		columnsGapUnit,
	} = attributes;

	const getView = useSelect((select) => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const [activeTab, setActiveTab] = useState('layout');
	const [hasColumnsChanged, setColumnsChanged] = useState(false);

	const changeColumns = value => {
		value = parseInt(value);
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
			setAttributes({layout: value});
			updateColumnsWidth(columns, value);
			(columns == 2 || columns == 3) && layoutTablet != 'collapsedRows' && setAttributes({layoutTablet: value});
			(columns == 2 || columns == 3) && layoutMobile != 'collapsedRows' && setAttributes({layoutMobile: value});
		}
		if ('Tablet' === getView) {
			setAttributes({layoutTablet: value});
		}
		if ('Mobile' === getView) {
			setAttributes({layoutMobile: value});
		}
	};


	const changeHideStatus = (value, type) => {
		if ('Desktop' === type) {
			setAttributes({hide: value});
		}
		if ('Tablet' === type) {
			setAttributes({hideTablet: value});
		}
		if ('Mobile' === type) {
			setAttributes({hideMobile: value});
		}
	};

	const changeReverseColumns = (value, type) => {
		if ('Tablet' === type) {
			setAttributes({reverseColumnsTablet: value});
		}
		if ('Mobile' === type) {
			setAttributes({reverseColumnsMobile: value});
		}
	};


	return (
		<>
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
									title={__('Columns & Layout', 'smart-blocks')}
									initialOpen={false}
								>
									<RangeSliderControl
										label={__('Columns', 'smart-blocks')}
										min={1}
										max={6}
										responsive={!1}
										useUnit={!1}
										value={columns}
										setValue={changeColumns}
									/>

									<LayoutControl
										label={__('Layout', 'smart-blocks')}
										columns={columns}
										layout={layout}
										layoutTablet={layoutTablet}
										layoutMobile={layoutMobile}
										onClick={changeLayout}
									/>

									<SelectControl
										label={__('Content Width', 'smart-blocks')}
										value={sectionContentWidth}
										options={[
											{label: __('Full Width', 'smart-blocks'), value: 'full'},
											{label: __('Boxed', 'smart-blocks'), value: 'boxed'},
										]}
										onChange={value => {
											setAttributes({sectionContentWidth: value, columnsWidth: '', columnsWidthSm: '', columnsWidthMd: ''});
											value === 'full' && setAttributes({columnsWidthUnit: '%'})
										}}
										inline={!1}
									/>

									<RangeSliderControl
										label={__('Width', 'smart-blocks')}
										min={0}
										max={2200}
										responsive={!0}
										value={columnsWidth}
										setValue={(value) => setAttributes({columnsWidth: value})}
										valueSm={columnsWidthSm}
										setValueSm={(value) => setAttributes({columnsWidthSm: value})}
										valueMd={columnsWidthMd}
										setValueMd={(value) => setAttributes({columnsWidthMd: value})}
										useUnit={!0}
										units={sectionContentWidth === 'full' ? ['%'] : ['px', 'em', '%', 'vw']}
										unit={columnsWidthUnit}
										setUnit={(value) => setAttributes({columnsWidthUnit: value})}
									/>

									<RangeSliderControl
										label={__('Min Height', 'smart-blocks')}
										min={0}
										max={1200}
										responsive={!0}
										value={columnsHeight}
										setValue={(value) => setAttributes({columnsHeight: value})}
										valueSm={columnsHeightSm}
										setValueSm={(value) => setAttributes({columnsHeightSm: value})}
										valueMd={columnsHeightMd}
										setValueMd={(value) => setAttributes({columnsHeightMd: value})}
										useUnit={!0}
										units={['px', 'em', '%', 'vh']}
										unit={columnsHeightUnit}
										setUnit={(value) => setAttributes({columnsHeightUnit: value})}
									/>

									<ButtonGroupControl
										label={__('Column Align', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'flex-start',
												icon: <i class="sbi-align-start-v"></i>,
												label: __('Flex Start', 'smart-blocks')
											},
											{
												value: 'center',
												icon: <i class="sbi-align-center-v"></i>,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'flex-end',
												icon: <i class="sbi-align-end-v"></i>,
												label: __('Flex End', 'smart-blocks')
											},
											{
												value: 'stretch',
												icon: <i class="sbi-align-stretch-v"></i>,
												label: __('Stretch', 'smart-blocks')
											}
										]}
										value={columnAlignment}
										setValue={(value) => setAttributes({columnAlignment: value})}
										valueSm={columnAlignmentSm}
										setValueSm={(value) => setAttributes({columnAlignmentSm: value})}
										valueMd={columnAlignmentMd}
										setValueMd={(value) => setAttributes({columnAlignmentMd: value})}
									/>

									<ButtonGroupControl
										label={__('Text Align', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'left',
												icon: <i class="sbi-text-align-left"></i>,
												label: __('Left', 'smart-blocks')
											},
											{
												value: 'center',
												icon: <i class="sbi-text-align-center"></i>,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'right',
												icon: <i class="sbi-text-align-right"></i>,
												label: __('Right', 'smart-blocks')
											}
										]}
										value={horizontalAlign}
										setValue={(value) => setAttributes({horizontalAlign: value})}
										valueSm={horizontalAlignSm}
										setValueSm={(value) => setAttributes({horizontalAlignSm: value})}
										valueMd={horizontalAlignMd}
										setValueMd={(value) => setAttributes({horizontalAlignMd: value})}
									/>

									<GapControl
										label={__('Gaps', 'smart-blocks')}
										min="0"
										max="100"
										responsive={!0}

										gapColumn={columnsGapColumn}
										setGapColumn={value => setAttributes({columnsGapColumn: value})}
										gapMdColumn={columnsGapMdColumn}
										setGapMdColumn={value => setAttributes({columnsGapMdColumn: value})}
										gapSmColumn={columnsGapSmColumn}
										setGapSmColumn={value => setAttributes({columnsGapSmColumn: value})}

										gapRow={columnsGapRow}
										setGapRow={value => setAttributes({columnsGapRow: value})}
										gapMdRow={columnsGapMdRow}
										setGapMdRow={value => setAttributes({columnsGapMdRow: value})}
										gapSmRow={columnsGapSmRow}
										setGapSmRow={value => setAttributes({columnsGapSmRow: value})}

										unit={columnsGapUnit}
										setUnit={value => setAttributes({columnsGapUnit: value})}
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

										dimensionTop={columnsMarginTop}
										setDimensionTop={value => setAttributes({columnsMarginTop: value})}
										dimensionMdTop={columnsMarginMdTop}
										setDimensionMdTop={value => setAttributes({columnsMarginMdTop: value})}
										dimensionSmTop={columnsMarginSmTop}
										setDimensionSmTop={value => setAttributes({columnsMarginSmTop: value})}

										dimensionLeft={columnsMarginLeft}
										setDimensionLeft={value => setAttributes({columnsMarginLeft: value})}
										dimensionMdLeft={columnsMarginMdLeft}
										setDimensionMdLeft={value => setAttributes({columnsMarginMdLeft: value})}
										dimensionSmLeft={columnsMarginSmLeft}
										setDimensionSmLeft={value => setAttributes({columnsMarginSmLeft: value})}

										dimensionRight={columnsMarginRight}
										setDimensionRight={value => setAttributes({columnsMarginRight: value})}
										dimensionMdRight={columnsMarginMdRight}
										setDimensionMdRight={value => setAttributes({columnsMarginMdRight: value})}
										dimensionSmRight={columnsMarginSmRight}
										setDimensionSmRight={value => setAttributes({columnsMarginSmRight: value})}

										dimensionBottom={columnsMarginBottom}
										setDimensionBottom={value => setAttributes({columnsMarginBottom: value})}
										dimensionMdBottom={columnsMarginMdBottom}
										setDimensionMdBottom={value => setAttributes({columnsMarginMdBottom: value})}
										dimensionSmBottom={columnsMarginSmBottom}
										setDimensionSmBottom={value => setAttributes({columnsMarginSmBottom: value})}

										unit={columnsMarginUnit}
										setUnit={value => setAttributes({columnsMarginUnit: value})}
									/>

									<DimensionControl
										label={__('Padding', 'smart-blocks')}
										min="0"
										max="100"
										responsive={!0}

										dimensionTop={columnsPaddingTop}
										setDimensionTop={value => setAttributes({columnsPaddingTop: value})}
										dimensionMdTop={columnsPaddingMdTop}
										setDimensionMdTop={value => setAttributes({columnsPaddingMdTop: value})}
										dimensionSmTop={columnsPaddingSmTop}
										setDimensionSmTop={value => setAttributes({columnsPaddingSmTop: value})}

										dimensionLeft={columnsPaddingLeft}
										setDimensionLeft={value => setAttributes({columnsPaddingLeft: value})}
										dimensionMdLeft={columnsPaddingMdLeft}
										setDimensionMdLeft={value => setAttributes({columnsPaddingMdLeft: value})}
										dimensionSmLeft={columnsPaddingSmLeft}
										setDimensionSmLeft={value => setAttributes({columnsPaddingSmLeft: value})}

										dimensionRight={columnsPaddingRight}
										setDimensionRight={value => setAttributes({columnsPaddingRight: value})}
										dimensionMdRight={columnsPaddingMdRight}
										setDimensionMdRight={value => setAttributes({columnsPaddingMdRight: value})}
										dimensionSmRight={columnsPaddingSmRight}
										setDimensionSmRight={value => setAttributes({columnsPaddingSmRight: value})}

										dimensionBottom={columnsPaddingBottom}
										setDimensionBottom={value => setAttributes({columnsPaddingBottom: value})}
										dimensionMdBottom={columnsPaddingMdBottom}
										setDimensionMdBottom={value => setAttributes({columnsPaddingMdBottom: value})}
										dimensionSmBottom={columnsPaddingSmBottom}
										setDimensionSmBottom={value => setAttributes({columnsPaddingSmBottom: value})}

										unit={columnsPaddingUnit}
										setUnit={value => setAttributes({columnsPaddingUnit: value})}
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
												<button className={('imageOrColor' === sectionBgType ? "active-tab" : "") + " components-button sb-tab-menu"}
													onClick={() => setAttributes({sectionBgType: 'imageOrColor'})}
												>
													{__("Image/Color", 'smart-blocks')}
												</button>
											</Tooltip>

											<Tooltip text={__("Gradient", 'smart-blocks')}>
												<button className={('gradient' === sectionBgType ? "active-tab" : "") + " components-button sb-tab-menu"}
													onClick={() => setAttributes({sectionBgType: 'gradient'})}
												>
													{__("Gradient", 'smart-blocks')}
												</button>
											</Tooltip>
										</div>
										<div className="sb-field-tab-items">
											{'imageOrColor' === sectionBgType && (
												<>
													<ColorControl
														label={__('Background Color', 'smart-blocks')}
														enableAlpha={!0}
														value={sectionBgColor}
														setValue={(sectionBgColor) => setAttributes({sectionBgColor})}
													/>

													<ImageBackgroundControl
														label={__("Background Image", 'smart-blocks')}
														imageURL={sectionBgImgURL}
														setImageURL={value => setAttributes({sectionBgImgURL: value})}
														imageID={sectionBgImgID}
														setImageID={value => setAttributes({sectionBgImgID: value})}
														imageAttachment={sectionBgAttachment}
														setImageAttachment={value => setAttributes({sectionBgAttachment: value})}
														imageSize={sectionBgSize}
														setImageSize={value => setAttributes({sectionBgSize: value})}
														imagePositionX={sectionBgPositionX}
														setImagePositionX={value => setAttributes({sectionBgPositionX: value})}
														imagePositionY={sectionBgPositionY}
														setImagePositionY={value => setAttributes({sectionBgPositionY: value})}
														imageRepeat={sectionBgRepeat}
														setImageRepeat={value => setAttributes({sectionBgRepeat: value})}
														imageOverlayColor={sectionBgOverlayColor}
														setImageOverlayColor={value => setAttributes({sectionBgOverlayColor: value})}
													/>
												</>
											) || 'gradient' === sectionBgType && (
												<>
													<GradientPicker
														label={__('Background Gradient', 'smart-blocks')}
														value={sectionBgGradient}
														onChange={value => setAttributes({sectionBgGradient: value})}
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
											{label: __('Default (div)', 'smart-blocks'), value: 'div'},
											{label: 'section', value: 'section'},
											{label: 'header', value: 'header'},
											{label: 'footer', value: 'footer'},
											{label: 'article', value: 'article'},
											{label: 'main', value: 'main'}
										]}
										onChange={value => setAttributes({columnsHTMLTag: value})}
									/>
								</PanelBody>

                                {applyFilters('smartblocks.advancedBlocks', '', props)}
								{applyFilters('smartblocks.blockTools', '', props)}
							</>
						)}
					</div>
				</div>
			</InspectorControls>
		</>
	);
};

export default Inspector;
