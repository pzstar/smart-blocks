import { __ } from '@wordpress/i18n';
import { RawHTML, useState } from '@wordpress/element';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { format, dateI18n, getSettings } from '@wordpress/date';
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
import { useSelect } from '@wordpress/data';
import Typography from '../utils/typography';
import GoogleFontLoad from '../utils/googlefontload';
import Color from '../utils/color';
import Tabs from '../utils/tabs';
import Select from '../utils/select';
import Dimension from '../utils/dimension';
import QueryTaxonomyControls from '../utils/querytaxonomycontrols';
import CustomRangeControl from '../utils/customrangecontrol';
import TokenMultiSelectControl from '../utils/token-multiselect-control';
import Border from '../utils/border';
import BoxShadow from '../utils/boxshadow';
import { checkDefault, getFontClass } from '../utils/helper';
import { LayoutIcon, StyleIcon, AdvancedIcon } from '../utils/svgicons';
import classnames from 'classnames';

export default function Edit({ attributes, setAttributes }) {
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        style,
        postId,
        categories,
        tags,
        excerptTypography,
        postsPostType,
        offset,
        postImageSize,
        postImageHeight,
        postPostAuthor,
        postPostDate,
        postPostComments,
        postTypography,
        metasTypography,
        dateFormat,
        customDateFormat,
        imageBorderRadius,
        postTitleMargin,
        titleColor,
        titleHoverColor,
        postMetasColor,
        postExcerptLength,
        contentAlignment,
        contentPadding,
        contentMargin,
        excerptColor,
        contentOverlayBackground,
        filterOption,
        blockMargin,
        blockPadding,
        borderNormal,
        borderHover,
        borderNormalColor,
        borderHoverColor,
        borderNormalWidth,
        borderHoverWidth,
        borderNormalRadius,
        borderHoverRadius,
        borderNormalBoxShadow,
        borderHoverBoxShadow,
        blockBgColor
    } = attributes;

    setAttributes({ id: useBlockProps()['id'] });
    const stylesCSS = `#${id} {
        ${borderNormal ? '--sb-border-normal: ' + borderNormal + ';' : ''}
        ${borderHover ? '--sb-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor + ';' : ''}
        ${borderNormalWidth.top ? '--sb-border-normal-width-top: ' + borderNormalWidth.top + borderNormalWidth.unit + ';' : ''}
        ${borderNormalWidth.right ? '--sb-border-normal-width-right: ' + borderNormalWidth.right + borderNormalWidth.unit + ';' : ''}
        ${borderNormalWidth.bottom ? '--sb-border-normal-width-bottom: ' + borderNormalWidth.bottom + borderNormalWidth.unit + ';' : ''}
        ${borderNormalWidth.left ? '--sb-border-normal-width-left: ' + borderNormalWidth.left + borderNormalWidth.unit + ';' : ''}
        ${borderHoverWidth.top ? '--sb-border-hover-width-top: ' + borderHoverWidth.top + borderHoverWidth.unit + ';' : ''}
        ${borderHoverWidth.right ? '--sb-border-hover-width-right: ' + borderHoverWidth.right + borderHoverWidth.unit + ';' : ''}
        ${borderHoverWidth.bottom ? '--sb-border-hover-width-bottom: ' + borderHoverWidth.bottom + borderHoverWidth.unit + ';' : ''}
        ${borderHoverWidth.left ? '--sb-border-hover-width-left: ' + borderHoverWidth.left + borderHoverWidth.unit + ';' : ''}
        ${borderNormalRadius.top ? '--sb-border-normal-radius-top: ' + borderNormalRadius.top + borderNormalRadius.unit + ';' : ''}
        ${borderNormalRadius.right ? '--sb-border-normal-radius-right: ' + borderNormalRadius.right + borderNormalRadius.unit + ';' : ''}
        ${borderNormalRadius.bottom ? '--sb-border-normal-radius-bottom: ' + borderNormalRadius.bottom + borderNormalRadius.unit + ';' : ''}
        ${borderNormalRadius.left ? '--sb-border-normal-radius-left: ' + borderNormalRadius.left + borderNormalRadius.unit + ';' : ''}
        ${borderHoverRadius.top ? '--sb-border-hover-radius-top: ' + borderHoverRadius.top + borderHoverRadius.unit + ';' : ''}
        ${borderHoverRadius.right ? '--sb-border-hover-radius-right: ' + borderHoverRadius.right + borderHoverRadius.unit + ';' : ''}
        ${borderHoverRadius.bottom ? '--sb-border-hover-radius-bottom: ' + borderHoverRadius.bottom + borderHoverRadius.unit + ';' : ''}
        ${borderHoverRadius.left ? '--sb-border-hover-radius-left: ' + borderHoverRadius.left + borderHoverRadius.unit + ';' : ''}
        ${borderNormalBoxShadow.horizontal ? '--sb-border-normal-box-shadow-horizontal: ' + borderNormalBoxShadow.horizontal + 'px;' : ''}
        ${borderNormalBoxShadow.vertical ? '--sb-border-normal-box-shadow-vertical: ' + borderNormalBoxShadow.vertical + 'px;' : ''}
        ${borderNormalBoxShadow.blur ? '--sb-border-normal-box-shadow-blur: ' + borderNormalBoxShadow.blur + 'px;' : ''}
        ${borderNormalBoxShadow.spread ? '--sb-border-normal-box-shadow-spread: ' + borderNormalBoxShadow.spread + 'px;' : ''}
        ${borderNormalBoxShadow.color ? '--sb-border-normal-box-shadow-color: ' + borderNormalBoxShadow.color + ';' : ''}
        ${borderNormalBoxShadow.inset ? '--sb-border-normal-box-shadow-inset: ' + borderNormalBoxShadow.inset + ';' : ''}
        ${borderHoverBoxShadow.horizontal ? '--sb-border-hover-box-shadow-horizontal: ' + borderHoverBoxShadow.horizontal + 'px;' : ''}
        ${borderHoverBoxShadow.vertical ? '--sb-border-hover-box-shadow-vertical: ' + borderHoverBoxShadow.vertical + 'px;' : ''}
        ${borderHoverBoxShadow.blur ? '--sb-border-hover-box-shadow-blur: ' + borderHoverBoxShadow.blur + 'px;' : ''}
        ${borderHoverBoxShadow.spread ? '--sb-border-hover-box-shadow-spread: ' + borderHoverBoxShadow.spread + 'px;' : ''}
        ${borderHoverBoxShadow.color ? '--sb-border-hover-box-shadow-color: ' + borderHoverBoxShadow.color + ';' : ''}
        ${borderHoverBoxShadow.inset ? '--sb-border-hover-box-shadow-inset: ' + borderHoverBoxShadow.inset + ';' : ''}
        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}
        ${blockMargin.sm.top ? '--sb-block-margin-top-sm: ' + blockMargin.sm.top + blockMargin.unit + ';' : ''}
        ${blockMargin.sm.right ? '--sb-block-margin-right-sm: ' + blockMargin.sm.right + blockMargin.unit + ';' : ''}
        ${blockMargin.sm.bottom ? '--sb-block-margin-bottom-sm: ' + blockMargin.sm.bottom + blockMargin.unit + ';' : ''}
        ${blockMargin.sm.left ? '--sb-block-margin-left-sm: ' + blockMargin.sm.left + blockMargin.unit + ';' : ''}
        ${blockMargin.md.top ? '--sb-block-margin-top-md: ' + blockMargin.md.top + blockMargin.unit + ';' : ''}
        ${blockMargin.md.right ? '--sb-block-margin-right-md: ' + blockMargin.md.right + blockMargin.unit + ';' : ''}
        ${blockMargin.md.bottom ? '--sb-block-margin-bottom-md: ' + blockMargin.md.bottom + blockMargin.unit + ';' : ''}
        ${blockMargin.md.left ? '--sb-block-margin-left-md: ' + blockMargin.md.left + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.top ? '--sb-block-margin-top-lg: ' + blockMargin.lg.top + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.right ? '--sb-block-margin-right-lg: ' + blockMargin.lg.right + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.bottom ? '--sb-block-margin-bottom-lg: ' + blockMargin.lg.bottom + blockMargin.unit + ';' : ''}
        ${blockMargin.lg.left ? '--sb-block-margin-left-lg: ' + blockMargin.lg.left + blockMargin.unit + ';' : ''}
        ${blockPadding.sm.top ? '--sb-block-padding-top-sm: ' + blockPadding.sm.top + blockPadding.unit + ';' : ''}
        ${blockPadding.sm.right ? '--sb-block-padding-right-sm: ' + blockPadding.sm.right + blockPadding.unit + ';' : ''}
        ${blockPadding.sm.bottom ? '--sb-block-padding-bottom-sm: ' + blockPadding.sm.bottom + blockPadding.unit + ';' : ''}
        ${blockPadding.sm.left ? '--sb-block-padding-left-sm: ' + blockPadding.sm.left + blockPadding.unit + ';' : ''}
        ${blockPadding.md.top ? '--sb-block-padding-top-md: ' + blockPadding.md.top + blockPadding.unit + ';' : ''}
        ${blockPadding.md.right ? '--sb-block-padding-right-md: ' + blockPadding.md.right + blockPadding.unit + ';' : ''}
        ${blockPadding.md.bottom ? '--sb-block-padding-bottom-md: ' + blockPadding.md.bottom + blockPadding.unit + ';' : ''}
        ${blockPadding.md.left ? '--sb-block-padding-left-md: ' + blockPadding.md.left + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.top ? '--sb-block-padding-top-lg: ' + blockPadding.lg.top + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.right ? '--sb-block-padding-right-lg: ' + blockPadding.lg.right + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.bottom ? '--sb-block-padding-bottom-lg: ' + blockPadding.lg.bottom + blockPadding.unit + ';' : ''}
        ${blockPadding.lg.left ? '--sb-block-padding-left-lg: ' + blockPadding.lg.left + blockPadding.unit + ';' : ''}
        ${postImageHeight ? '--sb-listing-post-thumb-height: ' + postImageHeight + '%;' : ''}
        ${excerptColor ? '--sb-excerpt-color: ' + excerptColor + ';' : ''}
        ${excerptTypography.family ? '--sb-excerpt-typo-family: ' + checkDefault(excerptTypography.family) + ';' : ''}
        ${excerptTypography.weight ? '--sb-excerpt-typo-weight: ' + checkDefault(excerptTypography.weight.replace(/\D/g, ''), excerptTypography.weight) + ';' : ''}
        ${excerptTypography.weight ? '--sb-excerpt-typo-style: ' + checkDefault(excerptTypography.weight.replace(/\d+/g, ''), excerptTypography.weight) + ';' : ''}
        ${excerptTypography.textTransform ? '--sb-excerpt-typo-tt: ' + excerptTypography.textTransform + ';' : ''}
        ${excerptTypography.textDecoration ? '--sb-excerpt-typo-td: ' + excerptTypography.textDecoration + ';' : ''}
        ${excerptTypography.fontSize.sm ? '--sb-excerpt-typo-fs-sm: ' + excerptTypography.fontSize.sm + excerptTypography.fontSize.unit + ';' : ''}
        ${excerptTypography.fontSize.md ? '--sb-excerpt-typo-fs-md: ' + excerptTypography.fontSize.md + excerptTypography.fontSize.unit + ';' : ''}
        ${excerptTypography.fontSize.lg ? '--sb-excerpt-typo-fs-lg: ' + excerptTypography.fontSize.lg + excerptTypography.fontSize.unit + ';' : ''}
        ${excerptTypography.letterSpacing.sm ? '--sb-excerpt-typo-ls-sm: ' + excerptTypography.letterSpacing.sm + excerptTypography.letterSpacing.unit + ';' : ''}
        ${excerptTypography.letterSpacing.md ? '--sb-excerpt-typo-ls-md: ' + excerptTypography.letterSpacing.md + excerptTypography.letterSpacing.unit + ';' : ''}
        ${excerptTypography.letterSpacing.lg ? '--sb-excerpt-typo-ls-lg: ' + excerptTypography.letterSpacing.lg + excerptTypography.letterSpacing.unit + ';' : ''}
        ${excerptTypography.lineHeight.sm ? '--sb-excerpt-typo-lh-sm: ' + excerptTypography.lineHeight.sm + excerptTypography.lineHeight.unit + ';' : ''}
        ${excerptTypography.lineHeight.md ? '--sb-excerpt-typo-lh-md: ' + excerptTypography.lineHeight.md + excerptTypography.lineHeight.unit + ';' : ''}
        ${excerptTypography.lineHeight.lg ? '--sb-excerpt-typo-lh-lg: ' + excerptTypography.lineHeight.lg + excerptTypography.lineHeight.unit + ';' : ''}
        ${titleColor ? '--sb-title-color: ' + titleColor + ';' : ''}
        ${titleHoverColor ? '--sb-title-hover-color: ' + titleHoverColor + ';' : ''}
        ${postTypography.family ? '--sb-listing-post-title-typo-family: ' + checkDefault(postTypography.family) + ';' : ''}
        ${postTypography.weight ? '--sb-listing-post-title-typo-weight: ' + checkDefault(postTypography.weight.replace(/\D/g, ''), postTypography.weight) + ';' : ''}
        ${postTypography.weight ? '--sb-listing-post-title-typo-style: ' + checkDefault(postTypography.weight.replace(/\d+/g, ''), postTypography.weight) + ';' : ''}
        ${postTypography.textTransform ? '--sb-listing-post-title-typo-tt: ' + postTypography.textTransform + ';' : ''}
        ${postTypography.textDecoration ? '--sb-listing-post-title-typo-td: ' + postTypography.textDecoration + ';' : ''}
        ${postTypography.fontSize.sm ? '--sb-listing-post-title-typo-fs-sm: ' + postTypography.fontSize.sm + postTypography.fontSize.unit + ';' : ''}
        ${postTypography.fontSize.md ? '--sb-listing-post-title-typo-fs-md: ' + postTypography.fontSize.md + postTypography.fontSize.unit + ';' : ''}
        ${postTypography.fontSize.lg ? '--sb-listing-post-title-typo-fs-lg: ' + postTypography.fontSize.lg + postTypography.fontSize.unit + ';' : ''}
        ${postTypography.letterSpacing.sm ? '--sb-listing-post-title-typo-ls-sm: ' + postTypography.letterSpacing.sm + postTypography.letterSpacing.unit + ';' : ''}
        ${postTypography.letterSpacing.md ? '--sb-listing-post-title-typo-ls-md: ' + postTypography.letterSpacing.md + postTypography.letterSpacing.unit + ';' : ''}
        ${postTypography.letterSpacing.lg ? '--sb-listing-post-title-typo-ls-lg: ' + postTypography.letterSpacing.lg + postTypography.letterSpacing.unit + ';' : ''}
        ${postTypography.lineHeight.sm ? '--sb-listing-post-title-typo-lh-sm: ' + postTypography.lineHeight.sm + postTypography.lineHeight.unit + ';' : ''}
        ${postTypography.lineHeight.md ? '--sb-listing-post-title-typo-lh-md: ' + postTypography.lineHeight.md + postTypography.lineHeight.unit + ';' : ''}
        ${postTypography.lineHeight.lg ? '--sb-listing-post-title-typo-lh-lg: ' + postTypography.lineHeight.lg + postTypography.lineHeight.unit + ';' : ''}
        ${postTitleMargin.sm.top ? '--sb-listing-post-title-margin-top-sm: ' + postTitleMargin.sm.top + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.sm.right ? '--sb-listing-post-title-margin-right-sm: ' + postTitleMargin.sm.righ + postTitleMargin.unitt + ';' : ''}
        ${postTitleMargin.sm.bottom ? '--sb-listing-post-title-margin-bottom-sm: ' + postTitleMargin.sm.bottom + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.sm.left ? '--sb-listing-post-title-margin-left-sm: ' + postTitleMargin.sm.left + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.md.top ? '--sb-listing-post-title-margin-top-md: ' + postTitleMargin.md.top + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.md.right ? '--sb-listing-post-title-margin-right-md: ' + postTitleMargin.md.right + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.md.bottom ? '--sb-listing-post-title-margin-bottom-md: ' + postTitleMargin.md.bottom + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.md.left ? '--sb-listing-post-title-margin-left-md: ' + postTitleMargin.md.left + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.lg.top ? '--sb-listing-post-title-margin-top-lg: ' + postTitleMargin.lg.top + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.lg.right ? '--sb-listing-post-title-margin-right-lg: ' + postTitleMargin.lg.right + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.lg.bottom ? '--sb-listing-post-title-margin-bottom-lg: ' + postTitleMargin.lg.bottom + postTitleMargin.unit + ';' : ''}
        ${postTitleMargin.lg.left ? '--sb-listing-post-title-margin-left-lg: ' + postTitleMargin.lg.left + postTitleMargin.unit + ';' : ''}
        ${postMetasColor ? '--sb-post-metas-color: ' + postMetasColor + ';' : ''}
        ${metasTypography.family ? '--sb-post-metas-typo-family: ' + checkDefault(metasTypography.family) + ';' : ''}
        ${metasTypography.weight ? '--sb-post-metas-typo-weight: ' + checkDefault(metasTypography.weight.replace(/\D/g, ''), metasTypography.weight) + ';' : ''}
        ${metasTypography.weight ? '--sb-post-metas-typo-style: ' + checkDefault(metasTypography.weight.replace(/\d+/g, ''), metasTypography.weight) + ';' : ''}
        ${metasTypography.textTransform ? '--sb-post-metas-typo-tt: ' + metasTypography.textTransform + ';' : ''}
        ${metasTypography.textDecoration ? '--sb-post-metas-typo-td: ' + metasTypography.textDecoration + ';' : ''}
        ${metasTypography.fontSize.sm ? '--sb-post-metas-typo-fs-sm: ' + metasTypography.fontSize.sm + metasTypography.fontSize.unit + ';' : ''}
        ${metasTypography.fontSize.md ? '--sb-post-metas-typo-fs-md: ' + metasTypography.fontSize.md + metasTypography.fontSize.unit + ';' : ''}
        ${metasTypography.fontSize.lg ? '--sb-post-metas-typo-fs-lg: ' + metasTypography.fontSize.lg + metasTypography.fontSize.unit + ';' : ''}
        ${metasTypography.letterSpacing.sm ? '--sb-post-metas-typo-ls-sm: ' + metasTypography.letterSpacing.sm + metasTypography.letterSpacing.unit + ';' : ''}
        ${metasTypography.letterSpacing.md ? '--sb-post-metas-typo-ls-md: ' + metasTypography.letterSpacing.md + metasTypography.letterSpacing.unit + ';' : ''}
        ${metasTypography.letterSpacing.lg ? '--sb-post-metas-typo-ls-lg: ' + metasTypography.letterSpacing.lg + metasTypography.letterSpacing.unit + ';' : ''}
        ${metasTypography.lineHeight.sm ? '--sb-post-metas-typo-lh-sm: ' + metasTypography.lineHeight.sm + metasTypography.lineHeight.unit + ';' : ''}
        ${metasTypography.lineHeight.md ? '--sb-post-metas-typo-lh-md: ' + metasTypography.lineHeight.md + metasTypography.lineHeight.unit + ';' : ''}
        ${metasTypography.lineHeight.lg ? '--sb-post-metas-typo-lh-lg: ' + metasTypography.lineHeight.lg + metasTypography.lineHeight.unit + ';' : ''}
        ${contentPadding.sm.top ? '--sb-content-padding-top-sm: ' + contentPadding.sm.top + contentPadding.unit + ';' : ''}
        ${contentPadding.sm.right ? '--sb-content-padding-right-sm: ' + contentPadding.sm.right + contentPadding.unit + ';' : ''}
        ${contentPadding.sm.bottom ? '--sb-content-padding-bottom-sm: ' + contentPadding.sm.bottom + contentPadding.unit + ';' : ''}
        ${contentPadding.sm.left ? '--sb-content-padding-left-sm: ' + contentPadding.sm.left + contentPadding.unit + ';' : ''}
        ${contentPadding.md.top ? '--sb-content-padding-top-md: ' + contentPadding.md.top + contentPadding.unit + ';' : ''}
        ${contentPadding.md.right ? '--sb-content-padding-right-md: ' + contentPadding.md.right + contentPadding.unit + ';' : ''}
        ${contentPadding.md.bottom ? '--sb-content-padding-bottom-md: ' + contentPadding.md.bottom + contentPadding.unit + ';' : ''}
        ${contentPadding.md.left ? '--sb-content-padding-left-md: ' + contentPadding.md.left + contentPadding.unit + ';' : ''}
        ${contentPadding.lg.top ? '--sb-content-padding-top-lg: ' + contentPadding.lg.top + contentPadding.unit + ';' : ''}
        ${contentPadding.lg.right ? '--sb-content-padding-right-lg: ' + contentPadding.lg.right + contentPadding.unit + ';' : ''}
        ${contentPadding.lg.bottom ? '--sb-content-padding-bottom-lg: ' + contentPadding.lg.bottom + contentPadding.unit + ';' : ''}
        ${contentPadding.lg.left ? '--sb-content-padding-left-lg: ' + contentPadding.lg.left + contentPadding.unit + ';' : ''}
        ${contentMargin.sm.top ? '--sb-content-margin-top-sm: ' + contentMargin.sm.top + contentMargin.unit + ';' : ''}
        ${contentMargin.sm.right ? '--sb-content-margin-right-sm: ' + contentMargin.sm.right + contentMargin.unit + ';' : ''}
        ${contentMargin.sm.bottom ? '--sb-content-margin-bottom-sm: ' + contentMargin.sm.bottom + contentMargin.unit + ';' : ''}
        ${contentMargin.sm.left ? '--sb-content-margin-left-sm: ' + contentMargin.sm.left + contentMargin.unit + ';' : ''}
        ${contentMargin.md.top ? '--sb-content-margin-top-md: ' + contentMargin.md.top + contentMargin.unit + ';' : ''}
        ${contentMargin.md.right ? '--sb-content-margin-right-md: ' + contentMargin.md.right + contentMargin.unit + ';' : ''}
        ${contentMargin.md.bottom ? '--sb-content-margin-bottom-md: ' + contentMargin.md.bottom + contentMargin.unit + ';' : ''}
        ${contentMargin.md.left ? '--sb-content-margin-left-md: ' + contentMargin.md.left + contentMargin.unit + ';' : ''}
        ${contentMargin.lg.top ? '--sb-content-margin-top-lg: ' + contentMargin.lg.top + contentMargin.unit + ';' : ''}
        ${contentMargin.lg.right ? '--sb-content-margin-right-lg: ' + contentMargin.lg.right + contentMargin.unit + ';' : ''}
        ${contentMargin.lg.bottom ? '--sb-content-margin-bottom-lg: ' + contentMargin.lg.bottom + contentMargin.unit + ';' : ''}
        ${contentMargin.lg.left ? '--sb-content-margin-left-lg: ' + contentMargin.lg.left + contentMargin.unit + ';' : ''}
        ${contentOverlayBackground ? '--sb-content-overlay-gradient: ' + contentOverlayBackground + ';' : ''}
        ${imageBorderRadius ? '--sb-image-border-radius: ' + imageBorderRadius + 'px;' : ''}
    }`
    setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });

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
                    <h3 className={`sb-post-title ${getFontClass(postTypography)}`}>
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
                {style}
            </style>
            {postTypography['family'] && (postTypography['family'] != 'Default') && (<GoogleFontLoad family={postTypography['family']} weight={postTypography['weight'].replace("italic", "i")} />)}
            {excerptTypography['family'] && (excerptTypography['family'] != 'Default') && (<GoogleFontLoad family={excerptTypography['family']} weight={excerptTypography['weight'].replace("italic", "i")} />)}
            {metasTypography['family'] && (metasTypography['family'] != 'Default') && (<GoogleFontLoad family={metasTypography['family']} weight={metasTypography['weight'].replace("italic", "i")} />)}
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

                                    <Select
                                        label={__('Select Filter', 'smart-blocks')}
                                        value={filterOption}
                                        onChange={(filterOption) => setAttributes({ filterOption })}
                                        options={[
                                            { value: 'single-post', label: __('By Post Title', 'smart-blocks') },
                                            { value: 'categories', label: __('By Categories', 'smart-blocks') },
                                            { value: 'tags', label: __('By Tags', 'smart-blocks') }
                                        ]}
                                    />

                                    {(!filterOption || filterOption == 'single-post') && (
                                        <Select
                                            label={__('Select Post', 'smart-blocks')}
                                            options={allPostsSelect}
                                            value={postId}
                                            onChange={(postId) => setAttributes({ postId })}
                                        />
                                    )}

                                    {filterOption == 'categories' && (
                                        <TokenMultiSelectControl
                                            label={__('Categories', 'smart-blocks')}
                                            options={allCatsSelect}
                                            value={categories}
                                            onChange={(categories) => setAttributes({ categories })}
                                        />
                                    )}

                                    {filterOption == 'tags' && (
                                        <TokenMultiSelectControl
                                            label={__('Tags', 'smart-blocks')}
                                            options={allTagsSelect}
                                            value={tags}
                                            onChange={(tags) => setAttributes({ tags })}
                                        />
                                    )}
                                    {
                                        filterOption != 'single-post' && (<CustomRangeControl
                                            label={__('Offset', 'smart-blocks')}
                                            value={offset}
                                            onChange={(offset) => setAttributes({ offset })}
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
                                        onChange={(postPostAuthor) => setAttributes({ postPostAuthor })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={postPostDate}
                                        onChange={(postPostDate) => setAttributes({ postPostDate })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={postPostComments}
                                        onChange={(postPostComments) => setAttributes({ postPostComments })}
                                    />
                                    <Select
                                        label={__('Date Format', 'smart-blocks')}
                                        value={dateFormat}
                                        onChange={(dateFormat) => setAttributes({ dateFormat })}
                                        options={[
                                            { value: 'relative_format', label: __('Relative Format (Ago)', 'smart-blocks') },
                                            { value: 'default', label: __('WordPress Default Format', 'smart-blocks') },
                                            { value: 'custom', label: __('Custom Format', 'smart-blocks') }
                                        ]}
                                    />
                                    {dateFormat == 'custom' && (
                                        <TextControl
                                            label={__('Custom Date Format', 'smart-blocks')}
                                            value={customDateFormat}
                                            onChange={(customDateFormat) => setAttributes({ customDateFormat })}
                                        />
                                    )}
                                </PanelBody>
                                <PanelBody
                                    title={__('Post Excerpt', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <CustomRangeControl
                                        label={__('Excerpt Length', 'smart-blocks')}
                                        value={postExcerptLength}
                                        onChange={(postExcerptLength) => setAttributes({ postExcerptLength })}
                                        min={0}
                                        max={600}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Image Settings', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Select
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={postImageSize}
                                        onChange={(postImageSize) => setAttributes({ postImageSize })}
                                    />
                                    <CustomRangeControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={postImageHeight}
                                        onChange={(postImageHeight) => setAttributes({ postImageHeight })}
                                        min={30}
                                        max={150}
                                    />
                                    <CustomRangeControl
                                        label={__('Image Border Radius(px)', 'smart-blocks')}
                                        value={imageBorderRadius}
                                        onChange={(imageBorderRadius) => setAttributes({ imageBorderRadius })}
                                        min={0}
                                        max={30}
                                    />
                                    <Select
                                        label={__('Content Alignment', 'smart-blocks')}
                                        value={contentAlignment}
                                        onChange={(contentAlignment) => setAttributes({ contentAlignment })}
                                        options={[
                                            { value: 'left', label: 'Left' },
                                            { value: 'center', label: 'Center' },
                                            { value: 'right', label: 'Right' }
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
                                        onChange={(contentOverlayBackground) => setAttributes({ contentOverlayBackground })}
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
                                    <Dimension
                                        label={__('Content Padding', 'smart-blocks')}
                                        values={contentPadding}
                                        onChange={(contentPadding) => setAttributes({ contentPadding })}
                                        responsive={!0}
                                    />
                                    <Dimension
                                        label={__('Content Margin', 'smart-blocks')}
                                        values={contentMargin}
                                        onChange={(contentMargin) => setAttributes({ contentMargin })}
                                        responsive={!0}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title="Post Title"
                                    initialOpen={false}
                                >
                                    <Color
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={titleColor}
                                        onChange={(titleColor) => setAttributes({ titleColor })}
                                    />
                                    <Typography
                                        label={__('Typography', 'smart-blocks')}
                                        values={postTypography}
                                        onChange={(postTypography) => setAttributes({ postTypography })} />
                                    <Dimension
                                        label={__('Margin', 'smart-blocks')}
                                        values={postTitleMargin}
                                        onChange={(postTitleMargin) => setAttributes({ postTitleMargin })}
                                        responsive={!0}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title="Post Metas"
                                    initialOpen={false}
                                >
                                    <Color
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={postMetasColor}
                                        onChange={(postMetasColor) => setAttributes({ postMetasColor })}
                                    />
                                    <Typography
                                        label={__('Typography', 'smart-blocks')}
                                        values={metasTypography}
                                        onChange={(metasTypography) => setAttributes({ metasTypography })}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title="Post Excerpt"
                                    initialOpen={false}
                                >
                                    <Color
                                        label={__('Color', 'smart-blocks')}
                                        enableAlpha
                                        value={excerptColor}
                                        onChange={(excerptColor) => setAttributes({ excerptColor })}
                                    />
                                    <Typography
                                        label={__('Typography', 'smart-blocks')}
                                        values={excerptTypography}
                                        onChange={(excerptTypography) => setAttributes({ excerptTypography })}
                                    />
                                </PanelBody>
                            </>
                        ) || 'advanced' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Layout', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Dimension
                                        label={__('Margin', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        values={blockMargin}
                                        onChange={(blockMargin) => setAttributes({ blockMargin })}
                                        responsive={!0}
                                    />
                                    <Dimension
                                        label={__('Padding', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        values={blockPadding}
                                        onChange={(blockPadding) => setAttributes({ blockPadding })}
                                        responsive={!0}
                                    />
                                </PanelBody>

                                <PanelBody
                                    title={__('Border', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <Border
                                                value={borderNormal}
                                                setValue={(borderNormal) => setAttributes({ borderNormal })}
                                            />
                                            {borderNormal && (
                                                <Color
                                                    label={__('Border Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={borderNormalColor}
                                                    onChange={(borderNormalColor) => setAttributes({ borderNormalColor })}
                                                />
                                            )}
                                            <Dimension
                                                label={__('Border Width', 'smart-blocks')}
                                                values={borderNormalWidth}
                                                onChange={(borderNormalWidth) => setAttributes({ borderNormalWidth })}
                                                units={['px', 'em']}
                                            />
                                            <Dimension
                                                label={__('Border Radius', 'smart-blocks')}
                                                values={borderNormalRadius}
                                                onChange={(borderNormalRadius) => setAttributes({ borderNormalRadius })}
                                            />
                                            <BoxShadow
                                                values={borderNormalBoxShadow}
                                                onChange={(borderNormalBoxShadow) => setAttributes({ borderNormalBoxShadow })}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <Border
                                                value={borderHover}
                                                setValue={(borderHover) => setAttributes({ borderHover })}
                                            />
                                            {borderHover && (
                                                <Color
                                                    label={__('Border Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={borderHoverColor}
                                                    onChange={(borderHoverColor) => setAttributes({ borderHoverColor })}
                                                />
                                            )}
                                            <Dimension
                                                label={__('Border Width', 'smart-blocks')}
                                                values={borderHoverWidth}
                                                onChange={(borderHoverWidth) => setAttributes({ borderHoverWidth })}
                                                units={['px', 'em']}
                                            />
                                            <Dimension
                                                label={__('Border Radius', 'smart-blocks')}
                                                values={borderHoverRadius}
                                                onChange={(borderHoverRadius) => setAttributes({ borderHoverRadius })}
                                            />
                                            <BoxShadow
                                                values={borderHoverBoxShadow}
                                                onChange={(borderHoverBoxShadow) => setAttributes({ borderHoverBoxShadow })}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Background', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Color
                                        label={__('Background Color', 'smart-blocks')}
                                        enableAlpha
                                        value={blockBgColor}
                                        onChange={(blockBgColor) => setAttributes({ blockBgColor })}
                                    />
                                </PanelBody>
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps({
                    className: "wp-block-smart-blocks sb-single-post"
                })}>
                    <div className="sb-single-post-two">
                        {filterOption == 'single-post' ? selectPosts && postId ? postInner(selectPosts.filter(spost => spost.id == postId)[0]) : posts && posts.map((post) => (postInner(post))) : posts && posts.map((post) => (postInner(post)))}
                    </div>
                </div>
            </div>
        </>
    );
}
