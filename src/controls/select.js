import {__} from '@wordpress/i18n';
const SelectControl = ({label, options, value, onChange}) => {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    }
    return <>
        <div className="sb-field sb-field-select sb-display-inline">
            {label && (<label>{label}</label>)}
            <div class="sb-input-fields">
                <div class="sb-popup-select">
                    <select
                        value={value}
                        onChange={onChangeHandler}>
                        {options && options.map((obj, i) => {
                            return <option value={obj.value} key={obj.value}>{obj.label}</option>
                        }
                        )}
                    </select>
                </div>
            </div>
        </div>
    </>;
}

export default SelectControl;