import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

import { Tooltip, Button, Dashicon } from '@wordpress/components';
import Library from '../components/template-library';
import { useSelect, useDispatch } from "@wordpress/data";

export default function Edit({attributes, setAttributes, clientId}) {
	const [isLibraryOpen, setIsLibraryOpen] = useState(false);

    return <Tooltip text={__('Open Template Library', 'smart-blocks')} >
	    <section class="sb-template-import">
	        <Button isPrimary={!0} isLarge={!0} className={"smart-blocks-template-library"} onClick={() => setIsLibraryOpen(true)}>
	            <Dashicon icon="category"/>
	            {__("Template Library", "smart-blocks")}
		    </Button>
	        {isLibraryOpen && (
				<Library
					clientId={clientId}
					close={() => setIsLibraryOpen(false)}
				/>
			)}
		</section>
	</Tooltip>;
}