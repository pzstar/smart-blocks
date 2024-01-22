import { __ } from '@wordpress/i18n';
import { Tooltip, Dropdown, Dashicon } from '@wordpress/components';
import GoogleFontsList from './googlefonts.json';
import { useState, useEffect } from '@wordpress/element';
import { DesktopIcon, TabletIcon, PhoneIcon, ClearIcon } from './svgicons';
const Typography = ({label, values, onChange, device, setDevice}) => {
	useEffect(() => {
		setTimeout(() => {
			onChange({...values});
		}, 1000);
	}, []);
	var values = values;
	values = values ? values : {
		"family": 'Default',
		"weight": 'Default',
		"textTransform": 'inherit',
		"textDecoration": 'inherit',
		"fontSize": {
			"sm": null,
			"md": null,
			"lg": null,
			"unit": "px"
		},
		"letterSpacing": {
			"sm": null,
			"md": null,
			"lg": null,
			"unit": "px"
		},
		"lineHeight": {
			"sm": null,
			"md": null,
			"lg": null,
			"unit": "px"
		}
	};
	var selectedFamily = values && values.family ? values.family : GoogleFontsList[0].family;
	var selectedWeight = '';
	const [allWeights, setAllWeights] = useState(GoogleFontsList.filter(GoogleFontsList => GoogleFontsList.family === selectedFamily)[0].variants);
	const onFontChangeHandler = (e) => {
		selectedFamily = e.target.value;
		setAllWeights(GoogleFontsList.filter(GoogleFontsList => GoogleFontsList.family === selectedFamily)[0].variants);
		values['family'] = selectedFamily;
		values['weight'] = '400';
		onChange({...values});
	}
	const onWeightChangeHandler = (e) => {
		values['weight'] = e.target.value;
		onChange({...values})
	}
	const onTextTransformChangeHandler = (e) => {
		values['textTransform'] = e.target.value;
		onChange({...values})
	}
	const onTextDecorationChangeHandler = (e) => {
		values['textDecoration'] = e.target.value;
		onChange({...values})
	}
	const onClickFontSizeUnit = (e) => {
		values['fontSize']['unit'] = e.target.value;
		onChange({...values})
	}
	const onChangeFontSize = (e) => {
		values['fontSize'][device] = e.target.value;
		onChange({...values})
	}
	const onChangeLetterSpacing = (e) => {
		values['letterSpacing'][device] = e.target.value;
		onChange({...values})
	}
	const onClickLetterSpacingUnit = (e) => {
		values['letterSpacing']['unit'] = e.target.value;
		onChange({...values})
	}
	const onChangeLineHeight = (e) => {
		values['lineHeight'][device] = e.target.value;
		onChange({...values})
	}
	const onClickLineHeightUnit = (e) => {
		values['lineHeight']['unit'] = e.target.value;
		onChange({...values})
	}
	const onClearHandler = (e) => {
		onChange({
			"family": 'Default',
	        "weight": 'Default',
	        "textTransform": 'inherit',
	        "textDecoration": 'inherit',
	        "fontSize": {
	        	"sm": null,
	        	"md": null,
	        	"lg": null,
	        	"unit": "px"
	        },
	        "letterSpacing": {
	        	"sm": null,
	        	"md": null,
	        	"lg": null,
	        	"unit": "px"
	        },
	        "lineHeight": {
	        	"sm": null,
	        	"md": null,
	        	"lg": null,
	        	"unit": "px"
	        }
	    });
    }
	return <>
		<div className="sb-typography-options">
			<div className="sb-field sb-flex sb-inline-block sb-typography-option-actions">
				<label className="sb-mb-0">{label ? label : __("Typography", 'smart-blocks')}</label>
				<div className="sb-flex">
					<Tooltip text={__('Clear', 'smart-blocks')}>
						<div className="sb-reset-color"
	                        onClick={onClearHandler}>
							<span className="sb-border-clear sb-flex" role="button">
			                    <ClearIcon/>
			                </span>
		                </div>
					</Tooltip>
	                <Dropdown 
						position="top right"
		                className="sb-ml-auto"
		                contentClassName="sb-popover-style"
		                renderToggle={ ( { isOpen, onToggle } ) => (
				            <button
					            className="sb-typo-setttings"
				                isPrimary= {!0}
				                onClick={ onToggle }
				                aria-expanded={ isOpen }
					            >
				                <Dashicon size="15" icon="admin-tools" />
				            </button>
				        ) }
				        renderContent={ () => <div className="sb-typography-advanced">
					        <div className="sb-typography-font-family-options">
                                <div className="sb-fonts-weight-inner">
                                    <div className="sb-field-select sb-field sb-d-flex   sb-inline-block">
                                        <label className="sb-typography-font-family-label">{__("Font Family", 'smart-blocks')}</label>
                                        <div className="sb-field-child">
											<div className="sb-popup-select ">
												<select
													value={values ? values['family'] : null}
													onChange={onFontChangeHandler}>
													{GoogleFontsList && GoogleFontsList.map((font, index)=>{
														return <option value={font.family} key={index}>{font.family}</option>;
													}
												)}
												</select>
											</div>
										</div>
                                    </div>
                                    <div className="sb-field-select sb-field sb-d-flex   sb-inline-block">
                                        <label className="sb-typography-font-weight-label">{__("Weight/Style", 'smart-blocks')}</label>
                                        <div className="sb-field-child">
											<div className="sb-popup-select ">
												<select
													value={values ? values['weight'] : null}
													onChange={onWeightChangeHandler}>
													{!(values && values['family'] && values['family'] != 'Default') && (<option value="Default">Default</option>)}
													{Object.keys(allWeights).sort().map((key) => {
														return <option value={key}>{allWeights[key]}</option>;
													})
												}
												</select>
											</div>
										</div>
                                    </div>

									<div className="sb-field-select sb-field sb-d-flex   sb-inline-block">
										<label className="">{__('Text Transform', 'smart-blocks')}</label>
										<div className="sb-field-child">
											<div className="sb-popup-select ">
												<select
													value={values ? values['textTransform'] : null}
													onChange={onTextTransformChangeHandler}>
													<option value="inherit">Default</option>
													<option value="none">None</option>
													<option value="uppercase">Uppercase</option>
													<option value="lowercase">Lowercase</option>
													<option value="capitalize">Capitalize</option>
												</select>
											</div>
										</div>
									</div>
									<div className="sb-field-select sb-field sb-d-flex   sb-inline-block">
										<label className="">{__('Text Decoration', 'smart-blocks')}</label>
											<div className="sb-field-child">
												<div className="sb-popup-select ">
													<select
														value={values ? values['textDecoration'] : null}
														onChange={onTextDecorationChangeHandler}>
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
											<div className="sb-device sb-ml-10 active-md">
												<button
													title={__('Desktop', 'smart-blocks')}
													className={`sb-device-desktop ${device ==='lg' ? " active" : ""}`}
													onClick={()=>{setDevice('lg')}}
													>
													<DesktopIcon/>
												</button>
												<button
													title={__('Tablet', 'smart-blocks')}
													className={`sb-device-tablet ${device ==='md' ? " active" : ""}`}
													onClick={()=>{setDevice('md')}}
													>
													<TabletIcon/>
												</button>
												<button
													title={__('Phone', 'smart-blocks')}
													className={`sb-device-mobile ${device ==='sm' ? " active" : ""}`}
													onClick={()=>{setDevice('sm')}}
													>
													<PhoneIcon/>
												</button>
											</div>
											<div className="sb-unit-btn-group sb-ml-auto sb-mb-5">
												<button
													className={`${values['fontSize']['unit'] === 'px' ? "active" : ""}`}
													value="px"
													onClick={onClickFontSizeUnit}
													>px
												</button>
												<button
													className={`${values['fontSize']['unit'] === 'em' ? "active" : ""}`}
													value="em"
													onClick={onClickFontSizeUnit}
													>em
												</button>
												<button
													className={`${values['fontSize']['unit'] === '%' ? "active" : ""}`}
													value="%"
													onClick={onClickFontSizeUnit}
													>%
												</button>
											</div>
										</div>
										<div className="nxp-field-child">
											{device == 'lg' && (<div className="sb-input-range">
												<input type="range"
													min="1"
													max="150"
													step="1"
													value={values['fontSize']['lg']}
													onChange={onChangeFontSize}/>
												<input
													type="number"
													step="1"
													value={values['fontSize']['lg']}
													onChange={onChangeFontSize}
												/>
											</div>)}
											{device == 'md' && (<div className="sb-input-range">
												<input type="range"
													min="1"
													max="150"
													step="1"
													value={values['fontSize']['md']}
													onChange={onChangeFontSize}/>
												<input
													type="number"
													step="1"
													value={values['fontSize']['md']}
													onChange={onChangeFontSize}
												/>
											</div>)}
											{device == 'sm' && (<div className="sb-input-range">
												<input type="range"
													min="1"
													max="150"
													step="1"
													value={values['fontSize']['sm']}
													onChange={onChangeFontSize}/>
												<input
													type="number"
													step="1"
													value={values['fontSize']['sm']}
													onChange={onChangeFontSize}
												/>
											</div>)}
										</div>
									</div>
									<div className="sb-field-range sb-field sb-responsive ">
										<div className="sb-d-flex sb-align-center">
											<div>
												<label for="input">{__('Letter Spacing', 'smart-blocks')}</label>
											</div>
											<div className="sb-device sb-ml-10 active-md">
												<button
													title={__('Desktop', 'smart-blocks')}
													className={`sb-device-desktop ${device ==='lg' ? " active" : ""}`}
													onClick={()=>{setDevice('lg')}}
													>
													<DesktopIcon/>
												</button>
												<button
													title={__('Tablet', 'smart-blocks')}
													className={`sb-device-tablet ${device ==='md' ? " active" : ""}`}
													onClick={()=>{setDevice('md')}}
													>
													<TabletIcon/>
												</button>
												<button
													title={__('Phone', 'smart-blocks')}
													className={`sb-device-mobile ${device ==='sm' ? " active" : ""}`}
													onClick={()=>{setDevice('sm')}}
													>
													<PhoneIcon/>
												</button>
											</div>
											<div className="sb-unit-btn-group sb-ml-auto sb-mb-5">
												<button
													className={`${values['letterSpacing']['unit'] === 'px' ? "active" : ""}`}
													value="px"
													onClick={onClickLetterSpacingUnit}
													>px
												</button>
												<button
													className={`${values['letterSpacing']['unit'] === 'em' ? "active" : ""}`}
													value="em"
													onClick={onClickLetterSpacingUnit}
													>em
												</button>
												<button
													className={`${values['letterSpacing']['unit'] === '%' ? "active" : ""}`}
													value="%"
													onClick={onClickLetterSpacingUnit}
													>%
												</button>
											</div>
										</div>
										<div className="nxp-field-child">
											{device == 'lg' && (<div className="sb-input-range">
												<input type="range"
													min="-10"
													max="20"
													step="0.1"
													value={values['letterSpacing']['lg']}
													onChange={onChangeLetterSpacing}/>
												<input
													type="number"
													step="0.1"
													value={values['letterSpacing']['lg']}
													onChange={onChangeLetterSpacing}
												/>
											</div>)}
											{device == 'md' && (<div className="sb-input-range">
												<input type="range"
													min="-10"
													max="20"
													step="0.1"
													value={values['letterSpacing']['md']}
													onChange={onChangeLetterSpacing}/>
												<input
													type="number"
													step="0.1"
													value={values['letterSpacing']['md']}
													onChange={onChangeLetterSpacing}
												/>
											</div>)}
											{device == 'sm' && (<div className="sb-input-range">
												<input type="range"
													min="-10"
													max="20"
													step="0.1"
													value={values['letterSpacing']['sm']}
													onChange={onChangeLetterSpacing}/>
												<input
													type="number"
													step="0.1"
													value={values['letterSpacing']['sm']}
													onChange={onChangeLetterSpacing}
												/>
											</div>)}
										</div>
									</div>
									<div className="sb-field-range sb-field sb-responsive ">
										<div className="sb-d-flex sb-align-center">
											<div>
												<label for="input">{__('Line Height', 'smart-blocks')}</label>
											</div>
											<div className="sb-device sb-ml-10 active-md">
												<button
													title={__('Desktop', 'smart-blocks')}
													className={`sb-device-desktop ${device ==='lg' ? " active" : ""}`}
													onClick={()=>{setDevice('lg')}}
													>
													<DesktopIcon/>
												</button>
												<button
													title={__('Tablet', 'smart-blocks')}
													className={`sb-device-tablet ${device ==='md' ? " active" : ""}`}
													onClick={()=>{setDevice('md')}}
													>
													<TabletIcon/>
												</button>
												<button
													title={__('Phone', 'smart-blocks')}
													className={`sb-device-mobile ${device ==='sm' ? " active" : ""}`}
													onClick={()=>{setDevice('sm')}}
													>
													<PhoneIcon/>
												</button>
											</div>
											<div className="sb-unit-btn-group sb-ml-auto sb-mb-5">
												<button
													className={`${values['lineHeight']['unit'] === 'px' ? "active" : ""}`}
													value="px"
													onClick={onClickLineHeightUnit}
													>px
												</button>
												<button
													className={`${values['lineHeight']['unit'] === 'em' ? "active" : ""}`}
													value="em"
													onClick={onClickLineHeightUnit}
													>em
												</button>
												<button
													className={`${values['lineHeight']['unit'] === '%' ? "active" : ""}`}
													value="%"
													onClick={onClickLineHeightUnit}
													>%
												</button>
											</div>
										</div>
										<div className="nxp-field-child">
											{device == 'lg' && (<div className="sb-input-range">
												<input type="range"
													min="1"
													max="150"
													step="1"
													value={values['lineHeight']['lg']}
													onChange={onChangeLineHeight}/>
												<input
													type="number"
													step="1"
													value={values['lineHeight']['lg']}
													onChange={onChangeLineHeight}
												/>
											</div>)}
											{device == 'md' && (<div className="sb-input-range">
												<input type="range"
													min="1"
													max="150"
													step="1"
													value={values['lineHeight']['md']}
													onChange={onChangeLineHeight}/>
												<input
													type="number"
													step="1"
													value={values['lineHeight']['md']}
													onChange={onChangeLineHeight}
												/>
											</div>)}
											{device == 'sm' && (<div className="sb-input-range">
												<input type="range"
													min="1"
													max="150"
													step="1"
													value={values['lineHeight']['sm']}
													onChange={onChangeLineHeight}/>
												<input
													type="number"
													step="1"
													value={values['lineHeight']['sm']}
													onChange={onChangeLineHeight}
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

export default Typography;