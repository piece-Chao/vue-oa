import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const Banner = () => import('@/components/Banner')
const Table = () => import('@/components/Table')
const Chars = () => import('@/components/Chars')
const Login = () => import('@/components/Login')
const Waterfall = () => import('@/components/Waterfall')
const Notepad = () => import('@/components/Notepad')
const Upload = () => import('@/components/Upload')
const UserSetUp = () => import('@/components/UserSetUp')
const TodayNews = () => import('@/components/TodayNews')
const TodayVideo = () => import('@/components/TodayVideo')
const ToolsComponent = () => import('@/components/ToolsComponent')

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
          path: '/TodayNews',
          name: 'TodayNews',
          component: TodayNews
        },
        {
          path: '/TodayVideo',
          name: 'TodayVideo',
          component: TodayVideo
        },
        {
          path: '/ToolsComponent',
          name: 'ToolsComponent',
          component: ToolsComponent
        }
      ]
    }
  ]
})
