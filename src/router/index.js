import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Banner from '@/components/Banner'
import Table from '@/components/Table'
import Chars from '@/components/Chars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Banner',
          name: 'Banner',
          component: Banner
        },
        {
          path: '/Table',
          name: 'Table',
          component: Table
        },
        {
          path: '/Chars',
          name: 'Chars',
          component: Chars
        }
      ]
    }
  ]
})
