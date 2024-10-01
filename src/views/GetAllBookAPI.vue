<template>
  <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getAllBookAPI()
  },
  methods: {
    async getAllBookAPI() {
      try {
        const response = await axios.get('https://getallbooks-en5se5nzka-uc.a.run.app')
        this.jsondata = response.data
        this.error = null
      } catch (error) {
        console.log('Error getting all book:', error)
        this.error = error
        this.count = null
      }
    }
  }
}
</script>
