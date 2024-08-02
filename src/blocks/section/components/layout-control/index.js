import classnames from 'classnames';

import {__} from '@wordpress/i18n';
import {
	Button,
	Path,
	Rect,
	SVG,
	Tooltip
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';

import ResponsiveDropdown from '../../../../utils/responsivedropdown';

const LayoutControl = ({
	label,
	onClick,
	layout,
	layoutTablet,
	layoutMobile,
	columns
}) => {
	const getView = useSelect((select) => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	let value;

	if ('Desktop' === getView) {
		value = layout;
	} else if ('Tablet' === getView) {
		value = layoutTablet;
	} else if ('Mobile' === getView) {
		value = layoutMobile;
	}

	return (
		<>
			<div className="sb-field">
				<div className="sb-label">
					{label &&
						(<label htmlFor="input">{label}</label>)
					}
					<ResponsiveDropdown />
				</div>
				<div className="sb-blocks-columns-layout-control">
					{1 === columns && (
						<Tooltip text={__('Single Row', 'smart-blocks')} >
							<Button
								className={classnames(
									'sb-blocks-column-layout',
									{'selected': 'equal' === value}
								)}
								onClick={() => onClick('equal')}
							>
								<svg viewBox="0 0 60 40">
									<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
								</svg>
							</Button>
						</Tooltip>
					) || 2 === columns && (
						<>
							{('Desktop' == getView || layout == 'equal') && (
								<Tooltip text={__('Equal', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'equal' === value}
										)}
										onClick={() => onClick('equal')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}

							{('Desktop' == getView || layout == 'oneTwo') && (
								<Tooltip text={__('1:2', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'oneTwo' === value}
										)}
										onClick={() => onClick('oneTwo')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}


							{('Desktop' == getView || layout == 'twoOne') && (
								<Tooltip text={__('2:1', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'twoOne' === value}
										)}
										onClick={() => onClick('twoOne')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}

							{('Mobile' == getView || 'Tablet' == getView) && (
								<Tooltip text={__('Collapsed Rows', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'collapsedRows' === value}
										)}
										onClick={() => onClick('collapsedRows')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}
						</>
					) || 3 === columns && (
						<>
							{('Desktop' == getView || layout == 'equal') && (
								<Tooltip text={__('Equal', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'equal' === value}
										)}
										onClick={() => onClick('equal')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
											<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}

							{('Desktop' == getView || layout == 'oneOneTwo') && (
								<Tooltip text={__('1:1:2', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'oneOneTwo' === value}
										)}
										onClick={() => onClick('oneOneTwo')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="14" y="0" width="2" height="40" stroke-width="0"></rect>
											<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}
							
							{('Desktop' == getView || layout == 'twoOneOne') && (
								<Tooltip text={__('2:1:1', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'twoOneOne' === value}
										)}
										onClick={() => onClick('twoOneOne')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
											<rect x="44" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}

							{('Desktop' == getView || layout == 'oneTwoOne') && (
								<Tooltip text={__('1:2:1', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'oneTwoOne' === value}
										)}
										onClick={() => onClick('oneTwoOne')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="14" y="0" width="2" height="40" stroke-width="0"></rect>
											<rect x="44" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}

							{('Desktop' == getView || layout == 'oneThreeOne') && (
								<Tooltip text={__('1:3:1', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'oneThreeOne' === value}
										)}
										onClick={() => onClick('oneThreeOne')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="11" y="0" width="2" height="40" stroke-width="0"></rect>
											<rect x="47" y="0" width="2" height="40" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}

							{('Mobile' == getView || 'Tablet' == getView) && (
								<Tooltip text={__('Collapsed Rows', 'smart-blocks')} >
									<Button
										className={classnames(
											'sb-blocks-column-layout',
											{'selected': 'collapsedRows' === value}
										)}
										onClick={() => onClick('collapsedRows')}
									>
										<svg viewBox="0 0 60 40">
											<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
											<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
										</svg>
									</Button>
								</Tooltip>
							)}
						</>
					) || 4 === columns && (
						<>
							<Tooltip text={__('Equal', 'smart-blocks')} >
								<Button
									className={classnames(
										'sb-blocks-column-layout',
										{'selected': 'equal' === value}
									)}
									onClick={() => onClick('equal')}
								>
									<svg viewBox="0 0 60 40">
										<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
										<rect x="14" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="44" y="0" width="2" height="40" stroke-width="0"></rect>
									</svg>
								</Button>
							</Tooltip>

							{('Mobile' == getView || 'Tablet' == getView) && (
								<>
									<Tooltip text={__('Two Column Grid', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'twoColumnGrid' === value}
											)}
											onClick={() => onClick('twoColumnGrid')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
												<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>

									<Tooltip text={__('Collapsed Rows', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'collapsedRows' === value}
											)}
											onClick={() => onClick('collapsedRows')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>
								</>
							)}
						</>
					) || 5 === columns && (
						<>
							<Tooltip text={__('Equal', 'smart-blocks')} >
								<Button
									className={classnames(
										'sb-blocks-column-layout',
										{'selected': 'equal' === value}
									)}
									onClick={() => onClick('equal')}
								>
									<svg viewBox="0 0 60 40">
										<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
										<rect x="11" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="23" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="35" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="47" y="0" width="2" height="40" stroke-width="0"></rect>
									</svg>
								</Button>
							</Tooltip>

							{('Mobile' == getView || 'Tablet' == getView) && (
								<>
									<Tooltip text={__('Two Column Grid', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'twoColumnGrid' === value}
											)}
											onClick={() => onClick('twoColumnGrid')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="0" y="12.33" width="60" height="2" stroke-width="0"></rect>
												<rect x="0" y="25.66" width="60" height="2" stroke-width="0"></rect>
												<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>

									<Tooltip text={__('Three Column Grid', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'threeColumnGrid' === value}
											)}
											onClick={() => onClick('threeColumnGrid')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
												<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
												<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>
									<Tooltip text={__('Collapsed Rows', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'collapsedRows' === value}
											)}
											onClick={() => onClick('collapsedRows')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>
								</>
							)}
						</>
					) || 6 === columns && (
						<>
							<Tooltip text={__('Equal', 'smart-blocks')} >
								<Button
									className={classnames(
										'sb-blocks-column-layout',
										{'selected': 'equal' === value}
									)}
									onClick={() => onClick('equal')}
								>
									<svg viewBox="0 0 60 40">
										<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
										<rect x="9" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="49" y="0" width="2" height="40" stroke-width="0"></rect>
										<rect x="59" y="0" width="2" height="40" stroke-width="0"></rect>
									</svg>
								</Button>
							</Tooltip>

							{('Mobile' == getView || 'Tablet' == getView) && (
								<>
									<Tooltip text={__('Two Column Grid', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'twoColumnGrid' === value}
											)}
											onClick={() => onClick('twoColumnGrid')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="0" y="12.33" width="60" height="2" stroke-width="0"></rect>
												<rect x="0" y="25.66" width="60" height="2" stroke-width="0"></rect>
												<rect x="29" y="0" width="2" height="40" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>

									<Tooltip text={__('Three Column Grid', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'threeColumnGrid' === value}
											)}
											onClick={() => onClick('threeColumnGrid')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="19" y="0" width="2" height="40" stroke-width="0"></rect>
												<rect x="39" y="0" width="2" height="40" stroke-width="0"></rect>
												<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>

									<Tooltip text={__('Collapsed Rows', 'smart-blocks')} >
										<Button
											className={classnames(
												'sb-blocks-column-layout',
												{'selected': 'collapsedRows' === value}
											)}
											onClick={() => onClick('collapsedRows')}
										>
											<svg viewBox="0 0 60 40">
												<rect width="60" height="40" fill="none" stroke="inherit" stroke-width="4"></rect>
												<rect x="0" y="19" width="60" height="2" stroke-width="0"></rect>
											</svg>
										</Button>
									</Tooltip>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default LayoutControl;
