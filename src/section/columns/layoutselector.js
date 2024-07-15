import { __ } from '@wordpress/i18n';

import { Button, Dashicon, Icon, Path, Placeholder, Rect, SVG, Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { columnsIcon } from '../../helpers/icons.js';

const LayoutSelector = ({ clientId, setupColumns }) => {
	return (
		<Placeholder
			label={__('Section', 'smart-blocks')}
			instructions={__('Select a variation to start with', 'smart-blocks')}
			icon={<Icon icon={columnsIcon} />}
			isColumnLayout={true}
			className="wp-block-sb-onboarding-component"
		>
			<div className="wp-block-sb-layout-picker">
				<Tooltip text={__('Equal', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(2, 'equal')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"></Path>
							<Rect x="22.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={__('1:2', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(2, 'oneTwo')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"/>
							<Rect x="16.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={__('2:1', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(2, 'twoOne')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"/>
							<Rect x="28.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={__('Equal', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(3, 'equal')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"/>
							<Rect x="28.9" y="13" width="2.2" height="22"/>
							<Rect x="16.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={__('1:1:2', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(3, 'oneOneTwo')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"/>
							<Rect x="22.9" y="13" width="2.2" height="22"/>
							<Rect x="12.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={__('2:1:1', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(3, 'twoOneOne')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"/>
							<Rect x="22.9" y="13" width="2.2" height="22"/>
							<Rect x="32.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={__('Equal', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(4, 'equal')}
					>
						<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"/>
							<Rect x="13.9" y="13" width="2.2" height="22"/>
							<Rect x="32.9" y="13" width="2.2" height="22"/>
							<Rect x="22.9" y="13" width="2.2" height="22"/>
						</SVG>
					</Button>
				</Tooltip>
			</div>
		</Placeholder>
	);
};

export default LayoutSelector;
