import {__} from '@wordpress/i18n';
import {Tooltip, TextControl, Dropdown, Dashicon} from '@wordpress/components';
import ColorControl from './color';
import AdvancedRadio from './advancedradio';
import {ClearIcon} from '../utils/svgicons';

const BoxShadowControl = ({
    label,
    valueHorizontal,
    setValueHorizontal,
    valueVertical,
    setValueVertical,
    valueBlur,
    setValueBlur,
    valueSpread,
    setValueSpread,
    valueColor,
    setValueColor,
    valueInset,
    setValueInset
}) => {
    return <>
        <div className="sb-field sb-field-boxshadow">
            <label>{__("Box Shadow", 'smart-blocks')}</label>
            <div className="sb-components-dropdown">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div className="sb-reset-field"
                        onClick={(e) => {
                            setValueHorizontal('');
                            setValueVertical('');
                            setValueBlur('');
                            setValueSpread('');
                            setValueColor(undefined);
                            setValueInset('');
                        }}>
                        <span className="sb-clear-field" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    contentClassName="sb-popover-style"
                    renderToggle={({isOpen, onToggle}) => (
                        <button
                            className="sb-shadow-setttings sb-setting-button"
                            isPrimary={!0}
                            onClick={onToggle}
                            aria-expanded={isOpen}
                        >
                            <Dashicon size="15" icon="admin-tools" />
                        </button>
                    )}
                    renderContent={() =>
                        <>
                            <div className="sb-field sb-boxshadow">
                                <TextControl
                                    label={__('X', 'smart-blocks')}
                                    type={"number"}
                                    value={valueHorizontal}
                                    onChange={(e) => setValueHorizontal(e)}
                                />
                                <TextControl
                                    label={__('Y', 'smart-blocks')}
                                    type={"number"}
                                    value={valueVertical}
                                    onChange={(e) => setValueVertical(e)}
                                />
                                <TextControl
                                    label={__('Blur', 'smart-blocks')}
                                    type={"number"}
                                    value={valueBlur}
                                    onChange={(e) => setValueBlur(e)}
                                />
                                <TextControl
                                    label={__('Spread', 'smart-blocks')}
                                    type={"number"}
                                    value={valueSpread}
                                    onChange={(e) => setValueSpread(e)}
                                />
                            </div>

                            <ColorControl
                                label={__("Color", 'smart-blocks')}
                                value={valueColor}
                                setValue={value => setValueColor(value)}
                                enableAlpha
                            />

                            <AdvancedRadio
                                label={__("Inset", 'smart-blocks')}
                                value={valueInset}
                                setValue={((e) => setValueInset(e))}
                                options={[
                                    {label: __("Inset"), value: "inset", title: __("Inset")},
                                    {label: __("Outset"), value: "", title: __("Outset")}
                                ]}
                            />
                        </>
                    }
                />
            </div>
        </div>
    </>;
}

export default BoxShadowControl;