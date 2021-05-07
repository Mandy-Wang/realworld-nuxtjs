import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a269461 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _022f6fd6 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _43f6d352 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0a93d15c = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _f8f2c80e = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _2bb13a33 = () => interopDefault(import('..\\pages\\create' /* webpackChunkName: "" */))
const _3cff4ac2 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3a269461,
    children: [{
      path: "",
      component: _022f6fd6,
      name: "home"
    }, {
      path: "/login",
      component: _43f6d352,
      name: "login"
    }, {
      path: "/register",
      component: _43f6d352,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0a93d15c,
      name: "profile"
    }, {
      path: "/settings",
      component: _f8f2c80e,
      name: "settings"
    }, {
      path: "/editor",
      component: _2bb13a33,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3cff4ac2,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
