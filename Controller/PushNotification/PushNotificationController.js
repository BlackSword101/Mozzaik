'use strict';

import React, {Component} from 'react';
import {PushNotificationIOS, Platform, AppState} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PubNubReact from "pubnub-react";
// import BadgeAndroid from 'react-native-android-badge';
// import {setBadge} from 'react-native-android-badge';

import * as ActionCreators from "../../Actions/Action";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class PushNotificationController extends Component {

    // https://www.pubnub.com/docs/react-native-javascript/pubnub-javascript-sdk
    constructor(props, ctx) {
        super(props, ctx);
        //live keys
        this._SENDER_ID = '365209122432'; //live
        let subscribeKey = 'sub-c-2b8a3d86-8ea4-11e8-b7a4-ce74daf54d52'; //live
        // this._messageCount = 0;
        //debug keys
        // if (global.PRODUCTION === false) {
        //     this._SENDER_ID = '1092146930590'; //debug
        //     subscribeKey = 'sub-c-84b642f2-1c6b-11e8-8871-ea6e72d37f92'; //debug
        // }

        this._PUSH_GATEWAY = (Platform.OS === 'ios' ? 'apns' : 'gcm'); // apns, gcm, mpns, fcm

        //https://www.pubnub.com/docs/java-se-java/api-reference-configuration
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-f9a74760-ffe6-4c58-91f8-c64ac05cf102',
            subscribeKey: subscribeKey
        });
        this.pubnub.init(this);

    };

    componentDidMount () {
        this._listingChannelsForDevice();
        // console.log('componentDidMount :', this.props.channel);
        // if(this.props.channel !== null) {
            this._enablePushNotification(this.props.channel);
        // }
        // this.props.navigation.navigate('MyAccount');
        // this.props.passDeleteAllDevicesInChannels(() => {
        //     this._deleteAllDevicesInChannels()
        // });
    };

    componentWillReceiveProps(nextProps) {
        this._listingChannelsForDevice();

        // console.log('nextProps.channel :', nextProps.channel );
        // console.log('this.props.channel :', this.props.channel );

        if(nextProps.channel !== this.props.channel) {
                this._enablePushNotification(nextProps.channel);
        }
    }

    _enablePushNotification = (channel) => {

        // console.log(this._SENDER_ID);
        // console.log('_enablePushNotification :', channel);
        // console.log('this._TOKEN :', this._TOKEN);
        const options = {
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: (token) => {
                this._TOKEN = token.token;
                this._addToPushChannels(channel);
            },

            onNotification: (notification) => {

                this._listingChannelsForDevice();
                // console.log(notification);

                // console.log('onNotification AppState: ', AppState.currentState);

                if (notification['foreground']) {

                }

                //Notification from the background or when the app is killed
                if (!notification['foreground']) {
                    if (Platform.OS !== 'ios' && Platform.Version < 26) {
                        // this._messageCount++;
                        // PushNotification.setApplicationIconBadgeNumber(16);
                        this.props.setBadgeCount(parseInt(this.props.badgeCount)+1);
                        // console.log('this._messageCount ', this._messageCount);
                        if(Platform.OS === 'android') {
                            let BadgeAndroid = require('react-native-android-badge');
                                BadgeAndroid.setBadge(parseInt(this.props.badgeCount));
                        }
                        // else if(Platform.OS === 'ios') {
                        //     this.props.setBadgeCount(parseInt(this.props.badgeCount) + 1);
                        //     PushNotification.setApplicationIconBadgeNumber(parseInt(this.props.badgeCount));
                        // }
                    }
                    // else if (Platform.OS == 'ios'){
                    //     this.props.setBadgeCount(parseInt(this.props.badgeCount) + 1);
                    //     PushNotification.setApplicationIconBadgeNumber(parseInt(this.props.badgeCount));
                    // }
                }

                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                notification.finish(PushNotificationIOS.FetchResult.NewData);

            },

            // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
            senderID: this._SENDER_ID,

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             */
            requestPermissions: true,

        };

        PushNotification.configure(options);
    };
    //
    // //https://www.pubnub.com/docs/react-native-javascript/api-reference-mobile-push#adding-device-channel
    // //Enable push notifications on provided set of channels.
    _addToPushChannels = (channel) => {

         // this._listingChannelsForDevice();
        // console.log(this._listingChannelsForDevice());

        // this._deleteAllDevicesInChannels();

        // console.log('channel: ', channel);
        const addChannelsOptions = {
            channels: [channel], //array
            device: this._TOKEN,
            pushGateway: this._PUSH_GATEWAY // apns, gcm, mpns
        };
        const addChannelsFunction = (status) => {
            if (status.error) {
                // console.log("operation failed w/ error:", status);
            } else {
                // console.log("operation done!");
                // this._subscribeToChannels(userID);
                this._listingChannelsForDevice();
            }
        };
        this.pubnub.push.addChannels(addChannelsOptions, addChannelsFunction);
        // this._listingChannelsForDevice();
    };

    // //https://www.pubnub.com/docs/react-native-javascript/api-reference-mobile-push
    // //Disable push notifications from all channels which is registered with specified pushToken
    _deleteAllDevicesInChannels = () => {

        const deleteDeviceOptions = {
            device: this._TOKEN,
            pushGateway: this._PUSH_GATEWAY // apns, gcm, mpns
        };

        const deleteDeviceFunction = (status) => {
            if (status.error) {
                // console.log(this._TOKEN);
                return false;
            } else {
                this._TOKEN = null;
                this._PUSH_GATEWAY = null;
                // console.log(this._TOKEN);
                return true;
            }
        };

         this.pubnub.push.deleteDevice(deleteDeviceOptions, deleteDeviceFunction);
    };


    _removeDiviceFromChannels = (channels) => {


        let deleteDeviceOptions = {
            channels: channels,
            device: this._TOKEN,
            pushGateway: this._PUSH_GATEWAY // apns, gcm, mpns
        };

        const deleteDeviceFunction = (status) => {
            if (status.error) {
                // console.log(this._TOKEN);
                return false;
            } else {
                // console.log(this._TOKEN);
                return true;
            }
        };

        this.pubnub.push.removeChannels(deleteDeviceOptions, deleteDeviceFunction);
    };
    //
    // //https://www.pubnub.com/docs/react-native-javascript/api-reference-mobile-push#listing-channels-device
    // //Request for all channels on which push notification has been enabled using specified pushToken
    _listingChannelsForDevice = () => {


        const listChannelsOptions = {
            device: this._TOKEN,
            pushGateway: this._PUSH_GATEWAY // apns, gcm, mpns
        };

        let listChannelsFunction = (status, response) => {

            let channels = [];

            if (status.error) {
                // console.log("operation failed w/ error:", status);
                return;
            }

            // console.log("listing push channel for device");
            response.channels.forEach(function (channel) {
                channels.push(channel);
            });

            // console.log(channels);
            if(channels.length > 1){
                this._removeDiviceFromChannels(['mozzaik_all_users_channel']);
            }


        };

        this.pubnub.push.listChannels(listChannelsOptions, listChannelsFunction);

    };

    render() {
        return null;
    };
}

PushNotificationController.defaultProps = {
    navigation: null,
    channel: 'mozzaik_all_users_channel'
};

//this line for bind all the actions in the ActionCreators "Actions.js" to this screen and use it like this.props.toggleLoader(true)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        badgeCount: (typeof state.Reducer.badgeCount !== "undefined" ? state.Reducer.badgeCount : 0),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PushNotificationController);