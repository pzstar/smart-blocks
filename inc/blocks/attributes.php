<?php

function smart_blocks_attributes_news_module_one() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],

        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "sideTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number",
            "default" => 0
        ],



        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "featuredExcerptLength" => [
            "type" => "number",
            "default" => 0
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "sideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sideImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "sideExcerptLength" => [
            "type" => "number",
            "default" => 100
        ],
        "sidePostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "sideTitleMarginSmTop" => [
            "type" => "string"
        ],
        "sideTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginSmRight" => [
            "type" => "string"
        ],
        "sideTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginMdTop" => [
            "type" => "string"
        ],
        "sideTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginMdRight" => [
            "type" => "string"
        ],
        "sideTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginTop" => [
            "type" => "string"
        ],
        "sideTitleMarginLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginRight" => [
            "type" => "string"
        ],
        "sideTitleMarginBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_two() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "sideTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredImageHeight" => [
            "type" => "number",
            "default" => 80
        ],
        "featuredExcerptLength" => [
            "type" => "number",
            "default" => 200
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "sideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sideImageHeight" => [
            "type" => "number",
            "default" => 86
        ],
        "sideExcerptLength" => [
            "type" => "number",
            "default" => 0
        ],
        "sidePostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "sideTitleMarginSmTop" => [
            "type" => "string"
        ],
        "sideTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginSmRight" => [
            "type" => "string"
        ],
        "sideTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginMdTop" => [
            "type" => "string"
        ],
        "sideTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginMdRight" => [
            "type" => "string"
        ],
        "sideTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginTop" => [
            "type" => "string"
        ],
        "sideTitleMarginLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginRight" => [
            "type" => "string"
        ],
        "sideTitleMarginBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_three() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],

        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "sideTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "featuredTitleColor" => [
            "type" => "string"
        ],
        "sideTitleColor" => [
            "type" => "string"
        ],
        "sideTitleHoverColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],


        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "sideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sideImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "sidePostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostCategory" => [
            "type" => "boolean",
            "default" => true
        ],


        "sideTitleMarginSmTop" => [
            "type" => "string"
        ],
        "sideTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginSmRight" => [
            "type" => "string"
        ],
        "sideTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginMdTop" => [
            "type" => "string"
        ],
        "sideTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginMdRight" => [
            "type" => "string"
        ],
        "sideTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginTop" => [
            "type" => "string"
        ],
        "sideTitleMarginLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginRight" => [
            "type" => "string"
        ],
        "sideTitleMarginBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_four() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "topTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "topTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "topTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "bottomTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "bottomTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "bottomTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],

        "topTitleMarginSmTop" => [
            "type" => "string"
        ],
        "topTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "topTitleMarginSmRight" => [
            "type" => "string"
        ],
        "topTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "topTitleMarginMdTop" => [
            "type" => "string"
        ],
        "topTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "topTitleMarginMdRight" => [
            "type" => "string"
        ],
        "topTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "topTitleMarginTop" => [
            "type" => "string"
        ],
        "topTitleMarginLeft" => [
            "type" => "string"
        ],
        "topTitleMarginRight" => [
            "type" => "string"
        ],
        "topTitleMarginBottom" => [
            "type" => "string"
        ],
        "topTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "topImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "topImageHeight" => [
            "type" => "number",
            "default" => 60
        ],
        "topPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "topPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "topPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "topPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "bottomImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "bottomPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "bottomTitleMarginSmTop" => [
            "type" => "string"
        ],
        "bottomTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "bottomTitleMarginSmRight" => [
            "type" => "string"
        ],
        "bottomTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdTop" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdRight" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "bottomTitleMarginTop" => [
            "type" => "string"
        ],
        "bottomTitleMarginLeft" => [
            "type" => "string"
        ],
        "bottomTitleMarginRight" => [
            "type" => "string"
        ],
        "bottomTitleMarginBottom" => [
            "type" => "string"
        ],
        "bottomTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_five() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "listingTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],




        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "featuredExcerptLength" => [
            "type" => "number",
            "default" => 200
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "listingImageHeight" => [
            "type" => "number",
            "default" => 80
        ],
        "listingPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "listingTitleMarginSmTop" => [
            "type" => "string"
        ],
        "listingTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginSmRight" => [
            "type" => "string"
        ],
        "listingTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginMdTop" => [
            "type" => "string"
        ],
        "listingTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginMdRight" => [
            "type" => "string"
        ],
        "listingTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginTop" => [
            "type" => "string"
        ],
        "listingTitleMarginLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginRight" => [
            "type" => "string"
        ],
        "listingTitleMarginBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_six() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],



        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "topTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "topTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "topTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "topTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "topTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "bottomTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "bottomTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "bottomTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "bottomTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "bottomTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "bottomExcerptLength" => [
            "type" => "number",
            "default" => 0
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],


        "topTitleMarginSmTop" => [
            "type" => "string"
        ],
        "topTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "topTitleMarginSmRight" => [
            "type" => "string"
        ],
        "topTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "topTitleMarginMdTop" => [
            "type" => "string"
        ],
        "topTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "topTitleMarginMdRight" => [
            "type" => "string"
        ],
        "topTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "topTitleMarginTop" => [
            "type" => "string"
        ],
        "topTitleMarginLeft" => [
            "type" => "string"
        ],
        "topTitleMarginRight" => [
            "type" => "string"
        ],
        "topTitleMarginBottom" => [
            "type" => "string"
        ],
        "topTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "topImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "topImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "topPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "topPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "topPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "topPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "bottomImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "bottomPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "bottomPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "bottomTitleMarginSmTop" => [
            "type" => "string"
        ],
        "bottomTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "bottomTitleMarginSmRight" => [
            "type" => "string"
        ],
        "bottomTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdTop" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdRight" => [
            "type" => "string"
        ],
        "bottomTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "bottomTitleMarginTop" => [
            "type" => "string"
        ],
        "bottomTitleMarginLeft" => [
            "type" => "string"
        ],
        "bottomTitleMarginRight" => [
            "type" => "string"
        ],
        "bottomTitleMarginBottom" => [
            "type" => "string"
        ],
        "bottomTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_seven() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "listingTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "featuredExcerptLength" => [
            "type" => "number",
            "default" => 250
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "listingImageHeight" => [
            "type" => "number",
            "default" => 80
        ],
        "listingPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "listingTitleMarginSmTop" => [
            "type" => "string"
        ],
        "listingTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginSmRight" => [
            "type" => "string"
        ],
        "listingTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginMdTop" => [
            "type" => "string"
        ],
        "listingTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginMdRight" => [
            "type" => "string"
        ],
        "listingTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginTop" => [
            "type" => "string"
        ],
        "listingTitleMarginLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginRight" => [
            "type" => "string"
        ],
        "listingTitleMarginBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_eight() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "sideTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "featuredExcerptLength" => [
            "type" => "number",
            "default" => 250
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "sideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sideImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "sidePostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "sideTitleMarginSmTop" => [
            "type" => "string"
        ],
        "sideTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginSmRight" => [
            "type" => "string"
        ],
        "sideTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginMdTop" => [
            "type" => "string"
        ],
        "sideTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginMdRight" => [
            "type" => "string"
        ],
        "sideTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginTop" => [
            "type" => "string"
        ],
        "sideTitleMarginLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginRight" => [
            "type" => "string"
        ],
        "sideTitleMarginBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_nine() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "listingTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number",
            "default" => 0
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "featuredExcerptLength" => [
            "type" => "number",
            "default" => 0
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "listingImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "listingExcerptLength" => [
            "type" => "number",
            "default" => 100
        ],
        "listingPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "listingTitleMarginSmTop" => [
            "type" => "string"
        ],
        "listingTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginSmRight" => [
            "type" => "string"
        ],
        "listingTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginMdTop" => [
            "type" => "string"
        ],
        "listingTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginMdRight" => [
            "type" => "string"
        ],
        "listingTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginTop" => [
            "type" => "string"
        ],
        "listingTitleMarginLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginRight" => [
            "type" => "string"
        ],
        "listingTitleMarginBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_ten() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],
        "noOfPosts" => [
            "type" => "number",
            "default" => 5
        ],

        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "listingTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "listingTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "listingTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "listingTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "listingImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "listingImageWidth" => [
            "type" => "number",
            "default" => 120
        ],
        "listingImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "listingExcerptLength" => [
            "type" => "number",
            "default" => 100
        ],
        "listingPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "listingPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "listingTitleMarginSmTop" => [
            "type" => "string"
        ],
        "listingTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginSmRight" => [
            "type" => "string"
        ],
        "listingTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginMdTop" => [
            "type" => "string"
        ],
        "listingTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginMdRight" => [
            "type" => "string"
        ],
        "listingTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginTop" => [
            "type" => "string"
        ],
        "listingTitleMarginLeft" => [
            "type" => "string"
        ],
        "listingTitleMarginRight" => [
            "type" => "string"
        ],
        "listingTitleMarginBottom" => [
            "type" => "string"
        ],
        "listingTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_eleven() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_twelve() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 80
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_thirteen() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "contentBgColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "postExcerptLength" => [
            "type" => "number",
            "default" => 200
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_fourteen() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],
        "noOfPosts" => [
            "type" => "number",
            "default" => 4
        ],
        "noOfCol" => [
            "type" => "number",
            "default" => 4
        ],

        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 70
        ],
        "postExcerptLength" => [
            "type" => "number",
            "default" => 130
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_news_module_fifteen() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_tile_module_one() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "sideTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number",
            "default" => 0
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "largeSideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sidePostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "sideTitleMarginSmTop" => [
            "type" => "string"
        ],
        "sideTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginSmRight" => [
            "type" => "string"
        ],
        "sideTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginMdTop" => [
            "type" => "string"
        ],
        "sideTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginMdRight" => [
            "type" => "string"
        ],
        "sideTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginTop" => [
            "type" => "string"
        ],
        "sideTitleMarginLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginRight" => [
            "type" => "string"
        ],
        "sideTitleMarginBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "moduleHeight" => [
            "type" => "number",
            "default" => 500
        ],
        "titleBorderColor" => [
            "type" => "string"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_tile_module_two() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],

        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "featuredTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "featuredTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "featuredTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "featuredTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "sideTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "sideTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "sideTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "sideTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number",
            "default" => 0
        ],

        "featuredTitleMarginSmTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginTop" => [
            "type" => "string"
        ],
        "featuredTitleMarginLeft" => [
            "type" => "string"
        ],
        "featuredTitleMarginRight" => [
            "type" => "string"
        ],
        "featuredTitleMarginBottom" => [
            "type" => "string"
        ],
        "featuredTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "featuredImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "featuredPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "featuredPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],
        "sideImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "sidePostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "sidePostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "sideTitleMarginSmTop" => [
            "type" => "string"
        ],
        "sideTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginSmRight" => [
            "type" => "string"
        ],
        "sideTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginMdTop" => [
            "type" => "string"
        ],
        "sideTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginMdRight" => [
            "type" => "string"
        ],
        "sideTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginTop" => [
            "type" => "string"
        ],
        "sideTitleMarginLeft" => [
            "type" => "string"
        ],
        "sideTitleMarginRight" => [
            "type" => "string"
        ],
        "sideTitleMarginBottom" => [
            "type" => "string"
        ],
        "sideTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "moduleHeight" => [
            "type" => "number",
            "default" => 500
        ],
        "titleBorderColor" => [
            "type" => "string"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_tile_module_three() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],



        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number",
            "default" => 0
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "moduleHeight" => [
            "type" => "number",
            "default" => 400
        ],
        "titleBorderColor" => [
            "type" => "string"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_carousel_module_one() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],
        "headerTitle" => [
            "type" => "string"
        ],
        "headerStyle" => [
            "type" => "string",
            "default" => "sb-title-style1"
        ],
        "headerColor" => [
            "type" => "string"
        ],
        "headerShortBorderColor" => [
            "type" => "string"
        ],
        "headerLongBorderColor" => [
            "type" => "string"
        ],


        "headerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "headerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "headerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "headerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "categoryTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "categoryTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "categoryTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 100
        ],
        "postExcerptLength" => [
            "type" => "number",
            "default" => 100
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "autoplay" => [
            "type" => "boolean",
            "default" => true
        ],
        "pauseDuration" => [
            "type" => "string",
            "default" => 5
        ],

        "noOfSlidesSm" => [
            "type" => "string",
            "default" => 1
        ],
        "noOfSlidesMd" => [
            "type" => "string",
            "default" => 2
        ],
        "noOfSlides" => [
            "type" => "string",
            "default" => 3
        ],


        "slidesMarginSm" => [
            "type" => "string",
            "default" => 30
        ],
        "slidesMarginMd" => [
            "type" => "string",
            "default" => 30
        ],
        "slidesMargin" => [
            "type" => "string",
            "default" => 30
        ],

        "slidesStagepaddingSm" => [
            "type" => "string",
            "default" => 0
        ],
        "slidesStagepaddingMd" => [
            "type" => "string",
            "default" => 0
        ],
        "slidesStagepadding" => [
            "type" => "string",
            "default" => 0
        ],

        "nav" => [
            "type" => "boolean",
            "default" => true
        ],
        "dots" => [
            "type" => "boolean",
            "default" => true
        ],
        "noOfPosts" => [
            "type" => "number",
            "default" => 4
        ],
        "excerptColor" => [
            "type" => "string"
        ],
        "navNormalBgColor" => [
            "type" => "string"
        ],
        "navIconNormalColor" => [
            "type" => "string"
        ],
        "dotsBgColor" => [
            "type" => "string"
        ],
        "navHoverBgColor" => [
            "type" => "string"
        ],
        "navIconHoverColor" => [
            "type" => "string"
        ],
        "dotsBgColorHover" => [
            "type" => "string"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_single_news_one() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "contentBgColor" => [
            "type" => "string"
        ],


        "contentPaddingSmTop" => [
            "type" => "string"
        ],
        "contentPaddingSmLeft" => [
            "type" => "string"
        ],
        "contentPaddingSmRight" => [
            "type" => "string"
        ],
        "contentPaddingSmBottom" => [
            "type" => "string"
        ],
        "contentPaddingMdTop" => [
            "type" => "string"
        ],
        "contentPaddingMdLeft" => [
            "type" => "string"
        ],
        "contentPaddingMdRight" => [
            "type" => "string"
        ],
        "contentPaddingMdBottom" => [
            "type" => "string"
        ],
        "contentPaddingTop" => [
            "type" => "string"
        ],
        "contentPaddingLeft" => [
            "type" => "string"
        ],
        "contentPaddingRight" => [
            "type" => "string"
        ],
        "contentPaddingBottom" => [
            "type" => "string"
        ],
        "contentPaddingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "contentMarginSmTop" => [
            "type" => "string"
        ],
        "contentMarginSmLeft" => [
            "type" => "string"
        ],
        "contentMarginSmRight" => [
            "type" => "string"
        ],
        "contentMarginSmBottom" => [
            "type" => "string"
        ],
        "contentMarginMdTop" => [
            "type" => "string"
        ],
        "contentMarginMdLeft" => [
            "type" => "string"
        ],
        "contentMarginMdRight" => [
            "type" => "string"
        ],
        "contentMarginMdBottom" => [
            "type" => "string"
        ],
        "contentMarginTop" => [
            "type" => "string"
        ],
        "contentMarginLeft" => [
            "type" => "string"
        ],
        "contentMarginRight" => [
            "type" => "string"
        ],
        "contentMarginBottom" => [
            "type" => "string"
        ],
        "contentMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postId" => [
            "type" => "string"
        ],
        "categories" => [
            "type" => "array"
        ],
        "tags" => [
            "type" => "array"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 80
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postExcerptLength" => [
            "type" => "number",
            "default" => 200
        ],

        "excerptMarginSmTop" => [
            "type" => "string"
        ],
        "excerptMarginSmLeft" => [
            "type" => "string"
        ],
        "excerptMarginSmRight" => [
            "type" => "string"
        ],
        "excerptMarginSmBottom" => [
            "type" => "string"
        ],
        "excerptMarginMdTop" => [
            "type" => "string"
        ],
        "excerptMarginMdLeft" => [
            "type" => "string"
        ],
        "excerptMarginMdRight" => [
            "type" => "string"
        ],
        "excerptMarginMdBottom" => [
            "type" => "string"
        ],
        "excerptMarginTop" => [
            "type" => "string"
        ],
        "excerptMarginLeft" => [
            "type" => "string"
        ],
        "excerptMarginRight" => [
            "type" => "string"
        ],
        "excerptMarginBottom" => [
            "type" => "string"
        ],
        "excerptMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "metasMarginSmTop" => [
            "type" => "string"
        ],
        "metasMarginSmLeft" => [
            "type" => "string"
        ],
        "metasMarginSmRight" => [
            "type" => "string"
        ],
        "metasMarginSmBottom" => [
            "type" => "string"
        ],
        "metasMarginMdTop" => [
            "type" => "string"
        ],
        "metasMarginMdLeft" => [
            "type" => "string"
        ],
        "metasMarginMdRight" => [
            "type" => "string"
        ],
        "metasMarginMdBottom" => [
            "type" => "string"
        ],
        "metasMarginTop" => [
            "type" => "string"
        ],
        "metasMarginLeft" => [
            "type" => "string"
        ],
        "metasMarginRight" => [
            "type" => "string"
        ],
        "metasMarginBottom" => [
            "type" => "string"
        ],
        "metasMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],
        "contentAlignment" => [
            "type" => "string",
            "default" => "left"
        ],
        "excerptColor" => [
            "type" => "string"
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "filterOption" => [
            "type" => "string",
            "default" => "single-post"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_single_news_two() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],


        "excerptTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "excerptTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "excerptTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "excerptTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "postTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "postTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "postTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "metasTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "metasTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "metasTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "metasTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "categoryBackgroundColor" => [
            "type" => "string"
        ],
        "categoryTextColor" => [
            "type" => "string"
        ],
        "categoryBackgroundHoverColor" => [
            "type" => "string"
        ],
        "categoryTextHoverColor" => [
            "type" => "string"
        ],
        "titleColor" => [
            "type" => "string"
        ],
        "titleHoverColor" => [
            "type" => "string"
        ],
        "postMetasColor" => [
            "type" => "string"
        ],
        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "postId" => [
            "type" => "string"
        ],
        "categories" => [
            "type" => "array"
        ],
        "tags" => [
            "type" => "array"
        ],
        "offset" => [
            "type" => "number"
        ],
        "postImageSize" => [
            "type" => "string",
            "default" => "large"
        ],
        "postImageHeight" => [
            "type" => "number",
            "default" => 80
        ],
        "postPostAuthor" => [
            "type" => "boolean",
            "default" => true
        ],
        "postExcerptLength" => [
            "type" => "number",
            "default" => 0
        ],
        "postPostDate" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostComments" => [
            "type" => "boolean",
            "default" => true
        ],
        "postPostCategory" => [
            "type" => "boolean",
            "default" => true
        ],

        "postTitleMarginSmTop" => [
            "type" => "string"
        ],
        "postTitleMarginSmLeft" => [
            "type" => "string"
        ],
        "postTitleMarginSmRight" => [
            "type" => "string"
        ],
        "postTitleMarginSmBottom" => [
            "type" => "string"
        ],
        "postTitleMarginMdTop" => [
            "type" => "string"
        ],
        "postTitleMarginMdLeft" => [
            "type" => "string"
        ],
        "postTitleMarginMdRight" => [
            "type" => "string"
        ],
        "postTitleMarginMdBottom" => [
            "type" => "string"
        ],
        "postTitleMarginTop" => [
            "type" => "string"
        ],
        "postTitleMarginLeft" => [
            "type" => "string"
        ],
        "postTitleMarginRight" => [
            "type" => "string"
        ],
        "postTitleMarginBottom" => [
            "type" => "string"
        ],
        "postTitleMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "dateFormat" => [
            "type" => "string",
            "default" => "default"
        ],
        "customDateFormat" => [
            "type" => "string",
            "default" => "F j, Y"
        ],


        "contentPaddingSmTop" => [
            "type" => "string"
        ],
        "contentPaddingSmLeft" => [
            "type" => "string"
        ],
        "contentPaddingSmRight" => [
            "type" => "string"
        ],
        "contentPaddingSmBottom" => [
            "type" => "string"
        ],
        "contentPaddingMdTop" => [
            "type" => "string"
        ],
        "contentPaddingMdLeft" => [
            "type" => "string"
        ],
        "contentPaddingMdRight" => [
            "type" => "string"
        ],
        "contentPaddingMdBottom" => [
            "type" => "string"
        ],
        "contentPaddingTop" => [
            "type" => "string"
        ],
        "contentPaddingLeft" => [
            "type" => "string"
        ],
        "contentPaddingRight" => [
            "type" => "string"
        ],
        "contentPaddingBottom" => [
            "type" => "string"
        ],
        "contentPaddingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "contentMarginSmTop" => [
            "type" => "string"
        ],
        "contentMarginSmLeft" => [
            "type" => "string"
        ],
        "contentMarginSmRight" => [
            "type" => "string"
        ],
        "contentMarginSmBottom" => [
            "type" => "string"
        ],
        "contentMarginMdTop" => [
            "type" => "string"
        ],
        "contentMarginMdLeft" => [
            "type" => "string"
        ],
        "contentMarginMdRight" => [
            "type" => "string"
        ],
        "contentMarginMdBottom" => [
            "type" => "string"
        ],
        "contentMarginTop" => [
            "type" => "string"
        ],
        "contentMarginLeft" => [
            "type" => "string"
        ],
        "contentMarginRight" => [
            "type" => "string"
        ],
        "contentMarginBottom" => [
            "type" => "string"
        ],
        "contentMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "metasMarginSmTop" => [
            "type" => "string"
        ],
        "metasMarginSmLeft" => [
            "type" => "string"
        ],
        "metasMarginSmRight" => [
            "type" => "string"
        ],
        "metasMarginSmBottom" => [
            "type" => "string"
        ],
        "metasMarginMdTop" => [
            "type" => "string"
        ],
        "metasMarginMdLeft" => [
            "type" => "string"
        ],
        "metasMarginMdRight" => [
            "type" => "string"
        ],
        "metasMarginMdBottom" => [
            "type" => "string"
        ],
        "metasMarginTop" => [
            "type" => "string"
        ],
        "metasMarginLeft" => [
            "type" => "string"
        ],
        "metasMarginRight" => [
            "type" => "string"
        ],
        "metasMarginBottom" => [
            "type" => "string"
        ],
        "metasMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "excerptMarginSmTop" => [
            "type" => "string"
        ],
        "excerptMarginSmLeft" => [
            "type" => "string"
        ],
        "excerptMarginSmRight" => [
            "type" => "string"
        ],
        "excerptMarginSmBottom" => [
            "type" => "string"
        ],
        "excerptMarginMdTop" => [
            "type" => "string"
        ],
        "excerptMarginMdLeft" => [
            "type" => "string"
        ],
        "excerptMarginMdRight" => [
            "type" => "string"
        ],
        "excerptMarginMdBottom" => [
            "type" => "string"
        ],
        "excerptMarginTop" => [
            "type" => "string"
        ],
        "excerptMarginLeft" => [
            "type" => "string"
        ],
        "excerptMarginRight" => [
            "type" => "string"
        ],
        "excerptMarginBottom" => [
            "type" => "string"
        ],
        "excerptMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "excerptColor" => [
            "type" => "string"
        ],
        "contentAlignment" => [
            "type" => "string",
            "default" => "left"
        ],
        "contentOverlayBackground" => [
            "type" => "string"
        ],
        "filterOption" => [
            "type" => "string",
            "default" => "single-post"
        ],
        "imageBorderRadius" => [
            "type" => "number",
            "default" => 0
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_attributes_ticker_module() {
    $attrs = [
        "id" => [
            "type" => "string"
        ],
        "style" => [
            "type" => "string"
        ],


        "tickerTitleTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerTitleTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerTitleTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerTitleTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerTitleTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "tickerTitleTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "tickerTitleTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "tickerTitleTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "tickerContentTypographyFamily" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerContentTypographyWeight" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerContentTypographyTextTransform" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerContentTypographyTextDecoration" => [
            "type" => "string",
            "default" => 'inherit'
        ],
        "tickerContentTypographyFontSizeSm" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyFontSizeMd" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyFontSize" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyFontSizeUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "tickerContentTypographyLetterSpacingSm" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyLetterSpacingMd" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyLetterSpacing" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyLetterSpacingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
        "tickerContentTypographyLineHeightSm" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyLineHeightMd" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyLineHeight" => [
            "type" => "string",
            "default" => null
        ],
        "tickerContentTypographyLineHeightUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "postsPostType" => [
            "type" => "string",
            "default" => "post"
        ],
        "excludePosts" => [
            "type" => "array"
        ],
        "order" => [
            "type" => "string",
            "default" => "desc"
        ],
        "orderBy" => [
            "type" => "string",
            "default" => "date"
        ],
        "categories" => [
            "type" => "object"
        ],
        "offset" => [
            "type" => "number"
        ],
        "autoplay" => [
            "type" => "boolean",
            "default" => true
        ],
        "pause" => [
            "type" => "number",
            "default" => 5
        ],
        "postExcerptLength" => [
            "type" => "number",
            "default" => 100
        ],
        "noOfPosts" => [
            "type" => "number",
            "default" => 4
        ],
        "tickerTitle" => [
            "type" => "string",
            "default" => "Latest Posts"
        ],
        "tickerTitleBgColor" => [
            "type" => "string"
        ],
        "tickerTitleColor" => [
            "type" => "string"
        ],
        "tickerContentBgColor" => [
            "type" => "string"
        ],
        "tickerContentColor" => [
            "type" => "string"
        ],
        "navNormalBgColor" => [
            "type" => "string"
        ],
        "navIconNormalColor" => [
            "type" => "string"
        ],
        "navHoverBgColor" => [
            "type" => "string"
        ],
        "navIconHoverColor" => [
            "type" => "string"
        ]
    ];
    return array_merge($attrs, smart_blocks_global_attributes());
}

