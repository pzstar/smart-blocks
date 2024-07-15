import { __ } from '@wordpress/i18n';
import ResponsiveDropdown from './responsivedropdown';
import { useState } from '@wordpress/element';
import { DesktopIcon, TabletIcon, PhoneIcon } from './svgicons';
import {useSelect} from '@wordpress/data';

const Dimension = ({ min, max, label, values, onChange, responsive, units }) => {
	const [lock, setLock] = useState(true);
	const sides = ["top", "right", "bottom", "left"];
	const allUnits = units ? units : ["px", "em", "%"];
	!values ? values = responsive ? {
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
		onChange({ ...values })
	}

	const getView = useSelect(select => {
        const { getView } = select( 'smart-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

	return <>
		<div className={`sb-field-dimension sb-field sb-d-flex ${responsive ? 'sb-responsive' : ''}`}>
			<div className="sb-d-flex sb-mb-10">
				{label &&
					(<div>
						<label htmlFor="input">{label}</label>
					</div>)
				}
				{
					responsive ? (
						<>
							<ResponsiveDropdown/>
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
									{getView == 'Desktop' && sides.map((side, index) => {
										return <span>
											<input type="number"
												min={min}
												max={max}
												key={index}
												onChange={(e) => {
													lock ? (sides.map((side, index) => { values['lg'][side] = e.target.value })) : (values['lg'][side] = e.target.value);
													onChange({ ...values });
												}}
												value={values['lg'][side]} />
											<span>
												{side}
											</span>
										</span>
									})}
									{getView == 'Tablet' && sides.map((side, index) => {
										return <span>
											<input type="number"
												min={min}
												max={max}
												key={index}
												onChange={(e) => {
													lock ? (sides.map((side, index) => { values['md'][side] = e.target.value })) : (values['md'][side] = e.target.value);
													onChange({ ...values });
												}}
												value={values['md'][side]} />
											<span>
												{side}
											</span>
										</span>
									})}
									{getView == 'Mobile' && sides.map((side, index) => {
										return <span>
											<input type="number"
												min={min}
												max={max}
												key={index}
												onChange={(e) => {
													lock ? (sides.map((side, index) => { values['sm'][side] = e.target.value })) : (values['sm'][side] = e.target.value);
													onChange({ ...values });
												}}
												value={values['sm'][side]} />
											<span>
												{side}
											</span>
										</span>
									})}
									<button className={(lock ? "active " : "") + "sb-button"}
										onClick={function () {
											return setLock(!lock);
										}}>
										{lock ? (<span className="dashicons dashicons-admin-links" />) : (<span className="dashicons dashicons-editor-unlink" />)}
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
													lock ? (sides.map((side, index) => { values[side] = e.target.value })) : (values[side] = e.target.value);
													onChange({ ...values });
												}}
												value={values[side]} />
											<span>
												{side}
											</span>
										</span>
									})}
									<button className={(lock ? "active " : "") + "sb-button"}
										onClick={function () {
											return setLock(!lock);
										}}>
										{lock ? (<span className="dashicons dashicons-admin-links" />) : (<span className="dashicons dashicons-editor-unlink" />)}
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