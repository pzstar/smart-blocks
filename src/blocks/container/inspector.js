import classnames from 'classnames';

import {__} from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	GradientPicker,
	Tooltip
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import {
	useEffect,
	useRef,
	useState
} from '@wordpress/element';
import ToggleControl from '../../controls/toggle';
import SelectControl from '../../controls/select';

/**
 * Internal dependencies
 */
import DimensionControl from '../../controls/dimension';
import ColorControl from '../../controls/color';
import ImageBackgroundControl from '../../controls/imagebackground';
import BoxShadowControl from '../../controls/boxshadow';
import BorderControl from '../../controls/border';
import Tabs from '../../utils/tabs';
import ButtonGroupControl from '../../controls/buttongroup';
import RangeSliderControl from '../../controls/rangeslider';
import GapControl from '../../controls/gap';
import TextControl from '../../controls/text';

import {
	LayoutIcon,
	StyleIcon,
	AdvancedIcon,
	ArrowRight,
	ArrowBottom,
	ArrowLeft,
	ArrowUp,

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
import { applyFilters } from '@wordpress/hooks';

const Inspector = (props) => {
    const {attributes, setAttributes} = props;
	const {
		enableSticky,
		stickyOffsetTop,
		stickyOffsetTopSm,
		stickyOffsetTopMd,
		stickyOffsetTopUnit,
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

		flexibleContentDisplay,
		flexDirection,
		flexDirectionSm,
		flexDirectionMd,

		flexibleContentWidthEnable,
		flexibleContentWidth,
		flexibleContentWidthUnit,

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

		hrefLinkURL,
		columnsHTMLTag

	} = attributes;
	const [activeTab, setActiveTab] = useState('layout');

	const getView = useSelect((select) => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

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
								title={__('Sticky Options', 'smart-blocks')}
								initialOpen={false}
							>
								<ToggleControl
									label={__('Enable Sticky', 'smart-blocks')}
									checked={enableSticky}
									onChange={() => setAttributes({'enableSticky': !enableSticky})}
								/>

								{enableSticky && (<RangeSliderControl
									label={__('Sticky Offset', 'smart-blocks')}
									min={0}
									max={300}
									responsive={!1}
									value={stickyOffsetTop}
									setValue={(value) => setAttributes({stickyOffsetTop: value})}
									useUnit={!0}
									units={['px']}
									unit={stickyOffsetTopUnit}
									setUnit={(value) => setAttributes({stickyOffsetTopUnit: value})}
								/>)}

								<p className="sb-inspector-help-text">
									Container Should be inside column for sticky
								</p>
							</PanelBody>

							<PanelBody
								title={__('Flexible Content Options', 'smart-blocks')}
								initialOpen={false}
							>

								<div className={'sb-inspect-tabs'}>
									<div className="components-tab-panel__tabs">
										<Tooltip text={__("Flex", 'smart-blocks')}>
											<button
												className={((!flexibleContentDisplay || 'flex' === flexibleContentDisplay) ? "active-tab" : "") + " components-button sb-tab-menu"}
												onClick={() => setAttributes({flexibleContentDisplay: 'flex'})}
											>
												{__("Flex", 'smart-blocks')}
											</button>
										</Tooltip>

										<Tooltip text={__("Grid", 'smart-blocks')}>
											<button
												className={(('grid' === flexibleContentDisplay) ? "active-tab" : "") + " components-button sb-tab-menu"}
												onClick={() => setAttributes({flexibleContentDisplay: 'grid'})}
											>
												{__("Grid", 'smart-blocks')}
											</button>
										</Tooltip>
									</div>
								</div>

								{(!flexibleContentDisplay || 'flex' === flexibleContentDisplay) && (
									<>
										<ToggleControl
											label={__('Set Width', 'smart-blocks')}
											checked={flexibleContentWidthEnable}
											onChange={() => setAttributes({'flexibleContentWidthEnable': !flexibleContentWidthEnable})}
										/>

										{flexibleContentWidthEnable && (<RangeSliderControl
											label={__('Columns Width', 'smart-blocks')}
											min={0}
											max={2000}
											responsive={!1}
											value={flexibleContentWidth}
											setValue={(value) => setAttributes({flexibleContentWidth: value})}
											useUnit={!0}
											unit={flexibleContentWidthUnit}
											setUnit={(value) => setAttributes({flexibleContentWidthUnit: value})}
										/>)}

										<ButtonGroupControl
											label={__('Direction', 'smart-blocks')}
											responsive={!0}
											options={[
												{
													value: 'row',
													icon: <i class="sbi-arrow-right"></i>,
													label: __('Right', 'smart-blocks')
												},
												{
													value: 'column',
													icon: <i class="sbi-arrow-down"></i>,
													label: __('Bottom', 'smart-blocks')
												},
												{
													value: 'row-reverse',
													icon: <i class="sbi-arrow-left"></i>,
													label: __('Left', 'smart-blocks')
												},
												{
													value: 'column-reverse',
													icon: <i class="sbi-arrow-up"></i>,
													label: __('Top', 'smart-blocks')
												}
											]}
											value={flexDirection}
											setValue={(value) => setAttributes({flexDirection: value})}
											valueSm={flexDirectionSm}
											setValueSm={(value) => setAttributes({flexDirectionSm: value})}
											valueMd={flexDirectionMd}
											setValueMd={(value) => setAttributes({flexDirectionMd: value})}
										/>


										<ButtonGroupControl
											label={__('Container Wrap', 'smart-blocks')}
											responsive={!0}
											options={[
												{
													value: 'nowrap',
													icon: <i class="sbi-arrow-right"></i>,
													label: __('No Wrap', 'smart-blocks')
												},
												{
													value: 'wrap',
													icon: <i class="sbi-wrap"></i>,
													label: __('Wrap', 'smart-blocks')
												},
											]}
											value={containerWrap}
											setValue={(value) => setAttributes({containerWrap: value})}
											valueSm={containerWrapSm}
											setValueSm={(value) => setAttributes({containerWrapSm: value})}
											valueMd={containerWrapMd}
											setValueMd={(value) => setAttributes({containerWrapMd: value})}
										/>
									</>
								)}
								{('grid' === flexibleContentDisplay) && (
									<>
										<ToggleControl
											label={__('Set Width', 'smart-blocks')}
											checked={flexibleContentWidthEnable}
											onChange={() => setAttributes({'flexibleContentWidthEnable': !flexibleContentWidthEnable})}
										/>

										{flexibleContentWidthEnable && (<RangeSliderControl
											label={__('Columns Width', 'smart-blocks')}
											min={0}
											max={2000}
											responsive={!1}
											value={flexibleContentWidth}
											setValue={(value) => setAttributes({flexibleContentWidth: value})}
											useUnit={!0}
											unit={flexibleContentWidthUnit}
											setUnit={(value) => setAttributes({flexibleContentWidthUnit: value})}
										/>)}
										<RangeSliderControl
											label={__('Column Number', 'smart-blocks')}
											min={1}
											max={8}
											responsive={!0}
											value={gridColumnNumber}
											setValue={(value) => setAttributes({gridColumnNumber: value})}
											valueSm={gridColumnNumberSm}
											setValueSm={(value) => setAttributes({gridColumnNumberSm: value})}
											valueMd={gridColumnNumberMd}
											setValueMd={(value) => setAttributes({gridColumnNumberMd: value})}
										/>
									</>
								)}

								<ButtonGroupControl
									label={__('Align Items', 'smart-blocks')}
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
									value={alignItems}
									setValue={(value) => setAttributes({alignItems: value})}
									valueSm={alignItemsSm}
									setValueSm={(value) => setAttributes({alignItemsSm: value})}
									valueMd={alignItemsMd}
									setValueMd={(value) => setAttributes({alignItemsMd: value})}
								/>

								{('flex' === flexibleContentDisplay) && (<>
									<ButtonGroupControl
										label={__('Justify Content', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'flex-start',
												icon: <i class="sbi-justify-start-h"></i>,
												label: __('Flex Start', 'smart-blocks')
											},
											{
												value: 'center',
												icon: <i class="sbi-justify-center-h"></i>,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'flex-end',
												icon: <i class="sbi-justify-end-h"></i>,
												label: __('Flex End', 'smart-blocks')
											},
											{
												value: 'space-between',
												icon: <i class="sbi-justify-space-between-h"></i>,
												label: __('Space Between', 'smart-blocks')
											},
											{
												value: 'space-around',
												icon: <i class="sbi-justify-space-around-h"></i>,
												label: __('Space Around', 'smart-blocks')
											},
											{
												value: 'space-evenly',
												icon: <i class="sbi-justify-space-evenly-h"></i>,
												label: __('Space Evenly', 'smart-blocks')
											}
										]}
										value={justifyContent}
										setValue={(value) => setAttributes({justifyContent: value})}
										valueSm={justifyContentSm}
										setValueSm={(value) => setAttributes({justifyContentSm: value})}
										valueMd={justifyContentMd}
										setValueMd={(value) => setAttributes({justifyContentMd: value})}
									/>
								</>)}

								{('grid' === flexibleContentDisplay) && (<>
									<ButtonGroupControl
										label={__('Justify Items', 'smart-blocks')}
										responsive={!0}
										options={[
											{
												value: 'start',
												icon: <i class="sbi-align-start-h"></i>,
												label: __('Start', 'smart-blocks')
											},
											{
												value: 'center',
												icon: <i class="sbi-align-center-h"></i>,
												label: __('Center', 'smart-blocks')
											},
											{
												value: 'end',
												icon: <i class="sbi-align-end-h"></i>,
												label: __('Stretch', 'smart-blocks')
											},
											{
												value: 'srtetch',
												icon: <i class="sbi-align-stretch-h"></i>,
												label: __('Stretch', 'smart-blocks')
											}
										]}
										value={justifyItems}
										setValue={(value) => setAttributes({justifyItems: value})}
										valueSm={justifyItemsSm}
										setValueSm={(value) => setAttributes({justifyItemsSm: value})}
										valueMd={justifyItemsMd}
										setValueMd={(value) => setAttributes({justifyItemsMd: value})}
									/>
								</>)}

								<GapControl
									label={__('Gaps', 'smart-blocks')}
									min="0"
									max="100"
									responsive={!0}

									gapColumn={containerGapColumn}
									setGapColumn={value => setAttributes({containerGapColumn: value})}
									gapMdColumn={containerGapMdColumn}
									setGapMdColumn={value => setAttributes({containerGapMdColumn: value})}
									gapSmColumn={containerGapSmColumn}
									setGapSmColumn={value => setAttributes({containerGapSmColumn: value})}

									gapRow={containerGapRow}
									setGapRow={value => setAttributes({containerGapRow: value})}
									gapMdRow={containerGapMdRow}
									setGapMdRow={value => setAttributes({containerGapMdRow: value})}
									gapSmRow={containerGapSmRow}
									setGapSmRow={value => setAttributes({containerGapSmRow: value})}

									unit={containerGapUnit}
									setUnit={value => setAttributes({containerGapUnit: value})}
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
									value={columnsHTMLTag}
									options={[
										{label: __('Default (div)', 'smart-blocks'), value: 'div'},
										{label: 'section', value: 'section'},
										{label: 'header', value: 'header'},
										{label: 'footer', value: 'footer'},
										{label: 'article', value: 'article'},
										{label: 'main', value: 'main'},
										{label: 'anchor link', value: 'a'}
									]}
									onChange={value => setAttributes({columnsHTMLTag: value})}
									inline={!1}
								/>
								{columnsHTMLTag == 'a' && (
									<>
										<TextControl
											label={__('Link URL', 'smart-blocks')}
											type="text"
											value={hrefLinkURL}
											setValue={value => setAttributes({hrefLinkURL: value})}
										/>
									</>
								)}
							</PanelBody>

                            {applyFilters('smartblocks.blockTools', '', props)}
						</>
					)}
				</div>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
