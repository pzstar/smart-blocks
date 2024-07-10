const attributes = {
	id: {
		type: 'string'
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
	columnsHTMLTag: {
		type: 'string',
		default: 'div'
	},
	columnWidth: {
		type: 'string'
	}
};

export default attributes;