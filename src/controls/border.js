import {__} from '@wordpress/i18n';
import {Tooltip} from '@wordpress/components';
import {ClearIcon} from '../utils/svgicons';

const BorderControl = ({label, value, setValue}) => {
    const borderStyles = [
        ["solid", esc_html__("Solid", 'smart-blocks')],
        ["dotted", esc_html__("Dotted", 'smart-blocks')],
        ["dashed", esc_html__("Dashed", 'smart-blocks')],
        ["double", esc_html__("Double", 'smart-blocks')]
    ];
    const onClearHandler = (e) => {
        setValue('');
    }
    return <>
        <div className="sb-field sb-field-border">
            <label>{__('Border', 'smart-blocks')}</label>
            <div className="sb-field-button-list">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div className="sb-reset-field"
                        onClick={onClearHandler}>
                        <span className="sb-clear-field" role="button">
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