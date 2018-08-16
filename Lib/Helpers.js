

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

                 window.postMessage({
                 id_lang : readCookie('id_lang'),
                 id_customer : readCookie('id_customer'),
                 nb_products : readCookie('nb_products'),
                 nb_offers : readCookie('nb_offers'),
                 });
             
                `;
    }

}
