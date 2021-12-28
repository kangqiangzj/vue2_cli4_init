/*
 * @Author: zhangjie
 * @Date: 2021-12-28 17:04:16
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-28 19:15:43
 * @FilePath: \vue2_cli4_init\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
