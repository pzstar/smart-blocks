import classnames from 'classnames';
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

const Save = ({attributes, className}) => {
	const {
		id,
		columnsHTMLTag,
		enableSticky,
		hrefLinkURL,
	} = attributes;
	const classes = classnames(
		className,
		enableSticky ? 'sb-sticky-container' : '',
		{'sb-is-frontend': true},
		{'sb-transform-yes': attributes.sbTransformEnable},
		{'sb-float-yes': attributes.sbFloatEffectEnable},
		{'sb-parallax-yes': (attributes.sbParallaxStyle && attributes.sbParallaxStyle != 'none')}
	);
	const Tag = columnsHTMLTag;
	return (
		<Tag
			{...useBlockProps.save({
				id,
				className: classes,
				href: Tag == 'a' && hrefLinkURL ? hrefLinkURL : ''
			})}
		>
			<div class="wp-block-smart-blocks-float-container">
				<div class="wp-block-smart-blocks-container-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</Tag>
	);
};

export default Save;
