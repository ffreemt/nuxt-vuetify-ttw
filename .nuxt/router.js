import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5cc5e667 = () => interopDefault(import('../pages/axios-elasticsearch.js' /* webpackChunkName: "pages/axios-elasticsearch" */))
const _261ed725 = () => interopDefault(import('../pages/axios-elasticsearch-copy.js' /* webpackChunkName: "pages/axios-elasticsearch-copy" */))
const _5b50005c = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _d91152f0 = () => interopDefault(import('../pages/search_es.js' /* webpackChunkName: "pages/search_es" */))
const _651b0511 = () => interopDefault(import('../pages/test-run.js' /* webpackChunkName: "pages/test-run" */))
const _d5126262 = () => interopDefault(import('../pages/uncor.vue' /* webpackChunkName: "pages/uncor" */))
const _dff3c9e4 = () => interopDefault(import('../pages/Uncor-.vue' /* webpackChunkName: "pages/Uncor-" */))
const _73282658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5cc5e667,
    name: "axios-elasticsearch"
  }, {
    path: "/axios-elasticsearch-copy",
    component: _261ed725,
    name: "axios-elasticsearch-copy"
  }, {
    path: "/inspire",
    component: _5b50005c,
    name: "inspire"
  }, {
    path: "/search_es",
    component: _d91152f0,
    name: "search_es"
  }, {
    path: "/test-run",
    component: _651b0511,
    name: "test-run"
  }, {
    path: "/uncor",
    component: _d5126262,
    name: "uncor"
  }, {
    path: "/Uncor-",
    component: _dff3c9e4,
    name: "Uncor-"
  }, {
    path: "/",
    component: _73282658,
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
