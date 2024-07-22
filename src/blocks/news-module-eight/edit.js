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
    ToggleControl,
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
import QueryTaxonomyControls from '../../utils/querytaxonomycontrols';
import RangeSliderControl from '../../controls/rangeslider';
import MultiSelectControl from '../../controls/multiselect';
import BorderControl from '../../controls/border';
import BoxShadowControl from '../../controls/boxshadow';
import {responsiveTypographyVars, getFontClass, dimensionVars, boxShadowVars, responsiveDimensionVars} from '../../utils/helper';
import {LayoutIcon, StyleIcon, AdvancedIcon} from '../../utils/svgicons';

export default function Edit({attributes, setAttributes}) {
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
        sideImageSize,
        sideImageHeight,
        sidePostAuthor,
        sidePostDate,
        sidePostComments,
        sidePostCategory,

        sideTypographyFamily,
        sideTypographyWeight,
        sideTypographyTextTransform,
        sideTypographyTextDecoration,
        sideTypographyFontSizeSm,
        sideTypographyFontSizeMd,
        sideTypographyFontSize,
        sideTypographyFontSizeUnit,
        sideTypographyLetterSpacingSm,
        sideTypographyLetterSpacingMd,
        sideTypographyLetterSpacing,
        sideTypographyLetterSpacingUnit,
        sideTypographyLineHeightSm,
        sideTypographyLineHeightMd,
        sideTypographyLineHeight,
        sideTypographyLineHeightUnit,

        featuredImageSize,
        featuredExcerptLength,
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

        excerptTypographyFamily,
        excerptTypographyWeight,
        excerptTypographyTextTransform,
        excerptTypographyTextDecoration,
        excerptTypographyFontSizeSm,
        excerptTypographyFontSizeMd,
        excerptTypographyFontSize,
        excerptTypographyFontSizeUnit,
        excerptTypographyLetterSpacingSm,
        excerptTypographyLetterSpacingMd,
        excerptTypographyLetterSpacing,
        excerptTypographyLetterSpacingUnit,
        excerptTypographyLineHeightSm,
        excerptTypographyLineHeightMd,
        excerptTypographyLineHeight,
        excerptTypographyLineHeightUnit,

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
        sideTitleMarginSmTop,
        sideTitleMarginSmLeft,
        sideTitleMarginSmRight,
        sideTitleMarginSmBottom,
        sideTitleMarginMdTop,
        sideTitleMarginMdLeft,
        sideTitleMarginMdRight,
        sideTitleMarginMdBottom,
        sideTitleMarginTop,
        sideTitleMarginLeft,
        sideTitleMarginRight,
        sideTitleMarginBottom,
        sideTitleMarginUnit,
        categoryBackgroundColor,
        categoryTextColor,
        categoryBackgroundHoverColor,
        categoryTextHoverColor,
        titleColor,
        titleHoverColor,
        excerptColor,
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

        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}
        
        ${featuredImageHeight ? '--sb-featured-thumb-height: ' + featuredImageHeight + '%;' : ''}
        ${sideImageHeight ? '--sb-side-post-thumb-height: ' + sideImageHeight + '%;' : ''}
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

        ${responsiveTypographyVars('side-post-title-typo', sideTypographyFamily, sideTypographyWeight, sideTypographyTextTransform, sideTypographyTextDecoration,
                sideTypographyFontSizeSm, sideTypographyFontSizeMd, sideTypographyFontSize, sideTypographyFontSizeUnit,
                sideTypographyLetterSpacingSm, sideTypographyLetterSpacingMd, sideTypographyLetterSpacing, sideTypographyLetterSpacingUnit,
                sideTypographyLineHeightSm, sideTypographyLineHeightMd, sideTypographyLineHeight, sideTypographyLineHeightUnit
            )}

        ${responsiveTypographyVars('excerpt-typo', excerptTypographyFamily, excerptTypographyWeight, excerptTypographyTextTransform, excerptTypographyTextDecoration,
                excerptTypographyFontSizeSm, excerptTypographyFontSizeMd, excerptTypographyFontSize, excerptTypographyFontSizeUnit,
                excerptTypographyLetterSpacingSm, excerptTypographyLetterSpacingMd, excerptTypographyLetterSpacing, excerptTypographyLetterSpacingUnit,
                excerptTypographyLineHeightSm, excerptTypographyLineHeightMd, excerptTypographyLineHeight, excerptTypographyLineHeightUnit
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

        ${responsiveDimensionVars('featured-title-margin', featuredTitleMarginTop, featuredTitleMarginRight, featuredTitleMarginBottom, featuredTitleMarginLeft,
                featuredTitleMarginSmTop, featuredTitleMarginSmRight, featuredTitleMarginSmBottom, featuredTitleMarginSmLeft,
                featuredTitleMarginMdTop, featuredTitleMarginMdRight, featuredTitleMarginMdBottom, featuredTitleMarginMdLeft, featuredTitleMarginUnit)}

        ${responsiveDimensionVars('side-post-title-margin', sideTitleMarginTop, sideTitleMarginRight, sideTitleMarginBottom, sideTitleMarginLeft,
                    sideTitleMarginSmTop, sideTitleMarginSmRight, sideTitleMarginSmBottom, sideTitleMarginSmLeft,
                    sideTitleMarginMdTop, sideTitleMarginMdRight, sideTitleMarginMdBottom, sideTitleMarginMdLeft, sideTitleMarginUnit)}

        ${excerptColor ? '--sb-excerpt-color: ' + excerptColor + ';' : ''}
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

    const postInner = (post, block) => {
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

        const titleClass = block == 'featured' ? 'sb-post-title ' + getFontClass(featuredTypographyFamily, featuredTypographyWeight, featuredTypographyTextTransform, featuredTypographyTextDecoration) : getFontClass(sideTypographyFamily, sideTypographyWeight, sideTypographyTextTransform, sideTypographyTextDecoration);
        const post_author = block == 'featured' ? featuredPostAuthor : sidePostAuthor;
        const post_date = block == 'featured' ? featuredPostDate : sidePostDate;
        const post_comment = block == 'featured' ? featuredPostComments : sidePostComments;
        const side_image_size = sideImageSize ? sideImageSize : 'large';
        const featured_image_size = featuredImageSize ? featuredImageSize : 'large';
        const image_size = block == 'featured' ? featured_image_size : side_image_size;
        const excerpt_length = block == 'featured' ? featuredExcerptLength : 0;
        const image_height = block == 'featured' ? featuredImageHeight : sideImageHeight;
        const display_category = block == 'featured' ? featuredPostCategory : sidePostCategory;
        return (
            <div className="sb-post-item sb-clearfix">
                <div className="sb-post-thumb">
                    <div className="sb-thumb-container">
                        {featuredImage && featuredImage.media_details && (
                            <img
                                src={featuredImage.media_details.sizes?.[image_size] ? featuredImage.media_details.sizes?.[image_size].source_url : featuredImage.media_details.sizes?.['full'] ? featuredImage.media_details.sizes?.['full'].source_url : featuredImage.source_url}
                                alt={featuredImage.alt_text}
                            />
                        )}
                    </div>
                    {display_category && post.categories && (
                        <ul class="post-categories">
                            {post.categories && block == 'featured' ? post.categories.map((catId, index) => (catInner(catId, index, false))) : post.categories.map((catId, index) => (catInner(catId, index, true)))}
                        </ul>
                    )}
                </div>
                <div class="sb-post-content">
                    <h3 className={`sb-post-title ${titleClass}`}>
                        <a href={post.link}>
                            {post.title.rendered ? (
                                <RawHTML>
                                    {post.title.rendered}
                                </RawHTML>
                            ) : (
                                __('(No title)', 'smart-blocks')
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
                    {excerpt_length != 0 && (
                        <div className={`sb-excerpt`}>
                            {post.content.rendered && (
                                <RawHTML>{post.content.rendered.replace(/<[^>]+>/g, '').substring(0, excerpt_length)}{excerpt_length < post.content.rendered.length ? `...` : ``}</RawHTML>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
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
                {sbStyle}
            </style>
            {headerTitleTypographyFamily && (headerTitleTypographyFamily != 'Default') && (<GoogleFontLoad family={headerTitleTypographyFamily} weight={headerTitleTypographyWeight.replace("italic", "i")} />)}
            {categoryTypographyFamily && (categoryTypographyFamily != 'Default') && (<GoogleFontLoad family={categoryTypographyFamily} weight={categoryTypographyWeight.replace("italic", "i")} />)}
            {featuredTypographyFamily && (featuredTypographyFamily != 'Default') && (<GoogleFontLoad family={featuredTypographyFamily} weight={featuredTypographyWeight.replace("italic", "i")} />)}
            {sideTypographyFamily && (sideTypographyFamily != 'Default') && (<GoogleFontLoad family={sideTypographyFamily} weight={sideTypographyWeight.replace("italic", "i")} />)}
            {excerptTypographyFamily && (excerptTypographyFamily != 'Default') && (<GoogleFontLoad family={excerptTypographyFamily} weight={excerptTypographyWeight.replace("italic", "i")} />)}
            {metasTypographyFamily && (metasTypographyFamily != 'Default') && (<GoogleFontLoad family={metasTypographyFamily} weight={metasTypographyWeight.replace("italic", "i")} />)}
            <InspectorControls>
                <div className="sb-field sb-head-panel-tabs">
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
                                                {value: 'sb-title-style1', label: __('Style 1', 'smart-blocks')},
                                                {value: 'sb-title-style2', label: __('Style 2', 'smart-blocks')},
                                                {value: 'sb-title-style3', label: __('Style 3', 'smart-blocks')},
                                                {value: 'sb-title-style4', label: __('Style 4', 'smart-blocks')}
                                            ]}
                                        />
                                    </PanelBody>
                                )}
                                <PanelBody
                                    title={__('Content Filter', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__('Source', 'smart-blocks')}
                                        value={postsPostType}
                                        onChange={(postsPostType) => setAttributes({postsPostType})}
                                        options={allPostTypes}
                                    />

                                    <QueryTaxonomyControls
                                        value={categories}
                                        postType={postsPostType}
                                        onChange={(categories) => setAttributes({categories})}
                                    />

                                    <MultiSelectControl
                                        label={__('Exclude Posts', 'smart-blocks')}
                                        options={allPostsSelect}
                                        value={excludePosts}
                                        onChange={(excludePosts) => setAttributes({excludePosts})}
                                    />

                                    <SelectControl
                                        label={__('Order By', 'smart-blocks')}
                                        value={orderBy}
                                        onChange={(orderBy) => setAttributes({orderBy})}
                                        options={[
                                            {value: 'date', label: __('Date', 'smart-blocks')},
                                            {value: 'modified', label: __('Last Modified Date', 'smart-blocks')},
                                            {value: 'rand', label: __('Rand', 'smart-blocks')},
                                            {value: 'comment_count', label: __('Comment Count', 'smart-blocks')},
                                            {value: 'title', label: __('Title', 'smart-blocks')},
                                            {value: 'author', label: __('Show Post Author', 'smart-blocks')}
                                        ]}
                                    />

                                    <SelectControl
                                        label={__('Order')}
                                        value={order}
                                        onChange={(order) => setAttributes({order})}
                                        options={[
                                            {value: 'desc', label: __('Descending', 'smart-blocks')},
                                            {value: 'asc', label: __('Ascending', 'smart-blocks')}
                                        ]}
                                    />

                                    <RangeSliderControl
                                        label={__('Offset', 'smart-blocks')}
                                        value={offset}
                                        setValue={(offset) => setAttributes({offset})}
                                        min={0}
                                        max={10}
                                    />
                                </PanelBody>
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
                                    <RangeSliderControl
                                        label={__('Excerpt Length', 'smart-blocks')}
                                        value={featuredExcerptLength}
                                        setValue={(featuredExcerptLength) => setAttributes({featuredExcerptLength})}
                                        min={0}
                                        max={600}
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
                                    title={__('Side Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={sideImageSize}
                                        onChange={(sideImageSize) => setAttributes({sideImageSize})}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={sideImageHeight}
                                        setValue={(sideImageHeight) => setAttributes({sideImageHeight})}
                                        min={30}
                                        max={150}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Author', 'smart-blocks')}
                                        checked={sidePostAuthor}
                                        onChange={(sidePostAuthor) => setAttributes({sidePostAuthor})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={sidePostDate}
                                        onChange={(sidePostDate) => setAttributes({sidePostDate})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={sidePostComments}
                                        onChange={(sidePostComments) => setAttributes({sidePostComments})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Category', 'smart-blocks')}
                                        checked={sidePostCategory}
                                        onChange={(sidePostCategory) => setAttributes({sidePostCategory})}
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
                                            {value: 'relative_format', label: __('Relative Format (Ago)', 'smart-blocks')},
                                            {value: 'default', label: __('WordPress Default Format', 'smart-blocks')},
                                            {value: 'custom', label: __('Custom Format', 'smart-blocks')}
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
                                            setValue={value => setAttributes({headerColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Short Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerShortBorderColor}
                                            setValue={value => setAttributes({headerShortBorderColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Long Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerLongBorderColor}
                                            setValue={value => setAttributes({headerLongBorderColor: value})}
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
                                                setValue={value => setAttributes({categoryBackgroundColor: value})}
                                            />
                                            <ColorControl
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextColor}
                                                setValue={value => setAttributes({categoryTextColor: value})}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryBackgroundHoverColor}
                                                setValue={value => setAttributes({categoryBackgroundHoverColor: value})}
                                            />
                                            <ColorControl
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextHoverColor}
                                                setValue={value => setAttributes({categoryTextHoverColor: value})}
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
                                        setValue={value => setAttributes({titleColor: value})}
                                    />
                                    <ColorControl
                                        label={__('Title Color(Hover)', 'smart-blocks')}
                                        enableAlpha
                                        value={titleHoverColor}
                                        setValue={value => setAttributes({titleHoverColor: value})}
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
                                        <div tabTitle={__("Side Post", 'smart-blocks')}>
                                            <TypographyControl
                                                label={__('Typography', 'smart-blocks')}
                                                valueFamily={sideTypographyFamily}
                                                setValueFamily={value => setAttributes({sideTypographyFamily: value})}
                                                valueWeight={sideTypographyWeight}
                                                setValueWeight={value => setAttributes({sideTypographyWeight: value})}
                                                valueTextTransform={sideTypographyTextTransform}
                                                setValueTextTransform={value => setAttributes({sideTypographyTextTransform: value})}
                                                valueTextDecoration={sideTypographyTextDecoration}
                                                setValueTextDecoration={value => setAttributes({sideTypographyTextDecoration: value})}
                                                valueFontSizeSm={sideTypographyFontSizeSm}
                                                setValueFontSizeSm={value => setAttributes({sideTypographyFontSizeSm: value})}
                                                valueFontSizeMd={sideTypographyFontSizeMd}
                                                setValueFontSizeMd={value => setAttributes({sideTypographyFontSizeMd: value})}
                                                valueFontSize={sideTypographyFontSize}
                                                setValueFontSize={value => setAttributes({sideTypographyFontSize: value})}
                                                valueFontSizeUnit={sideTypographyFontSizeUnit}
                                                setValueFontSizeUnit={value => setAttributes({sideTypographyFontSizeUnit: value})}
                                                valueLetterSpacingSm={sideTypographyLetterSpacingSm}
                                                setValueLetterSpacingSm={value => setAttributes({sideTypographyLetterSpacingSm: value})}
                                                valueLetterSpacingMd={sideTypographyLetterSpacingMd}
                                                setValueLetterSpacingMd={value => setAttributes({sideTypographyLetterSpacingMd: value})}
                                                valueLetterSpacing={sideTypographyLetterSpacing}
                                                setValueLetterSpacing={value => setAttributes({sideTypographyLetterSpacing: value})}
                                                valueLetterSpacingUnit={sideTypographyLetterSpacingUnit}
                                                setValueLetterSpacingUnit={value => setAttributes({sideTypographyLetterSpacingUnit: value})}
                                                valueLineHeightSm={sideTypographyLineHeightSm}
                                                setValueLineHeightSm={value => setAttributes({sideTypographyLineHeightSm: value})}
                                                valueLineHeightMd={sideTypographyLineHeightMd}
                                                setValueLineHeightMd={value => setAttributes({sideTypographyLineHeightMd: value})}
                                                valueLineHeight={sideTypographyLineHeight}
                                                setValueLineHeight={value => setAttributes({sideTypographyLineHeight: value})}
                                                valueLineHeightUnit={sideTypographyLineHeightUnit}
                                                setValueLineHeightUnit={value => setAttributes({sideTypographyLineHeightUnit: value})}
                                            />
                                            <DimensionControl
                                                label={__('Margin', 'smart-blocks')}
                                                dimensionTop={sideTitleMarginTop}
                                                setDimensionTop={value => setAttributes({sideTitleMarginTop: value})}
                                                dimensionMdTop={sideTitleMarginMdTop}
                                                setDimensionMdTop={value => setAttributes({sideTitleMarginMdTop: value})}
                                                dimensionSmTop={sideTitleMarginSmTop}
                                                setDimensionSmTop={value => setAttributes({sideTitleMarginSmTop: value})}

                                                dimensionLeft={sideTitleMarginLeft}
                                                setDimensionLeft={value => setAttributes({sideTitleMarginLeft: value})}
                                                dimensionMdLeft={sideTitleMarginMdLeft}
                                                setDimensionMdLeft={value => setAttributes({sideTitleMarginMdLeft: value})}
                                                dimensionSmLeft={sideTitleMarginSmLeft}
                                                setDimensionSmLeft={value => setAttributes({sideTitleMarginSmLeft: value})}

                                                dimensionRight={sideTitleMarginRight}
                                                setDimensionRight={value => setAttributes({sideTitleMarginRight: value})}
                                                dimensionMdRight={sideTitleMarginMdRight}
                                                setDimensionMdRight={value => setAttributes({sideTitleMarginMdRight: value})}
                                                dimensionSmRight={sideTitleMarginSmRight}
                                                setDimensionSmRight={value => setAttributes({sideTitleMarginSmRight: value})}

                                                dimensionBottom={sideTitleMarginBottom}
                                                setDimensionBottom={value => setAttributes({sideTitleMarginBottom: value})}
                                                dimensionMdBottom={sideTitleMarginMdBottom}
                                                setDimensionMdBottom={value => setAttributes({sideTitleMarginMdBottom: value})}
                                                dimensionSmBottom={sideTitleMarginSmBottom}
                                                setDimensionSmBottom={value => setAttributes({sideTitleMarginSmBottom: value})}

                                                unit={sideTitleMarginUnit}
                                                setUnit={value => setAttributes({sideTitleMarginUnit: value})}
                                                responsive={!0}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Excerpt', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={excerptColor}
                                        setValue={value => setAttributes({excerptColor: value})}
                                    />
                                    <TypographyControl
                                        label={__('Typography', 'smart-blocks')}
                                        valueFamily={excerptTypographyFamily}
                                        setValueFamily={value => setAttributes({excerptTypographyFamily: value})}
                                        valueWeight={excerptTypographyWeight}
                                        setValueWeight={value => setAttributes({excerptTypographyWeight: value})}
                                        valueTextTransform={excerptTypographyTextTransform}
                                        setValueTextTransform={value => setAttributes({excerptTypographyTextTransform: value})}
                                        valueTextDecoration={excerptTypographyTextDecoration}
                                        setValueTextDecoration={value => setAttributes({excerptTypographyTextDecoration: value})}
                                        valueFontSizeSm={excerptTypographyFontSizeSm}
                                        setValueFontSizeSm={value => setAttributes({excerptTypographyFontSizeSm: value})}
                                        valueFontSizeMd={excerptTypographyFontSizeMd}
                                        setValueFontSizeMd={value => setAttributes({excerptTypographyFontSizeMd: value})}
                                        valueFontSize={excerptTypographyFontSize}
                                        setValueFontSize={value => setAttributes({excerptTypographyFontSize: value})}
                                        valueFontSizeUnit={excerptTypographyFontSizeUnit}
                                        setValueFontSizeUnit={value => setAttributes({excerptTypographyFontSizeUnit: value})}
                                        valueLetterSpacingSm={excerptTypographyLetterSpacingSm}
                                        setValueLetterSpacingSm={value => setAttributes({excerptTypographyLetterSpacingSm: value})}
                                        valueLetterSpacingMd={excerptTypographyLetterSpacingMd}
                                        setValueLetterSpacingMd={value => setAttributes({excerptTypographyLetterSpacingMd: value})}
                                        valueLetterSpacing={excerptTypographyLetterSpacing}
                                        setValueLetterSpacing={value => setAttributes({excerptTypographyLetterSpacing: value})}
                                        valueLetterSpacingUnit={excerptTypographyLetterSpacingUnit}
                                        setValueLetterSpacingUnit={value => setAttributes({excerptTypographyLetterSpacingUnit: value})}
                                        valueLineHeightSm={excerptTypographyLineHeightSm}
                                        setValueLineHeightSm={value => setAttributes({excerptTypographyLineHeightSm: value})}
                                        valueLineHeightMd={excerptTypographyLineHeightMd}
                                        setValueLineHeightMd={value => setAttributes({excerptTypographyLineHeightMd: value})}
                                        valueLineHeight={excerptTypographyLineHeight}
                                        setValueLineHeight={value => setAttributes({excerptTypographyLineHeight: value})}
                                        valueLineHeightUnit={excerptTypographyLineHeightUnit}
                                        setValueLineHeightUnit={value => setAttributes({excerptTypographyLineHeightUnit: value})}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Metas', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={postMetasColor}
                                        setValue={value => setAttributes({postMetasColor: value})}
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
                                    title={__('Layout', 'smart-blocks')}
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
                                                    setValue={value => setAttributes({borderNormalColor: value})}
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
                                                    setValue={value => setAttributes({borderHoverColor: value})}
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
                                        setValue={value => setAttributes({blockBgColor: value})}
                                    />
                                </PanelBody>
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps({
                    className: "sb-blocks sb-news-module-eight"
                })}>
                    <h2 className={headerClasses}>
                        <RichText
                            tagName="span"
                            value={headerTitle}
                            onChange={(headerTitle) => setAttributes({headerTitle})}
                            placeholder={__('Heading...', 'smart-blocks')}
                        />
                    </h2>
                    <div className="sb-news-module-eight-wrap">
                        {posts && posts.length > 0 && (
                            <div className="sb-big-block">
                                {postInner(posts[Object.keys(posts)[0]], 'featured')}
                            </div>
                        )}
                        {posts && posts.length > 1 && (
                            <div className="sb-small-block">
                                <div class="sb-small-block-wrap">
                                    {(function (post, i) {
                                        let rows = [];
                                        while (++i < post.length) {
                                            rows.push(postInner(posts[Object.keys(posts)[i]], ''))
                                        }
                                        return rows;
                                    })(posts, 0)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
