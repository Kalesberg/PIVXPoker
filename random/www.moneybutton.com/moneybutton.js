/**
 * Copyright 2019 Fermatted Drives Limited
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var moneyButton=function(t){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),e=new RegExp("(%[a-f0-9]{2})+","gi");function o(t,n){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;n=n||1;var e=t.slice(0,n),r=t.slice(n);return Array.prototype.concat.call([],o(e),o(r))}function r(t){try{return decodeURIComponent(t)}catch(s){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(n);return t}}var s=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(n){return function(t){for(var n={"%FE%FF":"��","%FF%FE":"��"},o=e.exec(t);o;){try{n[o[0]]=decodeURIComponent(o[0])}catch(t){var s=r(o[0]);s!==o[0]&&(n[o[0]]=s)}o=e.exec(t)}n["%C2"]="�";for(var i=Object.keys(n),a=0;a<i.length;a++){var c=i[a];t=t.replace(new RegExp(c,"g"),n[c])}return t}(t)}},i=(t,n)=>{if("string"!=typeof t||"string"!=typeof n)throw new TypeError("Expected the arguments to be of type `string`");if(""===n)return[t];const e=t.indexOf(n);return-1===e?[t]:[t.slice(0,e),t.slice(e+n.length)]};function a(t,n){return n.encode?n.strict?encodeURIComponent(t).replace(/[!'()*]/g,t=>"%".concat(t.charCodeAt(0).toString(16).toUpperCase())):encodeURIComponent(t):t}function c(t,n){return n.decode?s(t):t}function u(t){const n=t.indexOf("#");return-1!==n&&(t=t.slice(0,n)),t}function l(t){const n=(t=u(t)).indexOf("?");return-1===n?"":t.slice(n+1)}function p(t,n){return n.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!n.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function d(t,n){const e=function(t){let n;switch(t.arrayFormat){case"index":return(t,e,o)=>{n=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),n?(void 0===o[t]&&(o[t]={}),o[t][n[1]]=e):o[t]=e};case"bracket":return(t,e,o)=>{n=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),n?void 0!==o[t]?o[t]=[].concat(o[t],e):o[t]=[e]:o[t]=e};case"comma":return(t,n,e)=>{const o="string"==typeof n&&n.split("").indexOf(",")>-1?n.split(","):n;e[t]=o};default:return(t,n,e)=>{void 0!==e[t]?e[t]=[].concat(e[t],n):e[t]=n}}}(n=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},n)),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;for(const r of t.split("&")){let[t,s]=i(n.decode?r.replace(/\+/g," "):r,"=");s=void 0===s?null:c(s,n),e(c(t,n),s,o)}for(const t of Object.keys(o)){const e=o[t];if("object"==typeof e&&null!==e)for(const t of Object.keys(e))e[t]=p(e[t],n);else o[t]=p(e,n)}return!1===n.sort?o:(!0===n.sort?Object.keys(o).sort():Object.keys(o).sort(n.sort)).reduce((t,n)=>{const e=o[n];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?t[n]=function t(n){return Array.isArray(n)?n.sort():"object"==typeof n?t(Object.keys(n)).sort((t,n)=>Number(t)-Number(n)).map(t=>n[t]):n}(e):t[n]=e,t},Object.create(null))}var m={extract:l,parse:d,stringify:(t,n)=>{if(!t)return"";const e=function(t){switch(t.arrayFormat){case"index":return n=>(e,o)=>{const r=e.length;return void 0===o||t.skipNull&&null===o?e:null===o?[...e,[a(n,t),"[",r,"]"].join("")]:[...e,[a(n,t),"[",a(r,t),"]=",a(o,t)].join("")]};case"bracket":return n=>(e,o)=>void 0===o||t.skipNull&&null===o?e:null===o?[...e,[a(n,t),"[]"].join("")]:[...e,[a(n,t),"[]=",a(o,t)].join("")];case"comma":return n=>(e,o)=>null==o||0===o.length?e:0===e.length?[[a(n,t),"=",a(o,t)].join("")]:[[e,a(o,t)].join(",")];default:return n=>(e,o)=>void 0===o||t.skipNull&&null===o?e:null===o?[...e,a(n,t)]:[...e,[a(n,t),"=",a(o,t)].join("")]}}(n=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},n)),o=Object.assign({},t);if(n.skipNull)for(const t of Object.keys(o))void 0!==o[t]&&null!==o[t]||delete o[t];const r=Object.keys(o);return!1!==n.sort&&r.sort(n.sort),r.map(o=>{const r=t[o];return void 0===r?"":null===r?a(o,n):Array.isArray(r)?r.reduce(e(o),[]).join("&"):a(o,n)+"="+a(r,n)}).filter(t=>t.length>0).join("&")},parseUrl:(t,n)=>({url:u(t).split("?")[0]||"",query:d(l(t),n)})};function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(Object(e),!0).forEach((function(n){y(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function g(t){var n=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}class _{constructor(t,n="*",e=""){y(this,"start",()=>{window.addEventListener("message",this._onMessageReceived,!1)}),y(this,"enableDeliver",()=>{this._deliverMessages=!0,this._pendingMessages.forEach(t=>this.targetWindow.postMessage(t,"*")),this._pendingMessages=[]}),y(this,"finalize",()=>{window.removeEventListener("message",this._onMessageReceived,!1)}),y(this,"subscribe",(t,n)=>{this.handlers[t]=n}),y(this,"unsuscribe",t=>{delete this.handlers[t]}),y(this,"_onMessageReceived",async t=>{if(!t.data||!t.data.v1)return;const n=t.data.v1;if(n.repliesTo&&this._replayQueue[n.repliesTo]){const t=this._replayQueue,e=n.repliesTo,{[e]:{resolve:o,reject:r}}=t,s=f(t,[e].map(g));return this._replayQueue=s,void(n.errorResponse?await r(n.payload,n.topic,n.messageId):await o(n.payload,n.topic,n.messageId))}const e=this.handlers[n.topic];if(e&&(n.group===this.group||!n.group))try{const t=await e(n.payload,n.topic,n.messageId);n.reply&&this.send("".concat(n.topic,":reply"),t,{repliesTo:n.messageId,errorResponse:!1})}catch(t){console.error(t),n.reply&&this.send("".concat(n.topic,":reply"),{message:t.message},{repliesTo:n.messageId,errorResponse:!0})}}),y(this,"send",(t,n,e={})=>{const o=Math.floor(1e17*Math.random()).toString(),r={v1:h({topic:t,group:this.group,payload:n,messageId:o},e)};return this._deliverMessages?this.targetWindow.postMessage(r,this.targetOrigin):this._pendingMessages=[...this._pendingMessages,r],r}),y(this,"sendWithReply",async(t,n)=>new Promise((e,o)=>{const{v1:{messageId:r}}=this.send(t,n,{reply:!0});this._replayQueue=h({},this._replayQueue,{[r]:{resolve:e,reject:o}})})),this.handlers={},this.targetWindow=t,this.targetOrigin=n,this.group=String(e),this._pendingMessages=[],this._deliverMessages=!1,this._replayQueue={}}}const w="https://www.moneybutton.com";let x=null;const v=(t,n)=>'\n    <div class="close__moneybutton">\n      <div class="hint__moneybutton">\n        <div class="content__moneybutton">\n          <div class="header__moneybutton">\n            <img class="header-logo__moneybutton" src="'.concat(w,'/static/img/white-iso.svg" alt="">\n            <img class="header-close__moneybutton" src="').concat(w,'/static/img/icons/close-icon-popup.svg" alt="Close modal">\n          </div>\n          <span class="title__moneybutton">').concat(t,'</span>\n          <span class="text__moneybutton">').concat(n,"</span>\n          <div class=\"buttonsWrapper__moneybutton\"></div>\n        </div>\n        <style>\n          .hint__moneybutton .button__moneybutton,\n          .hint__moneybutton .title__moneybutton{\n            font-weight:700\n          }\n          .hint__moneybutton .button__moneybutton,\n          .hint__moneybutton .content__moneybutton{\n            color:#fff;\n            box-sizing:border-box;\n            display:flex;\n            font-family: 'IBM Plex Sans', sans-serif;\n          }\n          .hint__moneybutton .content__moneybutton .header__moneybutton {\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 20px;\n          }\n          .hint__moneybutton .content__moneybutton .header__moneybutton img.header-logo__moneybutton {\n            width: 30px;\n          }\n          .hint__moneybutton .content__moneybutton .header__moneybutton img.header-close__moneybutton {\n            width: 20px;\n            cursor: pointer;\n          }\n          .hint__moneybutton a{\n            text-decoration:none;\n          }\n          .hint__moneybutton {\n            min-width: 254px;\n            max-width: 378px;\n            width: 90%;\n            z-index: 1002;\n            bottom: 40px;\n            text-align: left;\n            position: fixed;\n          }\n          .hint__moneybutton .content__moneybutton{\n            top:0;\n            left:0;\n            right:0;\n            bottom:0;\n            z-index:1\n          }\n          .hint__moneybutton .content__moneybutton{\n              background-color:#191927;\n              padding:30px;\n              border-radius:10px;\n              bottom:19px;\n              left:0;\n              right:0;\n              flex-direction:column;\n              align-content:center;\n              align-items:flex-start;\n              min-width: 260px;\n          }\n          .hint__moneybutton .title__moneybutton{\n              font-size:20px;\n              margin-bottom:10px\n          }\n          .hint__moneybutton .text__moneybutton{\n              font-size:14px;\n              margin-bottom:20px\n          }\n          .hint__moneybutton .buttonsWrapper__moneybutton{\n              width:100%;\n              display:flex;\n              justify-content:space-between;\n              position:relative;\n              z-index:2;\n          }\n          .hint__moneybutton .button__moneybutton{\n              text-align: center;\n              font-size: 12px;\n              width: calc(50% - 10px);\n              height: 35px;\n              padding: 0 10px;\n              border-radius: 20px;\n              align-items: center;\n              justify-content: center;\n              transition: all 250ms ease-out;\n              cursor: pointer;\n              border: none;\n          }\n          .hint__moneybutton .button__moneybutton.add__moneybutton {\n              width: auto;\n          }\n          .hint__moneybutton .button__moneybutton.red__moneybutton{\n              background-color:#e54d3f\n          }\n          .hint__moneybutton .button__moneybutton.red__moneybutton:hover{\n              background-color:#ce4134\n          }\n          .hint__moneybutton .button__moneybutton.nofill__moneybutton{\n              border:1px solid #fff\n          }\n          .hint__moneybutton .button__moneybutton.nofill__moneybutton:hover{\n              color:#191927;\n              background-color:#fff\n          }\n          .close__moneybutton {\n            background-color: rgba(255, 255, 255, 0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n            z-index: 999;\n            display: flex;\n            justify-content: center;\n            align-items: flex-end;\n          }\n          @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap');\n        </style>\n      </div>\n    </div>\n  ");function O(){const t=document.createElement("div");return t.className="popup__moneybutton",t.style.position="relative",t.style.display="flex",t.style.justifyContent="center",t}function P(){x&&(x.parentNode.removeChild(x),x=null)}function j(t,n){P();let e=document.getElementsByClassName("popup__moneybutton").item(0);x=document.createElement("div"),x.setAttribute("style","display: flex; justify-content: center; font-family: sans-serif;"),null===e&&(e=O(),document.body.appendChild(e)),e.appendChild(x),x.innerHTML=n;document.getElementsByClassName("hint__moneybutton").item(0).addEventListener("click",t=>t.stopPropagation());document.getElementsByClassName("close__moneybutton").item(0).addEventListener("click",P);document.getElementsByClassName("header-close__moneybutton").item(0).addEventListener("click",P);const o=document.getElementsByClassName("buttonsWrapper__moneybutton").item(0);t.forEach(t=>o.appendChild(t))}function C(t,n,e){const o=document.createElement("a");return o.href=n,o.innerText=t,o.classList.add(...e),o.target="_blank",o.rel="noopener noreferrer",o}var k={showPopup:function({title:t,message:n,buttonText:e,buttonUrl:o,buttonText2:r,buttonUrl2:s}){const i=[];if(e&&o){const t=C(e,o,["button__moneybutton","red__moneybutton"]);i.push(t)}if(r&&s){const t=C(r,s,["button__moneybutton","nofill__moneybutton"]);i.push(t)}j(i,v(t,n))},showStyledPopup:function(){j([],'\n    <div class="close__moneybutton">\n      <div class="hint__moneybutton">\n        <div class="content__moneybutton">\n          <div class="header__moneybutton">\n            <img class="header-logo__moneybutton" src="'.concat(w,'/static/img/confirmation-error.jpg" alt="">\n            <img class="header-close__moneybutton" src="').concat(w,'/static/img/icons/close-icon-popup-blue.svg" alt="Close modal">\n          </div>\n          <span class="title__moneybutton">\n            Oops! Something went wrong.\n          </span>\n          <span class="text__moneybutton">\n            <span class=\'italic\'>The transaction has failed and the asset has not been sent to the receiver.</span>  Remember to make sure you have a stable internet connection and enough funds in your account.\n          </span>\n        </div>\n        <style>\n          .close__moneybutton {\n            top: 0%;\n            left: 0%;\n            position: fixed;\n\n            z-index: 999;\n            width: 100vw;\n            height: 100vh;\n\n            background-color: rgba(255, 255, 255, 0.4);\n          }\n\n          .hint__moneybutton {\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-60%, -60%);\n\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            width: 320px;\n            height: 290px;\n            z-index: 1000;\n\n            text-align: left;\n            padding-top: 30px;\n            padding-left: 20px;\n            padding-right: 20px;\n\n            border-radius: 20px;\n            background-color: #FFFFFF;\n            box-shadow: 0px 2px 4px rgb(0, 0, 0, 0.165336);\n          }\n\n          .hint__moneybutton .content__moneybutton {\n            z-index: 1001;\n            padding-left: 20px;\n            padding-right: 20px;\n\n            display: flex;\n            align-items: center;\n            flex-direction: column;\n\n            box-sizing: border-box;\n          }\n\n          .hint__moneybutton .content__moneybutton .header__moneybutton {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n\n            z-index: 1002;\n            margin-bottom: 40px;\n          }\n\n          .hint__moneybutton .content__moneybutton .header__moneybutton img.header-logo__moneybutton {\n            top: 40px;\n            left: 30px;\n\n            width: 155px;\n            height: 125px;\n            position: absolute;\n          }\n\n          .hint__moneybutton .content__moneybutton .header__moneybutton img.header-close__moneybutton {\n            top: 30px;\n            right: 30px;\n\n            width: 20px;\n            cursor: pointer;\n            position: absolute;\n          }\n\n          .hint__moneybutton .title__moneybutton {\n            margin-top: 70px;\n\n            line-height: 22px;\n            letter-spacing: -0.4px;\n\n            color: #434343;\n            font-size: 20px;\n            font-weight: bold;\n            font-style: normal;\n            font-family: IBM Plex Sans;\n          }\n\n          .hint__moneybutton .text__moneybutton{\n            margin-top: 15px;\n            line-height: 16px;\n\n            color: #434343;\n            font-size: 14px;\n            font-weight: 400;\n            font-style: normal;\n            font-family: IBM Plex Sans;\n          }\n\n          span.italic {\n            color: #434343;\n            font-weight: 600;\n            font-style: italic;\n          }\n\n          @media(max-width: 374px) {\n            .hint__moneybutton {\n              top: 10%;\n              left: 5%;\n              padding-left: 10px;\n              padding-right: 10px;\n\n              transform: translate(-0%, -0%);\n\n              width: 300px;\n              height: 450px;\n            }\n\n            .hint__moneybutton .content__moneybutton .header__moneybutton img.header-logo__moneybutton {\n              top: 55px;\n              width: 165px;\n              height: 130px;\n            }\n\n            .hint__moneybutton .title__moneybutton {\n              margin-top: 35px;\n            }\n          }\n\n          @import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap\');\n        </style>\n      </div>\n    </div>\n  '))},dismissPopup:P,createPopupElement:O,showIMBSuccessPopup:function(t){const n=document.createElement("div");n.style.position="fixed",n.style.bottom="20px",n.style.left="0",n.style.width="100%",n.innerHTML="\n  <div class='alert__moneybutton' role='alert'>\n    <h3 class='imb-success-popup_title__moneybutton'>Permission granted</h3>\n    <span class='imb-success-popup_text__moneybutton'>\n      You can remove, change or renew your <i>".concat(t,"</i> permission\n      from the settings page inside your\n      <a rel='noopener noreferrer' target='_blank' class='imb-success-popup_link__moneybutton' href='").concat(w,"/settings/apps#yourPermissions'>Money Button wallet</a>\n    </span>\n  </div>\n  <style>\n  .alert__moneybutton {\n    background-color: #4772F6;\n    padding: 45px 40px 40px 40px;\n    width: 90%;\n    max-width: 400px;\n    margin-right: auto;\n    margin-left: auto;\n    box-sizing: border-box;\n    border-radius: 20px 20px 0 20px;\n  }\n  .imb-success-popup_text__moneybutton, .imb-success-popup_title__moneybutton {\n    font-size: 12px;\n    font-family: 'IBM Plex Sans', sans-serif;\n    color: white;\n  }\n\n  .imb-success-popup_text__moneybutton {\n    font-weight: 500;\n  }\n\n  .imb-success-popup_title__moneybutton {\n    font-size: 18px;\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  .imb-success-popup_link__moneybutton {\n    color: white;\n    text-decoration: none;\n    font-weight: bold;\n  }\n  </style>\n  "),document.body.appendChild(n);const e=setTimeout(()=>{document.body.removeChild(n),document.body.removeEventListener("click",o)},6e3),o=t=>{n.parentNode.removeChild(n),clearTimeout(e),t.currentTarget.removeEventListener(t.type,o)};document.body.addEventListener("click",o)},showPostmessagePopup:function({title:t,message:n,buttonText:e,buttonOnclick:o}){const r=document.createElement("button");r.classList=["button__moneybutton red__moneybutton"],r.innerText=e,r.onclick=()=>{o(),P()},j([r],v(t,n))}};var E,M=(E=Object.freeze({__proto__:null,PostMessageClient:_,PostMessagePool:class{constructor(t=[],n){this.clients=[];for(let e=0;e<t.length;e++){const o=new _(t[e],n);o.enableDeliver(),this.clients.push(o)}}execute(t,...n){return Promise.all(this.clients.map(e=>e[t](...n)))}},constants:{WINDOW_OPENED:"window:opened"}}))&&E.default||E;const{PostMessageClient:I}=M,N="".concat("https://www.moneybutton.com","/iframe");var S={MBIframe:class{constructor(t){this.iframe=document.createElement("iframe"),this.iframe.src="".concat(N,"/").concat(t)}styleIframe(t){Object.assign(this.iframe.style,t)}attach(t){t.appendChild(this.iframe),this.iframe.contentWindow.onunload=()=>{null!==this.iframe.contentWindow&&this.iframe.contentWindow.location.href!==N||(t.innerHTML="")},this._pmClient=new I(this.iframe.contentWindow)}postMessageClient(){return this._pmClient}}};const{MBIframe:z}=S;var B={OnboardingFlow:class{constructor(t){this.storage=t,this.iframe=new z("onboard-new-user"),this.iframe.styleIframe({border:"none",width:"100%",minHeight:"100vh"})}async start(){return new Promise((t,n)=>{const e=document.createElement("div");e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.width="100vw",e.style.height="100vh",e.style.zIndex="1001",document.body.appendChild(e),this.iframe.attach(e);const o=this.iframe.postMessageClient();o.subscribe("onboard-new-user:finished",()=>{this._teardown(e),t()}),o.subscribe("create-account:canceled",()=>{this._teardown(e),n(new Error("user_decision"))}),o.enableDeliver(),o.start()})}_teardown(t){this.iframe.postMessageClient().finalize(),document.body.removeChild(t)}}};function L(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function D(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function F(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?D(Object(e),!0).forEach((function(n){L(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var T={isFunction:function(t){return"function"==typeof t},pick:function(t,n){return n.reduce((n,e)=>(t.hasOwnProperty(e)&&(n[e]=t[e]),n),{})}};const{PostMessageClient:W}=M,{OnboardingFlow:A}=B,{showPopup:R}=k,{pick:U}=T;function H(){const t=function(){const t=document.createElement("iframe");return t.style.border="none",t.style.width="1px",t.style.height="1px",t.scrolling="no",t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.src="".concat("https://www.moneybutton.com","/iframe/imb-payments"),t}();return document.body.appendChild(t),t}const J=["amount","to","currency","opReturn","outputs","cryptoOperations","buttonId","buttonData","preserveOrder"],Q=["amount","asset","currency","to","address","userId","script","paymail"],$=["name","method","data","dataEncoding","value","valueEncoding","key","algorithm","publicKey","paymail","verified","signature"],G=t=>{const n=U(t,J);return n.outputs&&(n.outputs=n.outputs.map(t=>U(t,Q))),n.cryptoOperations&&(n.cryptoOperations=n.cryptoOperations.map(t=>U(t,$))),JSON.parse(JSON.stringify(n))};var q={PaymentProcessor:class{constructor(t){this.token=t,this.pmClient=null,this.iframe=null,this.resetConnection()}async swipe(t){return document.body.contains(this.iframe)||await this.resetConnection(),this.pmClient.sendWithReply("imb.start-payment",{authToken:this.token,attributes:G(t)})}async amountLeft(){document.body.contains(this.iframe)||await this.resetConnection();return await this.pmClient.sendWithReply("imb.amount-left",{authToken:this.token})}async resetConnection(){return new Promise(t=>{this.pmClient&&this.pmClient.finalize(),this.iframe=H(),this.pmClient=new W(this.iframe.contentWindow),this.pmClient.subscribe("error.insufficient-balance",t=>R(t.popup)),this.pmClient.subscribe("error.too-long-mempool-chain",t=>R(t.popup)),this.pmClient.subscribe("error.unexpected-error",t=>R(t.popup)),this.pmClient.subscribe("onboard-new-user",async()=>{await new A(window.localStorage).start()}),this.pmClient.start(),this.pmClient.subscribe("ready",()=>{this.pmClient.enableDeliver()})})}}};const{PostMessageClient:K}=M,{PaymentProcessor:Y}=q,{showPopup:V,showIMBSuccessPopup:X}=k,{isFunction:Z,pick:tt}=T,{OnboardingFlow:nt}=B,et="".concat("https://www.moneybutton.com","/iframe");function ot(t,n){const e=function(t){const n=document.createElement("iframe");return n.style.border="none",n.style.width="100%",n.style.minHeight="100vh",n.src="".concat(et,"/").concat(t),n}(n);return t.appendChild(e),e.contentWindow.onunload=()=>{null!==e.contentWindow&&e.contentWindow.location.href!==et||(t.innerHTML="")},e}function rt(t,n){Z(t.onCryptoOperations)&&t.onCryptoOperations(n.cryptoOperations),Z(t.onPayment)&&t.onPayment(n.payment)}const st=["permission","suggestedAmount","minimumAmount","clientIdentifier","onNewPermissionGranted"];var it={IMB:class{constructor(t){this.config=tt(t,st),this.paymentProcessor=new Y(t.permission)}async swipe(t){this.paymentProcessor.token||await this.askForPermission();try{const n=await this.paymentProcessor.swipe(t);return rt(t,n),n}catch(n){if(Z(t.onError)&&t.onError(n),"Not enough authorized amount."===n.message){await this.renewPermission();const n=await this.paymentProcessor.swipe(t);return rt(t,n),n}if("invalid token"===n.message)return this.paymentProcessor=null,this.swipe(t);throw n}}async getPermission(){return this.paymentProcessor.token||await this.askForPermission(),this.paymentProcessor.token}async amountLeft(t){if(!this.paymentProcessor.token)throw new Error("No active permission.");return this.paymentProcessor.amountLeft(t)}async askForPermission(t={}){const n=tt(this.config,["clientIdentifier","suggestedAmount","minimumAmount"]);t.amount&&t.currency&&(n.suggestedAmount={amount:t.amount,currency:t.currency}),t=tt(n,["clientIdentifier","suggestedAmount","minimumAmount"]);const e=F(F(F({},{suggestedAmount:{amount:"5",currency:"USD"},minimumAmount:{amount:"0.25",currency:"USD"}}),n),t),o=document.createElement("div");o.style.position="fixed",o.style.top="0px",o.style.left="0px",o.style.width="100%",o.style.height="auto",o.style.zIndex="1001",document.body.appendChild(o);const r=ot(o,"imb-permission-grant");return this._askIframeForPermition(e,o,r)}async renewPermission(t){const n=tt(this.config,["clientIdentifier","suggestedAmount","minimumAmount"]),e=F(F({},{suggestedAmount:{amount:"5",currency:"USD"},minimumAmount:{amount:"0.25",currency:"USD"}}),n),o=document.createElement("div");o.style.position="fixed",o.style.width="100%",o.style.height="350px",o.style.bottom="20px",o.style.left="0",o.style.display="flex",o.style.justifyContent="center",o.style.pointerEvents="none",o.style.zIndex="1001",document.body.appendChild(o);const r=ot(o,"imb-renew-permission");return r.style.maxWidth="550px",r.style.width="90%",r.style.pointerEvents="auto",this._askIframeForPermition(e,o,r)}async _askIframeForPermition(t,n,e){return new Promise((o,r)=>{const s=new K(e.contentWindow);s.subscribe("ready",()=>{s.enableDeliver(),s.send("imb.request-swipe-permission",F({},t))}),s.subscribe("imb.permission-granted",t=>{if(this.paymentProcessor.token=t.token,Z(this.config.onNewPermissionGranted))try{this.config.onNewPermissionGranted(t.token)}catch(t){console.error("There was a problem when attempting to save the permission code:",t.message),console.error(t)}s.finalize(),document.body.removeChild(n),X(t.app.name),o(this)}),s.subscribe("imb.permission-dennied",t=>{s.finalize(),document.body.removeChild(n),r(t)}),s.subscribe("error.compatibility",t=>{V(t.popup),s.finalize(),document.body.removeChild(n),r(new Error("incompatibility"))}),s.subscribe("onboard-new-user",async()=>{n.style.zIndex=0,n.style.width="1px",n.style.height="1px",n.style.top="-2px",n.style.left="-2px",await new nt(window.localStorage).start().catch(t=>{s.finalize(),document.body.removeChild(n),r(t)}),s.enableDeliver(),s.send("onboard-new-user:completed"),n.style.zIndex=1001,n.style.width="100vw",n.style.height="100vh",n.style.top="0",n.style.left="0"}),s.subscribe("error.insufficient-balance",t=>{V(t.popup)}),s.start()})}}};const{stringify:at}=m,{PostMessageClient:ct}=M,{showPopup:ut}=k,{OnboardingFlow:lt}=B,{IMB:pt}=it,dt=["to","asset","amount","currency","label","successMessage","opReturn","outputs","cryptoOperations","clientIdentifier","buttonId","buttonData","type","onPayment","onError","onLoad","devMode","editable","disabled","preserveOrder"],mt=new Map;function yt(t,n={}){mt.has(t)?function(t,n){const e=mt.get(t);e.send("attributes-updated",ht(n)),bt(e,n)}(t,n):function(t,n){const e=Math.random();!function(t,n){if(!(t instanceof Element))throw new Error("The first argument must be of type Element.");if(!(t instanceof Object)||0===Object.keys(n).length)throw new Error("Please, specify the button's attributes.");if(void 0!==n.buttonData&&"string"!=typeof n.buttonData)throw new Error('"buttonData" should be a string.')}(t,n);const o=function(t){const n=document.createElement("iframe");return n.style.border="none",n.style.width="280px",n.style.height="50px",n.scrolling="no",n.src=ft(t),n}(e);t.appendChild(o),t.style.position="relative",t.style.display="inline-block",t.style.width="280px",t.style.height="50px",o.contentWindow.onunload=()=>{null!==o.contentWindow&&o.contentWindow.location.href!==ft()||(mt.delete(t),t.innerHTML="")};const r=new ct(o.contentWindow,"*",e);bt(r,n),r.start(),mt.set(t,r)}(t,n)}function bt(t,n){const e=t;e.subscribe("ready",()=>{e.enableDeliver(),e.send("initial-attributes",ht(n),{}),n.onLoad&&"function"==typeof n.onLoad&&n.onLoad()}),e.subscribe("resend-attributes",()=>{e.enableDeliver(),e.send("attributes-updated",ht(n))}),e.subscribe("payment-success",t=>function(t,n){const{payment:e}=t;e&&"function"==typeof n.onPayment&&n.onPayment.call(window,e)}(t,n)),e.subscribe("crypto-operations-success",t=>function(t,n){const{cryptoOperations:e}=t;e&&"function"==typeof n.onCryptoOperations&&n.onCryptoOperations.call(window,e)}(t,n)),e.subscribe("error.insufficient-balance",t=>gt(t,n)),e.subscribe("error.unexpected-error",t=>gt(t,n)),e.subscribe("error.crypto-operations-error",t=>gt(t,n)),e.subscribe("start-new-onboarding",()=>{(new lt).start().catch(console.error)}),e.subscribe("error.compatibility",t=>gt(t,n)),e.subscribe("error.too-long-mempool-chain",t=>gt(t,n)),e.subscribe("error",t=>gt(t,n))}function ht(t){return{to:t.to,ast:t.asset,amt:t.amount,edt:t.editable,ccy:t.currency,lbl:t.label,scsmsg:t.successMessage,opd:t.opReturn,os:JSON.stringify(t.outputs),cid:t.clientIdentifier,bid:t.buttonId,bdt:t.buttonData,t:t.type,dev:t.devMode,dsbd:t.disabled,crop:JSON.stringify(t.cryptoOperations),pord:t.preserveOrder}}function ft(t){const n={format:"postmessage",instanceId:t};return"".concat("https://www.moneybutton.com","/iframe/v2?").concat(at(n))}function gt(t,n){const{error:e,popup:o}=t;o&&ut(o),e&&"function"==typeof n.onError&&n.onError.call(window,new Error(e))}function _t(t){const n={};for(const e in t){const o=t[e];if(dt.includes(e))switch(e){case"outputs":let t;try{t=JSON.parse(o)}catch(n){t=null}t instanceof Array?n[e]=t:console.warn("The value provided for ".concat(e," is not a valid JSON array."));break;case"cryptoOperations":let r;try{r=JSON.parse(o)}catch(t){r=[]}r instanceof Array?n[e]=r:console.warn("cryptoOperations should be an array");break;case"devMode":n[e]="true"===o;break;case"onPayment":case"onError":case"onLoad":"function"==typeof window[o]?n[e]=window[o]:console.warn("The value provided for ".concat(e," is not a function in the global scope."));break;default:n[e]=o}else console.warn("Unexpected data attribute: ".concat(e,"."))}return n}document.addEventListener("DOMContentLoaded",(function(){if(window.moneyButton.alreadyLoaded)return;window.moneyButton.alreadyLoaded=!0;const t=document.getElementsByClassName("money-button");for(let n=0;n<t.length;++n){const e=t.item(n);try{const t=_t(e.dataset);Object.keys(t).length>0&&yt(e,t),console.log("Money Button: added button.")}catch(t){console.error("Money Button: adding button failed.",t)}}}));var wt={render:yt,IMB:pt},xt=wt.render,vt=wt.IMB;return t.IMB=vt,t.default=wt,t.render=xt,t}({});
//# sourceMappingURL=moneybutton.js.map