import { __ } from '@wordpress/i18n';
import { TextareaControl as TxtareaControl } from '@wordpress/components';

const TextareaControl = ({label, value, setValue}) => {
    return <>
        <div className="sb-field sb-field-textarea">
            {label && (<label className="sb-label">{label}</label>)}
            <div class="sb-field-child">
                <TxtareaControl
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    </>;
}

export default TextareaControl;