import { __ } from '@wordpress/i18n';
import { DesktopIcon, TabletIcon, PhoneIcon } from './svgicons';

const CustomRangeControl = ({label, min=1, max=20, steps, value, onChange, useUnit, device, setDevice}) => {
    const onChangeHandler = (e) => {
        value[device] = parseInt(e.target.value);
        onChange({...value})
    };
    const onChangeHandlerSingle = (e) => {
        onChange(parseInt(e.target.value))
    };
    return <div className={`sb-field-range sb-field ${device ? 'sb-responsive' : ''}`}>
        <div className="sb-d-flex sb-align-center">
            {label && 
                (<div>
                    <label htmlFor="input">{label}</label>
                </div>)
            }
        {device && (
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
        )}
        {useUnit && (
            <div class="sb-unit-btn-group sb-ml-auto">
                <button
                    className={`${value['unit'] === 'px' ? "active" : ""}`}
                    value="px"
                    onClick={onClickUnit}
                    >px
                </button>
                <button
                    className={`${value['unit'] === 'em' ? "active" : ""}`}
                    value="em"
                    onClick={onClickUnit}
                    >em
                </button>
                <button
                    className={`${value['unit'] === '%' ? "active" : ""}`}
                    value="%"
                    onClick={onClickUnit}
                    >%
                </button>
            </div>
        )}
        </div>
        <div className="nxp-field-child">
            {device ?
                (<>
                    {device=='sm' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={min}
                                max={max}
                                value={value.sm}
                                step={steps ? steps : 1}
                                onChange={onChangeHandler}
                            />
                            <input type= "number"
                                step={steps ? steps : 1}
                                onChange={onChangeHandler}
                                value={value.sm}
                            />
                        </div>
                    )}
                    {device=='md' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={min}
                                max={max}
                                value={value.md}
                                step={steps ? steps : 1}
                                onChange={onChangeHandler}
                            />
                            <input type= "number"
                                step={steps ? steps : 1}
                                onChange={onChangeHandler}
                                value={value.md}
                            />
                    </div>
                    )}
                    {device=='lg' && (
                        <div className="sb-input-range">
                            <input type="range"
                                min={min}
                                max={max}
                                value={value.lg}
                                step={steps ? steps : 1}
                                onChange={onChangeHandler}
                            />
                            <input type= "number"
                                step={steps ? steps : 1}
                                onChange={onChangeHandler}
                                value={value.lg}
                            />
                        </div>
                    )}
                </>) :
                (
                    <div className="sb-input-range">
                        <input type="range"
                            min={min}
                            max={max}
                            value={value}
                            step={steps ? steps : 1}
                            onChange={onChangeHandlerSingle}
                        />
                        <input type="number"
                            step={steps ? steps : 1}
                            onChange={onChangeHandlerSingle}
                            value={value}
                        />
                    </div>
                )
            }
        </div>
    </div>
}

export default CustomRangeControl;