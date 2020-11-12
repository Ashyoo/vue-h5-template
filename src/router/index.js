import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Home from '../views/home/index.vue'
import My from '../views/my/index.vue'
import state from '../store/state'

// 解决多次点击重复路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 注册登录
const Login = () => import('../views/login/index.vue')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  // 解决路由跳转页面没有置顶
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  // !!注意: 二级路由不需要加 '/'
  routes: [
    {
      path: '/',
      redirect: '/home',
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    },
    {
      // 根页面
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      // 根页面
      path: '/my',
      name: 'my',
      component: My
    },
    {
      // 登录
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (state.userInfo.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
