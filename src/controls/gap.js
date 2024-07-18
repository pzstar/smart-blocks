import { __ } from '@wordpress/i18n';
import ResponsiveDropdown from '../utils/responsivedropdown';
import { useState } from '@wordpress/element';
import { DesktopIcon, TabletIcon, PhoneIcon } from '../utils/svgicons';
import { useSelect } from '@wordpress/data';

const GapControl = ({
	min,
	max,
	label,
	responsive,
	units,

	unit,
	setUnit,

	gapRow,
	setGapRow,
	gapColumn,
	setGapColumn,

	gapMdRow,
	setGapMdRow,
	gapMdColumn,
	setGapMdColumn,

	gapSmRow,
	setGapSmRow,
	gapSmColumn,
	setGapSmColumn,
}) => {
	const [lock, setLock] = useState(true);
	const sides = ["Column", "Row"];
	const allUnits = units ? units : ["px", "em", "%"];

	const getView = useSelect(select => {
		const { getView } = select('smart-blocks/data');
		const { __experimentalGetPreviewDeviceType } = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const callFunctionByName = (name, value) => {
		if (responsive) {
			switch (name) {
				case 'setGapRow':
					return setGapRow(value);
				case 'setGapColumn':
					return setGapColumn(value);

				case 'setGapMdRow':
					return setGapMdRow(value);
				case 'setGapMdColumn':
					return setGapMdColumn(value);

				case 'setGapSmRow':
					return setGapSmRow(value);
				case 'setGapSmColumn':
					return setGapSmColumn(value);
				default:
					console.error(`Function ${name} not found.`);
			}
		} else {
			switch (name) {
				case 'setGapRow':
					return setGapRow(value);
				case 'setGapColumn':
					return setGapColumn(value);
				default:
					console.error(`Function ${name} not found.`);
			}
		}
	}

	const getGapValue = (name, value) => {
		if (responsive) {
			switch (name) {
				case 'gapRow':
					return gapRow;
				case 'gapColumn':
					return gapColumn;
				case 'gapMdRow':
					return gapMdRow;
				case 'gapMdColumn':
					return gapMdColumn;
				case 'gapSmRow':
					return gapSmRow;
				case 'gapSmColumn':
					return gapSmColumn;
				default:
					console.error(`Value of ${name} not found.`);
			}
		} else {
			switch (name) {
				case 'gapRow':
					return gapRow;
				case 'gapColumn':
					return gapColumn;
				default:
					console.error(`Value of ${name} not found.`);
			}
		}
	}

	return <>
		<div className={`sb-field-gap sb-field sb-d-flex ${responsive ? 'sb-responsive' : ''}`}>
			<div className="sb-d-flex sb-mb-10">
				{label &&
					(<div>
						<label htmlFor="input">{label}</label>
					</div>)
				}
				{
					responsive ? (
						<>
							<ResponsiveDropdown />
							<div className="sb-unit-btn-group sb-ml-auto">
								{allUnits.map((unt, index) => {
									return <button
										className={`${unit === unt ? "active" : ""}`}
										value={unt}
										onClick={(e) => {
											setUnit(e.target.value);
											sides.map((sde, index) => {
												callFunctionByName(`setGap${sde}`, '');
												callFunctionByName(`setGapMd${sde}`, '');
												callFunctionByName(`setGapSm${sde}`, '');
											});
										}}
									>{unt}
									</button>
								})}
							</div>
							<div className="nxp-field-child">
								<div className="sb-gap-input-group hasLock">
									{getView == 'Desktop' && sides.map((side, index) => {
										return <span>
											<input type="number"
												min={min}
												max={max}
												key={index}
												onChange={(e) => {
													lock ? (sides.map((sde, index) => { callFunctionByName(`setGap${sde}`, e.target.value) })) : callFunctionByName(`setGap${side}`, e.target.value);
												}}
												value={getGapValue(`gap${side}`)} />
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
													lock ? (sides.map((sde, index) => { callFunctionByName(`setGapMd${sde}`, e.target.value) })) : callFunctionByName(`setGapMd${side}`, e.target.value);
												}}
												value={getGapValue(`gapMd${side}`)} />
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
													lock ? (sides.map((sde, index) => { callFunctionByName(`setGapSm${sde}`, e.target.value) })) : callFunctionByName(`setGapSm${side}`, e.target.value);
												}}
												value={getGapValue(`gapSm${side}`)} />
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
								{allUnits.map((unt, index) => {
									return <button
										className={`${unit === unt ? "active" : ""}`}
										value={unt}
										onClick={(e) => {
											setUnit(e.target.value);
											sides.map((sde, index) => {
												callFunctionByName(`setGap${sde}`, '');
											});
										}}
									>{unt}
									</button>
								})}
							</div>
							<div className="nxp-field-child">
								<div className="sb-gap-input-group hasLock">
									{sides.map((side, index) => {
										return <span>
											<input type="number"
												min={min}
												max={max}
												key={index}
												onChange={(e) => {
													lock ? (sides.map((sde, index) => { callFunctionByName(`setGap${sde}`, e.target.value) })) : callFunctionByName(`setGap${side}`, e.target.value);
												}}
												value={getGapValue(`gap${side}`)} />
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

export default GapControl;