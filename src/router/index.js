import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'
import store from '@/store/store'

const routes = [
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
      if (!store.state.isAuthenticated) {
        console.log('Not authenticated, redirecting to login')
        next({ path: '/login' }) // Redirect to the login page
      } else {
        next() // Allow navigation to the 'About' page
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
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
