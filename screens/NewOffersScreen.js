'use strict';

import React, {Component} from 'react';
import {Alert, BackHandler, StyleSheet, View, Platform} from "react-native";
import WKWebView from 'react-native-wkwebview-reborn';
import Header from "../components/Header";
import AppLoader from "../components/AppLoader";
import colors from "../theme/colors";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ActionCreators from "../Actions/Action";

const webViewRef = 'DailyOffersWebView';
const defaultUrl = 'https://www.mozzaik.de/daily-offers';

class NewOffersScreen extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            canGoBackDailyOffersScreen: false,
            loading: true
        };
        if(Platform.OS !== 'ios') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackDailyOffersScreen);
        }
    }

    componentDidMount() {
        if(Platform.OS !== 'ios') {
            this.props.passOnBackDailyOffersScreen(this.onBackDailyOffersScreen);
        }
    }

    componentWillUnmount() {
        if(Platform.OS !== 'ios') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackDailyOffersScreen);
        }
    }

    _onDailyOffersNavigationStateChange = (navState) => {
        this.setState({
            canGoBackDailyOffersScreen: navState.canGoBack,
        });
    };

    onBackDailyOffersScreen = () => {
        if(this.state.canGoBackDailyOffersScreen) {
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
                    ref={webViewRef}
                    allowsBackForwardNavigationGestures={true}
                    bounces={false}
                    automaticallyAdjustContentInsets={false}
                    source={{uri: defaultUrl}}
                    dataDetectorTypes={'all'}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onNavigationStateChange={this._onDailyOffersNavigationStateChange}
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
            </View>
        );
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Header from={'NewOffersScreen'} canGoBack={this.state.canGoBackDailyOffersScreen} onBackPress={this.onBackDailyOffersScreen.bind(this)} navigation={this.props.navigation}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOffersScreen);
