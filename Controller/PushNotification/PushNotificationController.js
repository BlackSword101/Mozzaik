'use strict';

import React, {Component} from 'react';
import {PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PubNubReact from "pubnub-react";
// import BadgeAndroid from 'react-native-android-badge';
// import {setBadge} from 'react-native-android-badge';

import * as ActionCreators from "../../Actions/Action";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Platform} from "react-native";


class PushNotificationController extends Component {

    // https://www.pubnub.com/docs/react-native-javascript/pubnub-javascript-sdk
    constructor(props, ctx) {
        super(props, ctx);
        this._TOKEN = null;
        //live keys
        this._SENDER_ID = '365209122432'; //live
        let subscribeKey = 'sub-c-2b8a3d86-8ea4-11e8-b7a4-ce74daf54d52'; //live

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

    async componentDidMount () {
        this._enablePushNotification();
        // this.props.navigation.navigate('MyAccount');
        // this.props.passDeleteAllDevicesInChannels(() => {
        //     this._deleteAllDevicesInChannels()
        // });
    };

    _enablePushNotification = () => {

        const options = {
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: (token) => {
                // console.log(token);
                this._TOKEN = token.token;
                // console.log(this._deleteAllDevicesInChannels());
                this._addToPushChannels();
                // this._removeUserFromPubNubChannels(userID);
            },

            onNotification: (notification) => {


                console.log('notification: ', notification);
                // console.log(AppState.currentState);

                // const BadgeAndroid = require('react-native-android-badge');
                if (notification['foreground']) {

                    // let messageObject = {};

                    // if (Platform.OS === 'ios') {
                    //     messageObject = notification['data']['messageObject']//JSON.parse(notification['data']['messageObject'])
                    // } else {
                    //     messageObject = JSON.parse(notification['messageObject'])
                    // }

                    // if (Platform.OS === 'ios') {
                    //     // Notification
                    //     if (parseInt(notification['data']['user_id']) === parseInt(userID)) {
                    //         this.props.increaseNotificationCount(notification['data']['badge']);
                    //     }
                    // }
                    // else {
                    //     // Notification
                    //     if (parseInt(notification['user_id']) === parseInt(userID)) {
                    //         this.props.increaseNotificationCount(notification['badge']);
                    //     }
                    // }

                    // Notification
                    // switch (messageObject.action) {
                    //     case APP_ACTIONS.likePost:
                    //         this.props.udpatePostLikesCount(APP_ACTIONS.likePost, messageObject.object.id, messageObject.object.likes_count);
                    //         break;
                    //     case APP_ACTIONS.likeArticle:
                    //         this.props.udpatePostLikesCount(APP_ACTIONS.likeArticle, messageObject.object.id, messageObject.object.likes_count);
                    //         break;
                    //     case APP_ACTIONS.unlikePost:
                    //         this.props.udpatePostLikesCount(APP_ACTIONS.unlikePost, messageObject.object.id, messageObject.object.likes_count);
                    //         break;
                    //     case APP_ACTIONS.unlikeArticle:
                    //         this.props.udpatePostLikesCount(APP_ACTIONS.unlikeArticle, messageObject.object.id, messageObject.object.likes_count);
                    //         break;
                    //     case APP_ACTIONS.createPostComment:
                    //         this.props.updatePostCommentCount(APP_ACTIONS.createPostComment, messageObject.object.id, messageObject.object.comments_count);
                    //         break;
                    //     case APP_ACTIONS.deletePostComment:
                    //         this.props.updatePostCommentCount(APP_ACTIONS.deletePostComment, messageObject.object.id, messageObject.object.comments_count);
                    //         break;
                    //     case APP_ACTIONS.createArticleComment:
                    //         this.props.updatePostCommentCount(APP_ACTIONS.createArticleComment, messageObject.object.id, messageObject.object.comments_count);
                    //         break;
                    //     case APP_ACTIONS.deleteArticleComment:
                    //         this.props.updatePostCommentCount(APP_ACTIONS.createArticleComment, messageObject.object.id, messageObject.object.comments_count);
                    //         break;
                    //     case APP_ACTIONS.editPost:
                    //         // console.log(messageObject);
                    //         // console.log(notification);
                    //         this.props.updatePost(APP_ACTIONS.editPost, messageObject.object);
                    //         break;
                    // }

                }

                //Notification from the background or when the app is killed
                if (!notification['foreground']) {
                    let messageObject = {};

                    if (Platform.OS === 'ios') {
                        messageObject = notification['data']['messageObject']//JSON.parse(notification['data']['messageObject'])
                    } else {
                        messageObject = JSON.parse(notification['messageObject'])
                    }

                    // if (Platform.OS !== 'ios' && Platform.Version < 26) {
                    //     let BadgeAndroid = require('react-native-android-badge');
                    //     BadgeAndroid.setBadge(parseInt(notification['badge']));
                    // }
                    //

                    //DeepLink
                    // switch (messageObject.object.type) {
                    //     case 'post':
                    //         this.props.navigation.navigate('SinglePost', {id: messageObject.object.id});
                    //         break;
                    //     case 'article':
                    //         this.props.navigation.navigate('SingleArticle', {id: messageObject.object.id});
                    //         break;
                    //     case 'place':
                    //         this.props.navigation.navigate('PlaceDetails', {id: messageObject.object.id});
                    //         break;
                    //     case 'event':
                    //         this.props.navigation.navigate('EventDetails', {id: messageObject.object.id});
                    //         break;
                    //     case 'user':
                    //         this.props.navigation.navigate('User', {id: messageObject.object.id});
                    //         break;
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

    //https://www.pubnub.com/docs/react-native-javascript/api-reference-mobile-push#adding-device-channel
    //Enable push notifications on provided set of channels.
    _addToPushChannels = () => {
        const addChannelsOptions = {
            channels: [`mozzaik_push_notification_channel`],
            device: this._TOKEN,
            pushGateway: this._PUSH_GATEWAY // apns, gcm, mpns
        };
        const addChannelsFunction = (status) => {
            if (status.error) {
                console.log("operation failed w/ error:", status);
            } else {
                console.log("operation done!");
                // this._subscribeToChannels(userID);
            }
        };
        this.pubnub.push.addChannels(addChannelsOptions, addChannelsFunction);
    };

    //https://www.pubnub.com/docs/react-native-javascript/api-reference-mobile-push
    //Disable push notifications from all channels which is registered with specified pushToken
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

        return this.pubnub.push.deleteDevice(deleteDeviceOptions, deleteDeviceFunction);
    };

    render() {
        return null;
    };
}

PushNotificationController.defaultProps = {
    loggedInUserID: 0,
    navigation: null
};

//this line for bind all the actions in the ActionCreators "Actions.js" to this screen and use it like this.props.toggleLoader(true)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        navigation: (typeof state.Reducer.navigation !== "undefined" ? state.Reducer.navigation : null),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PushNotificationController);