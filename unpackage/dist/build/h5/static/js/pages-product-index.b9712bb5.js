(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-index"],{"391e":function(t,e,a){"use strict";a.r(e);var i=a("540a"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"4c07":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"2000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){e=t.$handleEvent(e),t.cardSwiper(e)}}},t._l(t.swiperList,function(e,i){return a("v-uni-swiper-item",{key:i,class:t.cardCur==i?"cur":""},[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}})],1)],1)}),1),a("v-uni-view",{staticClass:"bg-white margin"},[a("v-uni-view",{staticClass:"text-left text-black text-lg padding-top-sm padding-left"},[t._v(t._s(t.product.title))]),a("v-uni-view",{staticClass:"text-left text-red text-sm padding-top-sm padding-left"},[t._v("¥"+t._s(t.product.price))]),a("v-uni-view",{staticClass:"text-left text-sm padding-top-sm padding-left padding-bottom-sm"},[t._v("销量"+t._s(t.product.sold_count))])],1),a("v-uni-view",{staticClass:"bg-white margin"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"padding-sm flex flex-wrap"},t._l(t.SkuList,function(e,i){return a("v-uni-view",{key:i,staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"cu-tag",class:"line-red",attrs:{"data-sku":e.id,"data-name":e.title,"data-price":e.price},on:{click:function(e){e=t.$handleEvent(e),t.checkSku(e)}}},[t._v(t._s(e.title))])],1)}),1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("备注")]),a("v-uni-input",{attrs:{placeholder:"输入备注",name:"input"},model:{value:t.mark,callback:function(e){t.mark=e},expression:"mark"}})],1)],1),a("v-uni-view",{staticClass:"bg-white margin"},[a("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":""}},t._l(t.tabList,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-blue cur":"",attrs:{"data-id":i},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[t._v(t._s(e.title))])}),1),t._l(t.tabList,function(e,i){return i==t.TabCur?a("v-uni-view",{key:i,staticClass:"text-center"},[a("v-uni-view",{domProps:{innerHTML:t._s(e.content)}})],1):t._e()})],2),a("v-uni-view",{staticClass:"cu-bar bg-white tabbar border foot"},[a("v-uni-view",{staticClass:"bg-red submit",on:{click:function(e){e=t.$handleEvent(e),t.showModal()}}},[t._v("立即订购")])],1),a("v-uni-view",{staticClass:"cu-modal",class:t.dialogModal,staticStyle:{"z-index":"900"}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-f06c7a justify-end"},[a("v-uni-input",{staticClass:"basis-lg",attrs:{placeholder:"请输入验证码","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:t.captchaCode,callback:function(e){t.captchaCode=e},expression:"captchaCode"}}),a("v-uni-image",{staticClass:"basis-sm pic-captcha margin-right",attrs:{src:t.captcha.imageContent},on:{click:function(e){e=t.$handleEvent(e),t.getCaptchaCode()}}})],1),a("v-uni-view",{staticClass:"cu-bar bg-f06c7a justify-end"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-f06c7a margin-left",on:{click:function(e){e=t.$handleEvent(e),t.hideModal(e)}}},[t._v("确定")])],1)],1)],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"540a":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("e814"));a("7f7f"),a("96cf");var s=i(a("3b8d")),r=a("b7e7"),c={data:function(){return{dialogModal:!1,captchaCode:"",captcha:{},cardCur:0,TabCur:0,dotStyle:!1,date:"2019-09-09",product:{title:null},swiperList:[],tabList:{},SkuList:[],SkuId:null,amount:1,mark:""}},onLoad:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.id=e.id,t.next=3,(0,r.getProductsOfDetails)({id:this.id});case 3:a=t.sent,200===a.statusCode&&(console.log(a),this.product=a.data,this.swiperList=a.data["image"],this.tabList=[{title:"商品详情",content:a.data.product_detail},{title:"行程详情",content:a.data.journey_detail},{title:"价格详情",content:a.data.cost_detail}],this.SkuList=a.data.sku.data,this.product.title=this.SkuList[0].title,this.product.price=this.SkuList[0].price,this.SkuId=this.SkuList[0].id),this.TowerSwiper("swiperList");case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},checkSku:function(t){console.log(t),this.product.title=t.target.dataset.name,this.product.price=t.target.dataset.price,this.SkuId=t.target.dataset.sku},DateChange:function(t){this.date=t.detail.value},DotStyle:function(t){this.dotStyle=t.detail.value},TowerSwiper:function(t){for(var e=this[t],a=0;a<e.length;a++)e[a].zIndex=(0,n.default)(e.length/2)+1-Math.abs(a-(0,n.default)(e.length/2)),e[a].mLeft=a-(0,n.default)(e.length/2);this.swiperList=e},cardSwiper:function(t){this.cardCur=t.detail.current},showModal:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("打开模态窗"),this.SkuId){t.next=4;break}return uni.showToast({title:"请选择商品",icon:"none"}),t.abrupt("return",!1);case 4:return t.next=6,(0,r.orderaptcha)();case 6:e=t.sent,201===e.statusCode&&(this.captcha={key:e.data.captcha_key,imageContent:e.data.captcha_image_content,expiredAt:Date.parse(e.data.expired_at)}),this.dialogModal="show";case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),hideModal:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.productOrder)({captcha_key:this.captcha.key,captcha_code:this.captchaCode,remark:this.remark,type:"product",items:[{sku_id:this.SkuId,amount:this.amount}]});case 2:e=t.sent,201===e.statusCode&&uni.showToast({title:"下单成功",icon:"success"}),this.dialogModal=!1;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getCaptchaCode:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.orderaptcha)();case 2:e=t.sent,201===e.statusCode&&(this.captcha={key:e.data.captcha_key,imageContent:e.data.captcha_image_content,expiredAt:Date.parse(e.data.expired_at)});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=c},"876b":function(t,e,a){"use strict";a.r(e);var i=a("4c07"),n=a("391e");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("eb70");var r=a("2877"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"baeedc32",null);e["default"]=c.exports},"8cbe":function(t,e,a){var i=a("f604");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1d14f3ce",i,!0,{sourceMap:!1,shadowMode:!1})},eb70:function(t,e,a){"use strict";var i=a("8cbe"),n=a.n(i);n.a},f604:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-baeedc32]{height:100%}.bg-f06c7a[data-v-baeedc32]{background-color:#f06c7a;color:#fff;height:100%}.pic-captcha[data-v-baeedc32]{height:10vw}",""])}}]);