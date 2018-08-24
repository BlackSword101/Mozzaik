'use strict';

import {createSwitchNavigator, createStackNavigator, TabNavigator} from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import NewProductsScreen from '../screens/NewProductsScreen';
import NewOffersScreen from '../screens/NewOffersScreen';

import CustomTabBar from '../components/CustomTabBar';
import colors from "../theme/colors";
import InfoScreen from "../screens/InfoScreen";
import TermsAndConditionScreen from "../screens/TermsAndConditionScreen";
import AboutUsScreen from "../screens/AboutUsScreen";

const HomeStack = createStackNavigator({
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => {
                return {
                    header: null,
                    swipeEnabled: false,
                }
            },
        },
    },
    {
        mode: 'card',
        initialRouteName: 'HomeScreen'
    }
);


const ProductsStack = createStackNavigator({
        NewProductsScreen: {
            screen: NewProductsScreen,
            navigationOptions: ({navigation}) => {
                return {
                    header: null,
                    swipeEnabled: false,
                }
            },
        },
    },
    {
        mode: 'card',
        initialRouteName: 'NewProductsScreen'
    }
);


const OffersStack = createStackNavigator({
        NewOffersScreen: {
            screen: NewOffersScreen,
            navigationOptions: ({navigation}) => {
                return {
                    header: null,
                    swipeEnabled: false,
                }
            },
        },
    },

    {
        mode: 'card',
        initialRouteName: 'NewOffersScreen'
    }
);

const InfoStack = createStackNavigator({
        InfoScreen: {
            screen: InfoScreen,
            navigationOptions: ({navigation}) => {
                return {
                    header: null,
                    swipeEnabled: false,
                }
            },
        },
        AboutUsScreen : {
            screen:AboutUsScreen,
            navigationOptions: ({navigation}) => {
                return {
                    header: null,
                    swipeEnabled: false,
                }
            },
        },
        TermsAndConditionScreen : {
            screen:TermsAndConditionScreen,
            navigationOptions: ({navigation}) => {
                return {
                    header: null,
                    swipeEnabled: false,
                }
            },
        },
    },
    {
        mode: 'card',
        initialRouteName: 'InfoScreen'
    }
);

const TabNav = TabNavigator(
    {
        HomeTab: {
            screen: HomeStack,
            navigationOptions: {}
        },
        NewProductsTab: {
            screen: ProductsStack,
            navigationOptions: {}
        },
        NewOffersTab: {
            screen: OffersStack,
            navigationOptions: {}
        },
    },
    {
        navigationOptions: ({navigation}) => ({}),
        tabBarComponent: CustomTabBar,//TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                height: 60,
                backgroundColor: colors.white,
            },
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
        },
        tabStyle: {margin: 0, padding: 0},
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true
    }
);

export const CreateRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            // WelcomeScreen: {screen: WelcomeStack},
            Tab: {screen: TabNav},
            Info: {screen: InfoStack}
        },
        {
            // initialRouteName: signedIn ? "Tab" : "WelcomeScreen",
            initialRouteName: "Tab",
            headerMode: 'none',
            navigationOptions: {
                headerVisible: false,
            }
        }
    );
};