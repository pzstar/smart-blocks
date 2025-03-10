import {__} from '@wordpress/i18n';
import {RawHTML, useState} from '@wordpress/element';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {format, dateI18n, getSettings} from '@wordpress/date';
import {
    useBlockProps,
    InspectorControls,
    RichText,
    store as blockEditorStore
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import classnames from 'classnames';
import TypographyControl from '../../controls/typography';
import GoogleFontLoad from '../../utils/googlefontload';
import ColorControl from '../../controls/color';
import Tabs from '../../utils/tabs';
import SelectControl from '../../controls/select';
import DimensionControl from '../../controls/dimension';
import RangeSliderControl from '../../controls/rangeslider';
import BorderControl from '../../controls/border';
import BoxShadowControl from '../../controls/boxshadow';
import {responsiveTypographyVars, getFontClass, dimensionVars, boxShadowVars, responsiveDimensionVars} from '../../utils/helper';
import {LayoutIcon, StyleIcon, AdvancedIcon} from '../../utils/svgicons';
import GroupControlQuery from '../../controlgroup/query';
import ToggleControl from '../../controls/toggle';
import {applyFilters} from '@wordpress/hooks';

export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        sbStyle,
        order,
        orderBy,
        excludePosts,
        categories,
        headerTitle,
        headerStyle,
        headerColor,
        headerShortBorderColor,
        headerLongBorderColor,

        headerTitleTypographyFamily,
        headerTitleTypographyWeight,
        headerTitleTypographyTextTransform,
        headerTitleTypographyTextDecoration,
        headerTitleTypographyFontSizeSm,
        headerTitleTypographyFontSizeMd,
        headerTitleTypographyFontSize,
        headerTitleTypographyFontSizeUnit,
        headerTitleTypographyLetterSpacingSm,
        headerTitleTypographyLetterSpacingMd,
        headerTitleTypographyLetterSpacing,
        headerTitleTypographyLetterSpacingUnit,
        headerTitleTypographyLineHeightSm,
        headerTitleTypographyLineHeightMd,
        headerTitleTypographyLineHeight,
        headerTitleTypographyLineHeightUnit,

        categoryTypographyFamily,
        categoryTypographyWeight,
        categoryTypographyTextTransform,
        categoryTypographyTextDecoration,
        categoryTypographyFontSizeSm,
        categoryTypographyFontSizeMd,
        categoryTypographyFontSize,
        categoryTypographyFontSizeUnit,
        categoryTypographyLetterSpacingSm,
        categoryTypographyLetterSpacingMd,
        categoryTypographyLetterSpacing,
        categoryTypographyLetterSpacingUnit,
        categoryTypographyLineHeightSm,
        categoryTypographyLineHeightMd,
        categoryTypographyLineHeight,
        categoryTypographyLineHeightUnit,

        postsPostType,
        offset,
        listingImageSize,
        listingImageHeight,
        listingPostAuthor,
        listingPostDate,
        listingPostComments,
        listingPostCategory,

        listingTypographyFamily,
        listingTypographyWeight,
        listingTypographyTextTransform,
        listingTypographyTextDecoration,
        listingTypographyFontSizeSm,
        listingTypographyFontSizeMd,
        listingTypographyFontSize,
        listingTypographyFontSizeUnit,
        listingTypographyLetterSpacingSm,
        listingTypographyLetterSpacingMd,
        listingTypographyLetterSpacing,
        listingTypographyLetterSpacingUnit,
        listingTypographyLineHeightSm,
        listingTypographyLineHeightMd,
        listingTypographyLineHeight,
        listingTypographyLineHeightUnit,

        featuredImageSize,
        featuredImageHeight,
        featuredPostAuthor,
        featuredPostDate,
        featuredPostComments,
        featuredPostCategory,
        featuredTitleMarginSmTop,
        featuredTitleMarginSmLeft,
        featuredTitleMarginSmRight,
        featuredTitleMarginSmBottom,
        featuredTitleMarginMdTop,
        featuredTitleMarginMdLeft,
        featuredTitleMarginMdRight,
        featuredTitleMarginMdBottom,
        featuredTitleMarginTop,
        featuredTitleMarginLeft,
        featuredTitleMarginRight,
        featuredTitleMarginBottom,
        featuredTitleMarginUnit,

        featuredTypographyFamily,
        featuredTypographyWeight,
        featuredTypographyTextTransform,
        featuredTypographyTextDecoration,
        featuredTypographyFontSizeSm,
        featuredTypographyFontSizeMd,
        featuredTypographyFontSize,
        featuredTypographyFontSizeUnit,
        featuredTypographyLetterSpacingSm,
        featuredTypographyLetterSpacingMd,
        featuredTypographyLetterSpacing,
        featuredTypographyLetterSpacingUnit,
        featuredTypographyLineHeightSm,
        featuredTypographyLineHeightMd,
        featuredTypographyLineHeight,
        featuredTypographyLineHeightUnit,

        metasTypographyFamily,
        metasTypographyWeight,
        metasTypographyTextTransform,
        metasTypographyTextDecoration,
        metasTypographyFontSizeSm,
        metasTypographyFontSizeMd,
        metasTypographyFontSize,
        metasTypographyFontSizeUnit,
        metasTypographyLetterSpacingSm,
        metasTypographyLetterSpacingMd,
        metasTypographyLetterSpacing,
        metasTypographyLetterSpacingUnit,
        metasTypographyLineHeightSm,
        metasTypographyLineHeightMd,
        metasTypographyLineHeight,
        metasTypographyLineHeightUnit,

        dateFormat,
        customDateFormat,
        imageBorderRadius,

        listingTitleMarginSmTop,
        listingTitleMarginSmLeft,
        listingTitleMarginSmRight,
        listingTitleMarginSmBottom,
        listingTitleMarginMdTop,
        listingTitleMarginMdLeft,
        listingTitleMarginMdRight,
        listingTitleMarginMdBottom,
        listingTitleMarginTop,
        listingTitleMarginLeft,
        listingTitleMarginRight,
        listingTitleMarginBottom,
        listingTitleMarginUnit,

        categoryBackgroundColor,
        categoryTextColor,
        categoryBackgroundHoverColor,
        categoryTextHoverColor,
        titleColor,
        titleHoverColor,
        postMetasColor,
        blockMarginSmTop,
        blockMarginSmLeft,
        blockMarginSmRight,
        blockMarginSmBottom,
        blockMarginMdTop,
        blockMarginMdLeft,
        blockMarginMdRight,
        blockMarginMdBottom,
        blockMarginTop,
        blockMarginLeft,
        blockMarginRight,
        blockMarginBottom,
        blockMarginUnit,

        blockPaddingSmTop,
        blockPaddingSmLeft,
        blockPaddingSmRight,
        blockPaddingSmBottom,
        blockPaddingMdTop,
        blockPaddingMdLeft,
        blockPaddingMdRight,
        blockPaddingMdBottom,
        blockPaddingTop,
        blockPaddingLeft,
        blockPaddingRight,
        blockPaddingBottom,
        blockPaddingUnit,

        borderNormal,
        borderHover,
        borderNormalColor,
        borderHoverColor,

        borderNormalWidthTop,
        borderNormalWidthLeft,
        borderNormalWidthRight,
        borderNormalWidthBottom,
        borderNormalWidthUnit,

        borderHoverWidthTop,
        borderHoverWidthLeft,
        borderHoverWidthRight,
        borderHoverWidthBottom,
        borderHoverWidthUnit,

        borderNormalRadiusTop,
        borderNormalRadiusLeft,
        borderNormalRadiusRight,
        borderNormalRadiusBottom,
        borderNormalRadiusUnit,

        borderHoverRadiusTop,
        borderHoverRadiusLeft,
        borderHoverRadiusRight,
        borderHoverRadiusBottom,
        borderHoverRadiusUnit,

        borderNormalBoxShadowHorizontal,
        borderNormalBoxShadowVertical,
        borderNormalBoxShadowBlur,
        borderNormalBoxShadowSpread,
        borderNormalBoxShadowColor,
        borderNormalBoxShadowInset,

        borderHoverBoxShadowHorizontal,
        borderHoverBoxShadowVertical,
        borderHoverBoxShadowBlur,
        borderHoverBoxShadowSpread,
        borderHoverBoxShadowColor,
        borderHoverBoxShadowInset,
        blockBgColor
    } = attributes;

    setAttributes({id: useBlockProps()['id']});
    const stylesCSS = `#${id} {
        ${borderNormal ? '--sb-border-normal: ' + borderNormal + ';' : ''}
        ${borderHover ? '--sb-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor + ';' : ''}

        ${dimensionVars('border-normal-width', borderNormalWidthTop, borderNormalWidthRight, borderNormalWidthBottom, borderNormalWidthLeft, borderNormalWidthUnit)}
        ${dimensionVars('border-hover-width', borderHoverWidthTop, borderHoverWidthRight, borderHoverWidthBottom, borderHoverWidthLeft, borderHoverWidthUnit)}
        ${dimensionVars('border-normal-radius', borderNormalRadiusTop, borderNormalRadiusRight, borderNormalRadiusBottom, borderNormalRadiusLeft, borderNormalRadiusUnit)}
        ${dimensionVars('border-hover-radius', borderHoverRadiusTop, borderHoverRadiusRight, borderHoverRadiusBottom, borderHoverRadiusLeft, borderHoverRadiusUnit)}

        ${boxShadowVars('border-normal-box-shadow', borderNormalBoxShadowHorizontal, borderNormalBoxShadowVertical, borderNormalBoxShadowBlur, borderNormalBoxShadowSpread, borderNormalBoxShadowColor, borderNormalBoxShadowInset, 'px')}
        ${boxShadowVars('border-hover-box-shadow', borderHoverBoxShadowHorizontal, borderHoverBoxShadowVertical, borderHoverBoxShadowBlur, borderHoverBoxShadowSpread, borderHoverBoxShadowColor, borderHoverBoxShadowInset, 'px')}

        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}

        ${responsiveDimensionVars('block-margin', blockMarginTop, blockMarginRight, blockMarginBottom, blockMarginLeft,
        blockMarginSmTop, blockMarginSmRight, blockMarginSmBottom, blockMarginSmLeft,
        blockMarginMdTop, blockMarginMdRight, blockMarginMdBottom, blockMarginMdLeft, blockMarginUnit)}

        ${responsiveDimensionVars('block-padding', blockPaddingTop, blockPaddingRight, blockPaddingBottom, blockPaddingLeft,
            blockPaddingSmTop, blockPaddingSmRight, blockPaddingSmBottom, blockPaddingSmLeft,
            blockPaddingMdTop, blockPaddingMdRight, blockPaddingMdBottom, blockPaddingMdLeft, blockPaddingUnit)}

        ${responsiveDimensionVars('featured-title-margin', featuredTitleMarginTop, featuredTitleMarginRight, featuredTitleMarginBottom, featuredTitleMarginLeft,
                featuredTitleMarginSmTop, featuredTitleMarginSmRight, featuredTitleMarginSmBottom, featuredTitleMarginSmLeft,
                featuredTitleMarginMdTop, featuredTitleMarginMdRight, featuredTitleMarginMdBottom, featuredTitleMarginMdLeft, featuredTitleMarginUnit)}

        ${responsiveDimensionVars('listing-post-title-margin', listingTitleMarginTop, listingTitleMarginRight, listingTitleMarginBottom, listingTitleMarginLeft,
                    listingTitleMarginSmTop, listingTitleMarginSmRight, listingTitleMarginSmBottom, listingTitleMarginSmLeft,
                    listingTitleMarginMdTop, listingTitleMarginMdRight, listingTitleMarginMdBottom, listingTitleMarginMdLeft, listingTitleMarginUnit)}

        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}

        ${featuredImageHeight ? '--sb-featured-thumb-height: ' + featuredImageHeight + '%;' : ''}
        ${listingImageHeight ? '--sb-listing-post-thumb-height: ' + listingImageHeight + '%;' : ''}
        ${headerColor ? '--sb-header-color: ' + headerColor + ';' : ''}
        ${headerShortBorderColor ? '--sb-header-short-border-color: ' + headerShortBorderColor + ';' : ''}
        ${headerLongBorderColor ? '--sb-header-long-border-color: ' + headerLongBorderColor + ';' : ''}

        ${responsiveTypographyVars('header-typo', headerTitleTypographyFamily, headerTitleTypographyWeight, headerTitleTypographyTextTransform, headerTitleTypographyTextDecoration,
                        headerTitleTypographyFontSizeSm, headerTitleTypographyFontSizeMd, headerTitleTypographyFontSize, headerTitleTypographyFontSizeUnit,
                        headerTitleTypographyLetterSpacingSm, headerTitleTypographyLetterSpacingMd, headerTitleTypographyLetterSpacing, headerTitleTypographyLetterSpacingUnit,
                        headerTitleTypographyLineHeightSm, headerTitleTypographyLineHeightMd, headerTitleTypographyLineHeight, headerTitleTypographyLineHeightUnit
                    )}

        ${responsiveTypographyVars('category-typo', categoryTypographyFamily, categoryTypographyWeight, categoryTypographyTextTransform, categoryTypographyTextDecoration,
                        categoryTypographyFontSizeSm, categoryTypographyFontSizeMd, categoryTypographyFontSize, categoryTypographyFontSizeUnit,
                        categoryTypographyLetterSpacingSm, categoryTypographyLetterSpacingMd, categoryTypographyLetterSpacing, categoryTypographyLetterSpacingUnit,
                        categoryTypographyLineHeightSm, categoryTypographyLineHeightMd, categoryTypographyLineHeight, categoryTypographyLineHeightUnit
                    )}

        ${responsiveTypographyVars('featured-title-typo', featuredTypographyFamily, featuredTypographyWeight, featuredTypographyTextTransform, featuredTypographyTextDecoration,
                        featuredTypographyFontSizeSm, featuredTypographyFontSizeMd, featuredTypographyFontSize, featuredTypographyFontSizeUnit,
                        featuredTypographyLetterSpacingSm, featuredTypographyLetterSpacingMd, featuredTypographyLetterSpacing, featuredTypographyLetterSpacingUnit,
                        featuredTypographyLineHeightSm, featuredTypographyLineHeightMd, featuredTypographyLineHeight, featuredTypographyLineHeightUnit
                    )}

        ${responsiveTypographyVars('listing-post-title-typo', listingTypographyFamily, listingTypographyWeight, listingTypographyTextTransform, listingTypographyTextDecoration,
                        listingTypographyFontSizeSm, listingTypographyFontSizeMd, listingTypographyFontSize, listingTypographyFontSizeUnit,
                        listingTypographyLetterSpacingSm, listingTypographyLetterSpacingMd, listingTypographyLetterSpacing, listingTypographyLetterSpacingUnit,
                        listingTypographyLineHeightSm, listingTypographyLineHeightMd, listingTypographyLineHeight, listingTypographyLineHeightUnit
                    )}

        ${responsiveTypographyVars('post-metas-typo', metasTypographyFamily, metasTypographyWeight, metasTypographyTextTransform, metasTypographyTextDecoration,
                        metasTypographyFontSizeSm, metasTypographyFontSizeMd, metasTypographyFontSize, metasTypographyFontSizeUnit,
                        metasTypographyLetterSpacingSm, metasTypographyLetterSpacingMd, metasTypographyLetterSpacing, metasTypographyLetterSpacingUnit,
                        metasTypographyLineHeightSm, metasTypographyLineHeightMd, metasTypographyLineHeight, metasTypographyLineHeightUnit
                    )}

        ${categoryBackgroundColor ? '--sb-category-background-color: ' + categoryBackgroundColor + ';' : ''}

        ${categoryTextColor ? '--sb-category-text-color: ' + categoryTextColor + ';' : ''}
        ${categoryBackgroundHoverColor ? '--sb-category-background-hover-color: ' + categoryBackgroundHoverColor + ';' : ''}
        ${categoryTextHoverColor ? '--sb-category-text-hover-color: ' + categoryTextHoverColor + ';' : ''}
        ${titleColor ? '--sb-title-color: ' + titleColor + ';' : ''}
        ${titleHoverColor ? '--sb-title-hover-color: ' + titleHoverColor + ';' : ''}
        ${postMetasColor ? '--sb-post-metas-color: ' + postMetasColor + ';' : ''}

        ${imageBorderRadius ? '--sb-image-border-radius: ' + imageBorderRadius + 'px;' : ''}
    }`
    setAttributes({sbStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")});

    const allTaxonomies = useSelect((select) => {
        var allTax = [];
        var selectTaxonomiesTypes = select('core').getTaxonomies();
        selectTaxonomiesTypes?.forEach((el) => {
            if (el.visibility.show_in_nav_menus === true && el.types[0] == postsPostType) {
                allTax.push({
                    value: el.slug,
                    label: el.name
                })
            }
        });
        return allTax;
    }, [postsPostType]);

    const taxTermSelected = (taxonomy) => {
        var termIDs = categories && categories[taxonomy] ? categories[taxonomy] : [];
        return termIDs;
    }

    const query = {
        per_page: 5,
        _embed: true,
        order,
        orderby: orderBy,
        offset: parseInt(offset ? offset : 0),
        exclude: excludePosts
    };

    allTaxonomies && allTaxonomies.map((tax) => {
        let taxvalue = tax.value;
        if (taxvalue == 'category') {
            taxvalue = 'categories';
        }
        if (taxvalue == 'post_tag') {
            taxvalue = 'tags';
        }
        query[taxvalue] = taxTermSelected(tax.value);
    });

    const posts = useSelect((select) => {
        return select('core').getEntityRecords('postType', postsPostType, query);
    }, [order, orderBy, categories, postsPostType, offset, query, excludePosts]);

    const selectPosts = useSelect((select) => {
        return select('core').getEntityRecords('postType', postsPostType, {
            per_page: 10,
            _embed: true,
            order,
            orderby: orderBy,
            offset: parseInt(offset ? offset : 0),
        });
    }, [order, orderBy, categories, postsPostType, offset, excludePosts]);

    var allPostsSelect = [];
    selectPosts && selectPosts.map((post, index) => {
        allPostsSelect.push({
            value: post.id,
            label: post.title.rendered
        })
    })

    const allPostTypes = useSelect((select) => {
        let allPtypes = [];
        let selectPostTypes = select('core').getPostTypes();
        selectPostTypes?.forEach((el) => {
            if (el.visibility.show_in_nav_menus === true) {
                allPtypes.push({
                    value: el.slug,
                    label: el.name
                })
            }
        });
        return allPtypes;
    }, []);

    const allCats = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', 'category', {
            per_page: -1,
        });
    }, []);

    const headerClasses = classnames(
        'sb-block-title',
        `${headerStyle}`,
        getFontClass(headerTitleTypographyFamily, headerTitleTypographyWeight, headerTitleTypographyTextTransform, headerTitleTypographyTextDecoration)
    );

    const catInner = (catId, index, primary) => {
        if (primary && index != 0) {
            return
        }
        const obj = allCats && allCats.find(o => o.id === catId);
        return obj && (
            <li key={index}>
                <a class={`sb-primary-cat sb-category-${catId}`} href={`${obj.link}`}>
                    {obj.name}
                </a>
            </li>
        );
    }

    const postInner = (post, index) => {
        const featuredImage =
            post._embedded &&
            post._embedded['wp:featuredmedia'] &&
            post._embedded['wp:featuredmedia'].length > 0 &&
            post._embedded['wp:featuredmedia'][0];
        const postAuthor =
            post._embedded &&
            post._embedded['author'] &&
            post._embedded['author'].length > 0 &&
            post._embedded['author'][0];
        const postComment =
            post._embedded &&
            post._embedded['replies'] &&
            post._embedded['replies'].length > 0 &&
            post._embedded['replies'][0];
        const post_author = index == 0 ? featuredPostAuthor : listingPostAuthor;
        const post_date = index == 0 ? featuredPostDate : listingPostDate;
        const post_comment = index == 0 ? featuredPostComments : listingPostComments;
        const listing_image_size = listingImageSize ? listingImageSize : 'large';
        const featured_image_size = featuredImageSize ? featuredImageSize : 'large';
        const image_size = index == 0 ? featured_image_size : listing_image_size;
        const image_height = index == 0 ? featuredImageHeight : listingImageHeight;
        const display_category = index == 0 ? featuredPostCategory : listingPostCategory;
        const featuredContent = (
            <div className="sb-big-post-item">
                <div className="sb-post-thumb">
                    <a href={post.link}>
                        <div className="sb-thumb-container">
                            {featuredImage && featuredImage.media_details && (
                                <img
                                    src={featuredImage.media_details.sizes?.[image_size] ? featuredImage.media_details.sizes?.[image_size].source_url : featuredImage.media_details.sizes?.['full'] ? featuredImage.media_details.sizes?.['full'].source_url : featuredImage.source_url}
                                    alt={featuredImage.alt_text}
                                />
                            )}
                        </div>
                        <div class="sb-post-content sb-gradient-overlay">
                            <h3 className={`sb-post-title ${getFontClass(featuredTypographyFamily, featuredTypographyWeight, featuredTypographyTextTransform, featuredTypographyTextDecoration)}`}>
                                <a href={post.link}>
                                    {post.title.rendered ? (
                                        <RawHTML>
                                            {post.title.rendered}
                                        </RawHTML>
                                    ) : (
                                        esc_html__('(No title)', 'smart-blocks')
                                    )}
                                </a>
                            </h3>

                            {(post_author || post_date || post_comment) && (
                                <div className="sb-post-meta">
                                    {postAuthor && post_author && (
                                        <span className={`sb-post-author`}>
                                            <i className="mdi-account"></i>
                                            {postAuthor.name}
                                        </span>
                                    )}
                                    {post.date_gmt && post_date && (
                                        <span className={`sb-post-date`}>
                                            <i className="mdi-clock-time-four-outline"></i>
                                            {dateFormat == 'relative_format' && `${post.relative_dates.created}`}
                                            {dateFormat == 'default' && dateI18n(getSettings().formats.date, post.date_gmt)}
                                            {dateFormat == 'custom' && dateI18n(customDateFormat, post.date_gmt)}
                                        </span>
                                    )}
                                    {post_comment && (
                                        <span className={`sb-post-comment`}>
                                            <i className="mdi-comment-outline"></i>
                                            {postComment ? postComment.length : 0}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </a>
                    {display_category && post.categories && (
                        <ul class="post-categories">
                            {post.categories && post.categories.map((catId, index) => (catInner(catId, index, false)))}
                        </ul>
                    )}
                </div>
            </div>
        );
        const listingContent = (
            <div className="sb-post-item sb-clearfix">
                <div className="sb-post-thumb">
                    <a href={post.link}>
                        <div className="sb-thumb-container">
                            {featuredImage && featuredImage.media_details && (
                                <img
                                    src={featuredImage.media_details.sizes?.[image_size] ? featuredImage.media_details.sizes?.[image_size].source_url : featuredImage.media_details.sizes?.['full'] ? featuredImage.media_details.sizes?.['full'].source_url : featuredImage.source_url}
                                    alt={featuredImage.alt_text}
                                />
                            )}
                        </div>
                    </a>
                </div>
                <div class="sb-post-content">
                    {display_category && post.categories && (
                        <ul class="post-categories">
                            {post.categories && post.categories.map((catId, index) => (catInner(catId, index, true)))}
                        </ul>
                    )}
                    <h3 className={`sb-post-title ${getFontClass(listingTypographyFamily, listingTypographyWeight, listingTypographyTextTransform, listingTypographyTextDecoration)}`}>
                        <a href={post.link}>
                            {post.title.rendered ? (
                                <RawHTML>
                                    {post.title.rendered}
                                </RawHTML>
                            ) : (
                                esc_html__('(No title)', 'smart-blocks')
                            )}
                        </a>
                    </h3>
                    {(post_author || post_date || post_comment) && (
                        <div className="sb-post-meta">
                            {postAuthor && post_author && (
                                <span className={`sb-post-author`}>
                                    <i className="mdi-account"></i>
                                    {postAuthor.name}
                                </span>
                            )}
                            {post.date_gmt && post_date && (
                                <span className={`sb-post-date`}>
                                    <i className="mdi-clock-time-four-outline"></i>
                                    {dateFormat == 'relative_format' && `${post.relative_dates.created}`}
                                    {dateFormat == 'default' && dateI18n(getSettings().formats.date, post.date_gmt)}
                                    {dateFormat == 'custom' && dateI18n(customDateFormat, post.date_gmt)}
                                </span>
                            )}
                            {post_comment && (
                                <span className={`sb-post-comment`}>
                                    <i className="mdi-comment-outline"></i>
                                    {postComment ? postComment.length : 0}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
        return index == 0 ? featuredContent : listingContent;
    }

    const imageSizes = useSelect((select) => {
        return select(blockEditorStore).getSettings().imageSizes;
    }, []);

    const getImageSizeOptions = () => {
        const options = [];
        imageSizes?.forEach((el) => {
            options.push({
                value: el.slug,
                label: el.name
            })
        });
        return options;
    };

    return (
        <>
            <style jsx>
                {applyFilters('smartblocks.editorcss', sbStyle, props)}
            </style>
            {headerTitleTypographyFamily && (headerTitleTypographyFamily != 'Default') && (<GoogleFontLoad family={headerTitleTypographyFamily} weight={headerTitleTypographyWeight.replace("italic", "i")} />)}
            {categoryTypographyFamily && (categoryTypographyFamily != 'Default') && (<GoogleFontLoad family={categoryTypographyFamily} weight={categoryTypographyWeight.replace("italic", "i")} />)}
            {featuredTypographyFamily && (featuredTypographyFamily != 'Default') && (<GoogleFontLoad family={featuredTypographyFamily} weight={featuredTypographyWeight.replace("italic", "i")} />)}
            {listingTypographyFamily && (listingTypographyFamily != 'Default') && (<GoogleFontLoad family={listingTypographyFamily} weight={listingTypographyWeight.replace("italic", "i")} />)}
            {metasTypographyFamily && (metasTypographyFamily != 'Default') && (<GoogleFontLoad family={metasTypographyFamily} weight={metasTypographyWeight.replace("italic", "i")} />)}
            <InspectorControls>
                <div className="sb-head-panel-tabs">
                    <div className="sb-panel-tabs-wrap">
                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'layout' === activeTab})}
                            onClick={() => setActiveTab('layout')}
                        >
                            <span className="dashicons">
                                <LayoutIcon />
                            </span>
                            {__('Layout', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'style' === activeTab})}
                            onClick={() => setActiveTab('style')}
                        >
                            <span className="dashicons">
                                <StyleIcon />
                            </span>
                            {__('Style', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'advanced' === activeTab})}
                            onClick={() => setActiveTab('advanced')}
                        >
                            <span className="dashicons">
                                <AdvancedIcon />
                            </span>
                            {__('Advanced', 'smart-blocks')}
                        </Button>
                    </div>
                    <div className="sb-panel-tab-fields">
                        {'layout' === activeTab && (
                            <>
                                {headerTitle && (
                                    <PanelBody
                                        title={__('Header', 'smart-blocks')}
                                        initialOpen={false}
                                    >
                                        <SelectControl
                                            label={__('Style', 'smart-blocks')}
                                            value={headerStyle}
                                            onChange={(headerStyle) => setAttributes({headerStyle})}
                                            options={[
                                                {value: 'sb-title-style1', label: esc_html__('Style 1', 'smart-blocks')},
                                                {value: 'sb-title-style2', label: esc_html__('Style 2', 'smart-blocks')},
                                                {value: 'sb-title-style3', label: esc_html__('Style 3', 'smart-blocks')},
                                                {value: 'sb-title-style4', label: esc_html__('Style 4', 'smart-blocks')}
                                            ]}
                                        />
                                    </PanelBody>
                                )}
                                <GroupControlQuery attributes={attributes} setAttributes={setAttributes} />
                                <PanelBody
                                    title={__('Featured Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={featuredImageSize}
                                        onChange={(featuredImageSize) => setAttributes({featuredImageSize})}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={featuredImageHeight}
                                        setValue={(featuredImageHeight) => setAttributes({featuredImageHeight})}
                                        min={30}
                                        max={150}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Author', 'smart-blocks')}
                                        checked={featuredPostAuthor}
                                        onChange={(featuredPostAuthor) => setAttributes({featuredPostAuthor})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={featuredPostDate}
                                        onChange={(featuredPostDate) => setAttributes({featuredPostDate})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={featuredPostComments}
                                        onChange={(featuredPostComments) => setAttributes({featuredPostComments})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Category', 'smart-blocks')}
                                        checked={featuredPostCategory}
                                        onChange={(featuredPostCategory) => setAttributes({featuredPostCategory})}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Listing Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={listingImageSize}
                                        onChange={(listingImageSize) => setAttributes({listingImageSize})}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={listingImageHeight}
                                        setValue={(listingImageHeight) => setAttributes({listingImageHeight})}
                                        min={30}
                                        max={150}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Author', 'smart-blocks')}
                                        checked={listingPostAuthor}
                                        onChange={(listingPostAuthor) => setAttributes({listingPostAuthor})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={listingPostDate}
                                        onChange={(listingPostDate) => setAttributes({listingPostDate})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={listingPostComments}
                                        onChange={(listingPostComments) => setAttributes({listingPostComments})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Category', 'smart-blocks')}
                                        checked={listingPostCategory}
                                        onChange={(listingPostCategory) => setAttributes({listingPostCategory})}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Additional Settings', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <RangeSliderControl
                                        label={__('Image Border Radius(px)', 'smart-blocks')}
                                        value={imageBorderRadius}
                                        setValue={(imageBorderRadius) => setAttributes({imageBorderRadius})}
                                        min={0}
                                        max={30}
                                    />
                                    <SelectControl
                                        label={__('Date Format', 'smart-blocks')}
                                        value={dateFormat}
                                        onChange={(dateFormat) => setAttributes({dateFormat})}
                                        options={[
                                            {value: 'relative_format', label: esc_html__('Relative Format (Ago)', 'smart-blocks')},
                                            {value: 'default', label: esc_html__('WordPress Default Format', 'smart-blocks')},
                                            {value: 'custom', label: esc_html__('Custom Format', 'smart-blocks')}
                                        ]}
                                    />
                                    {dateFormat == 'custom' && (
                                        <TextControl
                                            label={__('Custom Date Format', 'smart-blocks')}
                                            value={customDateFormat}
                                            onChange={(customDateFormat) => setAttributes({customDateFormat})}
                                        />
                                    )}
                                </PanelBody>
                            </>
                        ) || 'style' === activeTab && (
                            <>
                                {headerTitle && (
                                    <PanelBody
                                        title={__('Header Title', 'smart-blocks')}
                                        initialOpen={false}
                                    >
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerColor}
                                            setValue={(headerColor) => setAttributes({headerColor})}
                                        />
                                        <ColorControl
                                            label={__('Short Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerShortBorderColor}
                                            setValue={(headerShortBorderColor) => setAttributes({headerShortBorderColor})}
                                        />
                                        <ColorControl
                                            label={__('Long Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerLongBorderColor}
                                            setValue={(headerLongBorderColor) => setAttributes({headerLongBorderColor})}
                                        />
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks')}
                                            valueFamily={headerTitleTypographyFamily}
                                            setValueFamily={value => setAttributes({headerTitleTypographyFamily: value})}
                                            valueWeight={headerTitleTypographyWeight}
                                            setValueWeight={value => setAttributes({headerTitleTypographyWeight: value})}
                                            valueTextTransform={headerTitleTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({headerTitleTypographyTextTransform: value})}
                                            valueTextDecoration={headerTitleTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({headerTitleTypographyTextDecoration: value})}
                                            valueFontSizeSm={headerTitleTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({headerTitleTypographyFontSizeSm: value})}
                                            valueFontSizeMd={headerTitleTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({headerTitleTypographyFontSizeMd: value})}
                                            valueFontSize={headerTitleTypographyFontSize}
                                            setValueFontSize={value => setAttributes({headerTitleTypographyFontSize: value})}
                                            valueFontSizeUnit={headerTitleTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({headerTitleTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={headerTitleTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({headerTitleTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={headerTitleTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({headerTitleTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={headerTitleTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({headerTitleTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={headerTitleTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({headerTitleTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={headerTitleTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({headerTitleTypographyLineHeightSm: value})}
                                            valueLineHeightMd={headerTitleTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({headerTitleTypographyLineHeightMd: value})}
                                            valueLineHeight={headerTitleTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({headerTitleTypographyLineHeight: value})}
                                            valueLineHeightUnit={headerTitleTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({headerTitleTypographyLineHeightUnit: value})}
                                        />
                                    </PanelBody>
                                )}
                                <PanelBody
                                    title={__('Category', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <TypographyControl
                                        label={__('Typography', 'smart-blocks')}
                                        valueFamily={categoryTypographyFamily}
                                        setValueFamily={value => setAttributes({categoryTypographyFamily: value})}
                                        valueWeight={categoryTypographyWeight}
                                        setValueWeight={value => setAttributes({categoryTypographyWeight: value})}
                                        valueTextTransform={categoryTypographyTextTransform}
                                        setValueTextTransform={value => setAttributes({categoryTypographyTextTransform: value})}
                                        valueTextDecoration={categoryTypographyTextDecoration}
                                        setValueTextDecoration={value => setAttributes({categoryTypographyTextDecoration: value})}
                                        valueFontSizeSm={categoryTypographyFontSizeSm}
                                        setValueFontSizeSm={value => setAttributes({categoryTypographyFontSizeSm: value})}
                                        valueFontSizeMd={categoryTypographyFontSizeMd}
                                        setValueFontSizeMd={value => setAttributes({categoryTypographyFontSizeMd: value})}
                                        valueFontSize={categoryTypographyFontSize}
                                        setValueFontSize={value => setAttributes({categoryTypographyFontSize: value})}
                                        valueFontSizeUnit={categoryTypographyFontSizeUnit}
                                        setValueFontSizeUnit={value => setAttributes({categoryTypographyFontSizeUnit: value})}
                                        valueLetterSpacingSm={categoryTypographyLetterSpacingSm}
                                        setValueLetterSpacingSm={value => setAttributes({categoryTypographyLetterSpacingSm: value})}
                                        valueLetterSpacingMd={categoryTypographyLetterSpacingMd}
                                        setValueLetterSpacingMd={value => setAttributes({categoryTypographyLetterSpacingMd: value})}
                                        valueLetterSpacing={categoryTypographyLetterSpacing}
                                        setValueLetterSpacing={value => setAttributes({categoryTypographyLetterSpacing: value})}
                                        valueLetterSpacingUnit={categoryTypographyLetterSpacingUnit}
                                        setValueLetterSpacingUnit={value => setAttributes({categoryTypographyLetterSpacingUnit: value})}
                                        valueLineHeightSm={categoryTypographyLineHeightSm}
                                        setValueLineHeightSm={value => setAttributes({categoryTypographyLineHeightSm: value})}
                                        valueLineHeightMd={categoryTypographyLineHeightMd}
                                        setValueLineHeightMd={value => setAttributes({categoryTypographyLineHeightMd: value})}
                                        valueLineHeight={categoryTypographyLineHeight}
                                        setValueLineHeight={value => setAttributes({categoryTypographyLineHeight: value})}
                                        valueLineHeightUnit={categoryTypographyLineHeightUnit}
                                        setValueLineHeightUnit={value => setAttributes({categoryTypographyLineHeightUnit: value})}
                                    />
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryBackgroundColor}
                                                setValue={(categoryBackgroundColor) => setAttributes({categoryBackgroundColor})}
                                            />
                                            <ColorControl
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextColor}
                                                setValue={(categoryTextColor) => setAttributes({categoryTextColor})}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryBackgroundHoverColor}
                                                setValue={(categoryBackgroundHoverColor) => setAttributes({categoryBackgroundHoverColor})}
                                            />
                                            <ColorControl
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextHoverColor}
                                                setValue={(categoryTextHoverColor) => setAttributes({categoryTextHoverColor})}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Title', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Title Color', 'smart-blocks')}
                                        enableAlpha
                                        value={titleColor}
                                        setValue={(titleColor) => setAttributes({titleColor})}
                                    />
                                    <ColorControl
                                        label={__('Title Color(Hover)', 'smart-blocks')}
                                        enableAlpha
                                        value={titleHoverColor}
                                        setValue={(titleHoverColor) => setAttributes({titleHoverColor})}
                                    />
                                    <Tabs>
                                        <div tabTitle={__("Featured", 'smart-blocks')}>
                                            <TypographyControl
                                                label={__('Typography', 'smart-blocks')}
                                                valueFamily={featuredTypographyFamily}
                                                setValueFamily={value => setAttributes({featuredTypographyFamily: value})}
                                                valueWeight={featuredTypographyWeight}
                                                setValueWeight={value => setAttributes({featuredTypographyWeight: value})}
                                                valueTextTransform={featuredTypographyTextTransform}
                                                setValueTextTransform={value => setAttributes({featuredTypographyTextTransform: value})}
                                                valueTextDecoration={featuredTypographyTextDecoration}
                                                setValueTextDecoration={value => setAttributes({featuredTypographyTextDecoration: value})}
                                                valueFontSizeSm={featuredTypographyFontSizeSm}
                                                setValueFontSizeSm={value => setAttributes({featuredTypographyFontSizeSm: value})}
                                                valueFontSizeMd={featuredTypographyFontSizeMd}
                                                setValueFontSizeMd={value => setAttributes({featuredTypographyFontSizeMd: value})}
                                                valueFontSize={featuredTypographyFontSize}
                                                setValueFontSize={value => setAttributes({featuredTypographyFontSize: value})}
                                                valueFontSizeUnit={featuredTypographyFontSizeUnit}
                                                setValueFontSizeUnit={value => setAttributes({featuredTypographyFontSizeUnit: value})}
                                                valueLetterSpacingSm={featuredTypographyLetterSpacingSm}
                                                setValueLetterSpacingSm={value => setAttributes({featuredTypographyLetterSpacingSm: value})}
                                                valueLetterSpacingMd={featuredTypographyLetterSpacingMd}
                                                setValueLetterSpacingMd={value => setAttributes({featuredTypographyLetterSpacingMd: value})}
                                                valueLetterSpacing={featuredTypographyLetterSpacing}
                                                setValueLetterSpacing={value => setAttributes({featuredTypographyLetterSpacing: value})}
                                                valueLetterSpacingUnit={featuredTypographyLetterSpacingUnit}
                                                setValueLetterSpacingUnit={value => setAttributes({featuredTypographyLetterSpacingUnit: value})}
                                                valueLineHeightSm={featuredTypographyLineHeightSm}
                                                setValueLineHeightSm={value => setAttributes({featuredTypographyLineHeightSm: value})}
                                                valueLineHeightMd={featuredTypographyLineHeightMd}
                                                setValueLineHeightMd={value => setAttributes({featuredTypographyLineHeightMd: value})}
                                                valueLineHeight={featuredTypographyLineHeight}
                                                setValueLineHeight={value => setAttributes({featuredTypographyLineHeight: value})}
                                                valueLineHeightUnit={featuredTypographyLineHeightUnit}
                                                setValueLineHeightUnit={value => setAttributes({featuredTypographyLineHeightUnit: value})}
                                            />
                                            <DimensionControl
                                                label={__('Margin', 'smart-blocks')}
                                                min="0"
                                                max="100"
                                                dimensionTop={featuredTitleMarginTop}
                                                setDimensionTop={value => setAttributes({featuredTitleMarginTop: value})}
                                                dimensionMdTop={featuredTitleMarginMdTop}
                                                setDimensionMdTop={value => setAttributes({featuredTitleMarginMdTop: value})}
                                                dimensionSmTop={featuredTitleMarginSmTop}
                                                setDimensionSmTop={value => setAttributes({featuredTitleMarginSmTop: value})}

                                                dimensionLeft={featuredTitleMarginLeft}
                                                setDimensionLeft={value => setAttributes({featuredTitleMarginLeft: value})}
                                                dimensionMdLeft={featuredTitleMarginMdLeft}
                                                setDimensionMdLeft={value => setAttributes({featuredTitleMarginMdLeft: value})}
                                                dimensionSmLeft={featuredTitleMarginSmLeft}
                                                setDimensionSmLeft={value => setAttributes({featuredTitleMarginSmLeft: value})}

                                                dimensionRight={featuredTitleMarginRight}
                                                setDimensionRight={value => setAttributes({featuredTitleMarginRight: value})}
                                                dimensionMdRight={featuredTitleMarginMdRight}
                                                setDimensionMdRight={value => setAttributes({featuredTitleMarginMdRight: value})}
                                                dimensionSmRight={featuredTitleMarginSmRight}
                                                setDimensionSmRight={value => setAttributes({featuredTitleMarginSmRight: value})}

                                                dimensionBottom={featuredTitleMarginBottom}
                                                setDimensionBottom={value => setAttributes({featuredTitleMarginBottom: value})}
                                                dimensionMdBottom={featuredTitleMarginMdBottom}
                                                setDimensionMdBottom={value => setAttributes({featuredTitleMarginMdBottom: value})}
                                                dimensionSmBottom={featuredTitleMarginSmBottom}
                                                setDimensionSmBottom={value => setAttributes({featuredTitleMarginSmBottom: value})}

                                                unit={featuredTitleMarginUnit}
                                                setUnit={value => setAttributes({featuredTitleMarginUnit: value})}
                                                responsive={!0}
                                            />
                                        </div>
                                        <div tabTitle={__("Listing Post", 'smart-blocks')}>
                                            <TypographyControl
                                                label={__('Typography', 'smart-blocks')}
                                                valueFamily={listingTypographyFamily}
                                                setValueFamily={value => setAttributes({listingTypographyFamily: value})}
                                                valueWeight={listingTypographyWeight}
                                                setValueWeight={value => setAttributes({listingTypographyWeight: value})}
                                                valueTextTransform={listingTypographyTextTransform}
                                                setValueTextTransform={value => setAttributes({listingTypographyTextTransform: value})}
                                                valueTextDecoration={listingTypographyTextDecoration}
                                                setValueTextDecoration={value => setAttributes({listingTypographyTextDecoration: value})}
                                                valueFontSizeSm={listingTypographyFontSizeSm}
                                                setValueFontSizeSm={value => setAttributes({listingTypographyFontSizeSm: value})}
                                                valueFontSizeMd={listingTypographyFontSizeMd}
                                                setValueFontSizeMd={value => setAttributes({listingTypographyFontSizeMd: value})}
                                                valueFontSize={listingTypographyFontSize}
                                                setValueFontSize={value => setAttributes({listingTypographyFontSize: value})}
                                                valueFontSizeUnit={listingTypographyFontSizeUnit}
                                                setValueFontSizeUnit={value => setAttributes({listingTypographyFontSizeUnit: value})}
                                                valueLetterSpacingSm={listingTypographyLetterSpacingSm}
                                                setValueLetterSpacingSm={value => setAttributes({listingTypographyLetterSpacingSm: value})}
                                                valueLetterSpacingMd={listingTypographyLetterSpacingMd}
                                                setValueLetterSpacingMd={value => setAttributes({listingTypographyLetterSpacingMd: value})}
                                                valueLetterSpacing={listingTypographyLetterSpacing}
                                                setValueLetterSpacing={value => setAttributes({listingTypographyLetterSpacing: value})}
                                                valueLetterSpacingUnit={listingTypographyLetterSpacingUnit}
                                                setValueLetterSpacingUnit={value => setAttributes({listingTypographyLetterSpacingUnit: value})}
                                                valueLineHeightSm={listingTypographyLineHeightSm}
                                                setValueLineHeightSm={value => setAttributes({listingTypographyLineHeightSm: value})}
                                                valueLineHeightMd={listingTypographyLineHeightMd}
                                                setValueLineHeightMd={value => setAttributes({listingTypographyLineHeightMd: value})}
                                                valueLineHeight={listingTypographyLineHeight}
                                                setValueLineHeight={value => setAttributes({listingTypographyLineHeight: value})}
                                                valueLineHeightUnit={listingTypographyLineHeightUnit}
                                                setValueLineHeightUnit={value => setAttributes({listingTypographyLineHeightUnit: value})}
                                            />
                                            <DimensionControl
                                                label={__('Margin', 'smart-blocks')}
                                                dimensionTop={listingTitleMarginTop}
                                                setDimensionTop={value => setAttributes({listingTitleMarginTop: value})}
                                                dimensionMdTop={listingTitleMarginMdTop}
                                                setDimensionMdTop={value => setAttributes({listingTitleMarginMdTop: value})}
                                                dimensionSmTop={listingTitleMarginSmTop}
                                                setDimensionSmTop={value => setAttributes({listingTitleMarginSmTop: value})}

                                                dimensionLeft={listingTitleMarginLeft}
                                                setDimensionLeft={value => setAttributes({listingTitleMarginLeft: value})}
                                                dimensionMdLeft={listingTitleMarginMdLeft}
                                                setDimensionMdLeft={value => setAttributes({listingTitleMarginMdLeft: value})}
                                                dimensionSmLeft={listingTitleMarginSmLeft}
                                                setDimensionSmLeft={value => setAttributes({listingTitleMarginSmLeft: value})}

                                                dimensionRight={listingTitleMarginRight}
                                                setDimensionRight={value => setAttributes({listingTitleMarginRight: value})}
                                                dimensionMdRight={listingTitleMarginMdRight}
                                                setDimensionMdRight={value => setAttributes({listingTitleMarginMdRight: value})}
                                                dimensionSmRight={listingTitleMarginSmRight}
                                                setDimensionSmRight={value => setAttributes({listingTitleMarginSmRight: value})}

                                                dimensionBottom={listingTitleMarginBottom}
                                                setDimensionBottom={value => setAttributes({listingTitleMarginBottom: value})}
                                                dimensionMdBottom={listingTitleMarginMdBottom}
                                                setDimensionMdBottom={value => setAttributes({listingTitleMarginMdBottom: value})}
                                                dimensionSmBottom={listingTitleMarginSmBottom}
                                                setDimensionSmBottom={value => setAttributes({listingTitleMarginSmBottom: value})}

                                                unit={listingTitleMarginUnit}
                                                setUnit={value => setAttributes({listingTitleMarginUnit: value})}
                                                responsive={!0}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Metas', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={postMetasColor}
                                        setValue={(postMetasColor) => setAttributes({postMetasColor})}
                                    />
                                    <TypographyControl
                                        label={__('Typography', 'smart-blocks')}
                                        valueFamily={metasTypographyFamily}
                                        setValueFamily={value => setAttributes({metasTypographyFamily: value})}
                                        valueWeight={metasTypographyWeight}
                                        setValueWeight={value => setAttributes({metasTypographyWeight: value})}
                                        valueTextTransform={metasTypographyTextTransform}
                                        setValueTextTransform={value => setAttributes({metasTypographyTextTransform: value})}
                                        valueTextDecoration={metasTypographyTextDecoration}
                                        setValueTextDecoration={value => setAttributes({metasTypographyTextDecoration: value})}
                                        valueFontSizeSm={metasTypographyFontSizeSm}
                                        setValueFontSizeSm={value => setAttributes({metasTypographyFontSizeSm: value})}
                                        valueFontSizeMd={metasTypographyFontSizeMd}
                                        setValueFontSizeMd={value => setAttributes({metasTypographyFontSizeMd: value})}
                                        valueFontSize={metasTypographyFontSize}
                                        setValueFontSize={value => setAttributes({metasTypographyFontSize: value})}
                                        valueFontSizeUnit={metasTypographyFontSizeUnit}
                                        setValueFontSizeUnit={value => setAttributes({metasTypographyFontSizeUnit: value})}
                                        valueLetterSpacingSm={metasTypographyLetterSpacingSm}
                                        setValueLetterSpacingSm={value => setAttributes({metasTypographyLetterSpacingSm: value})}
                                        valueLetterSpacingMd={metasTypographyLetterSpacingMd}
                                        setValueLetterSpacingMd={value => setAttributes({metasTypographyLetterSpacingMd: value})}
                                        valueLetterSpacing={metasTypographyLetterSpacing}
                                        setValueLetterSpacing={value => setAttributes({metasTypographyLetterSpacing: value})}
                                        valueLetterSpacingUnit={metasTypographyLetterSpacingUnit}
                                        setValueLetterSpacingUnit={value => setAttributes({metasTypographyLetterSpacingUnit: value})}
                                        valueLineHeightSm={metasTypographyLineHeightSm}
                                        setValueLineHeightSm={value => setAttributes({metasTypographyLineHeightSm: value})}
                                        valueLineHeightMd={metasTypographyLineHeightMd}
                                        setValueLineHeightMd={value => setAttributes({metasTypographyLineHeightMd: value})}
                                        valueLineHeight={metasTypographyLineHeight}
                                        setValueLineHeight={value => setAttributes({metasTypographyLineHeight: value})}
                                        valueLineHeightUnit={metasTypographyLineHeightUnit}
                                        setValueLineHeightUnit={value => setAttributes({metasTypographyLineHeightUnit: value})}
                                    />
                                </PanelBody>
                            </>
                        ) || 'advanced' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Spacing', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <DimensionControl
                                        label={__('Margin', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        dimensionTop={blockMarginTop}
                                        setDimensionTop={value => setAttributes({blockMarginTop: value})}
                                        dimensionMdTop={blockMarginMdTop}
                                        setDimensionMdTop={value => setAttributes({blockMarginMdTop: value})}
                                        dimensionSmTop={blockMarginSmTop}
                                        setDimensionSmTop={value => setAttributes({blockMarginSmTop: value})}

                                        dimensionLeft={blockMarginLeft}
                                        setDimensionLeft={value => setAttributes({blockMarginLeft: value})}
                                        dimensionMdLeft={blockMarginMdLeft}
                                        setDimensionMdLeft={value => setAttributes({blockMarginMdLeft: value})}
                                        dimensionSmLeft={blockMarginSmLeft}
                                        setDimensionSmLeft={value => setAttributes({blockMarginSmLeft: value})}

                                        dimensionRight={blockMarginRight}
                                        setDimensionRight={value => setAttributes({blockMarginRight: value})}
                                        dimensionMdRight={blockMarginMdRight}
                                        setDimensionMdRight={value => setAttributes({blockMarginMdRight: value})}
                                        dimensionSmRight={blockMarginSmRight}
                                        setDimensionSmRight={value => setAttributes({blockMarginSmRight: value})}

                                        dimensionBottom={blockMarginBottom}
                                        setDimensionBottom={value => setAttributes({blockMarginBottom: value})}
                                        dimensionMdBottom={blockMarginMdBottom}
                                        setDimensionMdBottom={value => setAttributes({blockMarginMdBottom: value})}
                                        dimensionSmBottom={blockMarginSmBottom}
                                        setDimensionSmBottom={value => setAttributes({blockMarginSmBottom: value})}

                                        unit={blockMarginUnit}
                                        setUnit={value => setAttributes({blockMarginUnit: value})}
                                        responsive={!0}
                                    />
                                    <DimensionControl
                                        label={__('Padding', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        dimensionTop={blockPaddingTop}
                                        setDimensionTop={value => setAttributes({blockPaddingTop: value})}
                                        dimensionMdTop={blockPaddingMdTop}
                                        setDimensionMdTop={value => setAttributes({blockPaddingMdTop: value})}
                                        dimensionSmTop={blockPaddingSmTop}
                                        setDimensionSmTop={value => setAttributes({blockPaddingSmTop: value})}

                                        dimensionLeft={blockPaddingLeft}
                                        setDimensionLeft={value => setAttributes({blockPaddingLeft: value})}
                                        dimensionMdLeft={blockPaddingMdLeft}
                                        setDimensionMdLeft={value => setAttributes({blockPaddingMdLeft: value})}
                                        dimensionSmLeft={blockPaddingSmLeft}
                                        setDimensionSmLeft={value => setAttributes({blockPaddingSmLeft: value})}

                                        dimensionRight={blockPaddingRight}
                                        setDimensionRight={value => setAttributes({blockPaddingRight: value})}
                                        dimensionMdRight={blockPaddingMdRight}
                                        setDimensionMdRight={value => setAttributes({blockPaddingMdRight: value})}
                                        dimensionSmRight={blockPaddingSmRight}
                                        setDimensionSmRight={value => setAttributes({blockPaddingSmRight: value})}

                                        dimensionBottom={blockPaddingBottom}
                                        setDimensionBottom={value => setAttributes({blockPaddingBottom: value})}
                                        dimensionMdBottom={blockPaddingMdBottom}
                                        setDimensionMdBottom={value => setAttributes({blockPaddingMdBottom: value})}
                                        dimensionSmBottom={blockPaddingSmBottom}
                                        setDimensionSmBottom={value => setAttributes({blockPaddingSmBottom: value})}

                                        unit={blockPaddingUnit}
                                        setUnit={value => setAttributes({blockPaddingUnit: value})}
                                        responsive={!0}
                                    />
                                </PanelBody>

                                <PanelBody
                                    title={__('Border', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <BorderControl
                                                value={borderNormal}
                                                setValue={(borderNormal) => setAttributes({borderNormal})}
                                            />
                                            {borderNormal && (
                                                <ColorControl
                                                    label={__('Border Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={borderNormalColor}
                                                    setValue={(borderNormalColor) => setAttributes({borderNormalColor})}
                                                />
                                            )}
                                            <DimensionControl
                                                label={__('Border Width', 'smart-blocks')}
                                                dimensionTop={borderNormalWidthTop}
                                                setDimensionTop={value => setAttributes({borderNormalWidthTop: value})}

                                                dimensionLeft={borderNormalWidthLeft}
                                                setDimensionLeft={value => setAttributes({borderNormalWidthLeft: value})}

                                                dimensionRight={borderNormalWidthRight}
                                                setDimensionRight={value => setAttributes({borderNormalWidthRight: value})}

                                                dimensionBottom={borderNormalWidthBottom}
                                                setDimensionBottom={value => setAttributes({borderNormalWidthBottom: value})}

                                                unit={borderNormalWidthUnit}
                                                setUnit={value => setAttributes({borderNormalWidthUnit: value})}
                                                units={['px', 'em']}
                                            />
                                            <DimensionControl
                                                label={__('Border Radius', 'smart-blocks')}
                                                dimensionTop={borderNormalRadiusTop}
                                                setDimensionTop={value => setAttributes({borderNormalRadiusTop: value})}

                                                dimensionLeft={borderNormalRadiusLeft}
                                                setDimensionLeft={value => setAttributes({borderNormalRadiusLeft: value})}

                                                dimensionRight={borderNormalRadiusRight}
                                                setDimensionRight={value => setAttributes({borderNormalRadiusRight: value})}

                                                dimensionBottom={borderNormalRadiusBottom}
                                                setDimensionBottom={value => setAttributes({borderNormalRadiusBottom: value})}

                                                unit={borderNormalRadiusUnit}
                                                setUnit={value => setAttributes({borderNormalRadiusUnit: value})}
                                            />
                                            <BoxShadowControl
                                                valueHorizontal={borderNormalBoxShadowHorizontal}
                                                setValueHorizontal={(borderNormalBoxShadowHorizontal) => setAttributes({borderNormalBoxShadowHorizontal})}
                                                valueVertical={borderNormalBoxShadowVertical}
                                                setValueVertical={(borderNormalBoxShadowVertical) => setAttributes({borderNormalBoxShadowVertical})}
                                                valueBlur={borderNormalBoxShadowBlur}
                                                setValueBlur={(borderNormalBoxShadowBlur) => setAttributes({borderNormalBoxShadowBlur})}
                                                valueSpread={borderNormalBoxShadowSpread}
                                                setValueSpread={(borderNormalBoxShadowSpread) => setAttributes({borderNormalBoxShadowSpread})}
                                                valueColor={borderNormalBoxShadowColor}
                                                setValueColor={(borderNormalBoxShadowColor) => setAttributes({borderNormalBoxShadowColor})}
                                                valueInset={borderNormalBoxShadowInset}
                                                setValueInset={(borderNormalBoxShadowInset) => setAttributes({borderNormalBoxShadowInset})}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <BorderControl
                                                value={borderHover}
                                                setValue={(borderHover) => setAttributes({borderHover})}
                                            />
                                            {borderHover && (
                                                <ColorControl
                                                    label={__('Border Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={borderHoverColor}
                                                    setValue={(borderHoverColor) => setAttributes({borderHoverColor})}
                                                />
                                            )}
                                            <DimensionControl
                                                label={__('Border Width', 'smart-blocks')}
                                                dimensionTop={borderHoverWidthTop}
                                                setDimensionTop={value => setAttributes({borderHoverWidthTop: value})}

                                                dimensionLeft={borderHoverWidthLeft}
                                                setDimensionLeft={value => setAttributes({borderHoverWidthLeft: value})}

                                                dimensionRight={borderHoverWidthRight}
                                                setDimensionRight={value => setAttributes({borderHoverWidthRight: value})}

                                                dimensionBottom={borderHoverWidthBottom}
                                                setDimensionBottom={value => setAttributes({borderHoverWidthBottom: value})}

                                                unit={borderHoverWidthUnit}
                                                setUnit={value => setAttributes({borderHoverWidthUnit: value})}
                                                units={['px', 'em']}
                                            />
                                            <DimensionControl
                                                label={__('Border Radius', 'smart-blocks')}
                                                dimensionTop={borderHoverRadiusTop}
                                                setDimensionTop={value => setAttributes({borderHoverRadiusTop: value})}

                                                dimensionLeft={borderHoverRadiusLeft}
                                                setDimensionLeft={value => setAttributes({borderHoverRadiusLeft: value})}

                                                dimensionRight={borderHoverRadiusRight}
                                                setDimensionRight={value => setAttributes({borderHoverRadiusRight: value})}

                                                dimensionBottom={borderHoverRadiusBottom}
                                                setDimensionBottom={value => setAttributes({borderHoverRadiusBottom: value})}

                                                unit={borderHoverRadiusUnit}
                                                setUnit={value => setAttributes({borderHoverRadiusUnit: value})}
                                            />
                                            <BoxShadowControl
                                                valueHorizontal={borderHoverBoxShadowHorizontal}
                                                setValueHorizontal={(borderHoverBoxShadowHorizontal) => setAttributes({borderHoverBoxShadowHorizontal})}
                                                valueVertical={borderHoverBoxShadowVertical}
                                                setValueVertical={(borderHoverBoxShadowVertical) => setAttributes({borderHoverBoxShadowVertical})}
                                                valueBlur={borderHoverBoxShadowBlur}
                                                setValueBlur={(borderHoverBoxShadowBlur) => setAttributes({borderHoverBoxShadowBlur})}
                                                valueSpread={borderHoverBoxShadowSpread}
                                                setValueSpread={(borderHoverBoxShadowSpread) => setAttributes({borderHoverBoxShadowSpread})}
                                                valueColor={borderHoverBoxShadowColor}
                                                setValueColor={(borderHoverBoxShadowColor) => setAttributes({borderHoverBoxShadowColor})}
                                                valueInset={borderHoverBoxShadowInset}
                                                setValueInset={(borderHoverBoxShadowInset) => setAttributes({borderHoverBoxShadowInset})}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Background', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Background Color', 'smart-blocks')}
                                        enableAlpha
                                        value={blockBgColor}
                                        setValue={(blockBgColor) => setAttributes({blockBgColor})}
                                    />
                                </PanelBody>

                                {applyFilters('smartblocks.advancedBlocks', '', props)}
                                {applyFilters('smartblocks.blockTools', '', props)}
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps({
                    className: "wp-block-smart-blocks sb-news-module-nine"
                })}>
                    <h2 className={headerClasses}>
                        <RichText
                            tagName="span"
                            value={headerTitle}
                            onChange={(headerTitle) => setAttributes({headerTitle})}
                            placeholder={__('Heading...', 'smart-blocks')}
                        />
                    </h2>
                    <div className="sb-news-module-nine-wrap">
                        {posts && posts.map((post, index) => (postInner(post, index)))}
                    </div>
                </div>
            </div>
        </>
    );
}
