import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

import { Tooltip, Button, Dashicon } from '@wordpress/components';
import Library from '../components/template-library';
import { useSelect, useDispatch } from "@wordpress/data";
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes, clientId}) {
	const {isLibraryOpen} = attributes;

    return <Tooltip text={__('Open Template Library', 'smart-blocks')} {...useBlockProps()}>
	    <section class="sb-template-import">
	        <Button
		        isPrimary={!0}
		        isLarge={!0}
		        className={"smart-blocks-template-library"}
		        onClick={() => setAttributes({isLibraryOpen: true})}
	        >
	            <Dashicon icon="category"/>
	            {__("Template Library", "smart-blocks")}
		    </Button>
	        {isLibraryOpen && (
				<Library
					clientId={clientId}
					close={() => setAttributes({isLibraryOpen: false})}
				/>
			)}
		</section>
	</Tooltip>;
}