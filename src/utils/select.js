import { __ } from '@wordpress/i18n';
const Select = ({ label, options, value, onChange }) => {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    }
    return <>
        <div className="sb-field-select sb-field sb-d-flex sb-inline-block">
            {label && (<label>{label}</label>)}
            <div class="sb-field-child">
                <div class="sb-popup-select ">
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

export default Select;