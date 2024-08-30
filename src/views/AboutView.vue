<template>
  <div class="about col-8 offset-2">
    <div v-if="store.state.isAuthenticated">
      <h1>About Our Library</h1>
      <p>
        Welcome to our digital library! We're dedicated to providing a vast collection of books and
        resources to our community.
      </p>
    </div>
  </div>
</template>

<script setup>
import store from '@/store/store'
</script>

<style scoped></style>
