import { __ } from '@wordpress/i18n';
import ResponsiveDropdown from './responsivedropdown';
import {useSelect} from '@wordpress/data';
import {
    ButtonGroup,
    Button
} from '@wordpress/components';

const ButtonsGroupControl = ({ label, options = {}, steps, value, onChange, responsive }) => {

    const onChangeValue = (input) => {
        if (value === input) {
            return onChange(null);
        }
        return onChange(input);
    };

    const getView = useSelect(select => {
        const { getView } = select( 'smart-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    return <div className={`sb-field-range sb-field ${responsive ? 'sb-responsive' : ''}`}>
        <div className="sb-d-flex sb-align-center">
            {label && (
                <div>
                    <label htmlFor="input">{label}</label>
                </div>
            )}
            {responsive && (<ResponsiveDropdown/>)}
        </div>
        <div className="nxp-field-child">
            {responsive ?
                (<>
                    {getView == 'Mobile' && (
                        <ButtonGroup className="wp-block-smart-icon-buttom-group">
                            {options.map((alignment)=> {return (
                                <Button
                                    icon={alignment.icon}
                                    label={alignment.label}
                                    showTooltip={true}
                                    isLarge
                                    isPrimary={alignment.value === value?.sm}
                                    onClick={(e) => {
                                        value['sm'] = alignment.value === value?.sm ? null : alignment.value;
                                        onChange({ ...value });
                                    }}
                                />)
                            })}
                        </ButtonGroup>
                    )}
                    {getView == 'Tablet' && (
                        <ButtonGroup className="wp-block-smart-icon-buttom-group">
                            {options.map((alignment)=> {return (
                                <Button
                                    icon={alignment.icon}
                                    label={alignment.label}
                                    showTooltip={true}
                                    isLarge
                                    isPrimary={alignment.value === value?.md}
                                    onClick={(e) => {
                                        value['md'] = alignment.value === value?.md ? null : alignment.value;
                                        onChange({ ...value });
                                    }}
                                />)
                            })}
                        </ButtonGroup>
                    )}
                    {getView == 'Desktop' && (
                        <ButtonGroup className="wp-block-smart-icon-buttom-group">
                            {options.map((alignment)=> {return (
                                <Button
                                    icon={alignment.icon}
                                    label={alignment.label}
                                    showTooltip={true}
                                    isLarge
                                    isPrimary={alignment.value === value?.lg}
                                    onClick={(e) => {
                                        value['lg'] = alignment.value === value?.lg ? null : alignment.value;
                                        onChange({ ...value });
                                    }}
                                />)
                            })}
                        </ButtonGroup>
                    )}
                </>) :
                (
                    <ButtonGroup className="wp-block-smart-icon-buttom-group">
                        {options.map((alignment)=> {return (
                            <Button
                                icon={alignment.icon}
                                label={alignment.label}
                                showTooltip={true}
                                isLarge
                                isPrimary={alignment.value === value}
                                onClick={() => onChangeValue(alignment.value)}
                            />)
                        })}
                    </ButtonGroup>
                )
            }
        </div>
    </div>
}

export default ButtonsGroupControl;