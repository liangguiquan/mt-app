import Vue from 'vue'
import Router from 'vue-router'

import DefaultPage from './layout/default.vue'
import BlankPage from './layout/blank.vue'
import Index from './page/index.vue'
import GoodsList from './page/goodsList.vue'
import ChangeCity from './page/changeCity.vue'

import Register from './page/register.vue'
import Login from './page/login.vue'






Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: DefaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        }
      ]
    },

    {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        }, {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }


  ]
})
