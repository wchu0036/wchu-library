<template>
  <div class="col-8 offset-2">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <label for="username" class="form-label">Username:</label>
      <input type="text" class="form-control" id="username" v-model="username" />
      <label for="password" class="form-label">Password:</label>
      <input type="password" class="form-control" id="password" v-model="password" />
      <p class="text-danger" v-if="isError">Incorrect user name or password</p>
      <div class="text-center mt-5">
        <button type="submit" class="btn btn-primary me-2">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      isError: false
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      const user = { username: this.username, password: this.password }
      if (user.username == 'user' && user.password == 'User123$') {
        this.login(user)
        this.$router.push({ name: 'About' })
      } else {
        console.log('error')
        this.isError = true
      }
    }
  }
}
</script>
