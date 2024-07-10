import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	RangeControl,
	SelectControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useEffect,
	useRef,
	useState
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import {LayoutIcon, StyleIcon, AdvancedIcon} from '../../utils/svgicons';
import Dimension from '../../utils/dimension';

const Inspector = ({
	attributes,
	setAttributes,
	isSelected,
	clientId,
	adjacentBlock,
	parentBlock,
	updateBlockAttributes,
	adjacentBlockClientId
}) => {
	const {
        blockMargin,
        blockPadding
    } = attributes;

	const getView = useSelect((select) => {
		const {getView} = select('smart-blocks/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	useEffect( () => {
		if (1 < parentBlock.innerBlocks.length) {
			if (!adjacentBlockClientId) {
				const blockId = parentBlock.innerBlocks.findIndex(e => e.clientId === clientId);
				const previousBlock = parentBlock.innerBlocks[blockId - 1];
				nextBlock.current = previousBlock.clientId;
				nextBlockWidth.current = previousBlock.attributes.columnWidth;
			}
		}
	}, []);

	useEffect(() => {
		if (1 < parentBlock.innerBlocks.length) {
			if (!adjacentBlockClientId) {
				const blockId = parentBlock.innerBlocks.findIndex(e => e.clientId === clientId);
				const previousBlock = parentBlock.innerBlocks[blockId - 1];
				nextBlockWidth.current = previousBlock.attributes.columnWidth;
				nextBlock.current = previousBlock.clientId;
				currentBlockWidth.current = attributes.columnWidth;
			} else {
				nextBlockWidth.current = adjacentBlock.attributes.columnWidth;
				nextBlock.current = adjacentBlockClientId;
				currentBlockWidth.current = attributes.columnWidth;
			}
		}
	}, [isSelected, attributes.columnWidth, parentBlock.innerBlocks.length]);

	const [activeTab, setActiveTab] = useState('layout');

	const currentBlockWidth = useRef(attributes.columnWidth);
	const nextBlock = useRef(adjacentBlockClientId && adjacentBlockClientId);
	const nextBlockWidth = useRef(adjacentBlock && adjacentBlock.attributes.columnWidth);

	const changeColumnWidth = value => {
		const width = value || 10;
		const nextWidth = (Number(currentBlockWidth.current) - width) + Number(nextBlockWidth.current);
		currentBlockWidth.current = width;
		nextBlockWidth.current = nextWidth;
		setAttributes({columnWidth: width.toFixed(2)});
		updateBlockAttributes(nextBlock.current, {
			columnWidth: nextWidth.toFixed(2)
		});
	};


	const changeColumnsHTMLTag = value => {
		setAttributes({columnsHTMLTag: value});
	};

	return (
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
									title={__('Spacing', 'smart-blocks')}
									initialOpen={false}
								>
									{( 1 < parentBlock.innerBlocks.length ) && (
										<RangeControl
											label={__('Column Width', 'smart-blocks')}
											value={Number( attributes.columnWidth )}
											onChange={changeColumnWidth}
											min={10}
											max={( Number( attributes.columnWidth ) + Number( nextBlockWidth.current ) ) - 10}
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
									title={__('Section Settings', 'smart-blocks')}
									initialOpen={false}
								>
									<SelectControl
										label={__('HTML Tag', 'smart-blocks')}
										value={attributes.columnsHTMLTag}
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
	);
};

export default Inspector;
