(function(t){function e(e){for(var r,c,u=e[0],i=e[1],s=e[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/spa-ga-demo/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/news/4038689"}},[t._v("新聞1")]),t._v(" | "),n("router-link",{attrs:{to:"/news/4032601"}},[t._v("新聞2")]),t._v(" | "),n("router-link",{attrs:{to:"/news/4034614"}},[t._v("新聞3")])],1),n("router-view")],1)},a=[],c=(n("034f"),n("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),s=i.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.content))])])},p=[],d=(n("d3b7"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),h={data:function(){return{title:"",content:""}},computed:{newsId:function(){return this.$route.params.id}},watch:{newsId:function(t){this.fetchNews(t)}},mounted:function(){this.fetchNews(this.newsId)},methods:{fetchNews:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,o,a,c,u,i,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://gcs-static-json-lb.nownews.com/api/v1/client/news/".concat(t,".json")).then((function(t){return t.json()}));case 2:return r=n.sent,o=r.data.news,a=o.postTitle,c=o.postContent,e.title=a,e.content=c,document.querySelector("title").innerText=a,n.next=9,e.$nextTick();case 9:u=location,i=u.pathname,s=u.hash,l=u.search,gtag("config","UA-17681458-7",{page_path:i+s+l});case 11:case"end":return n.stop()}}),n)})))()}}},v=h,w=Object(c["a"])(v,f,p,!1,null,null,null),b=w.exports;r["a"].use(l["a"]);var m=[{path:"/news/:id",name:"News",component:b}],g=new l["a"]({mode:"history",base:"/spa-ga-demo/dist/",routes:m}),_=g;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(t){return t(s)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.f82bbd01.js.map