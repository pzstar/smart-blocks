import {__} from '@wordpress/i18n';
import {Tooltip} from '@wordpress/components';
import {ClearIcon} from '../utils/svgicons';

const BorderControl = ({label, value, setValue}) => {
    const borderStyles = [
        ["solid", __("Solid", 'smart-blocks')],
        ["dotted", __("Dotted", 'smart-blocks')],
        ["dashed", __("Dashed", 'smart-blocks')],
        ["double", __("Double", 'smart-blocks')]
    ];
    const onClearHandler = (e) => {
        setValue('');
    }
    return <>
        <div className="sb-field sb-field-border">
            <label>{__('Border', 'smart-blocks')}</label>
            <div className="sb-field-button-list">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div className="sb-reset-color"
                        onClick={onClearHandler}>
                        <span className="sb-border-clear" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <div className="sb-field-button-wrap">
                    {borderStyles.map((style, index) => (
                        <Tooltip
                            text={style[1]}
                            key={index}>
                            <button
                                className={`${value && value == style[0] ? "active" : ""} sb-button`}
                                onClick={() => {setValue(style[0])}}
                            >
                                <span className={`sb-field-border-type sb-field-border-type-${style[0]}`} />
                            </button>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div >
    </>
}
export default BorderControl;