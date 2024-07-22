import {__} from '@wordpress/i18n';
import {Tooltip, Dropdown, ColorPicker} from '@wordpress/components';
import {ClearIcon} from '../utils/svgicons';
const ColorControl = ({label, value, setValue, enableAlpha}) => {
    const onChangeHandler = (e) => {
        setValue(e.hex);
    }
    const onClearHandler = (e) => {
        setValue(undefined);
    }

    return <>
        <div className="sb-field sb-field-color sb-inline-block ">
            {label && (<label>{label}</label>)}
            <div className="sb-flex">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div
                        className="sb-reset-color"
                        onClick={onClearHandler}
                    >
                        <span className="sb-border-clear sb-flex" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    className="sb-ml-auto"
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
                                    color={value ? value : undefined}
                                    onChangeComplete={onChangeHandler}
                                    enableAlpha
                                />
                            ) : (
                                <ColorPicker
                                    color={value ? value : undefined}
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