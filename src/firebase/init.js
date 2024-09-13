// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxeC3PLk0XsuP5cxqL27vWRkq0ah802Co',
  authDomain: 'week7-grace-b5f86.firebaseapp.com',
  projectId: 'week7-grace-b5f86',
  storageBucket: 'week7-grace-b5f86.appspot.com',
  messagingSenderId: '37788436461',
  appId: '1:37788436461:web:91b51c022adc6a1b1f09e4'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
