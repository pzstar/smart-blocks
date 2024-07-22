import {__} from '@wordpress/i18n';
import ResponsiveDropdown from '../utils/responsivedropdown';
import {useSelect} from '@wordpress/data';

const RangeSliderControl = ({
    label,
    min,
    max,
    steps,
    useUnit,
    responsive,

    value,
    setValue,
    valueSm,
    setValueSm,
    valueMd,
    setValueMd,
    units,
    unit,
    setUnit
}) => {
    const allUnits = units ? units : ["px", "em", "%"];

    const getView = useSelect(select => {
        const {getView} = select('smart-blocks/data');
        const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    return <div className={`sb-field-range sb-field ${responsive ? 'sb-responsive' : ''}`}>
        <div className="sb-d-flex sb-align-center">
            {label && (
                <div>
                    <label htmlFor="input">{label}</label>
                </div>
            )}
            {responsive && (<ResponsiveDropdown />)}
            {useUnit && (
                <div class="sb-unit-btn-group sb-ml-auto">
                    {allUnits.map((unt, index) => {
                        return <button
                            className={`${unit === unt ? "active" : ""}`}
                            value={unt}
                            onClick={(e) => {
                                setUnit(e.target.value);
                                setValue('');
                                responsive && setValueSm('');
                                responsive && setValueMd('');
                            }}
                        >{unt}
                        </button>
                    })}
                </div>
            )}
        </div>
        <div className="nxp-field-child">
            {responsive ?
                (<>
                    {getView == 'Mobile' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={min}
                                max={unit == '%' ? 100 : max}
                                value={valueSm}
                                step={steps ? steps : 1}
                                onChange={(e) => {setValueSm(e.target.value)}}
                            />
                            <input type="number"
                                step={steps ? steps : 1}
                                onChange={(e) => {setValueSm(e.target.value)}}
                                value={valueSm}
                            />
                        </div>
                    )}
                    {getView == 'Tablet' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={min}
                                max={unit == '%' ? 100 : max}
                                value={valueMd}
                                step={steps ? steps : 1}
                                onChange={(e) => {setValueMd(e.target.value)}}
                            />
                            <input type="number"
                                step={steps ? steps : 1}
                                onChange={(e) => {setValueMd(e.target.value)}}
                                value={valueMd}
                            />
                        </div>
                    )}
                    {getView == 'Desktop' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={min}
                                max={unit == '%' ? 100 : max}
                                value={value}
                                step={steps ? steps : 1}
                                onChange={(e) => {setValue(e.target.value)}}
                            />
                            <input type="number"
                                step={steps ? steps : 1}
                                onChange={(e) => {setValue(e.target.value)}}
                                value={value}
                            />
                        </div>
                    )}
                </>) :
                (
                    <div className="sb-input-range">
                        <input type="range"
                            min={min}
                            max={unit == '%' ? 100 : max}
                            value={value}
                            step={steps ? steps : 1}
                            onChange={(e) => {setValue(e.target.value)}}
                        />
                        <input type="number"
                            step={steps ? steps : 1}
                            onChange={(e) => {setValue(e.target.value)}}
                            value={value}
                        />
                    </div>
                )
            }
        </div>
    </div>
}

export default RangeSliderControl;