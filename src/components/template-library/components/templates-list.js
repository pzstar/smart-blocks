import LazyLoad from 'react-lazy-load';

import { __ } from '@wordpress/i18n';
import { BlockPreview } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';

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
	} else if ( isMobile ) {
		viewportWidth = 600;
	}

	if (preview) {
		return (
			<div className="library-modal-preview">
				<BlockPreview
					blocks={ selectedTemplateContent }
					viewportWidth={ viewportWidth }
				/>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="library-modal-loader">
				<Spinner/>
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

			<div ariaLabel={__('Coming Soon', 'smart-blocks')} className="library-modal-content__item">
				<div className="library-modal-content__preview">
					<LazyLoad>
						<img src={'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?t=st=1720613018~exp=1720616618~hmac=ad70d17f60f4e9888b53e4e8255f41abd9087a5590e3ba0b2bd10e464f2db55c&w=1380'} />
					</LazyLoad>
				</div>
			</div>
		</div>
	);
};

export default TemplatesList;