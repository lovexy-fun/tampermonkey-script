// ==UserScript==
// @name        Bing去广告
// @namespace   http://lovexy.fun/
// @version     0.0.1
// @description 去除Bing搜索结果的广告
// @author      lovexy-fun
// @license     MIT
// @match       https://cn.bing.com/search*
// @icon        https://cn.bing.com/favicon.ico
// @grant       none
// @run-at      document-end
// @supportURL  https://github.com/lovexy-fun/tampermonkey-script/issues
// @updateURL   https://github.com/lovexy-fun/tampermonkey-script/raw/master/src/bing-remove-ad.user.js
// @downloadURL https://github.com/lovexy-fun/tampermonkey-script/raw/master/src/bing-remove-ad.user.js
// ==/UserScript==

(function () {
    'use strict';

    var self = document.getElementsByClassName('b_adTop')[0];
    if (self !== undefined) {
        var parent = self.parentElement;
        parent.removeChild(self);
    }

})();