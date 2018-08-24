import {Alert, BackHandler} from "react-native";


export default class Helpers {

    static _getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    static _getExitMessage = (lang) => {


        if(lang === 1 || lang === "1" || lang === '1') {
            return Alert.alert(
                'Exit Mozzaik!!!',
                'Do you want to exit?',
                [
                    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Yes', onPress: () => BackHandler.exitApp()},
                ],
                {cancelable: false});
        } else if(lang === 3 || lang === "3" || lang === '3') {
            return Alert.alert(
                'Ausfahrt Mozaik !!!',
                'Möchtest du aussteigen?',
                [
                    {text: 'Nein', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Ja', onPress: () => BackHandler.exitApp()},
                ],
                {cancelable: false});

        } else {
            return Alert.alert(
                'الخروج من موزاييك!!!',
                'هل تريد الخروج من موزاييك حقاً؟',
                [
                    {text: 'كلا', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'نعم', onPress: () => BackHandler.exitApp()},
                ],
                {cancelable: false});

        }

    };

    static _iosCookiesJsCode() {
        return `function readCookie(name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for(var i=0;i < ca.length;i++) {
                        var c = ca[i].toString();
                        while (c.charAt(0)==' ') c = c.substring(1,c.length).toString();
                        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length).toString();
                    }
                    return null;
                }

                 window.postMessage({
                 id_lang : readCookie('id_lang'),
                 id_customer : readCookie('id_customer'),
                 nb_products : readCookie('nb_products'),
                 nb_offers : readCookie('nb_offers'),
                 });
             
                `;
    }

}
