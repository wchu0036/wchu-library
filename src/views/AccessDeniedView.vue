<script setup>
import store from '@/store/store'
</script>
<template>
  <div class="denied-section" v-if="!store.state.isAuthenticated">
    <h1>Access Denied</h1>
    <p>You are not authorised to view this page.</p>
  </div>
</template>
