import { __ } from '@wordpress/i18n';

import {
	Button,
	Icon
} from '@wordpress/components';

import { useInstanceId } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { barcodeIcon } from '../../../helpers/icons.js';

const BackgroundControl = ({
	label,
	backgroundType,
	changeBackgroundType
}) => {
	const instanceId = useInstanceId( BackgroundControl );

	const id = `inspector-background-control-${ instanceId }`;

	return (
		<div id={ id } className="components-base-control sb-blocks-columns-background-control">
			<div className="components-base-control__field">
				<div className="components-base-control__title">
					<label className="components-base-control__label">{ label }</label>
					<div className="linking-controls">
						<Button
							icon={ 'color-picker' }
							label={ __( 'Color', 'smart-blocks' ) }
							showTootlip={ true }
							isPrimary={ 'color' === backgroundType }
							onClick={ () => changeBackgroundType( 'color' ) }
						/>

						<Button
							icon={ 'format-image' }
							label={ __( 'Image', 'smart-blocks' ) }
							showTootlip={ true }
							isPrimary={ 'image' === backgroundType }
							onClick={ () => changeBackgroundType( 'image' ) }
						/>

						<Button
							icon={ 'admin-customizer' }
							label={ __( 'Gradient', 'smart-blocks' ) }
							showTootlip={ true }
							isPrimary={ 'gradient' === backgroundType }
							onClick={ () => changeBackgroundType( 'gradient' ) }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackgroundControl;
