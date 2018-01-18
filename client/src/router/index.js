import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const SignIn = () => import('@/components/SignIn')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
