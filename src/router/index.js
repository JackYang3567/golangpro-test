import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'

import Blog from '../views/Blog.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 默认 hash 模式的URL中有#号
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home', // 命名路由
      component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
      },
    {
      // 动态路径参数 以冒号开头
      path: '/blog',
      component: Blog
    },
   
    {
      // 会匹配所有路径
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
    }
  ]
})

export default router
