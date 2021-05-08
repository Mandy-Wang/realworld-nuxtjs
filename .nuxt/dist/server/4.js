exports.ids = [4];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return userUpdate; });
/* unused harmony export follow */
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 注意上面按需加载
// 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 用户信息

const user = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/user'
  });
}; // 更新用户信息

const userUpdate = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
}; // follow

const follow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/profiles/${username}/follow`,
    data
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=3a4f50f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin? 'Sign in': 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errs),function(mes,key){return ((_vm._ssrList((mes),function(m,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(key)+" "+_vm._s(m)+"\n            ")+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" required=\"required\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input required=\"required\" type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"password\" placeholder=\"Password\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin? 'Sign in': 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=3a4f50f6&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
 // 仅在客户端加载js-cookie包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticaticated',
  // 也可以是[]
  name: 'LoginIndex',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errs: {} // email: ['a','v'],username: ['a','d']

    };
  },

  methods: {
    async onSubmit() {
      // {"user":{"id":158361,"email":"45678@45678.com","createdAt":"2021-04-07T11:51:42.846Z","updatedAt":"2021-04-07T11:51:42.851Z","username":"45678","bio":null,"image":null,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU4MzYxLCJ1c2VybmFtZSI6IjQ1Njc4IiwiZXhwIjoxNjIyOTgwMzAyfQ.2y-CSRz4Rvjfj3LgNkUNVejgmng4slROoQgwlRVNIqo"}}
      try {
        // 提交表单请求
        const {
          data
        } = this.isLogin ? await Object(user["a" /* login */])({
          user: {
            email: this.user.email,
            password: this.user.password
          }
        }) : await Object(user["b" /* register */])({
          user: this.user
        });
        this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失 我们需要把数据持久化

        Cookie.set('user', data.user); // 保存用户登录状态 并跳转到首页

        this.$router.push('/');
      } catch (err) {
        console.dir(err);
        this.errs = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "189f684b"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map