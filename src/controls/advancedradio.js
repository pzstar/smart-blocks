import { Tooltip } from '@wordpress/components';

const AdvancedRadio = ({ options, value, setValue, label }) => {
    return <div className="sb-field sb-field-radio-advanced sb-d-flex sb-align-center">
        {label && (<span>{label}</span>)}
        <div className="sb-field-button-list sb-ml-auto">
            {options.map(function (option, key) {
                return <Tooltip text={option.title || option.value}>
                    <button
                        className={`${value == option.value ? "active" : ""} sb-button`}
                        key={key}
                        onClick={() => setValue(option.value)}>
                        {option.icon ? <i className={option.icon} /> : option.svg ? <span className={"sb-option-svg"}>{option.svg}</span> : option.label}
                    </button>
                </Tooltip>;
            })}
        </div>
    </div>
}

export default AdvancedRadio;