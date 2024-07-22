import {Dashicon, Dropdown, TextControl, Tooltip} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {ClearIcon} from '../utils/svgicons';
import AdvancedRadio from './advancedradio';
import ColorControl from './color';

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
        <div className="sb-field sb-flex sb-field-boxshadow sb-inline-block ">
            <label className="sb-mb-0">{__("Box Shadow", 'smart-blocks')}</label>
            <div className="sb-flex">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div className="sb-reset-color"
                        onClick={(e) => {
                            setValueHorizontal(undefined);
                            setValueVertical(undefined);
                            setValueBlur(undefined);
                            setValueSpread(undefined);
                            setValueColor(undefined);
                            setValueInset(undefined);
                        }}>
                        <span className="sb-border-clear sb-flex" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    className="sb-ml-auto"
                    contentClassName="sb-popover-style"
                    renderToggle={({isOpen, onToggle}) => (
                        <button
                            className="sb-shadow-setttings"
                            isPrimary={!0}
                            onClick={onToggle}
                            aria-expanded={isOpen}
                        >
                            <Dashicon size="15" icon="admin-tools" />
                        </button>
                    )}
                    renderContent={() =>
                        <>
                            <div className="sb-field sb-d-flex sb-align-justified boxshadow-content">
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