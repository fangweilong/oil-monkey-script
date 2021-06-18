// ==UserScript==
// @name        New script - javastack.cn
// @namespace   Violentmonkey Scripts
// @match       https://www.javastack.cn/article/*
// @incloud     *://*.javastack.cn/*
// @incloud     *://*.didispace.com/*
// @description 关闭一些技术网站的必须要关注公众号的“人机检测”功能，使阅读更加流畅
// @description 已支持：Java技术栈，程序员DD
// @grant       none
// @version     1.0
// @author      Teler
// @description 2021/6/18上午11:08:08
// ==/UserScript==

let url=["www.javastack.cn","blog.didispace.com"]

//当前url
let currentURL = window.location.host;
console.log(currentURL)

console.log(url[1]===currentURL)

if(url[0]===currentURL){
  //阅读全文
  removeDom('#read-more')
  //放开高度
  setHeight('#article-details');
}else if(url[1]===currentURL){
  //阅读全文
  removeDom('#read-more-wrap')
  //放开高度
  setHeight('.article-type-post');
}

/**
 * 移出阅读全文弹窗
 * name 唯一的class名
 */
function removeDom(name){
  document.querySelector(name).remove();
}


/**
 * 放开高度
 * name id名
 */
function setHeight(name){
  document.querySelector(name).style.height='auto';
}