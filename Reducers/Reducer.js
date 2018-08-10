import createReducer from '../Lib/createReducer'
import * as types from '../Actions/types'



export const Reducer = createReducer({}, {
	[types.PASS_ON_BACK_HOME_SCREEN](state, action) {
		let newState = Object.assign({}, state, {onBackHomeScreen: action.onBackHomeScreen});
		return newState;
	},
    [types.PASS_ON_BACK_NEW_PRODUCTS_SCREEN](state, action) {
        let newState = Object.assign({}, state, {onBackNewProductsScreen: action.onBackNewProductsScreen});
        return newState;
    },
    [types.PASS_ON_BACK_DAILY_OFFERS_SCREEN](state, action) {
        let newState = Object.assign({}, state, {onBackDailyOffersScreen: action.onBackDailyOffersScreen});
        return newState;
    },
    [types.NEW_PRODUCTS_COUNT](state, action) {
        let newState = Object.assign({}, state, {newProductsCount: action.newProductsCount});
        return newState;
    },
    [types.NEW_OFFERS_COUNT](state, action) {
        let newState = Object.assign({}, state, {newOffersCount: action.newOffersCount});
        return newState;
    },
    [types.UPDATE_NEW_PRODUCTS_SCREEN](state, action) {
        let newState = Object.assign({}, state, {updateNewProductsScreen: action.updateNewProductsScreen});
        return newState;
    },
    [types.UPDATE_NEW_OFFERS_SCREEN](state, action) {
        let newState = Object.assign({}, state, {updateNewOffersScreen: action.updateNewOffersScreen});
        return newState;
    },
});
