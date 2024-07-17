import { __ } from '@wordpress/i18n';
import { ClearIcon } from '../utils/svgicons';
import {
    Dashicon,
    Button,
    Tooltip,
    SelectControl
} from '@wordpress/components';
import {
    MediaPlaceholder
} from '@wordpress/block-editor';

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
    imagePosition,
    setImagePosition,
    imageRepeat,
    setImageRepeat
}) => {

    return <>
        <div className="sb-field sb-field-color sb-block ">
            {label && (
                <div>
                    <label htmlFor="input">{label}</label>
                </div>
            )}
        </div>
        <div className="nxp-field-child sb-image-container">
            {(imageURL) ? (
                <>
                    <div className="sb-image-container-body">
                        <div className="sb-image-container-area">
                            <div
                                className="sb-image-container-holder"
                                style={{
                                    backgroundImage: `url('${imageURL}')`
                                }}
                            ></div>

                            <div
                                className="sb-image-container-delete"
                                onClick={() => {
                                    setImageID('');
                                    setImageURL('');
                                }}
                            >
                                <Dashicon icon="trash" />
                                <span>{__('Remove Image', 'smart-blocks')}</span>
                            </div>
                        </div>
                    </div>

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
                        options={ [
                            {label: __('Scroll', 'smart-blocks'), value: 'scroll'},
                            {label: __('Fixed', 'smart-blocks'), value: 'fixed'}
                        ]}
                        onChange={value => setImageAttachment(value)}
                    />

                    <SelectControl
                        label={__( 'Background Position', 'smart-blocks' )}
                        value={imagePosition}
                        options={[
                            {label: __('Default', 'smart-blocks'), value: 'top left'},
                            {label: __('Top Left', 'smart-blocks'), value: 'top left'},
                            {label: __('Top Center', 'smart-blocks'), value: 'top center'},
                            {label: __('Top Right', 'smart-blocks'), value: 'top right'},
                            {label: __('Center Left', 'smart-blocks'), value: 'center left'},
                            {label: __('Center Center', 'smart-blocks'), value: 'center center'},
                            {label: __('Center Right', 'smart-blocks'), value: 'center right'},
                            {label: __('Bottom Left', 'smart-blocks'), value: 'bottom left'},
                            {label: __('Bottom Center', 'smart-blocks'), value: 'bottom center'},
                            {label: __('Bottom Right', 'smart-blocks'), value: 'bottom right'}
                        ]}
                        onChange={value => setImagePosition(value)}
                    />

                    <SelectControl
                        label={__( 'Background Repeat', 'smart-blocks' )}
                        value={imageRepeat}
                        options={[
                            {label: __('Repeat', 'smart-blocks'), value: 'repeat'},
                            {label: __('No-repeat', 'smart-blocks'), value: 'no-repeat'}
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