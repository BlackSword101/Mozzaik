'use strict';

import React, {Component} from 'react';
import {
    View,
    WebView,
    StyleSheet,
    BackHandler,
    Alert
} from 'react-native';
import colors from "../theme/colors";
import Header from "./Header";
import AppLoader from "./AppLoader";

export default class Page extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            canGoBack: false,
            homeCanGoBack: false,
            productCanGoBack: false,
            loading: true
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBack);
    }

    onNavigationStateChange = (navState) => {
        console.log(navState);
        console.log(navState.url);
        this.props.navigation.setParams({fade: navState.loading});

        // let canGoBack = true;
        // console.log(this.props.webViewRef);
        // console.log(this.props.url);
        // console.log(this.props.langUrls);
        // console.log(this.props.langUrls.indexOf(this.props.url.toString()));
        // if (this.props.webViewRef === 'homeWebView' && this.props.langUrls.indexOf(navState.url) !== -1) {
        //     canGoBack = false;
        // } else if (this.props.webViewRef === 'newProductsWebView' && this.props.langUrls.indexOf(navState.url) !== -1) {
        //     canGoBack = false;
        // } else {
        //     canGoBack = true;
        // }
        this.setState({
            homeCanGoBack : (this.props.webViewRef === 'homeWebView' && navState.canGoBack ? navState.canGoBack : this.state.homeCanGoBack),
            productCanGoBack : (this.props.webViewRef === 'newProductsWebView' && navState.canGoBack ? navState.canGoBack : this.state.productCanGoBack),
            canGoBack: navState.canGoBack,
            loading: navState.loading
        }, () =>{
            console.log(this.state);
        });

    }

    onBack = () => {
        if(this.state.canGoBack) {
            this.refs[this.props.webViewRef].goBack();
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
                <WebView
                    //style={{flex: 1}}
                    ref={this.props.webViewRef}
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onNavigationStateChange={ this.onNavigationStateChange}
                    renderLoading={()=>{return (null)}}
                />
            </View>
        );
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Header canGoBack={this.state.canGoBack} onBackPress={this.onBack.bind(this)}/>
                {this._renderApp()}
                {this.state.loading ? <AppLoader backgroundColor={'rgba(255, 255, 255, 0.6)'} /> : null}
            </View>
        );
    }
}

Page.defaultProps = {
    webViewRef: 'pageWebViewRef',
    url: 'https://www.mozzaik.de/',
    langUrls: []
};

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