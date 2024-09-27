<template>
  <h1>Get Book Count</h1>
  <button @click="getBookCount">Get Book Count</button>
  <div v-if="count !== null">Total number of books: {{ count }}</div>
  <div v-if="error">{{ error }}</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      count: null,
      error: null
    }
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get('https://countbooks-en5se5nzka-uc.a.run.app')
        this.count = response.data.count
        this.error = null
      } catch (error) {
        console.log('Error fetching book count:', error)
        this.error = error
        this.count = null
      }
    }
  }
}
</script>
