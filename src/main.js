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

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrh7_TtsNjBv6P3sVfrxW9fh_BeCReXlM',
  authDomain: 'week7-grace.firebaseapp.com',
  projectId: 'week7-grace',
  storageBucket: 'week7-grace.appspot.com',
  messagingSenderId: '365975028098',
  appId: '1:365975028098:web:cf5c229a711d5cfc008f9b'
}

// Initialize Firebase
initializeApp(firebaseConfig)

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
