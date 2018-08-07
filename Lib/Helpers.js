

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
                var id_lang = readCookie('id_lang');
                var id_customer = readCookie('id_customer');
                var nb_products = readCookie('nb_products');
                var nb_offers = readCookie('nb_offers');
                if (history.pushState) {
                    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id_lang='+id_lang+'&id_customer='+id_customer+'&nb_products='+nb_products+'&nb_offers='+nb_offers;
                    window.history.pushState({path:newurl},'',newurl);
                }`;
    }

}
