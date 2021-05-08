exports.ids = [5];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/index.vue?vue&type=template&id=b2ac24e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-b2ac24e6><div class=\"row\" data-v-b2ac24e6><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-b2ac24e6><h1 class=\"text-xs-center\" data-v-b2ac24e6>Your Settings</h1> <form data-v-b2ac24e6><fieldset data-v-b2ac24e6><fieldset class=\"form-group\" data-v-b2ac24e6><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.data.image)))+" class=\"form-control\" data-v-b2ac24e6></fieldset> <fieldset class=\"form-group\" data-v-b2ac24e6><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.data.username)))+" class=\"form-control form-control-lg\" data-v-b2ac24e6></fieldset> <fieldset class=\"form-group\" data-v-b2ac24e6><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-b2ac24e6>"+_vm._ssrEscape(_vm._s(_vm.data.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-b2ac24e6><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.data.email)))+" class=\"form-control form-control-lg\" data-v-b2ac24e6></fieldset> <fieldset class=\"form-group\" data-v-b2ac24e6><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.data.password)))+" class=\"form-control form-control-lg\" data-v-b2ac24e6></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-b2ac24e6>\n                Update Settings\n              </button></fieldset></form></div> <button class=\"btn btn-outline-danger col-md-2 offset-md-6\" style=\"margin-top:50px\" data-v-b2ac24e6>\n          Or click here to logout.\n        </button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/setting/index.vue?vue&type=template&id=b2ac24e6&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/index.vue?vue&type=script&lang=js&
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

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  // 也可以是[]
  name: 'SettingsIndex',

  data() {
    return {
      data: {
        email: '',
        bio: '',
        image: '',
        username: '',
        password: ''
      }
    };
  },

  methods: {
    async getUser() {
      const {
        data
      } = await Object(user["c" /* user */])(); // console.log(data)

      this.data = data.user;
    },

    async updateUser() {
      const {
        data
      } = await Object(user["d" /* userUpdate */])(this.data);
      console.log(data);

      if (data.user) {
        this.$router.push({
          name: 'profile',
          params: {
            username: data.user.username
          }
        });
      }
    },

    logout() {
      console.log('user');
      Cookie.remove('user', {
        path: ''
      }); // this.$router.push('/')
    }

  },

  mounted() {
    this.getUser();
  }

});
// CONCATENATED MODULE: ./pages/setting/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/setting/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b2ac24e6",
  "6b1afd72"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map