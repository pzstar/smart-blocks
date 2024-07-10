import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({attributes, className}) => {
	const Tag = attributes.columnsHTMLTag;
	const desktopLayout = attributes.hide ? '' : `has-desktop-${ attributes.layout }-layout`;
	const tabletLayout = attributes.hideTablet ? '' : `has-tablet-${ attributes.layoutTablet }-layout`;
	const mobileLayout = attributes.hideMobile ? '' : `has-mobile-${ attributes.layoutMobile }-layout`;

	const classes = classnames(
		className,
		`has-${ attributes.columns }-columns`,
		desktopLayout,
		tabletLayout,
		mobileLayout,
		{ 'hide-in-desktop': attributes.hide },
		{ 'hide-in-tablet': attributes.hideTablet },
		{ 'hide-in-mobile': attributes.hideMobile },
		{ 'has-reverse-columns-tablet': ( attributes.reverseColumnsTablet && ! attributes.hideTablet && 'collapsedRows' === attributes.layoutTablet ) },
		{ 'has-reverse-columns-mobile': ( attributes.reverseColumnsMobile && ! attributes.hideMobile && 'collapsedRows' === attributes.layoutMobile ) },
		`has-${ attributes.columnsGap }-gap`,
		`has-vertical-${ attributes.verticalAlign }`
	);

	return (
		<Tag
			className={ classes }
			id={ attributes.id }
		>
			<div className="wp-block-smart-blocks-columns-overlay"></div>

			<div className="innerblocks-wrap">
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
};

export default Save;
