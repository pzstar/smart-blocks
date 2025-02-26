import {__} from '@wordpress/i18n';
import {ClearIcon} from '../utils/svgicons';
import {
    Dashicon,
    Button,
    Tooltip,
    FocalPointPicker
} from '@wordpress/components';
import {
    MediaPlaceholder
} from '@wordpress/block-editor';
import ColorControl from './color';
import SelectControl from './select';

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

    return (
        <div className="sb-field sb-field-background">
            {label && (<label htmlFor="input">{label}</label>)}
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
                            label={__('Attachment', 'smart-blocks')}
                            value={imageAttachment}
                            options={[
                                {label: esc_html__('Scroll', 'smart-blocks'), value: 'scroll'},
                                {label: esc_html__('Fixed', 'smart-blocks'), value: 'fixed'}
                            ]}
                            onChange={value => setImageAttachment(value)}
                        />

                        <SelectControl
                            label={__('Repeat', 'smart-blocks')}
                            value={imageRepeat}
                            options={[
                                {label: esc_html__('Repeat', 'smart-blocks'), value: 'repeat'},
                                {label: esc_html__('No Repeat', 'smart-blocks'), value: 'no-repeat'},
                                {label: esc_html__('Repeat X', 'smart-blocks'), value: 'repeat-x'},
                                {label: esc_html__('Repeat Y', 'smart-blocks'), value: 'repeat-y'}
                            ]}
                            onChange={value => setImageRepeat(value)}
                        />

                        <SelectControl
                            label={__('Size', 'smart-blocks')}
                            value={imageSize}
                            options={[
                                {label: esc_html__('Auto', 'smart-blocks'), value: 'auto'},
                                {label: esc_html__('Cover', 'smart-blocks'), value: 'cover'},
                                {label: esc_html__('Contain', 'smart-blocks'), value: 'contain'}
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
                            title: esc_html__('Background Image', 'smart-blocks'),
                            name: esc_html__('Background Image', 'smart-blocks')
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
        </div>

    );
}

export default ImageBackgroundControl;