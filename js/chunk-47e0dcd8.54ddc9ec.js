(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e0dcd8"],{"2bbd":function(o,e,t){"use strict";t.r(e);var i=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"add-book-container"},[t("div",{staticClass:"backdrop",on:{click:function(e){return o.onBackDropClick()}}},[t("div",{staticClass:"content-container",on:{click:function(o){o.stopPropagation()}}},[t("div",{staticClass:"close-container"},[t("v-icon",{on:{click:function(e){return o.exitAddBook()}}},[o._v("mdi-close")])],1),o._m(0),t("h4",[o._v("Search a book from Google Books")]),t("div",{staticClass:"search-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.query,expression:"query"}],attrs:{type:"text",placeholder:"Search Google books"},domProps:{value:o.query},on:{input:[function(e){e.target.composing||(o.query=e.target.value)},o.querySelections]}}),o.googleBooks.length&&o.query.length?t("div",{staticClass:"book-options-modal"},[t("ul",o._l(o.googleBooks,(function(e){return t("li",{key:e.id,on:{click:function(t){return o.selectGoogleBook(e)}}},[o._v(" "+o._s(e.volumeInfo.title)+" ")])})),0)]):o._e()]),t("div",{staticClass:"add-book-form"},[o.query?o._e():t("div",{staticClass:"add-book-manually-title"},[t("h4",[o._v("Or add it manually")])]),t("form",{on:{submit:function(e){return e.preventDefault(),o.addBook(e)}}},[t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"book-title"}},[o._v("Book Title")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.title,expression:"book.title"}],attrs:{id:"book-title",required:"",type:"text",placeholder:"Book title"},domProps:{value:o.book.title},on:{input:function(e){e.target.composing||o.$set(o.book,"title",e.target.value)}}})]),t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"book-author"}},[o._v("Book Author")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.author,expression:"book.author"}],attrs:{id:"book-author",required:"",type:"text",placeholder:"Book Author"},domProps:{value:o.book.author},on:{input:function(e){e.target.composing||o.$set(o.book,"author",e.target.value)}}})]),t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"page-count"}},[o._v("Page Count")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.pageCount,expression:"book.pageCount"}],attrs:{id:"page-count",required:"",type:"number",placeholder:"Page count"},domProps:{value:o.book.pageCount},on:{input:function(e){e.target.composing||o.$set(o.book,"pageCount",e.target.value)}}})]),t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"book-price"}},[o._v("Book Price")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.listPrice,expression:"book.listPrice"}],attrs:{id:"book-price",required:"",type:"number",placeholder:"Page count"},domProps:{value:o.book.listPrice},on:{input:function(e){e.target.composing||o.$set(o.book,"listPrice",e.target.value)}}})]),t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"sale-checkbox"}},[o._v("On Sale")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.isOnSale,expression:"book.isOnSale"}],attrs:{id:"sale-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(o.book.isOnSale)?o._i(o.book.isOnSale,null)>-1:o.book.isOnSale},on:{change:function(e){var t=o.book.isOnSale,i=e.target,a=!!i.checked;if(Array.isArray(t)){var n=null,r=o._i(t,n);i.checked?r<0&&o.$set(o.book,"isOnSale",t.concat([n])):r>-1&&o.$set(o.book,"isOnSale",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.book,"isOnSale",a)}}})]),t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"book-thumbnail"}},[o._v("Book Image URL")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.thumbnail,expression:"book.thumbnail"}],attrs:{id:"book-thumbnail",required:"",type:"url",placeholder:"Image url"},domProps:{value:o.book.thumbnail},on:{input:function(e){e.target.composing||o.$set(o.book,"thumbnail",e.target.value)}}})]),t("div",{staticClass:"book-form-field-container"},[t("label",{attrs:{for:"publish-date"}},[o._v("Publish Year")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.publishedAt,expression:"book.publishedAt"}],attrs:{id:"publish-date",required:"",type:"number",placeholder:"Publish year"},domProps:{value:o.book.publishedAt},on:{input:function(e){e.target.composing||o.$set(o.book,"publishedAt",e.target.value)}}})]),t("div",{staticClass:"book-form-field-container"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:o.book.description,expression:"book.description"}],attrs:{placeholder:"Book Description"},domProps:{value:o.book.description},on:{input:function(e){e.target.composing||o.$set(o.book,"description",e.target.value)}}})]),t("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[o._v("Submit")])])])])])])},a=[function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"content-title"},[t("h2",[o._v("Add new book")])])}],n=(t("a4d3"),t("e01a"),t("d81d"),t("96cf"),t("1da1")),r=t("6991"),s={data:function(){return{googleBooks:[],loading:!1,search:null,query:"",book:{title:"",author:"",pageCount:"",isOnSale:!1,thumbnail:null,listPrice:0,description:"",publishedAt:(new Date).getFullYear()}}},computed:{googleBookTitles:function(){if(!this.googleBooks.length)return[];var o=this.googleBooks.map((function(o){return o.volumeInfo.title}));return o}},methods:{querySelections:function(o){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,r["a"].getGoogleBooks(o.target.value);case 3:i=t.sent,e.googleBooks=i,e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},addBook:function(){var o=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o.$store.dispatch({type:"addBook",book:o.book}),o.exitAddBook();case 2:case"end":return e.stop()}}),e)})))()},selectGoogleBook:function(o){this.googleBooks=[];var e=o.volumeInfo;e.authors&&(this.book.author=e.authors[0]),e.imageLinks.thumbnail&&(this.book.thumbnail=e.imageLinks.thumbnail),e.title&&(this.book.title=e.title),e.description&&(this.book.description=e.description),e.pageCount&&(this.book.pageCount=e.pageCount),e.publishedDate&&(this.book.publishedAt=e.publishedDate)},exitAddBook:function(){this.$router.push("/books")},onBackDropClick:function(){this.exitAddBook()}}},l=s,u=(t("f5db"),t("2877")),c=t("6544"),d=t.n(c),b=t("132d"),k=Object(u["a"])(l,i,a,!1,null,"e6f4716c",null);e["default"]=k.exports;d()(k,{VIcon:b["a"]})},a5bb:function(o,e,t){},f5db:function(o,e,t){"use strict";t("a5bb")}}]);
//# sourceMappingURL=chunk-47e0dcd8.54ddc9ec.js.map