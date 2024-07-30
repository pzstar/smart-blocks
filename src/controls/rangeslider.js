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

    const calcMinVal = () => {
        let ret;
        switch(unit) {
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
        switch(unit) {
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

    return <div className={`sb-field sb-field-range ${responsive ? 'sb-responsive' : ''}`}>
        <div className="sb-label">
            {label && (<label htmlFor="input">{label}</label>)}
            {responsive && (<ResponsiveDropdown />)}
            {useUnit && (
                <div class="sb-unit-btn-group">
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
        <div className="sb-input-fields">
            {responsive ?
                (<>
                    {getView == 'Mobile' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={calcMinVal()}
                                max={calcMaxVal()}
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
                                min={calcMinVal()}
                                max={calcMaxVal()}
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
                                min={calcMinVal()}
                                max={calcMaxVal()}
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
                            min={calcMinVal()}
                            max={calcMaxVal()}
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