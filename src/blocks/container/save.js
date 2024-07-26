import classnames from 'classnames';
import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes, className}) => {
	const {
		id,
		columnsHTMLTag,
		enableSticky
	} = attributes;
	const classes = classnames(
		className,
		enableSticky ? 'sb-sticky-container' : ''
	);
	const Tag = columnsHTMLTag;
	return (
		<Tag
			className={classes}
			id={id}
		>
			<InnerBlocks.Content />
		</Tag>
	);
};

export default Save;
