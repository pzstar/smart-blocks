(() => {"use strict"; const t = window.wp.plugins, e = window.wp.element, o = window.wp.i18n, s = window.wp.compose, i = window.wp.data, a = window.wp.editor, l = window.wp.components, n = (0, s.compose)([(0, i.withSelect)((t => ({postMeta: t("core/editor").getEditedPostAttribute("meta")}))), (0, i.withDispatch)((t => ({setPostMeta(e) {t("core/editor").editPost({meta: e}), window.document.body.classList.remove("sb-editor-width-default", "sb-editor-width-large", "sb-editor-width-full"), window.document.body.classList.add("sb-editor-width-" + e.sb_editor_width)} })))])((t => {let {postMeta: s, setPostMeta: i} = t; return (0, e.createElement)(e.Fragment, null, (0, e.createElement)(a.PluginSidebarMoreMenuItem, {target: "sb-editor-sidebar", icon: "image"}, (0, o.__)("Smart Blocks Settings", "smart-blocks")), (0, e.createElement)(a.PluginSidebar, {name: "sb-editor-sidebar", title: (0, o.__)("Smart Blocks Settings", "smart-blocks")}, (0, e.createElement)(l.PanelBody, {title: (0, o.__)("Editor width", "smart-blocks"), initialOpen: !1}, (0, e.createElement)("div", {className: "sb-inspect-tabs"}, (0, e.createElement)("div", {className: "components-tab-panel__tabs"}, (0, e.createElement)(l.Tooltip, {text: (0, o.__)("Default", "smart-blocks")}, (0, e.createElement)("button", {className: (s.sb_editor_width && "default" !== s.sb_editor_width ? "" : "active-tab") + " components-button sb-tab-menu", onClick: () => i({sb_editor_width: "default"})}, (0, o.__)("Default", "smart-blocks"))), (0, e.createElement)(l.Tooltip, {text: (0, o.__)("Large", "smart-blocks")}, (0, e.createElement)("button", {className: ("large" === s.sb_editor_width ? "active-tab" : "") + " components-button sb-tab-menu", onClick: () => i({sb_editor_width: "large"})}, (0, o.__)("Large", "smart-blocks"))), (0, e.createElement)(l.Tooltip, {text: (0, o.__)("Full Width", "smart-blocks")}, (0, e.createElement)("button", {className: ("full" === s.sb_editor_width ? "active-tab" : "") + " components-button sb-tab-menu", onClick: () => i({sb_editor_width: "full"})}, (0, o.__)("Full Width", "smart-blocks"))))))))})); (0, t.registerPlugin)("sb-sidebar", {render: n})})();