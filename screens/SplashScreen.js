'use strict';

import React, {Component} from 'react';
import {
    View,
    Image,
    Platform,
    UIManager,
    StatusBar,
    I18nManager,
    StyleSheet
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../Reducers';
import {setupRNListener} from 'react-native-redux-listener';

import {CreateRootNavigator} from "../config/Router";
import colors from '../theme/colors'
import AppLoader from "../components/AppLoader";

I18nManager.allowRTL(false);

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        setupRNListener({
            monitorAppState: false,
            monitorNetInfo: false,
            monitorKeyboard: false,
            monitorDeepLinks: false,
            monitorBackButton: false,
        }),
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware
        ),
    );

    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class SplashScreen extends Component {

    constructor(props, ctx) {
        super(props, ctx);

        if (Platform.OS !== 'ios') {
            StatusBar.setBackgroundColor(colors.orange, true);
        }

        this.state = {
            loading: true
        };

        if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true); //enable Animation on Android
        }
    }

    componentDidMount = async () => {
        setTimeout(()=>{
                this.setState({
                    loading: false
                });
        }, 1500);
    };

    _renderSplash = () => {
        return (
            <View style={[styles.container, styles.center]}>
                <Image fadeDuration={0} style={[styles.logo]} source={require('../components/img/logo.png')}/>
                <AppLoader/>
            </View>
        );
    };

    _renderApp = () => {
        const RootNavigator = CreateRootNavigator();
        return (
            <Provider store={store}>
                <View style={[styles.container]}>
                    <RootNavigator/>
                </View>
            </Provider>
        )
    };

    render() {
        return (
            this.state.loading ? this._renderSplash() : this._renderApp()
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 95,
        marginLeft: -12,
        marginBottom: 200,
        zIndex: 3,
    }
});