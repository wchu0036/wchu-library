<script>
import BHeader from './components/BHeader.vue'

export default {
  name: 'App',
  components: {
    BHeader
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI' && this.$route.name !== 'GetAllBookAPI'
    }
  }
}
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
