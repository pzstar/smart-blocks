import {__} from '@wordpress/i18n';
import Select from 'react-select';

const MultipleSelectControl = ({label, options, value, setValue}) => {
    return <>
        <div className="sb-field sb-multiple-select">
            {label && (<label className="sb-label">{label}</label>)}
            <div class="sb-input-fields">
                <div class="sb-popup-select">
                    <Select
                        value={options.filter(option => value && value.includes(option.value))}
                        onChange={val => {
                            let valArr = [];
                            val.map((innerval, i) => {
                                valArr.push(innerval.value)
                            })
                            setValue(valArr);
                        }}
                        options={options}
                        isMulti={!0}
                        className="sb-select-container"
                        classNamePrefix="sb-select"
                    />
                </div>
            </div>
        </div>
    </>;
}

export default MultipleSelectControl;