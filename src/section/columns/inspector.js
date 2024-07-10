import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	ButtonGroup,
	Dashicon,
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
	useEffect
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import LayoutControl from '../components/layout-control/index.js';
import { LayoutIcon, StyleIcon, AdvancedIcon } from '../../utils/svgicons';
import Dimension from '../../utils/dimension';
import CustomRangeControl from '../../utils/customrangecontrol';

const Inspector = ({
	attributes,
	setAttributes,
	updateColumnsWidth,
	dividerViewType,
	setDividerViewType
}) => {
	const {
		columns,
        blockMargin,
        blockPadding,
		horizontalAlign,
		layout,
		layoutTablet,
		layoutMobile,
		columnsGap,
		columnsWidth,
		columnsHeight,
		columnsHeightCustom,
		hide,
		hideTablet,
		hideMobile,
		reverseColumnsTablet,
		reverseColumnsMobile,
		columnsHTMLTag
    } = attributes;
	const getView = useSelect( ( select ) => {
		const { getView } = select( 'smart-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

    const [activeTab, setActiveTab] = useState('layout');
	const [hasColumnsChanged, setColumnsChanged] = useState( false );

	const changeColumns = value => {
		if (6 >= value) {
			setAttributes({
				columns: value,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
		}

		if (6 < value) {
			setAttributes({
				columns: 6,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'collapsedRows'
			});
		}

		if (1 >= value) {
			setAttributes({
				columns: 1,
				layout: 'equal',
				layoutTablet: 'equal',
				layoutMobile: 'equal'
			});
		}

		setColumnsChanged( true );
	};

	useEffect( () => {
		if (!hasColumnsChanged) {
			return;
		}

		if (6 >= columns) {
			updateColumnsWidth(columns, 'equal');
		} else if ( 6 < columns ) {
			updateColumnsWidth(6, 'equal');
		} else if ( 1 >= columns ) {
			updateColumnsWidth(1, 'equal');
		}
		setColumnsChanged( false );
	}, [columns]);

	const changeLayout = value => {
		if ('Desktop' === getView) {
			setAttributes({layout: value});
			updateColumnsWidth(columns, value);
		}
		if ('Tablet' === getView) {
			setAttributes({layoutTablet: value});
		}
		if ('Mobile' === getView) {
			setAttributes({layoutMobile: value});
		}
	};

	const changeColumnsGap = value => {
		setAttributes({ columnsGap: value });
	};


	const changeColumnsWidth = value => {
		if ( ( 0 <= value && 1200 >= value ) || undefined === value ) {
			setAttributes({ columnsWidth: value });
		}
	};

	const changeHorizontalAlign = value => {
		if ( horizontalAlign === value ) {
			return setAttributes({ horizontalAlign: 'unset' });
		}

		setAttributes({ horizontalAlign: value });
	};


	const changeHideStatus = ( value, type ) => {
		if ( 'Desktop' === type ) {
			setAttributes({ hide: value });
		}
		if ( 'Tablet' === type ) {
			setAttributes({ hideTablet: value });
		}
		if ( 'Mobile' === type ) {
			setAttributes({ hideMobile: value });
		}
	};

	const changeReverseColumns = ( value, type ) => {
		if ( 'Tablet' === type ) {
			setAttributes({ reverseColumnsTablet: value });
		}
		if ( 'Mobile' === type ) {
			setAttributes({ reverseColumnsMobile: value });
		}
	};

	const changeColumnsHTMLTag = value => {
		setAttributes({ columnsHTMLTag: value });
	};

	const changeID = value => {
		setAttributes({ id: value });
	};

	const changeColumnsHeight = value => {
		setAttributes({ columnsHeight: value });
	};

	return (
		<>
			<InspectorControls>
				<div className="sb-field sb-head-panel-tabs">
                    <div className="sb-panel-tabs-wrap">
                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'layout' === activeTab})}
                            onClick={() => setActiveTab('layout')}
                        >
                            <span className="dashicons">
                                <LayoutIcon />
                            </span>
                            {__('Layout', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'style' === activeTab})}
                            onClick={() => setActiveTab('style')}
                        >
                            <span className="dashicons">
                                <StyleIcon />
                            </span>
                            {__('Style', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'advanced' === activeTab})}
                            onClick={() => setActiveTab('advanced')}
                        >
                            <span className="dashicons">
                                <AdvancedIcon />
                            </span>
                            {__('Advanced', 'smart-blocks')}
                        </Button>
                    </div>
                    <div className="sb-panel-tab-fields">
                        {'layout' === activeTab && (
							<>
								<PanelBody
									title={__('Columns & Layout', 'smart-blocks')}
									initialOpen={false}
								>
									<RangeControl
										label={__('Columns', 'smart-blocks')}
										value={columns}
										onChange={changeColumns}
										min={1}
										max={6}
									/>

									<LayoutControl
										label={__('Layout', 'smart-blocks')}
										columns={columns}
										layout={layout}
										layoutTablet={layoutTablet}
										layoutMobile={layoutMobile}
										onClick={changeLayout}
									/>

									<SelectControl
										label={__('Columns Gap', 'smart-blocks')}
										value={columnsGap}
										options={[
											{label: __( 'Default (10px)', 'smart-blocks' ), value: 'default'},
											{label: __( 'No Gap', 'smart-blocks' ), value: 'nogap'},
											{label: __( 'Narrow (5px)', 'smart-blocks' ), value: 'narrow'},
											{label: __( 'Extended (15px)', 'smart-blocks' ), value: 'extended'},
											{label: __( 'Wide (20px)', 'smart-blocks' ), value: 'wide'},
											{label: __( 'Wider (30px)', 'smart-blocks' ), value: 'wider'}
										] }
										onChange={ changeColumnsGap }
									/>
								</PanelBody>

								<PanelBody
									title={__('Section Structure', 'smart-blocks')}
									initialOpen={false}
								>
									<RangeControl
										label={__('Maximum Content Width', 'smart-blocks')}
										value={columnsWidth || ''}
										onChange={changeColumnsWidth}
										min={ 0 }
										max={ 1800 }
									/>

									{columnsWidth && (
										<BaseControl
											label={__('Horizontal Align', 'smart-blocks')}
										>
											<ButtonGroup className="wp-block-smart-icon-buttom-group">
												<Button
													icon="editor-alignleft"
													label={__('Left', 'smart-blocks')}
													showTooltip={true}
													isLarge
													isPrimary={'flex-start' === horizontalAlign}
													onClick={() => changeHorizontalAlign('flex-start')}
												/>

												<Button
													icon="editor-aligncenter"
													label={__('Center', 'smart-blocks')}
													showTooltip={true}
													isLarge
													isPrimary={'center' === horizontalAlign}
													onClick={() => changeHorizontalAlign('center')}
												/>

												<Button
													icon="editor-alignright"
													label={__('Right', 'smart-blocks')}
													showTooltip={ true }
													isLarge
													isPrimary={'flex-end' === horizontalAlign}
													onClick={() => changeHorizontalAlign('flex-end')}
												/>
											</ButtonGroup>
										</BaseControl>
									) }

									<SelectControl
										label={__('Minimum Height', 'smart-blocks')}
										value={columnsHeight}
										options={ [
											{label: __('Default', 'smart-blocks'), value: 'auto'},
											{label: __('Fit to Screen', 'smart-blocks'), value: '100vh'},
											{label: __('Custom', 'smart-blocks'), value: 'custom'}
										] }
										onChange={changeColumnsHeight}
									/>

									{'custom' === columnsHeight && (
										<CustomRangeControl
		                                    label={__('Custom Height', 'smart-blocks')}
		                                    value={columnsHeightCustom}
		                                    onChange={(columnsHeightCustom) => setAttributes({ columnsHeightCustom })}
		                                    min={1}
		                                    max={100}
		                                    responsive={!0}
		                                />
									)}
								</PanelBody>
							</>
                        ) || 'style' === activeTab && (
							<>
							</>
                        ) || 'advanced' === activeTab && (
							<>
								<PanelBody
									title={__('Layout', 'smart-blocks')}
									initialOpen={false}
								>
									<Dimension
                                        label={__('Margin', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        values={blockMargin}
                                        onChange={(blockMargin) => setAttributes({ blockMargin })}
                                        responsive={!0}
                                    />
                                    <Dimension
                                        label={__('Padding', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        values={blockPadding}
                                        onChange={(blockPadding) => setAttributes({ blockPadding })}
                                        responsive={!0}
                                    />
								</PanelBody>
								<PanelBody
									title={ __( 'Responsive', 'smart-blocks' ) }
									initialOpen={false}
								>
									<ToggleControl
										label={__('Hide this section in Desktop devices?', 'smart-blocks')}
										checked={hide}
										onChange={e => changeHideStatus(e, 'Desktop')}
									/>

									<ToggleControl
										label={ __('Hide this section in Tablet devices?', 'smart-blocks')}
										checked={hideTablet}
										onChange={e => changeHideStatus(e, 'Tablet')}
									/>

									<ToggleControl
										label={ __('Hide this section in Mobile devices?', 'smart-blocks')}
										checked={hideMobile}
										onChange={e => changeHideStatus(e, 'Mobile')}
									/>

									<hr/>

									{(!hideTablet && 'collapsedRows' === layoutTablet) && (
										<ToggleControl
											label={__('Reverse Columns in Tablet devices?', 'smart-blocks')}
											checked={reverseColumnsTablet}
											onChange={e => changeReverseColumns(e, 'Tablet')}
										/>
									)}

									{(!hideMobile && 'collapsedRows' === layoutMobile) && (
										<ToggleControl
											label={__('Reverse Columns in Mobile devices?', 'smart-blocks')}
											checked={reverseColumnsMobile}
											onChange={e => changeReverseColumns(e, 'Mobile')}
										/>
									)}
								</PanelBody>

								<PanelBody
									title={__('Section Settings', 'smart-blocks')}
									initialOpen={false}
								>
									<SelectControl
										label={__('HTML Tag', 'smart-blocks')}
										value={columnsHTMLTag}
										options={[
											{label: __('Default (div)', 'smart-blocks'), value: 'div'},
											{label: 'section', value: 'section'},
											{label: 'header', value: 'header'},
											{label: 'footer', value: 'footer'},
											{label: 'article', value: 'article'},
											{label: 'main', value: 'main'}
										]}
										onChange={changeColumnsHTMLTag}
									/>
								</PanelBody>
							</>
                        )}
                    </div>
                </div>
			</InspectorControls>
		</>
	);
};

export default Inspector;
