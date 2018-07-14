'use strict';

import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Platform} from 'react-native';
import colors from "../theme/colors";
import InfoScreen from "../screens/InfoScreen";

export default class Header extends Component {

    constructor(props) {
        super(props);
    };

    _onBackPress = () => {
        if(this.props.onBackPress !== null) {
            this.props.onBackPress();
        }
    };

    render() {
        return (
            <View style={[styles.wrapper]}>
                <View style={[styles.container]}>
                    <TouchableOpacity activeOpacity={1} style={{}} disabled={!this.props.canGoBack} onPress={this._onBackPress}>
                        <Image style={[styles.backButtonIcon]} source={require('../components/img/brown_back_arrow_icon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{}} onPress={() => {this.props.navigation.navigate('InfoScreen', { 'backTo' : this.props.from});}}>
                        <Image style={[styles.infoButtonIcon]} source={require('../components/img/info-512.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.border]}/>
            </View>
        );
    }
}

Header.defaultProps = {
    canGoBack: false,
    onBackPress: null,
    from: 'HomeScreen'
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: Platform.OS === 'ios' ? 16 : 0,
        height:30,
        backgroundColor: '#fff',
        position:'relative'
    },
    container: {
        backgroundColor: colors.white,
        paddingLeft: 8,
        paddingRight: 8,
        height:'94%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
    border: {
        width: '100%',
        height: 2,
        backgroundColor: colors.orange
    }
});