import classnames from 'classnames';
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

const Save = ({attributes, className}) => {
	const {
		id,
		columnsHTMLTag
	} = attributes;
	const classes = classnames(
		className
	);
	const Tag = columnsHTMLTag;
	return (
		<Tag className={classes} id={id}>
			<InnerBlocks.Content />
		</Tag>
	);
};

export default Save;
