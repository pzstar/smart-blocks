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
        bottomImageSize,
        bottomImageHeight,
        bottomPostAuthor,
        bottomPostDate,
        bottomPostComments,
        bottomPostCategory,


        bottomTypographyFamily,
        bottomTypographyWeight,
        bottomTypographyTextTransform,
        bottomTypographyTextDecoration,
        bottomTypographyFontSizeSm,
        bottomTypographyFontSizeMd,
        bottomTypographyFontSize,
        bottomTypographyFontSizeUnit,
        bottomTypographyLetterSpacingSm,
        bottomTypographyLetterSpacingMd,
        bottomTypographyLetterSpacing,
        bottomTypographyLetterSpacingUnit,
        bottomTypographyLineHeightSm,
        bottomTypographyLineHeightMd,
        bottomTypographyLineHeight,
        bottomTypographyLineHeightUnit,

        topImageSize,
        topImageHeight,
        topPostAuthor,
        topPostDate,
        topPostComments,
        topPostCategory,
        topTitleMargin,

        topTypographyFamily,
        topTypographyWeight,
        topTypographyTextTransform,
        topTypographyTextDecoration,
        topTypographyFontSizeSm,
        topTypographyFontSizeMd,
        topTypographyFontSize,
        topTypographyFontSizeUnit,
        topTypographyLetterSpacingSm,
        topTypographyLetterSpacingMd,
        topTypographyLetterSpacing,
        topTypographyLetterSpacingUnit,
        topTypographyLineHeightSm,
        topTypographyLineHeightMd,
        topTypographyLineHeight,
        topTypographyLineHeightUnit,

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
        bottomTitleMargin,
        categoryBackgroundColor,
        categoryTextColor,
        categoryBackgroundHoverColor,
        categoryTextHoverColor,
        titleColor,
        titleHoverColor,
        excerptColor,
        postMetasColor,
        bottomExcerptLength,
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
        ${topImageHeight ? '--sb-top-thumb-height: ' + topImageHeight + '%;' : ''}
        ${bottomImageHeight ? '--sb-bottom-post-thumb-height: ' + bottomImageHeight + '%;' : ''}
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
        ${topTypographyFamily ? '--sb-top-post-title-typo-family: ' + checkDefault(topTypographyFamily) + ';' : ''}
        ${topTypographyWeight ? '--sb-top-post-title-typo-weight: ' + checkDefault(topTypographyWeight.replace(/\D/g, ''), topTypographyWeight) + ';' : ''}
        ${topTypographyWeight ? '--sb-top-post-title-typo-style: ' + checkDefault(topTypographyWeight.replace(/\d+/g, ''), topTypographyWeight) + ';' : ''}
        ${topTypographyTextTransform ? '--sb-top-post-title-typo-tt: ' + topTypographyTextTransform + ';' : ''}
        ${topTypographyTextDecoration ? '--sb-top-post-title-typo-td: ' + topTypographyTextDecoration + ';' : ''}
        ${topTypographyFontSizeSm ? '--sb-top-post-title-typo-fs-sm: ' + topTypographyFontSizeSm + topTypographyFontSizeUnit + ';' : ''}
        ${topTypographyFontSizeMd ? '--sb-top-post-title-typo-fs-md: ' + topTypographyFontSizeMd + topTypographyFontSizeUnit + ';' : ''}
        ${topTypographyFontSize ? '--sb-top-post-title-typo-fs-lg: ' + topTypographyFontSize + topTypographyFontSizeUnit + ';' : ''}
        ${topTypographyLetterSpacingSm ? '--sb-top-post-title-typo-ls-sm: ' + topTypographyLetterSpacingSm + topTypographyLetterSpacingUnit + ';' : ''}
        ${topTypographyLetterSpacingMd ? '--sb-top-post-title-typo-ls-md: ' + topTypographyLetterSpacingMd + topTypographyLetterSpacingUnit + ';' : ''}
        ${topTypographyLetterSpacing ? '--sb-top-post-title-typo-ls-lg: ' + topTypographyLetterSpacing + topTypographyLetterSpacingUnit + ';' : ''}
        ${topTypographyLineHeightSm ? '--sb-top-post-title-typo-lh-sm: ' + topTypographyLineHeightSm + topTypographyLineHeightUnit + ';' : ''}
        ${topTypographyLineHeightMd ? '--sb-top-post-title-typo-lh-md: ' + topTypographyLineHeightMd + topTypographyLineHeightUnit + ';' : ''}
        ${topTypographyLineHeight ? '--sb-top-post-title-typo-lh-lg: ' + topTypographyLineHeight + topTypographyLineHeightUnit + ';' : ''}
        ${topTitleMarginSmTop ? '--sb-top-post-title-margin-top-sm: ' + topTitleMarginSmTop + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginSmRight ? '--sb-top-post-title-margin-right-sm: ' + topTitleMarginSmRight + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginSmBottom ? '--sb-top-post-title-margin-bottom-sm: ' + topTitleMarginSmBottom + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginSmLeft ? '--sb-top-post-title-margin-left-sm: ' + topTitleMarginSmLeft + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginMdTop ? '--sb-top-post-title-margin-top-md: ' + topTitleMarginMdTop + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginMdRight ? '--sb-top-post-title-margin-right-md: ' + topTitleMarginMdRight + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginMdBottom ? '--sb-top-post-title-margin-bottom-md: ' + topTitleMarginMdBottom + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginMdLeft ? '--sb-top-post-title-margin-left-md: ' + topTitleMarginMdLeft + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginTop ? '--sb-top-post-title-margin-top-lg: ' + topTitleMarginTop + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginRight ? '--sb-top-post-title-margin-right-lg: ' + topTitleMarginRight + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginBottom ? '--sb-top-post-title-margin-bottom-lg: ' + topTitleMarginBottom + topTitleMarginUnit + ';' : ''}
        ${topTitleMarginLeft ? '--sb-top-post-title-margin-left-lg: ' + topTitleMarginLeft + topTitleMarginUnit + ';' : ''}
        ${bottomTypographyFamily ? '--sb-bottom-post-title-typo-family: ' + checkDefault(bottomTypographyFamily) + ';' : ''}
        ${bottomTypographyWeight ? '--sb-bottom-post-title-typo-weight: ' + checkDefault(bottomTypographyWeight.replace(/\D/g, ''), bottomTypographyWeight) + ';' : ''}
        ${bottomTypographyWeight ? '--sb-bottom-post-title-typo-style: ' + checkDefault(bottomTypographyWeight.replace(/\d+/g, ''), bottomTypographyWeight) + ';' : ''}
        ${bottomTypographyTextTransform ? '--sb-bottom-post-title-typo-tt: ' + bottomTypographyTextTransform + ';' : ''}
        ${bottomTypographyTextDecoration ? '--sb-bottom-post-title-typo-td: ' + bottomTypographyTextDecoration + ';' : ''}
        ${bottomTypographyFontSizeSm ? '--sb-bottom-post-title-typo-fs-sm: ' + bottomTypographyFontSizeSm + bottomTypographyFontSizeUnit + ';' : ''}
        ${bottomTypographyFontSizeMd ? '--sb-bottom-post-title-typo-fs-md: ' + bottomTypographyFontSizeMd + bottomTypographyFontSizeUnit + ';' : ''}
        ${bottomTypographyFontSize ? '--sb-bottom-post-title-typo-fs-lg: ' + bottomTypographyFontSize + bottomTypographyFontSizeUnit + ';' : ''}
        ${bottomTypographyLetterSpacingSm ? '--sb-bottom-post-title-typo-ls-sm: ' + bottomTypographyLetterSpacingSm + bottomTypographyLetterSpacingUnit + ';' : ''}
        ${bottomTypographyLetterSpacingMd ? '--sb-bottom-post-title-typo-ls-md: ' + bottomTypographyLetterSpacingMd + bottomTypographyLetterSpacingUnit + ';' : ''}
        ${bottomTypographyLetterSpacing ? '--sb-bottom-post-title-typo-ls-lg: ' + bottomTypographyLetterSpacing + bottomTypographyLetterSpacingUnit + ';' : ''}
        ${bottomTypographyLineHeightSm ? '--sb-bottom-post-title-typo-lh-sm: ' + bottomTypographyLineHeightSm + bottomTypographyLineHeightUnit + ';' : ''}
        ${bottomTypographyLineHeightMd ? '--sb-bottom-post-title-typo-lh-md: ' + bottomTypographyLineHeightMd + bottomTypographyLineHeightUnit + ';' : ''}
        ${bottomTypographyLineHeight ? '--sb-bottom-post-title-typo-lh-lg: ' + bottomTypographyLineHeight + bottomTypographyLineHeightUnit + ';' : ''}
        ${bottomTitleMarginSmTop ? '--sb-bottom-post-title-margin-top-sm: ' + bottomTitleMarginSmTop + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginSmRight ? '--sb-bottom-post-title-margin-right-sm: ' + bottomTitleMarginSmRight + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginSmBottom ? '--sb-bottom-post-title-margin-bottom-sm: ' + bottomTitleMarginSmBottom + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginSmLeft ? '--sb-bottom-post-title-margin-left-sm: ' + bottomTitleMarginSmLeft + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginMdTop ? '--sb-bottom-post-title-margin-top-md: ' + bottomTitleMarginMdTop + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginMdRight ? '--sb-bottom-post-title-margin-right-md: ' + bottomTitleMarginMdRight + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginMdBottom ? '--sb-bottom-post-title-margin-bottom-md: ' + bottomTitleMarginMdBottom + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginMdLeft ? '--sb-bottom-post-title-margin-left-md: ' + bottomTitleMarginMdLeft + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginTop ? '--sb-bottom-post-title-margin-top-lg: ' + bottomTitleMarginTop + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginRight ? '--sb-bottom-post-title-margin-right-lg: ' + bottomTitleMarginRight + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginBottom ? '--sb-bottom-post-title-margin-bottom-lg: ' + bottomTitleMarginBottom + bottomTitleMarginUnit + ';' : ''}
        ${bottomTitleMarginLeft ? '--sb-bottom-post-title-margin-left-lg: ' + bottomTitleMarginLeft + bottomTitleMarginUnit + ';' : ''}
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
        per_page: 4,
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
        const titleClass = block == 'top' ? 'sb-big-title ' + getFontClass(topTypography) : getFontClass(bottomTypography);
        const post_author = block == 'top' ? topPostAuthor : bottomPostAuthor;
        const post_date = block == 'top' ? topPostDate : bottomPostDate;
        const post_comment = block == 'top' ? topPostComments : bottomPostComments;
        const bottom_image_size = bottomImageSize ? bottomImageSize : 'large';
        const featured_image_size = topImageSize ? topImageSize : 'large';
        const image_size = block == 'top' ? featured_image_size : bottom_image_size;
        const image_height = block == 'top' ? topImageHeight : bottomImageHeight;
        const display_category = block == 'top' ? topPostCategory : bottomPostCategory;
        const excerpt_length = bottomExcerptLength;
        const topPostContent = (
            <div className="sb-post-item">
                <div className="sb-post-thumb">
                    <div className="sb-thumb-container">
                        {featuredImage && featuredImage.media_details && (
                            <img
                                src={featuredImage.media_details.sizes?.[image_size] ? featuredImage.media_details.sizes?.[image_size].source_url : featuredImage.media_details.sizes?.['full'] ? featuredImage.media_details.sizes?.['full'].source_url : featuredImage.source_url}
                                alt={featuredImage.alt_text}
                            />
                        )}
                    </div>
                    <div class="sb-post-content sb-gradient-overlay">
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
                    {display_category && post.categories && (
                        <ul class="post-categories">
                            {post.categories && post.categories.map((catId, index) => (catInner(catId, index, false)))}
                        </ul>
                    )}
                </div>
            </div>
        );
        const bottomPostContent = (
            <div className="sb-post-item">
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
                            {post.categories && post.categories.map((catId, index) => (catInner(catId, index, true)))}
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
        );
        return block == 'top' ? topPostContent : bottomPostContent;
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
                                    title={__('Top Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={topImageSize}
                                        onChange={(topImageSize) => setAttributes({ topImageSize })}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={topImageHeight}
                                        setValue={(topImageHeight) => setAttributes({ topImageHeight })}
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
                                    <SelectControl
                                        label={__('Image Size', 'smart-blocks')}
                                        options={getImageSizeOptions()}
                                        value={bottomImageSize}
                                        onChange={(bottomImageSize) => setAttributes({ bottomImageSize })}
                                    />
                                    <RangeSliderControl
                                        label={__('Image Height (%)', 'smart-blocks')}
                                        value={bottomImageHeight}
                                        setValue={(bottomImageHeight) => setAttributes({ bottomImageHeight })}
                                        min={30}
                                        max={150}
                                    />
                                    <RangeSliderControl
                                        label={__('Excerpt Length', 'smart-blocks')}
                                        value={bottomExcerptLength}
                                        setValue={(bottomExcerptLength) => setAttributes({ bottomExcerptLength })}
                                        min={0}
                                        max={600}
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
                                            setValue={(headerColor) => setAttributes({ headerColor })}
                                        />
                                        <ColorControl
                                            label={__('Short Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerShortBorderColor}
                                            setValue={(headerShortBorderColor) => setAttributes({ headerShortBorderColor })}
                                        />
                                        <ColorControl
                                            label={__('Long Border Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headerLongBorderColor}
                                            setValue={(headerLongBorderColor) => setAttributes({ headerLongBorderColor })}
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
                                                setValue={(categoryBackgroundColor) => setAttributes({ categoryBackgroundColor })}
                                            />
                                            <ColorControl
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextColor}
                                                setValue={(categoryTextColor) => setAttributes({ categoryTextColor })}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryBackgroundHoverColor}
                                                setValue={(categoryBackgroundHoverColor) => setAttributes({ categoryBackgroundHoverColor })}
                                            />
                                            <ColorControl
                                                label={__('Text Color', 'smart-blocks')}
                                                enableAlpha
                                                value={categoryTextHoverColor}
                                                setValue={(categoryTextHoverColor) => setAttributes({ categoryTextHoverColor })}
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
                                        setValue={(titleColor) => setAttributes({ titleColor })}
                                    />
                                    <ColorControl
                                        label={__('Title Color(Hover)', 'smart-blocks')}
                                        enableAlpha
                                        value={titleHoverColor}
                                        setValue={(titleHoverColor) => setAttributes({ titleHoverColor })}
                                    />
                                    <Tabs>
                                        <div tabTitle={__("Top Block", 'smart-blocks')}>
                                            <TypographyControl
                                                label={__('Typography', 'smart-blocks')}
                                                valueFamily={topTypographyFamily}
                                                setValueFamily={value => setAttributes({ topTypographyFamily: value })}
                                                valueWeight={topTypographyWeight}
                                                setValueWeight={value => setAttributes({ topTypographyWeight: value })}
                                                valueTextTransform={topTypographyTextTransform}
                                                setValueTextTransform={value => setAttributes({ topTypographyTextTransform: value })}
                                                valueTextDecoration={topTypographyTextDecoration}
                                                setValueTextDecoration={value => setAttributes({ topTypographyTextDecoration: value })}
                                                valueFontSizeSm={topTypographyFontSizeSm}
                                                setValueFontSizeSm={value => setAttributes({ topTypographyFontSizeSm: value })}
                                                valueFontSizeMd={topTypographyFontSizeMd}
                                                setValueFontSizeMd={value => setAttributes({ topTypographyFontSizeMd: value })}
                                                valueFontSize={topTypographyFontSize}
                                                setValueFontSize={value => setAttributes({ topTypographyFontSize: value })}
                                                valueFontSizeUnit={topTypographyFontSizeUnit}
                                                setValueFontSizeUnit={value => setAttributes({ topTypographyFontSizeUnit: value })}
                                                valueLetterSpacingSm={topTypographyLetterSpacingSm}
                                                setValueLetterSpacingSm={value => setAttributes({ topTypographyLetterSpacingSm: value })}
                                                valueLetterSpacingMd={topTypographyLetterSpacingMd}
                                                setValueLetterSpacingMd={value => setAttributes({ topTypographyLetterSpacingMd: value })}
                                                valueLetterSpacing={topTypographyLetterSpacing}
                                                setValueLetterSpacing={value => setAttributes({ topTypographyLetterSpacing: value })}
                                                valueLetterSpacingUnit={topTypographyLetterSpacingUnit}
                                                setValueLetterSpacingUnit={value => setAttributes({ topTypographyLetterSpacingUnit: value })}
                                                valueLineHeightSm={topTypographyLineHeightSm}
                                                setValueLineHeightSm={value => setAttributes({ topTypographyLineHeightSm: value })}
                                                valueLineHeightMd={topTypographyLineHeightMd}
                                                setValueLineHeightMd={value => setAttributes({ topTypographyLineHeightMd: value })}
                                                valueLineHeight={topTypographyLineHeight}
                                                setValueLineHeight={value => setAttributes({ topTypographyLineHeight: value })}
                                                valueLineHeightUnit={topTypographyLineHeightUnit}
                                                setValueLineHeightUnit={value => setAttributes({ topTypographyLineHeightUnit: value })}
                                            />
                                            <DimensionControl
                                                label={__('Margin', 'smart-blocks')}
                                                min="0"
                                                max="100"
                                                dimensionTop={topTitleMarginTop}
                                                setDimensionTop={value => setAttributes({ topTitleMarginTop: value })}
                                                dimensionMdTop={topTitleMarginMdTop}
                                                setDimensionMdTop={value => setAttributes({ topTitleMarginMdTop: value })}
                                                dimensionSmTop={topTitleMarginSmTop}
                                                setDimensionSmTop={value => setAttributes({ topTitleMarginSmTop: value })}

                                                dimensionLeft={topTitleMarginLeft}
                                                setDimensionLeft={value => setAttributes({ topTitleMarginLeft: value })}
                                                dimensionMdLeft={topTitleMarginMdLeft}
                                                setDimensionMdLeft={value => setAttributes({ topTitleMarginMdLeft: value })}
                                                dimensionSmLeft={topTitleMarginSmLeft}
                                                setDimensionSmLeft={value => setAttributes({ topTitleMarginSmLeft: value })}

                                                dimensionRight={topTitleMarginRight}
                                                setDimensionRight={value => setAttributes({ topTitleMarginRight: value })}
                                                dimensionMdRight={topTitleMarginMdRight}
                                                setDimensionMdRight={value => setAttributes({ topTitleMarginMdRight: value })}
                                                dimensionSmRight={topTitleMarginSmRight}
                                                setDimensionSmRight={value => setAttributes({ topTitleMarginSmRight: value })}

                                                dimensionBottom={topTitleMarginBottom}
                                                setDimensionBottom={value => setAttributes({ topTitleMarginBottom: value })}
                                                dimensionMdBottom={topTitleMarginMdBottom}
                                                setDimensionMdBottom={value => setAttributes({ topTitleMarginMdBottom: value })}
                                                dimensionSmBottom={topTitleMarginSmBottom}
                                                setDimensionSmBottom={value => setAttributes({ topTitleMarginSmBottom: value })}

                                                unit={topTitleMarginUnit}
                                                setUnit={value => setAttributes({ topTitleMarginUnit: value })}
                                                responsive={!0}
                                            />
                                        </div>
                                        <div tabTitle={__("Bottom Block", 'smart-blocks')}>
                                            <TypographyControl
                                                label={__('Typography', 'smart-blocks')}
                                                valueFamily={bottomTypographyFamily}
                                                setValueFamily={value => setAttributes({ bottomTypographyFamily: value })}
                                                valueWeight={bottomTypographyWeight}
                                                setValueWeight={value => setAttributes({ bottomTypographyWeight: value })}
                                                valueTextTransform={bottomTypographyTextTransform}
                                                setValueTextTransform={value => setAttributes({ bottomTypographyTextTransform: value })}
                                                valueTextDecoration={bottomTypographyTextDecoration}
                                                setValueTextDecoration={value => setAttributes({ bottomTypographyTextDecoration: value })}
                                                valueFontSizeSm={bottomTypographyFontSizeSm}
                                                setValueFontSizeSm={value => setAttributes({ bottomTypographyFontSizeSm: value })}
                                                valueFontSizeMd={bottomTypographyFontSizeMd}
                                                setValueFontSizeMd={value => setAttributes({ bottomTypographyFontSizeMd: value })}
                                                valueFontSize={bottomTypographyFontSize}
                                                setValueFontSize={value => setAttributes({ bottomTypographyFontSize: value })}
                                                valueFontSizeUnit={bottomTypographyFontSizeUnit}
                                                setValueFontSizeUnit={value => setAttributes({ bottomTypographyFontSizeUnit: value })}
                                                valueLetterSpacingSm={bottomTypographyLetterSpacingSm}
                                                setValueLetterSpacingSm={value => setAttributes({ bottomTypographyLetterSpacingSm: value })}
                                                valueLetterSpacingMd={bottomTypographyLetterSpacingMd}
                                                setValueLetterSpacingMd={value => setAttributes({ bottomTypographyLetterSpacingMd: value })}
                                                valueLetterSpacing={bottomTypographyLetterSpacing}
                                                setValueLetterSpacing={value => setAttributes({ bottomTypographyLetterSpacing: value })}
                                                valueLetterSpacingUnit={bottomTypographyLetterSpacingUnit}
                                                setValueLetterSpacingUnit={value => setAttributes({ bottomTypographyLetterSpacingUnit: value })}
                                                valueLineHeightSm={bottomTypographyLineHeightSm}
                                                setValueLineHeightSm={value => setAttributes({ bottomTypographyLineHeightSm: value })}
                                                valueLineHeightMd={bottomTypographyLineHeightMd}
                                                setValueLineHeightMd={value => setAttributes({ bottomTypographyLineHeightMd: value })}
                                                valueLineHeight={bottomTypographyLineHeight}
                                                setValueLineHeight={value => setAttributes({ bottomTypographyLineHeight: value })}
                                                valueLineHeightUnit={bottomTypographyLineHeightUnit}
                                                setValueLineHeightUnit={value => setAttributes({ bottomTypographyLineHeightUnit: value })}
                                            />
                                            <DimensionControl
                                                label={__('Margin', 'smart-blocks')}
                                                dimensionTop={bottomTitleMarginTop}
                                                setDimensionTop={value => setAttributes({ bottomTitleMarginTop: value })}
                                                dimensionMdTop={bottomTitleMarginMdTop}
                                                setDimensionMdTop={value => setAttributes({ bottomTitleMarginMdTop: value })}
                                                dimensionSmTop={bottomTitleMarginSmTop}
                                                setDimensionSmTop={value => setAttributes({ bottomTitleMarginSmTop: value })}

                                                dimensionLeft={bottomTitleMarginLeft}
                                                setDimensionLeft={value => setAttributes({ bottomTitleMarginLeft: value })}
                                                dimensionMdLeft={bottomTitleMarginMdLeft}
                                                setDimensionMdLeft={value => setAttributes({ bottomTitleMarginMdLeft: value })}
                                                dimensionSmLeft={bottomTitleMarginSmLeft}
                                                setDimensionSmLeft={value => setAttributes({ bottomTitleMarginSmLeft: value })}

                                                dimensionRight={bottomTitleMarginRight}
                                                setDimensionRight={value => setAttributes({ bottomTitleMarginRight: value })}
                                                dimensionMdRight={bottomTitleMarginMdRight}
                                                setDimensionMdRight={value => setAttributes({ bottomTitleMarginMdRight: value })}
                                                dimensionSmRight={bottomTitleMarginSmRight}
                                                setDimensionSmRight={value => setAttributes({ bottomTitleMarginSmRight: value })}

                                                dimensionBottom={bottomTitleMarginBottom}
                                                setDimensionBottom={value => setAttributes({ bottomTitleMarginBottom: value })}
                                                dimensionMdBottom={bottomTitleMarginMdBottom}
                                                setDimensionMdBottom={value => setAttributes({ bottomTitleMarginMdBottom: value })}
                                                dimensionSmBottom={bottomTitleMarginSmBottom}
                                                setDimensionSmBottom={value => setAttributes({ bottomTitleMarginSmBottom: value })}

                                                unit={bottomTitleMarginUnit}
                                                setUnit={value => setAttributes({ bottomTitleMarginUnit: value })}
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
                                        setValue={(excerptColor) => setAttributes({ excerptColor })}
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
                                        setValue={(postMetasColor) => setAttributes({ postMetasColor })}
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
                                                    setValue={(borderNormalColor) => setAttributes({ borderNormalColor })}
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
                                                valueHorizontal={borderNormalBoxShadowHorizontal}
                                                setValueHorizontal={(borderNormalBoxShadowHorizontal) => setAttributes({ borderNormalBoxShadowHorizontal })}
                                                valueVertical={borderNormalBoxShadowVertical}
                                                setValueVertical={(borderNormalBoxShadowVertical) => setAttributes({ borderNormalBoxShadowVertical })}
                                                valueBlur={borderNormalBoxShadowBlur}
                                                setValueBlur={(borderNormalBoxShadowBlur) => setAttributes({ borderNormalBoxShadowBlur })}
                                                valueSpread={borderNormalBoxShadowSpread}
                                                setValueSpread={(borderNormalBoxShadowSpread) => setAttributes({ borderNormalBoxShadowSpread })}
                                                valueColor={borderNormalBoxShadowColor}
                                                setValueColor={(borderNormalBoxShadowColor) => setAttributes({ borderNormalBoxShadowColor })}
                                                valueInset={borderNormalBoxShadowInset}
                                                setValueInset={(borderNormalBoxShadowInset) => setAttributes({ borderNormalBoxShadowInset })}
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
                                                    setValue={(borderHoverColor) => setAttributes({ borderHoverColor })}
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
                                                valueHorizontal={borderHoverBoxShadowHorizontal}
                                                setValueHorizontal={(borderHoverBoxShadowHorizontal) => setAttributes({ borderHoverBoxShadowHorizontal })}
                                                valueVertical={borderHoverBoxShadowVertical}
                                                setValueVertical={(borderHoverBoxShadowVertical) => setAttributes({ borderHoverBoxShadowVertical })}
                                                valueBlur={borderHoverBoxShadowBlur}
                                                setValueBlur={(borderHoverBoxShadowBlur) => setAttributes({ borderHoverBoxShadowBlur })}
                                                valueSpread={borderHoverBoxShadowSpread}
                                                setValueSpread={(borderHoverBoxShadowSpread) => setAttributes({ borderHoverBoxShadowSpread })}
                                                valueColor={borderHoverBoxShadowColor}
                                                setValueColor={(borderHoverBoxShadowColor) => setAttributes({ borderHoverBoxShadowColor })}
                                                valueInset={borderHoverBoxShadowInset}
                                                setValueInset={(borderHoverBoxShadowInset) => setAttributes({ borderHoverBoxShadowInset })}
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
                                        setValue={(blockBgColor) => setAttributes({ blockBgColor })}
                                    />
                                </PanelBody>
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps({
                    className: "sb-blocks sb-news-module-six"
                })}>
                    <h2 className={headerClasses}>
                        <RichText
                            tagName="span"
                            value={headerTitle}
                            onChange={(headerTitle) => setAttributes({ headerTitle })}
                            placeholder={__('Heading...', 'smart-blocks')}
                        />
                    </h2>
                    <div className="sb-news-module-six-wrap">
                        {posts && posts.length > 0 && (
                            <div className="sb-big-block">
                                {postInner(posts[Object.keys(posts)[0]], 'top')}
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
