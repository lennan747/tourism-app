(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-reflects"],{"0cad":function(t,e,i){"use strict";i.r(e);var a=i("23df"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"23df":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a4bb"));i("ac6a"),i("96cf");var s=a(i("3b8d")),r=i("b7e7"),u={data:function(){return{withdrawList:{},status:{Application:"审核",by:"通过",Refuse:"拒绝"}}},onLoad:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.withdraws)();case 2:i=t.sent,uni.removeStorageSync("withdrawed"),(0,n.default)(i).forEach(function(t){"Application"==i[t].status&&uni.setStorageSync("withdrawed",i[t])}),this.withdrawList=i;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{}};e.default=u},5736:function(t,e,i){"use strict";i.r(e);var a=i("6d6a"),n=i("0cad");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var r=i("2877"),u=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"20788102",null);e["default"]=u.exports},"6d6a":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"cu-list margin"},t._l(t.withdrawList,function(e,a){return i("v-uni-view",{staticClass:"cu-item flex justify-between bg-white margin-top-sm"},["by"==e.status?i("v-uni-view",{staticClass:"margin"},[i("v-uni-view",[t._v("申请提现金额:"+t._s(e.application_amount)+"￥")]),i("v-uni-view",[t._v("申请提现日期:"+t._s(e.application_date)+"￥")]),i("v-uni-view",[t._v("实到金额:"+t._s(e.transfer_amount)+"￥")]),i("v-uni-view",[t._v("实到日期:"+t._s(e.transfer_date))]),i("v-uni-view",[t._v("提现费率:"+t._s(e.handling_fee)+"%")]),i("v-uni-view",{staticClass:"text-red"},[t._v("提现成功")])],1):t._e(),"Application"==e.status?i("v-uni-view",{staticClass:"margin"},[i("v-uni-view",[t._v("申请提现金额:"+t._s(e.application_amount)+"￥")]),i("v-uni-view",[t._v("申请提现日期:"+t._s(e.application_date)+"￥")]),i("v-uni-view",{staticClass:"text-red"},[t._v("审核中")])],1):t._e(),"Refuse"==e.status?i("v-uni-view",{staticClass:"margin"},[i("v-uni-view",[t._v("申请提现金额:"+t._s(e.application_amount)+"￥")]),i("v-uni-view",[t._v("申请提现日期:"+t._s(e.application_date)+"￥")]),i("v-uni-view",{staticClass:"text-red"},[t._v("拒绝理由:"+t._s(e.reason))]),i("v-uni-view",{staticClass:"text-red"},[t._v("拒绝")])],1):t._e()],1)}),1),i("v-uni-view",{staticClass:"cu-bar bg-white tabbar border foot"},[i("v-uni-navigator",{staticClass:"bg-red submit",attrs:{url:"/pages/user/reflectdo"}},[t._v("提现")])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}}]);