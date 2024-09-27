// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOouV83hb_Clo50J1_k4Z-5IiiDZ8rhUY',
  authDomain: 'week7-grace-7742a.firebaseapp.com',
  projectId: 'week7-grace-7742a',
  storageBucket: 'week7-grace-7742a.appspot.com',
  messagingSenderId: '721859597143',
  appId: '1:721859597143:web:7e48f8a44ba8d27f42e412'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
