(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2d4cfe7b","chunk-47e0dcd8":"54ddc9ec","chunk-67462488":"84dcaf31","chunk-7d2dc3fb":"6442a151"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-47e0dcd8":1,"chunk-67462488":1,"chunk-7d2dc3fb":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"83488c41","chunk-47e0dcd8":"d620f900","chunk-67462488":"9a9c5c51","chunk-7d2dc3fb":"feffe2f9"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/avazon-vue/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16a3":function(e,t,n){"use strict";n("cd8c")},"1ee9":function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"4ba1":function(e,t,n){e.exports=n.p+"img/avazon_logo.0b3e0118.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-bar"},[e._m(0),n("navbar")],1),n("router-view")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-container"},[r("img",{attrs:{src:n("4ba1"),alt:"logo"}})])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/books"}},[e._v("Books")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)},u=[],c={},s=c,l=(n("16a3"),n("2877")),d=Object(l["a"])(s,i,u,!1,null,null,null),f=d.exports,p={components:{Navbar:f}},h=p,b=(n("5c0b"),Object(l["a"])(h,o,a,!1,null,null,null)),m=b.exports,v=(n("d3b7"),n("8c4f")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[e._m(0),n("div",{staticClass:"featured-container"},[n("h2",[e._v("Featured Books")]),n("div",{staticClass:"carousel-container"},[n("v-carousel",{attrs:{height:"max-content","hide-delimiter-background":"","hide-delimiters":""},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[n("div",{staticClass:"inner-carousel"},[e._l(e.booksToShow,(function(e,t){return[n("v-carousel-item",{key:t},[n("book-minified",{key:e.id,attrs:{book:e}})],1)]}))],2)])],1)])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-title"},[n("h1",[e._v("Welcome to avazon")])])}],w=(n("4de4"),n("96cf"),n("1da1")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"book-minified"},[n("div",{staticClass:"book-details-container"},[n("div",{staticClass:"book-img",on:{click:e.clickBook}},[n("img",{attrs:{src:e.book.thumbnail}})]),n("div",{staticClass:"book-details"},[n("div",{staticClass:"book-title"},[n("h2",[e._v(e._s(e.book.title))])]),n("div",{staticClass:"book-price"},[n("span",[e._v("$"+e._s(e.book.listPrice))])]),n("div",{staticClass:"book-description"},[e.isMinified?n("div",[n("p",[e._v(e._s(e.descriptionMinified))]),e.book.description.length>420?n("small",{on:{click:e.toggleDescription}},[e._v("Read More")]):e._e()]):n("div",[n("p",[e._v(e._s(e.book.description))]),n("small",{on:{click:e.toggleDescription}},[e._v("Read Less")])])])])])])},B=[],x=(n("a4d3"),n("e01a"),{props:["book"],data:function(){return{isMinified:!0}},computed:{descriptionMinified:function(){var e=this.book.description.length,t=420;if(e>t){var n=this.book.description.substring(0,t);return n+="...",n}return this.book.description}},methods:{toggleDescription:function(){this.isMinified=!this.isMinified},clickBook:function(){this.$router.push("book/".concat(this.book.id))}}}),_=x,O=(n("c658"),Object(l["a"])(_,y,B,!1,null,null,null)),j=O.exports,R={name:"Home",data:function(){return{slide:0}},components:{BookMinified:j},created:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadBooks();case 1:case"end":return t.stop()}}),t)})))()},computed:{booksToShow:function(){var e=this.$store.getters.booksToShow;return e?e.filter((function(e){return e.isOnSale})):[]}},methods:{loadBooks:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch({type:"loadBooks"});case 1:case"end":return t.stop()}}),t)})))()}}},C=R,S=(n("21bb"),n("6544")),A=n.n(S),E=n("5e66"),M=n("3e35"),T=Object(l["a"])(C,k,g,!1,null,null,null),P=T.exports;A()(T,{VCarousel:E["a"],VCarouselItem:M["a"]}),r["a"].use(v["a"]);var D=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/books",name:"Books",component:function(){return n.e("chunk-67462488").then(n.bind(null,"889b"))},children:[{path:"add",component:function(){return n.e("chunk-47e0dcd8").then(n.bind(null,"2bbd"))}}]},{path:"/book/:id",name:"BookDetails",component:function(){return n.e("chunk-7d2dc3fb").then(n.bind(null,"4ba2"))}}],I=new v["a"]({routes:D}),L=I,$=n("2f62"),F=(n("caad"),n("2532"),n("6991")),N={state:{books:null,bookFilterBy:""},getters:{booksToShow:function(e){var t=e.books;return e.bookFilterBy?null===t||void 0===t?void 0:t.filter((function(t){return t.title.toLowerCase().includes(e.bookFilterBy.toLowerCase())})):t}},mutations:{setBooks:function(e,t){var n=t.books;e.books=n},setFilter:function(e,t){var n=t.filterBy;e.bookFilterBy=n}},actions:{loadBooks:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F["a"].getAllBooks();case 2:n=t.sent,e.commit({type:"setBooks",books:n});case 4:case"end":return t.stop()}}),t)})))()},removeBook:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F["a"].removeBook(t.bookId);case 2:r=n.sent,e.commit({type:"setBooks",books:r});case 4:case"end":return n.stop()}}),n)})))()},addBook:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F["a"].addBook(t.book);case 2:r=n.sent,e.commit({type:"setBooks",books:r});case 4:case"end":return n.stop()}}),n)})))()}}};r["a"].use($["a"]);var H=new $["a"].Store({strict:!0,state:{},mutations:{},actions:{},modules:{bookModule:N}}),z=n("f309");r["a"].use(z["a"]);var q=new z["a"]({}),K=n("d1d6"),V=n.n(K);r["a"].config.productionTip=!1,new r["a"]({router:L,vueDebounce:V.a,store:H,vuetify:q,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6991:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n("4de4"),n("7db0"),n("c740"),n("d3b7");var r=n("2909"),o=(n("96cf"),n("1da1")),a=n("59ca"),i=(n("66ce"),{apiKey:"AIzaSyA-sOW0VF8l4TB7EOK8VoPnjAvq13fMQmU",authDomain:"vue-books-15296.firebaseapp.com",databaseURL:"https://vue-books-15296.firebaseio.com",projectId:"vue-books-15296",storageBucket:"vue-books-15296.appspot.com",messagingSenderId:"737900929723",appId:"1:737900929723:web:fff48e9c0af2cef4b67f9e",measurementId:"G-M17NB38HKH"});a["initializeApp"](i);var u=a["database"](),c={connectDB:s,addBook:m,updateDB:d,setBooks:h};function s(){return l.apply(this,arguments)}function l(){return l=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("getting books"),e.abrupt("return",new Promise((function(e){var t=u.ref("/");t.on("value",(function(t){var n=t.val();g.setBooks(n),e(!0)}))})));case 2:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.ref("/").set(t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function h(e){return b.apply(this,arguments)}function b(){return b=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d(t);case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return v=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.id=p(8),e.next=3,g.getAllBooks();case 3:return n=e.sent,n.push(t),e.next=7,d(n);case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}var k=[],g={getAllBooks:B,getById:y,addBook:_,setBooks:w,getGoogleBooks:C,updateBook:A,removeBook:j};function w(e){k=e}function y(e){return new Promise((function(t){B().then((function(n){t(n.find((function(t){return t.id===e})))}))}))}function B(){return x.apply(this,arguments)}function x(){return x=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(k.length){e.next=3;break}return e.next=3,c.connectDB();case 3:return e.abrupt("return",Object(r["a"])(k));case 4:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function _(e){return O.apply(this,arguments)}function O(){return O=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.addBook(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(e){return R.apply(this,arguments)}function R(){return R=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=k.filter((function(e){return e.id!==t})),c.setBooks(n),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function C(e){return S.apply(this,arguments)}function S(){return S=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?printType=books&q=".concat(t,"&maxResults=40"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,r=r.items.filter((function(e){var t;return"NOT_FOR_SALE"!==(null===(t=e.volumeInfo.saleInfo)||void 0===t?void 0:t.saleability)})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function A(e){return E.apply(this,arguments)}function E(){return E=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return n=e.sent,r=n.findIndex((function(e){return e.id===t.id})),n[r]=t,e.next=7,c.updateDB(n);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}},"9c0c":function(e,t,n){},c658:function(e,t,n){"use strict";n("1ee9")},cd8c:function(e,t,n){}});
//# sourceMappingURL=app.fdd33d0a.js.map