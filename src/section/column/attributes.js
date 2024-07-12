const attributes = {
	id: {
		type: 'string'
	},
    style: {
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
	columnWidth: {
		type: 'string'
	},
    columnBgColor: {
        type: 'string'
    }
};

export default attributes;