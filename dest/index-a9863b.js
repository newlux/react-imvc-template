webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),a=n(165),c=r(a),l=n(195),s=r(l);n.p=window.__PUBLIC_PATH__+"/";var f=window.__APP_SETTINGS__||{},p=function(e){return new Promise(e).then((function(e){return e.default||e}))},h={render:function(e,t){console&&console.time&&console.time("React#render");var n=u.default.render(e,t);return console&&console.timeEnd&&console.timeEnd("React#render"),n}},d=o({},f,{hashType:"hashbang",container:"#root",context:o({preload:{}},f.context,{isClient:!0,isServer:!1}),loader:p,routes:s.default,viewEngine:h}),y={};Array.from(document.querySelectorAll("[data-preload]")).forEach((function(e){var t=e.getAttribute("data-preload"),n=e.textContent;y[t]=n})),d.context.preload=y;var v=(0,c.default)(d);v.start()},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(196),i=r(o),u=n(218),a=r(u),c=[i.default,a.default];t.default=c.reduce((function(e,t){return t?e.concat(t):e}),[])},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/template",controller:n(197)},{path:"/template/*",controller:n(216)}]},197:function(e,t,n){e.exports=function(e){n.e(1,(function(t){e(n(198))}))}},200:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var u=t[o](i),a=u.value}catch(e){return void n(e)}return u.done?void e(a):Promise.resolve(a).then((function(e){r("next",e)}),(function(e){r("throw",e)}))}return r("next")})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(){return h.default.createElement("noscript",null)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),p=n(201),h=o(p),d=n(202),y=n(206),v=r(y),b=n(207),m=o(b),_=n(208),g=o(_),O=n(209),w=r(O),P=(function(){function e(t,n){c(this,e),j.call(this),this.location=t,this.context=n,this.handlers={}}return f(e,[{key:"combineHandlers",value:function(e){var t=this,n=this.handlers;Object.keys(e).forEach((function(r){var o=e[r];0===r.indexOf("handle")&&"function"==typeof o&&(n[r]=o.bind(t))}))}},{key:"prependBasename",value:function(e){if(v.isAbsoluteUrl(e))return e;var t=this.context,n=t.locationOrigin,r=t.basename;return n+r+e}},{key:"prependPublicPath",value:function(e){if(v.isAbsoluteUrl(e))return e;var t=this.context,n=t.locationOrigin,r=t.publicPath;return n+r+e}},{key:"redirect",value:function(e,t){var n=this.history,r=this.context;r.isServer?(v.isAbsoluteUrl(e)||(e=this.prependBasename(e)),r.res.redirect(e)):r.isClient&&(v.isAbsoluteUrl(e)?t?window.location.replace(e):window.location.href=e:t?n.replace(e):n.push(e))}},{key:"init",value:(function(){function e(){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark((function e(){var t,n,r,o,i,u,a,c,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.initialState,n=this.getInitialState,r=this.actions,o=this.context,i=this.location,u=void 0,"undefined"!=typeof __INITIAL_STATE__&&(u=__INITIAL_STATE__,__INITIAL_STATE__=void 0),a=s({},t,u,{location:i,isClient:o.isClient,isServer:o.isServer,publicPath:o.publicPath,restfulApi:o.restfulApi}),!this.getInitialState){e.next=8;break}return e.next=7,this.getInitialState(a);case 7:a=e.sent;case 8:if(c=s({},w,r),l=this.store=(0,d.createStore)(c,a),this.combineHandlers(this),!u){e.next=13;break}return e.abrupt("return",this.bindStoreToView());case 13:if(f=[],!this.shouldComponentCreate){e.next=20;break}return e.next=17,this.shouldComponentCreate();case 17:if(p=e.sent,p!==!1){e.next=20;break}return e.abrupt("return",null);case 20:if(this.componentWillCreate&&f.push(this.componentWillCreate()),this.preload&&f.push(this.fetchPreload()),!f.length){e.next=25;break}return e.next=25,Promise.all(f);case 25:return e.abrupt("return",this.bindStoreToView());case 26:case"end":return e.stop()}}),e,this)})));return e})()},{key:"bindStoreToView",value:function(){var e=this.context,t=this.store,n=this.location,r=this.View,o=this.history;if(e.isClient){this.logger=(0,d.createLogger)({name:this.name||n.pattern});var a=[],l=t.subscribe(this.subscriber);if(a.push(l),this.pageWillLeave){var s=o.listenBefore(this.pageWillLeave.bind(this));a.push(s)}if(this.windowWillUnload){var y=o.listenBeforeUnload(this.windowWillUnload.bind(this));a.push(y)}this.unsubscribeList=a,(0,m.default)(t),window.scrollTo(0,0)}var v=this,b=(function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"componentWillMount",value:function(){v.componentWillMount&&v.componentWillMount()}},{key:"componentDidMount",value:function(){v.componentDidMount&&v.componentDidMount()}},{key:"componentWillUpdate",value:function(){v.componentWillUpdate&&v.componentWillUpdate.apply(v,arguments)}},{key:"componentDidUpdate",value:function(){v.componentDidUpdate&&v.componentDidUpdate.apply(v,arguments)}},{key:"shouldComponentUpdate",value:function(){if(v.shouldComponentUpdate){var e=v.shouldComponentUpdate.apply(v,arguments);return e!==!1}return!0}},{key:"componentWillUnmount",value:function(){v.componentWillUnmount&&v.componentWillUnmount()}},{key:"render",value:function(){return h.default.createElement(r,this.props)}}]),t})(p.Component);return this.ViewWrapper=b,this.render()}},{key:"destroy",value:function(){this.unsubscribeList&&(this.unsubscribeList.forEach((function(e){return e()})),this.unsubscribeList=null)}},{key:"render",value:function(){var e=this.ViewWrapper,t=this.store,n=this.handlers,r=this.location,o=this.history,i=this.context,u=this.handleInputChange,a=t.getState(),c={location:r,history:o,state:a,actions:t.actions,preload:i.preload,handleInputChange:u};return h.default.createElement(g.default,{context:c,key:r.raw},h.default.createElement(e,{state:a,handlers:n}))}}]),e})(),j=function(){var e=this;this.View=l,this.prependRestfulBasename=function(t){var n=e.context;return v.isAbsoluteUrl(t)?(n.isClient&&0===t.indexOf("http:")&&(t=t.replace("http:","")),t):0===t.indexOf("/mock/")?n.locationOrigin+n.basename+t:n.restfulApi+t},this.fetch=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.context,o=e.prependRestfulBasename(t),i=s({method:"GET",credentials:"include"},n,{headers:s({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},n.headers)});r.isServer&&(i.headers.Cookie=r.req.headers.cookie||"");var u=fetch(o,i);n.json!==!1&&(u=u.then((function(e){return e.ok&&200===e.status?e.json():Promise.reject(new Error(e.statusText))})));var a=[u];if("number"==typeof n.timeout){var c=new Promise(function(e,t){setTimeout((function(){return t(new Error("Timeout Error:"+n.timeout+"ms"))}),n.timeout)});a.push(c)}return Promise.race(a)},this.fetchPreload=function(t){t=t||e.preload;var n=Object.keys(t);if(t&&0!==n.length){var r=e.fetch,o=e.context,i=n.map((function(n){if(!o.preload[n]){var i=t[n];if(!v.isAbsoluteUrl(i)){var u=e.context,a=u.locationOrigin,c=u.serverLocationOrigin,l=u.publicPath,s=u.isClient,f=u.isServer;s?i=a+l+i:f&&(i=c+l+i)}var p={json:!1};return r(i,p).then(v.toText).then((function(e){i.indexOf(".css")!==-1&&(e=e.replace(/\r+/g,"")),o.preload[n]=e}))}}));return Promise.all(i)}},this.subscriber=function(t){var n=e.context,r=e.logger;n.isServer||(r(t),e.refreshView(),e.stateDidChange&&e.stateDidChange(t))}};t.default=P},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.json()}function i(e){return e.text()}function u(e){return 0===e.indexOf("http")||0===e.indexOf("//")}function a(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=t(e[r],r),n}),{})}function c(e){var t=e.substr(e.lastIndexOf(".")+1);return/(jpg|png|gif|jepg)/.test(t)}function l(e){return new Date(+e.substring(6,e.length-7))}function s(e){e=""+e;for(var t=2;e.length<t;)e="0"+e;return e}function f(e){"number"==typeof e&&(e=new Date(e));var t=[e.getFullYear(),s(e.getMonth()+1),s(e.getDate())].join("-"),n=[s(e.getHours()),s(e.getMinutes()),s(e.getSeconds())].join(":");return t+" "+n}function p(e){"number"==typeof e&&(e=new Date(e));var t=[e.getFullYear(),s(e.getMonth()+1),s(e.getDate())].join("-");return t}function h(e){return e?p(l(e)):""}function d(e){var t=Date.parse(e);return"/Date("+t+"+0800)/"}function y(e){return null!=e&&"function"==typeof e.then}function v(e,t,n){t=Array.isArray(t)?t:t.split(".");var r=t.reduce((function(e,r,o){if(o===t.length-1)e[o][r]=n;else{var i=e[o][r]=m({},e[o][r]);e.push(i)}return e}),[m({},e)]);return r[0]}function b(e,t){return t=Array.isArray(t)?t:t.split("."),t.reduce((function(e,t){return e[t]}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.closePopup=t.openModal=t.registerModal=void 0;var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.toJson=o,t.toText=i,t.isAbsoluteUrl=u,t.mapValues=a,t.isImage=c,t.sqlDateFormat=l,t.getTime=f,t.getDate=p,t.getDateFromSQL=h,t.convertToSQLDate=d,t.isThenable=y,t.setValueByPath=v,t.getValueByPath=b;var g=n(201),O=r(g),w=n(1),P=r(w),j={},T=(t.registerModal=function e(t,n){return"object"===("undefined"==typeof t?"undefined":_(t))?Object.keys(t).forEach((function(n){return e(n,t[n])})):void(j[t]=n)},function(){return document.getElementById("modal")}),x=(t.openModal=function(e){var t=e.type,n=e.props,r=j[t];if(r){var o=function(e){n&&n.onClose&&n.onClose(e),x()};P.default.render(O.default.createElement(r,m({},n,{onClose:o})),T())}},t.closePopup=function(){P.default.unmountComponentAtNode(T())})},207:function(e,t){"use strict";function n(e){function t(e){s.push(e),f=s.length-1}function n(e){s=[],f=0}function r(e,t){s=state.slice(e,t),f=state.length?state.length-1:0}function o(){return s}function i(){return s[f]}function u(e){var t=s.length;e>=0&&e<=t-1&&(f=e,l())}function a(){u(f-1)}function c(){u(f+1)}function l(){var t=i(),n=new Date;e.replaceState(t,{isAsync:!1,start:n,end:n,actionType:"__RECORD_ACTION__",previousState:e.getState(),currentState:t})}var s=[],f=0;e.subscribe((function(e){var n=e.currentState,r=e.actionType;"__RECORD_ACTION__"!==r&&t(n)})),t(e.getState());var p={add:t,clear:n,slice:r,getStates:o,back:a,forward:c,goTo:u};window.recorder=p}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),c=n(201),l=(r(c),(function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"updateDocumentTitle",value:function(){var e=this.props.context.state.html;if(e){var t=e.title;t&&t!==document.title&&(document.title=t)}}},{key:"componentDidMount",value:function(){this.updateDocumentTitle()}},{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return c.Children.only(this.props.children)}}]),t})(c.PureComponent));l.childContextTypes={location:c.PropTypes.object,history:c.PropTypes.object,actions:c.PropTypes.object,state:c.PropTypes.object,preload:c.PropTypes.object,handleInputChange:c.PropTypes.func},t.default=l},209:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=(t.INDENTITY=function(e){return e},t.UPDATE_STATE=function(e,t){return n({},e,t)});t.UPDATE_INPUT_VALUE=r},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),s=n(201),f=r(s),p=(function(e){function t(){var e,n,r,o;i(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.handleClick=function(e){var t=r.props,n=t.onClick,o=t.replace,i=t.to,u=r.context,a=u.history;u.location;n&&n(e),i&&(e.preventDefault(),o===!0?a.replace(i):a.push(i))},o=n,u(r,o)}return a(t,e),l(t,[{key:"render",value:function(){var e=this.context.location.basename,t=void 0===e?"":e,n=this.props,r=n.to,i=n.children,u=(n.replace,n.as),a=o(n,["to","children","replace","as"]),l=u;if("a"===l){var s=r?""+t+r:null;return f.default.createElement("a",c({},a,{href:s,onClick:this.handleClick}),i)}return f.default.createElement(l,c({},a,{onClick:this.handleClick}),i)}}]),t})(s.Component);p.contextTypes={location:s.PropTypes.object,history:s.PropTypes.object},p.defaultProps={as:"a"},t.default=p},216:function(e,t,n){e.exports=function(e){n.e(2,(function(t){e(n(217))}))}},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/demo",controller:n(219)},{path:"/demo/list",controller:n(286)},{path:"/demo/detail",controller:n(288)}]},219:function(e,t,n){e.exports=function(e){n.e(3,(function(t){e(n(220))}))}},286:function(e,t,n){e.exports=function(e){n.e(4,(function(t){e(n(287))}))}},288:function(e,t,n){e.exports=function(e){n.e(5,(function(t){e(n(289))}))}}});