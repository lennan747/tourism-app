(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{3521:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-9253b44c]{background:-webkit-gradient(linear,left top,left bottom,from(#f06c7a),to(#f06c7a));background:-o-linear-gradient(top,#f06c7a 0,#f06c7a 100%);background:linear-gradient(180deg,#f06c7a 0,#f06c7a);height:100%}.icon[data-v-9253b44c]{color:#fff}.logo[data-v-9253b44c]{width:100%;height:45vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.logo .img[data-v-9253b44c]{width:25%;height:25vw}.logo .img uni-image[data-v-9253b44c]{width:100%;border-radius:100%}.form[data-v-9253b44c]{width:100%;padding:0 7%;font-size:%?30?%}.form .captcha[data-v-9253b44c],.form .code[data-v-9253b44c],.form .password[data-v-9253b44c],.form .username[data-v-9253b44c]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:%?45?%;background-color:hsla(0,0%,100%,.1);padding:0 %?45?%;margin-bottom:%?26?%}.form .captcha uni-input[data-v-9253b44c],.form .code uni-input[data-v-9253b44c],.form .password uni-input[data-v-9253b44c],.form .username uni-input[data-v-9253b44c]{width:100%;height:%?50?%;color:hsla(0,0%,100%,.8);font-weight:200}.form .btn[data-v-9253b44c]{color:#f06c7a;width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:%?45?%;background-color:#fff;font-size:%?40?%}.re .captcha[data-v-9253b44c]{position:relative}.re .captcha .img-captcha[data-v-9253b44c]{position:absolute;width:%?150?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;right:0;padding:0 %?40?%;z-index:3}.re .code[data-v-9253b44c]{position:relative}.re .code .get-code[data-v-9253b44c]{position:absolute;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;right:0;padding:0 %?40?%;z-index:3}.re .code .get-code[data-v-9253b44c]:after{content:" ";width:%?1?%;height:%?50?%;background-color:#fff;position:absolute;z-index:3;margin-right:100%;left:0;top:%?20?%}.re .res[data-v-9253b44c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?100?%;color:hsla(0,0%,100%,.8)}uni-page-body[data-v-9253b44c]{background-color:#f06c7a;color:#fff;height:100%}.bg-f06c7a[data-v-9253b44c]{background-color:#f06c7a;color:#fff}.pic-captcha[data-v-9253b44c]{height:10vw}body.?%PAGE?%[data-v-9253b44c]{background:-webkit-gradient(linear,left top,left bottom,from(#f06c7a),to(#f06c7a));background:-o-linear-gradient(top,#f06c7a 0,#f06c7a 100%);background:linear-gradient(180deg,#f06c7a 0,#f06c7a);background-color:#f06c7a}',""])},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,i){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=i("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"446a":function(t,e,i){var n=i("3521");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("971fe786",n,!0,{sourceMap:!1,shadowMode:!1})},"49df":function(t,e,i){"use strict";i.r(e);var n=i("8952"),r=i("f511");for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);i("c30d");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"9253b44c",null);e["default"]=s.exports},"4be3":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__,_interopRequireDefault=__webpack_require__("288e");__webpack_require__("6b54"),__webpack_require__("87b3");var _isArray=_interopRequireDefault(__webpack_require__("a745"));__webpack_require__("28a5"),__webpack_require__("9c29"),__webpack_require__("34ef"),function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&_isArray.default||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(i){return new t(!0).update(i)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var i=0;i<c.length;++i){var n=c[i];e[n]=b(n)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),(0,_isArray.default)(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,i=typeof t;if("string"!==i){if("object"!==i)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!((0,_isArray.default)(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var n,o,s=0,c=t.length,u=this.blocks,l=this.buffer8;s<c;){if(this.hashed&&(this.hashed=!1,u[0]=u[16],u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),e)if(a)for(o=this.start;s<c&&o<64;++s)l[o++]=t[s];else for(o=this.start;s<c&&o<64;++s)u[o>>2]|=t[s]<<y[3&o++];else if(a)for(o=this.start;s<c&&o<64;++s)(n=t.charCodeAt(s))<128?l[o++]=n:n<2048?(l[o++]=192|n>>6,l[o++]=128|63&n):n<55296||n>=57344?(l[o++]=224|n>>12,l[o++]=128|n>>6&63,l[o++]=128|63&n):(n=65536+((1023&n)<<10|1023&t.charCodeAt(++s)),l[o++]=240|n>>18,l[o++]=128|n>>12&63,l[o++]=128|n>>6&63,l[o++]=128|63&n);else for(o=this.start;s<c&&o<64;++s)(n=t.charCodeAt(s))<128?u[o>>2]|=n<<y[3&o++]:n<2048?(u[o>>2]|=(192|n>>6)<<y[3&o++],u[o>>2]|=(128|63&n)<<y[3&o++]):n<55296||n>=57344?(u[o>>2]|=(224|n>>12)<<y[3&o++],u[o>>2]|=(128|n>>6&63)<<y[3&o++],u[o>>2]|=(128|63&n)<<y[3&o++]):(n=65536+((1023&n)<<10|1023&t.charCodeAt(++s)),u[o>>2]|=(240|n>>18)<<y[3&o++],u[o>>2]|=(128|n>>12&63)<<y[3&o++],u[o>>2]|=(128|n>>6&63)<<y[3&o++],u[o>>2]|=(128|63&n)<<y[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,i,n,r,a,o=this.blocks;this.first?e=((e=((t=((t=o[0]-680876937)<<7|t>>>25)-271733879<<0)^(i=((i=(-271733879^(n=((n=(-1732584194^2004318071&t)+o[1]-117830708)<<12|n>>>20)+t<<0)&(-271733879^t))+o[2]-1126478375)<<17|i>>>15)+n<<0)&(n^t))+o[3]-1316259209)<<22|e>>>10)+i<<0:(t=this.h0,e=this.h1,i=this.h2,e=((e+=((t=((t+=((n=this.h3)^e&(i^n))+o[0]-680876936)<<7|t>>>25)+e<<0)^(i=((i+=(e^(n=((n+=(i^t&(e^i))+o[1]-389564586)<<12|n>>>20)+t<<0)&(t^e))+o[2]+606105819)<<17|i>>>15)+n<<0)&(n^t))+o[3]-1044525330)<<22|e>>>10)+i<<0),e=((e+=((t=((t+=(n^e&(i^n))+o[4]-176418897)<<7|t>>>25)+e<<0)^(i=((i+=(e^(n=((n+=(i^t&(e^i))+o[5]+1200080426)<<12|n>>>20)+t<<0)&(t^e))+o[6]-1473231341)<<17|i>>>15)+n<<0)&(n^t))+o[7]-45705983)<<22|e>>>10)+i<<0,e=((e+=((t=((t+=(n^e&(i^n))+o[8]+1770035416)<<7|t>>>25)+e<<0)^(i=((i+=(e^(n=((n+=(i^t&(e^i))+o[9]-1958414417)<<12|n>>>20)+t<<0)&(t^e))+o[10]-42063)<<17|i>>>15)+n<<0)&(n^t))+o[11]-1990404162)<<22|e>>>10)+i<<0,e=((e+=((t=((t+=(n^e&(i^n))+o[12]+1804603682)<<7|t>>>25)+e<<0)^(i=((i+=(e^(n=((n+=(i^t&(e^i))+o[13]-40341101)<<12|n>>>20)+t<<0)&(t^e))+o[14]-1502002290)<<17|i>>>15)+n<<0)&(n^t))+o[15]+1236535329)<<22|e>>>10)+i<<0,e=((e+=((n=((n+=(e^i&((t=((t+=(i^n&(e^i))+o[1]-165796510)<<5|t>>>27)+e<<0)^e))+o[6]-1069501632)<<9|n>>>23)+t<<0)^t&((i=((i+=(t^e&(n^t))+o[11]+643717713)<<14|i>>>18)+n<<0)^n))+o[0]-373897302)<<20|e>>>12)+i<<0,e=((e+=((n=((n+=(e^i&((t=((t+=(i^n&(e^i))+o[5]-701558691)<<5|t>>>27)+e<<0)^e))+o[10]+38016083)<<9|n>>>23)+t<<0)^t&((i=((i+=(t^e&(n^t))+o[15]-660478335)<<14|i>>>18)+n<<0)^n))+o[4]-405537848)<<20|e>>>12)+i<<0,e=((e+=((n=((n+=(e^i&((t=((t+=(i^n&(e^i))+o[9]+568446438)<<5|t>>>27)+e<<0)^e))+o[14]-1019803690)<<9|n>>>23)+t<<0)^t&((i=((i+=(t^e&(n^t))+o[3]-187363961)<<14|i>>>18)+n<<0)^n))+o[8]+1163531501)<<20|e>>>12)+i<<0,e=((e+=((n=((n+=(e^i&((t=((t+=(i^n&(e^i))+o[13]-1444681467)<<5|t>>>27)+e<<0)^e))+o[2]-51403784)<<9|n>>>23)+t<<0)^t&((i=((i+=(t^e&(n^t))+o[7]+1735328473)<<14|i>>>18)+n<<0)^n))+o[12]-1926607734)<<20|e>>>12)+i<<0,e=((e+=((a=(n=((n+=((r=e^i)^(t=((t+=(r^n)+o[5]-378558)<<4|t>>>28)+e<<0))+o[8]-2022574463)<<11|n>>>21)+t<<0)^t)^(i=((i+=(a^e)+o[11]+1839030562)<<16|i>>>16)+n<<0))+o[14]-35309556)<<23|e>>>9)+i<<0,e=((e+=((a=(n=((n+=((r=e^i)^(t=((t+=(r^n)+o[1]-1530992060)<<4|t>>>28)+e<<0))+o[4]+1272893353)<<11|n>>>21)+t<<0)^t)^(i=((i+=(a^e)+o[7]-155497632)<<16|i>>>16)+n<<0))+o[10]-1094730640)<<23|e>>>9)+i<<0,e=((e+=((a=(n=((n+=((r=e^i)^(t=((t+=(r^n)+o[13]+681279174)<<4|t>>>28)+e<<0))+o[0]-358537222)<<11|n>>>21)+t<<0)^t)^(i=((i+=(a^e)+o[3]-722521979)<<16|i>>>16)+n<<0))+o[6]+76029189)<<23|e>>>9)+i<<0,e=((e+=((a=(n=((n+=((r=e^i)^(t=((t+=(r^n)+o[9]-640364487)<<4|t>>>28)+e<<0))+o[12]-421815835)<<11|n>>>21)+t<<0)^t)^(i=((i+=(a^e)+o[15]+530742520)<<16|i>>>16)+n<<0))+o[2]-995338651)<<23|e>>>9)+i<<0,e=((e+=((n=((n+=(e^((t=((t+=(i^(e|~n))+o[0]-198630844)<<6|t>>>26)+e<<0)|~i))+o[7]+1126891415)<<10|n>>>22)+t<<0)^((i=((i+=(t^(n|~e))+o[14]-1416354905)<<15|i>>>17)+n<<0)|~t))+o[5]-57434055)<<21|e>>>11)+i<<0,e=((e+=((n=((n+=(e^((t=((t+=(i^(e|~n))+o[12]+1700485571)<<6|t>>>26)+e<<0)|~i))+o[3]-1894986606)<<10|n>>>22)+t<<0)^((i=((i+=(t^(n|~e))+o[10]-1051523)<<15|i>>>17)+n<<0)|~t))+o[1]-2054922799)<<21|e>>>11)+i<<0,e=((e+=((n=((n+=(e^((t=((t+=(i^(e|~n))+o[8]+1873313359)<<6|t>>>26)+e<<0)|~i))+o[15]-30611744)<<10|n>>>22)+t<<0)^((i=((i+=(t^(n|~e))+o[6]-1560198380)<<15|i>>>17)+n<<0)|~t))+o[13]+1309151649)<<21|e>>>11)+i<<0,e=((e+=((n=((n+=(e^((t=((t+=(i^(e|~n))+o[4]-145523070)<<6|t>>>26)+e<<0)|~i))+o[11]-1120210379)<<10|n>>>22)+t<<0)^((i=((i+=(t^(n|~e))+o[2]+718787259)<<15|i>>>17)+n<<0)|~t))+o[9]-343485551)<<21|e>>>11)+i<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=i-1732584194<<0,this.h3=n+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+i<<0,this.h3=this.h3+n<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,r=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,n=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,i,n="",r=this.array(),a=0;a<15;)t=r[a++],e=r[a++],i=r[a++],n+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|i>>>6)]+p[63&i];return t=r[a],n+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"4f14":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("3b8d")),a=(n(i("4be3")),i("a05c")),o={data:function(){return{phoneNumber:"",captcha:"",captchaCode:"",verificationCode:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1,dialogModal:!1}},onLoad:function(){console.log("onLoad")},methods:{isPasswd:function(t){var e=/^(\w){6,20}$/;return!!e.exec(t)},hideModal:function(){return this.captchaCode?(new Date).getTime()>new Date(this.captcha.expiredAt).getTime()?(uni.showToast({icon:"none",title:"验证码已过期",duration:2e3}),!1):void this.sendPhoneCode():(uni.showToast({icon:"none",title:"请输入验证码",duration:2e3}),!1)},showModal:function(){this.getCaptchaCode()},Timer:function(){},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},toLogin:function(){uni.hideKeyboard(),uni.redirectTo({url:"login"}),uni.navigateBack()},sendPhoneCode:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.verificationCodes)({captcha_key:this.captcha.key,captcha_code:this.captchaCode});case 3:e=t.sent,console.log(e),401===e.statusCode&&uni.showToast({icon:"none",title:e.data.message}),201===e.statusCode&&(this.verificationCode={key:e.data.key,expiredAt:Date.parse(e.data.expired_at)},this.getCodeText="获取中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",this.dialogModal=null,this.setTimer()),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),uni.showToast({icon:"none",title:"服务器不见了",duration:2e3});case 13:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}(),getCaptchaCode:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(uni.hideKeyboard(),!this.getCodeisWaiting){t.next=3;break}return t.abrupt("return");case 3:if(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){t.next=6;break}return uni.showToast({title:"请填写正确手机号码",icon:"none"}),t.abrupt("return",!1);case 6:return t.prev=6,uni.showLoading({title:"加载中"}),t.next=10,(0,a.registercaptcha)({phoneNumber:this.phoneNumber});case 10:e=t.sent,console.log(e),422===e.statusCode&&(uni.hideLoading(),uni.showToast({icon:"none",title:"该手机号已经注册",duration:2e3})),201===e.statusCode&&(this.captcha={key:e.data.captcha_key,imageContent:e.data.captcha_image_content,expiredAt:Date.parse(e.data.expired_at)},uni.hideLoading(),this.dialogModal="show"),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](6),console.log(t.t0),uni.showToast({icon:"none",title:"服务器不见了",duration:2e3});case 20:case"end":return t.stop()}},t,this,[[6,16]])}));function e(){return t.apply(this,arguments)}return e}(),doReg:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(uni.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){t.next=4;break}return uni.showToast({title:"请填写正确手机号码",icon:"none"}),t.abrupt("return",!1);case 4:if(this.isPasswd(this.passwd)){t.next=7;break}return uni.showToast({title:"密码不符合规则",icon:"none"}),t.abrupt("return",!1);case 7:if(1234==this.code){t.next=10;break}return uni.showToast({title:"验证码不正确",icon:"none"}),t.abrupt("return",!1);case 10:return uni.showLoading({title:"提交中..."}),t.prev=11,uni.showLoading({title:"注册中"}),e=uni.getStorageSync("invite_code")||"",t.next=16,(0,a.register)({invite_code:e,password:this.passwd,verification_key:this.verificationCode.key,verification_code:this.code});case 16:i=t.sent,422===i.statusCode&&uni.showToast({title:"验证码已失效",icon:"none"}),401===i.statusCode&&uni.showToast({title:"验证码错误",icon:"none"}),201===i.statusCode&&(uni.hideLoading(),uni.showToast({title:"注册成功",icon:"success"}),setTimeout(function(){uni.navigateBack()},1e3)),t.next=24;break;case 22:t.prev=22,t.t0=t["catch"](11);case 24:case"end":return t.stop()}},t,this,[[11,22]])}));function e(){return t.apply(this,arguments)}return e}()}};e.default=o},8952:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bg-f06c7a"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{mode:"widthFix",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF//////NxTz08/HlRmtzPfHJq5evssrCmR4PFPwAADilJREFUeNrsnY124yoMhIkbSe//xtuk7caxwWgAJ0Dma/eec8+GxWg8QuCfhEAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhMyHfmNqr/xVTR6Lo22y9RRqmMjyBiwaVPM1FjGdVY3lXUjkeJCjmVGTN8oRVcTAf8Ams8db5fiOp9Yf0EwmseXdbE9wbfBvUI8KtIVlZRI95P167FJW2UEJ/XFSxio9KqEep5W91kjZ4eqryErr1Vii8nMwX621GZLddyNeS/pkCfnGtllAyVQGGXLBu9lisHkMIjrFKKYxiAycfm0Wi8gs06HMYRGbMvfadOeVDvMTPbfGtYhGDKKXwTgYywwGuYzHPBaJnFQ6oCC6P73GrE/UEIOILGKO8Hyv0kRcgbyt53yfvNw+adNbBDHI72DFE7obviDfe3Z/8iujiI5ewiMG+S+cL3YORfyftGznc1gEMcgjPWeC94jIpdknJftJncIitt80yUdvccYOEGRp8MkZLKKRpW02aeRylrkFsRJBAIuMtzFne387Tvz3OkRyFhl4/wQxiCsk5YK4C4Uj7YafRRCDuDPWKnbWTpCPsAhkEHfGWn3yy107IWbKTutri0xrEH/GAiYGRBCXQwe3iOyvozfIWEge8hdkUM6yMQstRQwiTZcMBXWvz01DWwTad1/OWFwUprfFprSInWSQy0mC+M6JgS0CGQQQBJkXkPkGWYqMuH+CXZhaCrYBPYIgH3blrHEtcpZBMIdImZ1kPotEDHJpI8hpDnEexX7Rq4NN6Y5bG5aizOK4DgjZyZCcNZhFYvfLtDEIsnMCllm+82LMC1XIhanixGKtBUFy1lgWwUosW8qm3sulbd3r3b8Z0CKlBlkubxXEOZftB9n7Iy/QvjuYsUBBsATnOzXGm0WgXRMwY1mpIHJpbZFhFofFBsGSkLxNkNEsghkEWoSAKwv4486TYzCLYAaxpTDN+27ZxeyH5axBLAIaBMxY1oMgY1kEMwiYscCyCa17wZylIywOnwyiWT2sOGI+h5QLOItFwCemwIwFB7h8zvEIMsC1XHAGQTMWOifAgngdO4xFQIOgGQudE2BBKiwy/r0/BRkLdoiVd3Cs4CAWEWhbEc9YsCA1Ctr4FkGfuZXycMnldAU9Fun8Wi76ULqcnoHgScd9TCNYBH4oHc5YX7BDsEu+SJ0xgEUMnEFgg+BFU0GL8mldRjdIn4J4j6r/XXgDZxA8Y8EL9ZIyAMxZT9dyR74wVTJDF5zvBZ14z5PeLYLumqxm6AJBDA9vc9U7XxyiBkEvxz7H6gIL4u7EvJ1o17vw6K7JBXkXyS687ug+wuvvxH1c+9ygXWYsp0H+h9cfKv8rg3bhtQss+wUXxLoUxGmQe3wFCu7l56VaWJPbt16d1MkuW3d0WUSwReEc7E7GLgWxj9HjT5EeJxFdPlgQlQ4nkc8URDdnYz/f5KYUpLO6t0QQvdxeHY3liMIm0MtpgePqNmUVOGR1MoFVTQDe/lvTSfDOIVM45FlPMFLe+NY2UTRlDeuQ3ZmEBtclYn0naMoa1iH7fwANlTuh1DVRLGWN6pAAx0rxJqFJk4+osh46rr5BzReqp+9c80l4ZieTVFlPFxldXyvyF5/716X93zHyRPfnCwEsIE1kvcb7gCprc9HXP/L/u0bqju5fJ4J34jiuSaqs7X6kwaeiY0d5uxN7SieTVFnbJuKNldV3Ek7oZBKH6DZWClwJKoiVZmcqXBCdaQ7ZXdbJO6RGEHeWE/hE6XL7/dxYhUSsCgqgbCVnDTrpIGUBsdJVOeqMVSg9eQ127n4kAeiky2vquWEkb+QCzsSCWDk7CQvs3C6vqQPne7EgyO31yU6CX3V8JB3dKWf+59P3A8+d7/s+shruMmlWQ012Evxzej8O8aeTSHRzp+I+urlYHXSibk/hI+noRrnIo0R6uIG3HngmvLHoZsIb7UQdnWisk+DtJHQkiPde0mh05WjvL0SbeDp58lQmvIedqE/Crp6hMt/IowY5DG+InruPsxHvJKR3k7edYCPp6nEEjT1tp6lrFLYkRh6SodpE9yC8KQnTnaQkXJ3zHt/29UxbrDzZKBJV73jkISnh6nzEO9EzOunsqU9d4udK7ProLlRPdtfYfT/7FhLrRKs6iTTRSJPESHp7LlqW1OuK9JL+ZGI4lwO1fZ1YrImFgyaeTlTTYw69kR6HI1SHU6LGWxx0ogWdCNpJdJ3T6SySPr7EuI+CZakW6WAZ3ImmWqQjLUvXBtmG2kA9UvHdnOzndBJqO+nynXKbkyxyc/4mUrL9/8hmkG2Co9n4btPV9v/zneyPK9tJn6+U2yaKzUBU9ks1WY4kUZNd/LOdLNlO5LiT7ySlS+a4lhH0iKXu75Ho7XkAtXiRr5EWdr9T7buFRPNNopOfJkts8RFZkki6k/txWfy47jfR2cEKpzcSlcrB/JqeTCP/jh1VUAdTxtGkkjguvJORFImOIlcQpUskgUOleCc2hR7+YFlqRl3y9afbI49QacFxTaGHdxzmrFIT4z6tE0vXXhmnd6yIoCeVJ1iCd2LwmVJwXCN812d2HPuVQC6+kZWAwJlE8U5s8HTlGnp0EMfTQvTugeNOLNpJ2+OSgb5QPRmt9bD1qp6h21MTXyerJs+dCNyJJeXQMBKxsW/GcL1e9TlxRVZwz0vk7yZ1nagK3CSuooTReLr3Sm4r3bAN7kaR+8pZfhaSt3ck2SYnXKNNZNXkZzm97eS670SWRyf54wqPJiMLsr6FbGfv6x/bv7lvg5juW2iqxX1r5reJ+proqglwXKY2h0PSwY3GN0Tn16Mm8QNYtyhocrzMGtohmjoN3fHVTYt8E9XaTmJNZnTIdtiOaEWaZCTRgiae47KhloQOh8QClYlWugkU29JOdEqH6GGcDsKlx20KWtQ1mWoOyejxO/j1Oxiu11OaFHUyoUN8Q++VD3VIt0zmkAkFMTqEKYtzyFwpi3MI5xCmLDqEcwirLDpkviqLKWsYh1jBTxxr+POpc4ggd0Gvb0rYq7E0JdLDJzhEigNmzf4lbw+fsA6pOatP9UekhxmqrLC9O24rSFVOOdkge4uM75DH7bcSBhREpktZj5ylFKQPfu/B1NMFWc4XZIaUFW4PSK7um6VDetNnKkFsZkEk+bP9zaYsqfyZOmW5BVEnknWIBa0hCFNW6gUvsXBZVpDah2iMggCCqGVTVm1mF6asFoK0cwhTVuOUZS9LWfZpggRgUmfKGnVS19yjs8OnLM39vngOsWw+EmuTsnp8qd/92dQcnq2TdlWWOoKtk6Ys7xt2/p+S9XNIlUMMe9PocA4B3gqmXcwhrgJJxq2ygMum0iplVVVZUiVI/ykL2GHNXsJ9yToEy2vDpSzoPYa/o3nBHKJnOaR/QaAbBgoEab6XNXnK6kqQdg4ZN2VZgSDa/xwybpUFCSKN5hCpWRjWOeQ6kEO+JP4jmbr3HIfcXj8d+w3PlxWjvyNfMVwd+VeKTN17zl6W4/pv+kOfIshysiALKAh+1b7/lLXKWG5Bwgv2svRDHaKYIIYLUjyHOE7+gDuk9yrrLYJ49rLOckjvKcs8gsjxQuRtDimZQ3QuQQQXhHNI8yJrXfc6BXl+tdhZVVbJHHKdS5DFJYjdbq79u+SrdEiZIF9fX4ULke3f2vMqsvM5xMYrsnJl1kYQ21YArLLeK8hmD725Q8xzs/2oKcveIkjVHPK4xmkTPo7gFOS47n0WRDerluZV1t/pbyVPoPSessxVZGXq3qQgeso65P71lmZzPrDjq3rXDtEGDqmbQ36/c7TsGa3eqyxf1Zupe/E5pKrKqnukre+UpYKmrNgG/Osdog0d0pcgC+wQAwQ5bQ6Z9qFPO1eQs6qsGodc5xDksO49ZR0Sfu9yKPvP+A6RdoJsHhcom0OkljGrLLdDDm882QjyWElX7GV96MtnvFUvJMifIlZzxfAzXz7jrnqP6979Ez33lXTVfVkfKsiCOyRSZsUu4WrlfVmfmbJOFKT2mjod8uUts1BB3j2H2EBVlpUIsq97292XdYYgI71I2b0MOd6Ab+eQExSRkV6k7C+yDjfg280h7RWx66SCHG3At7v7/ec98u2wwb6uwj+FHC5E2grywV9XoWWCWLUgoSdBbFBBpFSQAG2Of/Q37FiVQ3QSh4wqyMFChHPIG4qso4XIUIJc5xNkwQQJdAi++f6FpKzdQoRVVvMpBGO7EGm3l/XZKctKtymsVhBWWW0dggnCOQSf09EN1M2sziqLgtAhTQVhlXXKHKLlcwirrMzeYlHZG1hlnbcyLDDII9RVc4i+mr5vlIMlkf37vesEef/tBKEnXM/hPz3XdGi0gnUIBUmH0+LfVKG5SbtqDnm7IN29+z37ks+cA0LVXhYdgguyCrjiDgmdO0Smc0jm73X/wzmkmUN2G8byVKjJ7cmn5z+LbL4U9f67Ltuk9o/Ev5DKjlotUzrkjFtxl7q1Eb7ImmgO6UePyLcfSbmWozpEl46w4o26eeYQ60mQrUWmECT1jQQjCLIUX1uw4QR5pCzp2CHFKas7QTQ9MW4HZy02i19UZpWXA71Y5ODIpDZPv9wg/ntqevyy6PuxS/bLTq140G9YhjgN3KE/7sdupo5PaGSbynpAE5cW8g371KNGyg5+Kw6QEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIVH+CTAA2PXaRL7YfsgAAAAASUVORK5CYII="}})],1)],1),i("v-uni-view",{staticClass:"form re"},[i("v-uni-view",{staticClass:"username"},[i("v-uni-input",{attrs:{placeholder:"请输入手机号","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),i("v-uni-view",{staticClass:"code"},[i("v-uni-view",{staticClass:"get-code",style:{color:t.getCodeBtnColor},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.showModal()}}},[t._v(t._s(t.getCodeText))]),i("v-uni-input",{attrs:{placeholder:"请输入验证码","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),i("v-uni-view",{staticClass:"password"},[i("v-uni-input",{attrs:{placeholder:"请输入密码",password:"true","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:t.passwd,callback:function(e){t.passwd=e},expression:"passwd"}})],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.doReg(e)}}},[t._v("立即注册")]),i("v-uni-view",{staticClass:"res"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.toLogin(e)}}},[t._v("已有账号立即登录")])],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:t.dialogModal,staticStyle:{"z-index":"900"}},[i("v-uni-view",{staticClass:"cu-dialog bg-f06c7a"},[i("v-uni-view",{staticClass:"cu-bar bg-f06c7a justify-end"},[i("v-uni-input",{staticClass:"basis-lg",attrs:{placeholder:"请输入验证码","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:t.captchaCode,callback:function(e){t.captchaCode=e},expression:"captchaCode"}}),i("v-uni-image",{staticClass:"basis-sm pic-captcha margin-right",attrs:{src:t.captcha.imageContent},on:{click:function(e){e=t.$handleEvent(e),t.getCaptchaCode()}}})],1),i("v-uni-view",{staticClass:"cu-bar bg-f06c7a justify-end"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-f06c7a margin-left",on:{click:function(e){e=t.$handleEvent(e),t.hideModal(e)}}},[t._v("确定")])],1)],1)],1)],1)],1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},"9c29":function(t,e,i){i("ec30")("Uint32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},c30d:function(t,e,i){"use strict";var n=i("446a"),r=i.n(n);r.a},df7c:function(t,e,i){(function(t){function i(t,e){for(var i=0,n=t.length-1;n>=0;n--){var r=t[n];"."===r?t.splice(n,1):".."===r?(t.splice(n,1),i++):i&&(t.splice(n,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return n.exec(t).slice(1)};function a(t,e){if(t.filter)return t.filter(e);for(var i=[],n=0;n<t.length;n++)e(t[n],n,t)&&i.push(t[n]);return i}e.resolve=function(){for(var e="",n=!1,r=arguments.length-1;r>=-1&&!n;r--){var o=r>=0?arguments[r]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,n="/"===o.charAt(0))}return e=i(a(e.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),r="/"===o(t,-1);return t=i(a(t.split("/"),function(t){return!!t}),!n).join("/"),t||n||(t="."),t&&r&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,i){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var i=t.length-1;i>=0;i--)if(""!==t[i])break;return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var r=n(t.split("/")),a=n(i.split("/")),o=Math.min(r.length,a.length),s=o,c=0;c<o;c++)if(r[c]!==a[c]){s=c;break}var u=[];for(c=s;c<r.length;c++)u.push("..");return u=u.concat(a.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),i=e[0],n=e[1];return i||n?(n&&(n=n.substr(0,n.length-1)),i+n):"."},e.basename=function(t,e){var i=r(t)[2];return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){return r(t)[3]};var o="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(this,i("4362"))},f511:function(t,e,i){"use strict";i.r(e);var n=i("4f14"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=r.a}}]);