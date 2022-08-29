// ==UserScript==
// @name        CSDN博客优化
// @namespace   http://lovexy.fun/
// @version     0.0.1
// @description 优化CSDN博客展示
// @author      lovexy-fun
// @match       https://blog.csdn.net/*
// @icon        https://blog.csdn.net/favicon.ico
// @grant       none
// @supportURL  https://github.com/lovexy-fun/tampermonkey-script/issues
// @updateURL   https://github.com/lovexy-fun/tampermonkey-script/raw/master/src/csdn-optimizer.user.js
// ==/UserScript==

(function () {
    'use strict';

    /* 解除复制限制 */
    $("#content_views pre").css("user-select", "text");
    $("#content_views pre code").css("user-select", "text");

})();