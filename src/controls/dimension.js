import {useSelect} from '@wordpress/data';
import {useState} from '@wordpress/element';
import ResponsiveDropdown from '../utils/responsivedropdown';

const DimensionControl = ({
	min,
	max,
	label,
	responsive,
	units,

	unit,
	setUnit,

	dimensionTop,
	setDimensionTop,
	dimensionLeft,
	setDimensionLeft,
	dimensionRight,
	setDimensionRight,
	dimensionBottom,
	setDimensionBottom,
	dimensionMdTop,
	setDimensionMdTop,
	dimensionSmTop,
	setDimensionSmTop,
	dimensionMdLeft,
	setDimensionMdLeft,
	dimensionSmLeft,
	setDimensionSmLeft,
	dimensionMdRight,
	setDimensionMdRight,
	dimensionSmRight,
	setDimensionSmRight,
	dimensionMdBottom,
	setDimensionMdBottom,
	dimensionSmBottom,
	setDimensionSmBottom,
}) => {
	const [lock, setLock] = useState(true);
	const sides = ["Top", "Right", "Bottom", "Left"];
	const allUnits = units ? units : ["px", "em", "%"];

	const getView = useSelect(select => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const callFunctionByName = (name, value) => {
		if (responsive) {
			switch (name) {
				case 'setDimensionTop':
					return setDimensionTop(value);
				case 'setDimensionLeft':
					return setDimensionLeft(value);
				case 'setDimensionRight':
					return setDimensionRight(value);
				case 'setDimensionBottom':
					return setDimensionBottom(value);

				case 'setDimensionMdTop':
					return setDimensionMdTop(value);
				case 'setDimensionMdLeft':
					return setDimensionMdLeft(value);
				case 'setDimensionMdRight':
					return setDimensionMdRight(value);
				case 'setDimensionMdBottom':
					return setDimensionMdBottom(value);
				case 'setDimensionSmTop':
					return setDimensionSmTop(value);
				case 'setDimensionSmLeft':
					return setDimensionSmLeft(value);
				case 'setDimensionSmRight':
					return setDimensionSmRight(value);
				case 'setDimensionSmBottom':
					return setDimensionSmBottom(value);
				default:
					console.error(`Function ${name} not found.`);
			}
		} else {
			switch (name) {
				case 'setDimensionTop':
					return setDimensionTop(value);
				case 'setDimensionLeft':
					return setDimensionLeft(value);
				case 'setDimensionRight':
					return setDimensionRight(value);
				case 'setDimensionBottom':
					return setDimensionBottom(value);
				default:
					console.error(`Function ${name} not found.`);
			}
		}
	}

	const getDimensionValue = (name, value) => {
		if (responsive) {
			switch (name) {
				case 'dimensionTop':
					return dimensionTop;
				case 'dimensionLeft':
					return dimensionLeft;
				case 'dimensionRight':
					return dimensionRight;
				case 'dimensionBottom':
					return dimensionBottom;
				case 'dimensionMdTop':
					return dimensionMdTop;
				case 'dimensionMdLeft':
					return dimensionMdLeft;
				case 'dimensionMdRight':
					return dimensionMdRight;
				case 'dimensionMdBottom':
					return dimensionMdBottom;
				case 'dimensionSmTop':
					return dimensionSmTop;
				case 'dimensionSmLeft':
					return dimensionSmLeft;
				case 'dimensionSmRight':
					return dimensionSmRight;
				case 'dimensionSmBottom':
					return dimensionSmBottom;
				default:
					console.error(`Value of ${name} not found.`);
			}
		} else {
			switch (name) {
				case 'dimensionTop':
					return dimensionTop;
				case 'dimensionLeft':
					return dimensionLeft;
				case 'dimensionRight':
					return dimensionRight;
				case 'dimensionBottom':
					return dimensionBottom;
				default:
					console.error(`Value of ${name} not found.`);
			}
		}
	}

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
							<ResponsiveDropdown />
							<div className="sb-unit-btn-group sb-ml-auto">
								{allUnits.map((unt, index) => {
									return <button
										className={`${unit === unt ? "active" : ""}`}
										value={unt}
										onClick={(e) => {
											setUnit(e.target.value);
											sides.map((sde, index) => {
												callFunctionByName(`setDimension${sde}`, '');
												callFunctionByName(`setDimensionMd${sde}`, '');
												callFunctionByName(`setDimensionSm${sde}`, '');
											});
										}}
									>{unt}
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
													lock ? (sides.map((sde, index) => {callFunctionByName(`setDimension${sde}`, e.target.value)})) : callFunctionByName(`setDimension${side}`, e.target.value);
												}}
												value={getDimensionValue(`dimension${side}`)} />
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
													lock ? (sides.map((sde, index) => {callFunctionByName(`setDimensionMd${sde}`, e.target.value)})) : callFunctionByName(`setDimensionMd${side}`, e.target.value);
												}}
												value={getDimensionValue(`dimensionMd${side}`)} />
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
													lock ? (sides.map((sde, index) => {callFunctionByName(`setDimensionSm${sde}`, e.target.value)})) : callFunctionByName(`setDimensionSm${side}`, e.target.value);
												}}
												value={getDimensionValue(`dimensionSm${side}`)} />
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
												callFunctionByName(`setDimension${sde}`, '');
											});
										}}
									>{unt}
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
													lock ? (sides.map((sde, index) => {callFunctionByName(`setDimension${sde}`, e.target.value)})) : callFunctionByName(`setDimension${side}`, e.target.value);
												}}
												value={getDimensionValue(`dimension${side}`)} />
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

export default DimensionControl;