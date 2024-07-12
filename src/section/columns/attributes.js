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
	columnsGap: {
        type: 'object',
        default: {
            sm: 0,
            md: 0,
            lg: 0
        }
	},

	blockMargin : {
        type: 'object',
        default: {
            sm: {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            md: {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            lg: {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            unit: 'px'
        }
    },
    blockPadding: {
        type: 'object',
        default: {
            sm: {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            md: {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            lg: {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            unit: 'px'
        }
    },

	columnsWidth: {
        type: 'object',
        default: {
            sm: 0,
            md: 0,
            lg: 0
        }
	},
	horizontalAlign: {
        type: 'object',
        default: {
            sm: null,
            md: null,
            lg: null
        }
	},
	columnAlignment: {
        type: 'object',
        default: {
            sm: null,
            md: null,
            lg: null
        }
	},
	columnJustify: {
        type: 'object',
        default: {
            sm: null,
            md: null,
            lg: null
        }
	},
	columnsHeight: {
		type: 'string',
		default: 'auto'
	},

	columnsHeightCustom: {
        type: 'object',
        default: {
            sm: 0,
            md: 0,
            lg: 0
        }
	},

	verticalAlign: {
		type: 'string',
		default: 'unset'
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

};

export default attributes;
