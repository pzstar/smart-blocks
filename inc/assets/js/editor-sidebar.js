(()=>{"use strict";const t=window.wp.plugins,e=window.wp.element,a=window.wp.i18n,s=window.wp.compose,o=window.wp.data,i=window.wp.editor,r=window.wp.components,l=()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 150 150"},(0,e.createElement)("g",{"data-name":"Layer 2"},(0,e.createElement)("path",{d:"M144 0H6a6 6 0 0 0-6 6v138a6 6 0 0 0 6 6h138a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6m-8.8 45.83c-2.1 2.1-4.29 3.9-4.91 3.9S118.28 45 105 39.2c-22.37-9.67-24.32-10.37-25.8-9.35-.94.62-7.8 7.25-15.21 14.65L50.53 58l11.15 4.83c6.16 2.57 18.87 8.1 28.32 12.23s19.81 8.58 23 9.91a61 61 0 0 1 6.47 3c.32.23-4 5.07-9.74 10.6s-16.37 16-23.78 23.23c-7.87 7.72-13.8 13-14.42 12.79-2.81-1.17-59.57-25.81-59.88-26.12-.15-.15 1.64-2.18 4-4.6l4.29-4.29 8.88 3.9c4.92 2.11 16.22 6.94 25 10.84l16 6.94L85 106.56C99.57 92.45 100 91.9 98.17 91.2c-1.09-.46-12.08-5.2-24.56-10.6s-27.29-11.85-32.9-14.35-10.29-4.67-10.13-4.91c.46-1.09 47-45.92 47.79-45.92.47 0 8.5 3.36 17.93 7.41 9.35 4.13 22.37 9.75 28.77 12.55s12.24 5.38 12.86 5.77c.94.62.47 1.4-2.73 4.68m-28.84 14-4.21 4.06-7.64-3.28c-4.21-1.79-8.74-3.74-10-4.28-2.26-.94-2.58-.78-6.16 2.49-2.11 1.87-4.29 3.43-4.76 3.43a72 72 0 0 1-10.37-4.29c-.39-.31 15.91-16 16.69-16 .46 0 7.17 2.81 15 6.24s14.5 6.23 15 6.23c1.51-.03.66 1.38-3.55 5.35ZM68.15 95 72 91.12l3.82-3.82 5.54 2.34c3 1.33 5.61 2.42 5.77 2.58.39.31-15.52 15.59-16.53 15.82-.47.08-7.33-2.57-15.2-6.08s-14.5-6.24-15-6.24c-1.4 0-.62-1.16 3.35-5.22 4.68-4.75 3.43-4.75 15.75.62Z","data-name":"Layer 1"}))),n=(0,s.compose)([(0,o.withSelect)((t=>({postMeta:t("core/editor").getEditedPostAttribute("meta")}))),(0,o.withDispatch)((t=>({setPostMeta(e){t("core/editor").editPost({meta:e}),window.document.body.classList.remove("sb-editor-width-default","sb-editor-width-narrow","sb-editor-width-large","sb-editor-width-full"),window.document.body.classList.add("sb-editor-width-"+e.sb_editor_width)}})))])((t=>{let{postMeta:s,setPostMeta:o}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.PluginSidebarMoreMenuItem,{target:"sb-editor-sidebar",icon:(0,e.createElement)(l,null)},(0,a.__)("Smart Blocks Settings","smart-blocks")),(0,e.createElement)(i.PluginSidebar,{name:"sb-editor-sidebar",title:(0,a.__)("Smart Blocks Settings","smart-blocks")},(0,e.createElement)(r.PanelBody,{title:(0,a.__)("Editor Width","smart-blocks"),initialOpen:!1},(0,e.createElement)("div",{className:"sb-inspect-tabs"},(0,e.createElement)("div",{className:"components-tab-panel__tabs"},(0,e.createElement)(r.Tooltip,{text:(0,a.__)("Default","smart-blocks")},(0,e.createElement)("button",{className:(s.sb_editor_width&&"default"!==s.sb_editor_width?"":"active-tab")+" components-button sb-tab-menu",onClick:()=>o({sb_editor_width:"default"})},(0,a.__)("Default","smart-blocks"))),(0,e.createElement)(r.Tooltip,{text:(0,a.__)("Narrow","smart-blocks")},(0,e.createElement)("button",{className:("narrow"===s.sb_editor_width?"active-tab":"")+" components-button sb-tab-menu",onClick:()=>o({sb_editor_width:"narrow"})},(0,a.__)("Narrow","smart-blocks"))),(0,e.createElement)(r.Tooltip,{text:(0,a.__)("Large","smart-blocks")},(0,e.createElement)("button",{className:("large"===s.sb_editor_width?"active-tab":"")+" components-button sb-tab-menu",onClick:()=>o({sb_editor_width:"large"})},(0,a.__)("Large","smart-blocks"))),(0,e.createElement)(r.Tooltip,{text:(0,a.__)("Full","smart-blocks")},(0,e.createElement)("button",{className:("full"===s.sb_editor_width?"active-tab":"")+" components-button sb-tab-menu",onClick:()=>o({sb_editor_width:"full"})},(0,a.__)("Full","smart-blocks"))))))))}));(0,t.registerPlugin)("sb-sidebar",{render:n})})();