import {RawHTML, useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {
    InspectorControls,
    RichText,
    store as blockEditorStore,
    useBlockProps
} from '@wordpress/block-editor';
import {
    Button,
    PanelBody,
    TextControl,
    ToggleControl
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import {dateI18n, getSettings} from '@wordpress/date';
import classnames from 'classnames';
import OwlCarousel from 'react-owl-carousel';
import BorderControl from '../../controls/border';
import BoxShadowControl from '../../controls/boxshadow';
import ColorControl from '../../controls/color';
import DimensionControl from '../../controls/dimension';
import MultiSelectControl from '../../controls/multiselect';
import RangeSliderControl from '../../controls/rangeslider';
import SelectControl from '../../controls/select';
import TypographyControl from '../../controls/typography';
import GoogleFontLoad from '../../utils/googlefontload';
import {boxShadowVars, dimensionVars, getFontClass, responsiveDimensionVars, responsiveTypographyVars} from '../../utils/helper';
import QueryTaxonomyControls from '../../utils/querytaxonomycontrols';
import {AdvancedIcon, LayoutIcon, StyleIcon} from '../../utils/svgicons';
import Tabs from '../../utils/tabs';

export default function Edit({attributes, setAttributes}) {
    const [loop, setLoop] = useState(true);
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
        postImageSize,
        postImageHeight,
        postPostAuthor,
        postPostDate,
        postPostComments,
        postPostCategory,
        postExcerptLength,

        postTypographyFamily,
        postTypographyWeight,
        postTypographyTextTransform,
        postTypographyTextDecoration,
        postTypographyFontSizeSm,
        postTypographyFontSizeMd,
        postTypographyFontSize,
        postTypographyFontSizeUnit,
        postTypographyLetterSpacingSm,
        postTypographyLetterSpacingMd,
        postTypographyLetterSpacing,
        postTypographyLetterSpacingUnit,
        postTypographyLineHeightSm,
        postTypographyLineHeightMd,
        postTypographyLineHeight,
        postTypographyLineHeightUnit,

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

        postTitleMarginSmTop,
        postTitleMarginSmLeft,
        postTitleMarginSmRight,
        postTitleMarginSmBottom,
        postTitleMarginMdTop,
        postTitleMarginMdLeft,
        postTitleMarginMdRight,
        postTitleMarginMdBottom,
        postTitleMarginTop,
        postTitleMarginLeft,
        postTitleMarginRight,
        postTitleMarginBottom,
        postTitleMarginUnit,

        categoryBackgroundColor,
        categoryTextColor,
        categoryBackgroundHoverColor,
        categoryTextHoverColor,
        titleColor,
        titleHoverColor,
        postMetasColor,
        autoplay,
        pauseDuration,
        noOfSlides,
        noOfSlidesSm,
        noOfSlidesMd,
        slidesMargin,
        slidesMarginSm,
        slidesMarginMd,
        slidesStagepadding,
        slidesStagepaddingSm,
        slidesStagepaddingMd,
        nav,
        dots,
        noOfPosts,
        excerptColor,
        navNormalBgColor,
        navIconNormalColor,
        dotsBgColor,
        navHoverBgColor,
        navIconHoverColor,
        dotsBgColorHover,

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

        ${responsiveDimensionVars('listing-post-title-margin', postTitleMarginTop, postTitleMarginRight, postTitleMarginBottom, postTitleMarginLeft,
                postTitleMarginSmTop, postTitleMarginSmRight, postTitleMarginSmBottom, postTitleMarginSmLeft,
                postTitleMarginMdTop, postTitleMarginMdRight, postTitleMarginMdBottom, postTitleMarginMdLeft, postTitleMarginUnit)}

        ${postImageHeight ? '--sb-listing-post-thumb-height: ' + postImageHeight + '%;' : ''}
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

        ${responsiveTypographyVars('listing-post-title-typo', postTypographyFamily, postTypographyWeight, postTypographyTextTransform, postTypographyTextDecoration,
                    postTypographyFontSizeSm, postTypographyFontSizeMd, postTypographyFontSize, postTypographyFontSizeUnit,
                    postTypographyLetterSpacingSm, postTypographyLetterSpacingMd, postTypographyLetterSpacing, postTypographyLetterSpacingUnit,
                    postTypographyLineHeightSm, postTypographyLineHeightMd, postTypographyLineHeight, postTypographyLineHeightUnit
                )}

        ${responsiveTypographyVars('post-metas-typo', metasTypographyFamily, metasTypographyWeight, metasTypographyTextTransform, metasTypographyTextDecoration,
                    metasTypographyFontSizeSm, metasTypographyFontSizeMd, metasTypographyFontSize, metasTypographyFontSizeUnit,
                    metasTypographyLetterSpacingSm, metasTypographyLetterSpacingMd, metasTypographyLetterSpacing, metasTypographyLetterSpacingUnit,
                    metasTypographyLineHeightSm, metasTypographyLineHeightMd, metasTypographyLineHeight, metasTypographyLineHeightUnit
                )}

        ${responsiveTypographyVars('excerpt-typo', excerptTypographyFamily, excerptTypographyWeight, excerptTypographyTextTransform, excerptTypographyTextDecoration,
                    excerptTypographyFontSizeSm, excerptTypographyFontSizeMd, excerptTypographyFontSize, excerptTypographyFontSizeUnit,
                    excerptTypographyLetterSpacingSm, excerptTypographyLetterSpacingMd, excerptTypographyLetterSpacing, excerptTypographyLetterSpacingUnit,
                    excerptTypographyLineHeightSm, excerptTypographyLineHeightMd, excerptTypographyLineHeight, excerptTypographyLineHeightUnit
                )}

        ${imageBorderRadius ? '--sb-image-border-radius: ' + imageBorderRadius + 'px;' : ''}
        ${categoryBackgroundColor ? '--sb-category-background-color: ' + categoryBackgroundColor + ';' : ''}
        ${categoryTextColor ? '--sb-category-text-color: ' + categoryTextColor + ';' : ''}
        ${categoryBackgroundHoverColor ? '--sb-category-background-hover-color: ' + categoryBackgroundHoverColor + ';' : ''}
        ${categoryTextHoverColor ? '--sb-category-text-hover-color: ' + categoryTextHoverColor + ';' : ''}
        ${titleColor ? '--sb-title-color: ' + titleColor + ';' : ''}
        ${titleHoverColor ? '--sb-title-hover-color: ' + titleHoverColor + ';' : ''}

        ${postMetasColor ? '--sb-post-metas-color: ' + postMetasColor + ';' : ''}

        ${excerptColor ? '--sb-excerpt-color: ' + excerptColor + ';' : ''}
        ${navNormalBgColor ? '--sb-nav-normal-bg-color: ' + navNormalBgColor + ';' : ''}
        ${navIconNormalColor ? '--sb-nav-icon-normal-color: ' + navIconNormalColor + ';' : ''}
        ${dotsBgColor ? '--sb-dots-bg-color: ' + dotsBgColor + ';' : ''}
        ${navHoverBgColor ? '--sb-nav-hover-bg-color: ' + navHoverBgColor + ';' : ''}
        ${navIconHoverColor ? '--sb-nav-icon-hover-color: ' + navIconHoverColor + ';' : ''}
        ${dotsBgColorHover ? '--sb-dots-bg-color-hover: ' + dotsBgColorHover + ';' : ''}
    }`
    setAttributes({sbStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}")});

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

    const loopUpdate = () => {
        setLoop(false);
        setTimeout(function () {
            setLoop(true)
        }, 100)
    }

    const taxTermSelected = (taxonomy) => {
        var termIDs = categories && categories[taxonomy] ? categories[taxonomy] : [];
        return termIDs;
    }

    const query = {
        per_page: noOfPosts,
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

    const headerClasses = classnames(
        'sb-block-title',
        `${headerStyle}`,
        getFontClass(headerTitleTypographyFamily, headerTitleTypographyWeight, headerTitleTypographyTextTransform, headerTitleTypographyTextDecoration)
    );

    const allCats = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', 'category', {
            per_page: -1,
        });
    }, []);

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

    const responsive = {
        0: {
            items: parseInt(`${noOfSlidesSm ? noOfSlidesSm : 1}`),
            margin: parseInt(`${slidesMarginSm ? slidesMarginSm : 1}`),
            stagePadding: parseInt(`${slidesStagepaddingSm ? slidesStagepaddingSm : 1}`)
        },
        580: {
            items: parseInt(`${noOfSlidesMd ? noOfSlidesMd : 2}`),
            margin: parseInt(`${slidesMarginMd ? slidesMarginMd : 1}`),
            stagePadding: parseInt(`${slidesStagepaddingMd ? slidesStagepaddingMd : 1}`)
        },
        860: {
            items: parseInt(`${noOfSlides}`),
            margin: parseInt(`${slidesMargin}`),
            stagePadding: parseInt(`${slidesStagepadding}`)
        }
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
        const post_image_size = postImageSize ? postImageSize : 'large';
        return (
            <div className="sb-post-item" key={index}>
                <div className="sb-post-thumb">
                    <a href={post.link}>
                        <div className="sb-thumb-container">
                            {featuredImage && featuredImage.media_details && (
                                <img
                                    src={featuredImage.media_details.sizes?.[post_image_size] ? featuredImage.media_details.sizes?.[post_image_size].source_url : featuredImage.media_details.sizes?.['full'] ? featuredImage.media_details.sizes?.['full'].source_url : featuredImage.source_url}
                                    alt={featuredImage.alt_text}
                                />
                            )}
                        </div>
                    </a>
                    {postPostCategory && post.categories && (
                        <ul class="post-categories">
                            {post.categories && post.categories.map((catId, index) => (catInner(catId, index, true)))}
                        </ul>
                    )}
                </div>
                <div class="sb-post-content">
                    <h3 className={`sb-post-title ${getFontClass(postTypographyFamily, postTypographyWeight, postTypographyTextTransform, postTypographyTextDecoration)}`}>
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
                    {(postPostAuthor || postPostDate || postPostComments) && (
                        <div className="sb-post-meta">
                            {postAuthor && postPostAuthor && (
                                <span className={`sb-post-author`}>
                                    <i className="mdi-account"></i>
                                    {postAuthor.name}
                                </span>
                            )}
                            {post.date_gmt && postPostDate && (
                                <span className={`sb-post-date`}>
                                    <i className="mdi-clock-time-four-outline"></i>
                                    {dateFormat == 'relative_format' && `${post.relative_dates.created}`}
                                    {dateFormat == 'default' && dateI18n(getSettings().formats.date, post.date_gmt)}
                                    {dateFormat == 'custom' && dateI18n(customDateFormat, post.date_gmt)}
                                </span>
                            )}
                            {postPostComments && (
                                <span className={`sb-post-comment`}>
                                    <i className="mdi-comment-outline"></i>
                                    {postComment ? postComment.length : 0}
                                </span>
                            )}
                        </div>
                    )}
                    {postExcerptLength != 0 && (
                        <div className={`sb-excerpt`}>
                            {post.content.rendered && (
                                <RawHTML>{post.content.rendered.replace(/<[^>]+>/g, '').substring(0, postExcerptLength)}{postExcerptLength < post.content.rendered.length ? `...` : ``}</RawHTML>
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
            {postTypographyFamily && (postTypographyFamily != 'Default') && (<GoogleFontLoad family={postTypographyFamily} weight={postTypographyWeight.replace("italic", "i")} />)}
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
                        {'layout' === activeTab && (<>
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
                                title={__('Post Block', 'smart-blocks')}
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__('Image Size', 'smart-blocks')}
                                    options={getImageSizeOptions()}
                                    value={postImageSize}
                                    onChange={(postImageSize) => {setAttributes({postImageSize}); loopUpdate();}}
                                />
                                <RangeSliderControl
                                    label={__('Image Height (%)', 'smart-blocks')}
                                    value={postImageHeight}
                                    setValue={(postImageHeight) => {setAttributes({postImageHeight}); loopUpdate();}}
                                    min={30}
                                    max={150}
                                />
                                <RangeSliderControl
                                    label={__('No of Posts to Show', 'smart-blocks')}
                                    value={noOfPosts}
                                    setValue={(noOfPosts) => {setAttributes({noOfPosts}); loopUpdate();}}
                                    min={0}
                                    max={20}
                                />
                                <RangeSliderControl
                                    label={__('Excerpt Length', 'smart-blocks')}
                                    value={postExcerptLength}
                                    setValue={(postExcerptLength) => {setAttributes({postExcerptLength}); loopUpdate();}}
                                    min={0}
                                    max={600}
                                />
                                <ToggleControl
                                    label={__('Show Post Author', 'smart-blocks')}
                                    checked={postPostAuthor}
                                    onChange={(postPostAuthor) => {setAttributes({postPostAuthor}); loopUpdate();}}
                                />
                                <ToggleControl
                                    label={__('Show Post Date', 'smart-blocks')}
                                    checked={postPostDate}
                                    onChange={(postPostDate) => {setAttributes({postPostDate}); loopUpdate();}}
                                />
                                <ToggleControl
                                    label={__('Show Post Comments', 'smart-blocks')}
                                    checked={postPostComments}
                                    onChange={(postPostComments) => {setAttributes({postPostComments}); loopUpdate();}}
                                />
                                <ToggleControl
                                    label={__('Show Post Category', 'smart-blocks')}
                                    checked={postPostCategory}
                                    onChange={(postPostCategory) => {setAttributes({postPostCategory}); loopUpdate();}}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__('Carousel Settings', 'smart-blocks')}
                                initialOpen={false}
                            >
                                <ToggleControl
                                    label={__('Autoplay', 'smart-blocks')}
                                    checked={autoplay}
                                    onChange={(autoplay) => setAttributes({autoplay})}
                                />
                                {autoplay && (
                                    <RangeSliderControl
                                        label={__('Pause Duration', 'smart-blocks')}
                                        value={pauseDuration}
                                        setValue={(pauseDuration) => setAttributes({pauseDuration})}
                                        min={1}
                                        max={20}
                                    />)
                                }
                                <RangeSliderControl
                                    label={__('No of Slides', 'smart-blocks')}
                                    value={noOfSlides}
                                    setValue={(noOfSlides) => setAttributes({noOfSlides})}
                                    valueMd={noOfSlidesMd}
                                    setValueMd={(noOfSlidesMd) => setAttributes({noOfSlidesMd})}
                                    valueSm={noOfSlidesSm}
                                    setValueSm={(noOfSlidesSm) => setAttributes({noOfSlidesSm})}
                                    min={1}
                                    max={10}
                                    responsive={!0}
                                />
                                <RangeSliderControl
                                    label={__('Spacing Between Slides', 'smart-blocks')}
                                    value={slidesMargin}
                                    setValue={(slidesMargin) => setAttributes({slidesMargin})}
                                    valueMd={slidesMarginMd}
                                    setValueMd={(slidesMarginMd) => setAttributes({slidesMarginMd})}
                                    valueSm={slidesMarginSm}
                                    setValueSm={(slidesMarginSm) => setAttributes({slidesMarginSm})}
                                    min={1}
                                    max={100}
                                    responsive={!0}
                                />
                                <RangeSliderControl
                                    label={__('Stage Padding', 'smart-blocks')}
                                    value={slidesStagepadding}
                                    setValue={(slidesStagepadding) => setAttributes({slidesStagepadding})}
                                    valueMd={slidesStagepaddingMd}
                                    setValueMd={(slidesStagepaddingMd) => setAttributes({slidesStagepaddingMd})}
                                    valueSm={slidesStagepaddingSm}
                                    setValueSm={(slidesStagepaddingSm) => setAttributes({slidesStagepaddingSm})}
                                    min={0}
                                    max={300}
                                    responsive={!0}
                                />
                                <ToggleControl
                                    label={__('Nav Arrow', 'smart-blocks')}
                                    checked={nav}
                                    onChange={(nav) => setAttributes({nav})}
                                />
                                <ToggleControl
                                    label={__('Nav Dots', 'smart-blocks')}
                                    checked={dots}
                                    onChange={(dots) => setAttributes({dots})}
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
                                    onChange={(dateFormat) => {setAttributes({dateFormat}); loopUpdate();}}
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
                                        <div tabTitle={__("Normal", "smart-blocks")}>
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
                                    <TypographyControl
                                        label={__('Typography', 'smart-blocks')}
                                        valueFamily={postTypographyFamily}
                                        setValueFamily={value => setAttributes({postTypographyFamily: value})}
                                        valueWeight={postTypographyWeight}
                                        setValueWeight={value => setAttributes({postTypographyWeight: value})}
                                        valueTextTransform={postTypographyTextTransform}
                                        setValueTextTransform={value => setAttributes({postTypographyTextTransform: value})}
                                        valueTextDecoration={postTypographyTextDecoration}
                                        setValueTextDecoration={value => setAttributes({postTypographyTextDecoration: value})}
                                        valueFontSizeSm={postTypographyFontSizeSm}
                                        setValueFontSizeSm={value => setAttributes({postTypographyFontSizeSm: value})}
                                        valueFontSizeMd={postTypographyFontSizeMd}
                                        setValueFontSizeMd={value => setAttributes({postTypographyFontSizeMd: value})}
                                        valueFontSize={postTypographyFontSize}
                                        setValueFontSize={value => setAttributes({postTypographyFontSize: value})}
                                        valueFontSizeUnit={postTypographyFontSizeUnit}
                                        setValueFontSizeUnit={value => setAttributes({postTypographyFontSizeUnit: value})}
                                        valueLetterSpacingSm={postTypographyLetterSpacingSm}
                                        setValueLetterSpacingSm={value => setAttributes({postTypographyLetterSpacingSm: value})}
                                        valueLetterSpacingMd={postTypographyLetterSpacingMd}
                                        setValueLetterSpacingMd={value => setAttributes({postTypographyLetterSpacingMd: value})}
                                        valueLetterSpacing={postTypographyLetterSpacing}
                                        setValueLetterSpacing={value => setAttributes({postTypographyLetterSpacing: value})}
                                        valueLetterSpacingUnit={postTypographyLetterSpacingUnit}
                                        setValueLetterSpacingUnit={value => setAttributes({postTypographyLetterSpacingUnit: value})}
                                        valueLineHeightSm={postTypographyLineHeightSm}
                                        setValueLineHeightSm={value => setAttributes({postTypographyLineHeightSm: value})}
                                        valueLineHeightMd={postTypographyLineHeightMd}
                                        setValueLineHeightMd={value => setAttributes({postTypographyLineHeightMd: value})}
                                        valueLineHeight={postTypographyLineHeight}
                                        setValueLineHeight={value => setAttributes({postTypographyLineHeight: value})}
                                        valueLineHeightUnit={postTypographyLineHeightUnit}
                                        setValueLineHeightUnit={value => setAttributes({postTypographyLineHeightUnit: value})}
                                    />
                                    <DimensionControl
                                        label={__('Margin', 'smart-blocks')}
                                        dimensionTop={postTitleMarginTop}
                                        setDimensionTop={value => setAttributes({postTitleMarginTop: value})}
                                        dimensionMdTop={postTitleMarginMdTop}
                                        setDimensionMdTop={value => setAttributes({postTitleMarginMdTop: value})}
                                        dimensionSmTop={postTitleMarginSmTop}
                                        setDimensionSmTop={value => setAttributes({postTitleMarginSmTop: value})}

                                        dimensionLeft={postTitleMarginLeft}
                                        setDimensionLeft={value => setAttributes({postTitleMarginLeft: value})}
                                        dimensionMdLeft={postTitleMarginMdLeft}
                                        setDimensionMdLeft={value => setAttributes({postTitleMarginMdLeft: value})}
                                        dimensionSmLeft={postTitleMarginSmLeft}
                                        setDimensionSmLeft={value => setAttributes({postTitleMarginSmLeft: value})}

                                        dimensionRight={postTitleMarginRight}
                                        setDimensionRight={value => setAttributes({postTitleMarginRight: value})}
                                        dimensionMdRight={postTitleMarginMdRight}
                                        setDimensionMdRight={value => setAttributes({postTitleMarginMdRight: value})}
                                        dimensionSmRight={postTitleMarginSmRight}
                                        setDimensionSmRight={value => setAttributes({postTitleMarginSmRight: value})}

                                        dimensionBottom={postTitleMarginBottom}
                                        setDimensionBottom={value => setAttributes({postTitleMarginBottom: value})}
                                        dimensionMdBottom={postTitleMarginMdBottom}
                                        setDimensionMdBottom={value => setAttributes({postTitleMarginMdBottom: value})}
                                        dimensionSmBottom={postTitleMarginSmBottom}
                                        setDimensionSmBottom={value => setAttributes({postTitleMarginSmBottom: value})}

                                        unit={postTitleMarginUnit}
                                        setUnit={value => setAttributes({postTitleMarginUnit: value})}
                                        responsive={!0}
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
                                    title={__('Navigation', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={navNormalBgColor}
                                                setValue={value => setAttributes({navNormalBgColor: value})}
                                            />
                                            <ColorControl
                                                label={__('Icon Color', 'smart-blocks')}
                                                enableAlpha
                                                value={navIconNormalColor}
                                                setValue={value => setAttributes({navIconNormalColor: value})}
                                            />
                                            <ColorControl
                                                label={__('Dots Color', 'smart-blocks')}
                                                enableAlpha
                                                value={dotsBgColor}
                                                setValue={value => setAttributes({dotsBgColor: value})}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color (Hover)', 'smart-blocks')}
                                                enableAlpha
                                                value={navHoverBgColor}
                                                setValue={value => setAttributes({navHoverBgColor: value})}
                                            />
                                            <ColorControl
                                                label={__('Icon Color (Hover)', 'smart-blocks')}
                                                enableAlpha
                                                value={navIconHoverColor}
                                                setValue={value => setAttributes({navIconHoverColor: value})}
                                            />
                                            <ColorControl
                                                label={__('Dots Color (Active)', 'smart-blocks')}
                                                enableAlpha
                                                value={dotsBgColorHover}
                                                setValue={value => setAttributes({dotsBgColorHover: value})}
                                            />
                                        </div>
                                    </Tabs>
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
                                                values={borderNormalBoxShadow}
                                                onChange={(borderNormalBoxShadow) => setAttributes({borderNormalBoxShadow})}
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
                                                values={borderHoverBoxShadow}
                                                onChange={(borderHoverBoxShadow) => setAttributes({borderHoverBoxShadow})}
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
                    className: "sb-blocks sb-carousel-block"
                })}>
                    <h2 className={headerClasses}>
                        <RichText
                            tagName="span"
                            value={headerTitle}
                            onChange={(headerTitle) => setAttributes({headerTitle})}
                            placeholder={__('Heading...', 'smart-blocks')}
                        />
                    </h2>

                    <OwlCarousel
                        loop={loop}
                        autoplay={autoplay}
                        autoplayTimeout={pauseDuration * 1000}
                        nav={nav}
                        dots={dots}
                        navText={['<i class="mdi-chevron-left"></i>', '<i class="mdi-chevron-right"></i>']}
                        responsive={responsive}
                        className="sb-carousel-block-wrap">
                        {posts && posts.map((post, index) => (postInner(post, index)))}
                    </OwlCarousel>
                </div>
            </div>
        </>
    );
}
