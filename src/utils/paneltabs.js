import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { LayoutIcon, StyleIcon, AdvancedIcon } from './svgicons';
const PanelTabs = ({children}) => {
	const defaultTab = void 0 != children[0] ? children[0].props.tabTitle : '';
	const [activeTab, setActiveTab] = useState(defaultTab);
	return <>
		<div className="sb-field sb-head-panel-tabs ">
            <div className="sb-panel-tabs-wrap">
                {children.map(function (n, a) {
                	return <Tooltip text={__(n.props.tabTitle)} key={a}>
                        <button className={(n.props.tabTitle === activeTab ? "active-tab" : "") + " sb-panel-tab"}
                            onClick={() => {return setActiveTab(n.props.tabTitle)}}
                            >
                            {
                            	__('Layout', 'smart-blocks') === n.props.tabTitle &&
	                                (<span className="dashicons">
	                                    <LayoutIcon/>
	                                </span>)
                            }
                            {
	                            __('Style', 'smart-blocks') === n.props.tabTitle &&
	                                (<span className="dashicons">
	                                    <StyleIcon/>
	                                </span>)
	                        }
                            {
	                            __('Advanced', 'smart-blocks') === n.props.tabTitle &&
	                                (<span className="dashicons">
	                                    <AdvancedIcon/>
	                                </span>)
	                        }
                            {
	                            n.props.tabTitle
	                        }
                        </button>
                    </Tooltip>
                })}
            </div>
            <div className="sb-panel-tab-fields">
                {children.map(function (e) {
                    return e.props.tabTitle === activeTab ? e : "";
                })}
            </div>
        </div>
	</>
}

export default PanelTabs;