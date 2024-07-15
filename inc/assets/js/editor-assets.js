( function( window, wp ){
    var importBtn = '<div class="sb-import-button"><button id="sb-template-import-button" class="components-button components-icon-button" title="Smart Blocks">';
    importBtn += '<img src="" class="components-panel__icon" size="20" style="width: 20px; margin-right: 10px">';
    importBtn += "Design";
    importBtn += "</button></div>";

    // check if gutenberg's editor root element is present.
    var editorEl = document.getElementById( 'editor' );
    if( !editorEl ){ // do nothing if there's no gutenberg root element on page.
        return;
    }

    var unsubscribe = wp.data.subscribe( function () {
        setTimeout( function () {
            if ( !document.getElementById("sb-template-import-button") ) {
                var toolbalEl = editorEl.querySelector( '.edit-post-header__toolbar' );
                if( toolbalEl instanceof HTMLElement ){
                    toolbalEl.insertAdjacentHTML('beforeend', importBtn);
				    document.getElementById("sb-template-import-button").addEventListener("click", () => {
				    	var templateImportBlock = wp.blocks.createBlock("smart-blocks/template-import", {isLibraryOpen: !0});
					    wp.data.dispatch("core/block-editor").insertBlocks(templateImportBlock);
				    });
                }
            }
        }, 1 )
    } );

} )( window, wp )