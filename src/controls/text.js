import {__} from '@wordpress/i18n';
const TextControl = ({label, value, setValue}) => {
    return <>
        <div className="sb-field sb-field-text sb-display-inline">
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