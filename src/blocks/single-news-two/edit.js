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
    GradientPicker,
    Button
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import TypographyControl from '../../controls/typography';
import GoogleFontLoad from '../../utils/googlefontload';
import ColorControl from '../../controls/color';
import Tabs from '../../utils/tabs';
import SelectControl from '../../controls/select';
import DimensionControl from '../../controls/dimension';
import RangeSliderControl from '../../controls/rangeslider';
import MultiSelectControl from '../../controls/multiselect';
import BorderControl from '../../controls/border';
import BoxShadowControl from '../../controls/boxshadow';
import {responsiveTypographyVars, getFontClass, dimensionVars, boxShadowVars, responsiveDimensionVars} from '../../utils/helper';
import {LayoutIcon, StyleIcon, AdvancedIcon} from '../../utils/svgicons';
import classnames from 'classnames';

export default function Edit({attributes, setAttributes}) {
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        sbStyle,
        postId,
        categories,
        tags,

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

        postsPostType,
        offset,
        postImageSize,
        postImageHeight,
        postPostAuthor,
        postPostDate,
        postPostComments,

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

        titleColor,
        titleHoverColor,
        postMetasColor,
        postExcerptLength,
        contentAlignment,

        contentPaddingSmTop,
        contentPaddingSmLeft,
        contentPaddingSmRight,
        contentPaddingSmBottom,
        contentPaddingMdTop,
        contentPaddingMdLeft,
        contentPaddingMdRight,
        contentPaddingMdBottom,
        contentPaddingTop,
        contentPaddingLeft,
        contentPaddingRight,
        contentPaddingBottom,
        contentPaddingUnit,

        contentMarginSmTop,
        contentMarginSmLeft,
        contentMarginSmRight,
        contentMarginSmBottom,
        contentMarginMdTop,
        contentMarginMdLeft,
        contentMarginMdRight,
        contentMarginMdBottom,
        contentMarginTop,
        contentMarginLeft,
        contentMarginRight,
        contentMarginBottom,
        contentMarginUnit,

        excerptColor,
        contentOverlayBackground,
        filterOption,
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

        ${responsiveDimensionVars('content-padding', contentPaddingTop, contentPaddingRight, contentPaddingBottom, contentPaddingLeft,
                    contentPaddingSmTop, contentPaddingSmRight, contentPaddingSmBottom, contentPaddingSmLeft,
                    contentPaddingMdTop, contentPaddingMdRight, contentPaddingMdBottom, contentPaddingMdLeft, contentPaddingUnit)}

        ${responsiveDimensionVars('content-margin', contentMarginTop, contentMarginRight, contentMarginBottom, contentMarginLeft,
                        contentMarginSmTop, contentMarginSmRight, contentMarginSmBottom, contentMarginSmLeft,
                        contentMarginMdTop, contentMarginMdRight, contentMarginMdBottom, contentMarginMdLeft, contentMarginUnit)}

        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}

        ${postImageHeight ? '--sb-listing-post-thumb-height: ' + postImageHeight + '%;' : ''}
        ${excerptColor ? '--sb-excerpt-color: ' + excerptColor + ';' : ''}

        ${responsiveTypographyVars('excerpt-typo', excerptTypographyFamily, excerptTypographyWeight, excerptTypographyTextTransform, excerptTypographyTextDecoration,
                            excerptTypographyFontSizeSm, excerptTypographyFontSizeMd, excerptTypographyFontSize, excerptTypographyFontSizeUnit,
                            excerptTypographyLetterSpacingSm, excerptTypographyLetterSpacingMd, excerptTypographyLetterSpacing, excerptTypographyLetterSpacingUnit,
                            excerptTypographyLineHeightSm, excerptTypographyLineHeightMd, excerptTypographyLineHeight, excerptTypographyLineHeightUnit
                        )}

        ${titleColor ? '--sb-title-color: ' + titleColor + ';' : ''}
        ${titleHoverColor ? '--sb-title-hover-color: ' + titleHoverColor + ';' : ''}

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

        ${postMetasColor ? '--sb-post-metas-color: ' + postMetasColor + ';' : ''}

        ${contentOverlayBackground ? '--sb-content-overlay-gradient: ' + contentOverlayBackground + ';' : ''}
        ${imageBorderRadius ? '--sb-image-border-radius: ' + imageBorderRadius + 'px;' : ''}
    }`
    setAttributes({sbStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")});

    const query = {
        per_page: 1,
        _embed: true,
        offset: parseInt(offset ? offset : 0),
    };
    if (filterOption == 'categories') {
        query['categories'] = categories;
    } else if (filterOption == 'tags') {
        query['tags'] = tags;
    }
    const posts = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'post', query);
    }, [categories, tags, query, postId, offset]);

    const selectPosts = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'post', {
            per_page: -1,
            _embed: true,
        });
    }, [categories, postId, offset]);

    var allPostsSelect = [];
    selectPosts && selectPosts.map((post, index) => {
        allPostsSelect.push({
            value: post.id,
            label: post.title.rendered
        })
    })

    const allCats = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', 'category', {
            per_page: -1,
        });
    }, []);

    var allCatsSelect = [];
    allCats && allCats.map((cats, index) => {
        allCatsSelect.push({
            value: cats.id,
            label: cats.name
        })
    })

    const allTags = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', 'post_tag', {
            per_page: -1,
        });
    }, []);

    var allTagsSelect = [];
    allTags && allTags.map((tags, index) => {
        allTagsSelect.push({
            value: tags.id,
            label: tags.name
        })
    })

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
        const post_author = postPostAuthor;
        const post_date = postPostDate;
        const post_comment = postPostComments;
        const image_size = postImageSize ? postImageSize : 'large';
        const excerpt_length = postExcerptLength;
        return (
            <div className="sb-post-image sb-post-graident-title" key={index}>
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
                <div class={`sb-post-content sb-align-${contentAlignment}`}>
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
            {postTypographyFamily && (postTypographyFamily != 'Default') && (<GoogleFontLoad family={postTypographyFamily} weight={postTypographyWeight.replace("italic", "i")} />)}
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
                                <PanelBody
                                    title={__('Content Filter', 'smart-blocks')}
                                    initialOpen={false}
                                >

                                    <SelectControl
                                        label={__('Select Filter', 'smart-blocks')}
                                        value={filterOption}
                                        onChange={(filterOption) => setAttributes({filterOption})}
                                        options={[
                                            {value: 'single-post', label: __('By Post Title', 'smart-blocks')},
                                            {value: 'categories', label: __('By Categories', 'smart-blocks')},
                                            {value: 'tags', label: __('By Tags', 'smart-blocks')}
                                        ]}
                                    />

                                    {(!filterOption || filterOption == 'single-post') && (
                                        <SelectControl
                                            label={__('Select Post', 'smart-blocks')}
                                            options={allPostsSelect}
                                            value={postId}
                                            onChange={(postId) => setAttributes({postId})}
                                        />
                                    )}

                                    {filterOption == 'categories' && (
                                        <MultiSelectControl
                                            label={__('Categories', 'smart-blocks')}
                                            options={allCatsSelect}
                                            value={categories}
                                            onChange={(categories) => setAttributes({categories})}
                                        />
                                    )}

                                    {filterOption == 'tags' && (
                                        <MultiSelectControl
                                            label={__('Tags', 'smart-blocks')}
                                            options={allTagsSelect}
                                            value={tags}
                                            onChange={(tags) => setAttributes({tags})}
                                        />
                                    )}
                                    {
                                        filterOption != 'single-post' && (<RangeSliderControl
                                            label={__('Offset', 'smart-blocks')}
                                            value={offset}
                                            setValue={(offset) => setAttributes({offset})}
                                            min={0}
                                            max={10}
                                        />
                                        )}
                                </PanelBody>
                                <PanelBody
                                    title={__('Post Meta', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ToggleControl
                                        label={__('Show Post Author', 'smart-blocks')}
                                        checked={postPostAuthor}
                                        onChange={(postPostAuthor) => setAttributes({postPostAuthor})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={postPostDate}
                                        onChange={(postPostDate) => setAttributes({postPostDate})}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={postPostComments}
                                        onChange={(postPostComments) => setAttributes({postPostComments})}
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
                                <PanelBody
                                    title={__('Post Excerpt', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <RangeSliderControl
                                        label={__('Excerpt Length', 'smart-blocks')}
                                        value={postExcerptLength}
                                        setValue={(postExcerptLength) => setAttributes({postExcerptLength})}
                                        min={0}
                                        max={600}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Image Settings', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={postImageSize}
                                        onChange={(postImageSize) => setAttributes({postImageSize})}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={postImageHeight}
                                        setValue={(postImageHeight) => setAttributes({postImageHeight})}
                                        min={30}
                                        max={150}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Border Radius(px)', 'smart-blocks')}
                                        value={imageBorderRadius}
                                        setValue={(imageBorderRadius) => setAttributes({imageBorderRadius})}
                                        min={0}
                                        max={30}
                                    />
                                    <SelectControl
                                        label={__('Content Alignment', 'smart-blocks')}
                                        value={contentAlignment}
                                        onChange={(contentAlignment) => setAttributes({contentAlignment})}
                                        options={[
                                            {value: 'left', label: 'Left'},
                                            {value: 'center', label: 'Center'},
                                            {value: 'right', label: 'Right'}
                                        ]}
                                    />
                                </PanelBody>
                            </>
                        ) || 'style' === activeTab && (
                            <>
                                <PanelBody
                                    title="Content"
                                    initialOpen={false}
                                >
                                    <GradientPicker
                                        value={contentOverlayBackground}
                                        onChange={(contentOverlayBackground) => setAttributes({contentOverlayBackground})}
                                        gradients={[
                                            {
                                                name: 'JShine',
                                                gradient: 'linear-gradient(0deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                                slug: 'jshine',
                                            },
                                            {
                                                name: 'Moonlit Asteroid',
                                                gradient: 'linear-gradient(0deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                                                slug: 'moonlit-asteroid',
                                            },
                                            {
                                                name: 'Rastafarie',
                                                gradient: 'linear-gradient(0deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                                                slug: 'rastafari',
                                            },
                                        ]}
                                    />
                                    <DimensionControl
                                        label={__('Content Padding', 'smart-blocks')}
                                        dimensionTop={contentPaddingTop}
                                        setDimensionTop={value => setAttributes({contentPaddingTop: value})}
                                        dimensionMdTop={contentPaddingMdTop}
                                        setDimensionMdTop={value => setAttributes({contentPaddingMdTop: value})}
                                        dimensionSmTop={contentPaddingSmTop}
                                        setDimensionSmTop={value => setAttributes({contentPaddingSmTop: value})}

                                        dimensionLeft={contentPaddingLeft}
                                        setDimensionLeft={value => setAttributes({contentPaddingLeft: value})}
                                        dimensionMdLeft={contentPaddingMdLeft}
                                        setDimensionMdLeft={value => setAttributes({contentPaddingMdLeft: value})}
                                        dimensionSmLeft={contentPaddingSmLeft}
                                        setDimensionSmLeft={value => setAttributes({contentPaddingSmLeft: value})}

                                        dimensionRight={contentPaddingRight}
                                        setDimensionRight={value => setAttributes({contentPaddingRight: value})}
                                        dimensionMdRight={contentPaddingMdRight}
                                        setDimensionMdRight={value => setAttributes({contentPaddingMdRight: value})}
                                        dimensionSmRight={contentPaddingSmRight}
                                        setDimensionSmRight={value => setAttributes({contentPaddingSmRight: value})}

                                        dimensionBottom={contentPaddingBottom}
                                        setDimensionBottom={value => setAttributes({contentPaddingBottom: value})}
                                        dimensionMdBottom={contentPaddingMdBottom}
                                        setDimensionMdBottom={value => setAttributes({contentPaddingMdBottom: value})}
                                        dimensionSmBottom={contentPaddingSmBottom}
                                        setDimensionSmBottom={value => setAttributes({contentPaddingSmBottom: value})}

                                        unit={contentPaddingUnit}
                                        setUnit={value => setAttributes({contentPaddingUnit: value})}
                                        responsive={!0}
                                    />
                                    <DimensionControl
                                        label={__('Content Margin', 'smart-blocks')}
                                        dimensionTop={contentMarginTop}
                                        setDimensionTop={value => setAttributes({contentMarginTop: value})}
                                        dimensionMdTop={contentMarginMdTop}
                                        setDimensionMdTop={value => setAttributes({contentMarginMdTop: value})}
                                        dimensionSmTop={contentMarginSmTop}
                                        setDimensionSmTop={value => setAttributes({contentMarginSmTop: value})}

                                        dimensionLeft={contentMarginLeft}
                                        setDimensionLeft={value => setAttributes({contentMarginLeft: value})}
                                        dimensionMdLeft={contentMarginMdLeft}
                                        setDimensionMdLeft={value => setAttributes({contentMarginMdLeft: value})}
                                        dimensionSmLeft={contentMarginSmLeft}
                                        setDimensionSmLeft={value => setAttributes({contentMarginSmLeft: value})}

                                        dimensionRight={contentMarginRight}
                                        setDimensionRight={value => setAttributes({contentMarginRight: value})}
                                        dimensionMdRight={contentMarginMdRight}
                                        setDimensionMdRight={value => setAttributes({contentMarginMdRight: value})}
                                        dimensionSmRight={contentMarginSmRight}
                                        setDimensionSmRight={value => setAttributes({contentMarginSmRight: value})}

                                        dimensionBottom={contentMarginBottom}
                                        setDimensionBottom={value => setAttributes({contentMarginBottom: value})}
                                        dimensionMdBottom={contentMarginMdBottom}
                                        setDimensionMdBottom={value => setAttributes({contentMarginMdBottom: value})}
                                        dimensionSmBottom={contentMarginSmBottom}
                                        setDimensionSmBottom={value => setAttributes({contentMarginSmBottom: value})}

                                        unit={contentMarginUnit}
                                        setUnit={value => setAttributes({contentMarginUnit: value})}
                                        responsive={!0}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title="Post Title"
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={titleColor}
                                        setValue={(titleColor) => setAttributes({titleColor})}
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
                                    title="Post Metas"
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
                                <PanelBody
                                    title="Post Excerpt"
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={excerptColor}
                                        setValue={(excerptColor) => setAttributes({excerptColor})}
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
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps({
                    className: "sb-blocks sb-single-post"
                })}>
                    <div className="sb-single-post-two">
                        {filterOption == 'single-post' ? selectPosts && postId ? postInner(selectPosts.filter(spost => spost.id == postId)[0]) : posts && posts.map((post) => (postInner(post))) : posts && posts.map((post) => (postInner(post)))}
                    </div>
                </div>
            </div>
        </>
    );
}
