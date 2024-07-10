import LazyLoad from 'react-lazy-load';

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const Template = ({template, importPreview, importTemplate}) => {
	return (
		<div ariaLabel={template.title || __('Untitled Template', 'smart-blocks')} className="library-modal-content__item" tabindex="0">
			<div className="library-modal-content__preview">
				<LazyLoad>
					<img src={template.screenshot_url || 'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?t=st=1720613018~exp=1720616618~hmac=ad70d17f60f4e9888b53e4e8255f41abd9087a5590e3ba0b2bd10e464f2db55c&w=1380'} />
				</LazyLoad>
			</div>

			<div className="library-modal-content__footer">
				<div className="library-modal-content__footer_meta">
					<h4 className="library-modal-content__footer_meta_area">
						{(template.title) && (template.title + (template.author && __(' by ', 'smart-blocks') + template.author))}
						{(!template.title && template.author) && (__('Author: ', 'smart-blocks') + template.author)}
					</h4>
				</div>

				<div className="library-modal-content__footer_actions">
					<Button
						isSecondary
						isLarge
						className="library-modal-overlay__actions"
						onClick={() => importPreview(template)}
						tabindex="0"
					>
						{__('Preview', 'smart-blocks')}
					</Button>

					<Button
						isPrimary
						isLarge
						className="library-modal-overlay__actions"
						onClick={() => importTemplate(template.template_url)}
						tabindex="0"
					>
						{__('Insert', 'smart-blocks')}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Template;