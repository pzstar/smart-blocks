import {Dashicon, Dropdown, Tooltip} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import GoogleFontsList from '../utils/googlefonts.json';
import ResponsiveDropdown from '../utils/responsivedropdown';
import {ClearIcon} from '../utils/svgicons';

const TypographyControl = ({
	label,
	valueFamily,
	setValueFamily,
	valueWeight,
	setValueWeight,
	valueTextTransform,
	setValueTextTransform,
	valueTextDecoration,
	setValueTextDecoration,
	valueFontSize,
	setValueFontSize,
	valueFontSizeMd,
	setValueFontSizeMd,
	valueFontSizeSm,
	setValueFontSizeSm,
	valueFontSizeUnit,
	setValueFontSizeUnit,
	valueLetterSpacing,
	setValueLetterSpacing,
	valueLetterSpacingMd,
	setValueLetterSpacingMd,
	valueLetterSpacingSm,
	setValueLetterSpacingSm,
	valueLetterSpacingUnit,
	setValueLetterSpacingUnit,
	valueLineHeight,
	setValueLineHeight,
	valueLineHeightMd,
	setValueLineHeightMd,
	valueLineHeightSm,
	setValueLineHeightSm,
	valueLineHeightUnit,
	setValueLineHeightUnit
}) => {
	const [allWeights, setAllWeights] = useState(GoogleFontsList.filter(font => font.family === (valueFamily ? valueFamily : 'inherit'))[0].variants);

	const onClearHandler = (e) => {
		setValueFamily('Default');
		setValueWeight('Default');
		setValueTextTransform('inherit');
		setValueTextDecoration('inherit');
		setValueFontSize(undefined);
		setValueFontSizeMd(undefined);
		setValueFontSizeSm(undefined);
		setValueFontSizeUnit('px');
		setValueLetterSpacing(undefined);
		setValueLetterSpacingMd(undefined);
		setValueLetterSpacingSm(undefined);
		setValueLetterSpacingUnit('px');
		setValueLineHeight(undefined);
		setValueLineHeightMd(undefined);
		setValueLineHeightSm(undefined);
		setValueLineHeightUnit('px');
	}

	const getView = useSelect(select => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	return <>
		<div className="sb-typography-options">
			<div className="sb-field sb-flex sb-inline-block sb-typography-option-actions">
				<label className="sb-mb-0">{label ? label : __("Typography", 'smart-blocks')}</label>
				<div className="sb-flex">
					<Tooltip text={__('Clear', 'smart-blocks')}>
						<div className="sb-reset-color"
							onClick={onClearHandler}>
							<span className="sb-border-clear sb-flex" role="button">
								<ClearIcon />
							</span>
						</div>
					</Tooltip>
					<Dropdown
						position="top right"
						className="sb-ml-auto"
						contentClassName="sb-popover-style"
						renderToggle={({isOpen, onToggle}) => (
							<button
								className="sb-typo-setttings"
								isPrimary={!0}
								onClick={onToggle}
								aria-expanded={isOpen}
							>
								<Dashicon size="15" icon="admin-tools" />
							</button>
						)}
						renderContent={() => <div className="sb-typography-advanced">
							<div className="sb-typography-font-family-options">
								<div className="sb-fonts-weight-inner">
									<div className="sb-field-select sb-field sb-d-flex sb-inline-block">
										<label className="sb-typography-font-family-label">{__("Font Family", 'smart-blocks')}</label>
										<div className="sb-field-child">
											<div className="sb-popup-select">
												<select
													value={valueFamily}
													onChange={(e) => {
														const fontFamilyValue = e.target.value;
														setValueFamily(fontFamilyValue);
														setAllWeights(GoogleFontsList.filter(font => font.family === fontFamilyValue)[0].variants);
														setValueWeight('400');
													}}>
													{GoogleFontsList && GoogleFontsList.map((font, index) => {
														return <option value={font.family} key={index}>{`${font.family != 'inherit' ? font.family : 'Default'}`}</option>;
													}
													)}
												</select>
											</div>
										</div>
									</div>
									<div className="sb-field-select sb-field sb-d-flex sb-inline-block">
										<label className="sb-typography-font-weight-label">{__("Weight/Style", 'smart-blocks')}</label>
										<div className="sb-field-child">
											<div className="sb-popup-select">
												<select
													value={valueWeight}
													onChange={(e) => setValueWeight(e.target.value)}>
													{!(valueFamily && valueFamily != 'inherit') && (<option value="inherit">Default</option>)}
													{Object.keys(allWeights).sort().map((key) => {
														return <option value={key}>{allWeights[key]}</option>;
													})
													}
												</select>
											</div>
										</div>
									</div>

									<div className="sb-field-select sb-field sb-d-flex sb-inline-block">
										<label className="">{__('Text Transform', 'smart-blocks')}</label>
										<div className="sb-field-child">
											<div className="sb-popup-select">
												<select
													value={valueTextTransform}
													onChange={(e) => setValueTextTransform(e.target.value)}>
													<option value="inherit">Default</option>
													<option value="none">None</option>
													<option value="uppercase">Uppercase</option>
													<option value="lowercase">Lowercase</option>
													<option value="capitalize">Capitalize</option>
												</select>
											</div>
										</div>
									</div>
									<div className="sb-field-select sb-field sb-d-flex sb-inline-block">
										<label className="">{__('Text Decoration', 'smart-blocks')}</label>
										<div className="sb-field-child">
											<div className="sb-popup-select">
												<select
													value={valueTextDecoration}
													onChange={(e) => setValueTextDecoration(e.target.value)}>
													<option value="inherit">Default</option>
													<option value="none">None</option>
													<option value="underline">Underline</option>
													<option value="line-through">Line Through</option>
													<option value="overline">Overline</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="sb-field-range sb-field sb-responsive ">
									<div className="sb-d-flex sb-align-center">
										<div>
											<label for="input">{__('Font Size', 'smart-blocks')}</label>
										</div>
										<ResponsiveDropdown />
										<div className="sb-unit-btn-group sb-ml-auto sb-mb-5">
											<button
												className={`${valueFontSizeUnit === 'px' ? "active" : ""}`}
												onClick={(e) => setValueFontSizeUnit('px')}
											>px
											</button>
											<button
												className={`${valueFontSizeUnit === 'em' ? "active" : ""}`}
												onClick={(e) => setValueFontSizeUnit('em')}
											>em
											</button>
											<button
												className={`${valueFontSizeUnit === '%' ? "active" : ""}`}
												onClick={(e) => setValueFontSizeUnit('%')}
											>%
											</button>
										</div>
									</div>
									<div className="nxp-field-child">
										{getView == 'Desktop' && (<div className="sb-input-range">
											<input type="range"
												min="1"
												max="150"
												step="1"
												value={valueFontSize}
												onChange={(e) => setValueFontSize(e.target.value)}
											/>
											<input
												type="number"
												step="1"
												value={valueFontSize}
												onChange={(e) => setValueFontSize(e.target.value)}
											/>
										</div>)}
										{getView == 'Tablet' && (<div className="sb-input-range">
											<input type="range"
												min="1"
												max="150"
												step="1"
												value={valueFontSizeMd}
												onChange={(e) => setValueFontSizeMd(e.target.value)}
											/>
											<input
												type="number"
												step="1"
												value={valueFontSizeMd}
												onChange={(e) => setValueFontSizeMd(e.target.value)}
											/>
										</div>)}
										{getView == 'Mobile' && (<div className="sb-input-range">
											<input type="range"
												min="1"
												max="150"
												step="1"
												value={valueFontSizeSm}
												onChange={(e) => setValueFontSizeSm(e.target.value)}
											/>
											<input
												type="number"
												step="1"
												value={valueFontSizeSm}
												onChange={(e) => setValueFontSizeSm(e.target.value)}
											/>
										</div>)}
									</div>
								</div>
								<div className="sb-field-range sb-field sb-responsive">
									<div className="sb-d-flex sb-align-center">
										<div>
											<label for="input">{__('Letter Spacing', 'smart-blocks')}</label>
										</div>
										<ResponsiveDropdown />
										<div className="sb-unit-btn-group sb-ml-auto sb-mb-5">
											<button
												className={`${valueLetterSpacingUnit === 'px' ? "active" : ""}`}
												onClick={(e) => setValueLetterSpacingUnit('px')}
											>px
											</button>
											<button
												className={`${valueLetterSpacingUnit === 'em' ? "active" : ""}`}
												onClick={(e) => setValueLetterSpacingUnit('em')}
											>em
											</button>
											<button
												className={`${valueLetterSpacingUnit === '%' ? "active" : ""}`}
												onClick={(e) => setValueLetterSpacingUnit('%')}
											>%
											</button>
										</div>
									</div>
									<div className="nxp-field-child">
										{getView == 'Desktop' && (<div className="sb-input-range">
											<input type="range"
												min="-10"
												max="20"
												step="0.1"
												value={valueLetterSpacing}
												onChange={(e) => setValueLetterSpacing(e.target.value)}
											/>
											<input
												type="number"
												step="0.1"
												value={valueLetterSpacing}
												onChange={(e) => setValueLetterSpacing(e.target.value)}
											/>
										</div>)}
										{getView == 'Tablet' && (<div className="sb-input-range">
											<input type="range"
												min="-10"
												max="20"
												step="0.1"
												value={valueLetterSpacingMd}
												onChange={(e) => setValuesLetterSpacingMd(e.target.value)}
											/>
											<input
												type="number"
												step="0.1"
												value={valueLetterSpacingMd}
												onChange={(e) => setValuesLetterSpacingMd(e.target.value)}
											/>
										</div>)}
										{getView == 'Mobile' && (<div className="sb-input-range">
											<input type="range"
												min="-10"
												max="20"
												step="0.1"
												value={valueLetterSpacingSm}
												onChange={(e) => setValuesLetterSpacingSm(e.target.value)}
											/>
											<input
												type="number"
												step="0.1"
												value={valueLetterSpacingSm}
												onChange={(e) => setValuesLetterSpacingSm(e.target.value)}
											/>
										</div>)}
									</div>
								</div>
								<div className="sb-field-range sb-field sb-responsive">
									<div className="sb-d-flex sb-align-center">
										<div>
											<label for="input">{__('Line Height', 'smart-blocks')}</label>
										</div>
										<ResponsiveDropdown />
										<div className="sb-unit-btn-group sb-ml-auto sb-mb-5">
											<button
												className={`${valueLineHeightUnit === 'px' ? "active" : ""}`}
												onClick={(e) => setValuesLineHeightUnit('px')}
											>px
											</button>
											<button
												className={`${valueLineHeightUnit === 'em' ? "active" : ""}`}
												onClick={(e) => setValuesLineHeightUnit('em')}
											>em
											</button>
											<button
												className={`${valueLineHeightUnit === '%' ? "active" : ""}`}
												onClick={(e) => setValuesLineHeightUnit('%')}
											>%
											</button>
										</div>
									</div>
									<div className="nxp-field-child">
										{getView == 'Desktop' && (<div className="sb-input-range">
											<input type="range"
												min="1"
												max="150"
												step="1"
												value={valueLineHeight}
												onChange={(e) => setValueLineHeight(e.target.value)}
											/>
											<input
												type="number"
												step="1"
												value={valueLineHeight}
												onChange={(e) => setValueLineHeight(e.target.value)}
											/>
										</div>)}
										{getView == 'Tablet' && (<div className="sb-input-range">
											<input type="range"
												min="1"
												max="150"
												step="1"
												value={valueLineHeightMd}
												onChange={(e) => setValueLineHeightMd(e.target.value)}
											/>
											<input
												type="number"
												step="1"
												value={valueLineHeightMd}
												onChange={(e) => setValueLineHeightMd(e.target.value)}
											/>
										</div>)}
										{getView == 'Mobile' && (<div className="sb-input-range">
											<input type="range"
												min="1"
												max="150"
												step="1"
												value={valueLineHeightSm}
												onChange={(e) => setValueLineHeightSm(e.target.value)}
											/>
											<input
												type="number"
												step="1"
												value={valueLineHeightSm}
												onChange={(e) => setValueLineHeightSm(e.target.value)}
											/>
										</div>)}
									</div>
								</div>
							</div>
						</div>
						}
					/>
				</div>
			</div>
		</div>
	</>;
}

export default TypographyControl;