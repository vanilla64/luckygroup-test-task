!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r=document.querySelector(".cards__list"),o=document.querySelector(".page"),a=document.querySelector(".loading"),i=document.querySelector(".no-data"),c=window.innerHeight;function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t}var t,n,r;return t=e,(n=[{key:"getCards",value:function(e,t){return fetch("".concat(this._url,"/photos?_page=").concat(e,"&_limit=").concat(t)).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&l(t.prototype,n),r&&l(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._templateSelector=n}var t,n,r;return t=e,(n=[{key:"_getTemplateCard",value:function(){return this._cardTemplate=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0),this._cardTemplate}},{key:"renderNewCard",value:function(){var e=this._data,t=e.url,n=e.title;return this._card=this._getTemplateCard(),this._cardImage=this._card.querySelector(".card__image"),this._cardTitle=this._card.querySelector(".card__text"),this._cardImage.src=t,this._cardImage.alt=n,this._cardTitle.textContent=n,this._card}}])&&s(t.prototype,n),r&&s(t,r),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n,r;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&f(t.prototype,n),r&&f(t,r),e}();a.classList.toggle("loading_visible");var p=1;console.log("Pge num top: ".concat(p));var g=new u("https://jsonplaceholder.cypress.io"),v=new h({renderer:function(e){return v.addItem(new d(e,"#card-template").renderNewCard())}},r);g.getCards(p,50).then((function(e){var t=e;v.renderItems(t)})).catch((function(e){return console.log(e)})).finally((function(){return a.classList.toggle("loading_visible")})),window.addEventListener("scroll",(function(){!function(){if(window.pageYOffset===o.scrollHeight-c)p>=15?i.classList.add("no-data_visible"):(p++,a.classList.toggle("loading_visible"),document.body.style.overflow="hidden",g.getCards(p,50).then((function(e){v.renderItems(e)})).then((function(){a.classList.toggle("loading_visible"),document.body.style.overflow="auto"})).catch((function(e){return console.log(e)})))}()}))}]);