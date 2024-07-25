import {__} from '@wordpress/i18n';
import {compose} from '@wordpress/compose'
import {withDispatch, withSelect} from '@wordpress/data';
import {PluginSidebar, PluginSidebarMoreMenuItem} from '@wordpress/editor';
import {Tooltip, PanelBody} from '@wordpress/components';
import {image} from '@wordpress/icons';

const SidebarContent = ({postMeta, setPostMeta}) => {
	return (
		<>
			<PluginSidebarMoreMenuItem
				target="sb-editor-sidebar"
				icon="image"
			>
				{__('Smart Blocks Settings', 'smart-blocks')}
			</PluginSidebarMoreMenuItem>

			<PluginSidebar
				name="sb-editor-sidebar"
				title={__('Smart Blocks Settings', 'smart-blocks')}
			>
				<PanelBody
					title={__('Editor Width', 'smart-blocks')}
					initialOpen={false}
				>
					<div className={'sb-inspect-tabs'}>
						<div className="components-tab-panel__tabs">
							<Tooltip text={__("Default", 'smart-blocks')}>
								<button
									className={((!postMeta.sb_editor_width || 'default' === postMeta.sb_editor_width) ? "active-tab" : "") + " components-button sb-tab-menu"}
									onClick={() => setPostMeta({sb_editor_width: 'default'})}
								>
									{__("Default", 'smart-blocks')}
								</button>
							</Tooltip>

							<Tooltip text={__("Narrow", 'smart-blocks')}>
								<button
									className={((!postMeta.sb_editor_width || 'narrow' === postMeta.sb_editor_width) ? "active-tab" : "") + " components-button sb-tab-menu"}
									onClick={() => setPostMeta({sb_editor_width: 'narrow'})}
								>
									{__("Narrow", 'smart-blocks')}
								</button>
							</Tooltip>

							<Tooltip text={__("Large", 'smart-blocks')}>
								<button
									className={('large' === postMeta.sb_editor_width ? "active-tab" : "") + " components-button sb-tab-menu"}
									onClick={() => setPostMeta({sb_editor_width: 'large'})}
								>
									{__("Large", 'smart-blocks')}
								</button>
							</Tooltip>

							<Tooltip text={__("Full Width", 'smart-blocks')}>
								<button
									className={('full' === postMeta.sb_editor_width ? "active-tab" : "") + " components-button sb-tab-menu"}
									onClick={() => setPostMeta({sb_editor_width: 'full'})}
								>
									{__("Full Width", 'smart-blocks')}
								</button>
							</Tooltip>
						</div>
					</div>
				</PanelBody>
			</PluginSidebar>
		</>
	);
}

export default compose([
	withSelect((select) => {
		return {
			postMeta: select('core/editor').getEditedPostAttribute('meta'),
		};
	}),
	withDispatch((dispatch) => {
		return {
			setPostMeta(newMeta) {
				dispatch('core/editor').editPost({meta: newMeta});
				window.document.body.classList.remove("sb-editor-width-default", "sb-editor-width-narrow", "sb-editor-width-large", "sb-editor-width-full")
				window.document.body.classList.add("sb-editor-width-" + newMeta.sb_editor_width);
			}
		};
	})
])(SidebarContent);