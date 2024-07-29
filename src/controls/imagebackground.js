import {__} from '@wordpress/i18n';
import {ClearIcon} from '../utils/svgicons';
import {
    Dashicon,
    Button,
    Tooltip,
    SelectControl,
    FocalPointPicker
} from '@wordpress/components';
import {
    MediaPlaceholder
} from '@wordpress/block-editor';
import ColorControl from './color';

const ImageBackgroundControl = ({
    label,
    imageURL,
    setImageURL,
    imageID,
    setImageID,
    imageAttachment,
    setImageAttachment,
    imageSize,
    setImageSize,
    imagePositionX,
    setImagePositionX,
    imagePositionY,
    setImagePositionY,
    imageRepeat,
    setImageRepeat,
    imageOverlayColor,
    setImageOverlayColor
}) => {

    return <>
        <div className="sb-field sb-field-background">
            {label && (<label htmlFor="input">{label}</label>)}
        </div>
        <div className="sb-input-fields sb-image-container">
            {(imageURL) ? (
                <>
                    <FocalPointPicker
                        __nextHasNoMarginBottom
                        url={imageURL}
                        value={{
                            x: imagePositionX,
                            y: imagePositionY,
                        }}
                        onDragStart={value => {
                            setImagePositionX(value.x);
                            setImagePositionY(value.y);
                        }}
                        onDrag={value => {
                            setImagePositionX(value.x);
                            setImagePositionY(value.y);
                        }}
                        onChange={value => {
                            setImagePositionX(value.x);
                            setImagePositionY(value.y);
                        }}
                    />

                    <Button
                        isSecondary
                        className="sb-image-container-delete-button"
                        onClick={() => {
                            setImageID('');
                            setImageURL('');
                        }}
                    >
                        {__('Remove Image', 'smart-blocks')}
                    </Button>

                    <SelectControl
                        label={__('Background Attachment', 'smart-blocks')}
                        value={imageAttachment}
                        options={[
                            {label: __('Scroll', 'smart-blocks'), value: 'scroll'},
                            {label: __('Fixed', 'smart-blocks'), value: 'fixed'}
                        ]}
                        onChange={value => setImageAttachment(value)}
                    />

                    <SelectControl
                        label={__('Background Repeat', 'smart-blocks')}
                        value={imageRepeat}
                        options={[
                            {label: __('Repeat', 'smart-blocks'), value: 'repeat'},
                            {label: __('No Repeat', 'smart-blocks'), value: 'no-repeat'},
                            {label: __('Repeat X', 'smart-blocks'), value: 'repeat-x'},
                            {label: __('Repeat Y', 'smart-blocks'), value: 'repeat-y'}
                        ]}
                        onChange={value => setImageRepeat(value)}
                    />

                    <SelectControl
                        label={__('Background Size', 'smart-blocks')}
                        value={imageSize}
                        options={[
                            {label: __('Auto', 'smart-blocks'), value: 'auto'},
                            {label: __('Cover', 'smart-blocks'), value: 'cover'},
                            {label: __('Contain', 'smart-blocks'), value: 'contain'}
                        ]}
                        onChange={value => setImageSize(value)}
                    />

                    <ColorControl
                        label={__('Overlay Color', 'smart-blocks')}
                        enableAlpha={!0}
                        value={imageOverlayColor}
                        setValue={value => setImageOverlayColor(value)}
                    />
                </>
            ) : (
                <MediaPlaceholder
                    icon="format-image"
                    labels={{
                        title: __('Background Image', 'smart-blocks'),
                        name: __('Background Image', 'smart-blocks')
                    }}
                    value={imageID}
                    onSelect={value => {
                        setImageID(value.id);
                        setImageURL(value.url);
                    }}
                    accept="image/*"
                    allowedTypes={['image']}
                />
            )}
        </div>

    </>;
}

export default ImageBackgroundControl;