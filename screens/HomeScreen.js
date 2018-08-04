'use strict';

import React, {Component} from 'react';
// import Page from "../components/Page";
import {Alert, BackHandler, Platform, StyleSheet, View} from "react-native";
import WKWebView from 'react-native-wkwebview-reborn';
import Header from "../components/Header";
import AppLoader from "../components/AppLoader";
import colors from "../theme/colors";
import PushNotificationController from "../Controller/PushNotification/PushNotificationController";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ActionCreators from "../Actions/Action";
import CookieManager from 'react-native-cookies';


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

        // Get cookies as a request header string
        // CookieManager.get(defaultUrl)
        //     .then((res) => {
        //         console.log('CookieManager.get =>', res.id_customer); // => 'user_session=abcdefg; path=/;'
        //     });

        // CookieManager.clearAll()
        //     .then((res) => {
        //         console.log('CookieManager.clearAll =>', res);
        //     });
    }

    componentWillUnmount() {
        if(Platform.OS !== 'ios') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackHomeScreen);
        }
    }

    _onHomeNavigationStateChange = async (navState) => {
        // console.log('navState: ', navState);

        //first time open the app will subscribe to mozzaik_all_users_channel
        //when login will subscribe to `mozzaik_user_${res.id_customer}`
        //when logout will still subscribe to `mozzaik_user_${res.id_customer}`
        await CookieManager.get(defaultUrl)
            .then( async (res) => {
                if(res.id_lang !== undefined && res.id_lang !== 'undefined' && res.id_lang !== "undefined" && res.id_lang !== null) {
                    this._channel = `mozzaik_notifications_lang_${res.id_lang}`;
                } else {
                    this._channel = `mozzaik_all_users_channel`;
                }
                // console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
                //console.log('CookieManager.get =>', res.id_customer); // => 'user_session=abcdefg; path=/;'
            });
        // console.log(navState.canGoBack);

        this.setState({
            canGoBackHomeScreen: navState.canGoBack,
        });
    };

    onBackHomeScreen = () => {
        if(this.state.canGoBackHomeScreen) {
            this.refs[webViewRef].goBack();
            return true;
        } else {
            Alert.alert(
                'Exit Mozzaik!!!',
                'Do you want to exit?',
                [
                    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Yes', onPress: () => BackHandler.exitApp()},
                ],
                {cancelable: false});
            return true;
        }
    };

    _renderApp = () => {
        return (
            <View style={[styles.appContainer]}>
                <WKWebView
                    //style={{flex: 1}}
                    injectedJavaScript={'(function(){return  console.log("Send me back!")}());'}
                    // onMessage={(event)=> console.log(event.nativeEvent.data)}
                    ref={webViewRef}
                    allowsBackForwardNavigationGestures={true}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
                    dataDetectorTypes={'all'}
                    source={{uri: defaultUrl}}
                    javaScriptEnabled={true}
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

                        // const { data } = event.nativeEvent;
                        // const cookies  = data.split(';'); // `csrftoken=...; rur=...; mid=...; somethingelse=...`
                        // console.log(cookies);
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