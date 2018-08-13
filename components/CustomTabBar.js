'use strict';
import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    Platform,
    Dimensions,
    BackHandler,
    Text,
} from 'react-native';
import colors from "../theme/colors";

import {NavigationActions} from "react-navigation";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ActionCreators from "../Actions/Action";

const ITEMS_NUMBER = 3;

class CustomTabBar extends Component {

    constructor(props, ctx) {
        super(props, ctx);

        this._left = new Animated.Value(0); // Added

        this.state = {
            fade: true,
        }
    }

    componentWillReceiveProps(props) {

        let newState = props.navigation.state;
        let newRoute = newState.routes[newState.index];
        let newParams = newRoute.routes[0].params;

        if (typeof newParams !== 'undefined') {
            if(typeof newParams.fade !== 'undefined') {
                this.setState({fade: newParams.fade});
            }
        }
    }

    _animateBar = (index) => {

        Animated.timing(this._left, {
            toValue: index * (Dimensions.get('window').width / ITEMS_NUMBER),
            duration: 400
        }).start();
    };

    _renderItem = (route, index, navigation, jumpToIndex) => {

        let focused = index === navigation.state.index;
        let tintColor = focused ? colors.orange : colors.notSelectedIcon;

        const backAction = NavigationActions.back({key: null});

        switch (index) {
            case 0:
                return (
                    <TouchableWithoutFeedback style={[styles.item]} key={route.key} onPress={async () => {
                        this._animateBar(index);
                        if(Platform.OS !== 'ios') {
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackHomeScreen);
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackNewProductsScreen);
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackDailyOffersScreen);
                            BackHandler.addEventListener('hardwareBackPress', this.props.onBackHomeScreen);
                        }
                        // navigation.dispatch(backAction);
                        jumpToIndex(index);
                    }}
                    >
                        <View style={styles.item}>
                            <Image style={[styles.homeIcon, {tintColor: tintColor}]} source={require('../components/img/homeIcon.png')}/>
                        </View>
                    </TouchableWithoutFeedback>
                );
            case 1:
                return (
                    <TouchableWithoutFeedback style={[styles.item]} key={route.key} onPress={async () => {
                        this._animateBar(index);
                        if(Platform.OS !== 'ios') {
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackHomeScreen);
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackNewProductsScreen);
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackDailyOffersScreen);
                            BackHandler.addEventListener('hardwareBackPress', this.props.onBackNewProductsScreen);
                        }
                        // navigation.dispatch(backAction);
                        jumpToIndex(index);
                        this.props.newProductsScreenUpdate(Math.floor(Math.random() * Math.floor(1000000)));
                    }}>
                        <View style={[styles.item, {}]}>
                            <Image style={[styles.newProductsIcon,{tintColor: tintColor}]} source={require('../components/img/new_products_0.png')}/>
                            {/*<View style={{position:'absolute', backgroundColor:colors.orange, top:25, bottom:0 , right:38, width:18, height:18, borderRadius:11, justifyContent:'center', alignItems:'center'}}>*/}
                                {/*<Text style={{color:'#ffffff', fontSize:8}}>{'70'}</Text>*/}
                            {/*</View>*/}
                            {(
                                this.props.newProductsCount ?
                                    <View style={{
                                        position: 'absolute',
                                        backgroundColor: colors.orange,
                                        top: 1,
                                        bottom: 0,
                                        right: '31%',
                                        width: 18,
                                        height: 18,
                                        borderRadius: 11,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color:'#ffffff', fontSize:8}}>{this.props.newProductsCount}</Text>
                                    </View>
                                    :
                                    null
                            )}

                        </View>
                    </TouchableWithoutFeedback>
                );
            case 2:
                return (
                    <TouchableWithoutFeedback style={[styles.item]} key={route.key} onPress={async () => {
                        this._animateBar(index);
                        if(Platform.OS !== 'ios') {
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackHomeScreen);
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackNewProductsScreen);
                            BackHandler.removeEventListener('hardwareBackPress', this.props.onBackDailyOffersScreen);
                            BackHandler.addEventListener('hardwareBackPress', this.props.onBackDailyOffersScreen);
                        }
                        // navigation.dispatch(backAction);
                        jumpToIndex(index);
                        this.props.newOffersScreenUpdate(Math.floor(Math.random() * Math.floor(1000000)));
                    }}>
                        <View style={styles.item}>
                            <Image style={[styles.newOffersIcon, {tintColor: tintColor}]} source={require('../components/img/discount.png')}/>
                            {(
                                this.props.newOffersCount ?
                                    <View style={{
                                        position: 'absolute',
                                        backgroundColor: colors.green,
                                        top: 1,
                                        bottom: 0,
                                        right: '26%',
                                        width: 18,
                                        height: 18,
                                        borderRadius: 11,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color: '#ffffff', fontSize: 8}}>{this.props.newOffersCount}</Text>
                                    </View>
                                    :
                                    null
                            )}

                        </View>
                    </TouchableWithoutFeedback>
                );
        }
    };

    render() {
        const {navigation, renderIcon, activeTintColor, inactiveTintColor, jumpToIndex} = this.props;
        const {routes} = navigation.state;
        return (
            <View>
                {/*<View style={{height: 2, width: '100%', backgroundColor: colors.orange}}/>*/}
                <View style={[styles.row]}>
                    {routes && routes.map((route, index) => {
                        return (this._renderItem(route, index, navigation, jumpToIndex))
                    })}

                    <Animated.View style={{
                        width: Dimensions.get('window').width / ITEMS_NUMBER,
                        position: 'absolute',
                        left: this._left,
                        bottom: (Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 28 : 0,
                        height: 4,
                        backgroundColor: colors.orange,
                        zIndex: 1,
                    }}/>
                    {this.state.fade ? <Animated.View style={[styles.fade]}/> : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        position:'relative'
    },
    item: {
        position:'relative',
        justifyContent: 'center',
        width: Dimensions.get('window').width / ITEMS_NUMBER,
        height: 45,
        paddingLeft: 0,
        backgroundColor: colors.white,
        bottom: (Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 28 : 0,
    },
    homeIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    newProductsIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    newOffersIcon : {
        width: 30,
        height: 30,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    fade: {
        top: 0,
        bottom: 0,
        height: '100%',
        zIndex: 3,
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    }
});

CustomTabBar.defaultProps = {};

//this line for bind all the actions in the ActionCreators "Actions.js" to this screen and use it like this.props.toggleLoader(true)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        onBackHomeScreen: (typeof state.Reducer.onBackHomeScreen !== "undefined" ? state.Reducer.onBackHomeScreen : 0),
        onBackNewProductsScreen: (typeof state.Reducer.onBackNewProductsScreen !== "undefined" ? state.Reducer.onBackNewProductsScreen : 0),
        onBackDailyOffersScreen: (typeof state.Reducer.onBackDailyOffersScreen !== "undefined" ? state.Reducer.onBackDailyOffersScreen : 0),
        newProductsCount: (typeof state.Reducer.newProductsCount !== "undefined" ? state.Reducer.newProductsCount : 0),
        newOffersCount: (typeof state.Reducer.newOffersCount !== "undefined" ? state.Reducer.newOffersCount : 0),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar);