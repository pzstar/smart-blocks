import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { DesktopIcon, TabletIcon, PhoneIcon } from './svgicons';
const Dimension = ({min, max, label, values, onChange, device, setDevice, units}) => {
	const [lock, setLock] = useState(true);
	const sides = ["top", "right", "bottom", "left"];
	const allUnits = units ? units : ["px", "em", "%"];
	!values ? values = device ? {
		"sm": {
			"top": undefined,
			"left": undefined,
			"right": undefined,
			"bottom": undefined
		},
		"md": {
			"top": undefined,
			"left": undefined,
			"right": undefined,
			"bottom": undefined
		},
		"lg": {
			"top": undefined,
			"left": undefined,
			"right": undefined,
			"bottom": undefined
		},
		"unit": "px"
	} : {
		"top": undefined,
		"left": undefined,
		"right": undefined,
		"bottom": undefined,
		"unit": "px"
	} : '';
	const onClickUnit = (e) => {
		values['unit'] = e.target.value;
		onChange({...values})
	}
	return <>
		<div className={`sb-field-dimension sb-field sb-d-flex ${device ? 'sb-responsive' : ''}`}>
            <div className="sb-d-flex sb-mb-10">
                {label && 
                	(<div>
                		<label htmlFor="input">{label}</label>
            		</div>)
            	}
            	{
            		device ? (
            			<>
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
							<div className="sb-unit-btn-group sb-ml-auto">
								{allUnits.map((unit, index) => {
					            	return <button
										className={`${values['unit'] === unit ? "active" : ""}`}
										value={unit}
										onClick={onClickUnit}
										>{unit}
									</button>
								})}
							</div>
			                <div className="nxp-field-child">
			                    <div className="sb-dimension-input-group hasLock">
			                    	{device == 'lg' && sides.map((side, index) => {
			                            return <span>
			                                <input type="number"
				                                min={min}
				                                max={max}
			                                    key={index}
			                                    onChange={(e) => {
			                                    	lock ? (sides.map((side, index) => {values['lg'][side] = e.target.value})) : (values['lg'][side] = e.target.value);
			                                    	onChange({...values});
			                                    }}
			                                    value={values['lg'][side]}/>
			                                    <span>
					                            {side}
				                            </span>
			                            </span>
			                        })}
			                        {device == 'md' && sides.map((side, index) => {
			                            return <span>
			                                <input type="number"
				                                min={min}
				                                max={max}
			                                    key={index}
			                                    onChange={(e) => {
			                                    	lock ? (sides.map((side, index) => {values['md'][side] = e.target.value})) : (values['md'][side] = e.target.value);
			                                    	onChange({...values});
			                                    }}
			                                    value={values['md'][side]}/>
			                                <span>
					                            {side}
				                            </span>
			                            </span>
			                        })}
			                        {device == 'sm' && sides.map((side, index) => {
			                            return <span>
			                                <input type="number"
				                                min={min}
				                                max={max}
			                                    key={index}
			                                    onChange={(e) => {
			                                    	lock ? (sides.map((side, index) => {values['sm'][side] = e.target.value})) : (values['sm'][side] = e.target.value);
			                                    	onChange({...values});
			                                    }}
			                                    value={values['sm'][side]}/>
				                            <span>
					                            {side}
				                            </span>
			                            </span>
			                        })}
				                    <button className={(lock ? "active " : "") + "sb-button"}
				                        onClick={function () {
				                            return setLock(!lock);
				                        }}>
				                        {lock ? (<span className="dashicons dashicons-admin-links"/>) : (<span className="dashicons dashicons-editor-unlink"/>)}
				                    </button>
			                    </div>
			                </div>
		                </>
		            ) : (
		            	<>
				            <div className="sb-unit-btn-group sb-ml-auto">
					            {allUnits.map((unit, index) => {
					            	return <button
										className={`${values['unit'] === unit ? "active" : ""}`}
										value={unit}
										onClick={onClickUnit}
										>{unit}
									</button>
								})}
							</div>
			                <div className="nxp-field-child">
			                    <div className="sb-dimension-input-group hasLock">
			                    	{sides.map((side, index) => {
			                            return <span>
			                                <input type="number"
				                                min={min}
				                                max={max}
			                                    key={index}
			                                    onChange={(e) => {
			                                    	lock ? (sides.map((side, index) => {values[side] = e.target.value})) : (values[side] = e.target.value);
			                                    	onChange({...values});
			                                    }}
			                                    value={values[side]}/>
			                                    <span>
					                            {side}
				                            </span>
			                            </span>
			                        })}
				                    <button className={(lock ? "active " : "") + "sb-button"}
				                        onClick={function () {
				                            return setLock(!lock);
				                        }}>
				                        {lock ? (<span className="dashicons dashicons-admin-links"/>) : (<span className="dashicons dashicons-editor-unlink"/>)}
				                    </button>
			                    </div>
			                </div>
		                </>
		            )
		        }
            </div>
        </div>
	</>;
}

export default Dimension;