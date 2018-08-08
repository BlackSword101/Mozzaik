'use strict';

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,Platform, Dimensions, TouchableOpacity, Linking, Image} from "react-native";
import Header from "../components/Header";
import colors from "../theme/colors";


export default class AboutUsScreen extends Component {
    constructor(props, ctx) {
        super(props, ctx);
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

    render() {
        return (
            <View style={[styles.container]}>
                <Header canGoBack={true} onBackPress={()=> this.props.navigation.goBack()} navigation={this.props.navigation}/>
                <ScrollView
                    style={{padding: 15,  marginTop:(Platform.OS === 'ios' && Dimensions.get('window').height === 812) ? 20 : 0}}
                >
                    <Text style={[styles.text, styles.bold]}>
                        {'من نحن:'}
                    </Text>

                    <Text style={[styles.textHeader]}>
                        {'شركة موزاييك:'}
                    </Text>

                    <Text style={[styles.text]}>
                        {'هي أول شركة من نوعها ابتكرت خدمة تكون فيها صلة الوصل بين الشرق الأوسط و أوروبا, و ذلك بأحدث وسائل التكنولوجيا, التواصل, الدعم اللوجيستي والشحن, لكي تتمكن من إيصال صورة للعالم بان سوريا خصوصا و منطقة الشرق الأوسط عموما هي مناطق منتجة للجمال والأبداع بما تتميزه من سحر و روعة واتقان في مجالات صناعية متعددة, وذلك بتوفير هذه المنتجات بأرخص الأسعار, وأسرع طرق الشحن, واسهل طريقة بضغطة زر واحدة لشراء المنتج من المصدر مباشرة إلى باب منزلك أينما كنت في أوروبا.'}
                    </Text>

                    <Text style={[styles.textHeader]}>
                        {'كيف استطاعت شركة موزاييك تحقيق معادلة الجودة و السعر؟'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'إن بلادنا تتميز منذ القدم بجودة و حرفية و اتقان صناعات متعددة ناهيك عن رخص الأسعار مقارنة بالدول الأوروبية و ذلك لعدة عوامل و منها (اليد العاملة, الضرائب, المعيشة, ....) حيث كانت تكمن المشكلة في توفير هذه البضائع بشكل مستمر و سهل لدى المستهلكين في أوروبا, فالبعض لا يقطن في مدن مخدمة ​​بمثل هذا النوع من البضائع و المشكلة الثانية هي أن هذه البضائع يتم تداولها عبر عدة تجار لكي تصل الى المستهلك النهائي, لهذا السبب فهي تصل مرتفعة السعر اضعاف, وهنا لاحظت شركة موزاييك هذه المشاكل و ابتكرت نظام يسمح من خلاله زبائن موزاييك بالحصول على هذه المنتجات بنفس الجودة و , وهنا يكون زبون موزاييك قد وفر الكثير من المال عبر تجنب دفع عمولة التجار و أيضا وفر في المواصلات لجلب البضائع لكن بإحضارها مباشرة من المصدر الى باب منزل الزبون, ناهيك عن التعب الجسدي و ضياع الوقت.'}
                    </Text>

                    <Text style={[styles.textHeader]}>
                        {'لماذا موزاييك ؟'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'لقد اتى الاسم بالصدفة اثناء مشاهدتي للوحة فسيفسائية (موزاييك) جميلة جدا, وادركت أن سر جمال و اتقان و تميز هذه اللوحة قد تم بفعل تجميع قطع صغيرة جميلة جدا و كل قطعة تمثل لوحة بحد ذاتها, حيث إن جمال اللوحة الكاملة يعكس جمال كل قطعة على حدا, و هذا هو مبدأ عمل شركة موزاييك, فإن شركة موزاييك هي بمثابة اللوحة الفسيفسائية (الموزايك) الكاملة و المحالات و المصانع و أصحاب المهن يمثلون اللوحات الصغيرة التي سيتم جمعها عن طريق شركة موزاييك لتشكيل اكبر سوق لإيصال هذه المنتجات بأفضل و أسهل و أأمن الطرق من الشرق الأوسط إلى كل منزل بأوروبا.'}
                    </Text>

                    <Text style={[styles.textHeader]}>
                        {'ما الذي يميز منتجات بلادنا (الشرق الأوسط) عن باقي منتجات العالم ؟'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'إن بلادنا اشتهرت منذ القدم بجودة و اتقان صناعات متعددة (غذائية, غير غذائية) وتوارثت هذه الصناعات عبر أجيال لتصل اليوم إلى جيلنا الذي بدوره اتقن بالفعل هذه الصناعات وأضاف عليها الكثير, وما يميزنا عن باقي دول العالم بان هذه الصناعات مميزة فقط في بلادنا و تمتاز بجودة رائعة و سعر منخفض جدا, و لما كان من الواجب تسويق هذه البضائع بشكل عصري و عالمي و بالطريقة التي تعطي هذه المنتجات حقها و لما كان السوق العالمي متعطش لمثل هذا النوع من البضائع و الجودة, ارتأت شركة موزاييك أنه بالإمكان انشاء سوق الكترونية و فكرة مميزة بربط جميع هذه المنتجات عبر موقع الكترون يسمح لأي شخص متواجد بأوروبا بطلب هذه المنتجات بضغطة زر, كما لو كان متواجد في بلادنا.'}
                    </Text>

                    <View style={{width: '100%', height: 20, backgroundColor: colors.white}}/>
                    <Text style={[styles.text, styles.bold]}>
                        {'شركة موزاييك المحدودة المسؤولية'}
                    </Text>
                    <View style={{width: '100%', height: 5, backgroundColor: colors.white}}/>

                    <Text style={[styles.text,{textAlign: 'right'}]}>
                        {'Döinghauser Str. 37'}
                    </Text>
                    <Text style={[styles.text,{textAlign: 'right'}]}>
                        {'58332 Schwelm'}
                    </Text>
                    <View style={{width: '100%', height: 5, backgroundColor: colors.white}}/>
                    <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._callPhone('tel:020228323333');}}>
                        <Text style={[styles.aboutText]}>{'هاتف: 020228323333'}</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text]}>
                        {'فاكس: 020228323336'}
                    </Text>
                    <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._sendEmail('mailto:info@mozzaik.de');}}>
                        <Text style={[styles.aboutText]}>{'الايميل: info@mozzaik.de'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._openLink('https://www.mozzaik.de/');}}>
                        <Text style={[styles.aboutText , {marginBottom: 0}]}>{'الموقع: www.mozzaik.de'}</Text>
                    </TouchableOpacity>

                    <View style={{width: '100%', height: 15, backgroundColor: colors.white}}/>
                    <Image source={{uri: 'https://www.mozzaik.de/img/cms/ceo.jpg'}} style={{width: 150, height: 150, alignSelf:'flex-end'}} />
                    <View style={{width: '100%', height: 15, backgroundColor: colors.white}}/>
                    <Text style={[styles.text]}>
                        {'الرئيس التنفيذي: ريبال ديب'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'رقم السجل التجاري: HRB 28229'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'محكمة السجل: محكمة المقاطعة فوبرتال'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'رقم تعريف ضريبة القيمة المضافة: DE312803068'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'مسؤول عن المحتوى وفقا للفقرة 2 من المادة 55 من الدستور'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'تنويه: على الرغم من التحكم الدقيق في محتويات, نحن لسنا مسؤولين عن محتويات الروابط الخارجية. لمحتوى الصفحات المرتبطة.'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'المفوضية الأوروبية توفر منصة ل'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'تسوية المنازعات عبر الإنترنت (OS) جاهزة للعثور عليك هنا'}
                    </Text>
                    <TouchableOpacity activeOpacity={1} style={{}} onPress={()=>{this._openLink('https://ec.europa.eu/consumers/odr/');}}>
                        <Text style={[styles.aboutText , {marginBottom: 0}, {textAlign: 'right'}]}>{'https://ec.europa.eu/consumers/odr/'}</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text]}>
                        {'للمشاركة في إجراء حل النزاعات'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'نحن لسنا ملزمين لمجلس التحكيم المستهلكين'}
                    </Text>
                    <Text style={[styles.text]}>
                        {'وليس جاهزا.'}
                    </Text>
                    <View style={{width: '100%', height: 30, backgroundColor: colors.white}}/>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    text: {
        color: colors.readText,
    },
    bold : {
        fontWeight: "bold"
    },
    textHeader : {
        marginTop:8,
        marginBottom:3,
        fontWeight: "bold",
        color: colors.orange
    }
});