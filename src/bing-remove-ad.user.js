// ==UserScript==
// @name         Bing去广告
// @namespace    http://lovexy.fun/
// @version      0.0.1
// @description  去除Bing搜索结果的广告
// @author       lovexy-fun
// @match        https://cn.bing.com/search*
// @icon         https://cn.bing.com/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    var self = document.getElementsByClassName('b_adTop')[0];
    if (self !== undefined) {
        var parent = self.parentElement;
        parent.removeChild(self);
    }

})();