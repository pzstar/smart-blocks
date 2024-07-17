import { __ } from '@wordpress/i18n';
import ResponsiveDropdown from '../utils/responsivedropdown';
import { useSelect } from '@wordpress/data';
import {
    ButtonGroup,
    Button
} from '@wordpress/components';

const ButtonGroupControl = ({
    label,
    options,
    steps,
    responsive,
    value,
    setValue,
    valueSm,
    setValueSm,
    valueMd,
    setValueMd
}) => {

    const getView = useSelect(select => {
        const { getView } = select('smart-blocks/data');
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') ? select('core/edit-post') : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    return <div className={`sb-field-range sb-field ${responsive ? 'sb-responsive' : ''}`}>
        <div className="sb-d-flex sb-align-center">
            {label && (
                <div>
                    <label htmlFor="input">{label}</label>
                </div>
            )}
            {responsive && (<ResponsiveDropdown />)}
        </div>
        <div className="nxp-field-child">
            {responsive ?
                (<>
                    {getView == 'Mobile' && (
                        <ButtonGroup className="sb-icon-buttom-group">
                            {options.map((alignment) => {
                                return (
                                    <Button
                                        icon={alignment.icon}
                                        label={alignment.label}
                                        showTooltip={true}
                                        isLarge
                                        isPrimary={alignment.value === valueSm}
                                        onClick={(e) => { setValueSm(alignment.value === valueSm ? null : alignment.value) }}
                                    />)
                            })}
                        </ButtonGroup>
                    )}
                    {getView == 'Tablet' && (
                        <ButtonGroup className="sb-icon-buttom-group">
                            {options.map((alignment) => {
                                return (
                                    <Button
                                        icon={alignment.icon}
                                        label={alignment.label}
                                        showTooltip={true}
                                        isLarge
                                        isPrimary={alignment.value === valueMd}
                                        onClick={(e) => { setValueMd(alignment.value === valueMd ? null : alignment.value) }}
                                    />)
                            })}
                        </ButtonGroup>
                    )}
                    {getView == 'Desktop' && (
                        <ButtonGroup className="sb-icon-buttom-group">
                            {options.map((alignment) => {
                                return (
                                    <Button
                                        icon={alignment.icon}
                                        label={alignment.label}
                                        showTooltip={true}
                                        isLarge
                                        isPrimary={alignment.value === value}
                                        onClick={(e) => { setValue(alignment.value === value ? null : alignment.value) }}
                                    />)
                            })}
                        </ButtonGroup>
                    )}
                </>) :
                (
                    <ButtonGroup className="sb-icon-buttom-group">
                        {options.map((alignment) => {
                            return (
                                <Button
                                    icon={alignment.icon}
                                    label={alignment.label}
                                    showTooltip={true}
                                    isLarge
                                    isPrimary={alignment.value === value}
                                    onClick={() => { setValue(alignment.value === value ? null : alignment.value) }}
                                />)
                        })}
                    </ButtonGroup>
                )
            }
        </div>
    </div>
}

export default ButtonGroupControl;