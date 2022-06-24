import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
const Tabs = ({children}) => {
	const defaultTab = void 0 != children[0] ? children[0].props.tabTitle : '';
	const [activeTab, setActiveTab] = useState(defaultTab);
	return <>
		<div className="sb-field sb-inspect-tabs ">
            <div className="components-tab-panel__tabs">
                {children.map(function (n) {
                    return <>
                        {(!1 !== n &&
                        <Tooltip text={n.props.tabTitle}>
                            <button className={(n.props.tabTitle === activeTab ? "active-tab" : "") + " components-button sb-tab-menu"}
                                onClick={() => {return setActiveTab(n.props.tabTitle)}}
                                >{n.props.tabTitle}
                            </button>
                        </Tooltip>
                        )}
                    </>;
                })}
            </div>
            <div className="sb-field-tab-items">
                {children.map(function (e) {
					return <>
					{!1 !== e && e.props.tabTitle === activeTab ? e : ""}
					</>;
				})}
            </div>
        </div>
	</>;
}

export default Tabs;