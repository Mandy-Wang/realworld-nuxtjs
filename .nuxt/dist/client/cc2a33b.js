(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"g",(function(){return l})),r.d(e,"h",(function(){return f})),r.d(e,"i",(function(){return v})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return m})),r.d(e,"e",(function(){return _})),r.d(e,"b",(function(){return h}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"GET",url:"/api/tags"})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(data){return Object(n.b)({method:"POST",url:"/api/articles/",data:data})},_=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},h=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})}},200:function(t,e,r){var n=r(3),c=r(32),o=r(9),l=r(201),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},201:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},210:function(t,e,r){var n=r(3),c=r(211);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},211:function(t,e,r){var n=r(5).parseInt,c=r(200).trim,o=r(201),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},212:function(t,e,r){"use strict";var n=r(5),c=r(23),o=r(24),l=r(129),f=r(63),v=r(9),d=r(49).f,m=r(50).f,_=r(11).f,h=r(200).trim,C="Number",x=n.Number,k=x,E=x.prototype,I=o(r(83)(E))==C,N="trim"in String.prototype,O=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=N?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(I?v((function(){E.valueOf.call(r)})):o(r)!=C)?l(new k(O(e)),r,x):O(e)};for(var y,w=r(7)?d(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;w.length>j;j++)c(k,y=w[j])&&!c(x,y)&&_(x,y,m(k,y));x.prototype=E,E.constructor=x,r(13)(n,C,x)}},272:function(t,e,r){"use strict";r.r(e);var n=r(10),c=r(4),o=(r(36),r(210),r(212),r(38),r(14),r(39),r(194)),l={name:"home",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l,f,v,d,m,_,h,C,x,k,E,I,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,c=t.store,l=Number.parseInt(r.page||1),f=2,v=r.tag,d=r.tab||"global_feed",m=c.state.user&&"your_feed"===d?o.f:o.d,e.next=8,Promise.all([m({limit:f,offset:(l-1)*f,tag:v}),Object(o.g)()]);case 8:return _=e.sent,h=Object(n.a)(_,2),C=h[0],x=h[1],k=C.data,E=k.articles,I=k.articlesCount,E.forEach((function(article){article.favoriteDisabled=!1})),N=x.data.tags,e.abrupt("return",{articles:E,articlesCount:I,page:l,limit:f,tags:N,tag:v,tab:r.tab||"global_feed"});case 16:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}},methods:{onFavorite:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(o.i)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(o.h)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},f=r(30),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("Your Feed")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"global_feed"}},exact:""}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{to:{name:"home",query:{tab:"tag",tag:t.tag}},exact:""}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n              "+t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tab:"tag",tag:e}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);