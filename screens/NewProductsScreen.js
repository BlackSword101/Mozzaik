'use strict';

import React, {Component} from 'react';
import {Alert, BackHandler, StyleSheet, View, Platform, Dimensions} from "react-native";
import WKWebView from 'react-native-wkwebview-reborn';
import Header from "../components/Header";
import AppLoader from "../components/AppLoader";
import colors from "../theme/colors";
import PushNotificationController from "../Controller/PushNotification/PushNotificationController";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ActionCreators from "../Actions/Action";
import CookieManager from "react-native-cookies";
import Helpers from "../Lib/Helpers";

const webViewRef = 'newProductsWebView';
const defaultUrl = 'https://www.mozzaik.de/new-products';

class NewProductsScreen extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            canGoBackNewProductsScreen: false,
            loading: true
        };
        if(Platform.OS !== 'ios') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackNewProductsScreen);
        }
    }

    componentDidMount() {
        if(Platform.OS !== 'ios') {
            this.props.passOnBackNewProductsScreen(this.onBackNewProductsScreen);
        }
    }

    componentWillUnmount() {
        if(Platform.OS !== 'ios') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackNewProductsScreen);
        }
    }

    _onNewProductsNavigationStateChange = async (navState) => {

        if(Platform.OS === 'android') {
            await CookieManager.get(defaultUrl)
                .then(async (res) => {
                    if (res.id_lang !== undefined && res.id_lang !== 'undefined' && res.id_lang !== "undefined" && res.id_lang !== null) {
                        this._channel = `mozzaik_notifications_lang_${res.id_lang}`;
                    } else {
                        this._channel = `mozzaik_all_users_channel`;
                    }
                });
        } else if(Platform.OS === 'ios') {
            let id_lang = Helpers._getParameterByName('id_lang', navState.url);
            let id_customer = Helpers._getParameterByName('id_customer', navState.url);
            if (id_lang !== undefined && id_lang !== 'undefined' && id_lang !== "undefined" && id_lang !== null) {
                this._channel = `mozzaik_notifications_lang_${id_lang}`;
            } else {
                this._channel = `mozzaik_all_users_channel`;
            }
        }

        this.setState({
            canGoBackNewProductsScreen: navState.canGoBack,
        });
    };

    onBackNewProductsScreen = () => {
        if(this.state.canGoBackNewProductsScreen) {
            this.refs[webViewRef].goBack();
            return true;
        } else {
            Helpers._getExitMessage(this.id_lang);
            return true;
        }
    };

    _renderApp = () => {
        return (
            <View key={this.props.updateNewProductsScreen} style={[styles.appContainer,{ marginTop:(Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 20 : 0}]}>
                <WKWebView
                    //style={{flex: 1}}
                    source={{uri: defaultUrl}}
                    sendCookies={true}
                    useWKCookieStore={true}
                    javaScriptEnabled={true}
                    injectedJavaScript={Helpers._iosCookiesJsCode()}
                    ref={webViewRef}
                    allowsBackForwardNavigationGestures={true}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
                    dataDetectorTypes={'all'}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onNavigationStateChange={this._onNewProductsNavigationStateChange}
                    renderLoading={()=>{return (null)}}
                    onLoadStart={()=>{
                        this.props.navigation.setParams({fade: true});
                        this.setState({loading: true});
                    }}
                    onLoadEnd={()=>{
                        this.props.navigation.setParams({fade: false});
                        this.setState({loading: false});
                    }}
                />
                <PushNotificationController channel={this._channel}/>
            </View>
        );
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Header from={'NewProductsScreen'} canGoBack={this.state.canGoBackNewProductsScreen} onBackPress={this.onBackNewProductsScreen.bind(this)} navigation={this.props.navigation}/>
                {this._renderApp()}
                {this.state.loading ? <AppLoader backgroundColor={'rgba(255, 255, 255, 0.6)'} /> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position:'relative'
    },
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        position:'relative',
        zIndex: 1,
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 20,
    },
    backButtonIcon: {
        width: 20,
        height: 20,
        tintColor:colors.orange
    },
    infoButtonIcon: {
        width: 20,
        height: 20,
        tintColor:colors.orange
    }
});

//this line for bind all the actions in the ActionCreators "Actions.js" to this screen and use it like this.props.toggleLoader(true)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        updateNewProductsScreen: (typeof state.Reducer.updateNewProductsScreen !== "undefined" ? state.Reducer.updateNewProductsScreen : 0),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductsScreen);