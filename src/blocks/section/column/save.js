import {InnerBlocks} from '@wordpress/block-editor';
import classnames from 'classnames';

const Save = ({attributes, className}) => {
	const {
		id,
		columnsHTMLTag,
		stickyContainer
	} = attributes;
	const classes = classnames(
		className,
		`${stickyContainer ? 'sb-sticky-container' : ''}`
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
