import { __ } from '@wordpress/i18n';
import { Tooltip, TextControl, Dropdown, Dashicon } from '@wordpress/components';
import ColorControl from './color';
import AdvancedRadio from './advancedradio';
import { ClearIcon } from '../utils/svgicons';

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
    !values ?
        values = {
            "horizontal": undefined,
            "vertical": undefined,
            "blur": undefined,
            "spread": undefined,
            "color": undefined,
            "inset": undefined
        } : values;

    const onClearHandler = (e) => {
        onChange({
            "horizontal": undefined,
            "vertical": undefined,
            "blur": undefined,
            "spread": undefined,
            "color": undefined,
            "inset": undefined
        });
    }
    return <>
        <div className="sb-field sb-flex sb-field-boxshadow sb-inline-block ">
            <label className="sb-mb-0">{__("Box Shadow", 'smart-blocks')}</label>
            <div className="sb-flex">
                <Tooltip text={__('Clear', 'smart-blocks')}>
                    <div className="sb-reset-color"
                        onClick={onClearHandler}>
                        <span className="sb-border-clear sb-flex" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    className="sb-ml-auto"
                    contentClassName="sb-popover-style"
                    renderToggle={({ isOpen, onToggle }) => (
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
                                    value={values['blur'] || ""}
                                    onChange={(e) => setValueBlur(e)}
                                />
                                <TextControl
                                    label={__('Spread', 'smart-blocks')}
                                    type={"number"}
                                    value={values['spread'] || ""}
                                    onChange={(e) => setValueSpread(e)}
                                />
                            </div>

                            <ColorControl
                                label={__("Color", 'smart-blocks')}
                                value={values['color']}
                                setValue={(e) => setValueColor(e)}
                                enableAlpha
                            />

                            <AdvancedRadio
                                label={__("Inset", 'smart-blocks')}
                                value={values['inset']}
                                setValue={((e) => setValueInset(e))}
                                options={[
                                    { label: __("Inset"), value: "inset", title: __("Inset") },
                                    { label: __("Outset"), value: "", title: __("Outset") }
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