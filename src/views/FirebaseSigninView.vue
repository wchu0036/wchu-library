<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const db = getFirestore()

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('firebase sign in successful')
      localStorage.setItem('isAuthenticated', true)
      console.log(auth.currentUser)
      console.log(auth.currentUser.uid)
      const userId = auth.currentUser.uid
      loadRoleToLocalStorage(userId)
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
    })
}

const loadRoleToLocalStorage = async (userId) => {
  console.log('try to load role')
  const userDoc = await getDoc(doc(db, 'users', userId))
  console.log(userDoc.data())
  localStorage.setItem('role', userDoc.data().role)
}
</script>
