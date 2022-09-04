// ==UserScript==
// @name        CSDN博客优化
// @namespace   http://lovexy.fun/
// @version     1.1.0
// @description 优化CSDN博客展示
// @author      lovexy-fun
// @match       https://blog.csdn.net/*
// @icon        https://blog.csdn.net/favicon.ico
// @grant       none
// @supportURL  https://github.com/lovexy-fun/tampermonkey-script/issues
// @updateURL   https://github.com/lovexy-fun/tampermonkey-script/raw/master/src/csdn-optimizer.user.js
// @downloadURL https://github.com/lovexy-fun/tampermonkey-script/raw/master/src/csdn-optimizer.user.js
// ==/UserScript==

(function () {
    'use strict';

    /* 解除复制限制 */
    try {
        $("#content_views pre").css("user-select", "text");
        $("#content_views pre code").css("user-select", "text");
    } catch (error) {
        console.error({msg: "解除复制限制错误", err: error});
    }
    

    /* 优化界面 */
    try {
        $("#csdn-toolbar").remove();//移除顶栏
        $(".blog_container_aside").remove();//移除左侧边栏
        $("#rightAside").remove();//移除右侧边栏
        $("#rightAsideConcision").remove();//移除右侧边栏
        $(".recommend-box").remove();//移除推荐文章
        $("#recommendNps").remove();//移除相关推荐评价
        $(".template-box").remove();//移除主题介绍
        $("#tool-share").remove();//移除分享
        $(".csdn-side-toolbar ").remove();//移除侧边工具按钮
        $("main").width("100%");//放大主体文章部分
        $("body").css('background', 'rgb(245,246,247)');//修改背景色
    } catch (error) {
        console.error({msg: "优化界面错误", err: error});
    }
    
    /* 去掉复制版权尾巴 */
    try {
        [...document.getElementsByTagName("article")].forEach( i => {
            i.oncopy = e => e.stopPropagation();
            }
        );
    } catch (error) {
        console.error({msg: "去掉复制版权尾巴错误", err: error});
    }

    /* 不登录复制按钮生效 */
    try {
        [...document.getElementsByClassName("hljs-button")].forEach(i => {
            if ($(i).attr("onclick") == "hljs.signin(event)") {
                $(i).attr("data-title", "复制");
                $(i).attr("onclick", "hljs.copyCode(event)");
            }
        });   
    } catch (error) {
        console.error({msg: "不登录复制按钮生效错误", err: error});
    }

})();