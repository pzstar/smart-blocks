import {__} from '@wordpress/i18n';

import {useBlockProps} from '@wordpress/block-editor';
import {Button, Dashicon, Tooltip} from '@wordpress/components';
import Library from './template-library';

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
				<Dashicon icon="category" />
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