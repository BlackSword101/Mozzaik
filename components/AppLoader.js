'use strict';

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from "../theme/colors";
import BubblesLoader from "./BubblesLoader";

export default class AppLoader extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                <BubblesLoader size={6} color={this.props.color}/>
            </View>
        );
    }
}

AppLoader.defaultProps = {
    color: colors.orange,
    backgroundColor: colors.white,
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
});