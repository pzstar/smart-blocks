import classnames from 'classnames';
import {InnerBlocks} from '@wordpress/block-editor';

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
		{'sb-frontend': true}
	);
	const Tag = columnsHTMLTag;
	return (
		<Tag
			className={classes}
			id={id}
			href={Tag == 'a' ? hrefLinkURL : ''}
		>
			<InnerBlocks.Content />
		</Tag>
	);
};

export default Save;
