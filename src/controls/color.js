import {__} from '@wordpress/i18n';
import {Tooltip, Dropdown, ColorPicker} from '@wordpress/components';
import {ClearIcon} from '../utils/svgicons';
const ColorControl = ({label, value, setValue, enableAlpha}) => {
    const onChangeHandler = (e) => {
        setValue(e.hex);
    }
    const onClearHandler = (e) => {
        setValue('');
    }

    return <>
        <div className="sb-field sb-field-color">
            {label && (<label>{label}</label>)}
            <div className="sb-components-dropdown">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div
                        className="sb-reset-color"
                        onClick={onClearHandler}
                    >
                        <span className="sb-border-clear" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    contentClassName="sb-popover-style"
                    renderToggle={(function ({isOpen, onToggle}) {
                        return <>
                            <span className="sb-color-picker-container">
                                <button
                                    className="sb-color-picker"
                                    isPrimary={!0}
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                    style={value && {
                                        backgroundColor: value,
                                        borderColor: value
                                    }}
                                >
                                </button>
                            </span>
                        </>;
                    })}
                    renderContent={(function () {
                        return <span>
                            {enableAlpha ? (
                                <ColorPicker
                                    color={value ? value : ''}
                                    onChangeComplete={onChangeHandler}
                                    enableAlpha
                                />
                            ) : (
                                <ColorPicker
                                    color={value ? value : ''}
                                    onChangeComplete={onChangeHandler}
                                    disableAlpha
                                />
                            )
                            }
                        </span>;
                    })}
                />
            </div>
        </div>

    </>;
}

export default ColorControl;