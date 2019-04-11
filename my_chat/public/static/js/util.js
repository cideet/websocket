/**
 * Created by zhangsanfeng on 2019/4/8.
 */

function getRequest() {
    var url = location.search;
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function mathRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}