function smart_blocks_global_attributes() {
    $attrs = [
        "borderNormal" => [
            "type" => "string"
        ],
        "borderHover" => [
            "type" => "string"
        ],
        "borderNormalColor" => [
            "type" => "string"
        ],
        "borderHoverColor" => [
            "type" => "string"
        ],
        "blockBgColor" => [
            "type" => "string"
        ],


        "borderNormalWidthTop" => [
            "type" => "string"
        ],
        "borderNormalWidthLeft" => [
            "type" => "string"
        ],
        "borderNormalWidthRight" => [
            "type" => "string"
        ],
        "borderNormalWidthBottom" => [
            "type" => "string"
        ],
        "borderNormalWidthUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "borderHoverWidthTop" => [
            "type" => "string"
        ],
        "borderHoverWidthLeft" => [
            "type" => "string"
        ],
        "borderHoverWidthRight" => [
            "type" => "string"
        ],
        "borderHoverWidthBottom" => [
            "type" => "string"
        ],
        "borderHoverWidthUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "borderNormalRadiusTop" => [
            "type" => "string"
        ],
        "borderNormalRadiusLeft" => [
            "type" => "string"
        ],
        "borderNormalRadiusRight" => [
            "type" => "string"
        ],
        "borderNormalRadiusBottom" => [
            "type" => "string"
        ],
        "borderNormalRadiusUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "borderHoverRadiusTop" => [
            "type" => "string"
        ],
        "borderHoverRadiusLeft" => [
            "type" => "string"
        ],
        "borderHoverRadiusRight" => [
            "type" => "string"
        ],
        "borderHoverRadiusBottom" => [
            "type" => "string"
        ],
        "borderHoverRadiusUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],


        "borderNormalBoxShadowHorizontal" => [
            "type" => "string"
        ],
        "borderNormalBoxShadowVertical" => [
            "type" => "string"
        ],
        "borderNormalBoxShadowBlur" => [
            "type" => "string"
        ],
        "borderNormalBoxShadowSpread" => [
            "type" => "string"
        ],
        "borderNormalBoxShadowColor" => [
            "type" => "string"
        ],
        "borderNormalBoxShadowInset" => [
            "type" => "string"
        ],

        "borderHoverBoxShadowHorizontal" => [
            "type" => "string"
        ],
        "borderHoverBoxShadowVertical" => [
            "type" => "string"
        ],
        "borderHoverBoxShadowBlur" => [
            "type" => "string"
        ],
        "borderHoverBoxShadowSpread" => [
            "type" => "string"
        ],
        "borderHoverBoxShadowColor" => [
            "type" => "string"
        ],
        "borderHoverBoxShadowInset" => [
            "type" => "string"
        ],


        "blockMarginSmTop" => [
            "type" => "string"
        ],
        "blockMarginSmLeft" => [
            "type" => "string"
        ],
        "blockMarginSmRight" => [
            "type" => "string"
        ],
        "blockMarginSmBottom" => [
            "type" => "string"
        ],
        "blockMarginMdTop" => [
            "type" => "string"
        ],
        "blockMarginMdLeft" => [
            "type" => "string"
        ],
        "blockMarginMdRight" => [
            "type" => "string"
        ],
        "blockMarginMdBottom" => [
            "type" => "string"
        ],
        "blockMarginTop" => [
            "type" => "string"
        ],
        "blockMarginLeft" => [
            "type" => "string"
        ],
        "blockMarginRight" => [
            "type" => "string"
        ],
        "blockMarginBottom" => [
            "type" => "string"
        ],
        "blockMarginUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],

        "blockPaddingSmTop" => [
            "type" => "string"
        ],
        "blockPaddingSmLeft" => [
            "type" => "string"
        ],
        "blockPaddingSmRight" => [
            "type" => "string"
        ],
        "blockPaddingSmBottom" => [
            "type" => "string"
        ],
        "blockPaddingMdTop" => [
            "type" => "string"
        ],
        "blockPaddingMdLeft" => [
            "type" => "string"
        ],
        "blockPaddingMdRight" => [
            "type" => "string"
        ],
        "blockPaddingMdBottom" => [
            "type" => "string"
        ],
        "blockPaddingTop" => [
            "type" => "string"
        ],
        "blockPaddingLeft" => [
            "type" => "string"
        ],
        "blockPaddingRight" => [
            "type" => "string"
        ],
        "blockPaddingBottom" => [
            "type" => "string"
        ],
        "blockPaddingUnit" => [
            "type" => "string",
            "enum" => ['px', 'em', '%'],
            "default" => 'px'
        ],
    ];
    return $attrs;
}
