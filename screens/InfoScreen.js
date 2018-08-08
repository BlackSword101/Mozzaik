'use strict';

import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Linking, Platform} from "react-native";
import colors from "../theme/colors";
import Header from "../components/Header";
import ModalWrapper from "react-native-modal-wrapper";

const winSize = Dimensions.get('window');

export default class InfoScreen extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            aboutUsModalVisible: false
        };
    }

    _openLink = (link) => {
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                //console.log("Don't know how to open URI: " + link);
            }
        });
    };

    _callPhone = (phone) => {
        Linking.canOpenURL(phone).then(supported => {
            if (supported) {
                Linking.openURL(phone);
            } else {
                //console.log("Don't know how to call phone: " + phone);
            }
        });
    };

    _sendEmail = (email) => {
        Linking.canOpenURL(email).then(supported => {
            if (supported) {
                Linking.openURL(email);
            } else {
                //console.log("Don't know how to send email: " + email);
            }
        });
    };

    _renderAboutUs = () => {
      return(
          <ModalWrapper
              onRequestClose={() => {
                 this.setState({
                     aboutUsModalVisible: false
                 });
              }}
              shouldCloseOnOverlayPress={true}
              shouldAnimateOnOverlayPress={true}
              animationDuration={300}
              shouldAnimateOnRequestClose={true}
              containerStyle={{flexDirection: 'column'}}
              isNative={true}
              style={styles.ModalWrapper}
              visible={this.state.aboutUsModalVisible}>
              <View style={[styles.aboutUsContainer]}>
                  <Text style={[styles.boldText, styles.aboutText]}>اتصل بنا:</Text>
                  <Text style={[styles.aboutText]}>Mozzaik GmbH</Text>
                  <Text style={[styles.aboutText]}>Döinghauser Str. 37</Text>
                  <Text style={[styles.aboutText]}>58332 Schwelm</Text>
                  <Text style={[styles.aboutText]}>خدمة الزبائن</Text>
                  <Text style={[styles.aboutText]}>من الاثنين إلى الجمعة</Text>
                  <Text style={[styles.aboutText]}>من الساعة 8 لغاية الساعة 18</Text>
                  <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._callPhone('tel:020228323333');}}>
                     <Text style={[styles.aboutText]}>Tel: 0202 / 283 233 33</Text>
                  </TouchableOpacity>
                  <Text style={[styles.aboutText]}>Fax: 0202 / 283 233 36</Text>
                  <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._sendEmail('mailto:info@mozzaik.de');}}>
                    <Text style={[styles.aboutText]}>E-Mail: info@mozzaik.de</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._openLink('https://www.mozzaik.de/');}}>
                    <Text style={[styles.aboutText , {marginBottom: 0}]}>WebSite: www.mozzaik.de</Text>
                  </TouchableOpacity>
              </View>

          </ModalWrapper>
      );
    };

    _renderItem = ({item}) => (
        <TouchableOpacity activeOpacity={1} style={{}} onPress={item.onPressIn}>
            <View style={styles.item}>
                <Image fadeDuration={0} source={item.ico} style={styles.avatar}/>
                <Text style={styles.title}>{item.key}</Text>
                <Image fadeDuration={0} source={require('../components/img/right_arrow2x.png')} style={styles.arrow}/>
            </View>
        </TouchableOpacity>
    );



    render() {

        return (
            <View style={[styles.container]}>
                <Header canGoBack={true} onBackPress={()=> {
                    this.props.navigation.navigate(this.props.navigation.getParam('backTo', null));
                }} navigation={this.props.navigation}/>
                <FlatList
                    data={[
                        {
                            key: 'اتصل بنا',
                            ico: require('../components/img/contact-us.png'),
                            onPressIn: () => {
                                this.setState({aboutUsModalVisible: true});
                            }
                        },
                        {
                            key: 'من نحن',
                            ico: require('../components/img/about-us-icon-png-20.jpg'),
                            onPressIn: () => {
                                this.props.navigation.navigate('AboutUsScreen');
                            }
                        },
                        {
                            key: 'Terms and Condition',
                            ico: require('../components/img/terms_condition.png'),
                            onPressIn: () => {
                                this.props.navigation.navigate('TermsAndConditionScreen');
                            }
                        },
                    ]}

                    contentContainerStyle={{ marginTop:(Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 20 : 0}}
                    bounce={false}
                    getItemLayout={(data, index) => ({length: 75, offset: 75 * index, index})}
                    renderItem={this._renderItem}
                />
                {this._renderAboutUs()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    item: {
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#CED0CE',
        width: "100%",
        height: 65,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 14,
    },
    arrow: {
        width: 50,
        height: '30%',
        resizeMode: 'contain',
        position: 'absolute',
        right: 10,
    },
    avatar: {
        width: 35,
        height: 35,
        display: 'flex',
        resizeMode: 'contain',
        marginRight: 15,
        marginLeft: 10,
        tintColor: colors.notSelectedIcon
    },
    ModalWrapper: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutUsContainer: {
        padding:15,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems:'flex-end',
        width: Dimensions.get('window').width / 1.30,
        // height: winSize.height / 2
    },
    boldText : {
        fontWeight:'bold'
    },
    aboutText : {
        color: colors.black,
        marginBottom: 10
    }
});