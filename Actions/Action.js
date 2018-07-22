import * as types from './types'

export function passOnBackHomeScreen(value) {
    return (dispatch) => {
        dispatch({type: types.PASS_ON_BACK_HOME_SCREEN, onBackHomeScreen: value});
    };
}

export function passOnBackNewProductsScreen(value) {
    return (dispatch) => {
        dispatch({type: types.PASS_ON_BACK_NEW_PRODUCTS_SCREEN, onBackNewProductsScreen: value});
    };
}

export function passOnBackDailyOffersScreen(value) {
    return (dispatch) => {
        dispatch({type: types.PASS_ON_BACK_DAILY_OFFERS_SCREEN, onBackDailyOffersScreen: value});
    };
}