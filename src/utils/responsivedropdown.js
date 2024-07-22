/**
 * External dependencies
 */
import {DesktopIcon, PhoneIcon, TabletIcon} from './svgicons';

/**
 * WordPress dependencies
 */
import {useDispatch, useSelect} from '@wordpress/data';
import {__} from '@wordpress/i18n';

const ResponsiveDropdown = ({label, className, children}) => {
    const getView = useSelect(select => {
        const {getView} = select('smart-blocks/data');
        const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    });

    const {updateView} = useDispatch('smart-blocks/data');
    const {__experimentalSetPreviewDeviceType} = useDispatch('core/edit-post') ? useDispatch('core/edit-post') : false;
    const setView = __experimentalSetPreviewDeviceType ? __experimentalSetPreviewDeviceType : updateView;

    return (
        <div className="sb-device sb-ml-10 active-md">
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