import LazyLoad from 'react-lazy-load';

import {__} from '@wordpress/i18n';
import {BlockPreview} from '@wordpress/block-editor';
import {Spinner} from '@wordpress/components';
import {useViewportMatch} from '@wordpress/compose';

import Template from './template.js';

const TemplatesList = ({preview, isLoading, data, tab, selectedTemplateContent, selectedCategory, search, importPreview, importTemplate}) => {
	const isLarger = useViewportMatch('large', '>=');
	const isLarge = useViewportMatch('large', '<=');
	const isSmall = useViewportMatch('small', '>=');
	const isSmaller = useViewportMatch('small', '<=');

	let viewportWidth = 1400;
	const isTablet = !isLarger && !isLarge && isSmall && !isSmaller;
	const isMobile = !isLarger && !isLarge && !isSmall && !isSmaller;

	if (isTablet) {
		viewportWidth = 960;
	} else if (isMobile) {
		viewportWidth = 600;
	}

	if (preview) {
		return (
			<div className="library-modal-preview">
				<BlockPreview
					blocks={selectedTemplateContent}
					viewportWidth={viewportWidth}
				/>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="library-modal-loader">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="library-modal-content">
			{data.map(i => {
				if ((i.template_url) && ('all' === selectedCategory || i.categories && i.categories.includes(selectedCategory)) && (!search || i.keywords && i.keywords.some(o => o.toLowerCase().includes(search.toLowerCase()))) && (tab === i.type)) {
					return (
						<Template
							template={i}
							importPreview={importPreview}
							importTemplate={importTemplate}
						/>
					);
				}
			})}
		</div>
	);
};

export default TemplatesList;