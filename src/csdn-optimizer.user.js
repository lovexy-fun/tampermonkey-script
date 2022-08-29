// ==UserScript==
// @name         CSDN博客优化
// @namespace    http://lovexy.fun/
// @version      0.0.1
// @description  优化CSDN博客
// @author       lovexy-fun
// @match        https://blog.csdn.net/*
// @icon         https://blog.csdn.net/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //解除复制限制
    $("#content_views pre").css("user-select", "text");
    $("#content_views pre code").css("user-select", "text");

})();