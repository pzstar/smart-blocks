import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({attributes, className}) => {
	const {
		id,
        columns,
        columnsWidth,
        columnsHTMLTag,
        layout,
        layoutTablet,
        layoutMobile,
        verticalAlign,
        horizontalAlign,
        reverseColumnsTablet,
        reverseColumnsMobile,
        hide,
        hideTablet,
        hideMobile,
        blockMargin,
        blockPadding
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
		`has-vertical-${verticalAlign}`
	);

	return (
		<Tag className={classes} id={id}>
			<div className="innerblocks-wrap">
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
};

export default Save;
