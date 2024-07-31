import { __ } from '@wordpress/i18n';
import { Tooltip, Dropdown, Dashicon } from '@wordpress/components';
import GoogleFontsList from '../utils/googlefonts.json';
import { useState, useEffect } from '@wordpress/element';
import { DesktopIcon, TabletIcon, PhoneIcon, ClearIcon } from '../utils/svgicons';
import ResponsiveDropdown from '../utils/responsivedropdown';
import { useSelect } from '@wordpress/data';
import Select from 'react-select';

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


    const calcMinValFontSize = () => {
		var min = 0;
        let ret;
        switch(valueFontSizeUnit) {
            case 'em':
                ret = 0;
                break;
            case '%':
                ret = 0;
                break;
            case 'rem':
                ret = 0;
                break;
            default:
                ret = min;
                break;
        }
        return ret;
    }

    const calcMaxValFontSize = () => {
		var max = 100;
        let ret;
        switch(valueFontSizeUnit) {
            case 'em':
                ret = 10;
                break;
            case '%':
                ret = 100;
                break;
            case 'rem':
                ret = 10;
                break;
            default:
                ret = max;
                break;
        }
        return ret;
    }


    const calcMinValLetterSpacing = () => {
		var min = -10;
        let ret;
        switch(valueLetterSpacingUnit) {
            case 'em':
                ret = 0;
                break;
            case 'rem':
                ret = 0;
                break;
            default:
                ret = min;
                break;
        }
        return ret;
    }

    const calcMaxValLetterSpacing = () => {
		var max = 20;
        let ret;
        switch(valueLetterSpacingUnit) {
            case 'em':
                ret = 10;
                break;
            case 'rem':
                ret = 10;
                break;
            default:
                ret = max;
                break;
        }
        return ret;
    }

    const calcMinValLineHeight = () => {
		var min = 0;
        let ret;
        switch(valueLineHeightUnit) {
            case 'em':
                ret = 0;
                break;
            case 'rem':
                ret = 0;
                break;
            default:
                ret = min;
                break;
        }
        return ret;
    }

    const calcMaxValLineHeight = () => {
		var max = 100;
        let ret;
        switch(valueLineHeightUnit) {
            case 'em':
                ret = 10;
                break;
            case 'rem':
                ret = 10;
                break;
            default:
                ret = max;
                break;
        }
        return ret;
    }

	const onClearHandler = (e) => {
		setValueFamily('inherit');
		setValueWeight('inherit');
		setValueTextTransform('inherit');
		setValueTextDecoration('inherit');
		setValueFontSize('');
		setValueFontSizeMd('');
		setValueFontSizeSm('');
		setValueFontSizeUnit('px');
		setValueLetterSpacing('');
		setValueLetterSpacingMd('');
		setValueLetterSpacingSm('');
		setValueLetterSpacingUnit('px');
		setValueLineHeight('');
		setValueLineHeightMd('');
		setValueLineHeightSm('');
		setValueLineHeightUnit('px');
	}

	const getView = useSelect(select => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	var allFontList = [];
	GoogleFontsList && GoogleFontsList.map((font, index) => {
		allFontList.push({
			label: font.family != 'inherit' ? font.family : 'Default',
			value: font.family,
		});
	});

	return <>
		<div className="sb-field sb-field-typography sb-display-inline">
			<label>{label ? label : __("Typography", 'smart-blocks')}</label>
			<div className="sb-components-dropdown">
				<Tooltip text={__('Clear', 'smart-blocks')}>
					<div className="sb-reset-field"
						onClick={onClearHandler}>
						<span className="sb-clear-field" role="button">
							<ClearIcon />
						</span>
					</div>
				</Tooltip>
				<Dropdown
					position="top right"
					contentClassName="sb-popover-style"
					renderToggle={({isOpen, onToggle}) => (
						<button
							className="sb-typo-setttings sb-setting-button"
							isPrimary={!0}
							onClick={onToggle}
							aria-expanded={isOpen}
						>
							<Dashicon size="15" icon="admin-tools" />
						</button>
					)}
					renderContent={() =>
						<div className="sb-field-typography-options">
							<div className="sb-field sb-field-select sb-display-inline">
								<label>{__("Font Family", 'smart-blocks')}</label>
								<div className="sb-input-fields">
									<div className="sb-popup-select">
										<Select
										    value={allFontList.find(option => option.value == valueFamily)}
										    onChange={value => {
												const fontFamilyValue = value.value;
												setValueFamily(fontFamilyValue);
												setAllWeights(GoogleFontsList.filter(font => font.family === fontFamilyValue)[0].variants);
												setValueWeight('400');
											}}
										    options={allFontList}
										    isMulti={!1}
									    />
									</div>
								</div>
							</div>
							<div className="sb-field sb-field-select sb-display-inline">
								<label>{__("Weight/Style", 'smart-blocks')}</label>
								<div className="sb-input-fields">
									<div className="sb-popup-select">
										<select
											value={valueWeight}
											onChange={(e) => setValueWeight(e.target.value)}
										>
											{!(valueFamily && valueFamily != 'inherit') && (<option value="inherit">Default</option>)}
											{Object.keys(allWeights).sort().map((key) => {
												return <option value={key}>{allWeights[key]}</option>;
											})
											}
										</select>
									</div>
								</div>
							</div>

							<div className="sb-field sb-field-select sb-display-inline">
								<label>{__('Text Transform', 'smart-blocks')}</label>
								<div className="sb-input-fields">
									<div className="sb-popup-select">
										<select
											value={valueTextTransform}
											onChange={(e) => setValueTextTransform(e.target.value)}
										>
											<option value="inherit">Default</option>
											<option value="none">None</option>
											<option value="uppercase">Uppercase</option>
											<option value="lowercase">Lowercase</option>
											<option value="capitalize">Capitalize</option>
										</select>
									</div>
								</div>
							</div>

							<div className="sb-field sb-field-select sb-display-inline">
								<label>{__('Text Decoration', 'smart-blocks')}</label>
								<div className="sb-input-fields">
									<div className="sb-popup-select">
										<select
											value={valueTextDecoration}
											onChange={(e) => setValueTextDecoration(e.target.value)}
										>
											<option value="inherit">Default</option>
											<option value="none">None</option>
											<option value="underline">Underline</option>
											<option value="line-through">Line Through</option>
											<option value="overline">Overline</option>
										</select>
									</div>
								</div>
							</div>














							<div className="sb-field sb-field-range sb-responsive">
								<div class="sb-label">
									<label for="input">{__('Font Size', 'smart-blocks')}</label>

									<ResponsiveDropdown />
									<div className="sb-unit-btn-group">
										<button
											className={`${valueFontSizeUnit === 'px' ? "active" : ""}`}
											onClick={() => {
												setValueFontSize('');
												setValueFontSizeMd('');
												setValueFontSizeSm('');
												setValueFontSizeUnit('px');
											}}
										>px
										</button>
										<button
											className={`${valueFontSizeUnit === 'em' ? "active" : ""}`}
											onClick={() => {
												setValueFontSize('');
												setValueFontSizeMd('');
												setValueFontSizeSm('');
												setValueFontSizeUnit('em');
											}}
										>em
										</button>
										<button
											className={`${valueFontSizeUnit === '%' ? "active" : ""}`}
											onClick={(e) => {
												setValueFontSize('');
												setValueFontSizeMd('');
												setValueFontSizeSm('');
												setValueFontSizeUnit('%');
											}}
										>%
										</button>
										<button
											className={`${valueFontSizeUnit === 'rem' ? "active" : ""}`}
											onClick={() => {
												setValueFontSize('');
												setValueFontSizeMd('');
												setValueFontSizeSm('');
												setValueFontSizeUnit('rem');
											}}
										>rem
										</button>
									</div>
								</div>

								<div className="sb-input-fields">
									{getView == 'Desktop' && (<div className="sb-input-range">
										<input type="range"
											min={calcMinValFontSize()}
											max={calcMaxValFontSize()}
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
											min={calcMinValFontSize()}
											max={calcMaxValFontSize()}
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
											min={calcMinValFontSize()}
											max={calcMaxValFontSize()}
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
















							<div className="sb-field sb-field-range sb-responsive">
								<div class="sb-label">
									<label for="input">{__('Letter Spacing', 'smart-blocks')}</label>

									<ResponsiveDropdown />
									<div className="sb-unit-btn-group">
										<button
											className={`${valueLetterSpacingUnit === 'px' ? "active" : ""}`}
											onClick={() => {
												setValueLetterSpacing('');
												setValueLetterSpacingMd('');
												setValueLetterSpacingSm('');
												setValueLetterSpacingUnit('px');
											}}
										>px
										</button>
										<button
											className={`${valueLetterSpacingUnit === 'em' ? "active" : ""}`}
											onClick={() => {
												setValueLetterSpacing('');
												setValueLetterSpacingMd('');
												setValueLetterSpacingSm('');
												setValueLetterSpacingUnit('em');
											}}
										>em
										</button>
										<button
											className={`${valueLetterSpacingUnit === 'rem' ? "active" : ""}`}
											onClick={() => {
												setValueLetterSpacing('');
												setValueLetterSpacingMd('');
												setValueLetterSpacingSm('');
												setValueLetterSpacingUnit('rem');
											}}
										>rem
										</button>
									</div>
								</div>

								<div className="sb-input-fields">
									{getView == 'Desktop' && (<div className="sb-input-range">
										<input type="range"
											min={calcMinValLetterSpacing()}
											max={calcMaxValLetterSpacing()}
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
											min={calcMinValLetterSpacing()}
											max={calcMaxValLetterSpacing()}
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
											min={calcMinValLetterSpacing()}
											max={calcMaxValLetterSpacing()}
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



























							<div className="sb-field sb-field-range sb-responsive">
								<div class="sb-label">
									<label for="input">{__('Line Height', 'smart-blocks')}</label>

									<ResponsiveDropdown />
									<div className="sb-unit-btn-group">
										<button
											className={`${valueLineHeightUnit === 'px' ? "active" : ""}`}
											onClick={() => {
												setValueLineHeight('');
												setValueLineHeightMd('');
												setValueLineHeightSm('');
												setValueLineHeightUnit('px');
											}}
										>px
										</button>
										<button
											className={`${valueLineHeightUnit === 'em' ? "active" : ""}`}
											onClick={() => {
												setValueLineHeight('');
												setValueLineHeightMd('');
												setValueLineHeightSm('');
												setValueLineHeightUnit('em');
											}}
										>em
										</button>
										<button
											className={`${valueLineHeightUnit === 'rem' ? "active" : ""}`}
											onClick={() => {
												setValueLineHeight('');
												setValueLineHeightMd('');
												setValueLineHeightSm('');
												setValueLineHeightUnit('rem');
											}}
										>rem
										</button>
									</div>
								</div>

								<div className="sb-input-fields">
									{getView == 'Desktop' && (<div className="sb-input-range">
										<input type="range"
											min={calcMinValLineHeight()}
											max={calcMaxValLineHeight()}
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
											min={calcMinValLineHeight()}
											max={calcMaxValLineHeight()}
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
											min={calcMinValLineHeight()}
											max={calcMaxValLineHeight()}
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
					}
				/>
			</div>
		</div>
	</>;
}

export default TypographyControl;