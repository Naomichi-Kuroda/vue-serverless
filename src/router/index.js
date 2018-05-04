import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cognito from '@/cognito'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Confirm from '@/components/Confirm'
import Home from '@/pages/Home'
import Problem from '@/pages/Problem'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  cognito.isAuthenticated()
    .then(session => {
      next()
    })
    .catch(session => {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })
}

const logout = (to, from, next) => {
  cognito.logout()
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: 'home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    { path: '/logout',
      beforeEnter: logout
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/problem/:id',
      name: 'Problem',
      component: Problem,
      beforeEnter: requireAuth
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: requireAuth
    }
  ]
})
