!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){"use strict";n(5),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelector(".root__navbar").querySelector(".navbar__menu"),t=e.querySelectorAll(".menu__item"),n=e.querySelectorAll(".menu__item a"),r=0;r<t.length;r++)n[r].addEventListener("click",function(){"menu__item menu__item--active"!==this.parentElement.className&&(t.forEach(function(e){e.className="menu__item"}),this.parentElement.className="menu__item menu__item--active");var e=this.innerText.toLowerCase().replace(/\s+/g,""),n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})})},5:function(e,t){}});