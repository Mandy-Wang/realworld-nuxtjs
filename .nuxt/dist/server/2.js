exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return unFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
// /api/articles
 // 注意上面按需加
// 文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 关注文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    // header: {
    //   // 注意token 格式
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cuYm9ndWFuMzYwLmNvbSIsImlhdCI6MTYxNzg3ODExOSwibmJmIjoxNjE3ODc4MTE5LCJleHAiOjE2MTc4ODUzMTksImRhdGEiOnsidHlwZSI6InVzZXIiLCJ1c2VyaWQiOjF9fQ.7wgYUXf5qypTVA8ydYcFXw6ITERHnY0vCrvCXH7RjRY`
    // },
    url: '/api/articles/feed',
    params
  });
}; // 标签接口

const getTags = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/tags' // params

  });
}; // 文章点赞

const onFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 删除点赞  slug 文章名

const unFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; //获取文章内容

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; //获取文章内容

const CreateArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles/',
    data
  });
}; //获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; //发布文章评论

const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/create/index.vue?vue&type=template&id=756087c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\" class=\"form-control\"><div class=\"tag-list\"></div></fieldset> <button class=\"btn btn-lg pull-xs-right btn-primary\">\n                Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/create/index.vue?vue&type=template&id=756087c8&

// EXTERNAL MODULE: ./api/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/create/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var createvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  // 也可以是[]
  name: 'EditerIndex',

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  methods: {
    async CreateArticle() {
      const {
        data
      } = await Object(api["a" /* CreateArticle */])({
        article: this.article
      });
      console.log(data);

      if (data.article) {
        // this.$router.push({
        //   })
        alert('创建成功！');
        this.article = {
          title: '',
          description: '',
          body: '',
          tagList: []
        };
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/create/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/create/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "850bd914"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map