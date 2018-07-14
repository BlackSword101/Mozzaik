'use strict';

import React, {Component} from 'react';
import {
    View,
    WebView,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import colors from "../theme/colors";
import Header from "../components/Header";

const WEBVIEW_REF = 'WebView';
const DEFAULT_URL = 'https://www.mozzaik.de/';

export default class NewOffersScreen extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {};
    }

    render() {
        return (
            <View style={[styles.container,styles.center]}>
                <Header from={'NewOffersScreen'}  navigation={this.props.navigation}/>
                <Image fadeDuration={0} style={[styles.logo]} source={require('../components/img/logo.png')}/>
                <Text style={{color:colors.orange, fontSize:30}}>NEW OFFERS</Text>
                <Text style={{color:colors.orange, fontSize:30}}>COMING SOON</Text>
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
    center: {
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        width: 80,
        height: 95,
        marginLeft: -12,
        marginBottom: 10,
        zIndex: 2,
    }
});
