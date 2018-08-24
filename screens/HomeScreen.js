'use strict';

import React, {Component} from 'react';
import {Alert, BackHandler, Dimensions, Platform, StyleSheet, View} from "react-native";
import WKWebView from 'react-native-wkwebview-reborn';
import Header from "../components/Header";
import AppLoader from "../components/AppLoader";
import colors from "../theme/colors";
import PushNotificationController from "../Controller/PushNotification/PushNotificationController";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ActionCreators from "../Actions/Action";
import CookieManager from 'react-native-cookies';
import Helpers from "../Lib/Helpers";

const webViewRef = 'homeWebView';
const defaultUrl = 'https://www.mozzaik.de/';

class HomeScreen extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            canGoBackHomeScreen: false,
            loading: true
        };
        if(Platform.OS !== 'ios') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackHomeScreen);
        }
    }

    componentDidMount() {
        if(Platform.OS !== 'ios') {
            this.props.passOnBackHomeScreen(this.onBackHomeScreen);
        }

    }

    componentWillUnmount() {
        if(Platform.OS !== 'ios') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackHomeScreen);
        }
    }

    _onHomeNavigationStateChange = async (navState) => {


        //first time open the app will subscribe to mozzaik_all_users_channel
        //when login will subscribe to `mozzaik_user_${res.id_customer}`
        //when logout will still subscribe to `mozzaik_user_${res.id_customer}`

        if(Platform.OS === 'android') {
            await CookieManager.get(defaultUrl)
                .then(async (res) => {
                    console.log('res :', res);
                    if (res.id_lang !== undefined && res.id_lang !== 'undefined' && res.id_lang !== "undefined" && res.id_lang !== null) {
                        this._channel = `mozzaik_notifications_lang_${res.id_lang}`;
                        this.id_lang = res.id_lang;
                        console.log('   this.id_lang  :',    this.id_lang );
                    } else {
                        this._channel = `mozzaik_all_users_channel`;
                    }

                    if (res.nb_products !== undefined && res.nb_products !== 'undefined' && res.nb_products !== "undefined" && res.nb_products !== null) {
                        this.props.setNewProductsCount(res.nb_products);
                    } else {
                        this.props.setNewProductsCount(0);
                    }

                    if (res.nb_offers !== undefined && res.nb_offers !== 'undefined' && res.nb_offers !== "undefined" && res.nb_offers !== null) {
                        this.props.setNewOffersCount(res.nb_offers);
                    } else {
                        this.props.setNewOffersCount(0);
                    }
                });
        } else if(Platform.OS === 'ios') {

            //
            // let id_lang = this.id_lang;
            // let id_customer = this.id_customer;
            // let nb_products = this.nb_products;
            // let nb_offers = this.nb_offers;

            if (this.id_lang !== undefined && this.id_lang !== 'undefined' && this.id_lang !== "undefined" && this.id_lang !== null && this.id_lang !== "null") {
                this._channel = `mozzaik_notifications_lang_${this.id_lang}`;
            } else {
                this._channel = `mozzaik_all_users_channel`;
            }

            if (this.nb_products !== undefined && this.nb_products !== 'undefined' && this.nb_products !== "undefined" && this.nb_products !== null && this.nb_products !== "null") {
                this.props.setNewProductsCount(this.nb_products);
            } else {
                this.props.setNewProductsCount(0);
            }

            if (this.nb_offers !== undefined && this.nb_offers !== 'undefined' && this.nb_offers !== "undefined" && this.nb_offers !== null && this.nb_offers !== "null") {
                this.props.setNewOffersCount(this.nb_offers);
            } else {
                this.props.setNewOffersCount(0);
            }
        }

        this.setState({
            canGoBackHomeScreen: navState.canGoBack,
        });
    };

    onBackHomeScreen = () => {
        if(this.state.canGoBackHomeScreen) {
            this.refs[webViewRef].goBack();
            return true;
        } else {
            Helpers._getExitMessage(this.id_lang);
            return true;
        }
    };

    _onMessage = (data) => {
        this.id_lang = (data.id_lang !== null ? data.id_lang :  this.id_lang);
        this.id_customer = (data.id_customer !== null ? data.id_customer :  this.id_customer);
        this.nb_products = (data.nb_products !== null ? data.nb_products :  this.nb_products);
        this.nb_offers = (data.nb_offers !== null ? data.nb_offers :  this.nb_offers);
    };

    _renderApp = () => {
        return (
            <View style={[styles.appContainer,{ marginTop:(Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 20 : 0}]}>
                <WKWebView
                    source={{uri: defaultUrl}}
                    sendCookies={true}
                    useWKCookieStore={true}
                    javaScriptEnabled={true}
                    onMessage={(event) => this._onMessage(event.nativeEvent.data)}
                    // style={{flex: 1}}
                    injectedJavaScript={Helpers._iosCookiesJsCode()}
                    ref={webViewRef}
                    allowsBackForwardNavigationGestures={true}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
                    dataDetectorTypes={'all'}
                    domStorageEnabled={true}
                    decelerationRate={'normal'}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onNavigationStateChange={this._onHomeNavigationStateChange}
                    renderLoading={()=>{return (null)}}
                    onLoadStart={()=>{
                        this.props.navigation.setParams({fade: true});
                        this.setState({loading: true});
                    }}
                    onLoadEnd={(event)=>{
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
                <Header from={'HomeScreen'} canGoBack={this.state.canGoBackHomeScreen} onBackPress={this.onBackHomeScreen.bind(this)} navigation={this.props.navigation}/>
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
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);