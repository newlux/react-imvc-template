webpackJsonp([8],{217:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){var t=e.children,n=u(e,["children"]);return i["default"].createElement("div",n,i["default"].createElement("h1",null,i["default"].createElement(c.Link,{to:"/"},"目录")),i["default"].createElement("div",null,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=n(206),i=r(a),c=n(218)},246:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function u(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(u,o){try{var a=t[u](o),i=a.value}catch(c){return void n(c)}return a.done?void e(i):Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}))}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return new Promise(function(t){setTimeout(t,e)})}Object.defineProperty(t,"__esModule",{value:!0});var s=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),f=n(205),p=u(f),d=n(247),h=u(d),v=n(248),y=r(v),_=(function(e){function t(){var e,n,r,u;a(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.Model=y,r.View=h["default"],u=n,i(r,u)}return c(t,e),s(t,[{key:"componentWillCreate",value:(function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark((function n(){var e,t,r,u,o,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.fetch,t=this.store,r=t.getState(),u=r.publicPath+"/basic_usage/isomorphic_fetch/json/ssr.json",o={method:"GET",raw:!0},n.next=6,e(u,o);case 6:a=n.sent,i=t.actions.UPDATE_STATE,i({ssr:a});case 9:case"end":return n.stop()}}),n,this)})));return e})()},{key:"componentDidMount",value:(function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark((function n(){var e,t,r,u,o,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.fetch,t=this.store,r=t.getState(),u=r.publicPath+"/basic_usage/isomorphic_fetch/json/csr.json",o={method:"GET",raw:!0},n.next=6,l(1e3);case 6:return n.next=8,e(u,o);case 8:a=n.sent,i=t.actions.UPDATE_STATE,i({csr:a});case 11:case"end":return n.stop()}}),n,this)})));return e})()}]),t})(p["default"]);t["default"]=_},247:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){var t=e.state;return a["default"].createElement(c["default"],null,a["default"].createElement("h2",null,"首屏数据"),a["default"].createElement("pre",null,JSON.stringify(t.ssr)),a["default"].createElement("h2",null,"非首屏数据"),a["default"].createElement("pre",null,JSON.stringify(t.csr)))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var o=n(206),a=r(o),i=n(217),c=r(i)},248:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.initialState={ssr:null,csr:null}}});