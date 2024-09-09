import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'
import AdminView from '@/views/AdminView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'

import store from '@/store/store'

const routes = [
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      console.log('checking if user')
      if (!store.state.isAuthenticated) {
        console.log('Not authenticated, redirecting to login')
        next({ path: '/login' }) // Redirect to the login page
      } else {
        console.log('is a user')
        next() // Allow navigation to the 'About' page
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/accessDenied',
    name: 'Accessdenied',
    component: AccessDeniedView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    beforeEnter: (to, from, next) => {
      console.log('checking if admin')
      if (store.state.isAuthenticated && store.state.user) {
        if (store.state.user.username === 'admin') {
          console.log('Authenticated as admin, navigating to Admin page')
          next() // Allow navigation to the 'Admin' page
        } else {
          console.log('User is authenticated but not an admin, redirecting to access denied')
          next({ path: '/accessDenied' })
        }
      } else {
        console.log('User is not authenticated, redirecting to access denied')
        next({ path: '/accessDenied' })
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!store.state.isAuthenticated && to.name !== 'Login') {
//     return { name: 'Login' }
//   } else {
//     next()
//   }
// })

export default router
