import {__} from '@wordpress/i18n';
const SelectControl = ({label, options, value, onChange, inline = !0}) => {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    }
    return <>
        <div className={`sb-field ${inline ? 'sb-field-select sb-display-inline' : ''}`}>
            {label && (<label className={`${inline ? '' : 'sb-label'}`}>{label}</label>)}
            <div className="sb-input-fields">
                <div className="sb-popup-select">
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