import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e93135e = () => interopDefault(import('../pages/axios-elasticsearch.js' /* webpackChunkName: "pages/axios-elasticsearch" */))
const _3c7da97b = () => interopDefault(import('../pages/axios-elasticsearch-copy.js' /* webpackChunkName: "pages/axios-elasticsearch-copy" */))
const _1736da30 = () => interopDefault(import('../pages/dictcor.vue' /* webpackChunkName: "pages/dictcor" */))
const _6ab04cb0 = () => interopDefault(import('../pages/europarl.vue' /* webpackChunkName: "pages/europarl" */))
const _ee4b829c = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1734e2f2 = () => interopDefault(import('../pages/search_es.js' /* webpackChunkName: "pages/search_es" */))
const _dab57932 = () => interopDefault(import('../pages/test-run.js' /* webpackChunkName: "pages/test-run" */))
const _2008aaa5 = () => interopDefault(import('../pages/uncor.vue' /* webpackChunkName: "pages/uncor" */))
const _57afb9f8 = () => interopDefault(import('../pages/Uncor-.vue' /* webpackChunkName: "pages/Uncor-" */))
const _50fdc8aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/axios-elasticsearch",
    component: _5e93135e,
    name: "axios-elasticsearch"
  }, {
    path: "/axios-elasticsearch-copy",
    component: _3c7da97b,
    name: "axios-elasticsearch-copy"
  }, {
    path: "/dictcor",
    component: _1736da30,
    name: "dictcor"
  }, {
    path: "/europarl",
    component: _6ab04cb0,
    name: "europarl"
  }, {
    path: "/inspire",
    component: _ee4b829c,
    name: "inspire"
  }, {
    path: "/search_es",
    component: _1734e2f2,
    name: "search_es"
  }, {
    path: "/test-run",
    component: _dab57932,
    name: "test-run"
  }, {
    path: "/uncor",
    component: _2008aaa5,
    name: "uncor"
  }, {
    path: "/Uncor-",
    component: _57afb9f8,
    name: "Uncor-"
  }, {
    path: "/",
    component: _50fdc8aa,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
