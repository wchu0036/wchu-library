<template>
  <div class="col-8 offset-2">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <label for="username" class="form-label">Username:</label>
      <input type="text" class="form-control" id="username" v-model="formData.username" />
      <label for="password" class="form-label">Password:</label>
      <input type="password" class="form-control" id="password" v-model="formData.password" />
      <div class="text-center mt-5">
        <button type="submit" class="btn btn-primary me-2">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: ''
})

const isAuthenticated = ref(false)

const submitForm = () => {
  console.log('submitted form')
  if (validateLoginForm) {
    console.log('loginnnnn')
    isAuthenticated.value = true
  } else {
    console.log('fail to login')
    isAuthenticated.value = false
  }
}

const validateLoginForm = () => {
  // hardcode for login info
  return formData.value.username === 'user' && formData.value.password === 'User123$'
}
</script>
