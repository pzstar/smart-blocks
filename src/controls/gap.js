import {__} from '@wordpress/i18n';
import ResponsiveDropdown from '../utils/responsivedropdown';
import {useState} from '@wordpress/element';
import {DesktopIcon, TabletIcon, PhoneIcon} from '../utils/svgicons';
import {useSelect} from '@wordpress/data';

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
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
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

	const calcMinVal = () => {
		let ret;
		switch (unit) {
			case 'em':
				ret = 0;
				break;
			case 'vh':
				ret = 0;
				break;
			case 'vw':
				ret = 0;
				break;
			case '%':
				ret = 0;
				break;
			default:
				ret = min;
				break;
		}
		return ret;
	}

	const calcMaxVal = () => {
		let ret;
		switch (unit) {
			case 'em':
				ret = 10;
				break;
			case 'vh':
				ret = 100;
				break;
			case 'vw':
				ret = 100;
				break;
			case '%':
				ret = 100;
				break;
			default:
				ret = max;
				break;
		}
		return ret;
	}

	return <>
		<div className={`sb-field sb-field-gap ${responsive ? 'sb-responsive' : ''}`}>
			<div className="sb-label">
				{label && (<label htmlFor="input">{label}</label>)}
				{responsive && (<ResponsiveDropdown />)}

				{
					responsive ? (
						<>
							<div className="sb-unit-btn-group">
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
						</>
					) : (
						<>
							<div className="sb-unit-btn-group">
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
						</>
					)
				}

			</div>

			{
				responsive ? (
					<>
						<div className="sb-input-fields">
							<div className="sb-gap-input-group hasLock">
								{getView == 'Desktop' && sides.map((side, index) => {
									return <span>
										<input type="number"
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												lock ? (sides.map((sde, index) => {callFunctionByName(`setGap${sde}`, e.target.value)})) : callFunctionByName(`setGap${side}`, e.target.value);
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
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												lock ? (sides.map((sde, index) => {callFunctionByName(`setGapMd${sde}`, e.target.value)})) : callFunctionByName(`setGapMd${side}`, e.target.value);
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
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												lock ? (sides.map((sde, index) => {callFunctionByName(`setGapSm${sde}`, e.target.value)})) : callFunctionByName(`setGapSm${side}`, e.target.value);
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
						<div className="sb-input-fields">
							<div className="sb-gap-input-group hasLock">
								{sides.map((side, index) => {
									return <span>
										<input type="number"
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												lock ? (sides.map((sde, index) => {callFunctionByName(`setGap${sde}`, e.target.value)})) : callFunctionByName(`setGap${side}`, e.target.value);
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
	</>;
}

export default GapControl;