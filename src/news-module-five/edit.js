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
import TypographyControl from '../controls/typography';
import GoogleFontLoad from '../utils/googlefontload';
import ColorControl from '../controls/color';
import Tabs from '../utils/tabs';
import SelectControl from '../controls/select';
import DimensionControl from '../controls/dimension';
import QueryTaxonomyControls from '../utils/querytaxonomycontrols';
import RangeSliderControl from '../controls/rangeslider';
import MultiSelectControl from '../controls/multiselect';
import BorderControl from '../controls/border';
import BoxShadowControl from '../controls/boxshadow';
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
		listingTitleMargin,
		categoryBackgroundColor,
		categoryTextColor,
		categoryBackgroundHoverColor,
		categoryTextHoverColor,
		titleColor,
		titleHoverColor,
		excerptColor,
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
        ${borderHover ? '--sb-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor + ';' : ''}
        ${borderNormalWidthTop ? '--sb-border-normal-width-top: ' + borderNormalWidthTop + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthRight ? '--sb-border-normal-width-right: ' + borderNormalWidthRight + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthBottom ? '--sb-border-normal-width-bottom: ' + borderNormalWidthBottom + borderNormalWidthUnit + ';' : ''}
        ${borderNormalWidthLeft ? '--sb-border-normal-width-left: ' + borderNormalWidthLeft + borderNormalWidthUnit + ';' : ''}
        ${borderHoverWidthTop ? '--sb-border-hover-width-top: ' + borderHoverWidthTop + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthRight ? '--sb-border-hover-width-right: ' + borderHoverWidthRight + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthBottom ? '--sb-border-hover-width-bottom: ' + borderHoverWidthBottom + borderHoverWidthUnit + ';' : ''}
        ${borderHoverWidthLeft ? '--sb-border-hover-width-left: ' + borderHoverWidthLeft + borderHoverWidthUnit + ';' : ''}
        ${borderNormalRadiusTop ? '--sb-border-normal-radius-top: ' + borderNormalRadiusTop + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusRight ? '--sb-border-normal-radius-right: ' + borderNormalRadiusRight + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusBottom ? '--sb-border-normal-radius-bottom: ' + borderNormalRadiusBottom + borderNormalRadiusUnit + ';' : ''}
        ${borderNormalRadiusLeft ? '--sb-border-normal-radius-left: ' + borderNormalRadiusLeft + borderNormalRadiusUnit + ';' : ''}
        ${borderHoverRadiusTop ? '--sb-border-hover-radius-top: ' + borderHoverRadiusTop + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusRight ? '--sb-border-hover-radius-right: ' + borderHoverRadiusRight + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusBottom ? '--sb-border-hover-radius-bottom: ' + borderHoverRadiusBottom + borderHoverRadiusUnit + ';' : ''}
        ${borderHoverRadiusLeft ? '--sb-border-hover-radius-left: ' + borderHoverRadiusLeft + borderHoverRadiusUnit + ';' : ''}
        ${borderNormalBoxShadowHorizontal ? '--sb-border-normal-box-shadow-horizontal: ' + borderNormalBoxShadowHorizontal + 'px;' : ''}
        ${borderNormalBoxShadowVertical ? '--sb-border-normal-box-shadow-vertical: ' + borderNormalBoxShadowVertical + 'px;' : ''}
        ${borderNormalBoxShadowBlur ? '--sb-border-normal-box-shadow-blur: ' + borderNormalBoxShadowBlur + 'px;' : ''}
        ${borderNormalBoxShadowSpread ? '--sb-border-normal-box-shadow-spread: ' + borderNormalBoxShadowSpread + 'px;' : ''}
        ${borderNormalBoxShadowColor ? '--sb-border-normal-box-shadow-color: ' + borderNormalBoxShadowColor + ';' : ''}
        ${borderNormalBoxShadowInset ? '--sb-border-normal-box-shadow-inset: ' + borderNormalBoxShadowInset + ';' : ''}
        ${borderHoverBoxShadowHorizontal ? '--sb-border-hover-box-shadow-horizontal: ' + borderHoverBoxShadowHorizontal + 'px;' : ''}
        ${borderHoverBoxShadowVertical ? '--sb-border-hover-box-shadow-vertical: ' + borderHoverBoxShadowVertical + 'px;' : ''}
        ${borderHoverBoxShadowBlur ? '--sb-border-hover-box-shadow-blur: ' + borderHoverBoxShadowBlur + 'px;' : ''}
        ${borderHoverBoxShadowSpread ? '--sb-border-hover-box-shadow-spread: ' + borderHoverBoxShadowSpread + 'px;' : ''}
        ${borderHoverBoxShadowColor ? '--sb-border-hover-box-shadow-color: ' + borderHoverBoxShadowColor + ';' : ''}
        ${borderHoverBoxShadowInset ? '--sb-border-hover-box-shadow-inset: ' + borderHoverBoxShadowInset + ';' : ''}
        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}
        ${blockMarginSmTop ? '--sb-block-margin-top-sm: ' + blockMarginSmTop + blockMarginUnit + ';' : ''}
        ${blockMarginSmRight ? '--sb-block-margin-right-sm: ' + blockMarginSmRight + blockMarginUnit + ';' : ''}
        ${blockMarginSmBottom ? '--sb-block-margin-bottom-sm: ' + blockMarginSmBottom + blockMarginUnit + ';' : ''}
        ${blockMarginSmLeft ? '--sb-block-margin-left-sm: ' + blockMarginSmLeft + blockMarginUnit + ';' : ''}
        ${blockMarginMdTop ? '--sb-block-margin-top-md: ' + blockMarginMdTop + blockMarginUnit + ';' : ''}
        ${blockMarginMdRight ? '--sb-block-margin-right-md: ' + blockMarginMdRight + blockMarginUnit + ';' : ''}
        ${blockMarginMdBottom ? '--sb-block-margin-bottom-md: ' + blockMarginMdBottom + blockMarginUnit + ';' : ''}
        ${blockMarginMdLeft ? '--sb-block-margin-left-md: ' + blockMarginMdLeft + blockMarginUnit + ';' : ''}
        ${blockMarginTop ? '--sb-block-margin-top-lg: ' + blockMarginTop + blockMarginUnit + ';' : ''}
        ${blockMarginRight ? '--sb-block-margin-right-lg: ' + blockMarginRight + blockMarginUnit + ';' : ''}
        ${blockMarginBottom ? '--sb-block-margin-bottom-lg: ' + blockMarginBottom + blockMarginUnit + ';' : ''}
        ${blockMarginLeft ? '--sb-block-margin-left-lg: ' + blockMarginLeft + blockMarginUnit + ';' : ''}
        ${blockPaddingSmTop ? '--sb-block-padding-top-sm: ' + blockPaddingSmTop + blockPaddingUnit + ';' : ''}
        ${blockPaddingSmRight ? '--sb-block-padding-right-sm: ' + blockPaddingSmRight + blockPaddingUnit + ';' : ''}
        ${blockPaddingSmBottom ? '--sb-block-padding-bottom-sm: ' + blockPaddingSmBottom + blockPaddingUnit + ';' : ''}
        ${blockPaddingSmLeft ? '--sb-block-padding-left-sm: ' + blockPaddingSmLeft + blockPaddingUnit + ';' : ''}
        ${blockPaddingMdTop ? '--sb-block-padding-top-md: ' + blockPaddingMdTop + blockPaddingUnit + ';' : ''}
        ${blockPaddingMdRight ? '--sb-block-padding-right-md: ' + blockPaddingMdRight + blockPaddingUnit + ';' : ''}
        ${blockPaddingMdBottom ? '--sb-block-padding-bottom-md: ' + blockPaddingMdBottom + blockPaddingUnit + ';' : ''}
        ${blockPaddingMdLeft ? '--sb-block-padding-left-md: ' + blockPaddingMdLeft + blockPaddingUnit + ';' : ''}
        ${blockPaddingTop ? '--sb-block-padding-top-lg: ' + blockPaddingTop + blockPaddingUnit + ';' : ''}
        ${blockPaddingRight ? '--sb-block-padding-right-lg: ' + blockPaddingRight + blockPaddingUnit + ';' : ''}
        ${blockPaddingBottom ? '--sb-block-padding-bottom-lg: ' + blockPaddingBottom + blockPaddingUnit + ';' : ''}
        ${blockPaddingLeft ? '--sb-block-padding-left-lg: ' + blockPaddingLeft + blockPaddingUnit + ';' : ''}
		${featuredImageHeight ? '--sb-featured-thumb-height: ' + featuredImageHeight + '%;' : ''}
		${listingImageHeight ? '--sb-listing-post-thumb-height: ' + listingImageHeight + '%;' : ''}
		${headerColor ? '--sb-header-color: ' + headerColor + ';' : ''}
		${headerShortBorderColor ? '--sb-header-short-border-color: ' + headerShortBorderColor + ';' : ''}
		${headerLongBorderColor ? '--sb-header-long-border-color: ' + headerLongBorderColor + ';' : ''}
		${headerTitleTypographyFamily ? '--sb-header-typo-family: ' + checkDefault(headerTitleTypographyFamily) + ';' : ''}
		${headerTitleTypographyWeight ? '--sb-header-typo-weight: ' + checkDefault(headerTitleTypographyWeight.replace(/\D/g, ''), headerTitleTypographyWeight) + ';' : ''}
		${headerTitleTypographyWeight ? '--sb-header-typo-style: ' + checkDefault(headerTitleTypographyWeight.replace(/\d+/g, ''), headerTitleTypographyWeight) + ';' : ''}
		${headerTitleTypographyTextTransform ? '--sb-header-typo-tt: ' + headerTitleTypographyTextTransform + ';' : ''}
		${headerTitleTypographyTextDecoration ? '--sb-header-typo-td: ' + headerTitleTypographyTextDecoration + ';' : ''}
		${headerTitleTypographyFontSizeSm ? '--sb-header-typo-fs-sm: ' + headerTitleTypographyFontSizeSm + headerTitleTypographyFontSizeUnit + ';' : ''}
		${headerTitleTypographyFontSizeMd ? '--sb-header-typo-fs-md: ' + headerTitleTypographyFontSizeMd + headerTitleTypographyFontSizeUnit + ';' : ''}
		${headerTitleTypographyFontSize ? '--sb-header-typo-fs-lg: ' + headerTitleTypographyFontSize + headerTitleTypographyFontSizeUnit + ';' : ''}
		${headerTitleTypographyLetterSpacingSm ? '--sb-header-typo-ls-sm: ' + headerTitleTypographyLetterSpacingSm + headerTitleTypographyLetterSpacingUnit + ';' : ''}
		${headerTitleTypographyLetterSpacingMd ? '--sb-header-typo-ls-md: ' + headerTitleTypographyLetterSpacingMd + headerTitleTypographyLetterSpacingUnit + ';' : ''}
		${headerTitleTypographyLetterSpacing ? '--sb-header-typo-ls-lg: ' + headerTitleTypographyLetterSpacing + headerTitleTypographyLetterSpacingUnit + ';' : ''}
		${headerTitleTypographyLineHeightSm ? '--sb-header-typo-lh-sm: ' + headerTitleTypographyLineHeightSm + headerTitleTypographyLineHeightUnit + ';' : ''}
		${headerTitleTypographyLineHeightMd ? '--sb-header-typo-lh-md: ' + headerTitleTypographyLineHeightMd + headerTitleTypographyLineHeightUnit + ';' : ''}
		${headerTitleTypographyLineHeight ? '--sb-header-typo-lh-lg: ' + headerTitleTypographyLineHeight + headerTitleTypographyLineHeightUnit + ';' : ''}
		${categoryTypographyFamily ? '--sb-category-typo-family: ' + checkDefault(categoryTypographyFamily) + ';' : ''}
		${categoryTypographyWeight ? '--sb-category-typo-weight: ' + checkDefault(categoryTypographyWeight.replace(/\D/g, ''), categoryTypographyWeight) + ';' : ''}
		${categoryTypographyWeight ? '--sb-category-typo-style: ' + checkDefault(categoryTypographyWeight.replace(/\d+/g, ''), categoryTypographyWeight) + ';' : ''}
		${categoryTypographyTextTransform ? '--sb-category-typo-tt: ' + categoryTypographyTextTransform + ';' : ''}
		${categoryTypographyTextDecoration ? '--sb-category-typo-td: ' + categoryTypographyTextDecoration + ';' : ''}
		${categoryTypographyFontSizeSm ? '--sb-category-typo-fs-sm: ' + categoryTypographyFontSizeSm + categoryTypographyFontSizeUnit + ';' : ''}
		${categoryTypographyFontSizeMd ? '--sb-category-typo-fs-md: ' + categoryTypographyFontSizeMd + categoryTypographyFontSizeUnit + ';' : ''}
		${categoryTypographyFontSize ? '--sb-category-typo-fs-lg: ' + categoryTypographyFontSize + categoryTypographyFontSizeUnit + ';' : ''}
		${categoryTypographyLetterSpacingSm ? '--sb-category-typo-ls-sm: ' + categoryTypographyLetterSpacingSm + categoryTypographyLetterSpacingUnit + ';' : ''}
		${categoryTypographyLetterSpacingMd ? '--sb-category-typo-ls-md: ' + categoryTypographyLetterSpacingMd + categoryTypographyLetterSpacingUnit + ';' : ''}
		${categoryTypographyLetterSpacing ? '--sb-category-typo-ls-lg: ' + categoryTypographyLetterSpacing + categoryTypographyLetterSpacingUnit + ';' : ''}
		${categoryTypographyLineHeightSm ? '--sb-category-typo-lh-sm: ' + categoryTypographyLineHeightSm + categoryTypographyLineHeightUnit + ';' : ''}
		${categoryTypographyLineHeightMd ? '--sb-category-typo-lh-md: ' + categoryTypographyLineHeightMd + categoryTypographyLineHeightUnit + ';' : ''}
		${categoryTypographyLineHeight ? '--sb-category-typo-lh-lg: ' + categoryTypographyLineHeight + categoryTypographyLineHeightUnit + ';' : ''}
		${categoryBackgroundColor ? '--sb-category-background-color: ' + categoryBackgroundColor + ';' : ''}
		${categoryTextColor ? '--sb-category-text-color: ' + categoryTextColor + ';' : ''}
		${categoryBackgroundHoverColor ? '--sb-category-background-hover-color: ' + categoryBackgroundHoverColor + ';' : ''}
		${categoryTextHoverColor ? '--sb-category-text-hover-color: ' + categoryTextHoverColor + ';' : ''}
		${titleColor ? '--sb-title-color: ' + titleColor + ';' : ''}
		${titleHoverColor ? '--sb-title-hover-color: ' + titleHoverColor + ';' : ''}
		${featuredTypographyFamily ? '--sb-featured-title-typo-family: ' + checkDefault(featuredTypographyFamily) + ';' : ''}
		${featuredTypographyWeight ? '--sb-featured-title-typo-weight: ' + checkDefault(featuredTypographyWeight.replace(/\D/g, ''), featuredTypographyWeight) + ';' : ''}
		${featuredTypographyWeight ? '--sb-featured-title-typo-style: ' + checkDefault(featuredTypographyWeight.replace(/\d+/g, ''), featuredTypographyWeight) + ';' : ''}
		${featuredTypographyTextTransform ? '--sb-featured-title-typo-tt: ' + featuredTypographyTextTransform + ';' : ''}
		${featuredTypographyTextDecoration ? '--sb-featured-title-typo-td: ' + featuredTypographyTextDecoration + ';' : ''}
		${featuredTypographyFontSizeSm ? '--sb-featured-title-typo-fs-sm: ' + featuredTypographyFontSizeSm + featuredTypographyFontSizeUnit + ';' : ''}
		${featuredTypographyFontSizeMd ? '--sb-featured-title-typo-fs-md: ' + featuredTypographyFontSizeMd + featuredTypographyFontSizeUnit + ';' : ''}
		${featuredTypographyFontSize ? '--sb-featured-title-typo-fs-lg: ' + featuredTypographyFontSize + featuredTypographyFontSizeUnit + ';' : ''}
		${featuredTypographyLetterSpacingSm ? '--sb-featured-title-typo-ls-sm: ' + featuredTypographyLetterSpacingSm + featuredTypographyLetterSpacingUnit + ';' : ''}
		${featuredTypographyLetterSpacingMd ? '--sb-featured-title-typo-ls-md: ' + featuredTypographyLetterSpacingMd + featuredTypographyLetterSpacingUnit + ';' : ''}
		${featuredTypographyLetterSpacing ? '--sb-featured-title-typo-ls-lg: ' + featuredTypographyLetterSpacing + featuredTypographyLetterSpacingUnit + ';' : ''}
		${featuredTypographyLineHeightSm ? '--sb-featured-title-typo-lh-sm: ' + featuredTypographyLineHeightSm + featuredTypographyLineHeightUnit + ';' : ''}
		${featuredTypographyLineHeightMd ? '--sb-featured-title-typo-lh-md: ' + featuredTypographyLineHeightMd + featuredTypographyLineHeightUnit + ';' : ''}
		${featuredTypographyLineHeight ? '--sb-featured-title-typo-lh-lg: ' + featuredTypographyLineHeight + featuredTypographyLineHeightUnit + ';' : ''}
		${featuredTitleMarginSmTop ? '--sb-featured-title-margin-top-sm: ' + featuredTitleMarginSmTop + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginSmRight ? '--sb-featured-title-margin-right-sm: ' + featuredTitleMarginSmRight + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginSmBottom ? '--sb-featured-title-margin-bottom-sm: ' + featuredTitleMarginSmBottom + featuredTitleMarginUnit + ' ;' : ''}
		${featuredTitleMarginSmLeft ? '--sb-featured-title-margin-left-sm: ' + featuredTitleMarginSmLeft + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginMdTop ? '--sb-featured-title-margin-top-md: ' + featuredTitleMarginMdTop + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginMdRight ? '--sb-featured-title-margin-right-md: ' + featuredTitleMarginMdRight + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginMdBottom ? '--sb-featured-title-margin-bottom-md: ' + featuredTitleMarginMdBottom + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginMdLeft ? '--sb-featured-title-margin-left-md: ' + featuredTitleMarginMdLeft + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginTop ? '--sb-featured-title-margin-top-lg: ' + featuredTitleMarginTop + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginRight ? '--sb-featured-title-margin-right-lg: ' + featuredTitleMarginRight + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginBottom ? '--sb-featured-title-margin-bottom-lg: ' + featuredTitleMarginBottom + featuredTitleMarginUnit + ';' : ''}
		${featuredTitleMarginLeft ? '--sb-featured-title-margin-left-lg: ' + featuredTitleMarginLeft + featuredTitleMarginUnit + ';' : ''}
		${listingTypographyFamily ? '--sb-listing-post-title-typo-family: ' + checkDefault(listingTypographyFamily) + ';' : ''}
		${listingTypographyWeight ? '--sb-listing-post-title-typo-weight: ' + checkDefault(listingTypographyWeight.replace(/\D/g, ''), listingTypographyWeight) + ';' : ''}
		${listingTypographyWeight ? '--sb-listing-post-title-typo-style: ' + checkDefault(listingTypographyWeight.replace(/\d+/g, ''), listingTypographyWeight) + ';' : ''}
		${listingTypographyTextTransform ? '--sb-listing-post-title-typo-tt: ' + listingTypographyTextTransform + ';' : ''}
		${listingTypographyTextDecoration ? '--sb-listing-post-title-typo-td: ' + listingTypographyTextDecoration + ';' : ''}
		${listingTypographyFontSizeSm ? '--sb-listing-post-title-typo-fs-sm: ' + listingTypographyFontSizeSm + listingTypographyFontSizeUnit + ';' : ''}
		${listingTypographyFontSizeMd ? '--sb-listing-post-title-typo-fs-md: ' + listingTypographyFontSizeMd + listingTypographyFontSizeUnit + ';' : ''}
		${listingTypographyFontSize ? '--sb-listing-post-title-typo-fs-lg: ' + listingTypographyFontSize + listingTypographyFontSizeUnit + ';' : ''}
		${listingTypographyLetterSpacingSm ? '--sb-listing-post-title-typo-ls-sm: ' + listingTypographyLetterSpacingSm + listingTypographyLetterSpacingUnit + ';' : ''}
		${listingTypographyLetterSpacingMd ? '--sb-listing-post-title-typo-ls-md: ' + listingTypographyLetterSpacingMd + listingTypographyLetterSpacingUnit + ';' : ''}
		${listingTypographyLetterSpacing ? '--sb-listing-post-title-typo-ls-lg: ' + listingTypographyLetterSpacing + listingTypographyLetterSpacingUnit + ';' : ''}
		${listingTypographyLineHeightSm ? '--sb-listing-post-title-typo-lh-sm: ' + listingTypographyLineHeightSm + listingTypographyLineHeightUnit + ';' : ''}
		${listingTypographyLineHeightMd ? '--sb-listing-post-title-typo-lh-md: ' + listingTypographyLineHeightMd + listingTypographyLineHeightUnit + ';' : ''}
		${listingTypographyLineHeight ? '--sb-listing-post-title-typo-lh-lg: ' + listingTypographyLineHeight + listingTypographyLineHeightUnit + ';' : ''}
		${listingTitleMarginSmTop ? '--sb-listing-post-title-margin-top-sm: ' + listingTitleMarginSmTop + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginSmRight ? '--sb-listing-post-title-margin-right-sm: ' + listingTitleMarginSmRight + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginSmBottom ? '--sb-listing-post-title-margin-bottom-sm: ' + listingTitleMarginSmBottom + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginSmLeft ? '--sb-listing-post-title-margin-left-sm: ' + listingTitleMarginSmLeft + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginMdTop ? '--sb-listing-post-title-margin-top-md: ' + listingTitleMarginMdTop + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginMdRight ? '--sb-listing-post-title-margin-right-md: ' + listingTitleMarginMdRight + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginMdBottom ? '--sb-listing-post-title-margin-bottom-md: ' + listingTitleMarginMdBottom + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginMdLeft ? '--sb-listing-post-title-margin-left-md: ' + listingTitleMarginMdLeft + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginTop ? '--sb-listing-post-title-margin-top-lg: ' + listingTitleMarginTop + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginRight ? '--sb-listing-post-title-margin-right-lg: ' + listingTitleMarginRight + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginBottom ? '--sb-listing-post-title-margin-bottom-lg: ' + listingTitleMarginBottom + listingTitleMarginUnit + ';' : ''}
		${listingTitleMarginLeft ? '--sb-listing-post-title-margin-left-lg: ' + listingTitleMarginLeft + listingTitleMarginUnit + ';' : ''}
		${excerptColor ? '--sb-excerpt-color: ' + excerptColor + ';' : ''}
		${excerptTypographyFamily ? '--sb-excerpt-typo-family: ' + checkDefault(excerptTypographyFamily) + ';' : ''}
		${excerptTypographyWeight ? '--sb-excerpt-typo-weight: ' + checkDefault(excerptTypographyWeight.replace(/\D/g, ''), excerptTypographyWeight) + ';' : ''}
		${excerptTypographyWeight ? '--sb-excerpt-typo-style: ' + checkDefault(excerptTypographyWeight.replace(/\d+/g, ''), excerptTypographyWeight) + ';' : ''}
		${excerptTypographyTextTransform ? '--sb-excerpt-typo-tt: ' + excerptTypographyTextTransform + ';' : ''}
		${excerptTypographyTextDecoration ? '--sb-excerpt-typo-td: ' + excerptTypographyTextDecoration + ';' : ''}
		${excerptTypographyFontSizeSm ? '--sb-excerpt-typo-fs-sm: ' + excerptTypographyFontSizeSm + excerptTypographyFontSizeUnit + ';' : ''}
		${excerptTypographyFontSizeMd ? '--sb-excerpt-typo-fs-md: ' + excerptTypographyFontSizeMd + excerptTypographyFontSizeUnit + ';' : ''}
		${excerptTypographyFontSize ? '--sb-excerpt-typo-fs-lg: ' + excerptTypographyFontSize + excerptTypographyFontSizeUnit + ';' : ''}
		${excerptTypographyLetterSpacingSm ? '--sb-excerpt-typo-ls-sm: ' + excerptTypographyLetterSpacingSm + excerptTypographyLetterSpacingUnit + ';' : ''}
		${excerptTypographyLetterSpacingMd ? '--sb-excerpt-typo-ls-md: ' + excerptTypographyLetterSpacingMd + excerptTypographyLetterSpacingUnit + ';' : ''}
		${excerptTypographyLetterSpacing ? '--sb-excerpt-typo-ls-lg: ' + excerptTypographyLetterSpacing + excerptTypographyLetterSpacingUnit + ';' : ''}
		${excerptTypographyLineHeightSm ? '--sb-excerpt-typo-lh-sm: ' + excerptTypographyLineHeightSm + excerptTypographyLineHeightUnit + ';' : ''}
		${excerptTypographyLineHeightMd ? '--sb-excerpt-typo-lh-md: ' + excerptTypographyLineHeightMd + excerptTypographyLineHeightUnit + ';' : ''}
		${excerptTypographyLineHeight ? '--sb-excerpt-typo-lh-lg: ' + excerptTypographyLineHeight + excerptTypographyLineHeightUnit + ';' : ''}
		${postMetasColor ? '--sb-post-metas-color: ' + postMetasColor + ';' : ''}
		${metasTypographyFamily ? '--sb-post-metas-typo-family: ' + checkDefault(metasTypographyFamily) + ';' : ''}
		${metasTypographyWeight ? '--sb-post-metas-typo-weight: ' + checkDefault(metasTypographyWeight.replace(/\D/g, ''), metasTypographyWeight) + ';' : ''}
		${metasTypographyWeight ? '--sb-post-metas-typo-style: ' + checkDefault(metasTypographyWeight.replace(/\d+/g, ''), metasTypographyWeight) + ';' : ''}
		${metasTypographyTextTransform ? '--sb-post-metas-typo-tt: ' + metasTypographyTextTransform + ';' : ''}
		${metasTypographyTextDecoration ? '--sb-post-metas-typo-td: ' + metasTypographyTextDecoration + ';' : ''}
		${metasTypographyFontSizeSm ? '--sb-post-metas-typo-fs-sm: ' + metasTypographyFontSizeSm + metasTypographyFontSizeUnit + ';' : ''}
		${metasTypographyFontSizeMd ? '--sb-post-metas-typo-fs-md: ' + metasTypographyFontSizeMd + metasTypographyFontSizeUnit + ';' : ''}
		${metasTypographyFontSize ? '--sb-post-metas-typo-fs-lg: ' + metasTypographyFontSize + metasTypographyFontSizeUnit + ';' : ''}
		${metasTypographyLetterSpacingSm ? '--sb-post-metas-typo-ls-sm: ' + metasTypographyLetterSpacingSm + metasTypographyLetterSpacingUnit + ';' : ''}
		${metasTypographyLetterSpacingMd ? '--sb-post-metas-typo-ls-md: ' + metasTypographyLetterSpacingMd + metasTypographyLetterSpacingUnit + ';' : ''}
		${metasTypographyLetterSpacing ? '--sb-post-metas-typo-ls-lg: ' + metasTypographyLetterSpacing + metasTypographyLetterSpacingUnit + ';' : ''}
		${metasTypographyLineHeightSm ? '--sb-post-metas-typo-lh-sm: ' + metasTypographyLineHeightSm + metasTypographyLineHeightUnit + ';' : ''}
		${metasTypographyLineHeightMd ? '--sb-post-metas-typo-lh-md: ' + metasTypographyLineHeightMd + metasTypographyLineHeightUnit + ';' : ''}
		${metasTypographyLineHeight ? '--sb-post-metas-typo-lh-lg: ' + metasTypographyLineHeight + metasTypographyLineHeightUnit + ';' : ''}
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
			per_page: - 1,
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
		const titleClass = block == 'featured' ? 'sb-large-title ' + getFontClass(featuredTypography) : getFontClass(listingTypography);
		const post_author = block == 'featured' ? featuredPostAuthor : listingPostAuthor;
		const post_date = block == 'featured' ? featuredPostDate : listingPostDate;
		const post_comment = block == 'featured' ? featuredPostComments : listingPostComments;
		const listing_image_size = listingImageSize ? listingImageSize : 'large';
		const featured_image_size = featuredImageSize ? featuredImageSize : 'large';
		const image_size = block == 'featured' ? featured_image_size : listing_image_size;
		const excerpt_length = block == 'featured' ? featuredExcerptLength : 0;
		const image_height = block == 'featured' ? featuredImageHeight : listingImageHeight;
		const display_category = block == 'featured' ? featuredPostCategory : listingPostCategory;
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
					{display_category && block == 'featured' && (
						<ul class="post-categories">
							{post.categories && post.categories.map((catId, index) => (catInner(catId, index, false)))}
						</ul>
					)}
				</div>
				<div class="sb-post-content">
					{display_category && block != 'featured' && (
						<ul class="post-categories">
							{post.categories && post.categories.map((catId, index) => (catInner(catId, index, true)))}
						</ul>
					)}
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
								<RawHTML>
									{post.content.rendered.replace(/<[^>]+>/g, '').substring(0, excerpt_length)}{excerpt_length < post.content.rendered.length ? `...` : ``}
								</RawHTML>
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
			{featuredTypography['family'] && (featuredTypography['family'] != 'Default') && (<GoogleFontLoad family={featuredTypography['family']} weight={featuredTypography['weight'].replace("italic", "i")} />)}
			{listingTypography['family'] && (listingTypography['family'] != 'Default') && (<GoogleFontLoad family={listingTypography['family']} weight={listingTypography['weight'].replace("italic", "i")} />)}
			{excerptTypography['family'] && (excerptTypography['family'] != 'Default') && (<GoogleFontLoad family={excerptTypography['family']} weight={excerptTypography['weight'].replace("italic", "i")} />)}
			{metasTypography['family'] && (metasTypography['family'] != 'Default') && (<GoogleFontLoad family={metasTypography['family']} weight={metasTypography['weight'].replace("italic", "i")} />)}
			<InspectorControls>
				<div className="sb-field sb-head-panel-tabs">
					<div className="sb-panel-tabs-wrap">
						<Button
							className={classnames('sb-panel-tab', { 'active-tab': 'layout' === activeTab })}
							onClick={() => setActiveTab('layout')}
						>
							<span className="dashicons">
								<LayoutIcon />
							</span>
							{__('Layout', 'smart-blocks')}
						</Button>

						<Button
							className={classnames('sb-panel-tab', { 'active-tab': 'style' === activeTab })}
							onClick={() => setActiveTab('style')}
						>
							<span className="dashicons">
								<StyleIcon />
							</span>
							{__('Style', 'smart-blocks')}
						</Button>

						<Button
							className={classnames('sb-panel-tab', { 'active-tab': 'advanced' === activeTab })}
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
											onChange={(headerStyle) => setAttributes({ headerStyle })}
											options={[
												{ value: 'sb-title-style1', label: 'Style 1' },
												{ value: 'sb-title-style2', label: 'Style 2' },
												{ value: 'sb-title-style3', label: 'Style 3' },
												{ value: 'sb-title-style4', label: 'Style 4' }
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
										onChange={(postsPostType) => setAttributes({ postsPostType })}
										options={allPostTypes}
									/>

									<QueryTaxonomyControls
										value={categories}
										postType={postsPostType}
										onChange={(categories) => setAttributes({ categories })}
									/>

									<MultiSelectControl
										label={__('Exclude Posts', 'smart-blocks')}
										options={allPostsSelect}
										value={excludePosts}
										onChange={(excludePosts) => setAttributes({ excludePosts })}
									/>

									<SelectControl
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

									<SelectControl
										label={__('Order', 'smart-blocks')}
										value={order}
										onChange={(order) => setAttributes({ order })}
										options={[
											{ value: 'desc', label: __('Descending', 'smart-blocks') },
											{ value: 'asc', label: __('Ascending', 'smart-blocks') }
										]}
									/>

									<RangeSliderControl
										label={__('Offset', 'smart-blocks')}
										value={offset}
										setValue={(offset) => setAttributes({ offset })}
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
										onChange={(featuredImageSize) => setAttributes({ featuredImageSize })}
									/>
									<RangeSliderControl
										label={__('Image Height (%)', 'smart-blocks')}
										value={featuredImageHeight}
										setValue={(featuredImageHeight) => setAttributes({ featuredImageHeight })}
										min={30}
										max={150}
									/>
									<RangeSliderControl
										label={__('Excerpt Length', 'smart-blocks')}
										value={featuredExcerptLength}
										setValue={(featuredExcerptLength) => setAttributes({ featuredExcerptLength })}
										min={0}
										max={600}
									/>
									<ToggleControl
										label={__('Show Post Author', 'smart-blocks')}
										checked={featuredPostAuthor}
										onChange={(featuredPostAuthor) => setAttributes({ featuredPostAuthor })}
									/>
									<ToggleControl
										label={__('Show Post Date', 'smart-blocks')}
										checked={featuredPostDate}
										onChange={(featuredPostDate) => setAttributes({ featuredPostDate })}
									/>
									<ToggleControl
										label={__('Show Post Comments', 'smart-blocks')}
										checked={featuredPostComments}
										onChange={(featuredPostComments) => setAttributes({ featuredPostComments })}
									/>
									<ToggleControl
										label={__('Show Post Category', 'smart-blocks')}
										checked={featuredPostCategory}
										onChange={(featuredPostCategory) => setAttributes({ featuredPostCategory })}
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
										onChange={(listingImageSize) => setAttributes({ listingImageSize })}
									/>
									<RangeSliderControl
										label={__('Image Height (%)', 'smart-blocks')}
										value={listingImageHeight}
										setValue={(listingImageHeight) => setAttributes({ listingImageHeight })}
										min={30}
										max={150}
									/>
									<ToggleControl
										label={__('Show Post Author', 'smart-blocks')}
										checked={listingPostAuthor}
										onChange={(listingPostAuthor) => setAttributes({ listingPostAuthor })}
									/>
									<ToggleControl
										label={__('Show Post Date', 'smart-blocks')}
										checked={listingPostDate}
										onChange={(listingPostDate) => setAttributes({ listingPostDate })}
									/>
									<ToggleControl
										label={__('Show Post Comments', 'smart-blocks')}
										checked={listingPostComments}
										onChange={(listingPostComments) => setAttributes({ listingPostComments })}
									/>
									<ToggleControl
										label={__('Show Post Category', 'smart-blocks')}
										checked={listingPostCategory}
										onChange={(listingPostCategory) => setAttributes({ listingPostCategory })}
									/>
								</PanelBody>
								<PanelBody
									title={__('Additional Settings', 'smart-blocks')}
									initialOpen={false}
								>
									<RangeSliderControl
										label={__('Image Border Radius(px)', 'smart-blocks')}
										value={imageBorderRadius}
										setValue={(imageBorderRadius) => setAttributes({ imageBorderRadius })}
										min={0}
										max={30}
									/>
									<SelectControl
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
										<ColorControl
											label={__('Color', 'smart-blocks')}
											enableAlpha
											value={headerColor}
											setValue={value => setAttributes({ headerColor: value })}
										/>
										<ColorControl
											label={__('Short Border Color', 'smart-blocks')}
											enableAlpha
											value={headerShortBorderColor}
											setValue={value => setAttributes({ headerShortBorderColor: value })}
										/>
										<ColorControl
											label={__('Long Border Color', 'smart-blocks')}
											enableAlpha
											value={headerLongBorderColor}
											setValue={value => setAttributes({ headerLongBorderColor: value })}
										/>
										<TypographyControl
											label={__('Typography', 'smart-blocks')}
											valueFamily={headerTitleTypographyFamily}
											setValueFamily={value => setAttributes({ headerTitleTypographyFamily: value })}
											valueWeight={headerTitleTypographyWeight}
											setValueWeight={value => setAttributes({ headerTitleTypographyWeight: value })}
											valueTextTransform={headerTitleTypographyTextTransform}
											setValueTextTransform={value => setAttributes({ headerTitleTypographyTextTransform: value })}
											valueTextDecoration={headerTitleTypographyTextDecoration}
											setValueTextDecoration={value => setAttributes({ headerTitleTypographyTextDecoration: value })}
											valueFontSizeSm={headerTitleTypographyFontSizeSm}
											setValueFontSizeSm={value => setAttributes({ headerTitleTypographyFontSizeSm: value })}
											valueFontSizeMd={headerTitleTypographyFontSizeMd}
											setValueFontSizeMd={value => setAttributes({ headerTitleTypographyFontSizeMd: value })}
											valueFontSize={headerTitleTypographyFontSize}
											setValueFontSize={value => setAttributes({ headerTitleTypographyFontSize: value })}
											valueFontSizeUnit={headerTitleTypographyFontSizeUnit}
											setValueFontSizeUnit={value => setAttributes({ headerTitleTypographyFontSizeUnit: value })}
											valueLetterSpacingSm={headerTitleTypographyLetterSpacingSm}
											setValueLetterSpacingSm={value => setAttributes({ headerTitleTypographyLetterSpacingSm: value })}
											valueLetterSpacingMd={headerTitleTypographyLetterSpacingMd}
											setValueLetterSpacingMd={value => setAttributes({ headerTitleTypographyLetterSpacingMd: value })}
											valueLetterSpacing={headerTitleTypographyLetterSpacing}
											setValueLetterSpacing={value => setAttributes({ headerTitleTypographyLetterSpacing: value })}
											valueLetterSpacingUnit={headerTitleTypographyLetterSpacingUnit}
											setValueLetterSpacingUnit={value => setAttributes({ headerTitleTypographyLetterSpacingUnit: value })}
											valueLineHeightSm={headerTitleTypographyLineHeightSm}
											setValueLineHeightSm={value => setAttributes({ headerTitleTypographyLineHeightSm: value })}
											valueLineHeightMd={headerTitleTypographyLineHeightMd}
											setValueLineHeightMd={value => setAttributes({ headerTitleTypographyLineHeightMd: value })}
											valueLineHeight={headerTitleTypographyLineHeight}
											setValueLineHeight={value => setAttributes({ headerTitleTypographyLineHeight: value })}
											valueLineHeightUnit={headerTitleTypographyLineHeightUnit}
											setValueLineHeightUnit={value => setAttributes({ headerTitleTypographyLineHeightUnit: value })}
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
										setValueFamily={value => setAttributes({ categoryTypographyFamily: value })}
										valueWeight={categoryTypographyWeight}
										setValueWeight={value => setAttributes({ categoryTypographyWeight: value })}
										valueTextTransform={categoryTypographyTextTransform}
										setValueTextTransform={value => setAttributes({ categoryTypographyTextTransform: value })}
										valueTextDecoration={categoryTypographyTextDecoration}
										setValueTextDecoration={value => setAttributes({ categoryTypographyTextDecoration: value })}
										valueFontSizeSm={categoryTypographyFontSizeSm}
										setValueFontSizeSm={value => setAttributes({ categoryTypographyFontSizeSm: value })}
										valueFontSizeMd={categoryTypographyFontSizeMd}
										setValueFontSizeMd={value => setAttributes({ categoryTypographyFontSizeMd: value })}
										valueFontSize={categoryTypographyFontSize}
										setValueFontSize={value => setAttributes({ categoryTypographyFontSize: value })}
										valueFontSizeUnit={categoryTypographyFontSizeUnit}
										setValueFontSizeUnit={value => setAttributes({ categoryTypographyFontSizeUnit: value })}
										valueLetterSpacingSm={categoryTypographyLetterSpacingSm}
										setValueLetterSpacingSm={value => setAttributes({ categoryTypographyLetterSpacingSm: value })}
										valueLetterSpacingMd={categoryTypographyLetterSpacingMd}
										setValueLetterSpacingMd={value => setAttributes({ categoryTypographyLetterSpacingMd: value })}
										valueLetterSpacing={categoryTypographyLetterSpacing}
										setValueLetterSpacing={value => setAttributes({ categoryTypographyLetterSpacing: value })}
										valueLetterSpacingUnit={categoryTypographyLetterSpacingUnit}
										setValueLetterSpacingUnit={value => setAttributes({ categoryTypographyLetterSpacingUnit: value })}
										valueLineHeightSm={categoryTypographyLineHeightSm}
										setValueLineHeightSm={value => setAttributes({ categoryTypographyLineHeightSm: value })}
										valueLineHeightMd={categoryTypographyLineHeightMd}
										setValueLineHeightMd={value => setAttributes({ categoryTypographyLineHeightMd: value })}
										valueLineHeight={categoryTypographyLineHeight}
										setValueLineHeight={value => setAttributes({ categoryTypographyLineHeight: value })}
										valueLineHeightUnit={categoryTypographyLineHeightUnit}
										setValueLineHeightUnit={value => setAttributes({ categoryTypographyLineHeightUnit: value })}
									/>
									<Tabs>
										<div tabTitle={__("Normal", 'smart-blocks')}>
											<ColorControl
												label={__('Background Color', 'smart-blocks')}
												enableAlpha
												value={categoryBackgroundColor}
												setValue={value => setAttributes({ categoryBackgroundColor: value })}
											/>
											<ColorControl
												label={__('Text Color', 'smart-blocks')}
												enableAlpha
												value={categoryTextColor}
												setValue={value => setAttributes({ categoryTextColor: value })}
											/>
										</div>
										<div tabTitle={__("Hover", 'smart-blocks')}>
											<ColorControl
												label={__('Background Color', 'smart-blocks')}
												enableAlpha
												value={categoryBackgroundHoverColor}
												setValue={value => setAttributes({ categoryBackgroundHoverColor: value })}
											/>
											<ColorControl
												label={__('Text Color', 'smart-blocks')}
												enableAlpha
												value={categoryTextHoverColor}
												setValue={value => setAttributes({ categoryTextHoverColor: value })}
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
										setValue={value => setAttributes({ titleColor: value })}
									/>
									<ColorControl
										label={__('Title Color(Hover)', 'smart-blocks')}
										enableAlpha
										value={titleHoverColor}
										setValue={value => setAttributes({ titleHoverColor: value })}
									/>
									<Tabs>
										<div tabTitle={__("Featured", 'smart-blocks')}>
											<TypographyControl
												label={__('Typography', 'smart-blocks')}
												valueFamily={featuredTypographyFamily}
												setValueFamily={value => setAttributes({ featuredTypographyFamily: value })}
												valueWeight={featuredTypographyWeight}
												setValueWeight={value => setAttributes({ featuredTypographyWeight: value })}
												valueTextTransform={featuredTypographyTextTransform}
												setValueTextTransform={value => setAttributes({ featuredTypographyTextTransform: value })}
												valueTextDecoration={featuredTypographyTextDecoration}
												setValueTextDecoration={value => setAttributes({ featuredTypographyTextDecoration: value })}
												valueFontSizeSm={featuredTypographyFontSizeSm}
												setValueFontSizeSm={value => setAttributes({ featuredTypographyFontSizeSm: value })}
												valueFontSizeMd={featuredTypographyFontSizeMd}
												setValueFontSizeMd={value => setAttributes({ featuredTypographyFontSizeMd: value })}
												valueFontSize={featuredTypographyFontSize}
												setValueFontSize={value => setAttributes({ featuredTypographyFontSize: value })}
												valueFontSizeUnit={featuredTypographyFontSizeUnit}
												setValueFontSizeUnit={value => setAttributes({ featuredTypographyFontSizeUnit: value })}
												valueLetterSpacingSm={featuredTypographyLetterSpacingSm}
												setValueLetterSpacingSm={value => setAttributes({ featuredTypographyLetterSpacingSm: value })}
												valueLetterSpacingMd={featuredTypographyLetterSpacingMd}
												setValueLetterSpacingMd={value => setAttributes({ featuredTypographyLetterSpacingMd: value })}
												valueLetterSpacing={featuredTypographyLetterSpacing}
												setValueLetterSpacing={value => setAttributes({ featuredTypographyLetterSpacing: value })}
												valueLetterSpacingUnit={featuredTypographyLetterSpacingUnit}
												setValueLetterSpacingUnit={value => setAttributes({ featuredTypographyLetterSpacingUnit: value })}
												valueLineHeightSm={featuredTypographyLineHeightSm}
												setValueLineHeightSm={value => setAttributes({ featuredTypographyLineHeightSm: value })}
												valueLineHeightMd={featuredTypographyLineHeightMd}
												setValueLineHeightMd={value => setAttributes({ featuredTypographyLineHeightMd: value })}
												valueLineHeight={featuredTypographyLineHeight}
												setValueLineHeight={value => setAttributes({ featuredTypographyLineHeight: value })}
												valueLineHeightUnit={featuredTypographyLineHeightUnit}
												setValueLineHeightUnit={value => setAttributes({ featuredTypographyLineHeightUnit: value })}
											/>
											<DimensionControl
												label={__('Margin', 'smart-blocks')}
												min="0"
												max="100"
												dimensionTop={featuredTitleMarginTop}
												setDimensionTop={value => setAttributes({ featuredTitleMarginTop: value })}
												dimensionMdTop={featuredTitleMarginMdTop}
												setDimensionMdTop={value => setAttributes({ featuredTitleMarginMdTop: value })}
												dimensionSmTop={featuredTitleMarginSmTop}
												setDimensionSmTop={value => setAttributes({ featuredTitleMarginSmTop: value })}

												dimensionLeft={featuredTitleMarginLeft}
												setDimensionLeft={value => setAttributes({ featuredTitleMarginLeft: value })}
												dimensionMdLeft={featuredTitleMarginMdLeft}
												setDimensionMdLeft={value => setAttributes({ featuredTitleMarginMdLeft: value })}
												dimensionSmLeft={featuredTitleMarginSmLeft}
												setDimensionSmLeft={value => setAttributes({ featuredTitleMarginSmLeft: value })}

												dimensionRight={featuredTitleMarginRight}
												setDimensionRight={value => setAttributes({ featuredTitleMarginRight: value })}
												dimensionMdRight={featuredTitleMarginMdRight}
												setDimensionMdRight={value => setAttributes({ featuredTitleMarginMdRight: value })}
												dimensionSmRight={featuredTitleMarginSmRight}
												setDimensionSmRight={value => setAttributes({ featuredTitleMarginSmRight: value })}

												dimensionBottom={featuredTitleMarginBottom}
												setDimensionBottom={value => setAttributes({ featuredTitleMarginBottom: value })}
												dimensionMdBottom={featuredTitleMarginMdBottom}
												setDimensionMdBottom={value => setAttributes({ featuredTitleMarginMdBottom: value })}
												dimensionSmBottom={featuredTitleMarginSmBottom}
												setDimensionSmBottom={value => setAttributes({ featuredTitleMarginSmBottom: value })}

												unit={featuredTitleMarginUnit}
												setUnit={value => setAttributes({ featuredTitleMarginUnit: value })}
												responsive={!0}
											/>
										</div>
										<div tabTitle={__("Listing Post", 'smart-blocks')}>
											<TypographyControl
												label={__('Typography', 'smart-blocks')}
												valueFamily={listingTypographyFamily}
												setValueFamily={value => setAttributes({ listingTypographyFamily: value })}
												valueWeight={listingTypographyWeight}
												setValueWeight={value => setAttributes({ listingTypographyWeight: value })}
												valueTextTransform={listingTypographyTextTransform}
												setValueTextTransform={value => setAttributes({ listingTypographyTextTransform: value })}
												valueTextDecoration={listingTypographyTextDecoration}
												setValueTextDecoration={value => setAttributes({ listingTypographyTextDecoration: value })}
												valueFontSizeSm={listingTypographyFontSizeSm}
												setValueFontSizeSm={value => setAttributes({ listingTypographyFontSizeSm: value })}
												valueFontSizeMd={listingTypographyFontSizeMd}
												setValueFontSizeMd={value => setAttributes({ listingTypographyFontSizeMd: value })}
												valueFontSize={listingTypographyFontSize}
												setValueFontSize={value => setAttributes({ listingTypographyFontSize: value })}
												valueFontSizeUnit={listingTypographyFontSizeUnit}
												setValueFontSizeUnit={value => setAttributes({ listingTypographyFontSizeUnit: value })}
												valueLetterSpacingSm={listingTypographyLetterSpacingSm}
												setValueLetterSpacingSm={value => setAttributes({ listingTypographyLetterSpacingSm: value })}
												valueLetterSpacingMd={listingTypographyLetterSpacingMd}
												setValueLetterSpacingMd={value => setAttributes({ listingTypographyLetterSpacingMd: value })}
												valueLetterSpacing={listingTypographyLetterSpacing}
												setValueLetterSpacing={value => setAttributes({ listingTypographyLetterSpacing: value })}
												valueLetterSpacingUnit={listingTypographyLetterSpacingUnit}
												setValueLetterSpacingUnit={value => setAttributes({ listingTypographyLetterSpacingUnit: value })}
												valueLineHeightSm={listingTypographyLineHeightSm}
												setValueLineHeightSm={value => setAttributes({ listingTypographyLineHeightSm: value })}
												valueLineHeightMd={listingTypographyLineHeightMd}
												setValueLineHeightMd={value => setAttributes({ listingTypographyLineHeightMd: value })}
												valueLineHeight={listingTypographyLineHeight}
												setValueLineHeight={value => setAttributes({ listingTypographyLineHeight: value })}
												valueLineHeightUnit={listingTypographyLineHeightUnit}
												setValueLineHeightUnit={value => setAttributes({ listingTypographyLineHeightUnit: value })}
											/>
											<DimensionControl
												label={__('Margin', 'smart-blocks')}
												dimensionTop={listingTitleMarginTop}
												setDimensionTop={value => setAttributes({ listingTitleMarginTop: value })}
												dimensionMdTop={listingTitleMarginMdTop}
												setDimensionMdTop={value => setAttributes({ listingTitleMarginMdTop: value })}
												dimensionSmTop={listingTitleMarginSmTop}
												setDimensionSmTop={value => setAttributes({ listingTitleMarginSmTop: value })}

												dimensionLeft={listingTitleMarginLeft}
												setDimensionLeft={value => setAttributes({ listingTitleMarginLeft: value })}
												dimensionMdLeft={listingTitleMarginMdLeft}
												setDimensionMdLeft={value => setAttributes({ listingTitleMarginMdLeft: value })}
												dimensionSmLeft={listingTitleMarginSmLeft}
												setDimensionSmLeft={value => setAttributes({ listingTitleMarginSmLeft: value })}

												dimensionRight={listingTitleMarginRight}
												setDimensionRight={value => setAttributes({ listingTitleMarginRight: value })}
												dimensionMdRight={listingTitleMarginMdRight}
												setDimensionMdRight={value => setAttributes({ listingTitleMarginMdRight: value })}
												dimensionSmRight={listingTitleMarginSmRight}
												setDimensionSmRight={value => setAttributes({ listingTitleMarginSmRight: value })}

												dimensionBottom={listingTitleMarginBottom}
												setDimensionBottom={value => setAttributes({ listingTitleMarginBottom: value })}
												dimensionMdBottom={listingTitleMarginMdBottom}
												setDimensionMdBottom={value => setAttributes({ listingTitleMarginMdBottom: value })}
												dimensionSmBottom={listingTitleMarginSmBottom}
												setDimensionSmBottom={value => setAttributes({ listingTitleMarginSmBottom: value })}

												unit={listingTitleMarginUnit}
												setUnit={value => setAttributes({ listingTitleMarginUnit: value })}
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
										setValue={value => setAttributes({ excerptColor: value })}
									/>
									<TypographyControl
										label={__('Typography', 'smart-blocks')}
										valueFamily={excerptTypographyFamily}
										setValueFamily={value => setAttributes({ excerptTypographyFamily: value })}
										valueWeight={excerptTypographyWeight}
										setValueWeight={value => setAttributes({ excerptTypographyWeight: value })}
										valueTextTransform={excerptTypographyTextTransform}
										setValueTextTransform={value => setAttributes({ excerptTypographyTextTransform: value })}
										valueTextDecoration={excerptTypographyTextDecoration}
										setValueTextDecoration={value => setAttributes({ excerptTypographyTextDecoration: value })}
										valueFontSizeSm={excerptTypographyFontSizeSm}
										setValueFontSizeSm={value => setAttributes({ excerptTypographyFontSizeSm: value })}
										valueFontSizeMd={excerptTypographyFontSizeMd}
										setValueFontSizeMd={value => setAttributes({ excerptTypographyFontSizeMd: value })}
										valueFontSize={excerptTypographyFontSize}
										setValueFontSize={value => setAttributes({ excerptTypographyFontSize: value })}
										valueFontSizeUnit={excerptTypographyFontSizeUnit}
										setValueFontSizeUnit={value => setAttributes({ excerptTypographyFontSizeUnit: value })}
										valueLetterSpacingSm={excerptTypographyLetterSpacingSm}
										setValueLetterSpacingSm={value => setAttributes({ excerptTypographyLetterSpacingSm: value })}
										valueLetterSpacingMd={excerptTypographyLetterSpacingMd}
										setValueLetterSpacingMd={value => setAttributes({ excerptTypographyLetterSpacingMd: value })}
										valueLetterSpacing={excerptTypographyLetterSpacing}
										setValueLetterSpacing={value => setAttributes({ excerptTypographyLetterSpacing: value })}
										valueLetterSpacingUnit={excerptTypographyLetterSpacingUnit}
										setValueLetterSpacingUnit={value => setAttributes({ excerptTypographyLetterSpacingUnit: value })}
										valueLineHeightSm={excerptTypographyLineHeightSm}
										setValueLineHeightSm={value => setAttributes({ excerptTypographyLineHeightSm: value })}
										valueLineHeightMd={excerptTypographyLineHeightMd}
										setValueLineHeightMd={value => setAttributes({ excerptTypographyLineHeightMd: value })}
										valueLineHeight={excerptTypographyLineHeight}
										setValueLineHeight={value => setAttributes({ excerptTypographyLineHeight: value })}
										valueLineHeightUnit={excerptTypographyLineHeightUnit}
										setValueLineHeightUnit={value => setAttributes({ excerptTypographyLineHeightUnit: value })}
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
										setValue={value => setAttributes({ postMetasColor: value })}
									/>
									<TypographyControl
										label={__('Typography', 'smart-blocks')}
										valueFamily={metasTypographyFamily}
										setValueFamily={value => setAttributes({ metasTypographyFamily: value })}
										valueWeight={metasTypographyWeight}
										setValueWeight={value => setAttributes({ metasTypographyWeight: value })}
										valueTextTransform={metasTypographyTextTransform}
										setValueTextTransform={value => setAttributes({ metasTypographyTextTransform: value })}
										valueTextDecoration={metasTypographyTextDecoration}
										setValueTextDecoration={value => setAttributes({ metasTypographyTextDecoration: value })}
										valueFontSizeSm={metasTypographyFontSizeSm}
										setValueFontSizeSm={value => setAttributes({ metasTypographyFontSizeSm: value })}
										valueFontSizeMd={metasTypographyFontSizeMd}
										setValueFontSizeMd={value => setAttributes({ metasTypographyFontSizeMd: value })}
										valueFontSize={metasTypographyFontSize}
										setValueFontSize={value => setAttributes({ metasTypographyFontSize: value })}
										valueFontSizeUnit={metasTypographyFontSizeUnit}
										setValueFontSizeUnit={value => setAttributes({ metasTypographyFontSizeUnit: value })}
										valueLetterSpacingSm={metasTypographyLetterSpacingSm}
										setValueLetterSpacingSm={value => setAttributes({ metasTypographyLetterSpacingSm: value })}
										valueLetterSpacingMd={metasTypographyLetterSpacingMd}
										setValueLetterSpacingMd={value => setAttributes({ metasTypographyLetterSpacingMd: value })}
										valueLetterSpacing={metasTypographyLetterSpacing}
										setValueLetterSpacing={value => setAttributes({ metasTypographyLetterSpacing: value })}
										valueLetterSpacingUnit={metasTypographyLetterSpacingUnit}
										setValueLetterSpacingUnit={value => setAttributes({ metasTypographyLetterSpacingUnit: value })}
										valueLineHeightSm={metasTypographyLineHeightSm}
										setValueLineHeightSm={value => setAttributes({ metasTypographyLineHeightSm: value })}
										valueLineHeightMd={metasTypographyLineHeightMd}
										setValueLineHeightMd={value => setAttributes({ metasTypographyLineHeightMd: value })}
										valueLineHeight={metasTypographyLineHeight}
										setValueLineHeight={value => setAttributes({ metasTypographyLineHeight: value })}
										valueLineHeightUnit={metasTypographyLineHeightUnit}
										setValueLineHeightUnit={value => setAttributes({ metasTypographyLineHeightUnit: value })}
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
										setDimensionTop={value => setAttributes({ blockMarginTop: value })}
										dimensionMdTop={blockMarginMdTop}
										setDimensionMdTop={value => setAttributes({ blockMarginMdTop: value })}
										dimensionSmTop={blockMarginSmTop}
										setDimensionSmTop={value => setAttributes({ blockMarginSmTop: value })}

										dimensionLeft={blockMarginLeft}
										setDimensionLeft={value => setAttributes({ blockMarginLeft: value })}
										dimensionMdLeft={blockMarginMdLeft}
										setDimensionMdLeft={value => setAttributes({ blockMarginMdLeft: value })}
										dimensionSmLeft={blockMarginSmLeft}
										setDimensionSmLeft={value => setAttributes({ blockMarginSmLeft: value })}

										dimensionRight={blockMarginRight}
										setDimensionRight={value => setAttributes({ blockMarginRight: value })}
										dimensionMdRight={blockMarginMdRight}
										setDimensionMdRight={value => setAttributes({ blockMarginMdRight: value })}
										dimensionSmRight={blockMarginSmRight}
										setDimensionSmRight={value => setAttributes({ blockMarginSmRight: value })}

										dimensionBottom={blockMarginBottom}
										setDimensionBottom={value => setAttributes({ blockMarginBottom: value })}
										dimensionMdBottom={blockMarginMdBottom}
										setDimensionMdBottom={value => setAttributes({ blockMarginMdBottom: value })}
										dimensionSmBottom={blockMarginSmBottom}
										setDimensionSmBottom={value => setAttributes({ blockMarginSmBottom: value })}

										unit={blockMarginUnit}
										setUnit={value => setAttributes({ blockMarginUnit: value })}
										responsive={!0}
									/>
									<DimensionControl
										label={__('Padding', 'smart-blocks')}
										min="0"
										max="100"
										dimensionTop={blockPaddingTop}
										setDimensionTop={value => setAttributes({ blockPaddingTop: value })}
										dimensionMdTop={blockPaddingMdTop}
										setDimensionMdTop={value => setAttributes({ blockPaddingMdTop: value })}
										dimensionSmTop={blockPaddingSmTop}
										setDimensionSmTop={value => setAttributes({ blockPaddingSmTop: value })}

										dimensionLeft={blockPaddingLeft}
										setDimensionLeft={value => setAttributes({ blockPaddingLeft: value })}
										dimensionMdLeft={blockPaddingMdLeft}
										setDimensionMdLeft={value => setAttributes({ blockPaddingMdLeft: value })}
										dimensionSmLeft={blockPaddingSmLeft}
										setDimensionSmLeft={value => setAttributes({ blockPaddingSmLeft: value })}

										dimensionRight={blockPaddingRight}
										setDimensionRight={value => setAttributes({ blockPaddingRight: value })}
										dimensionMdRight={blockPaddingMdRight}
										setDimensionMdRight={value => setAttributes({ blockPaddingMdRight: value })}
										dimensionSmRight={blockPaddingSmRight}
										setDimensionSmRight={value => setAttributes({ blockPaddingSmRight: value })}

										dimensionBottom={blockPaddingBottom}
										setDimensionBottom={value => setAttributes({ blockPaddingBottom: value })}
										dimensionMdBottom={blockPaddingMdBottom}
										setDimensionMdBottom={value => setAttributes({ blockPaddingMdBottom: value })}
										dimensionSmBottom={blockPaddingSmBottom}
										setDimensionSmBottom={value => setAttributes({ blockPaddingSmBottom: value })}

										unit={blockPaddingUnit}
										setUnit={value => setAttributes({ blockPaddingUnit: value })}
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
												setValue={(borderNormal) => setAttributes({ borderNormal })}
											/>
											{borderNormal && (
												<ColorControl
													label={__('Border Color', 'smart-blocks')}
													enableAlpha
													value={borderNormalColor}
													setValue={value => setAttributes({ borderNormalColor: value })}
												/>
											)}
											<DimensionControl
												label={__('Border Width', 'smart-blocks')}
												dimensionTop={borderNormalWidthTop}
												setDimensionTop={value => setAttributes({ borderNormalWidthTop: value })}

												dimensionLeft={borderNormalWidthLeft}
												setDimensionLeft={value => setAttributes({ borderNormalWidthLeft: value })}

												dimensionRight={borderNormalWidthRight}
												setDimensionRight={value => setAttributes({ borderNormalWidthRight: value })}

												dimensionBottom={borderNormalWidthBottom}
												setDimensionBottom={value => setAttributes({ borderNormalWidthBottom: value })}

												unit={borderNormalWidthUnit}
												setUnit={value => setAttributes({ borderNormalWidthUnit: value })}
												units={['px', 'em']}
											/>
											<DimensionControl
												label={__('Border Radius', 'smart-blocks')}
												dimensionTop={borderNormalRadiusTop}
												setDimensionTop={value => setAttributes({ borderNormalRadiusTop: value })}

												dimensionLeft={borderNormalRadiusLeft}
												setDimensionLeft={value => setAttributes({ borderNormalRadiusLeft: value })}

												dimensionRight={borderNormalRadiusRight}
												setDimensionRight={value => setAttributes({ borderNormalRadiusRight: value })}

												dimensionBottom={borderNormalRadiusBottom}
												setDimensionBottom={value => setAttributes({ borderNormalRadiusBottom: value })}

												unit={borderNormalRadiusUnit}
												setUnit={value => setAttributes({ borderNormalRadiusUnit: value })}
											/>
											<BoxShadowControl
												values={borderNormalBoxShadow}
												onChange={(borderNormalBoxShadow) => setAttributes({ borderNormalBoxShadow })}
											/>
										</div>
										<div tabTitle={__("Hover", 'smart-blocks')}>
											<BorderControl
												value={borderHover}
												setValue={(borderHover) => setAttributes({ borderHover })}
											/>
											{borderHover && (
												<ColorControl
													label={__('Border Color', 'smart-blocks')}
													enableAlpha
													value={borderHoverColor}
													setValue={value => setAttributes({ borderHoverColor: value })}
												/>
											)}
											<DimensionControl
												label={__('Border Width', 'smart-blocks')}
												dimensionTop={borderHoverWidthTop}
												setDimensionTop={value => setAttributes({ borderHoverWidthTop: value })}

												dimensionLeft={borderHoverWidthLeft}
												setDimensionLeft={value => setAttributes({ borderHoverWidthLeft: value })}

												dimensionRight={borderHoverWidthRight}
												setDimensionRight={value => setAttributes({ borderHoverWidthRight: value })}

												dimensionBottom={borderHoverWidthBottom}
												setDimensionBottom={value => setAttributes({ borderHoverWidthBottom: value })}

												unit={borderHoverWidthUnit}
												setUnit={value => setAttributes({ borderHoverWidthUnit: value })}
												units={['px', 'em']}
											/>
											<DimensionControl
												label={__('Border Radius', 'smart-blocks')}
												dimensionTop={borderHoverRadiusTop}
												setDimensionTop={value => setAttributes({ borderHoverRadiusTop: value })}

												dimensionLeft={borderHoverRadiusLeft}
												setDimensionLeft={value => setAttributes({ borderHoverRadiusLeft: value })}

												dimensionRight={borderHoverRadiusRight}
												setDimensionRight={value => setAttributes({ borderHoverRadiusRight: value })}

												dimensionBottom={borderHoverRadiusBottom}
												setDimensionBottom={value => setAttributes({ borderHoverRadiusBottom: value })}

												unit={borderHoverRadiusUnit}
												setUnit={value => setAttributes({ borderHoverRadiusUnit: value })}
											/>
											<BoxShadowControl
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
									<ColorControl
										label={__('Background Color', 'smart-blocks')}
										enableAlpha
										value={blockBgColor}
										setValue={value => setAttributes({ blockBgColor: value })}
									/>
								</PanelBody>
							</>
						)}
					</div>
				</div>
			</InspectorControls>
			<div id={id}>
				<div {...useBlockProps({
					className: "sb-blocks sb-news-module-five"
				})}>
					<h2 className={headerClasses}>
						<RichText
							tagName="span"
							value={headerTitle}
							onChange={(headerTitle) => setAttributes({ headerTitle })}
							placeholder={__('Heading...', 'smart-blocks')}
						/>
					</h2>
					<div className="sb-news-module-five-wrap">
						{posts && posts.length > 0 && (
							<div className="sb-big-block">
								{postInner(posts[Object.keys(posts)[0]], 'featured')}
							</div>
						)}
						{posts && posts.length > 1 && (
							<div className="sb-small-block">
								{(function (post, i) {
									let rows = [];
									while (++i < post.length) {
										rows.push(postInner(posts[Object.keys(posts)[i]]))
									}
									return rows;
								})(posts, 0)}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
