const attributes = {
    id: {
        type: 'string'
    },
    enableSticky: {
        type: 'boolean',
        default: false
    },
    stickyOffsetTop: {
        type: 'string',
        default: 0
    },
    stickyOffsetTopUnit: {
        type: 'string',
        enum: ['px'],
        default: 'px'
    },
    sbStyle: {
        type: 'string'
    },

    columnMarginSmTop: {
        type: 'string'
    },
    columnMarginSmLeft: {
        type: 'string'
    },
    columnMarginSmRight: {
        type: 'string'
    },
    columnMarginSmBottom: {
        type: 'string'
    },
    columnMarginMdTop: {
        type: 'string'
    },
    columnMarginMdLeft: {
        type: 'string'
    },
    columnMarginMdRight: {
        type: 'string'
    },
    columnMarginMdBottom: {
        type: 'string'
    },
    columnMarginTop: {
        type: 'string'
    },
    columnMarginLeft: {
        type: 'string'
    },
    columnMarginRight: {
        type: 'string'
    },
    columnMarginBottom: {
        type: 'string'
    },
    columnMarginUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },


    columnPaddingSmTop: {
        type: 'string'
    },
    columnPaddingSmLeft: {
        type: 'string'
    },
    columnPaddingSmRight: {
        type: 'string'
    },
    columnPaddingSmBottom: {
        type: 'string'
    },
    columnPaddingMdTop: {
        type: 'string'
    },
    columnPaddingMdLeft: {
        type: 'string'
    },
    columnPaddingMdRight: {
        type: 'string'
    },
    columnPaddingMdBottom: {
        type: 'string'
    },
    columnPaddingTop: {
        type: 'string'
    },
    columnPaddingLeft: {
        type: 'string'
    },
    columnPaddingRight: {
        type: 'string'
    },
    columnPaddingBottom: {
        type: 'string'
    },
    columnPaddingUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    columnsHTMLTag: {
        type: 'string',
        default: 'div'
    },
    borderNormal: {
        type: 'string'
    },
    borderHover: {
        type: 'string'
    },
    borderNormalColor: {
        type: 'string'
    },
    borderHoverColor: {
        type: 'string'
    },

    columnBgColor: {
        type: 'string'
    },

    borderNormalWidthTop: {
        type: 'string',
    },
    borderNormalWidthLeft: {
        type: 'string',
    },
    borderNormalWidthRight: {
        type: 'string',
    },
    borderNormalWidthBottom: {
        type: 'string',
    },
    borderNormalWidthUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    borderHoverWidthTop: {
        type: 'string',
    },
    borderHoverWidthLeft: {
        type: 'string',
    },
    borderHoverWidthRight: {
        type: 'string',
    },
    borderHoverWidthBottom: {
        type: 'string',
    },
    borderHoverWidthUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    borderNormalRadiusTop: {
        type: 'string',
    },
    borderNormalRadiusLeft: {
        type: 'string',
    },
    borderNormalRadiusRight: {
        type: 'string',
    },
    borderNormalRadiusBottom: {
        type: 'string',
    },
    borderNormalRadiusUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    borderHoverRadiusTop: {
        type: 'string',
    },
    borderHoverRadiusLeft: {
        type: 'string',
    },
    borderHoverRadiusRight: {
        type: 'string',
    },
    borderHoverRadiusBottom: {
        type: 'string',
    },
    borderHoverRadiusUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    borderNormalBoxShadowHorizontal: {
        type: 'string'
    },
    borderNormalBoxShadowVertical: {
        type: 'string'
    },
    borderNormalBoxShadowBlur: {
        type: 'string'
    },
    borderNormalBoxShadowSpread: {
        type: 'string'
    },
    borderNormalBoxShadowColor: {
        type: 'string'
    },
    borderNormalBoxShadowInset: {
        type: 'string'
    },

    borderHoverBoxShadowHorizontal: {
        type: 'string'
    },
    borderHoverBoxShadowVertical: {
        type: 'string'
    },
    borderHoverBoxShadowBlur: {
        type: 'string'
    },
    borderHoverBoxShadowSpread: {
        type: 'string'
    },
    borderHoverBoxShadowColor: {
        type: 'string'
    },
    borderHoverBoxShadowInset: {
        type: 'string'
    },


    columnBgType: {
        type: 'string',
        default: 'imageOrColor',
        enum: ['imageOrColor', 'gradient']
    },
    columnBgImgURL: {
        type: 'string'
    },
    columnBgImageID: {
        type: 'string'
    },
    columnBgAttachment: {
        type: 'string',
        default: 'scroll'
    },
    columnBgSize: {
        type: 'string',
        default: 'auto'
    },
    columnBgPositionX: {
        type: 'string',
        default: '0.5'
    },
    columnBgPositionY: {
        type: 'string',
        default: '0.5'
    },
    columnBgRepeat: {
        type: 'string',
        default: 'repeat'
    },
    columnBgGradient: {
        type: 'string'
    },
    columnBgOverlayColor: {
        type: 'string'
    },


    columnAlignSelf: {
        type: 'string'
    },
    columnAlignSelfSm: {
        type: 'string'
    },
    columnAlignSelfMd: {
        type: 'string'
    },


    flexibleContentDisplay: {
        type: 'string',
        default: 'flex',
        enum: ['flex', 'grid']
    },

    flexDirection: {
        type: 'string'
    },
    flexDirectionSm: {
        type: 'string'
    },
    flexDirectionMd: {
        type: 'string'
    },

    containerWidthEnable: {
        type: 'boolean'
    },
    containerWidth: {
        type: 'string'
    },
    containerWidthSm: {
        type: 'string'
    },
    containerWidthMd: {
        type: 'string'
    },
    containerWidthUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    justifyContent: {
        type: 'string'
    },
    justifyContentSm: {
        type: 'string'
    },
    justifyContentMd: {
        type: 'string'
    },

    justifyItems: {
        type: 'string'
    },
    justifyItemsSm: {
        type: 'string'
    },
    justifyItemsMd: {
        type: 'string'
    },

    alignItems: {
        type: 'string'
    },
    alignItemsSm: {
        type: 'string'
    },
    alignItemsMd: {
        type: 'string'
    },

    containerGapRow: {
        type: 'string'
    },
    containerGapSmRow: {
        type: 'string'
    },
    containerGapMdRow: {
        type: 'string'
    },
    containerGapColumn: {
        type: 'string'
    },
    containerGapSmColumn: {
        type: 'string',
        default: 20
    },
    containerGapMdColumn: {
        type: 'string'
    },
    containerGapUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

    containerWrap: {
        type: 'string'
    },
    containerWrapSm: {
        type: 'string'
    },
    containerWrapMd: {
        type: 'string'
    },

    gridColumnNumber: {
        type: 'string',
        default: '3'
    },
    gridColumnNumberSm: {
        type: 'string'
    },
    gridColumnNumberMd: {
        type: 'string'
    },
    hrefLinkURL: {
        type: 'string'
    }
};

export default attributes;