<script setup>
// import JSON from './components/JSON.vue'
//import Form from './components/HomeView.vue'
//import Wk3Challenge from './components/Wk3Challenge.vue'
import BHeader from './components/BHeader.vue'
</script>

<template>
  <header>
    <BHeader />
  </header>
  <main>
    <!--<Form />-->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
