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
    Button
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';
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

export default function Edit({ attributes, setAttributes }) {
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        style,
        order,
        orderBy,
        excludePosts,
        categories,
        headerTitle,
        headerStyle,
        headerColor,
        headerShortBorderColor,
        headerLongBorderColor,
        headerTitleTypography,
        categoryTypography,
        postsPostType,
        offset,
        bottomImageSize,
        bottomImageHeight,
        bottomPostAuthor,
        bottomPostDate,
        bottomPostComments,
        bottomPostCategory,
        bottomTypography,
        topImageSize,
        topImageHeight,
        topPostAuthor,
        topPostDate,
        topPostComments,
        topPostCategory,
        topTitleMargin,
        topTypography,
        metasTypography,
        dateFormat,
        customDateFormat,
        imageBorderRadius,
        bottomTitleMargin,
        categoryBackgroundColor,
        categoryTextColor,
        categoryBackgroundHoverColor,
        categoryTextHoverColor,
        titleColor,
        titleHoverColor,
        postMetasColor,
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
        ${borderHover ? '--sb-border-hover: ' + borderHover + ';' : ''}
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
        ${topImageHeight ? '--sb-top-thumb-height: ' + topImageHeight + '%;' : ''}
        ${bottomImageHeight ? '--sb-bottom-post-thumb-height: ' + bottomImageHeight + '%;' : ''}
        ${headerColor ? '--sb-header-color: ' + headerColor + ';' : ''}
        ${headerShortBorderColor ? '--sb-header-short-border-color: ' + headerShortBorderColor + ';' : ''}
        ${headerLongBorderColor ? '--sb-header-long-border-color: ' + headerLongBorderColor + ';' : ''}
        ${headerTitleTypography.family ? '--sb-header-typo-family: ' + checkDefault(headerTitleTypography.family) + ';' : ''}
        ${headerTitleTypography.weight ? '--sb-header-typo-weight: ' + checkDefault(headerTitleTypography.weight.replace(/\D/g, ''), headerTitleTypography.weight) + ';' : ''}
        ${headerTitleTypography.weight ? '--sb-header-typo-style: ' + checkDefault(headerTitleTypography.weight.replace(/\d+/g, ''), headerTitleTypography.weight) + ';' : ''}
        ${headerTitleTypography.textTransform ? '--sb-header-typo-tt: ' + headerTitleTypography.textTransform + ';' : ''}
        ${headerTitleTypography.textDecoration ? '--sb-header-typo-td: ' + headerTitleTypography.textDecoration + ';' : ''}
        ${headerTitleTypography.fontSize.sm ? '--sb-header-typo-fs-sm: ' + headerTitleTypography.fontSize.sm + headerTitleTypography.fontSize.unit + ';' : ''}
        ${headerTitleTypography.fontSize.md ? '--sb-header-typo-fs-md: ' + headerTitleTypography.fontSize.md + headerTitleTypography.fontSize.unit + ';' : ''}
        ${headerTitleTypography.fontSize.lg ? '--sb-header-typo-fs-lg: ' + headerTitleTypography.fontSize.lg + headerTitleTypography.fontSize.unit + ';' : ''}
        ${headerTitleTypography.letterSpacing.sm ? '--sb-header-typo-ls-sm: ' + headerTitleTypography.letterSpacing.sm + headerTitleTypography.letterSpacing.unit + ';' : ''}
        ${headerTitleTypography.letterSpacing.md ? '--sb-header-typo-ls-md: ' + headerTitleTypography.letterSpacing.md + headerTitleTypography.letterSpacing.unit + ';' : ''}
        ${headerTitleTypography.letterSpacing.lg ? '--sb-header-typo-ls-lg: ' + headerTitleTypography.letterSpacing.lg + headerTitleTypography.letterSpacing.unit + ';' : ''}
        ${headerTitleTypography.lineHeight.sm ? '--sb-header-typo-lh-sm: ' + headerTitleTypography.lineHeight.sm + headerTitleTypography.lineHeight.unit + ';' : ''}
        ${headerTitleTypography.lineHeight.md ? '--sb-header-typo-lh-md: ' + headerTitleTypography.lineHeight.md + headerTitleTypography.lineHeight.unit + ';' : ''}
        ${headerTitleTypography.lineHeight.lg ? '--sb-header-typo-lh-lg: ' + headerTitleTypography.lineHeight.lg + headerTitleTypography.lineHeight.unit + ';' : ''}
        ${categoryTypography.family ? '--sb-category-typo-family: ' + checkDefault(categoryTypography.family) + ';' : ''}
        ${categoryTypography.weight ? '--sb-category-typo-weight: ' + checkDefault(categoryTypography.weight.replace(/\D/g, ''), categoryTypography.weight) + ';' : ''}
        ${categoryTypography.weight ? '--sb-category-typo-style: ' + checkDefault(categoryTypography.weight.replace(/\d+/g, ''), categoryTypography.weight) + ';' : ''}
        ${categoryTypography.textTransform ? '--sb-category-typo-tt: ' + categoryTypography.textTransform + ';' : ''}
        ${categoryTypography.textDecoration ? '--sb-category-typo-td: ' + categoryTypography.textDecoration + ';' : ''}
        ${categoryTypography.fontSize.sm ? '--sb-category-typo-fs-sm: ' + categoryTypography.fontSize.sm + categoryTypography.fontSize.unit + ';' : ''}
        ${categoryTypography.fontSize.md ? '--sb-category-typo-fs-md: ' + categoryTypography.fontSize.md + categoryTypography.fontSize.unit + ';' : ''}
        ${categoryTypography.fontSize.lg ? '--sb-category-typo-fs-lg: ' + categoryTypography.fontSize.lg + categoryTypography.fontSize.unit + ';' : ''}
        ${categoryTypography.letterSpacing.sm ? '--sb-category-typo-ls-sm: ' + categoryTypography.letterSpacing.sm + categoryTypography.letterSpacing.unit + ';' : ''}
        ${categoryTypography.letterSpacing.md ? '--sb-category-typo-ls-md: ' + categoryTypography.letterSpacing.md + categoryTypography.letterSpacing.unit + ';' : ''}
        ${categoryTypography.letterSpacing.lg ? '--sb-category-typo-ls-lg: ' + categoryTypography.letterSpacing.lg + categoryTypography.letterSpacing.unit + ';' : ''}
        ${categoryTypography.lineHeight.sm ? '--sb-category-typo-lh-sm: ' + categoryTypography.lineHeight.sm + categoryTypography.lineHeight.unit + ';' : ''}
        ${categoryTypography.lineHeight.md ? '--sb-category-typo-lh-md: ' + categoryTypography.lineHeight.md + categoryTypography.lineHeight.unit + ';' : ''}
        ${categoryTypography.lineHeight.lg ? '--sb-category-typo-lh-lg: ' + categoryTypography.lineHeight.lg + categoryTypography.lineHeight.unit + ';' : ''}
        ${categoryBackgroundColor ? '--sb-category-background-color: ' + categoryBackgroundColor + ';' : ''}
        ${categoryTextColor ? '--sb-category-text-color: ' + categoryTextColor + ';' : ''}
        ${categoryBackgroundHoverColor ? '--sb-category-background-hover-color: ' + categoryBackgroundHoverColor + ';' : ''}
        ${categoryTextHoverColor ? '--sb-category-text-hover-color: ' + categoryTextHoverColor + ';' : ''}
        ${titleColor ? '--sb-title-color: ' + titleColor + ';' : ''}
        ${titleHoverColor ? '--sb-title-hover-color: ' + titleHoverColor + ';' : ''}
        ${topTypography.family ? '--sb-top-post-title-typo-family: ' + checkDefault(topTypography.family) + ';' : ''}
        ${topTypography.weight ? '--sb-top-post-title-typo-weight: ' + checkDefault(topTypography.weight.replace(/\D/g, ''), topTypography.weight) + ';' : ''}
        ${topTypography.weight ? '--sb-top-post-title-typo-style: ' + checkDefault(topTypography.weight.replace(/\d+/g, ''), topTypography.weight) + ';' : ''}
        ${topTypography.textTransform ? '--sb-top-post-title-typo-tt: ' + topTypography.textTransform + ';' : ''}
        ${topTypography.textDecoration ? '--sb-top-post-title-typo-td: ' + topTypography.textDecoration + ';' : ''}
        ${topTypography.fontSize.sm ? '--sb-top-post-title-typo-fs-sm: ' + topTypography.fontSize.sm + topTypography.fontSize.unit + ';' : ''}
        ${topTypography.fontSize.md ? '--sb-top-post-title-typo-fs-md: ' + topTypography.fontSize.md + topTypography.fontSize.unit + ';' : ''}
        ${topTypography.fontSize.lg ? '--sb-top-post-title-typo-fs-lg: ' + topTypography.fontSize.lg + topTypography.fontSize.unit + ';' : ''}
        ${topTypography.letterSpacing.sm ? '--sb-top-post-title-typo-ls-sm: ' + topTypography.letterSpacing.sm + topTypography.letterSpacing.unit + ';' : ''}
        ${topTypography.letterSpacing.md ? '--sb-top-post-title-typo-ls-md: ' + topTypography.letterSpacing.md + topTypography.letterSpacing.unit + ';' : ''}
        ${topTypography.letterSpacing.lg ? '--sb-top-post-title-typo-ls-lg: ' + topTypography.letterSpacing.lg + topTypography.letterSpacing.unit + ';' : ''}
        ${topTypography.lineHeight.sm ? '--sb-top-post-title-typo-lh-sm: ' + topTypography.lineHeight.sm + topTypography.lineHeight.unit + ';' : ''}
        ${topTypography.lineHeight.md ? '--sb-top-post-title-typo-lh-md: ' + topTypography.lineHeight.md + topTypography.lineHeight.unit + ';' : ''}
        ${topTypography.lineHeight.lg ? '--sb-top-post-title-typo-lh-lg: ' + topTypography.lineHeight.lg + topTypography.lineHeight.unit + ';' : ''}
        ${topTitleMargin.sm.top ? '--sb-top-post-title-margin-top-sm: ' + topTitleMargin.sm.top + ';' : ''}
        ${topTitleMargin.sm.right ? '--sb-top-post-title-margin-right-sm: ' + topTitleMargin.sm.right + ';' : ''}
        ${topTitleMargin.sm.bottom ? '--sb-top-post-title-margin-bottom-sm: ' + topTitleMargin.sm.bottom + ';' : ''}
        ${topTitleMargin.sm.left ? '--sb-top-post-title-margin-left-sm: ' + topTitleMargin.sm.left + ';' : ''}
        ${topTitleMargin.md.top ? '--sb-top-post-title-margin-top-md: ' + topTitleMargin.md.top + ';' : ''}
        ${topTitleMargin.md.right ? '--sb-top-post-title-margin-right-md: ' + topTitleMargin.md.right + ';' : ''}
        ${topTitleMargin.md.bottom ? '--sb-top-post-title-margin-bottom-md: ' + topTitleMargin.md.bottom + ';' : ''}
        ${topTitleMargin.md.left ? '--sb-top-post-title-margin-left-md: ' + topTitleMargin.md.left + ';' : ''}
        ${topTitleMargin.lg.top ? '--sb-top-post-title-margin-top-lg: ' + topTitleMargin.lg.top + ';' : ''}
        ${topTitleMargin.lg.right ? '--sb-top-post-title-margin-right-lg: ' + topTitleMargin.lg.right + ';' : ''}
        ${topTitleMargin.lg.bottom ? '--sb-top-post-title-margin-bottom-lg: ' + topTitleMargin.lg.bottom + ';' : ''}
        ${topTitleMargin.lg.left ? '--sb-top-post-title-margin-left-lg: ' + topTitleMargin.lg.left + ';' : ''}
        ${bottomTypography.family ? '--sb-bottom-post-title-typo-family: ' + checkDefault(bottomTypography.family) + ';' : ''}
        ${bottomTypography.weight ? '--sb-bottom-post-title-typo-weight: ' + checkDefault(bottomTypography.weight.replace(/\D/g, ''), bottomTypography.weight) + ';' : ''}
        ${bottomTypography.weight ? '--sb-bottom-post-title-typo-style: ' + checkDefault(bottomTypography.weight.replace(/\d+/g, ''), bottomTypography.weight) + ';' : ''}
        ${bottomTypography.textTransform ? '--sb-bottom-post-title-typo-tt: ' + bottomTypography.textTransform + ';' : ''}
        ${bottomTypography.textDecoration ? '--sb-bottom-post-title-typo-td: ' + bottomTypography.textDecoration + ';' : ''}
        ${bottomTypography.fontSize.sm ? '--sb-bottom-post-title-typo-fs-sm: ' + bottomTypography.fontSize.sm + bottomTypography.fontSize.unit + ';' : ''}
        ${bottomTypography.fontSize.md ? '--sb-bottom-post-title-typo-fs-md: ' + bottomTypography.fontSize.md + bottomTypography.fontSize.unit + ';' : ''}
        ${bottomTypography.fontSize.lg ? '--sb-bottom-post-title-typo-fs-lg: ' + bottomTypography.fontSize.lg + bottomTypography.fontSize.unit + ';' : ''}
        ${bottomTypography.letterSpacing.sm ? '--sb-bottom-post-title-typo-ls-sm: ' + bottomTypography.letterSpacing.sm + bottomTypography.letterSpacing.unit + ';' : ''}
        ${bottomTypography.letterSpacing.md ? '--sb-bottom-post-title-typo-ls-md: ' + bottomTypography.letterSpacing.md + bottomTypography.letterSpacing.unit + ';' : ''}
        ${bottomTypography.letterSpacing.lg ? '--sb-bottom-post-title-typo-ls-lg: ' + bottomTypography.letterSpacing.lg + bottomTypography.letterSpacing.unit + ';' : ''}
        ${bottomTypography.lineHeight.sm ? '--sb-bottom-post-title-typo-lh-sm: ' + bottomTypography.lineHeight.sm + bottomTypography.lineHeight.unit + ';' : ''}
        ${bottomTypography.lineHeight.md ? '--sb-bottom-post-title-typo-lh-md: ' + bottomTypography.lineHeight.md + bottomTypography.lineHeight.unit + ';' : ''}
        ${bottomTypography.lineHeight.lg ? '--sb-bottom-post-title-typo-lh-lg: ' + bottomTypography.lineHeight.lg + bottomTypography.lineHeight.unit + ';' : ''}
        ${bottomTitleMargin.sm.top ? '--sb-bottom-post-title-margin-top-sm: ' + bottomTitleMargin.sm.top + ';' : ''}
        ${bottomTitleMargin.sm.right ? '--sb-bottom-post-title-margin-right-sm: ' + bottomTitleMargin.sm.right + ';' : ''}
        ${bottomTitleMargin.sm.bottom ? '--sb-bottom-post-title-margin-bottom-sm: ' + bottomTitleMargin.sm.bottom + ';' : ''}
        ${bottomTitleMargin.sm.left ? '--sb-bottom-post-title-margin-left-sm: ' + bottomTitleMargin.sm.left + ';' : ''}
        ${bottomTitleMargin.md.top ? '--sb-bottom-post-title-margin-top-md: ' + bottomTitleMargin.md.top + ';' : ''}
        ${bottomTitleMargin.md.right ? '--sb-bottom-post-title-margin-right-md: ' + bottomTitleMargin.md.right + ';' : ''}
        ${bottomTitleMargin.md.bottom ? '--sb-bottom-post-title-margin-bottom-md: ' + bottomTitleMargin.md.bottom + ';' : ''}
        ${bottomTitleMargin.md.left ? '--sb-bottom-post-title-margin-left-md: ' + bottomTitleMargin.md.left + ';' : ''}
        ${bottomTitleMargin.lg.top ? '--sb-bottom-post-title-margin-top-lg: ' + bottomTitleMargin.lg.top + ';' : ''}
        ${bottomTitleMargin.lg.right ? '--sb-bottom-post-title-margin-right-lg: ' + bottomTitleMargin.lg.right + ';' : ''}
        ${bottomTitleMargin.lg.bottom ? '--sb-bottom-post-title-margin-bottom-lg: ' + bottomTitleMargin.lg.bottom + ';' : ''}
        ${bottomTitleMargin.lg.left ? '--sb-bottom-post-title-margin-left-lg: ' + bottomTitleMargin.lg.left + ';' : ''}
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
        ${imageBorderRadius ? '--sb-image-border-radius: ' + imageBorderRadius + 'px;' : ''}
    }`
    setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });

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
        per_page: 6,
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
        getFontClass(headerTitleTypography)
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
        const titleClass = (index == 0 || index == 1) ? 'sb-big-title ' + getFontClass(topTypography) : getFontClass(bottomTypography);
        const post_author = (index == 0 || index == 1) ? topPostAuthor : bottomPostAuthor;
        const post_date = (index == 0 || index == 1) ? topPostDate : bottomPostDate;
        const post_comment = (index == 0 || index == 1) ? topPostComments : bottomPostComments;
        const bottom_image_size = bottomImageSize ? bottomImageSize : 'large';
        const top_image_size = topImageSize ? topImageSize : 'large';
        const image_size = (index == 0 || index == 1) ? top_image_size : bottom_image_size;
        const image_height = (index == 0 || index == 1) ? topImageHeight : bottomImageHeight;
        const display_category = (index == 0 || index == 1) ? topPostCategory : bottomPostCategory;
        return (
            <div className="sb-post-item" key={index}>
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
                            {post.categories && (index == 0 || index == 1) ? post.categories.map((catId, index) => (catInner(catId, index, false))) : post.categories.map((catId, index) => (catInner(catId, index, true)))}
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
            {headerTitleTypography['family'] && (headerTitleTypography['family'] != 'Default') && (<GoogleFontLoad family={headerTitleTypography['family']} weight={headerTitleTypography['weight'].replace("italic", "i")} />)}
            {categoryTypography['family'] && (categoryTypography['family'] != 'Default') && (<GoogleFontLoad family={categoryTypography['family']} weight={categoryTypography['weight'].replace("italic", "i")} />)}
            {topTypography['family'] && (topTypography['family'] != 'Default') && (<GoogleFontLoad family={topTypography['family']} weight={topTypography['weight'].replace("italic", "i")} />)}
            {bottomTypography['family'] && (bottomTypography['family'] != 'Default') && (<GoogleFontLoad family={bottomTypography['family']} weight={bottomTypography['weight'].replace("italic", "i")} />)}
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
                                {headerTitle && (
                                    <PanelBody
                                        title={__('Header', 'smart-blocks')}
                                        initialOpen={false}
                                    >
                                        <Select
                                            label={__('Style', 'smart-blocks')}
                                            value={headerStyle}
                                            onChange={(headerStyle) => setAttributes({ headerStyle })}
                                            options={[
                                                { value: 'sb-title-style1', label: __('Style 1', 'smart-blocks') },
                                                { value: 'sb-title-style2', label: __('Style 2', 'smart-blocks') },
                                                { value: 'sb-title-style3', label: __('Style 3', 'smart-blocks') },
                                                { value: 'sb-title-style4', label: __('Style 4', 'smart-blocks') }
                                            ]}
                                        />
                                    </PanelBody>
                                )}
                                <PanelBody
                                    title={__('Content Filter', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Select
                                        label={__('Source', 'smart-blocks')}
                                        value={postsPostType}
                                        onChange={(postsPostType) => setAttributes({ postsPostType })}
                                        options={allPostTypes}
                                    />

                                    <QueryTaxonomyControls
                                        value={categories}
                                        postType={postsPostType}
                                        onChange={(categories) => setAttributes({ categories })}
                                    />

                                    <TokenMultiSelectControl
                                        label={__('Exclude Posts', 'smart-blocks')}
                                        options={allPostsSelect}
                                        value={excludePosts}
                                        onChange={(excludePosts) => setAttributes({ excludePosts })}
                                    />

                                    <Select
                                        label={__('Order By', 'smart-blocks')}
                                        value={orderBy}
                                        onChange={(orderBy) => setAttributes({ orderBy })}
                                        options={[
                                            { value: 'date', label: __('Date', 'smart-blocks') },
                                            { value: 'modified', label: __('Last Modified Date', 'smart-blocks') },
                                            { value: 'rand', label: __('Rand', 'smart-blocks') },
                                            { value: 'comment_count', label: __('Comment Count', 'smart-blocks') },
                                            { value: 'title', label: __('Title', 'smart-blocks') },
                                            { value: 'author', label: __('Show Post Author', 'smart-blocks') }
                                        ]}
                                    />

                                    <Select
                                        label={__('Order', 'smart-blocks')}
                                        value={order}
                                        onChange={(order) => setAttributes({ order })}
                                        options={[
                                            { value: 'desc', label: __('Descending', 'smart-blocks') },
                                            { value: 'asc', label: __('Ascending', 'smart-blocks') }
                                        ]}
                                    />

                                    <CustomRangeControl
                                        label={__('Offset', 'smart-blocks')}
                                        value={offset}
                                        onChange={(offset) => setAttributes({ offset })}
                                        min={0}
                                        max={10}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Top Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Select
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={topImageSize}
                                        onChange={(topImageSize) => setAttributes({ topImageSize })}
                                    />
                                    <CustomRangeControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={topImageHeight}
                                        onChange={(topImageHeight) => setAttributes({ topImageHeight })}
                                        min={30}
                                        max={150}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Author', 'smart-blocks')}
                                        checked={topPostAuthor}
                                        onChange={(topPostAuthor) => setAttributes({ topPostAuthor })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={topPostDate}
                                        onChange={(topPostDate) => setAttributes({ topPostDate })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={topPostComments}
                                        onChange={(topPostComments) => setAttributes({ topPostComments })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Category', 'smart-blocks')}
                                        checked={topPostCategory}
                                        onChange={(topPostCategory) => setAttributes({ topPostCategory })}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Bottom Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Select
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={bottomImageSize}
                                        onChange={(bottomImageSize) => setAttributes({ bottomImageSize })}
                                    />
                                    <CustomRangeControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={bottomImageHeight}
                                        onChange={(bottomImageHeight) => setAttributes({ bottomImageHeight })}
                                        min={30}
                                        max={150}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Author', 'smart-blocks')}
                                        checked={bottomPostAuthor}
                                        onChange={(bottomPostAuthor) => setAttributes({ bottomPostAuthor })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Date', 'smart-blocks')}
                                        checked={bottomPostDate}
                                        onChange={(bottomPostDate) => setAttributes({ bottomPostDate })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Comments', 'smart-blocks')}
                                        checked={bottomPostComments}
                                        onChange={(bottomPostComments) => setAttributes({ bottomPostComments })}
                                    />
                                    <ToggleControl
                                        label={__('Show Post Category', 'smart-blocks')}
                                        checked={bottomPostCategory}
                                        onChange={(bottomPostCategory) => setAttributes({ bottomPostCategory })}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Additional Settings', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <CustomRangeControl
                                        label={__('Image Border Radius(px)', 'smart-blocks')}
                                        value={imageBorderRadius}
                                        onChange={(imageBorderRadius) => setAttributes({ imageBorderRadius })}
                                        min={0}
                                        max={30}
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
                            </>
                        ) || 'style' === activeTab && (
                            <>
                                {headerTitle && (
                                    <PanelBody
                                        title={__('Header Title', 'smart-blocks')}
                                        initialOpen={false}
                                    >
                                        <Color
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerColor}
                                            onChange={(headerColor) => setAttributes({ headerColor })}
                                        />
                                        <Color
                                            label={__('Short Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerShortBorderColor}
                                            onChange={(headerShortBorderColor) => setAttributes({ headerShortBorderColor })}
                                        />
                                        <Color
                                            label={__('Long Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerLongBorderColor}
                                            onChange={(headerLongBorderColor) => setAttributes({ headerLongBorderColor })}
                                        />
                                        <Typography
                                            label={__('Typography', 'smart-blocks')}
                                            values={headerTitleTypography}
                                            onChange={(headerTitleTypography) => setAttributes({ headerTitleTypography })} />
                                    </PanelBody>
                                )}
                                <PanelBody
                                    title={__('Category', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Typography
                                        label={__('Typography', 'smart-blocks')}
                                        values={categoryTypography}
                                        onChange={(categoryTypography) => setAttributes({ categoryTypography })} />
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <Color
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryBackgroundColor}
                                                onChange={(categoryBackgroundColor) => setAttributes({ categoryBackgroundColor })}
                                            />
                                            <Color
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextColor}
                                                onChange={(categoryTextColor) => setAttributes({ categoryTextColor })}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <Color
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryBackgroundHoverColor}
                                                onChange={(categoryBackgroundHoverColor) => setAttributes({ categoryBackgroundHoverColor })}
                                            />
                                            <Color
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextHoverColor}
                                                onChange={(categoryTextHoverColor) => setAttributes({ categoryTextHoverColor })}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Title', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Color
                                        label={__('Title Color', 'smart-blocks')}
                                        enableAlpha
                                        value={titleColor}
                                        onChange={(titleColor) => setAttributes({ titleColor })}
                                    />
                                    <Color
                                        label={__('Title Color(Hover)', 'smart-blocks')}
                                        enableAlpha
                                        value={titleHoverColor}
                                        onChange={(titleHoverColor) => setAttributes({ titleHoverColor })}
                                    />
                                    <Tabs>
                                        <div tabTitle={__("Top Post", 'smart-blocks')}>
                                            <Typography
                                                label={__('Typography', 'smart-blocks')}
                                                values={topTypography}
                                                onChange={(topTypography) => setAttributes({ topTypography })}
                                            />
                                            <Dimension
                                                label={__('Margin', 'smart-blocks')}
                                                min="0"
                                                max="100"
                                                values={topTitleMargin}
                                                onChange={(topTitleMargin) => setAttributes({ topTitleMargin })}
                                                responsive={!0}
                                            />
                                        </div>
                                        <div tabTitle={__("Bottom Post", 'smart-blocks')}>
                                            <Typography
                                                label={__('Typography', 'smart-blocks')}
                                                values={bottomTypography}
                                                onChange={(bottomTypography) => setAttributes({ bottomTypography })} />
                                            <Dimension
                                                label={__('Margin', 'smart-blocks')}
                                                values={bottomTitleMargin}
                                                onChange={(bottomTitleMargin) => setAttributes({ bottomTitleMargin })}
                                                responsive={!0}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Metas', 'smart-blocks')}
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
                                        onChange={(metasTypography) => setAttributes({ metasTypography })} />
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
                    className: "sb-blocks sb-news-module-four"
                })}>
                    <h2 className={headerClasses}>
                        <RichText
                            tagName="span"
                            value={headerTitle}
                            onChange={(headerTitle) => setAttributes({ headerTitle })}
                            placeholder={__('Heading...', 'smart-blocks')}
                        />
                    </h2>
                    <div className="sb-news-module-four-wrap">
                        {posts && posts.map((post, index) => (postInner(post, index)))}
                    </div>
                </div>
            </div>
        </>
    );
}
