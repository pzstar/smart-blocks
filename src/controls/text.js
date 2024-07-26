import {__} from '@wordpress/i18n';
const TextControl = ({label, value, setValue}) => {
    return <>
        <div className="sb-field-select sb-field sb-d-flex sb-inline-block">
            {label && (<label>{label}</label>)}
            <div class="sb-field-child">
                <input
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    </>;
}

export default TextControl;