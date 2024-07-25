import {__} from '@wordpress/i18n';

import {Button, Dashicon, Icon, Path, Placeholder, Rect, SVG, Tooltip} from '@wordpress/components';
import {useState} from '@wordpress/element';

const LayoutSelector = ({clientId, setupColumns}) => {
	return (
		<Placeholder
			label={__('Section', 'smart-blocks')}
			instructions={__('Select a variation to start with', 'smart-blocks')}
			isColumnLayout={true}
			className="sb-onboarding-component"
		>
			<div className="sb-layout-picker">
				<Tooltip text={__('Equal', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(2, 'equal')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>

				<Tooltip text={__('1:2', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(2, 'oneTwo')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>

				<Tooltip text={__('2:1', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(2, 'twoOne')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>

				<Tooltip text={__('Equal', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(3, 'equal')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
							<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>

				<Tooltip text={__('1:1:2', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(3, 'oneOneTwo')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="14" y="0" width="2" height="40" stroke-width="0"></rect>
							<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>

				<Tooltip text={__('2:1:1', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(3, 'twoOneOne')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
							<rect x="44" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>

				<Tooltip text={__('Equal', 'smart-blocks')}>
					<Button
						isLarge
						className="sb-blocks-column-layout"
						onClick={() => setupColumns(4, 'equal')}
					>
						<svg viewBox="0 0 60 40">
							<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
							<rect x="14" y="0" width="2" height="40" stroke-width="0"></rect>
							<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
							<rect x="44" y="0" width="2" height="40" stroke-width="0"></rect>
						</svg>
					</Button>
				</Tooltip>
			</div>
		</Placeholder>
	);
};

export default LayoutSelector;
