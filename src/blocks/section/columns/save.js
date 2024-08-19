import classnames from 'classnames';

import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

const Save = ({attributes, className}) => {
	const {
		id,
		columns,
		columnsHTMLTag,
		layout,
		layoutTablet,
		layoutMobile,
		reverseColumnsTablet,
		reverseColumnsMobile,
		hide,
		hideTablet,
		hideMobile,
		sectionContentWidth
	} = attributes;

	const Tag = columnsHTMLTag;
	const desktopLayout = hide ? '' : `sb-has-desktop-${layout}-layout`;
	const tabletLayout = hideTablet ? '' : `sb-has-tablet-${layoutTablet}-layout`;
	const mobileLayout = hideMobile ? '' : `sb-has-mobile-${layoutMobile}-layout`;

	const classes = classnames(
		className,
		`sb-has-${columns}-columns`,
		desktopLayout,
		tabletLayout,
		mobileLayout,
		{'hide-in-desktop': hide},
		{'hide-in-tablet': hideTablet},
		{'hide-in-mobile': hideMobile},
		{'sb-has-reverse-columns-tablet': (reverseColumnsTablet && !hideTablet && 'collapsedRows' === layoutTablet)},
		{'sb-has-reverse-columns-mobile': (reverseColumnsMobile && !hideMobile && 'collapsedRows' === layoutMobile)},
		`sb-has-${sectionContentWidth}-width`,
		{'sb-is-frontend': true}
	);

	return (
		<Tag className={classes} id={id}>
			<div className="wp-block-smart-blocks-columns-wrap">
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
};

export default Save;
