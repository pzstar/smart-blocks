/**
 * External dependencies
 */
import classnames from 'classnames';
import {DesktopIcon, TabletIcon, PhoneIcon} from './svgicons';

/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {useSelect, useDispatch} from '@wordpress/data';
import {getPreviewDeviceSetter, getPreviewDeviceType} from '../utils/device-preview';

const ResponsiveDropdown = ({label, className, children}) => {
    const getView = useSelect(select => {
        return getPreviewDeviceType(select);
    });

    const {updateView} = useDispatch('smart-blocks/data');
    const dispatch = useDispatch();
    const setView = getPreviewDeviceSetter(dispatch, updateView);

    return (
        <div className="sb-device active-md">
            <button
                title={__('Desktop', 'smart-blocks')}
                className={`sb-device-desktop ${getView === 'Desktop' ? " active" : ""}`}
                onClick={() => {setView('Desktop')}}
            >
                <DesktopIcon />
            </button>
            <button
                title={__('Tablet', 'smart-blocks')}
                className={`sb-device-tablet ${getView === 'Tablet' ? " active" : ""}`}
                onClick={() => {setView('Tablet')}}
            >
                <TabletIcon />
            </button>
            <button
                title={__('Phone', 'smart-blocks')}
                className={`sb-device-mobile ${getView === 'Mobile' ? " active" : ""}`}
                onClick={() => {setView('Mobile')}}
            >
                <PhoneIcon />
            </button>
        </div>
    );
};

export default ResponsiveDropdown;