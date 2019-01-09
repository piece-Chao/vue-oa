import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Banner from '@/components/Banner'
import Table from '@/components/Table'
import Chars from '@/components/Chars'
import Login from '@/components/Login'
import Waterfall from '@/components/Waterfall'
import Notepad from '@/components/Notepad'
import Upload from '@/components/Upload'
import UserSetUp from '@/components/UserSetUp'
import Edit from '@/components/Edit'
import Community from '@/components/Community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect: '/Banner',
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
        },
        {
          path: '/Waterfall',
          name: 'Waterfall',
          component: Waterfall
        },
        {
          path: '/Notepad',
          name: 'Notepad',
          component: Notepad
        },
        {
          path: '/Upload',
          name: 'Upload',
          component: Upload
        },
        {
          path: '/UserSetUp',
          name: 'UserSetUp',
          component: UserSetUp
        },
        {
          path: '/Edit',
          name: 'Edit',
          component: Edit
        },
        {
          path: '/Community',
          name: 'Community',
          component: Community
        }
      ]
    }
  ]
})
