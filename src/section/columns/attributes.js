const attributes = {
	id: {
		type: 'string'
	},
    style: {
        type: 'string'
    },
	columns: {
		type: 'number'
	},
	layout: {
		type: 'string'
	},
	layoutTablet: {
		type: 'string',
		default: 'equal'
	},
	layoutMobile: {
		type: 'string',
		default: 'equal'
	},

    columnsGapSm: {
        type: 'string',
        default: 0
    },
    columnsGapMd: {
        type: 'string',
        default: 0
    },
    columnsGap: {
        type: 'string',
        default: 0
    },

	columnsMarginSmTop: {
        type: 'string'
    },
    columnsMarginSmLeft: {
        type: 'string'
    },
    columnsMarginSmRight: {
        type: 'string'
    },
    columnsMarginSmBottom: {
        type: 'string'
    },
    columnsMarginMdTop: {
        type: 'string'
    },
    columnsMarginMdLeft: {
        type: 'string'
    },
    columnsMarginMdRight: {
        type: 'string'
    },
    columnsMarginMdBottom: {
        type: 'string'
    },
    columnsMarginTop: {
        type: 'string'
    },
    columnsMarginLeft: {
        type: 'string'
    },
    columnsMarginRight: {
        type: 'string'
    },
    columnsMarginBottom: {
        type: 'string'
    },
    columnsMarginUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },


    columnsPaddingSmTop: {
        type: 'string'
    },
    columnsPaddingSmLeft: {
        type: 'string'
    },
    columnsPaddingSmRight: {
        type: 'string'
    },
    columnsPaddingSmBottom: {
        type: 'string'
    },
    columnsPaddingMdTop: {
        type: 'string'
    },
    columnsPaddingMdLeft: {
        type: 'string'
    },
    columnsPaddingMdRight: {
        type: 'string'
    },
    columnsPaddingMdBottom: {
        type: 'string'
    },
    columnsPaddingTop: {
        type: 'string'
    },
    columnsPaddingLeft: {
        type: 'string'
    },
    columnsPaddingRight: {
        type: 'string'
    },
    columnsPaddingBottom: {
        type: 'string'
    },
    columnsPaddingUnit: {
        type: 'string',
        enum: ['px', 'em', '%'],
        default: 'px'
    },

	columnsWidthSm: {
        type: 'string',
        default: 0
    },
    columnsWidthMd: {
        type: 'string',
        default: 0
    },
    columnsWidth: {
        type: 'string',
        default: 0
	},

	horizontalAlign: {
        type: 'string'
    },
    horizontalAlignSm: {
        type: 'string'
	},
    horizontalAlignMd: {
        type: 'string'
    },

	columnAlignment: {
        type: 'string'
	},
    columnAlignmentSm: {
        type: 'string'
    },
    columnAlignmentMd: {
        type: 'string'
    },

	columnJustify: {
        type: 'string',
        default: 0
	},
    columnJustifySm: {
        type: 'string',
        default: 0
    },
    columnJustifyMd: {
        type: 'string',
        default: 0
    },

	columnsHeight: {
		type: 'string',
		default: 'auto'
	},

	columnsHeightCustom: {
        type: 'string'
	},
    columnsHeightCustomSm: {
        type: 'string'
    },
    columnsHeightCustomMd: {
        type: 'string'
    },

	hide: {
		type: 'boolean',
		default: false
	},
	hideTablet: {
		type: 'boolean',
		default: false
	},
	hideMobile: {
		type: 'boolean',
		default: false
	},
	reverseColumnsTablet: {
		type: 'boolean',
		default: false
	},
	reverseColumnsMobile: {
		type: 'boolean',
		default: false
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
    sectionBgColor: {
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

    borderNormalBoxShadow: {
        type: 'object',
        default: {
            horizontal: undefined,
            vertical: undefined,
            blur: undefined,
            spread: undefined,
            color: undefined,
            inset: undefined
        }
    },
    borderHoverBoxShadow: {
        type: 'object',
        default: {
            horizontal: undefined,
            vertical: undefined,
            blur: undefined,
            spread: undefined,
            color: undefined,
            inset: undefined
        }
    },

    sectionBgImgURL: {
        type: 'string'
    },
    sectionBgImageID: {
        type: 'string'
    },
    sectionBgAttachment: {
        type: 'string',
        default: 'scroll'
    },
    sectionBgSize: {
        type: 'string',
        default: 'auto'
    },
    sectionBgPosition: {
        type: 'string',
        default: 'top left'
    },
    sectionBgPosition: {
        type: 'string'
    },
    sectionBgRepeat: {
        type: 'string',
        default: 'repeat'
    }
};

export default attributes;
