import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

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
	const desktopLayout = hide ? '' : `has-desktop-${layout}-layout`;
	const tabletLayout = hideTablet ? '' : `has-tablet-${layoutTablet}-layout`;
	const mobileLayout = hideMobile ? '' : `has-mobile-${layoutMobile}-layout`;

	const classes = classnames(
		className,
		`has-${columns}-columns`,
		desktopLayout,
		tabletLayout,
		mobileLayout,
		{'hide-in-desktop': hide},
		{'hide-in-tablet': hideTablet},
		{'hide-in-mobile': hideMobile},
		{'has-reverse-columns-tablet': (reverseColumnsTablet && !hideTablet && 'collapsedRows' === layoutTablet)},
		{'has-reverse-columns-mobile': (reverseColumnsMobile && !hideMobile && 'collapsedRows' === layoutMobile)},
		`has-${sectionContentWidth}-width`
	);

	return (
		<Tag className={classes} id={id}>
			<div className="wp-block-smart-blocks-innerblocks-wrap">
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
};

export default Save;
