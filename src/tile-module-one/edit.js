import { __ } from '@wordpress/i18n';
import { RawHTML, useState } from '@wordpress/element';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	store as blockEditorStore
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	TextControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';
import Typography from '../utils/typography';
import GoogleFontLoad from '../utils/googlefontload';
import Color from '../utils/color';
import Tabs from '../utils/tabs';
import PanelTabs from '../utils/paneltabs';
import Select from '../utils/select';
import Dimension from '../utils/dimension';
import QueryTaxonomyControls from '../utils/querytaxonomycontrols';
import CustomRangeControl from '../utils/customrangecontrol';
import TokenMultiSelectControl from '../utils/token-multiselect-control';
import Border from '../utils/border';
import BoxShadow from '../utils/boxshadow';

export default function Edit({ attributes, setAttributes }) {
    const [device, setDevice] = useState('lg');
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
		largeSideImageSize,
		sideImageSize,
		sidePostAuthor,
		sidePostDate,
		sidePostComments,
		sidePostCategory,
		sideTypography,
		featuredImageSize,
		featuredPostAuthor,
		featuredPostDate,
		featuredPostComments,
		featuredPostCategory,
		featuredTitleMargin,
		featuredTypography,
		metasTypography,
		dateFormat,
		customDateFormat,
		sideTitleMargin,
		categoryBackgroundColor,
		categoryTextColor,
		categoryBackgroundHoverColor,
		categoryTextHoverColor,
		titleColor,
		moduleHeight,
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
        ${borderNormal ? '--sb-border-normal: ' + borderNormal +';' : ''}
        ${borderHover ? '--sb-border-hover: ' + borderNormal +';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor +';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor +';' : ''}
        ${borderNormalWidth.top ? '--sb-border-normal-width-top: ' + borderNormalWidth.top + borderNormalWidth.unit +';' : ''}
        ${borderNormalWidth.right ? '--sb-border-normal-width-right: ' + borderNormalWidth.right + borderNormalWidth.unit +';' : ''}
        ${borderNormalWidth.bottom ? '--sb-border-normal-width-bottom: ' + borderNormalWidth.bottom + borderNormalWidth.unit +';' : ''}
        ${borderNormalWidth.left ? '--sb-border-normal-width-left: ' + borderNormalWidth.left + borderNormalWidth.unit +';' : ''}
        ${borderHoverWidth.top ? '--sb-border-hover-width-top: ' + borderHoverWidth.top + borderHoverWidth.unit +';' : ''}
        ${borderHoverWidth.right ? '--sb-border-hover-width-right: ' + borderHoverWidth.right + borderHoverWidth.unit +';' : ''}
        ${borderHoverWidth.bottom ? '--sb-border-hover-width-bottom: ' + borderHoverWidth.bottom + borderHoverWidth.unit +';' : ''}
        ${borderHoverWidth.left ? '--sb-border-hover-width-left: ' + borderHoverWidth.left + borderHoverWidth.unit +';' : ''}
        ${borderNormalRadius.top ? '--sb-border-normal-radius-top: ' + borderNormalRadius.top + borderNormalRadius.unit +';' : ''}
        ${borderNormalRadius.right ? '--sb-border-normal-radius-right: ' + borderNormalRadius.right + borderNormalRadius.unit +';' : ''}
        ${borderNormalRadius.bottom ? '--sb-border-normal-radius-bottom: ' + borderNormalRadius.bottom + borderNormalRadius.unit +';' : ''}
        ${borderNormalRadius.left ? '--sb-border-normal-radius-left: ' + borderNormalRadius.left + borderNormalRadius.unit +';' : ''}
        ${borderHoverRadius.top ? '--sb-border-hover-radius-top: ' + borderHoverRadius.top + borderHoverRadius.unit +';' : ''}
        ${borderHoverRadius.right ? '--sb-border-hover-radius-right: ' + borderHoverRadius.right + borderHoverRadius.unit +';' : ''}
        ${borderHoverRadius.bottom ? '--sb-border-hover-radius-bottom: ' + borderHoverRadius.bottom + borderHoverRadius.unit +';' : ''}
        ${borderHoverRadius.left ? '--sb-border-hover-radius-left: ' + borderHoverRadius.left + borderHoverRadius.unit +';' : ''}
        ${borderNormalBoxShadow.horizontal ? '--sb-border-normal-box-shadow-horizontal: ' + borderNormalBoxShadow.horizontal +'px;' : ''}
        ${borderNormalBoxShadow.vertical ? '--sb-border-normal-box-shadow-vertical: ' + borderNormalBoxShadow.vertical +'px;' : ''}
        ${borderNormalBoxShadow.blur ? '--sb-border-normal-box-shadow-blur: ' + borderNormalBoxShadow.blur +'px;' : ''}
        ${borderNormalBoxShadow.spread ? '--sb-border-normal-box-shadow-spread: ' + borderNormalBoxShadow.spread +'px;' : ''}
        ${borderNormalBoxShadow.color ? '--sb-border-normal-box-shadow-color: ' + borderNormalBoxShadow.color +';' : ''}
        ${borderNormalBoxShadow.inset ? '--sb-border-normal-box-shadow-inset: ' + borderNormalBoxShadow.inset +';' : ''}
        ${borderHoverBoxShadow.horizontal ? '--sb-border-hover-box-shadow-horizontal: ' + borderHoverBoxShadow.horizontal +'px;' : ''}
        ${borderHoverBoxShadow.vertical ? '--sb-border-hover-box-shadow-vertical: ' + borderHoverBoxShadow.vertical +'px;' : ''}
        ${borderHoverBoxShadow.blur ? '--sb-border-hover-box-shadow-blur: ' + borderHoverBoxShadow.blur +'px;' : ''}
        ${borderHoverBoxShadow.spread ? '--sb-border-hover-box-shadow-spread: ' + borderHoverBoxShadow.spread +'px;' : ''}
        ${borderHoverBoxShadow.color ? '--sb-border-hover-box-shadow-color: ' + borderHoverBoxShadow.color +';' : ''}
        ${borderHoverBoxShadow.inset ? '--sb-border-hover-box-shadow-inset: ' + borderHoverBoxShadow.inset +';' : ''}
        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor +';' : ''}
        ${blockMargin.sm.top ? '--sb-block-margin-top-sm: ' + blockMargin.sm.top + blockMargin.unit +';' : ''}
        ${blockMargin.sm.right ? '--sb-block-margin-right-sm: ' + blockMargin.sm.right + blockMargin.unit +';' : ''}
        ${blockMargin.sm.bottom ? '--sb-block-margin-bottom-sm: ' + blockMargin.sm.bottom + blockMargin.unit +';' : ''}
        ${blockMargin.sm.left ? '--sb-block-margin-left-sm: ' + blockMargin.sm.left + blockMargin.unit +';' : ''}
        ${blockMargin.md.top ? '--sb-block-margin-top-md: ' + blockMargin.md.top + blockMargin.unit +';' : ''}
        ${blockMargin.md.right ? '--sb-block-margin-right-md: ' + blockMargin.md.right + blockMargin.unit +';' : ''}
        ${blockMargin.md.bottom ? '--sb-block-margin-bottom-md: ' + blockMargin.md.bottom + blockMargin.unit +';' : ''}
        ${blockMargin.md.left ? '--sb-block-margin-left-md: ' + blockMargin.md.left + blockMargin.unit +';' : ''}
        ${blockMargin.lg.top ? '--sb-block-margin-top-lg: ' + blockMargin.lg.top + blockMargin.unit +';' : ''}
        ${blockMargin.lg.right ? '--sb-block-margin-right-lg: ' + blockMargin.lg.right + blockMargin.unit +';' : ''}
        ${blockMargin.lg.bottom ? '--sb-block-margin-bottom-lg: ' + blockMargin.lg.bottom + blockMargin.unit +';' : ''}
        ${blockMargin.lg.left ? '--sb-block-margin-left-lg: ' + blockMargin.lg.left + blockMargin.unit +';' : ''}
        ${blockPadding.sm.top ? '--sb-block-padding-top-sm: ' + blockPadding.sm.top + blockPadding.unit +';' : ''}
        ${blockPadding.sm.right ? '--sb-block-padding-right-sm: ' + blockPadding.sm.right + blockPadding.unit +';' : ''}
        ${blockPadding.sm.bottom ? '--sb-block-padding-bottom-sm: ' + blockPadding.sm.bottom + blockPadding.unit +';' : ''}
        ${blockPadding.sm.left ? '--sb-block-padding-left-sm: ' + blockPadding.sm.left + blockPadding.unit +';' : ''}
        ${blockPadding.md.top ? '--sb-block-padding-top-md: ' + blockPadding.md.top + blockPadding.unit +';' : ''}
        ${blockPadding.md.right ? '--sb-block-padding-right-md: ' + blockPadding.md.right + blockPadding.unit +';' : ''}
        ${blockPadding.md.bottom ? '--sb-block-padding-bottom-md: ' + blockPadding.md.bottom + blockPadding.unit +';' : ''}
        ${blockPadding.md.left ? '--sb-block-padding-left-md: ' + blockPadding.md.left + blockPadding.unit +';' : ''}
        ${blockPadding.lg.top ? '--sb-block-padding-top-lg: ' + blockPadding.lg.top + blockPadding.unit +';' : ''}
        ${blockPadding.lg.right ? '--sb-block-padding-right-lg: ' + blockPadding.lg.right + blockPadding.unit +';' : ''}
        ${blockPadding.lg.bottom ? '--sb-block-padding-bottom-lg: ' + blockPadding.lg.bottom + blockPadding.unit +';' : ''}
        ${blockPadding.lg.left ? '--sb-block-padding-left-lg: ' + blockPadding.lg.left + blockPadding.unit +';' : ''}
		${headerColor ? '--sb-header-color: ' + headerColor + ';' : ''}
		${headerShortBorderColor ? '--sb-header-short-border-color: ' + headerShortBorderColor + ';' : ''}
		${headerLongBorderColor ? '--sb-header-long-border-color: ' + headerLongBorderColor + ';' : ''}
		${headerTitleTypography.family ? '--sb-header-typo-family: ' + headerTitleTypography.family + ';' : ''}
		${headerTitleTypography.weight ? '--sb-header-typo-weight: ' + headerTitleTypography.weight.replace(/\D/g, '') + ';' : ''}
		${headerTitleTypography.weight ? '--sb-header-typo-style: ' + headerTitleTypography.weight.replace(/\d+/g, '') + ';' : ''}
		${headerTitleTypography.textTransform ? '--sb-header-typo-tt: ' + headerTitleTypography.textTransform + ';' : ''}
		${headerTitleTypography.textDecoration ? '--sb-header-typo-td: ' + headerTitleTypography.textDecoration + ';' : ''}
		${headerTitleTypography.fontSize.sm ? '--sb-header-typo-fs-sm: ' + headerTitleTypography.fontSize.sm + headerTitleTypography.fontSize.unit + ';' : ''}
		${headerTitleTypography.fontSize.md ? '--sb-header-typo-fs-md: ' + headerTitleTypography.fontSize.md + headerTitleTypography.fontSize.unit + ';' : ''}
		${headerTitleTypography.fontSize.lg ? '--sb-header-typo-fs-lg: ' + headerTitleTypography.fontSize.lg + headerTitleTypography.fontSize.unit + ';' : ''}
		${headerTitleTypography.letterSpacing.sm ?'--sb-header-typo-ls-sm: ' + headerTitleTypography.letterSpacing.sm + headerTitleTypography.letterSpacing.unit + ';' : ''}
		${headerTitleTypography.letterSpacing.md ? '--sb-header-typo-ls-md: ' + headerTitleTypography.letterSpacing.md + headerTitleTypography.letterSpacing.unit + ';' : ''}
		${headerTitleTypography.letterSpacing.lg ? '--sb-header-typo-ls-lg: ' + headerTitleTypography.letterSpacing.lg + headerTitleTypography.letterSpacing.unit + ';' : ''}
		${headerTitleTypography.lineHeight.sm ? '--sb-header-typo-lh-sm: ' + headerTitleTypography.lineHeight.sm + headerTitleTypography.lineHeight.unit + ';' : ''}
		${headerTitleTypography.lineHeight.md ? '--sb-header-typo-lh-md: ' + headerTitleTypography.lineHeight.md + headerTitleTypography.lineHeight.unit + ';' : ''}
		${headerTitleTypography.lineHeight.lg ? '--sb-header-typo-lh-lg: ' + headerTitleTypography.lineHeight.lg + headerTitleTypography.lineHeight.unit + ';' : ''}
		${categoryTypography.family ? '--sb-category-typo-family: ' + categoryTypography.family + ';' : ''}
		${categoryTypography.weight ? '--sb-category-typo-weight: ' + categoryTypography.weight.replace(/\D/g, '') + ';' : ''}
		${categoryTypography.weight ? '--sb-category-typo-style: ' + categoryTypography.weight.replace(/\d+/g, '') + ';' : ''}
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
		${featuredTypography.family ? '--sb-featured-title-typo-family: ' + featuredTypography.family + ';' : ''}
		${featuredTypography.weight ? '--sb-featured-title-typo-weight: ' + featuredTypography.weight.replace(/\D/g, '') + ';' : ''}
		${featuredTypography.weight ? '--sb-featured-title-typo-style: ' + featuredTypography.weight.replace(/\d+/g, '') + ';' : ''}
		${featuredTypography.textTransform ? '--sb-featured-title-typo-tt: ' + featuredTypography.textTransform + ';' : ''}
		${featuredTypography.textDecoration ? '--sb-featured-title-typo-td: ' + featuredTypography.textDecoration + ';' : ''}
		${featuredTypography.fontSize.sm ? '--sb-featured-title-typo-fs-sm: ' + featuredTypography.fontSize.sm + featuredTypography.fontSize.unit + ';' : ''}
		${featuredTypography.fontSize.md ? '--sb-featured-title-typo-fs-md: ' + featuredTypography.fontSize.md + featuredTypography.fontSize.unit + ';' : ''}
		${featuredTypography.fontSize.lg ? '--sb-featured-title-typo-fs-lg: ' + featuredTypography.fontSize.lg + featuredTypography.fontSize.unit + ';' : ''}
		${featuredTypography.letterSpacing.sm ? '--sb-featured-title-typo-ls-sm: ' + featuredTypography.letterSpacing.sm + featuredTypography.letterSpacing.unit + ';' : ''}
		${featuredTypography.letterSpacing.md ? '--sb-featured-title-typo-ls-md: ' + featuredTypography.letterSpacing.md + featuredTypography.letterSpacing.unit + ';' : ''}
		${featuredTypography.letterSpacing.lg ? '--sb-featured-title-typo-ls-lg: ' + featuredTypography.letterSpacing.lg + featuredTypography.letterSpacing.unit + ';' : ''}
		${featuredTypography.lineHeight.sm ? '--sb-featured-title-typo-lh-sm: ' + featuredTypography.lineHeight.sm + featuredTypography.lineHeight.unit + ';' : ''}
		${featuredTypography.lineHeight.md ? '--sb-featured-title-typo-lh-md: ' + featuredTypography.lineHeight.md + featuredTypography.lineHeight.unit + ';' : ''}
		${featuredTypography.lineHeight.lg ? '--sb-featured-title-typo-lh-lg: ' + featuredTypography.lineHeight.lg + featuredTypography.lineHeight.unit + ';' : ''}
		${featuredTitleMargin.sm.top ? '--sb-featured-title-margin-top-sm: ' + featuredTitleMargin.sm.top + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.sm.right ? '--sb-featured-title-margin-right-sm: ' + featuredTitleMargin.sm.right + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.sm.bottom ? '--sb-featured-title-margin-bottom-sm: ' + featuredTitleMargin.sm.bottom + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.sm.left ? '--sb-featured-title-margin-left-sm: ' + featuredTitleMargin.sm.left + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.md.top ? '--sb-featured-title-margin-top-md: ' + featuredTitleMargin.md.top + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.md.right ? '--sb-featured-title-margin-right-md: ' + featuredTitleMargin.md.right + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.md.bottom ? '--sb-featured-title-margin-bottom-md: ' + featuredTitleMargin.md.bottom + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.md.left ? '--sb-featured-title-margin-left-md: ' + featuredTitleMargin.md.left + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.lg.top ? '--sb-featured-title-margin-top-lg: ' + featuredTitleMargin.lg.top + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.lg.right ? '--sb-featured-title-margin-right-lg: ' + featuredTitleMargin.lg.right + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.lg.bottom ? '--sb-featured-title-margin-bottom-lg: ' + featuredTitleMargin.lg.bottom + featuredTitleMargin.unit + ';' : ''}
		${featuredTitleMargin.lg.left ? '--sb-featured-title-margin-left-lg: ' + featuredTitleMargin.lg.left + featuredTitleMargin.unit + ';' : ''}
		${sideTypography.family ? '--sb-side-post-title-typo-family: ' + sideTypography.family + ';' : ''}
		${sideTypography.weight ? '--sb-side-post-title-typo-weight: ' + sideTypography.weight.replace(/\D/g, '') + ';' : ''}
		${sideTypography.weight ? '--sb-side-post-title-typo-style: ' + sideTypography.weight.replace(/\d+/g, '') + ';' : ''}
		${sideTypography.textTransform ? '--sb-side-post-title-typo-tt: ' + sideTypography.textTransform + ';' : ''}
		${sideTypography.textDecoration ? '--sb-side-post-title-typo-td: ' + sideTypography.textDecoration + ';' : ''}
		${sideTypography.fontSize.sm ? '--sb-side-post-title-typo-fs-sm: ' + sideTypography.fontSize.sm + sideTypography.fontSize.unit + ';' : ''}
		${sideTypography.fontSize.md ? '--sb-side-post-title-typo-fs-md: ' + sideTypography.fontSize.md + sideTypography.fontSize.unit + ';' : ''}
		${sideTypography.fontSize.lg ? '--sb-side-post-title-typo-fs-lg: ' + sideTypography.fontSize.lg + sideTypography.fontSize.unit + ';' : ''}
		${sideTypography.letterSpacing.sm ? '--sb-side-post-title-typo-ls-sm: ' + sideTypography.letterSpacing.sm + sideTypography.letterSpacing.unit + ';' : ''}
		${sideTypography.letterSpacing.md ? '--sb-side-post-title-typo-ls-md: ' + sideTypography.letterSpacing.md + sideTypography.letterSpacing.unit + ';' : ''}
		${sideTypography.letterSpacing.lg ? '--sb-side-post-title-typo-ls-lg: ' + sideTypography.letterSpacing.lg + sideTypography.letterSpacing.unit + ';' : ''}
		${sideTypography.lineHeight.sm ? '--sb-side-post-title-typo-lh-sm: ' + sideTypography.lineHeight.sm + sideTypography.lineHeight.unit + ';' : ''}
		${sideTypography.lineHeight.md ? '--sb-side-post-title-typo-lh-md: ' + sideTypography.lineHeight.md + sideTypography.lineHeight.unit + ';' : ''}
		${sideTypography.lineHeight.lg ? '--sb-side-post-title-typo-lh-lg: ' + sideTypography.lineHeight.lg + sideTypography.lineHeight.unit + ';' : ''}
		${sideTitleMargin.sm.top ? '--sb-side-post-title-margin-top-sm: ' + sideTitleMargin.sm.top + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.sm.right ? '--sb-side-post-title-margin-right-sm: ' + sideTitleMargin.sm.right + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.sm.bottom ? '--sb-side-post-title-margin-bottom-sm: ' + sideTitleMargin.sm.bottom + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.sm.left ? '--sb-side-post-title-margin-left-sm: ' + sideTitleMargin.sm.left + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.md.top ? '--sb-side-post-title-margin-top-md: ' + sideTitleMargin.md.top + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.md.right ? '--sb-side-post-title-margin-right-md: ' + sideTitleMargin.md.right + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.md.bottom ? '--sb-side-post-title-margin-bottom-md: ' + sideTitleMargin.md.bottom + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.md.left ? '--sb-side-post-title-margin-left-md: ' + sideTitleMargin.md.left + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.lg.top ? '--sb-side-post-title-margin-top-lg: ' + sideTitleMargin.lg.top + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.lg.right ? '--sb-side-post-title-margin-right-lg: ' + sideTitleMargin.lg.right + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.lg.bottom ? '--sb-side-post-title-margin-bottom-lg: ' + sideTitleMargin.lg.bottom + sideTitleMargin.unit + ';' : ''}
		${sideTitleMargin.lg.left ? '--sb-side-post-title-margin-left-lg: ' + sideTitleMargin.lg.left + sideTitleMargin.unit + ';' : ''}
		${metasTypography.family ? '--sb-post-metas-typo-family: ' + metasTypography.family + ';' : ''}
		${metasTypography.weight ? '--sb-post-metas-typo-weight: ' + metasTypography.weight.replace(/\D/g, '') + ';' : ''}
		${metasTypography.weight ? '--sb-post-metas-typo-style: ' + metasTypography.weight.replace(/\d+/g, '') + ';' : ''}
		${metasTypography.textTransform ? '--sb-post-metas-typo-tt: ' + metasTypography.textTransform + ';' : ''}
		${metasTypography.textDecoration ? '--sb-post-metas-typo-td: ' + metasTypography.textDecoration + ';' : ''}
		${metasTypography.fontSize.sm  ? '--sb-post-metas-typo-fs-sm: ' + metasTypography.fontSize.sm + metasTypography.fontSize.unit + ';' : ''}
		${metasTypography.fontSize.md ? '--sb-post-metas-typo-fs-md: ' + metasTypography.fontSize.md + metasTypography.fontSize.unit + ';' : ''}
		${metasTypography.fontSize.lg ? '--sb-post-metas-typo-fs-lg: ' + metasTypography.fontSize.lg + metasTypography.fontSize.unit + ';' : ''}
		${metasTypography.letterSpacing.sm ? '--sb-post-metas-typo-ls-sm: ' + metasTypography.letterSpacing.sm + metasTypography.letterSpacing.unit + ';' : ''}
		${metasTypography.letterSpacing.md ? '--sb-post-metas-typo-ls-md: ' + metasTypography.letterSpacing.md + metasTypography.letterSpacing.unit + ';' : ''}
		${metasTypography.letterSpacing.lg ? '--sb-post-metas-typo-ls-lg: ' + metasTypography.letterSpacing.lg + metasTypography.letterSpacing.unit + ';' : ''}
		${metasTypography.lineHeight.sm ? '--sb-post-metas-typo-lh-sm: ' + metasTypography.lineHeight.sm + metasTypography.lineHeight.unit + ';' : ''}
		${metasTypography.lineHeight.md ? '--sb-post-metas-typo-lh-md: ' + metasTypography.lineHeight.md + metasTypography.lineHeight.unit + ';' : ''}
		${metasTypography.lineHeight.lg ? '--sb-post-metas-typo-lh-lg: ' + metasTypography.lineHeight.lg + metasTypography.lineHeight.unit + ';' : ''}
		${moduleHeight ? '--sb-module-height: ' + moduleHeight + 'px;' : ''}
	}`
	setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });
	const allTaxonomies = useSelect((select) => {
		var allTax = [];
		var selectTaxonomiesTypes = select('core').getTaxonomies();
		selectTaxonomiesTypes?.forEach((el) => {
			if (el.visibility.show_in_nav_menus === true && el.types[0] == postsPostType){
				allTax.push({
					value: el.slug,
					label: el.name
				})}
			});
		return allTax;
	}, [postsPostType]);
	const taxTermSelected = (taxonomy) => {
		var termIDs = categories && categories[taxonomy] ? categories[taxonomy] : [];
		return termIDs;
	}

	const query = {
		per_page: 4,
		_embed: true,
		order,
		orderby: orderBy,
		offset: parseInt(offset ? offset : 0),
		exclude: excludePosts
	};
	allTaxonomies && allTaxonomies.map((tax) => {
		let taxvalue = tax.value;
		if (taxvalue == 'category'){
			taxvalue = 'categories';
		}
		if (taxvalue == 'post_tag'){
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
			if (el.visibility.show_in_nav_menus === true){
				allPtypes.push({
					value: el.slug,
					label: el.name
				})}
			});
		return allPtypes;
	}, []);
	const allCats = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'category', {
			per_page: - 1,
		});
	}, []);
	const headerClasses = classnames(
		'sb-block-title',
		`${headerStyle}`
		);
	const catInner = (catId, index, primary) => {
		if (primary && index != 0){
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
		const titleClass = block == 'featured' ? 'sb-large-title' : block == 'mid' ? 'sb-mid-title' : '';
		const post_author = block == 'featured' ? featuredPostAuthor : sidePostAuthor;
		const post_date = block == 'featured' ? featuredPostDate : sidePostDate;
		const post_comment = block == 'featured' ? featuredPostComments : sidePostComments;
		const large_side_image_size = largeSideImageSize ? largeSideImageSize : 'large';
		const side_image_size = sideImageSize ? sideImageSize : 'large';
		const featured_image_size = featuredImageSize ? featuredImageSize : 'large';
		const image_size = block == 'featured' ? featured_image_size : block == 'mid' ? large_side_image_size : side_image_size;
		const display_category = block == 'featured' ? featuredPostCategory : sidePostCategory;
		return (
			<div className="sb-thumb-inner sb-post-thumb" key={post.id}>
			<a href={post.link}>
			{featuredImage && featuredImage.media_details && (
				<img
				src={featuredImage.media_details.sizes?.[image_size] ? featuredImage.media_details.sizes?.[image_size].source_url : featuredImage.media_details.sizes?.['full'].source_url}
				alt={featuredImage.alt_text}
				/>
				)}
			</a>
			{display_category && post.categories && (
				<ul class="post-categories">
					{post.categories && post.categories.map((catId, index) => (catInner(catId, index, block == 'featured' ? false : true)))}
				</ul>
				)}
				<div className="sb-title-container">
					<a href={post.link}>
						<h3 className={`sb-post-title ${titleClass}`}>
						<span>
						{post.title.rendered ? (
							<RawHTML>
								{post.title.rendered}
							</RawHTML>
							) : (
							__('(No title)', 'smart-blocks')
							)}
							</span>
						</h3>
					{(post_author || post_date || post_comment) && (
						<div className="sb-post-meta">
						{postAuthor && post_author && (
							<span className="sb-post-author">
							<i className="mdi-account"></i>
							{postAuthor.name}
							</span>
						)}
						{post.date_gmt && post_date && (
							<span className="sb-post-date">
								<i className="mdi-clock-time-four-outline"></i>
								{dateFormat == 'relative_format' && `${post.relative_dates.created}`}
								{dateFormat == 'default' && dateI18n(__experimentalGetSettings().formats.date, post.date_gmt)}
								{dateFormat == 'custom' && dateI18n(customDateFormat, post.date_gmt)}
							</span>
						)}
						{post_comment && (
							<span className="sb-post-comment">
							<i className="mdi-comment-outline"></i>
							{postComment ? postComment.length : 0}
							</span>
							)}
							</div>
						)}
					</a>
				</div>
			</div>
		);
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
		{headerTitleTypography['family'] && (<GoogleFontLoad family={headerTitleTypography['family']} weight={headerTitleTypography['weight'].replace("italic", "i")}/>)}
		{categoryTypography['family'] && (<GoogleFontLoad family={categoryTypography['family']} weight={categoryTypography['weight'].replace("italic", "i")}/>)}
		{featuredTypography['family'] && (<GoogleFontLoad family={featuredTypography['family']} weight={featuredTypography['weight'].replace("italic", "i")}/>)}
		{sideTypography['family'] && (<GoogleFontLoad family={sideTypography['family']} weight={sideTypography['weight'].replace("italic", "i")}/>)}
		{metasTypography['family'] && (<GoogleFontLoad family={metasTypography['family']} weight={metasTypography['weight'].replace("italic", "i")}/>)}
		<InspectorControls>
			<PanelTabs>
				<div tabTitle={__("Layout", 'smart-blocks')}>
					{headerTitle && (
						<PanelBody
							title={__('Header', 'smart-blocks')}
							initialOpen={ false }
							>
							<Select
							label={ __('Style', 'smart-blocks') }
							value={ headerStyle }
							onChange={ (headerStyle) => setAttributes({ headerStyle } ) }
							options={ [
								{ value: 'sb-title-style1', label: 'Style 1' },
								{ value: 'sb-title-style2', label: 'Style 2' },
								{ value: 'sb-title-style3', label: 'Style 3' },
								{ value: 'sb-title-style4', label: 'Style 4' }
								] }
							/>
						</PanelBody>
					)}
					<PanelBody
						title={ __('Content Filter', 'smart-blocks') }
						initialOpen={ false }
						>
						<Select
							label={ __('Source', 'smart-blocks') }
							value={ postsPostType }
							onChange={ (postsPostType) => setAttributes({ postsPostType } ) }
							options={ allPostTypes }
							/>

						<QueryTaxonomyControls
							value={ categories }
							postType={ postsPostType }
							onChange={ (categories) => setAttributes({ categories } ) }
							/>

						<TokenMultiSelectControl
							label={ __('Exclude Posts', 'smart-blocks') }
							options={ allPostsSelect }
							value={ excludePosts }
							onChange={ (excludePosts) => setAttributes({ excludePosts } ) }
							/>

						<Select
							label={ __('Order By', 'smart-blocks') }
							value={ orderBy }
							onChange={ (orderBy) => setAttributes({ orderBy } ) }
							options={ [
								{ value: 'date', label: __('Date', 'smart-blocks') },
								{ value: 'modified', label: __('Last Modified Date', 'smart-blocks') },
								{ value: 'rand', label: __('Rand', 'smart-blocks') },
								{ value: 'comment_count', label: __('Comment Count', 'smart-blocks') },
								{ value: 'title', label: __('Title', 'smart-blocks') },
								{ value: 'author', label: __('Show Post Author', 'smart-blocks') }
								] }
							/>

						<Select
							label={ __('Order', 'smart-blocks') }
							value={ order }
							onChange={ (order) => setAttributes({ order } ) }
							options={ [
								{ value: 'desc', label: __('Descending', 'smart-blocks') },
								{ value: 'asc', label: __('Ascending', 'smart-blocks') }
								] }
							/>

						<CustomRangeControl
							label={__('Offset', 'smart-blocks')}
							value={ offset }
							onChange={ (offset) => setAttributes({offset} ) }
							min={ 0 }
							max={ 10 }
							/>
						</PanelBody>
						<PanelBody
							title={ __('Featured Block', 'smart-blocks') }
							initialOpen={ false }
							>
							<Select
								label={ __('Image Size', 'smart-blocks') }
								options={ getImageSizeOptions() }
								value={ featuredImageSize }
								onChange={ (featuredImageSize) => setAttributes({featuredImageSize} ) }
								/>
							<ToggleControl
								label={ __('Show Post Author', 'smart-blocks') }
								checked={ featuredPostAuthor }
								onChange={ (featuredPostAuthor) => setAttributes({featuredPostAuthor} ) }
								/>
							<ToggleControl
								label={ __('Show Post Date', 'smart-blocks') }
								checked={ featuredPostDate }
								onChange={ (featuredPostDate) => setAttributes({featuredPostDate} ) }
								/>
							<ToggleControl
								label={ __('Show Post Comments', 'smart-blocks') }
								checked={ featuredPostComments }
								onChange={ (featuredPostComments) => setAttributes({featuredPostComments} ) }
								/>
							<ToggleControl
								label={ __('Show Post Category', 'smart-blocks') }
								checked={ featuredPostCategory }
								onChange={ (featuredPostCategory) => setAttributes({featuredPostCategory} ) }
								/>
						</PanelBody>
						<PanelBody
							title={ __('Side Block', 'smart-blocks') }
							initialOpen={ false }
							>
							<Select
							label={ __('Large Image Size', 'smart-blocks') }
							options={ getImageSizeOptions() }
							value={ largeSideImageSize }
							onChange={ (largeSideImageSize) => setAttributes({largeSideImageSize} ) }
							/>
							<Select
							label={ __('Small Image Size', 'smart-blocks') }
							options={ getImageSizeOptions() }
							value={ sideImageSize }
							onChange={ (sideImageSize) => setAttributes({sideImageSize} ) }
							/>
							<ToggleControl
							label={ __('Show Post Author', 'smart-blocks') }
							checked={ sidePostAuthor }
							onChange={ (sidePostAuthor) => setAttributes({sidePostAuthor} ) }
							/>
							<ToggleControl
							label={ __('Show Post Date', 'smart-blocks') }
							checked={ sidePostDate }
							onChange={ (sidePostDate) => setAttributes({sidePostDate} ) }
							/>
							<ToggleControl
							label={ __('Show Post Comments', 'smart-blocks') }
							checked={ sidePostComments }
							onChange={ (sidePostComments) => setAttributes({sidePostComments} ) }
							/>
							<ToggleControl
							label={ __('Show Post Category', 'smart-blocks') }
							checked={ sidePostCategory }
							onChange={ (sidePostCategory) => setAttributes({sidePostCategory} ) }
							/>
						</PanelBody>
						<PanelBody
							title={ __('Additional Settings', 'smart-blocks') }
							initialOpen={ false }
							>
							<Select
								label={ __('Date Format', 'smart-blocks') }
								value={ dateFormat }
								onChange={ (dateFormat) => setAttributes({ dateFormat } ) }
								options={ [
									{ value: 'relative_format', label: __('Relative Format (Ago)', 'smart-blocks') },
									{ value: 'default', label: __('WordPress Default Format', 'smart-blocks') },
									{ value: 'custom', label: __('Custom Format', 'smart-blocks') }
									] }
								/>
								{dateFormat == 'custom' && (
									<TextControl
									label={ __('Custom Date Format', 'smart-blocks') }
									value={ customDateFormat }
									onChange={ (customDateFormat) => setAttributes({ customDateFormat } ) }
									/>
									)}
							<CustomRangeControl
								label={__('Module Height(px)', 'smart-blocks')}
								value={ moduleHeight }
								onChange={ (moduleHeight) => setAttributes({moduleHeight} ) }
								min={ 300 }
								max={ 1000 }
								/>
						</PanelBody>
					</div>
					<div tabTitle={__("Style", 'smart-blocks')}>
						{headerTitle && (
							<PanelBody
								title={__('Header Title', 'smart-blocks')}
								initialOpen={ false }
								>
								<Color
									label={ __('Color', 'smart-blocks') }
									enableAlpha
									value={headerColor}
									onChange={ (headerColor) => setAttributes({ headerColor } ) }
									/>
								<Color
									label={ __('Short Border Color', 'smart-blocks') }
									enableAlpha
									value={headerShortBorderColor}
									onChange={ (headerShortBorderColor) => setAttributes({ headerShortBorderColor } ) }
									/>
								<Color
									label={ __('Long Border Color', 'smart-blocks') }
									enableAlpha
									value={headerLongBorderColor}
									onChange={ (headerLongBorderColor) => setAttributes({ headerLongBorderColor } ) }
									/>
								<Typography
									label={ __('Typography', 'smart-blocks') }
									values={ headerTitleTypography }
									onChange={ (headerTitleTypography) => setAttributes({headerTitleTypography} ) }
	                                device={ device }
	                                setDevice={ setDevice }/>
							</PanelBody>
						)}
						<PanelBody
							title={__('Category', 'smart-blocks')}
							initialOpen={ false }
							>
							<Typography
								label={ __('Typography', 'smart-blocks') }
								values={ categoryTypography }
								onChange={ (categoryTypography) => setAttributes({categoryTypography} ) }
                                device={ device }
                                setDevice={ setDevice }/>
							<Tabs>
								<div tabTitle={__("Normal", 'smart-blocks')}>
									<Color
										label={ __('Background Color', 'smart-blocks') }
										enableAlpha
										value={categoryBackgroundColor}
										onChange={ (categoryBackgroundColor) => setAttributes({ categoryBackgroundColor } ) }
										/>
									<Color
										label={ __('Text Color', 'smart-blocks') }
										enableAlpha
										value={categoryTextColor}
										onChange={ (categoryTextColor) => setAttributes({ categoryTextColor } ) }
										/>
								</div>
								<div tabTitle={__("Hover", 'smart-blocks')}>
									<Color
										label={ __('Background Color', 'smart-blocks') }
										enableAlpha
										value={categoryBackgroundHoverColor}
										onChange={ (categoryBackgroundHoverColor) => setAttributes({ categoryBackgroundHoverColor } ) }
										/>
									<Color
										label={ __('Text Color', 'smart-blocks') }
										enableAlpha
										value={categoryTextHoverColor}
										onChange={ (categoryTextHoverColor) => setAttributes({ categoryTextHoverColor } ) }
										/>
								</div>
							</Tabs>
						</PanelBody>
						<PanelBody
							title={__('Title', 'smart-blocks')}
							initialOpen={ false }
							>
							<Color
								label={ __('Title Color', 'smart-blocks') }
								enableAlpha
								value={titleColor}
								onChange={ (titleColor) => setAttributes({ titleColor } ) }
								/>
							<Tabs>
								<div tabTitle={__("Featured Post", 'smart-blocks')}>
									<Typography
										label={ __('Typography', 'smart-blocks') }
										values={ featuredTypography }
										onChange={ (featuredTypography) => setAttributes({featuredTypography} ) }
		                                device={ device }
		                                setDevice={ setDevice }
										/>
									<Dimension
										label={ __('Margin', 'smart-blocks') }
										min="0"
										max="100"
										values={ featuredTitleMargin }
										onChange={ (featuredTitleMargin) => setAttributes({featuredTitleMargin} ) }
                                        device={device}
                                        setDevice={setDevice}
										/>
									</div>
										<div tabTitle={__("Side Post", 'smart-blocks')}>
										<Typography
										label={ __('Typography', 'smart-blocks') }
										values={ sideTypography }
										onChange={ (sideTypography) => setAttributes({sideTypography} ) }
		                                device={ device }
		                                setDevice={ setDevice }/>
									<Dimension
										label={ __('Margin', 'smart-blocks') }
										values={ sideTitleMargin }
										onChange={ (sideTitleMargin) => setAttributes({sideTitleMargin} ) }
                                        device={device}
                                        setDevice={setDevice}
										/>
								</div>
							</Tabs>
						</PanelBody>
						<PanelBody
							title={__('Metas', 'smart-blocks')}
							initialOpen={ false }
							>
							<Typography
								label={ __('Typography', 'smart-blocks') }
								values={ metasTypography }
								onChange={ (metasTypography) => setAttributes({metasTypography} ) }
                                device={ device }
                                setDevice={ setDevice }/>
						</PanelBody>
					</div>
					<div tabTitle={__("Advanced", 'smart-blocks')}>
                        <PanelBody
                            title={__('Layout', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Dimension
                                label={ __('Margin', 'smart-blocks') }
                                min="0"
                                max="100"
                                values={ blockMargin }
                                onChange={ ( blockMargin ) => setAttributes( {blockMargin} ) }
                                device={device}
                                setDevice={setDevice}
                            />
                            <Dimension
                                label={ __('Padding', 'smart-blocks') }
                                min="0"
                                max="100"
                                values={ blockPadding }
                                onChange={ ( blockPadding ) => setAttributes( {blockPadding} ) }
                                device={device}
                                setDevice={setDevice}
                            />
                        </PanelBody>

                        <PanelBody
                            title={__('Border', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Tabs>
                                <div tabTitle={__("Normal", 'smart-blocks')}>
                                    <Border
                                        value={borderNormal}
                                        setValue={ ( borderNormal ) => setAttributes( {borderNormal} ) }
                                        />
                                    {borderNormal && (
                                        <Color
                                            label={ __( 'Border Color', 'smart-blocks' ) }
                                            enableAlpha
                                            value={borderNormalColor}
                                            onChange={ ( borderNormalColor ) => setAttributes( { borderNormalColor } ) }
                                            />
                                    )}
                                    <Dimension
                                        label={ __('Border Width', 'smart-blocks') }
                                        values={ borderNormalWidth }
                                        onChange={ ( borderNormalWidth ) => setAttributes( {borderNormalWidth} ) }
                                        units={ ['px', 'em'] }
                                        />
                                    <Dimension
                                        label={ __('Border Radius', 'smart-blocks') }
                                        values={ borderNormalRadius }
                                        onChange={ ( borderNormalRadius ) => setAttributes( {borderNormalRadius} ) }
                                        />
                                    <BoxShadow
                                        values={ borderNormalBoxShadow }
                                        onChange={ ( borderNormalBoxShadow ) => setAttributes( {borderNormalBoxShadow} ) }
                                        />
                                </div>
                                <div tabTitle={__("Hover", 'smart-blocks')}>
                                    <Border
                                        value={borderHover}
                                        setValue={ ( borderHover ) => setAttributes( {borderHover} ) }
                                        />
                                    {borderHover && (
                                        <Color
                                            label={ __( 'Border Color', 'smart-blocks' ) }
                                            enableAlpha
                                            value={borderHoverColor}
                                            onChange={ ( borderHoverColor ) => setAttributes( { borderHoverColor } ) }
                                            />
                                    )}
                                    <Dimension
                                        label={ __('Border Width', 'smart-blocks') }
                                        values={ borderHoverWidth }
                                        onChange={ ( borderHoverWidth ) => setAttributes( {borderHoverWidth} ) }
                                        units={ ['px', 'em'] }
                                        />
                                    <Dimension
                                        label={ __('Border Radius', 'smart-blocks') }
                                        values={ borderHoverRadius }
                                        onChange={ ( borderHoverRadius ) => setAttributes( {borderHoverRadius} ) }
                                        />
                                    <BoxShadow
                                        values={ borderHoverBoxShadow }
                                        onChange={ ( borderHoverBoxShadow ) => setAttributes( {borderHoverBoxShadow} ) }
                                        />
                                </div>
                            </Tabs>
                        </PanelBody>
                        <PanelBody
                            title={__('Background', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Color
                                label={ __( 'Background Color', 'smart-blocks' ) }
                                enableAlpha
                                value={blockBgColor}
                                onChange={ ( blockBgColor ) => setAttributes( { blockBgColor } ) }
                            />
                        </PanelBody>
                    </div>
				</PanelTabs>
			</InspectorControls>
			<div id={id}>
				<div {...useBlockProps({
					className: "wp-block-smart-blocks sb-tile-block-wrap"
					} )}>
					<h2 className={headerClasses}>
						<RichText
							tagName="span"
							value={headerTitle}
							onChange={ (headerTitle) => setAttributes({ headerTitle } ) }
							placeholder={ __('Heading...', 'smart-blocks') }
							/>
					</h2>
					<div className="sb-tile-block ht-clearfix style1 space-10">
						{posts && posts.length > 0 && (
							<div className="sb-width-50 sb-height-100 sb-thumb sb-left-col">
								{postInner(posts[Object.keys(posts)[0]], 'featured')}
							</div>
						)}
						<div className="sb-width-50 sb-height-100 sb-parent sb-right-col">
							{posts && posts.length > 1 && (
								<div className="sb-width-100 sb-height-50 sb-thumb">
									{postInner(posts[Object.keys(posts)[1]], 'mid')}
								</div>
							)}
							{posts && posts.length > 2 && (
								<>
								<div className="sb-width-50 sb-height-50 sb-thumb">
									{postInner(posts[Object.keys(posts)[2]], '')}
								</div>
								<div className="sb-width-50 sb-height-50 sb-thumb">
									{posts.length > 3 && postInner(posts[Object.keys(posts)[3]], '')}
								</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
