(function(t){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"04bf":function(t,e,n){t.exports=n.p+"img/recovered.22bcc444.svg"},"287a":function(t,e,n){"use strict";n("94dc")},"3ede":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RouterComponent")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navbar"),n("router-view")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"navbar-content"},[n("h2",{staticClass:"navbar-title"},[t._v("CORONA STAT V.1")]),n("ul",{staticClass:"navbar-links"},[n("li",{class:{"navbar-link":!0,"navbar-link-active":"/"===t.activePath}},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePath("/")}}},[t._v("Главная")])]),n("li",{class:{"navbar-link":!0,"navbar-link-active":"/about"===t.activePath}},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePath("/about")}}},[t._v("О сервисе")])])])])])},s=[],l={name:"Navbar",data:function(){return{activePath:"/"}},methods:{changePath:function(t){this.activePath=t,this.$router.push(t)}}},f=l,p=(n("846b"),n("2877")),d=Object(p["a"])(f,u,s,!1,null,"c81d2c2a",null),v=d.exports,h={name:"RouterComponent",components:{Navbar:v}},m=h,b=(n("778a"),Object(p["a"])(m,c,i,!1,null,"71787e7d",null)),g=b.exports,y=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"main-content"},[n("form",[n("select",{attrs:{name:"country"},on:{change:t.handleChange}},[n("option",{attrs:{disabled:"",selected:""}},[t._v("Выберите страну")]),t._l(t.countries,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),n("StatGraph",{attrs:{dataCountry:t.dataByCountry}})],1)])},_=[],x=(n("d81d"),n("96cf"),n("1da1")),w=n("bc3a"),O=n.n(w),k={baseUrl:"https://api.covid19api.com",countries:"/countries",country:"/country"},P=O.a.create({baseURL:k.baseUrl}),j=(n("99af"),n("d4ec")),S=n("bee2"),R=function(){function t(){Object(j["a"])(this,t)}return Object(S["a"])(t,null,[{key:"getCountries",value:function(){return P.get(k.countries)}},{key:"getStatByCountry",value:function(t){var e="".concat(k.country,"/").concat(t);return P.get(e)}}]),t}(),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"form-settings"},[a("div",{staticClass:"settings-graph-control"},[a("label",{attrs:{for:""}},[t._v("Увеличение:")]),a("vue-numeric-input",{attrs:{min:1,max:100,step:1},model:{value:t.scaleY,callback:function(e){t.scaleY=e},expression:"scaleY"}})],1),a("div",{staticClass:"settings-graph-control"},[a("label",{attrs:{for:""}},[t._v("Ширина колонки:")]),a("vue-numeric-input",{attrs:{min:1,max:100,step:1},model:{value:t.widthColumn,callback:function(e){t.widthColumn=e},expression:"widthColumn"}})],1),a("div",{staticClass:"settings-graph-control"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.graphFilter,expression:"graphFilter"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.graphFilter=e.target.multiple?n:n[0]}}},[a("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Все значения")]),a("option",{domProps:{value:100}},[t._v("> 100")]),a("option",{domProps:{value:300}},[t._v("> 300")]),a("option",{domProps:{value:1e3}},[t._v("> 1000")]),a("option",{domProps:{value:2e3}},[t._v("> 2000")])])])]),a("div",[a("vue-range-slider",{ref:"slider",model:{value:t.rengeValue,callback:function(e){t.rengeValue=e},expression:"rengeValue"}})],1),a("div",{staticClass:"stat-graph"},t._l(t.filtredData,(function(e,r){return a("div",{key:e.name+"_"+r,staticClass:"stat-graph-column",style:{height:e.active/t.scaleY+"px",width:t.widthColumn+"px",zoom:t.rengeValue+"%"},on:{mousemove:function(e){return t.handleHover(r)}}},[t.hoveredIndex===r?a("div",{staticClass:"column-info",style:t.columnInfoStyle},[a("div",{staticClass:"column-info-row"},[a("img",{attrs:{src:n("b8bd"),alt:"calendar"}}),a("span",[t._v(t._s(e.date.slice(0,10)))])]),a("div",{staticClass:"column-info-row"},[a("img",{attrs:{src:n("b3e7"),alt:""}}),a("span",[t._v("Кол.во заболевших: "+t._s(e.active))])]),a("div",{staticClass:"column-info-row"},[a("img",{attrs:{src:n("04bf"),alt:""}}),a("span",[t._v("Кол.во выздоровевших: "+t._s(e.recovered))])])]):t._e()])})),0)])},$=[],A=(n("4de4"),n("e1b1"),n("b8c8")),B=n("5247"),D=n.n(B),I={name:"StatGraph",props:{dataCountry:Array},data:function(){return{scaleY:5,widthColumn:20,graphFilter:null,hoveredIndex:null,rengeValue:100}},components:{VueRangeSlider:A["a"],VueNumericInput:D.a},methods:{handleHover:function(t){this.hoveredIndex=t}},computed:{filtredData:function(){var t=this;return this.dataCountry.filter((function(e){return e.active>=t.graphFilter}))},columnInfoStyle:function(){return this.hoveredIndex>225?{right:"1px"}:{left:"1px"}},changeRengeValue:function(){return this.rengeValue}}},E=I,N=(n("ade8"),Object(p["a"])(E,V,$,!1,null,"2b86a434",null)),T=N.exports,F={name:"Main",components:{StatGraph:T},data:function(){return{countries:[],dataByCountry:[]}},methods:{fetchCountries:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.getCountries();case 3:e=t.sent,n=e.data,this.countries=n.map((function(t){return t.Country})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),fetchDataByCountry:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.getStatByCountry(e);case 3:n=t.sent,a=n.data,this.dataByCountry=a.map((function(t){return{name:t.Country,recovered:t.Recovered,active:t.Active,date:t.Date}})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),handleChange:function(t){var e=t.currentTarget.value;this.fetchDataByCountry(e)}},mounted:function(){this.fetchCountries()}},M=F,Y=(n("bf6f"),Object(p["a"])(M,C,_,!1,null,"55a25c54",null)),G=Y.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"})},H=[],J={name:"About"},z=J,L=(n("287a"),Object(p["a"])(z,U,H,!1,null,"d1238b1e",null)),q=L.exports,K=[{path:"/",component:G},{path:"/about",component:q}],Q=new y["a"]({routes:K}),W={name:"App",components:{RouterComponent:g}},X=W,Z=(n("034f"),Object(p["a"])(X,r,o,!1,null,null,null)),tt=Z.exports;a["a"].config.productionTip=!1,a["a"].use(y["a"]),new a["a"]({router:Q,render:function(t){return t(tt)}}).$mount("#app")},"5c4d":function(t,e,n){},"6f6b":function(t,e,n){},"778a":function(t,e,n){"use strict";n("3ede")},"846b":function(t,e,n){"use strict";n("5c4d")},"85ec":function(t,e,n){},"94dc":function(t,e,n){},ade8:function(t,e,n){"use strict";n("eddd")},b3e7:function(t,e,n){t.exports=n.p+"img/active.1aa240ef.svg"},b8bd:function(t,e,n){t.exports=n.p+"img/calendar.a4368a61.svg"},bf6f:function(t,e,n){"use strict";n("6f6b")},eddd:function(t,e,n){}});
//# sourceMappingURL=app.d79c87f7.js.map