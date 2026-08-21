/**
 * WordPress dependencies
 */
import {createReduxStore, register} from '@wordpress/data';

/**
 * Fallback device preview state.
 *
 * The editor owns the real device preview; this store only backs it up for
 * contexts that do not provide one, such as the widget or site editor screens.
 *
 * registerStore() was deprecated in @wordpress/data 5.0 in favour of
 * createReduxStore() plus register().
 */
export const STORE_NAME = 'smart-blocks/data';

const DEFAULT_STATE = {
	viewType: 'Desktop'
};

const store = createReduxStore(STORE_NAME, {
	reducer(state = DEFAULT_STATE, action) {
		if ('UPDATE_VIEW' === action.type) {
			return {
				...state,
				viewType: action.viewType
			};
		}

		return state;
	},

	selectors: {
		getView(state) {
			return state.viewType;
		}
	},

	actions: {
		updateView(viewType) {
			return {
				type: 'UPDATE_VIEW',
				viewType
			};
		}
	}
});

register(store);

export default store;
