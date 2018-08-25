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

export function setNewProductsCount(value) {
    return (dispatch) => {
        dispatch({type: types.NEW_PRODUCTS_COUNT, newProductsCount: value});
    };
}

export function setNewOffersCount(value) {
    return (dispatch) => {
        dispatch({type: types.NEW_OFFERS_COUNT, newOffersCount: value});
    };
}

export function newProductsScreenUpdate(value) {
    return (dispatch) => {
        dispatch({type: types.UPDATE_NEW_PRODUCTS_SCREEN, updateNewProductsScreen: value});
    };
}

export function newOffersScreenUpdate(value) {
    return (dispatch) => {
        dispatch({type: types.UPDATE_NEW_OFFERS_SCREEN, updateNewOffersScreen: value});
    };
}

export function setBadgeCount(value) {
    return (dispatch) => {
        dispatch({type: types.SET_BADGE_COUNT, badgeCount: value});
    };
}