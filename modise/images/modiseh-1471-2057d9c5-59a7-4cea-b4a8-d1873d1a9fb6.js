window.configFile = "https://van.najva.com/static/js/scripts/modiseh-1471-2057d9c5-59a7-4cea-b4a8-d1873d1a9fb6.json";

// version: 1.13.30
(()=>{var e={4673:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var i=n(6314),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".najva-email-backdrop {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity)) !important;\n  opacity: 0.6 !important;\n  position: fixed !important;\n  top: 0px !important;\n  left: 0px !important;\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0px !important;\n  outline: 2px solid transparent !important;\n  outline-offset: 2px !important;\n  padding: 0px !important;\n  z-index: 2147483644 !important;\n}\n\n.najva-email-container {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n  --tw-text-opacity: 1 !important;\n  color: rgba(0, 0, 0, var(--tw-text-opacity)) !important;\n  position: fixed !important;\n  top: 50% !important;\n  left: 50% !important;\n  --tw-border-opacity: 1 !important;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity)) !important;\n  border-style: solid !important;\n  border-width: 1px !important;\n  margin: 0px !important;\n  outline: 2px solid transparent !important;\n  outline-offset: 2px !important;\n  padding: 0px !important;\n  z-index: 2147483645 !important;\n  height: 95% !important;\n  max-height: 500px !important;\n  width: 95% !important;\n  max-width: 480px !important;\n  transform: translate(-50%, -50%) !important;\n}\n\n.najva-email-container iframe {\n  height: 100% !important;\n  width: 100% !important;\n  border-width: 0px !important;\n  margin: 0px !important;\n  padding: 0px !important;\n}\n",""]);const r=o},6314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},2215:(e,t,n)=>{var i,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(r){if(void 0===(o="function"==typeof(i=r)?i.call(t,n,t,e):i)||(e.exports=o),!0,e.exports=r(),!!0){var a=window.Cookies,s=window.Cookies=r();s.noConflict=function(){return window.Cookies=a,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(i){function o(){}function r(t,n,r){if("undefined"!=typeof document){"number"==typeof(r=e({path:"/"},o.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=i.write?i.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in r)r[c]&&(s+="; "+c,!0!==r[c]&&(s+="="+r[c].split(";")[0]));return document.cookie=t+"="+n+s}}function a(e,n){if("undefined"!=typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],a=0;a<r.length;a++){var s=r[a].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var d=t(s[0]);if(c=(i.read||i)(c,d)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(o[d]=c,e===d)break}catch(e){}}return e?o[e]:o}}return o.set=r,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){r(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},181:(e,t,n)=>{var i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,u=c||d||Function("return this")(),l=Object.prototype.toString,p=Math.max,f=Math.min,h=function(){return u.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var i,o,r,a,s,c,d=0,u=!1,l=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,d=t,a=e.apply(r,n)}function w(e){return d=e,s=setTimeout(y,t),u?b(e):a}function _(e){var n=e-c;return void 0===c||n>=t||n<0||l&&e-d>=r}function y(){var e=h();if(_(e))return E(e);s=setTimeout(y,function(e){var n=t-(e-c);return l?f(n,r-(e-d)):n}(e))}function E(e){return s=void 0,g&&i?b(e):(i=o=void 0,a)}function I(){var e=h(),n=_(e);if(i=arguments,o=this,c=e,n){if(void 0===s)return w(c);if(l)return s=setTimeout(y,t),b(c)}return void 0===s&&(s=setTimeout(y,t)),a}return t=v(t)||0,m(n)&&(u=!!n.leading,r=(l="maxWait"in n)?p(v(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),I.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=c=o=s=void 0},I.flush=function(){return void 0===s?a:E(h())},I}},5072:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],d=n[c]||0,u="".concat(c," ").concat(d);n[c]=d+1;var l=s(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:u,updater:v(p,t),references:1}),i.push(u)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(e,t){var n,i,o;if(t.singleton){var r=m++;n=h||(h=d(t)),i=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=d(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=c(e,t),d=0;d<n.length;d++){var u=s(n[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t,i={};function o(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw Error(e.statusText);return e.json()}))}function r(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw Error(e.statusText);return e}))}function a(){return(new Date).toISOString().split(":")[0]}n.r(i),n.d(i,{FirebaseError:()=>Pe,SDK_VERSION:()=>Ct,_DEFAULT_ENTRY_NAME:()=>_t,_addComponent:()=>St,_addOrOverwriteComponent:()=>Dt,_apps:()=>Et,_clearComponents:()=>Lt,_components:()=>It,_getProvider:()=>Ot,_registerComponent:()=>Tt,_removeServiceInstance:()=>At,deleteApp:()=>Mt,getApp:()=>xt,getApps:()=>jt,initializeApp:()=>Pt,onLog:()=>Rt,registerVersion:()=>Bt,setLogLevel:()=>$t}),function(e){e.TEST="test",e.STAGING="staging",e.PRODUCTION="production"}(e||(e={})),function(e){e.UNSUPPORTED_BROWSER="unsupported-browser",e.INCOGNITO_BROWSER="incognito-browser",e.CONFIGURATION_FAILED="configuration-failed",e.MISSING_APP_CONFIG_VALUES="missing-app-config-values",e.SW_REGISTRATION_FAILED="sw-registration-failed",e.SW_UNREGISTRATION_FAILED="sw-unregistration-failed",e.FIREBASE_INITIALIZATION_FAILED="firebase-initialization-failed",e.FIREBASE_REGISTRAION_FAILED="firebase-registration-failed",e.FIREBASE_TOKEN_UPDATE_FAILED="firebase-token-update-failed",e.FIREBASE_TOKEN_DELETE_FAILED="firebase-token-delete-failed",e.NAJVA_SUBSCRIPTION_FAILED="najva-subscription-failed",e.COOKIE_TOKEN_UPDATE_FAILED="najva-token-update-failed",e.ADD_ATTRIBUTE_FAILED="add-attribute-failed",e.DELETE_ATTRIBUTE_FAILED="delete-attribute-failed",e.GET_ATTRIBUTES_FAILED="get-attributes-failed",e.INVALID_KEY_FOR_IDB="invalid-key-for-idb",e.DB_UPDATE_FAILED="db-update-failed",e.DB_READ_FAILED="db-read-failed",e.DB_DELETE_FAILED="db-delete-failed",e.DB_OBJ_STORE_CLEAR_FAILED="db-obj-store-clear-failed",e.SEND_LOCATION_FAILED="send-location-failed",e.UPDATE_USER_ACTIVITY_FAILED="update-user-activity-failed",e.REPORT_SCRIPT_VERSION_FAILED="report-script-version-failed",e.LOAD_YEKTANET_ANALYTICS_SCRIPT_FAILED="load-yektanet-analytics-script-failed",e.INIT_EMAIL_FAILED="init-email-failed",e.ADD_EMAIL_SUBSCRIBER_IDENTIFIER_FAILED="add-email-subscriber-identifier-failed",e.IDENTIFY_EMAIL_SUBSCRIBER_FAILED="identify-email-subscriber-failed",e.SUBSCRIBE_TO_EMAIL_FAILED="subscribe-to-email-failed",e.CREATE_HTML_FAILED="create-html-failed",e.SELECT_ELEMENT_FAILED="select-element-failed",e.HEX_TO_RGB_FAILED="hex-to-rgb-failed",e.FIND_EMAIL_IFRAME_CONTAINER_FAILED="find-email-iframe-container-failed"}(t||(t={}));const s="\nOriginal Error -> {$error}",c={[t.UNSUPPORTED_BROWSER]:`This browser doesn't support the API's required to use the firebase and najva SDK.${s}`,[t.INCOGNITO_BROWSER]:`najva sdk will not run in brower incognito mode.${s}`,[t.MISSING_APP_CONFIG_VALUES]:"Missing App configuration value: {$valueName}.",[t.CONFIGURATION_FAILED]:`failed to get configuration file from {$url}.${s}`,[t.SW_REGISTRATION_FAILED]:`We are unable to register the default service worker. {$browserErrorMessage}.${s}`,[t.SW_UNREGISTRATION_FAILED]:`We are unable to unregister the najva-messaging service worker.${s}`,[t.FIREBASE_INITIALIZATION_FAILED]:`failed to initialize firebase app. {$firebaseErrorMessage}.${s}`,[t.FIREBASE_REGISTRAION_FAILED]:`failed to get registration token from firebase. {$firebaseErrorMessage}.${s}`,[t.FIREBASE_TOKEN_UPDATE_FAILED]:"failed to update firebase token. {$firebaseErrorMessage}.",[t.FIREBASE_TOKEN_DELETE_FAILED]:`failed to delete firebase token. {$firebaseErrorMessage}.${s}`,[t.NAJVA_SUBSCRIPTION_FAILED]:`failed to subscribe firebase token {$firebaseToken} to najva.${s}`,[t.COOKIE_TOKEN_UPDATE_FAILED]:`failed to update cookie_token for najva user {$najva_token}.${s}`,[t.ADD_ATTRIBUTE_FAILED]:`failed to add attribute {$object}.${s}`,[t.DELETE_ATTRIBUTE_FAILED]:`failed to delete attribute {$key}.${s}`,[t.GET_ATTRIBUTES_FAILED]:`failed to get attributes.${s}`,[t.INVALID_KEY_FOR_IDB]:`faild to update indexed db. the {$key} is not a valid key for object store {$objStoreName}.${s}`,[t.DB_UPDATE_FAILED]:`failed to update {$key} with {$value} for {$objectStoreName}. {$browserErrorMessage}.${s}`,[t.DB_DELETE_FAILED]:`failed to update {$key} with {$value} for {$objectStoreName}. {$browserErrorMessage}.${s}`,[t.DB_READ_FAILED]:`failed to read {$key} from {$objectStoreName}. {$browserErrorMessage}.${s}`,[t.DB_OBJ_STORE_CLEAR_FAILED]:`failed to clear {$objectStoreName}. {$browserErrorMessage}.${s}`,[t.SEND_LOCATION_FAILED]:"failed to send location to the server: {$errorStatus}.",[t.UPDATE_USER_ACTIVITY_FAILED]:`failed to update user activity {$browserErrorMessage}.${s}`,[t.REPORT_SCRIPT_VERSION_FAILED]:`failed to report version {$version} to {$url}. {$browserErrorMessage}.${s}`,[t.LOAD_YEKTANET_ANALYTICS_SCRIPT_FAILED]:`failed to load tag script with app_id: {$appId}.${s}`,[t.INIT_EMAIL_FAILED]:`failed to init email.${s}`,[t.ADD_EMAIL_SUBSCRIBER_IDENTIFIER_FAILED]:`failed to add email subscriber identifier.${s}`,[t.IDENTIFY_EMAIL_SUBSCRIBER_FAILED]:`failed to identify email subscriber.${s}`,[t.SUBSCRIBE_TO_EMAIL_FAILED]:`failed to subscribe to email.${s}`,[t.CREATE_HTML_FAILED]:"failed to create html element with string: {$value}.",[t.SELECT_ELEMENT_FAILED]:"failed to select element with selector: {$value}.",[t.HEX_TO_RGB_FAILED]:"failed to convert hex color to rgb format with value: {$value}.",[t.FIND_EMAIL_IFRAME_CONTAINER_FAILED]:"failed to find email iframe container."},d=/\{\$([^}]+)}/g;function u(e,t){const n=c[e],i=n?function(e,t){return e.replace(d,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(n,t||{}):"Error";return new Error(i)}const l={"۰":"0","٠":"0","۱":"1","١":"1","۲":"2","٢":"2","۳":"3","٣":"3","۴":"4","٤":"4","۵":"5","٥":"5","۶":"6","٦":"6","۷":"7","٧":"7","۸":"8","٨":"8","۹":"9","٩":"9"};function p(e){try{return e.toString().replace(/[\u0660-\u0669\u06F0-\u06F9]/g,(e=>l[e]))}catch(t){return e}}var f;!function(e){e.email="email",e.phone="phone",e.required="required"}(f||(f={}));const h={[f.email]:{fa:"ایمیل نامعتبر است.",en:"Email is not valid"},[f.phone]:{fa:"شماره موبایل نامعتبر است.",en:"Phone is not valid"},[f.required]:{fa:"این فیلد الزامی است.",en:"This field is required"}};const m={messaging_sender_id:"334645784830",najva_settings:{campaign_id:"",app_id:"",account_id:"",without_popup:!0,with_popup:!1,api_key:"fd4f22c3-0f92-43ee-b7ed-8b905eb9c7ba",najva_subdomain:"https://app.najva.com/",website_id:18846,location_permission:!0,request_text:"آیا میخواهید پربازدیدترین موضوعات برای شما ارسال شود؟",request_description:"",accept_text:"بله",denied_text:"خیر",request_icon:"https://www.najva.com/wp-content/uploads/2017/07/Najva-Logo-OK-04.png",extra_css:"",dismiss_cookie_days:3,request_permission:{delay:{enable:0,value:20},scroll:{enable:1,value:50},visit:{minimum:{enable:0,value:1},maximum:{enable:0,value:3},interval:{enable:0,value:3}}},show_bell:1,show_bell_in_mobile:1,bell_direction:"right",tooltip_direction:"left",bell_color_hover:"#7a7a7a",bell_color:"#444444",bell_tooltip:"مشترک شوید",show_backdrop:!1,show_backdrop_mobile:!1,native_permission:!0,backdrop_text:"«برای دریافت مطالب مشابه روی گزینه Allow کلیک کنید.»"},custom_links:[],website_policy:{notification_queue:1,notification_countdown:10,notification_blocked:!1,notification_button_enabled:!1,use_najva_firebase_account:!0,recommender_permission:!1,tag_enabled:!1,email_enabled:!0},sw_path:"/",email_settings:{id:79328,uuid:"4ad01101-a47a-4ca5-8ea9-8aaac023d098",show_condition:{delay:{enable:1,value:2},scroll:{enable:0,value:10},visit:{minimum:{enable:0,value:1},maximum:{enable:0,value:1},interval:{enable:0,value:4}}},title:"🎁ایمیل خود را وارد کنید و یک کد تخفیف خرید هدیه بگیرید🎁",background_color:"2d292e",button_color:"ccd1d9",send_btn_text:"عضویت",success_message:"ارسال با موفقیت انجام شد.",affected_urls:null,fields:[{key:"email",name:"ایمیل",validations:[f.email,f.required]}],desc:"همین الان ایمیلت رو وارد کن تا یه کد تخفیف جذاب برات بفرستیم",img:"https://www.najva.com/wp-content/uploads/2017/07/Najva-Logo-OK-04.png",side_img:"https://www.najva.com/wp-content/uploads/2017/07/Najva-Logo-OK-04.png",background_img:"https://i.postimg.cc/3rCPNt3V/depositphotos-29704447-stock-video-city-skyline-business-man-success.jpg",iframe_container:"#abc"}},v="activity";var g;!function(e){e.LastActiveTime="last_active_time",e.VisitCount="visit_count",e.LastScriptReportedVersion="last_script_reported_version",e.LastServiceWorkerReportedVersion="last_service_worker_reported_version",e.LastCookieMatchingSent="last_cookie_matching_sent",e.HasMigrated="has_migrated",e.LastCurrentUserAPICalled="last-current-user-api-called",e.HasNajvaSubscriptionWindowOpened="has-najva-subscription-window-opened"}(g||(g={}));let b,w;const _=new WeakMap,y=new WeakMap,E=new WeakMap,I=new WeakMap,S=new WeakMap;let D={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||E.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return A(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function T(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(L(this),t),A(_.get(this))}:function(...t){return A(e.apply(L(this),t))}:function(t,...n){const i=e.call(L(this),t,...n);return E.set(i,t.sort?t.sort():[t]),A(i)}}function O(e){return"function"==typeof e?T(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));y.set(e,t)}(e),t=e,(b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,D):e);var t}function A(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(A(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&_.set(t,e)})).catch((()=>{})),S.set(t,e),t}(e);if(I.has(e))return I.get(e);const t=O(e);return t!==e&&(I.set(e,t),S.set(t,e)),t}const L=e=>S.get(e);function k(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=A(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(A(a.result),e.oldVersion,e.newVersion,A(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const N=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],P=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(P.get(t))return P.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=C.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!N.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return P.set(t,r),r}D=(e=>({...e,get:(t,n,i)=>x(t,n)||e.get(t,n,i),has:(t,n)=>!!x(t,n)||e.has(t,n)}))(D);const j="token";var M;!function(e){e.Firebase="fb_token",e.Cookie="cookie_token",e.Najva="najva_token"}(M||(M={}));var B=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function R(e,n,i){return B(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(j,"readwrite");(yield t.store.get(e))?yield t.store.put({name:e,value:n,timestamp:i}):yield t.store.add({name:e,value:n,timestamp:i}),yield t.done}catch(i){throw u(t.DB_UPDATE_FAILED,{key:e,value:n,objectStoreName:j,browserErrorMessage:i.message,error:i})}}))}function $(e){return B(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(j,"readonly"),n=yield t.store.get(e);return yield t.done,n?{value:n.value.toString(),timestamp:n.timestamp.toString()}:{value:"",timestamp:""}}catch(n){throw u(t.DB_READ_FAILED,{key:e,objectStoreName:j,browserErrorMessage:n.message,error:n})}}))}const U="website";var F;!function(e){e.WebsiteId="website_id",e.SenderId="messagind_sender_id"}(F||(F={}));var K=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function W(e,n){return K(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(U,"readwrite");(yield t.store.get(e))?yield t.store.put({name:e,value:n}):yield t.store.add({name:e,value:n}),yield t.done}catch(i){throw u(t.DB_UPDATE_FAILED,{key:e,value:n,objectStoreName:U,browserErrorMessage:i.message,error:i})}}))}const z="opt-in";var H,G;!function(e){e.Popup="pop_up"}(H||(H={})),function(e){e.ShownCount="shown_count",e.LastShownTime="last_shown_count",e.Reject="reject"}(G||(G={}));var V=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function q(e){return V(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(z,"readwrite"),n=yield t.store.get(H.Popup);return yield t.done,n&&n[e]?n[e]:""}catch(n){throw u(t.DB_READ_FAILED,{key:`${H}.${e}`,objectStoreName:z,browserErrorMessage:n.message,error:n})}}))}function Y(e,n){return V(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(z,"readwrite"),i=yield t.store.get(H.Popup);i?yield t.store.put(Object.assign(Object.assign({},i),{[e]:n})):yield t.store.add({name:H.Popup,[e]:n}),yield t.done}catch(i){throw u(t.DB_UPDATE_FAILED,{key:`${H}.${e}`,objectStoreName:z,value:n,browserErrorMessage:i.message,error:i})}}))}const J="attribute";var X=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function Z(e,n,i){return X(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(J,"readwrite");(yield t.store.get(e))?yield t.store.put({key:e,value:n,timestamp:i}):yield t.store.add({key:e,value:n,timestamp:i}),yield t.done}catch(i){throw u(t.DB_UPDATE_FAILED,{key:e,value:n,objectStoreName:J,browserErrorMessage:i.message,error:i})}}))}function Q(){return X(this,void 0,void 0,(function*(){try{const e=(yield he()).transaction(J,"readwrite").objectStore(J);yield e.clear()}catch(e){throw u(t.DB_OBJ_STORE_CLEAR_FAILED,{browserErrorMessage:e.message,objectStoreName:J,error:e})}}))}var ee=n(2215),te=n.n(ee);function ne(e){const t=e.split("."),n=t[t.length-1],i=t[t.length-2];if(i&&i.length>2)return`.${i}.${n}`;if(t&&t.length>2){return`.${t[t.length-3]}.${i}.${n}`}return e}function ie(e){return te().get(e)}function oe(e){te().remove(e,{domain:ne(window.location.hostname),path:"/"})}var re=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function ae(e,t){return re(this,void 0,void 0,(function*(){const n=ie(`najva_last_active_time:${t}`)||ie(`najva_last_active_time-${e}`);n&&(yield ge(g.LastActiveTime,n),oe(`najva_last_active_time:${t}`),oe(`najva_last_active_time-${e}`));const i=ie(`pushNotification:shownCount:${t}`)||ie(`pushNotification-shownCount-${e}`);i&&(yield ge(g.VisitCount,i),oe(`pushNotification:shownCount:${t}`),oe(`pushNotification-shownCount-${e}`));if(!(yield ve(g.LastCookieMatchingSent))){const e=Math.floor(30*Math.random());yield ge(g.LastCookieMatchingSent,new Date(Date.now()-24*e*60*60*1e3).toISOString())}oe("cookie_matching")}))}function se(e){return re(this,void 0,void 0,(function*(){const t=function(e){const t=Object.keys(localStorage),n=`${e}-tag-`,i=t.filter((e=>e.startsWith(n))),o={};return i.forEach((e=>{var t;const i=e.substr(n.length);o[i]=null===(t=localStorage.getItem(e))||void 0===t?void 0:t.toString()})),o}(e);Object.keys(t).forEach((n=>re(this,void 0,void 0,(function*(){yield Z(n,t[n],(new Date).toISOString()),localStorage.removeItem(function(e,t){return e&&t?`${e}-tag-${t}`:""}(e,n))}))))}))}function ce(e,t){return re(this,void 0,void 0,(function*(){const n=ie(`pushNotification:notWantPopUp:${t}`)||ie(`pushNotification-notWantPopUp-${e}`);n&&(yield Y(G.Reject,n),oe(`pushNotification:notWantPopUp:${t}`),oe(`pushNotification-notWantPopUp-${e}`))}))}function de(e,t){return re(this,void 0,void 0,(function*(){const n=ie(`token_id:${t}`)||ie(`token_id-${e}`);n&&(yield R(M.Firebase,n,(new Date).toISOString()),oe(`token_id:${t}`),oe(`token_id-${e}`));const i=localStorage.getItem("_njt")||ie("najva_token");i&&(yield R(M.Najva,i,(new Date).toISOString()),oe("najva_token"),localStorage.removeItem("_njt"));const o=ie(`cookie_token:${t}`)||ie(`cookie_token-${e}`);o&&(yield R(M.Cookie,o,(new Date).toISOString()),oe(`cookie_token:${t}`),oe(`cookie_token-${e}`))}))}function ue(e,n){return re(this,void 0,void 0,(function*(){yield ge(g.HasMigrated,"true");const i=yield function(e){return K(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(U,"readwrite"),n=yield t.store.get(e);return yield t.done,n?n.value:""}catch(n){throw u(t.DB_READ_FAILED,{key:e,objectStoreName:U,browserErrorMessage:n.message,error:n})}}))}(F.WebsiteId);e!=i&&(yield function(){return re(this,void 0,void 0,(function*(){return Promise.all([W(F.WebsiteId,""),R(M.Cookie,"",(new Date).toISOString()),Y(G.LastShownTime,""),Y(G.ShownCount,""),Q(),be()])}))}()),yield Promise.all([W(F.WebsiteId,e),de(e,n),ce(e,n),se(e),ae(e,n)])}))}var le=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let pe,fe;function he(){return le(this,void 0,void 0,(function*(){return pe||(pe=yield k("najva-native-subscription-database",5,{upgrade(e,t){return le(this,void 0,void 0,(function*(){t>0&&t<5&&(e.deleteObjectStore(j),e.deleteObjectStore(U),e.deleteObjectStore(z),e.deleteObjectStore(J),e.deleteObjectStore(v)),e.createObjectStore(j,{keyPath:"name"}),e.createObjectStore(U,{keyPath:"name"}),e.createObjectStore(z,{keyPath:"name"}),e.createObjectStore(J,{keyPath:"key"}),e.createObjectStore(v,{keyPath:"name"})}))}})),pe}))}var me=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function ve(e){return me(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(v,"readwrite"),n=yield t.store.get(e);return yield t.done,n?n.value:""}catch(n){throw u(t.DB_READ_FAILED,{key:e,objectStoreName:v,browserErrorMessage:n.message,error:n})}}))}function ge(e,n){return me(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(v,"readwrite");(yield t.store.get(e))?yield t.store.put({name:e,value:n}):yield t.store.add({name:e,value:n}),yield t.done}catch(i){throw u(t.DB_UPDATE_FAILED,{key:e,value:n,objectStoreName:v,browserErrorMessage:i.message,error:i})}}))}function be(){return me(this,void 0,void 0,(function*(){try{const e=(yield he()).transaction(v,"readwrite").objectStore(v);yield e.clear()}catch(e){throw u(t.DB_OBJ_STORE_CLEAR_FAILED,{browserErrorMessage:e.message,objectStoreName:v,error:e})}}))}var we=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let _e=null;function ye(){return we(this,void 0,void 0,(function*(){if("production"===e.TEST)return m;const n=`${window.configFile}?v=${a()}`;if(_e)return _e;try{const e=yield o(n,{method:"GET",credentials:"omit"});return function(e){const n=e.messaging_sender_id,i=e.najva_settings;let o="";if(n||(o="messaging_sender_id"),i?i.api_key?i.website_id||(o="najva_settings.website_id"):o="najva_settings.api_key":o="najva_settings",o)throw u(t.MISSING_APP_CONFIG_VALUES,{valueName:o})}(e),yield W(F.WebsiteId,e.najva_settings.website_id.toString()),yield W(F.SenderId,e.messaging_sender_id),e}catch(e){throw u(t.CONFIGURATION_FAILED,{url:window.configFile,error:e})}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},Ie={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const o=e[t],r=t+1<e.length,a=r?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,d=o>>2,u=(3&o)<<4|a>>4;let l=(15&a)<<2|c>>6,p=63&c;s||(p=64,r||(l=64)),i.push(n[d],n[u],n[l],n[p])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ee(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=e[n++];t[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==r||null==a||null==s)throw new Se;const c=o<<2|r>>4;if(i.push(c),64!==a){const e=r<<4&240|a>>2;if(i.push(e),64!==s){const e=a<<6&192|s;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const De=function(e){return function(e){const t=Ee(e);return Ie.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Te=function(e){try{return Ie.decodeString(e,!0)}catch(e){}return null};function Oe(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Oe(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ae=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Le=()=>{try{return Ae()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Te(e[1]);return t&&JSON.parse(t)})()}catch(e){return}},ke=()=>{var e;return null===(e=Le())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Pe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xe.prototype.create)}}class xe{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],r=o?function(e,t){return e.replace(je,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(o,n):"Error",a=`${this.serviceName}: ${r} (${i}).`;return new Pe(i,a,n)}}const je=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Be(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const n=e[o],r=t[o];if(Re(n)&&Re(r)){if(!Be(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Re(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,t){const n=new Ue(e,t);return n.subscribe.bind(n)}class Ue{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Fe),void 0===i.error&&(i.error=Fe),void 0===i.complete&&(i.complete=Fe);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Fe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(e){return e&&e._delegate?e._delegate:e}class We{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ne;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&e(r,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ze?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ge{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new He(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=[];var qe;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(qe||(qe={}));const Ye={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},Je=qe.INFO,Xe={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},Ze=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!Xe[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qe{constructor(e){this.name=e,this._logLevel=Je,this._logHandler=Ze,this._userLogHandler=null,Ve.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ye[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}let et,tt;const nt=new WeakMap,it=new WeakMap,ot=new WeakMap,rt=new WeakMap,at=new WeakMap;let st={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return it.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ot.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ct(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(tt||(tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(lt(this),t),ut(nt.get(this))}:function(...t){return ut(e.apply(lt(this),t))}:function(t,...n){const i=e.call(lt(this),t,...n);return ot.set(i,t.sort?t.sort():[t]),ut(i)}}function dt(e){return"function"==typeof e?ct(e):(e instanceof IDBTransaction&&function(e){if(it.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));it.set(e,t)}(e),t=e,(et||(et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,st):e);var t}function ut(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(ut(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&nt.set(t,e)})).catch((()=>{})),at.set(t,e),t}(e);if(rt.has(e))return rt.get(e);const t=dt(e);return t!==e&&(rt.set(e,t),at.set(t,e)),t}const lt=e=>at.get(e);const pt=["get","getKey","getAll","getAllKeys","count"],ft=["put","add","delete","clear"],ht=new Map;function mt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ht.get(t))return ht.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=ft.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!pt.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return ht.set(t,r),r}!function(e){st=e(st)}((e=>({...e,get:(t,n,i)=>mt(t,n)||e.get(t,n,i),has:(t,n)=>!!mt(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const gt="@firebase/app",bt="0.9.22",wt=new Qe("@firebase/app"),_t="[DEFAULT]",yt={[gt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Et=new Map,It=new Map;function St(e,t){try{e.container.addComponent(t)}catch(n){wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dt(e,t){e.container.addOrOverwriteComponent(t)}function Tt(e){const t=e.name;if(It.has(t))return wt.debug(`There were multiple attempts to register component ${t}.`),!1;It.set(t,e);for(const t of Et.values())St(t,e);return!0}function Ot(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function At(e,t,n=_t){Ot(e,t).clearInstance(n)}function Lt(){It.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new xe("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new We("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="10.5.2";function Pt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:_t,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw kt.create("bad-app-name",{appName:String(o)});if(n||(n=ke()),!n)throw kt.create("no-options");const r=Et.get(o);if(r){if(Be(n,r.options)&&Be(i,r.config))return r;throw kt.create("duplicate-app",{appName:o})}const a=new Ge(o);for(const e of It.values())a.addComponent(e);const s=new Nt(n,i,a);return Et.set(o,s),s}function xt(e=_t){const t=Et.get(e);if(!t&&e===_t&&ke())return Pt();if(!t)throw kt.create("no-app",{appName:e});return t}function jt(){return Array.from(Et.values())}async function Mt(e){const t=e.name;Et.has(t)&&(Et.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Bt(e,t,n){var i;let o=null!==(i=yt[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const r=o.match(/\s|\//),a=t.match(/\s|\//);if(r||a){const e=[`Unable to register library "${o}" with version "${t}":`];return r&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),r&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void wt.warn(e.join(" "))}Tt(new We(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function Rt(e,t){if(null!==e&&"function"!=typeof e)throw kt.create("invalid-log-argument");!function(e,t){for(const n of Ve){let i=null;t&&t.level&&(i=Ye[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const r=o.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:qe[n].toLowerCase(),message:r,args:o,type:t.name})}}}(e,t)}function $t(e){var t;t=e,Ve.forEach((e=>{e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="firebase-heartbeat-store";let Ft=null;function Kt(){return Ft||(Ft=function(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=ut(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(ut(a.result),e.oldVersion,e.newVersion,ut(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ut)}}}).catch((e=>{throw kt.create("idb-open",{originalErrorMessage:e.message})}))),Ft}async function Wt(e,t){try{const n=(await Kt()).transaction(Ut,"readwrite"),i=n.objectStore(Ut);await i.put(t,zt(e)),await n.done}catch(e){if(e instanceof Pe)wt.warn(e.message);else{const t=kt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});wt.warn(t.message)}}}function zt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Gt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Gt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),qt(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),qt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=De(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gt(){return(new Date).toISOString().substring(0,10)}class Vt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ce()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Kt();return await t.transaction(Ut).objectStore(Ut).get(zt(e))}catch(e){if(e instanceof Pe)wt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});wt.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function qt(e){return De(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;Yt="",Tt(new We("platform-logger",(e=>new vt(e)),"PRIVATE")),Tt(new We("heartbeat",(e=>new Ht(e)),"PRIVATE")),Bt(gt,bt,Yt),Bt(gt,bt,"esm2017"),Bt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(e,t){this._delegate=e,this.firebase=t,St(e,new We("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Mt(this._delegate))))}_getService(e,t=_t){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=_t){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){St(this._delegate,e)}_addOrOverwriteComponent(e){Dt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new xe("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const Zt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(i,o={}){const r=Pt(i,o);if(Me(t,r.name))return t[r.name];const a=new e(r,n);return t[r.name]=a,a},app:o,registerVersion:Bt,setLogLevel:$t,onLog:Rt,apps:null,SDK_VERSION:Ct,INTERNAL:{registerComponent:function(t){const i=t.name,r=i.replace("-compat","");if(Tt(t)&&"PUBLIC"===t.type){const a=(e=o())=>{if("function"!=typeof e[r])throw Xt.create("invalid-app-argument",{appName:i});return e[r]()};void 0!==t.serviceProps&&Oe(a,t.serviceProps),n[r]=a,e.prototype[r]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[r]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:i}};function o(e){if(!Me(t,e=e||_t))throw Xt.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),o.App=e,n}(Jt);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Oe(t,e)},createSubscribe:$e,ErrorFactory:xe,deepExtend:Oe}),t}(),Qt=new Qe("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Qt.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Qt.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const en=Zt;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Bt("@firebase/app-compat","0.2.22",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
en.registerVersion("firebase","10.5.2","app-compat");let tn,nn;const on=new WeakMap,rn=new WeakMap,an=new WeakMap,sn=new WeakMap,cn=new WeakMap;let dn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return rn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||an.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function un(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(nn||(nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(fn(this),t),pn(on.get(this))}:function(...t){return pn(e.apply(fn(this),t))}:function(t,...n){const i=e.call(fn(this),t,...n);return an.set(i,t.sort?t.sort():[t]),pn(i)}}function ln(e){return"function"==typeof e?un(e):(e instanceof IDBTransaction&&function(e){if(rn.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));rn.set(e,t)}(e),t=e,(tn||(tn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,dn):e);var t}function pn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(pn(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&on.set(t,e)})).catch((()=>{})),cn.set(t,e),t}(e);if(sn.has(e))return sn.get(e);const t=ln(e);return t!==e&&(sn.set(e,t),cn.set(t,e)),t}const fn=e=>cn.get(e);const hn=["get","getKey","getAll","getAllKeys","count"],mn=["put","add","delete","clear"],vn=new Map;function gn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(vn.get(t))return vn.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=mn.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!hn.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return vn.set(t,r),r}!function(e){dn=e(dn)}((e=>({...e,get:(t,n,i)=>gn(t,n)||e.get(t,n,i),has:(t,n)=>!!gn(t,n)||e.has(t,n)})));const bn="@firebase/installations",wn="0.6.4",_n=1e4,yn="w:0.6.4",En="FIS_v2",In=36e5,Sn=new xe("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Dn(e){return e instanceof Pe&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function On(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function An(e,t){const n=(await t.json()).error;return Sn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ln({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kn(e,{refreshToken:t}){const n=Ln(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Nn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn=/^[cdef][\w-]{21}$/;function xn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Pn.test(t)?t:""}catch(e){return""}}function jn(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Map;function Bn(e,t){const n=jn(e);Rn(n,t),function(e,t){const n=Un();n&&n.postMessage({key:e,fid:t});Fn()}(n,t)}function Rn(e,t){const n=Mn.get(e);if(n)for(const e of n)e(t)}let $n=null;function Un(){return!$n&&"BroadcastChannel"in self&&($n=new BroadcastChannel("[Firebase] FID Change"),$n.onmessage=e=>{Rn(e.data.key,e.data.fid)}),$n}function Fn(){0===Mn.size&&$n&&($n.close(),$n=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="firebase-installations-store";let Wn=null;function zn(){return Wn||(Wn=function(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=pn(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(pn(a.result),e.oldVersion,e.newVersion,pn(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}("firebase-installations-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Kn)}}})),Wn}async function Hn(e,t){const n=jn(e),i=(await zn()).transaction(Kn,"readwrite"),o=i.objectStore(Kn),r=await o.get(n);return await o.put(t,n),await i.done,r&&r.fid===t.fid||Bn(e,t.fid),t}async function Gn(e){const t=jn(e),n=(await zn()).transaction(Kn,"readwrite");await n.objectStore(Kn).delete(t),await n.done}async function Vn(e,t){const n=jn(e),i=(await zn()).transaction(Kn,"readwrite"),o=i.objectStore(Kn),r=await o.get(n),a=t(r);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||r&&r.fid===a.fid||Bn(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(e){let t;const n=await Vn(e.appConfig,(n=>{const i=function(e){return Xn(e||{fid:xn(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Sn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Tn(e),o=Ln(e),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={fid:n,authVersion:En,appId:e.appId,sdkVersion:yn},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await Nn((()=>fetch(i,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:On(e.authToken)}}throw await An("Create Installation",c)}(e,t);return Hn(e.appConfig,n)}catch(n){throw Dn(n)&&409===n.customData.serverCode?await Gn(e.appConfig):await Hn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Yn(e)}:{installationEntry:t}}(e,i);return t=o.registrationPromise,o.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Yn(e){let t=await Jn(e.appConfig);for(;1===t.registrationStatus;)await Cn(100),t=await Jn(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await qn(e);return n||t}return t}function Jn(e){return Vn(e,(e=>{if(!e)throw Sn.create("installation-not-found");return Xn(e)}))}function Xn(e){return 1===(t=e).registrationStatus&&t.registrationTime+_n<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Zn({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${Tn(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),o=kn(e,n),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={installation:{sdkVersion:yn,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await Nn((()=>fetch(i,s)));if(c.ok){return On(await c.json())}throw await An("Generate Auth Token",c)}async function Qn(e,t=!1){let n;const i=await Vn(e.appConfig,(i=>{if(!ti(i))throw Sn.create("not-registered");const o=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+In}(e)}(o))return i;if(1===o.requestStatus)return n=async function(e,t){let n=await ei(e.appConfig);for(;1===n.authToken.requestStatus;)await Cn(100),n=await ei(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Qn(e,t):i}(e,t),i;{if(!navigator.onLine)throw Sn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await Zn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Hn(e.appConfig,i),n}catch(n){if(!Dn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Hn(e.appConfig,n)}else await Gn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function ei(e){return Vn(e,(e=>{if(!ti(e))throw Sn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+_n<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function ti(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ni(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await qn(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await Qn(n,t)).token}function ii(e){return Sn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="installations",ri=e=>{const t=Ot(e.getProvider("app").getImmediate(),oi).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await qn(t);return i?i.catch(console.error):Qn(t).catch(console.error),n.fid}(t),getToken:e=>ni(t,e)}};Tt(new We(oi,(e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw ii("App Configuration");if(!e.name)throw ii("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ii(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:Ot(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Tt(new We("installations-internal",ri,"PRIVATE")),Bt(bn,wn),Bt(bn,wn,"esm2017");let ai,si;const ci=new WeakMap,di=new WeakMap,ui=new WeakMap,li=new WeakMap,pi=new WeakMap;let fi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return di.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ui.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function hi(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(si||(si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(gi(this),t),vi(ci.get(this))}:function(...t){return vi(e.apply(gi(this),t))}:function(t,...n){const i=e.call(gi(this),t,...n);return ui.set(i,t.sort?t.sort():[t]),vi(i)}}function mi(e){return"function"==typeof e?hi(e):(e instanceof IDBTransaction&&function(e){if(di.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));di.set(e,t)}(e),t=e,(ai||(ai=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,fi):e);var t}function vi(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(vi(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ci.set(t,e)})).catch((()=>{})),pi.set(t,e),t}(e);if(li.has(e))return li.get(e);const t=mi(e);return t!==e&&(li.set(e,t),pi.set(t,e)),t}const gi=e=>pi.get(e);function bi(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=vi(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(vi(a.result),e.oldVersion,e.newVersion,vi(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}function wi(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),vi(n).then((()=>{}))}const _i=["get","getKey","getAll","getAllKeys","count"],yi=["put","add","delete","clear"],Ei=new Map;function Ii(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ei.get(t))return Ei.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=yi.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!_i.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return Ei.set(t,r),r}!function(e){fi=e(fi)}((e=>({...e,get:(t,n,i)=>Ii(t,n)||e.get(t,n,i),has:(t,n)=>!!Ii(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Si="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Di="google.c.a.c_id";var Ti,Oi;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ai(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Li(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(Ti||(Ti={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(Oi||(Oi={}));const ki="fcm_token_details_db",Ni="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci="firebase-messaging-store";let Pi=null;function xi(){return Pi||(Pi=bi("firebase-messaging-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ci)}}})),Pi}async function ji(e){const t=Bi(e),n=await xi(),i=await n.transaction(Ci).objectStore(Ci).get(t);if(i)return i;{const t=await async function(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map((e=>e.name)).includes(ki))return null;let t=null;return(await bi(ki,5,{upgrade:async(n,i,o,r)=>{var a;if(i<2)return;if(!n.objectStoreNames.contains(Ni))return;const s=r.objectStore(Ni),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:Ai(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ai(e.auth),p256dh:Ai(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ai(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ai(e.auth),p256dh:Ai(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ai(e.vapidKey)}}}}})).close(),await wi(ki),await wi("fcm_vapid_details_db"),await wi("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await Mi(e,t),t}}async function Mi(e,t){const n=Bi(e),i=(await xi()).transaction(Ci,"readwrite");return await i.objectStore(Ci).put(t,n),await i.done,t}function Bi({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new xe("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function $i(e,t){const n={method:"DELETE",headers:await Fi(e)};try{const i=await fetch(`${Ui(e.appConfig)}/${t}`,n),o=await i.json();if(o.error){const e=o.error.message;throw Ri.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw Ri.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function Ui({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function Fi({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ki({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Si&&(o.web.applicationPubKey=i),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Li(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ai(t.getKey("auth")),p256dh:Ai(t.getKey("p256dh"))},i=await ji(e.firebaseDependencies);if(i){if(function(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&o&&r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await Fi(e),i=Ki(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{const n=await fetch(`${Ui(e.appConfig)}/${t.token}`,o);r=await n.json()}catch(e){throw Ri.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){const e=r.error.message;throw Ri.create("token-update-failed",{errorInfo:e})}if(!r.token)throw Ri.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Mi(e.firebaseDependencies,i),n}catch(t){throw await zi(e),t}}(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await $i(e.firebaseDependencies,i.token)}catch(e){}return Hi(e.firebaseDependencies,n)}return Hi(e.firebaseDependencies,n)}async function zi(e){const t=await ji(e.firebaseDependencies);t&&(await $i(e.firebaseDependencies,t.token),await async function(e){const t=Bi(e),n=(await xi()).transaction(Ci,"readwrite");await n.objectStore(Ci).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Hi(e,t){const n={token:await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Fi(e),i=Ki(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{const t=await fetch(Ui(e.appConfig),o);r=await t.json()}catch(e){throw Ri.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){const e=r.error.message;throw Ri.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw Ri.create("token-subscribe-no-token");return r.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await Mi(e,n),n.token}function Gi(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const r=t.notification.icon;r&&(e.notification.icon=r)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,i,o,r,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(o=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==o?o:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}function Vi(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){return Ri.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vi("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Vi("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Yi{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=function(e){if(!e||!e.options)throw qi("App Configuration Object");if(!e.name)throw qi("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw qi(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{}))}catch(e){throw Ri.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xi(e,t){if(!navigator)throw Ri.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Ri.create("permission-blocked");return await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Si)}(e,null==t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await Ji(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Ri.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),Wi(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(e,t,n){const i=function(e){switch(e){case Oi.NOTIFICATION_CLICKED:return"notification_open";case Oi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n["google.c.a.c_id"],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function Qi(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Oi.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(Gi(n)):e.onMessageHandler.next(Gi(n)));const i=n.data;var o;"object"==typeof(o=i)&&o&&Di in o&&"1"===i["google.c.a.e"]&&await Zi(e,n.messageType,i)}const eo="@firebase/messaging",to="0.12.4",no=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>Xi(t,e)}};function io(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e){if(!navigator)throw Ri.create("only-available-in-window");return e.swRegistration||await Ji(e),zi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=Ke(e))}function oo(e,t){return function(e,t){if(!navigator)throw Ri.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=Ke(e),t)}Tt(new We("messaging",(e=>{const t=new Yi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>Qi(t,e))),t}),"PUBLIC")),Tt(new We("messaging-internal",no,"PRIVATE")),Bt(eo,to),Bt(eo,to,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ro="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ao="FCM_MSG";var so,co;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uo(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function lo(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(so||(so={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(co||(co={}));const po="fcm_token_details_db",fo="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ho="firebase-messaging-store";let mo=null;function vo(){return mo||(mo=bi("firebase-messaging-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ho)}}})),mo}async function go(e){const t=wo(e),n=await vo(),i=await n.transaction(ho).objectStore(ho).get(t);if(i)return i;{const t=await async function(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map((e=>e.name)).includes(po))return null;let t=null;return(await bi(po,5,{upgrade:async(n,i,o,r)=>{var a;if(i<2)return;if(!n.objectStoreNames.contains(fo))return;const s=r.objectStore(fo),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:uo(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:uo(e.auth),p256dh:uo(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:uo(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:uo(e.auth),p256dh:uo(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:uo(e.vapidKey)}}}}})).close(),await wi(po),await wi("fcm_vapid_details_db"),await wi("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await bo(e,t),t}}async function bo(e,t){const n=wo(e),i=(await vo()).transaction(ho,"readwrite");return await i.objectStore(ho).put(t,n),await i.done,t}function wo({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new xe("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function yo(e,t){const n={method:"DELETE",headers:await Io(e)};try{const i=await fetch(`${Eo(e.appConfig)}/${t}`,n),o=await i.json();if(o.error){const e=o.error.message;throw _o.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw _o.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function Eo({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function Io({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function So({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==ro&&(o.web.applicationPubKey=i),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:lo(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:uo(t.getKey("auth")),p256dh:uo(t.getKey("p256dh"))},i=await go(e.firebaseDependencies);if(i){if(function(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&o&&r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await Io(e),i=So(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{const n=await fetch(`${Eo(e.appConfig)}/${t.token}`,o);r=await n.json()}catch(e){throw _o.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){const e=r.error.message;throw _o.create("token-update-failed",{errorInfo:e})}if(!r.token)throw _o.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await bo(e.firebaseDependencies,i),n}catch(t){throw await To(e),t}}(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await yo(e.firebaseDependencies,i.token)}catch(e){}return Oo(e.firebaseDependencies,n)}return Oo(e.firebaseDependencies,n)}async function To(e){const t=await go(e.firebaseDependencies);t&&(await yo(e.firebaseDependencies,t.token),await async function(e){const t=wo(e),n=(await vo()).transaction(ho,"readwrite");await n.objectStore(ho).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Oo(e,t){const n={token:await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Io(e),i=So(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{const t=await fetch(Eo(e.appConfig),o);r=await t.json()}catch(e){throw _o.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){const e=r.error.message;throw _o.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw _o.create("token-subscribe-no-token");return r.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await bo(e,n),n.token}async function Ao(e,t){const n=function(e,t){var n,i;const o={};e.from&&(o.project_number=e.from);e.fcmMessageId&&(o.message_id=e.fcmMessageId);o.instance_id=t,e.notification?o.message_type=so.DISPLAY_NOTIFICATION.toString():o.message_type=so.DATA_MESSAGE.toString();o.sdk_platform=3..toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(o.collapse_key=e.collapse_key);o.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(o.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label);return o}(t,await e.firebaseDependencies.installations.getId());!function(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}(e,n)}function Lo(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Ao(t,n);const i=await Co();if(function(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}(i))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=co.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(i,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:i}=Notification;n&&i&&n.length;return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[ao]:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const r=t.notification.icon;r&&(e.notification.icon=r)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,i,o,r,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(o=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==o?o:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function No(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG;if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=function(e){var t,n,i;const o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;if(o)return o;return r=e.data,"object"==typeof r&&r&&"google.c.a.c_id"in r?self.location.origin:null;var r;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);if(!o)return;const r=new URL(o,self.location.href),a=new URL(self.location.origin);if(r.host!==a.host)return;let s=await async function(e){const t=await Co();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(r);var c;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return s?s=await s.focus():(s=await self.clients.openWindow(o),await(c=3e3,new Promise((e=>{setTimeout(e,c)})))),s?(i.messageType=co.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,s.postMessage(i)):void 0}function Co(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Po(e){return _o.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lo("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Lo("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class xo{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=function(e){if(!e||!e.options)throw Po("App Configuration Object");if(!e.name)throw Po("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw Po(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e,t){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e,t){if(void 0!==self.document)throw _o.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=Ke(e),t)}Tt(new We("messaging-sw",(e=>{const t=new xo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(ko(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(async function(e,t){var n,i;const{newSubscription:o}=e;if(!o)return void await To(t);const r=await go(t.firebaseDependencies);await To(t),t.vapidKey=null!==(i=null===(n=null==r?void 0:r.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:ro,await Do(t)}(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil(No(e))})),t}),"PUBLIC"));class Mo{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return async function(e,t){return Xi(e=Ke(e),t)}(this._delegate,e)}async deleteToken(){return io(this._delegate)}onMessage(e){return oo(this._delegate,e)}onBackgroundMessage(e){return jo(this._delegate,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=e=>self&&"ServiceWorkerGlobalScope"in self?new Mo(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new Mo(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),Ro={isSupported:
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return self&&"ServiceWorkerGlobalScope"in self?Ce()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&Ce()&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};en.INTERNAL.registerComponent(new We("messaging-compat",Bo,"PUBLIC").setServiceProps(Ro)),en.registerVersion("@firebase/messaging-compat","0.2.4");var $o=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const Uo="/najva-messaging-sw.js",Fo="/najva-messaging-scope";function Ko(e){return $o(this,void 0,void 0,(function*(){try{["/","/firebase-cloud-messaging-push-scope"].forEach((e=>{navigator.serviceWorker.getRegistration(e).then((e=>{var t,n;(null===(n=null===(t=null==e?void 0:e.active)||void 0===t?void 0:t.scriptURL)||void 0===n?void 0:n.includes(Uo))&&e.unregister()})).catch((e=>{throw u(t.SW_UNREGISTRATION_FAILED,{error:e})}))}))}catch(e){}try{return yield navigator.serviceWorker.register(Uo,{scope:Fo,updateViaCache:"none"})}catch(e){throw u(t.SW_REGISTRATION_FAILED,{browserErrorMessage:e.message,error:e})}}))}var Wo=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let zo={messaging_sender_id:"",isNativeMode:!1};const Ho="najva-reset",Go="najva-hidden",Vo="najva-float-left",qo="najva-float-right",Yo="najva-clearfix",Jo="2147483645",Xo="najva-style-container";let Zo={extra_css:""};function Qo(e){if(!e||"string"!=typeof e)return;(function(){let e=document.getElementById(Xo);return e||(e=document.createElement("style"),e.setAttribute("id",Xo),document.getElementsByTagName("head")[0].appendChild(e),e)})().appendChild(document.createTextNode(e))}function er(e){Zo=e,function(){let e=`\n  .${Ho}: {\n            background-attachment: scroll;\n            background-color: transparent;\n            background-image: none;\n            background-position: 0 0;\n            background-repeat: repeat;\n            border-color: #000;\n            border: medium none currentColor;\n            bottom: auto;\n            clear: none;\n            clip: auto;\n            color: inherit;\n            counter-increment: none;\n            counter-reset: none;\n            cursor: auto;\n            direction: inherit;\n            display: inline;\n            float: none;\n            font-family: inherit;\n            font-size: inherit;\n            font-style: inherit;\n            font-variant: normal;\n            font-weight: inherit;\n            height: auto;\n            left: auto;\n            letter-spacing: normal;\n            line-height: inherit;\n            list-style-type: inherit;\n            list-style-position: outside;\n            list-style-image: none;\n            margin: 0;\n            max-height: none;\n            max-width: none;\n            min-height: 0;\n            min-width: 0;\n            opacity: 1;\n            outline: medium none invert;\n            overflow: visible;\n            padding: 0;\n            position: static;\n            quotes: "" "";\n            right: auto;\n            table-layout: auto;\n            text-align: inherit;\n            text-decoration: inherit;\n            text-indent: 0;\n            text-transform: none;\n            top: auto;\n            unicode-bidi: normal;\n            vertical-align: baseline;\n            visibility: inherit;\n            white-space: normal;\n            width: auto;\n            word-spacing: normal;\n            z-index: auto;\n            background-origin: padding-box;\n            background-clip: border-box;\n            background-size: auto;\n            -o-border-image: none;\n            border-image: none;\n            border-radius: 0;\n            box-shadow: none;\n            box-sizing: content-box;\n            column-count: auto;\n            column-gap: normal;\n            column-rule: medium none #000;\n            column-span: 1;\n            column-width: auto;\n            -webkit-font-feature-settings: normal;\n            font-feature-settings: normal;\n            overflow-x: visible;\n            overflow-y: visible;\n            -webkit-hyphens: manual;\n            -ms-hyphens: manual;\n            hyphens: manual;\n            -ms-perspective: none;\n            -o-perspective: none;\n            perspective: none;\n            -ms-perspective-origin: 50% 50%;\n            -o-perspective-origin: 50% 50%;\n            perspective-origin: 50% 50%;\n            -webkit-backface-visibility: visible;\n            backface-visibility: visible;\n            text-shadow: none;\n            transition: all 0s ease 0s;\n            transform: none;\n            transform-origin: 50% 50%;\n            transform-style: flat;\n            word-break: normal;\n        }\n        .${Go} {\n            opacity: 0 !important;\n            visibility: hidden !important;\n        }\n        .${Vo} {\n            float: left!important;\n        }\n        \n        .${qo} {\n            float: right!important;\n        }\n        \n        .${Yo}:after, .${Yo}:before {\n            content: " "!important;\n            display: table!important;\n        }\n        \n        .${Yo}:after {\n            clear: both!important;\n        }\n        \n        .${Yo} {\n            zoom: 1!important;\n            width: auto!important;\n        }\n                               \n    `;Zo.extra_css&&(e+=Zo.extra_css),Qo(e)}()}function tr(e){const n=document.createElement("div");if(n.innerHTML=e.trim(),!n.firstElementChild)throw u(t.CREATE_HTML_FAILED,{value:e});return n.firstElementChild}!function(){let e=[],t=!1,n=!1;function i(){if(!t){!0;for(const t of e)t.call(window);[]}}}();function nr(e,t){const n=Math.abs(e-t);return Math.ceil(n/864e5)}var ir=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let or={website_id:"",najva_subdomain:"",api_key:""};const rr="najva-resubscribe";function ar(e){return ir(this,void 0,void 0,(function*(){or=e,function(){if(!document.querySelector(`#${rr}`)){const e=tr(`<iframe id="${rr}" style="display: none !important;" src="${or.najva_subdomain}resubscribe/?website=${or.website_id}&api_key=${or.api_key}"></iframe>`);e&&document.body.appendChild(e)}}()}))}function sr(){!function(){const e=`${or.najva_subdomain}request/permission/?website=${or.website_id}&api_key=${or.api_key}`,t=window.open(e,"popup","width=700,height=700,scrollbars=no,resizable=no,toolbar=no,menubar=no");null==t||t.focus(),ge(g.HasNajvaSubscriptionWindowOpened,"true")}()}var cr;!function(e){e.NOTIF_PROMPT_OPEN="najva_notification_prompt_open",e.NOTIF_PROMPT_CLOSE="najva_notification_prompt_close",e.NOTIF_ACCESS_GRANTED="najva_notification_access_granted",e.NOTIF_ACCESS_DENIED="najva_notification_access_denied",e.NOTIF_ACCESS_ASK="najva_notification_access_ask"}(cr||(cr={}));var dr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const ur="granted",lr="denied",pr="prompt";function fr(){return dr(this,void 0,void 0,(function*(){try{return yield navigator.permissions.query({name:"notifications"})}catch(e){return null}}))}function hr(){return dr(this,void 0,void 0,(function*(){const e=yield fr();return e?e.state:window.Notification?Notification.permission:null}))}function mr(){return dr(this,void 0,void 0,(function*(){!function(){const e=new CustomEvent(cr.NOTIF_PROMPT_OPEN);window.dispatchEvent(e)}(),yield Notification.requestPermission(),function(){const e=new CustomEvent(cr.NOTIF_PROMPT_CLOSE);window.dispatchEvent(e)}()}))}function vr(){return dr(this,void 0,void 0,(function*(){const e=yield fr();e&&(e.onchange=e=>dr(this,void 0,void 0,(function*(){const t=e.currentTarget.state;t===ur?function(){const e=new CustomEvent(cr.NOTIF_ACCESS_GRANTED);window.dispatchEvent(e)}():t===lr?function(){const e=new CustomEvent(cr.NOTIF_ACCESS_DENIED);window.dispatchEvent(e)}():(!function(){const e=new CustomEvent(cr.NOTIF_ACCESS_ASK);window.dispatchEvent(e)}(),yield mr())})))}))}function gr(){return dr(this,void 0,void 0,(function*(){return(yield hr())===ur}))}function br(){return dr(this,void 0,void 0,(function*(){return(yield hr())===pr}))}const wr="https://report.najva.com";var _r=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let yr;function Er(e,t,n){const i=[],o=JSON.parse((null==e?void 0:e.buttons)||"[]");if(o&&o.length)for(const e of o)[0,5,6].includes(Number(e.onclick_action))&&i.push({title:e.title,icon:e.icon_url,action:`BUTTON_CLICKED_${e.button_id}`});return{title:`${(null==e?void 0:e.title)||"title not provided"}`,options:{body:(null==e?void 0:e.body)||"body not provided",icon:`${null==e?void 0:e.icon}${n?`?n=${t}`:""}`,image:null==e?void 0:e.image,requireInteraction:!0,tag:(null==e?void 0:e.tag)||"",data:e,actions:i}}}function Ir(e){return _r(this,void 0,void 0,(function*(){let t=null;if(!e)try{t=yield $(M.Najva)}catch(e){}return e||(null==t?void 0:t.value)||function(e){const t=e||0,n=[],i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var o=0;o<t;o++)n.push(i.charAt(Math.floor(Math.random()*i.length)));return n.join("")}(15)}))}function Sr(e){let t=0;return function n(i){i().catch((o=>{t<e&&(t+=1,setTimeout((()=>{n(i)}),5e3)),yr(o)}))}}void 0===yr&&(yr=console.error);function Dr(e,t){return _r(this,void 0,void 0,(function*(){const{websiteId:n,notificationId:i,notificationData:o,isReportEnabled:a,version:s,najvaTokenFromNotificationPayload:c}=t,d=yield Ir(c),{title:u,options:l}=Er(o,d,a);return a&&Sr(2)((()=>(({websiteId:e,notificationId:t,najvaToken:n,version:i})=>r(`${wr}/deliver?website_id=${e}&notif_id=${t}&sub_id=${n}&version=${i}`,{credentials:"include"}))({websiteId:n,notificationId:i,najvaToken:d,version:s}))),e.showNotification(u,l).then((()=>{a&&Sr(2)((()=>(({websiteId:e,notificationId:t,najvaToken:n,version:i})=>r(`${wr}/show?website_id=${e}&notif_id=${t}&sub_id=${n}&version=${i}`,{credentials:"include"}))({websiteId:n,notificationId:i,najvaToken:d,version:s})))})).catch(yr)}))}var Tr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function Or(e){if(document.hidden)return;const t=en.messaging();t&&t.onMessage((t=>Tr(this,void 0,void 0,(function*(){yield function(e,t){var n,i,o,r;return Tr(this,void 0,void 0,(function*(){yield Dr(t,{websiteId:(null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.website_id)||"",notificationId:(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.notification_id)||"",notificationData:(null==e?void 0:e.data)||{},isReportEnabled:"true"===(null===(o=null==e?void 0:e.data)||void 0===o?void 0:o.is_report_enabled),version:"1.13.30",najvaTokenFromNotificationPayload:null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.najva_token})}))}(t,e)}))))}let Ar,Lr={website_id:0,api_key:"",isNativeMode:!1};function kr(e,t){Lr=e,Ar=t,vr(),Lr.isNativeMode&&Or(Ar),function(e,t){window.addEventListener("message",(n=>Tr(this,void 0,void 0,(function*(){if(n.data.api_key===t&&n.data.website_id===e){const e=n.data.cookie_token,t=n.data.najva_token;e&&t&&(yield R(M.Cookie,e,(new Date).toISOString()),yield R(M.Najva,t,(new Date).toISOString()),n.data.subscribe&&window.najvaUserSubscribed&&window.najvaUserSubscribed(e))}}))),!1)}(Lr.website_id,Lr.api_key)}const Nr={STATIC_IMAGES:"https://app.najva.com/static/images",BASE:"https://api.najva.com"};var Cr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function Pr(e,t=1){return Cr(this,void 0,void 0,(function*(){return new Promise((n=>{let i=!1;const o=()=>{i&&window.removeEventListener("scroll",o),function(){const e=document.documentElement,t=document.body,n="scrollTop",i="scrollHeight";return(e[n]||t[n])/((e[i]||t[i])-window.innerHeight)*100}()>e.scroll.value&&(i=!0,n(!0))};e.visit.maximum.enable||e.visit.minimum.enable||e.visit.interval.enable?(e.visit.minimum.enable||(e.visit.minimum.value=1),e.visit.maximum.enable||(e.visit.maximum.value=1e5),e.visit.interval.enable||(e.visit.interval.value=1),t>=e.visit.minimum.value&&t<=e.visit.maximum.value&&(t-e.visit.minimum.value)%e.visit.interval.value==0&&(e.delay.enable||e.scroll.enable?(e.scroll.enable&&window.addEventListener("scroll",o),e.delay.enable&&setTimeout((()=>{n(!0)}),1e3*e.delay.value)):n(!0))):e.delay.enable||e.scroll.enable?(e.scroll.enable&&window.addEventListener("scroll",o),e.delay.enable&&setTimeout((()=>{n(!0)}),1e3*e.delay.value)):n(!0)}))}))}var xr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let jr={website_id:"",api_key:"",without_popup:!1,request_permission:{delay:{enable:0,value:0},scroll:{enable:0,value:0},visit:{minimum:{enable:0,value:0},maximum:{enable:0,value:0},interval:{enable:0,value:0}}}};function Mr(e){window.addEventListener("najva-subscription-end",e)}function Br(e,n){return xr(this,void 0,void 0,(function*(){const{value:i}=yield $(M.Firebase),{value:r}=yield $(M.Najva),{value:a}=yield $(M.Cookie),s=yield function(){return Wo(this,void 0,void 0,(function*(){const e=en.messaging();try{let n=yield navigator.serviceWorker.getRegistration(Fo);n||(n=yield navigator.serviceWorker.register("/najva-messaging-sw.js",{scope:Fo,updateViaCache:"none"}));const i=yield e.getToken({vapidKey:"BCCZE7qOLGsByGdnR_RN9kMRWfVR3HzYRCeCV8z9Rzav9XlNx4NQdr5PGmHjE2_Yl-Iv6OyzApKPuIHDdDJENZQ",serviceWorkerRegistration:n});if(!i)throw u(t.FIREBASE_TOKEN_UPDATE_FAILED,{firebaseErrorMessage:"empty firebase token"});return i}catch(e){throw u(t.FIREBASE_REGISTRAION_FAILED,{firebaseErrorMessage:e.message,error:e})}}))}();i===s&&r&&a||(yield function(e,t,n){return xr(this,void 0,void 0,(function*(){const{value:i}=yield $(M.Cookie),{value:r}=yield $(M.Najva),a={token_id:e,website_id:t,api_key:n};r&&(a.najva_token=r),i&&(a.cookie_token=i);const{cookie_token:s,najva_token:c,status:d,detail:u}=yield o(`${Nr.BASE}/api/v1/add/`,{method:"POST",body:new URLSearchParams(a),headers:{"Content-type":"application/x-www-form-urlencoded"},credentials:"include"});(d&&"failure"!==d||"fail to subscribe"===u)&&(yield R(M.Firebase,e,(new Date).toISOString()),s&&(yield R(M.Cookie,s,(new Date).toISOString()),window.najvaUserSubscribed&&window.najvaUserSubscribed(s)),c&&(yield R(M.Najva,c,(new Date).toISOString())))}))}(s,e,n),function(){const e=new CustomEvent("najva-subscription-end");window.dispatchEvent(e)}())}))}function Rr(){return xr(this,void 0,void 0,(function*(){return new Promise((e=>xr(this,void 0,void 0,(function*(){(yield br())?(yield mr(),e()):(yield gr())?(yield Br(jr.website_id,jr.api_key),e()):e()}))))}))}function $r(e){return xr(this,void 0,void 0,(function*(){if(jr=e,function(e){window.addEventListener(cr.NOTIF_ACCESS_GRANTED,e)}((()=>xr(this,void 0,void 0,(function*(){yield Br(jr.website_id,jr.api_key)})))),yield gr())yield Br(jr.website_id,jr.api_key);else if(jr.without_popup){const t=yield ve(g.VisitCount);yield Pr(e.request_permission,t?Number(t):1),yield Rr()}}))}var Ur=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let Fr={website_id:"",campaign_id:"",api_key:"",najva_subdomain:"",without_popup:!1,isNativeMode:!1,request_permission:{delay:{enable:0,value:0},scroll:{enable:0,value:0},visit:{minimum:{enable:0,value:0},maximum:{enable:0,value:0},interval:{enable:0,value:0}}}};function Kr(){return Ur(this,void 0,void 0,(function*(){Fr.isNativeMode?yield Rr():sr()}))}function Wr(){return Ur(this,void 0,void 0,(function*(){const e=yield $(M.Firebase),t=yield $(M.Cookie),n=yield $(M.Najva);return Boolean(e&&t&&n)}))}var zr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let Hr={najva_subdomain:"",website_id:""};function Gr(e,t){return zr(this,void 0,void 0,(function*(){if(!document.querySelector("#najva-cmif")){const n=tr(`<iframe id="najva-cmif" style="display: none!important;" src="${e}cmif/?website_id=${t}"></iframe>`);n&&document.body.appendChild(n),yield ge(g.LastCookieMatchingSent,(new Date).toISOString())}}))}function Vr(e){return zr(this,void 0,void 0,(function*(){Hr=e,(yield function(){return zr(this,void 0,void 0,(function*(){const e=yield ve(g.LastCookieMatchingSent);return!!e&&nr((new Date).getTime(),new Date(e).getTime())<7}))}())||(yield Wr())&&(yield Gr(Hr.najva_subdomain,Hr.website_id)),Mr((()=>zr(this,void 0,void 0,(function*(){yield Gr(Hr.najva_subdomain,Hr.website_id)}))))}))}var qr=n(181);const Yr="najva_location_access_granted";var Jr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const Xr="granted";function Zr(){const e={enableHighAccuracy:!0,maximumAge:0},t=e=>{!function(e){const t=new CustomEvent(Yr,{detail:e});window.dispatchEvent(t)}(e)};"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t,void 0,e)}var Qr=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const ea=n.n(qr)()((function(e){return Qr(this,void 0,void 0,(function*(){if(!e)return;const{coords:n}=e,i={accuracy:n.accuracy,altitude:n.altitude,latitude:n.latitude,longitude:n.longitude};try{yield o(`${Nr.BASE}/api/v1/location/`,{method:"POST",body:JSON.stringify(i),credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){throw u(t.SEND_LOCATION_FAILED,{errorStatus:e})}}))}),1e3);function ta(e){return Qr(this,void 0,void 0,(function*(){e.location_permission&&"geolocation"in navigator&&"permissions"in navigator&&(e.isNativeMode&&(yield function(){return Jr(this,void 0,void 0,(function*(){if("permissions"in navigator){const e=yield navigator.permissions.query({name:"geolocation"});return"state"in e&&e.state===Xr}return!1}))}())&&(yield Wr())&&Zr(),function(){Jr(this,void 0,void 0,(function*(){"permissions"in navigator&&((yield navigator.permissions.query({name:"geolocation"})).onchange=function(){this.state===Xr&&Zr()})}))}(),Mr((()=>Zr())),function(e){window.addEventListener(Yr,e,!1)}((e=>{e.detail&&ea(e.detail)})))}))}var na=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let ia={website_id:"",api_key:"",campaign_id:""};function oa(){return na(this,void 0,void 0,(function*(){yield function(){return na(this,void 0,void 0,(function*(){let e=yield ve(g.VisitCount);e||(e=0),e=parseInt(e.toString()),yield ge(g.VisitCount,e+1)}))}();try{yield function(){return na(this,void 0,void 0,(function*(){yield o("https://push-active.najva.com/api/events/login",{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},credentials:"include"})}))}(),yield function(e){return na(this,void 0,void 0,(function*(){try{const t=yield ve(g.LastCurrentUserAPICalled);t&&t===(new Date).toLocaleDateString()||(yield ge(g.LastCurrentUserAPICalled,(new Date).toLocaleDateString()),yield o("https://cr.najva.com/api/v2/current/user/",{method:"POST",body:new URLSearchParams({website:e}),headers:{"Content-type":"application/x-www-form-urlencoded"},credentials:"include"}))}catch(e){throw u(t.UPDATE_USER_ACTIVITY_FAILED,{browserErrorMessage:e.message,error:e})}}))}(ia.website_id),yield function(){return na(this,void 0,void 0,(function*(){yield ge(g.LastActiveTime,(new Date).toISOString())}))}()}catch(e){}}))}var ra=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let aa={website_id:""};function sa(e){return ra(this,void 0,void 0,(function*(){try{if(yield Wr()){const t=yield o(`${Nr.BASE}/api/v2/subscriber/tag/`,{method:"POST",body:JSON.stringify({website_id:aa.website_id,tags:e}),headers:{"Content-Type":"application/json"},credentials:"include"}),{message:n}=t;"not found"!==n&&(yield Promise.all(Object.keys(e).map((t=>ra(this,void 0,void 0,(function*(){return Z(t,e[t],(new Date).toISOString())}))))))}}catch(n){throw u(t.ADD_ATTRIBUTE_FAILED,{object:e,error:n})}}))}function ca(){return ra(this,void 0,void 0,(function*(){try{const e=yield o(`${Nr.BASE}/api/v2/subscriber/tag/?website_id=${aa.website_id}`,{method:"GET",credentials:"include"}),{message:t}=e,{tags:n}=e;return"not found"===t||null===n?{}:n}catch(e){throw u(t.GET_ATTRIBUTES_FAILED,{error:e})}}))}function da(e){return ra(this,void 0,void 0,(function*(){try{const n=yield o(`${Nr.BASE}/api/v2/subscriber/tag/`,{method:"DELETE",body:JSON.stringify({website_id:aa.website_id,key:e}),headers:{"Content-Type":"application/json"},credentials:"include"}),{message:i}=n,{tags:r}=n;return"not found"!==i&&(yield function(e){return X(this,void 0,void 0,(function*(){try{const t=(yield he()).transaction(J,"readwrite");yield t.store.delete(e),yield t.done}catch(n){throw u(t.DB_READ_FAILED,{key:e,objectStoreName:J,browserErrorMessage:n.message,error:n})}}))}(e)),r||[]}catch(n){throw u(t.DELETE_ATTRIBUTE_FAILED,{key:e,error:n})}}))}function ua(){let e=!1;var t;return t=window.navigator.userAgent||window.navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e}var la=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var i=Array(e),o=0;for(t=0;t<n;t++)for(var r=arguments[t],a=0,s=r.length;a<s;a++,o++)i[o]=r[a];return i},pa=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},fa=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},ha=function(e,t,n,i){this.name=e,this.version=t,this.os=n,this.bot=i,this.type="bot-device"},ma=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},va=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},ga=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,ba=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],wa=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function _a(e){return e?Ea(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new va:"undefined"!=typeof navigator?Ea(navigator.userAgent):"undefined"!=typeof process&&process.version?new fa(process.version.slice(1)):null}function ya(e){return""!==e&&ba.reduce((function(t,n){var i=n[0],o=n[1];if(t)return t;var r=o.exec(e);return!!r&&[i,r]}),!1)}function Ea(e){var t=ya(e);if(!t)return null;var n=t[0],i=t[1];if("searchbot"===n)return new ma;var o=i[1]&&i[1].split(/[._]/).slice(0,3);o?o.length<3&&(o=la(o,function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(3-o.length))):o=[];var r=o.join("."),a=function(e){for(var t=0,n=wa.length;t<n;t++){var i=wa[t],o=i[0];if(i[1].exec(e))return o}return null}(e),s=ga.exec(e);return s&&s[1]?new ha(n,r,a,s[1]):new pa(n,r,a)}function Ia(){const e=_a();return!!e&&"firefox"===e.name}function Sa(){const e=_a();return e?e.version:null}var Da,Ta,Oa=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function Aa(){return Oa(this,void 0,void 0,(function*(){if(function(){const e=window.navigator.userAgent.toLowerCase();if(0===e.indexOf("msie")&&0===e.indexOf("trident"))return!1;const t=/(?:msie|rv:)\s?([\d.]+)/.exec(e);return!!(t&&parseInt(t[1],10)>=10)}())return function(){try{return!window.indexedDB}catch(e){return!1}}();if(Ia())try{return yield function(){return Oa(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{window.indexedDB||e();try{const n=window.indexedDB.open("test");n.onerror=()=>{e()},n.onsuccess=()=>{t()}}catch(t){e()}}))}))}(),!0}catch(e){return!1}else{if(function(){const e=_a();return!!e&&"safari"===e.name}())return function(){try{return window.localStorage.setItem("test","1"),!1}catch(e){return!0}}();if(function(){const e=_a();return!!e&&"chrome"===e.name}())try{return yield function(){return Oa(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{"storage"in navigator&&"estimate"in navigator.storage&&navigator.storage.estimate().then((({quota:n})=>{n&&n<12e7&&e(),t()}));const n=window.RequestFileSystem||window.webkitRequestFileSystem;n?n(window.TEMPORARY,100,(()=>{t()}),(()=>{e()})):e()}))}))}(),!0}catch(e){return!1}}return!1}))}!function(e){e.POPUP_BUTTON="najva-popup-button"}(Da||(Da={})),function(e){e.POPUP="najva-popup",e.POPUP_IMAGE_WRAPPER="najva-popup-image-wrapper",e.POPUP_IMAGE="najva-popup-image",e.POPUP_BODY_WRAPPER="najva-popup-body-wrapper",e.POPUP_TEXT="najva-popup-text",e.POPUP_DESCRIPTION="najva-popup-description",e.POPUP_BUTTON_WRAPPER="najva-popup-button-wrapper",e.POPUP_REJECT_BUTTON="najva-popup-reject-button",e.POPUP_ACCEPT_BUTTON="najva-popup-accept-button"}(Ta||(Ta={}));let La=!1;var ka=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let Na={request_icon:"",request_text:"",request_description:"",denied_text:"",accept_text:"",without_popup:!0,with_popup:!0,dismiss_cookie_days:0,isNativeMode:!1,request_permission:{delay:{enable:1,value:5},scroll:{enable:0,value:50},visit:{minimum:{enable:1,value:1},maximum:{enable:0,value:24},interval:{enable:0,value:3}}}};function Ca(){const e=document.getElementById(Ta.POPUP);e&&e.classList.add(Go)}function Pa(){!function(e){if(!document.getElementById(Ta.POPUP)){const t=tr(`\n    <div id="${Ta.POPUP}" class="${Go}">\n        <div id="${Ta.POPUP_IMAGE_WRAPPER}">\n            <img id="${Ta.POPUP_IMAGE}" src="${e.request_icon}">\n        </div>\n        <div id="${Ta.POPUP_BODY_WRAPPER}" class="${Yo}">\n            <p id="${Ta.POPUP_TEXT}">${e.request_text}</p>\n            ${e.request_description?`<p id="${Ta.POPUP_DESCRIPTION}">${e.request_description}</p>`:""}\n            <div id="${Ta.POPUP_BUTTON_WRAPPER}" class="${Vo}">\n                <button id="${Ta.POPUP_REJECT_BUTTON}" class="${Da.POPUP_BUTTON}">\n                    ${e.denied_text}\n                </button>\n                <button id="${Ta.POPUP_ACCEPT_BUTTON}" class="${Da.POPUP_BUTTON}">\n                    ${e.accept_text}\n                </button>\n            </div>\n        </div>\n    </div>\n`);t&&document.body.appendChild(t)}}(Na);const e=document.getElementById(Ta.POPUP_ACCEPT_BUTTON),t=document.getElementById(Ta.POPUP_REJECT_BUTTON);e&&e.addEventListener("click",(()=>ka(this,void 0,void 0,(function*(){Ca(),yield Kr()})))),t&&t.addEventListener("click",(()=>ka(this,void 0,void 0,(function*(){Ca(),Ha(),yield Y(G.Reject,!0)}))))}function xa(){return ka(this,void 0,void 0,(function*(){const e=yield function(){return ka(this,void 0,void 0,(function*(){let e=yield q(G.ShownCount);return e||(e=0),e}))}();yield Y(G.ShownCount,e+1)}))}function ja(){return ka(this,void 0,void 0,(function*(){!function(e){if(La)return;La=!0,Qo(`\n    #${Ta.POPUP} {\n        z-index: ${Jo};\n        -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12) !important;\n        box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12) !important;\n        direction: rtl;\n        position: fixed;\n        ${e.with_popup?"top: 10px;left: 15px;":""}\n        width: 500px;\n        top: 0px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n        transform: translateX(-50%);\n        background-color: #fff;\n        border-bottom-right-radius: 4px;\n        border-bottom-left-radius: 4px;\n        border: 1px solid #eaeaea;\n        -webkit-transition: opacity 0.5s, visibility 0.5s;\n        -o-transition: opacity 0.5s, visibility 0.5s;\n        transition: opacity 0.5s, visibility 0.5s;\n    }\n\n    #${Ta.POPUP_IMAGE_WRAPPER} {\n        width: 25%;\n        position: absolute;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n        transform: translateY(-50%);\n        text-align: center;\n    }\n\n    #${Ta.POPUP_IMAGE} {\n        width: 75%;\n        height: auto;\n        vertical-align: middle;\n        margin: auto;\n    }\n\n    #${Ta.POPUP_BODY_WRAPPER} {\n        margin-right: 25%;\n        border-right: 1px solid #eaeaea;\n        padding: 10px;\n        font-size: 1.1em;\n        line-height: 1.2em;\n    }\n \n    #${Ta.POPUP_TEXT} {\n        margin: 0;\n        line-height: 1.5em;\n        color: #000;\n        font-size: 1em;\n    }\n\n    #${Ta.POPUP_DESCRIPTION} {\n        font-size: 0.8em;\n        color: gray;\n        margin:0;\n    }\n\n    #${Ta.POPUP_BUTTON_WRAPPER} {\n        margin-top: 7px;\n    }\n\n    .${Da.POPUP_BUTTON} {\n        -webkit-appearance: button;\n        text-transform: none;\n        overflow: visible;\n        margin: 0;\n        font-family: inherit;\n        display: inline-block;\n        font-weight: 400;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        padding: .375rem 1rem;\n        font-size: 1.2em;\n        line-height: 1.5;\n        border-radius: .25rem;\n        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n        -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n        -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n        background: initial;\n    }\n\n    #${Ta.POPUP_REJECT_BUTTON}:hover {\n        background-color: #e2e6ea !important;\n        border-color: #dae0e5 !important;\n    }\n\n    #${Ta.POPUP_REJECT_BUTTON} {\n        color: #212529 !important;\n        background-color: #f8f9fa !important;\n        border-color: #f8f9fa !important; \n    }\n\n    #${Ta.POPUP_ACCEPT_BUTTON} {\n        color: #fff !important;\n        background-color: #007bff !important;\n        border-color: #007bff !important;\n    }\n\n    #${Ta.POPUP_ACCEPT_BUTTON}:hover {\n        background-color: #0069d9 !important;\n        border-color: #0062cc !important;\n        text-decoration: none;\n    }\n\n    @media screen and (max-width: 767px) {\n      #${Ta.POPUP} {\n          width: 100%;\n          top: auto;\n          bottom: 0;\n          left:0;\n          -webkit-transform: none;\n          -ms-transform: none;\n          transform: none;\n          border-bottom-right-radius: 0;\n          border-bottom-left-radius: 0;\n          border-top-right-radius: 10px;\n          border-top-left-radius: 10px;\n      }\n\n      #${Ta.POPUP_BODY_WRAPPER}{\n          font-size: 15px;\n      }\n\n      .${Da.POPUP_BUTTON} {\n          width: 100px;\n          font-size: 1em\n      }\n\n      #${Ta.POPUP_BUTTON_WRAPPER} {\n          text-align: center;\n          float: inherit;\n      } \n    }\n  `)}(Na),Wa(Go),Pa(),function(){const e=document.getElementById(Ta.POPUP);e&&e.classList.remove(Go)}(),yield Y(G.LastShownTime,(new Date).toISOString()),yield xa()}))}function Ma(){return ka(this,void 0,void 0,(function*(){const e=yield br(),t=yield ve(g.HasNajvaSubscriptionWindowOpened);if(Na.isNativeMode&&!e||!Na.isNativeMode&&"string"==typeof t&&"true"===t||Na.without_popup)return!1;const n=yield q(G.LastShownTime);if(!n)return!0;if(!(yield q(G.Reject)))return!0;return nr((new Date).getTime(),new Date(n).getTime())>Na.dismiss_cookie_days}))}let Ba=!1;var Ra;!function(e){e.BELL="najva-bell",e.BELL_IMAGE_WRAPPER="najva-bell-image-wrapper",e.BELL_IMAGE="najva-bell-image",e.BELL_DENIED_HELP="najva-bell-denied-help",e.BELL_DENIED_HELP_CLOSE="najva-bell-denied-help-close",e.BELL_DENIED_HELP_IMAGE="najva-bell-denied-help-image"}(Ra||(Ra={}));let $a=!1;function Ua(e){if($a)return;$a=!0,function(){if(Ba)return;Qo("\n      [najvatooltip] {\n        margin: 20px 60px;\n        position: relative;\n        display: inline-block;\n        font-family: inherit;\n    }\n\n    [najvatooltip]::before {\n        content: \"\";\n        position: absolute;\n        top: -6px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-width: 4px 6px 0 6px;\n        border-style: solid;\n        border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;\n        z-index: 99;\n        opacity: 0;\n    }\n\n    [najvatooltip-position='left']::before {\n        left: 0%;\n        top: 50%;\n        margin-left: -12px;\n        transform: translatey(-50%) rotate(-90deg)\n    }\n\n    [najvatooltip-position='top']::before {\n        left: 50%;\n    }\n\n    [najvatooltip-position='buttom']::before {\n        top: 100%;\n        margin-top: 8px;\n        transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n    }\n\n    [najvatooltip-position='right']::before {\n        left: 100%;\n        top: 50%;\n        margin-left: 1px;\n        transform: translatey(-50%) rotate(90deg)\n    }\n\n    [najvatooltip]::after {\n        content: attr(najvatooltip);\n        position: absolute;\n        left: 50%;\n        top: -6px;\n        transform: translateX(-50%) translateY(-100%);\n        background: rgba(0, 0, 0, 0.7);\n        text-align: center;\n        color: #fff;\n        padding: 4px 2px;\n        font-size: 12px;\n        min-width: 80px;\n        border-radius: 5px;\n        pointer-events: none;\n        padding: 4px 4px;\n        z-index: 99;\n        opacity: 0;\n    }\n\n    [najvatooltip-position='left']::after {\n        left: 0%;\n        top: 50%;\n        margin-left: -8px;\n        transform: translateX(-100%) translateY(-50%);\n    }\n\n    [najvatooltip-position='top']::after {\n        left: 50%;\n    }\n\n    [najvatooltip-position='buttom']::after {\n        top: 100%;\n        margin-top: 8px;\n        transform: translateX(-50%) translateY(0%);\n    }\n\n    [najvatooltip-position='right']::after {\n        left: 100%;\n        top: 50%;\n        margin-left: 8px;\n        transform: translateX(0%) translateY(-50%);\n    }\n\n    [najvatooltip]:hover::after, [najvatooltip]:hover::before {\n        opacity: 1\n    }\n  "),Ba=!0}();let t=`\n      #${Ra.BELL} {\n        -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16) !important;\n        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16) !important;\n        max-width: initial;\n        z-index: ${Jo};\n        position: fixed;\n        width: 50px;\n        height: 50px;\n\n        bottom: 30px;\n        cursor: pointer;\n        background-color: transparent;\n        border-radius: 50%;\n        -webkit-transition: background-color 0.7s;\n        -o-transition: background-color 0.7s;\n        transition: background-color 0.7s;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    #${Ra.BELL_IMAGE_WRAPPER} {\n        padding: 0;\n        margin: 0;\n        border-radius: 50%;\n        width: 50px;\n        height: 50px;\n        text-align: center;\n        /*background-color: #444;*/\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        -webkit-transition: width 0.3s, height 0.3s;\n        -o-transition: width 0.3s, height 0.3s;\n        transition: width 0.3s, height 0.3s;\n  }\n\n    #${Ra.BELL_IMAGE} {\n        width: 40px;\n        height: 40px;\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        max-width: initial;\n        -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        border: 2px solid #fff;\n        border-radius: 50%;\n        padding: 5px;\n        -webkit-transition: width 0.3s, height 0.3s;\n        -o-transition: width 0.3s, height 0.3s;\n        transition: width 0.3s, height 0.3s;\n  }\n\n    #${Ra.BELL}:hover #${Ra.BELL_IMAGE_WRAPPER} {\n        width: 20px;\n        height: 20px;\n    }\n\n    #${Ra.BELL}:hover #${Ra.BELL_IMAGE} {\n        width: 50px;\n        height: 50px;\n        border-color: transparent;\n    }\n\n    #${Ra.BELL} {\n        ${e.bell_direction}: 30px;\n    }\n\n    #${Ra.BELL}:hover {\n        background-color: ${e.bell_color_hover};\n    }\n\n    #${Ra.BELL_IMAGE_WRAPPER} {\n        background-color: ${e.bell_color};\n    }\n\n    #${Ra.BELL_DENIED_HELP_CLOSE}{\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 2px 4px;\n        color: gray;\n        cursor: pointer;\n        border: 1px solid #d6d6d6;\n        border-top-right-radius: 5px;\n        font-size: 15px;\n        font-family: arial;\n    }\n\n    #${Ra.BELL_DENIED_HELP}{\n        z-index: ${Jo};\n        position: fixed;\n        bottom: 110px;\n        ${e.bell_direction}: 30px;\n        background: white;\n        padding: 25px 15px 15px;\n        color: #000;\n        direction: rtl;\n        border-radius: 5px;\n        width:230px;\n    }\n\n  @media screen and (max-width: 767px) {\n      #${Ra.BELL} {\n        width: 4em;\n        height: 4em;\n        margin:0;\n    }\n\n    #${Ra.BELL_IMAGE} {\n        width: 3em;\n        height: 3em;\n    }\n\n    #${Ra.BELL}:hover #${Ra.BELL_IMAGE_WRAPPER} {\n        width: 1em;\n        height: 1em;\n    }\n\n    #${Ra.BELL}:hover #${Ra.BELL_IMAGE} {\n        width: 4em;\n        height: 4em;\n    }\n  \n    #${Ra.BELL_IMAGE_WRAPPER} {\n        width: 4em;\n        height: 4em;\n    }\n  }\n\n  `;e.show_bell_in_mobile||(t+=`\n    @media screen and (max-width: 768px) {\n        #${Ra.BELL} {\n            visibility: hidden!important;\n            opacity: 0!important;\n        }\n    }`),Qo(t)}var Fa=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let Ka={show_bell:1,show_bell_in_mobile:1,bell_direction:"right",tooltip_direction:"left",bell_color_hover:"#7a7a7a",bell_color:"#444444",bell_tooltip:"",without_popup:!0,isNativeMode:!1};function Wa(e){const t=document.getElementById(Ra.BELL);t&&t.classList.add(e)}function za(e){const t=document.getElementById(Ra.BELL);t&&t.classList.remove(e)}function Ha(){za(Go)}function Ga(){var e;let t=document.getElementById(Ra.BELL_DENIED_HELP);if(!t){const e=tr(`\n    <div\n        id="${Ra.BELL_DENIED_HELP}"\n        class="${Go}"\n    >\n        <span id="${Ra.BELL_DENIED_HELP_CLOSE}">x</span>\n        <p>\n            شما اجازه ارسال نوتیف را به ما ندادید. طبق تصویر زیر، اجازه ارسال نوتیف را صادر کنید.\n        </p>\n        <img id="${Ra.BELL_DENIED_HELP_IMAGE}" src="${ua()?`${Nr.STATIC_IMAGES}/android-chrome-denied-help.png`:Ia()?`${Nr.STATIC_IMAGES}/firefox-denied-help.png`:`${Nr.STATIC_IMAGES}/chrome-denied-help.png`}"\n           height="${ua()?319:Ia()?112:274}"\n           width="230"\n           alt="notif denied help image"\n        >\n    </div>\n`);e&&document.body.appendChild(e)}t=document.getElementById(Ra.BELL_DENIED_HELP),null===(e=document.getElementById(Ra.BELL_DENIED_HELP_CLOSE))||void 0===e||e.addEventListener("click",(()=>{t&&t.classList.add(Go)}),!1)}function Va(){const e=document.getElementById(Ra.BELL),t=document.getElementById(Ra.BELL_DENIED_HELP);e&&(e.onclick=function(){return Fa(this,void 0,void 0,(function*(){const e=yield function(){return dr(this,void 0,void 0,(function*(){return(yield hr())===lr}))}();var n;Ka.isNativeMode&&e?t&&((n=t)&&(n.classList.contains(Go)?n.classList.remove(Go):n.classList.add(Go))):Ka.without_popup?Kr():yield ja()}))})}function qa(e){Ga(),function(e){if(Ua(e),!document.getElementById(Ra.BELL)){const t=tr(`\n    <div\n        id="${Ra.BELL}"\n        najvatooltip="${e.bell_tooltip}‍"\n        najvatooltip-position="${e.tooltip_direction}"\n        class="${Go}"\n    >\n        <div id="${Ra.BELL_IMAGE_WRAPPER}">\n            <img\n                id="${Ra.BELL_IMAGE}"\n                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MyA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPjxwYXRoIHN0eWxlPSJmaWxsOiNFN0VDRUQ7IiBkPSJNMTIuODIxLDQ2LjYzOGMxMC43MDEsMS44NDcsMTYuNjU5LDEuODQ3LDI3LjM2LDBMNDkuNjcxLDQ1bDAsMGMtNC42ODUtNC42NTctNy4zMTctMTAuNDE1LTcuMzE3LTE3ICB2LTljMC4wMzgtNi4wNDctMy45NTctMTAuNDc4LTcuOTQ2LTEyLjMwMWMtNC45OTktMi4yODUtMTAuODE1LTIuMjk0LTE1LjgwNiwwLjAwOEMxNC42NDgsOC41MywxMC4zNjcsMTIuOTU4LDEwLjMyOSwxOXY5ICBjMCw2LjU4NS0yLjMxNSwxMi4zNDMtNywxN2wwLDBMMTIuODIxLDQ2LjYzOHoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE1LjMyOSwyMGMtMC4wMDIsMC0wLjAwNCwwLTAuMDA2LDBjLTAuNTUyLTAuMDA0LTAuOTk3LTAuNDU0LTAuOTk0LTEuMDA2ICBjMC4wMy00LjY4MiwzLjc1Mi03LjY0Myw1Ljk0OC04LjY1NGMzLjg0OS0xLjc3NSw4LjU5NC0xLjc3MiwxMi40NjktMC4wMDJjMC41MDIsMC4yMjksMC43MjMsMC44MjIsMC40OTQsMS4zMjUgIGMtMC4yMywwLjUwMi0wLjgyMywwLjcyNC0xLjMyNiwwLjQ5M2MtMy4zNTMtMS41MzMtNy40NjktMS41MzctMTAuNzk5LDBjLTEuNzY3LDAuODE0LTQuNzYyLDMuMTczLTQuNzg1LDYuODUgIEMxNi4zMjYsMTkuNTU3LDE1Ljg3OSwyMCwxNS4zMjksMjB6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0M3Q0FDNzsiIGQ9Ik0zMC4zMjksNS4zODFWNGMwLTIuMjA5LTEuNzkxLTQtNC00cy00LDEuNzkxLTQsNHYxLjQ1M0MyNC45NTgsNC44NjIsMjcuNjksNC44NDEsMzAuMzI5LDUuMzgxeiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNDN0NBQzc7IiBkPSJNMTguMjM1LDQ3LjQ2YzEuNDQ1LDMuMjY4LDQuNjAyLDUuNTQsOC4yNzcsNS41NGMzLjY3NiwwLDYuODM0LTIuMjczLDguMjc4LTUuNTQzICBDMjguODYyLDQ4LjIwOSwyNC4xNTksNDguMjEsMTguMjM1LDQ3LjQ2eiIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg=="\n            />\n        </div>\n    </div>\n`);t&&document.body.appendChild(t),Va()}}(e),Ha()}function Ya(e){return Fa(this,void 0,void 0,(function*(){if(Ka=e,Boolean(Ka.show_bell)||Boolean(Ka.show_bell_in_mobile)){const e=yield ve(g.HasNajvaSubscriptionWindowOpened),t=yield gr();(Ka.isNativeMode&&!t||!Ka.isNativeMode&&("string"!=typeof e||"true"!==e))&&qa(Ka),function(e){window.addEventListener(cr.NOTIF_ACCESS_DENIED,e)}((()=>{qa(Ka)}))}}))}var Ja,Xa;!function(e){e.BACKDROP_CONTAINER="najva-backdrop-container",e.HIDDEN_IN_BACKDROP="najva-hidden-in-backdrop",e.BACKDROP_TEXT_CONTAINER_DOWN="najva-backdrop-text-container-down",e.BACKDROP_TEXT="najva-backdrop-text"}(Ja||(Ja={})),function(e){e.BACKDROP="najva-backdrop",e.BACKDROP_CLOSE="najva-backdrop-close",e.BACKDROP_TEXT_CONTAINER="najva-backdrop-text-container",e.BACKDROP_ARROW="najva-backdrop-arrow",e.DENIED_HELP_BACKDROP="najva-denied-help-backdrop",e.DENIED_HELP_CLOSE="najva-denied-help-close",e.DENIED_HELP_IMAGE="najva-denied-help-img"}(Xa||(Xa={}));let Za=!1;function Qa(){if(Za)return;Za=!0;Qo(`\n    #${Xa.BACKDROP}{\n        position:fixed;\n        top:0;\n        left:0;\n        width: 100vw;\n        height: 100vh;\n        z-index: ${Jo};\n        background-color: #000;\n        opacity: 0.8;\n    }\n\n    #${Xa.BACKDROP_TEXT_CONTAINER}{\n        direction: rtl;\n        display: flex;\n        max-width: 600px;\n        z-index: 2147483645;\n        margin: 200px auto;\n        position: fixed;\n        right: 0;\n        left: 0;\n        top: 0;\n    }\n\n    #${Xa.BACKDROP_TEXT_CONTAINER}.${Ja.BACKDROP_TEXT_CONTAINER_DOWN}{\n        margin: 250px auto;\n    }\n\n    #${Xa.BACKDROP_TEXT_CONTAINER} .${Ja.BACKDROP_TEXT}{\n        direction: rtl;\n        z-index: ${Jo};\n        font-size: 30px;\n        font-weight: bold;\n        line-height: normal;\n        color: white;\n        font-family: inherit;\n        text-align: right;\n        display: flex;\n        align-items: flex-end;\n        max-width: 520px;\n        padding-left: 20px;\n    }\n\n    .${Ja.BACKDROP_TEXT_CONTAINER_DOWN} .${Ja.BACKDROP_TEXT}{\n        align-items: flex-start;\n    }\n\n    #${Xa.BACKDROP_ARROW} {\n        flex-basis: 80px;\n        height: 160px;\n        background-size: contain;\n        transform: rotate(170deg);\n        background-image: url(${Nr.STATIC_IMAGES}/arrow-white.png);\n        background-repeat: no-repeat;\n    }\n\n    .${Ja.BACKDROP_TEXT_CONTAINER_DOWN} #${Xa.BACKDROP_ARROW} {\n        transform: rotate(0deg);\n    }\n\n    #${Xa.BACKDROP_CLOSE} {\n        position: fixed;\n        right: 20px;\n        top: 30px;\n        width: 55px;\n        height: 32px;\n        cursor: pointer;\n        z-index: ${Jo+1}\n    }\n\n    #${Xa.BACKDROP_CLOSE}:before,#${Xa.BACKDROP_CLOSE}:after  {\n        position: fixed;\n        right: 48px;\n        content: " ";\n        height: 33px;\n        width: 3px;\n        background-color: #ffffff;\n    }\n\n    #${Xa.BACKDROP_CLOSE}:before {\n        transform: rotate(45deg);\n    }\n\n    #${Xa.BACKDROP_CLOSE}:after {\n        transform: rotate(-45deg);\n    }\n\n    #${Xa.DENIED_HELP_BACKDROP}{\n        position: fixed;\n        color: white;\n        font-family: inherit;\n        z-index:${Jo};\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        top: 30px;\n        margin: auto;\n        left: 0;\n        right: 0;\n    }\n\n    #${Xa.DENIED_HELP_BACKDROP} p {\n        direction: rtl;\n        font-size: 1.5em;\n        font-weight: bold;\n    }\n\n    #${Xa.DENIED_HELP_BACKDROP} #${Xa.DENIED_HELP_CLOSE} {\n        color: white;\n        border: 1px solid white;\n        border-radius: 10px;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n    }\n\n    .${Ja.HIDDEN_IN_BACKDROP}{\n        display: none;\n    }\n\n    @media screen and (max-width: 767px) {\n      #${Xa.DENIED_HELP_BACKDROP} #${Xa.DENIED_HELP_IMAGE} {\n          width: 90%;\n      }\n\n      #${Xa.DENIED_HELP_BACKDROP} p {\n          text-align: justify;\n          padding: 1em;\n      }\n    }\n  `)}var es,ts;function ns(){const e=document.getElementById(ts.POWERED_BY);e&&e.classList.add(Go)}!function(e){e.POWERED_BY="najva-powered-by",e.POWERED_BY_UP="najva-powered-by-up"}(es||(es={})),function(e){e.POWERED_BY="najva-powered-by"}(ts||(ts={}));let is=!1;function os(e){if(e.notification_button_enabled)return;const t=document.querySelector(`.${Ja.BACKDROP_CONTAINER}`);if(!t)return;!function(){if(is)return;is=!0,Qo(`\n  .${Ja.BACKDROP_CONTAINER} .${es.POWERED_BY} {\n        direction: rtl;\n        display: flex;\n        flex-direction: row;\n        color: white;\n        width: 165px;\n        font-size: 12px;\n        align-items: center;\n        font-family: inherit;\n        cursor: pointer;\n        z-index: ${Jo};\n        position: fixed;\n        bottom: 10px;\n        right: 10px;\n    }\n\n    .${Ja.BACKDROP_CONTAINER} .${es.POWERED_BY} img {\n        width: 50px;\n        height: 50px;\n        margin-right: -5px;\n        margin-top: -13px;\n\n    }\n    .${Ja.BACKDROP_CONTAINER} .${es.POWERED_BY}.${es.POWERED_BY_UP}{\n        top: 10px;\n        bottom: unset;\n        width: unset;\n    }\n  `)}();const n=tr(`\n  <div id="${ts.POWERED_BY}" class="${es.POWERED_BY} ${ua()?es.POWERED_BY_UP:""}">\n      <span>طراحی‌شده توسط</span>\n      <img src="${Nr.STATIC_IMAGES}/najva-flag-typography-white.svg">\n    </div>\n  `);n&&t.appendChild(n);const i=document.getElementById(ts.POWERED_BY);i&&i.addEventListener("click",(()=>{window.open("https://najva.com")}))}const rs="najva-backdrop-close";let as={show_backdrop:!1,show_backdrop_mobile:!1,backdrop_text:"",website_policy:{notification_queue:1,notification_button_enabled:!1,use_najva_firebase_account:!1,notification_countdown:1,notification_blocked:!1,recommender_permission:!1,tag_enabled:!1,email_enabled:!1}};function ss(){const e=Sa();if(e){const t=e.split(".")[0];if(function(){const e=_a();return!!e&&"edge"===e.name}()&&Number(t)<=18)return!0}return!1}function cs(){return document.querySelector(`.${Ja.BACKDROP_CONTAINER}`)}function ds(){const e=cs();e&&e.classList.add(Ja.HIDDEN_IN_BACKDROP)}function us(){const e=cs();if(e)e.classList.remove(Ja.HIDDEN_IN_BACKDROP);else{const e=tr(`<div class="${Ja.BACKDROP_CONTAINER}">\n        <div id=${Xa.BACKDROP}></div>\n      </div>`);e&&document.body.appendChild(e)}}function ls(){Wa(Ja.HIDDEN_IN_BACKDROP)}function ps(){ds(),ns(),function(){const e=document.getElementById(Xa.BACKDROP_TEXT_CONTAINER);e&&e.classList.add(Ja.HIDDEN_IN_BACKDROP)}(),function(){const e=document.getElementById(Xa.BACKDROP_CLOSE);e&&e.classList.add(Ja.HIDDEN_IN_BACKDROP)}(),za(Ja.HIDDEN_IN_BACKDROP)}function fs(){ua()?(ds(),ns()):ps()}function hs(){const e=cs();if(!e)return;let t=document.getElementById(Xa.BACKDROP_CLOSE);if(t)t.classList.remove(Ja.HIDDEN_IN_BACKDROP);else{const t=tr(`<div id=${Xa.BACKDROP_CLOSE}></div>`);t&&e.appendChild(t)}t=document.getElementById(Xa.BACKDROP_CLOSE),t&&t.addEventListener("click",(()=>{fs(),function(){const e=new CustomEvent(rs);window.dispatchEvent(e)}()}))}function ms(){Qa(),us(),os(as.website_policy),hs(),function(){const e=cs();if(!e)return;const t=document.getElementById(Xa.BACKDROP_TEXT_CONTAINER);if(t)t.classList.remove(Ja.HIDDEN_IN_BACKDROP);else{const t=tr(`\n    <div id="${Xa.BACKDROP_TEXT_CONTAINER}">\n        <span class=${Ja.BACKDROP_TEXT}>\n          ${as.backdrop_text?as.backdrop_text:""}\n        </span>\n        <div id=${Xa.BACKDROP_ARROW}></div>\n    </div>\n      `);t&&e.appendChild(t);const n=document.querySelector(`#${Xa.BACKDROP_TEXT_CONTAINER}`);n&&ss()&&n.classList.add(Ja.BACKDROP_TEXT_CONTAINER_DOWN)}}()}function vs(){(function(){const e=Sa();if(e){const t=Number(e.split(".")[0]);if(Ia()&&t<77&&t>71)return!1}return!0})()&&(as.show_backdrop||as.show_backdrop_mobile)&&(ua()&&as.show_backdrop_mobile?(Qa(),us(),os(as.website_policy),ls()):!ua()&&as.show_backdrop&&(ms(),ls()))}function gs(e){as=e,function(e){window.addEventListener(cr.NOTIF_PROMPT_OPEN,e)}(vs),function(e){window.addEventListener(cr.NOTIF_PROMPT_CLOSE,e)}(fs)}var bs,ws,_s,ys;function Es(e){return 0===e.indexOf("/")?e.slice(1):e}function Is(e){return e?decodeURIComponent(e):""}function Ss(e){return"/"===e?"":"/"===e[e.length-1]?e.slice(0,e.length-1):e}function Ds(e){return Es(Is(window.location.pathname)).startsWith(Is(e))}function Ts(e){return Ss(Is(window.location.pathname)).endsWith(Is(e))}function Os(e){const t=Is(e);return Is(window.location.pathname).includes(t)}function As(e){const t=new RegExp(e);return Is(window.location.pathname).search(t)>-1}function Ls(e){return e===Ss(Es(Is(window.location.pathname)))}function ks(e,t){return e===ws.Contains?Os(t):e===ws.EndsWith?Ts(t):e===ws.MatchRegex?As(t):e===ws.NotContains?!Os(t):e===ws.NotEndsWith?function(e){return!Ts(e)}(t):e===ws.NotMatchRegex?!As(t):e===ws.NotStartsWith?function(e){return!Ds(e)}(t):e===ws.StartsWith?Ds(t):e===ws.EqualsTo?Ls(t):e===ws.NotEqualsTo&&!Ls(t)}function Ns(e,t){return!t||(0===t.length||(e===bs.And?t.reduce(((e,t)=>e&&ks(t.condition,t.value)),!0):t.reduce(((e,t)=>e||ks(t.condition,t.value)),!1)))}!function(e){e[e.And=0]="And",e[e.Or=1]="Or"}(bs||(bs={})),function(e){e[e.EqualsTo=0]="EqualsTo",e[e.StartsWith=1]="StartsWith",e[e.EndsWith=2]="EndsWith",e[e.Contains=3]="Contains",e[e.MatchRegex=4]="MatchRegex",e[e.NotEqualsTo=5]="NotEqualsTo",e[e.NotStartsWith=6]="NotStartsWith",e[e.NotEndsWith=7]="NotEndsWith",e[e.NotContains=8]="NotContains",e[e.NotMatchRegex=9]="NotMatchRegex"}(ws||(ws={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(_s||(_s={})),function(e){e[e.Button=0]="Button",e[e.Link=1]="Link"}(ys||(ys={}));const Cs="000",Ps="00abbb";var xs;!function(e){e.CUSTOM_LINK_CONTAINER="najva-custom-link-container",e.CUSTOM_LINK="najva-custom-link",e.CUSTOM_LINK_LINK="najva-custom-link-link",e.CUSTOM_LINK_BUTTON="najva-custom-link-button",e.CUSTOM_LINK_LARGE="najva-custom-link-large",e.CUSTOM_LINK_MEDIUM="najva-custom-link-medium",e.CUSTOM_LINK_SMALL="najva-custom-link-small",e.DISABLED="najva-custom-link-disabled"}(xs||(xs={}));let js=!1;var Ms=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let Bs=null,Rs=[];function $s(e){return Ms(this,void 0,void 0,(function*(){const n=yield function(){return X(this,void 0,void 0,(function*(){try{const e=(yield he()).transaction(J,"readwrite"),t=yield e.store.getAll();yield e.done;const n={};return t.forEach((e=>{n[e.key]=e.value})),n}catch(e){throw u(t.DB_READ_FAILED,{key:"allKeys",objectStoreName:J,browserErrorMessage:e.message,error:e})}}))}();if(!e||!n)return!1;const i=Object.keys(e);if(0===i.length)return!1;let o=!0;return i.forEach((t=>{(!n[t]||n[t]&&n[t]!==e[t])&&(o=!1)})),o}))}function Us(e){return Ms(this,void 0,void 0,(function*(){const t=yield $s(e.tags),n=yield Wr();return e.allow_unsubscribe&&n&&t}))}function Fs(e,t){return Ms(this,void 0,void 0,(function*(){t.classList.add(xs.CUSTOM_LINK),t.classList.add(Ho),e&&((yield $s(e.tags))&&t.classList.add(xs.DISABLED),function(e,t){t===ys.Button?e.classList.add(xs.CUSTOM_LINK_BUTTON):e.classList.add(xs.CUSTOM_LINK_LINK)}(t,e.type),function(e,t){t===_s.Small&&e.classList.add(xs.CUSTOM_LINK_SMALL),t===_s.Medium?e.classList.add(xs.CUSTOM_LINK_MEDIUM):e.classList.add(xs.CUSTOM_LINK_LARGE)}(t,e.size),function(e,t,n,i){n&&(e.style.color=`#${n}`),t===ys.Button&&(e.style.backgroundColor=`#${i}`)}(t,e.type,e.text_color,e.background_color))}))}function Ks(e){return Ms(this,void 0,void 0,(function*(){const t=e.container_id,n=document.getElementById(t);if(n&&(!(yield $s(e.tags))||(yield Us(e)))){for(;n.lastChild;)n.removeChild(n.lastChild);if(Ns(e.urls.operation,e.urls.matchings)){const t=tr(`<button>${yield function(e){return Ms(this,void 0,void 0,(function*(){let t="";return t=(yield Us(e))?e.unsubscribe_text?e.unsubscribe_text:"unsubscribe":e.subscribe_text?e.subscribe_text:"subscribe",t}))}(e)}</button>`);t&&(n.appendChild(t),yield function(e,t){return Ms(this,void 0,void 0,(function*(){(yield Us(e))?t.addEventListener("click",(()=>Ms(this,void 0,void 0,(function*(){t.disabled=!0;try{yield function(e){return Ms(this,void 0,void 0,(function*(){e.tags&&(yield Promise.all(Object.keys(e.tags).map((e=>da(e)))))}))}(e),yield Ks(e),t.disabled=!1}catch(e){t.disabled=!1}})))):t.addEventListener("click",(function(){return Ms(this,void 0,void 0,(function*(){t.disabled=!0;try{yield Kr(),yield function(e){return Ms(this,void 0,void 0,(function*(){if(e.tags&&Object.keys(e.tags).length>0&&(yield sa(e.tags),e.welcome_notification_enabled&&Bs)){const{title:t,body:n,icon:i,image:o,url:r,actions:a}=e.welcome_notification,s={title:t,body:n,icon:i,image:o,buttons:JSON.stringify(a.map(((e,t)=>({title:e.title,onclick_action:0,button_id:t,icon_url:"",complete_url:e.url})))),complete_url:r,tag:"",pusher:"",require_interaction:"",light_up_screen:"",notification_id:"",priority:"",url:"",expireTime:"",api_key:"",onclick_action:"",website_id:"",is_report_enabled:"",najva_token:""},{title:c,options:d}=Er(s,"",!1);yield Bs.showNotification(c,d)}}))}(e),e.allow_unsubscribe?yield Ks(e):this.remove(),t.disabled=!1}catch(e){t.disabled=!1}}))}))}))}(e,t),yield Fs(e,t))}}}))}function Ws(){return Ms(this,void 0,void 0,(function*(){!function(){if(js)return;js=!0,Qo(`\n .${xs.CUSTOM_LINK_CONTAINER}{\n    display: inline-block;\n  }\n\n.${xs.CUSTOM_LINK} {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family:inherit;\n  border: unset;\n  background-color: unset;\n  font-family: inherit;\n  color: #${Cs}\n}\n\n\n.${xs.CUSTOM_LINK}:active,.${xs.CUSTOM_LINK}:focus  {\n  border: none;\n  outline: none;\n}\n\n.${xs.CUSTOM_LINK}.${Ho} {\n  display: inline-block;\n  transition: all .1s;\n}\n\n.${Ho}{\n  font-size: medium;\n  line-height: 1;\n  direction: ltr;\n  text-align: left;\n  text-align: start;\n  font-style: normal;\n  font-weight: 400;\n  text-decoration: none;\n  list-style-type: disc\n}\n\n.${xs.CUSTOM_LINK_LINK}{\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 600\n}\n\n.${xs.CUSTOM_LINK_LINK}:hover{\n  text-decoration: underline\n}\n\n.${xs.CUSTOM_LINK_BUTTON}{\n  text-transform: uppercase;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    font-weight: 600;\n    border-radius: 4px;\n    box-shadow: 1px 1px 1px grey;\n    cursor: pointer;\n    background-color:#${Ps}\n}\n\n.${xs.CUSTOM_LINK_BUTTON}:hover{\n  text-decoration: none;\n  box-shadow: 2px 3px 4px grey\n}\n\n.${xs.CUSTOM_LINK}.${xs.CUSTOM_LINK_BUTTON}.${xs.CUSTOM_LINK_SMALL}{\n  font-size: 13px;\n  padding: 4px 12px;\n}\n\n.${xs.CUSTOM_LINK}.${xs.CUSTOM_LINK_BUTTON}.${xs.CUSTOM_LINK_MEDIUM}{\n  font-size: 15px;\n  padding: 8px 16px;\n}\n\n.${xs.CUSTOM_LINK}.${xs.CUSTOM_LINK_BUTTON}.${xs.CUSTOM_LINK_LARGE}{\n  font-size: 18px;\n  padding: 12px 20px;\n}\n\n\n.${xs.CUSTOM_LINK}.${xs.CUSTOM_LINK_LINK}.${xs.CUSTOM_LINK_SMALL}{\n  font-size: 13px;\n}\n\n.${xs.CUSTOM_LINK}.${xs.CUSTOM_LINK_LINK}.${xs.CUSTOM_LINK_MEDIUM}{\n  font-size: 15px;\n}\n\n.${xs.CUSTOM_LINK}.${xs.CUSTOM_LINK_LINK}.${xs.CUSTOM_LINK_LARGE}{\n  font-size: 18px;\n}\n\n.${xs.DISABLED} {\n  opacity: 0.5;\n}\n  `)}(),Rs.forEach((e=>Ms(this,void 0,void 0,(function*(){yield Ks(e)}))))}))}function zs(e,t){Rs=e,Bs=t,Rs&&0!==Rs.length&&Ws()}var Hs=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function Gs(e){return Hs(this,void 0,void 0,(function*(){return!(yield Aa())&&(!(e&&!en.messaging.isSupported())&&!(!e&&!(self?"PushManager"in self&&"Notification"in self&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&PushSubscription.prototype.hasOwnProperty("getKey"))))}))}var Vs=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function qs(e){return Vs(this,void 0,void 0,(function*(){try{e.website_policy.tag_enabled&&(yield function(e,t){return new Promise(((n,i)=>{const o=document.createElement("script");o.type="text/javascript",o.src=e,o.async=!0,o.onload=n,o.onerror=i,document[t].appendChild(o)}))}(`https://cdn.yektanet.com/rg_woebegone/scripts_v4/${e.najva_settings.app_id}/complete.js?v=${a()}`,"head"))}catch(n){u(t.LOAD_YEKTANET_ANALYTICS_SCRIPT_FAILED,{appId:(null==e?void 0:e.najva_settings.app_id)||"failed to load config --\x3e appId: -",error:n})}}))}const Ys="email";var Js;!function(e){e.Email="email",e.Phone="phone",e.Attribute="attribute",e.WebsiteVisitCount="website-visit-count",e.LastCookieSet="last-cookie-set",e.LastTimeCookieMatched="last-time-cookie-matched",e.LastShownTime="last-shown-time"}(Js||(Js={}));var Xs=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let Zs;function Qs(){return Xs(this,void 0,void 0,(function*(){return Zs||(Zs=yield k("najva-email-subscription-database",1,{upgrade(e){e.createObjectStore(Ys,{keyPath:"name"})}})),Zs}))}function ec(e){return Xs(this,void 0,void 0,(function*(){try{const t=(yield Qs()).transaction(Ys,"readwrite"),n=yield t.store.get(e);return yield t.done,n?n.value:n}catch(n){throw u(t.DB_READ_FAILED,{key:e,objectStoreName:Ys,browserErrorMessage:n.message,error:n})}}))}function tc(e){return Xs(this,void 0,void 0,(function*(){try{const t=(yield Qs()).transaction(Ys,"readwrite");(yield t.store.get(e.name))?yield t.store.put(e):yield t.store.add(e),yield t.done}catch(n){throw u(t.DB_UPDATE_FAILED,{key:e.name,value:e.value,objectStoreName:Ys,browserErrorMessage:n.message,error:n})}}))}var nc;function ic(){window.dispatchEvent(new CustomEvent("najva-email-subscription-end"))}!function(e){e[e.close=0]="close",e[e.success=1]="success",e[e.fail=2]="fail"}(nc||(nc={}));var oc=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const rc="najva-email-cookie_matching_pixel";function ac(){return oc(this,void 0,void 0,(function*(){if(!document.querySelector(`#${rc}`)){const e=tr(`\n      <img \n        id="${rc}" \n        alt="${rc}" \n        style="display: none!important;" \n        src="https://ua.yektanet.com/pixel?id=njv-email"\n      />\n    `);e&&document.body.appendChild(e),yield tc({name:Js.LastTimeCookieMatched,value:(new Date).toISOString()})}}))}function sc(){return oc(this,void 0,void 0,(function*(){if(!(yield function(){return oc(this,void 0,void 0,(function*(){const e=yield ec(Js.LastTimeCookieMatched);return!!e&&nr((new Date).getTime(),new Date(e).getTime())<30}))}())){Math.floor(100*Math.random())<10&&(yield ac())}!function(e){window.addEventListener("najva-email-subscription-end",e)}((()=>oc(this,void 0,void 0,(function*(){yield ac()}))))}))}var cc=n(5072),dc=n.n(cc),uc=n(4673),lc={insert:"head",singleton:!1};dc()(uc.A,lc);uc.A.locals;var pc=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let fc=!1;function hc(e){function n(n){return pc(this,void 0,void 0,(function*(){fc=!0;try{if(!n||"object"!=typeof n||0===Object.keys(n).length)throw new Error(`Unexpected input: ${n}`);Object.keys(n).forEach((e=>{if(e!==Js.Email&&e!==Js.Phone&&e!==Js.Attribute)throw new Error(`Unexpected field name: ${e}. Please provide a valid field name: ${Js.Email} | ${Js.Phone} | ${Js.Attribute}`);const t=n[e];if(!t)throw new Error(`Unexpected value for field: ${e}. ${h.required.en}`);if(e!==Js.Attribute&&!function(e,t){switch(e){case f.email:return/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(p(t));case f.phone:return/^(0|\+98|0098)?9\d{9}$/.test(p(t));case f.required:return Boolean(t);default:throw new Error(`please provide a valide validationType: ${Object.keys(h).map((e=>e)).join(" | ")}`)}}(f[e],t.toString()))throw new Error(`Unexpected field value. ${h[e].en}`)}));(yield Object.keys(n).reduce(((e,t)=>pc(this,void 0,void 0,(function*(){const i=yield e;if(!i){const e=yield ec(t);return t!==Js.Attribute?Promise.resolve(i||n[t]!==e):Promise.resolve(i||JSON.stringify(n[t])!==JSON.stringify(e))}return e}))),Promise.resolve(!1)))&&(yield o(`https://email.najva.com/v1/user-management/emails/identify/${e.najva_settings.account_id}/`,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"},credentials:"include"}).then((()=>Promise.all([...Object.keys(n).map((e=>{const t=n[e];return t&&e!==Js.Attribute?tc({name:e,value:t.toString()}):t&&"string"!=typeof t?tc({name:Js.Attribute,value:t}):Promise.resolve()})),tc({name:Js.LastCookieSet,value:(new Date).toISOString()})]))).then(ic).catch((e=>{throw u(t.IDENTIFY_EMAIL_SUBSCRIBER_FAILED,{error:e})}))),fc=!1}catch(e){throw fc=!1,u(t.ADD_EMAIL_SUBSCRIBER_IDENTIFIER_FAILED,{error:e})}}))}return window.dispatchEvent(new CustomEvent("najva-subscriber-identify",{detail:n})),window.Najva=Object.assign(Object.assign({},window.Najva),{identifyEmailSubscriber:n}),n}let mc=null,vc=null;function gc(){mc&&(mc.style.display="none"),vc&&(vc.style.display="none")}const bc="https://van.najva.com";function wc(e){return pc(this,void 0,void 0,(function*(){try{if(yield function(){return pc(this,void 0,void 0,(function*(){let e=yield ec(Js.WebsiteVisitCount);e||(e=0),e=parseInt(e.toString(),10),yield tc({name:Js.WebsiteVisitCount,value:e+1})}))}(),yield function(e){return pc(this,void 0,void 0,(function*(){const t=yield e.email_settings.fields.reduce(((e,t)=>pc(this,void 0,void 0,(function*(){const n=yield e;if(t.key===Js.Email){const e=yield ec(Js.Email);return Promise.resolve(Boolean(e)&&n)}if(t.key===Js.Phone){const e=yield ec(Js.Phone);return Promise.resolve(Boolean(e)&&n)}return e}))),Promise.resolve(!0)),n=yield ec(Js.LastShownTime),i=n?nr((new Date).getTime(),new Date(n).getTime()):0;return!(!e.website_policy.email_enabled||fc||t||e.email_settings.affected_urls&&!Ns(e.email_settings.affected_urls.operation,e.email_settings.affected_urls.url_matchings)||n&&!(i>(e.email_settings.show_interval||e.najva_settings.dismiss_cookie_days)))}))}(e)){const n=yield ec(Js.WebsiteVisitCount);yield Pr(e.email_settings.show_condition,n?Number(n):1),yield function(e){return pc(this,void 0,void 0,(function*(){let n="",i="";try{i=(yield ec(Js.Email))||"",n=(yield ec(Js.Phone))||""}catch(e){}const o=tr(`\n    <iframe \n      title="Najva Email Subscription Form"\n      src="https://van.najva.com/static/cdn/email/email-iframe.html?v=${a()}"\n      name="najva-email"\n    ></iframe>\n  `);if(o.onload=function(){const t=document.getElementById("najva-email-container"),r=document.getElementById("najva-email-backdrop");o.contentWindow&&(o.contentWindow.postMessage({config:e,phone:n,email:i,shouldValidate:!1},bc),r&&t&&(t.style.display="block",r.style.display="block"))},e.iframe_container?vc=document.querySelector(e.iframe_container):(mc=tr('<div id="najva-email-backdrop" class="najva-email-backdrop" style="display: none"></div>'),mc.onclick=gc,vc=tr('<div id="najva-email-container" class="najva-email-container" style="display: none"></div>'),vc.appendChild(o)),!vc)throw u(t.FIND_EMAIL_IFRAME_CONTAINER_FAILED,void 0);vc.appendChild(o),!e.side_img&&!e.background_img||e.iframe_container||vc.style.setProperty("max-width","700px","important"),mc&&document.body.appendChild(mc),document.body.appendChild(vc)}))}(e.email_settings),yield tc({name:Js.LastShownTime,value:(new Date).toISOString()}),function(){window.addEventListener("message",(e=>pc(this,void 0,void 0,(function*(){var t,n;if(e.origin===bc)switch(null===(t=e.data)||void 0===t?void 0:t.action){case nc.close:gc();break;case nc.success:{const t=null===(n=e.data)||void 0===n?void 0:n.submitedData;yield Promise.all([tc({name:Js.LastCookieSet,value:(new Date).toISOString()}),...Object.keys(t).map((e=>{const n=t[e];return n?e!==Js.Attribute?tc({name:e,value:n.toString()}):tc({name:Js.Attribute,value:n}):Promise.resolve()}))]),ic();break}case nc.fail:{const{error:t,errorCode:n}=e.data;throw u(n,{error:t})}}}))))}()}e.website_policy.email_enabled&&!fc&&(yield function(e){return pc(this,void 0,void 0,(function*(){const t=yield ec(Js.LastCookieSet);if(t&&nr((new Date).getTime(),new Date(t).getTime())>30){const t=hc(e),[n,i,o]=yield Promise.all([ec(Js.Email),ec(Js.Phone),ec(Js.Attribute)]);t({email:n,phone:i,attribute:o||{}})}}))}(e)),yield sc()}catch(e){throw u(t.INIT_EMAIL_FAILED,{error:e})}}))}var _c=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function yc(e){return _c(this,void 0,void 0,(function*(){const n=e.najva_settings.native_permission;if(!(yield Gs(n)))return;yield function(e){return le(this,void 0,void 0,(function*(){fe=e,yield he();const t=yield ve(g.HasMigrated);"string"==typeof t&&"true"!==t&&(yield ue(fe.website_id,fe.campaign_id))}))}({campaign_id:e.najva_settings.campaign_id,website_id:e.najva_settings.website_id.toString(),messaging_sender_id:e.messaging_sender_id});let i=null;n&&(i=yield Ko(),function(e){zo=e;try{zo.isNativeMode&&en.initializeApp({apiKey:"AIzaSyDlgao6nGaw7RsZgjskbXsIhl0mwhOjZz4",authDomain:"push-notif-system.firebaseapp.com",databaseURL:"https://push-notif-system.firebaseio.com",projectId:"push-notif-system",storageBucket:"push-notif-system.appspot.com",messagingSenderId:"334645784830",appId:"1:334645784830:web:f9460dce5c11960c97f5af"}),window.localStorage.removeItem("najva-reload-counter")}catch(e){throw u(t.FIREBASE_INITIALIZATION_FAILED,{firebaseErrorMessage:e.message,error:e})}}({messaging_sender_id:e.messaging_sender_id,isNativeMode:n}),kr({website_id:e.najva_settings.website_id,api_key:e.najva_settings.api_key,isNativeMode:n},i),gs({show_backdrop:e.najva_settings.show_backdrop,show_backdrop_mobile:e.najva_settings.show_backdrop_mobile,backdrop_text:e.najva_settings.backdrop_text,website_policy:e.website_policy})),yield function(e){return na(this,void 0,void 0,(function*(){ia=e,(yield Wr())&&oa()}))}({website_id:e.najva_settings.website_id.toString(),campaign_id:e.najva_settings.campaign_id.toString(),api_key:e.najva_settings.api_key}),yield function(e){return Ur(this,void 0,void 0,(function*(){Fr=e,Fr.isNativeMode?yield $r({website_id:Fr.website_id,api_key:Fr.api_key,without_popup:Fr.without_popup,request_permission:Fr.request_permission}):yield ar({website_id:Fr.website_id,api_key:Fr.api_key,najva_subdomain:Fr.najva_subdomain})}))}({website_id:e.najva_settings.website_id.toString(),campaign_id:e.najva_settings.campaign_id,api_key:e.najva_settings.api_key,najva_subdomain:e.najva_settings.najva_subdomain,without_popup:e.najva_settings.without_popup,request_permission:e.najva_settings.request_permission,isNativeMode:n}),er({extra_css:e.najva_settings.extra_css}),Vr({najva_subdomain:e.najva_settings.najva_subdomain,website_id:e.najva_settings.website_id.toString()}),yield ta({location_permission:e.najva_settings.location_permission,najva_subdomain:e.najva_settings.najva_subdomain,isNativeMode:n}),function(e){aa=e}({website_id:e.najva_settings.website_id}),Ya({show_bell:e.najva_settings.show_bell,show_bell_in_mobile:e.najva_settings.show_bell_in_mobile,bell_direction:e.najva_settings.bell_direction,tooltip_direction:e.najva_settings.tooltip_direction,bell_color_hover:e.najva_settings.bell_color_hover,bell_color:e.najva_settings.bell_color,bell_tooltip:e.najva_settings.bell_tooltip,without_popup:e.najva_settings.without_popup,isNativeMode:n}),zs(e.custom_links?e.custom_links:[],i),function(e){ka(this,void 0,void 0,(function*(){if(Na=e,yield Ma()){const e=yield ve(g.VisitCount);yield Pr(Na.request_permission,e?Number(e):1),yield ja()}}))}({request_icon:e.najva_settings.request_icon,request_text:e.najva_settings.request_text,request_description:e.najva_settings.request_description,denied_text:e.najva_settings.denied_text,accept_text:e.najva_settings.accept_text,without_popup:e.najva_settings.without_popup,with_popup:e.najva_settings.with_popup,dismiss_cookie_days:e.najva_settings.dismiss_cookie_days,request_permission:e.najva_settings.request_permission,isNativeMode:n})}))}!function(){_c(this,void 0,void 0,(function*(){const e=yield function(){return we(this,void 0,void 0,(function*(){return _e=yield ye(),_e}))}();hc(e),wc(e).catch(console.error),qs(e).catch(console.error),yield yc(e);const t={subscribe:Kr,hasSubscribed:Wr,addAttribute:sa,getAttributes:ca,deleteAttribute:da};window.Najva=Object.assign(Object.assign({},window.Najva),t),window.dispatchEvent(new CustomEvent("najva-execution-end",{bubbles:!0,cancelable:!1}))}))}()})()})();