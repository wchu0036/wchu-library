//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
// import './style.css'
import router from './router'
import store from './store/store'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import './firebase/init'

//for using primevue
const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(store)
app.use(router)
app.mount('#app')
