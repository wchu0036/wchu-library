<template>
  <div>
    <h1>3 Books with ISBN > 1000, in the ascending order of isbn</h1>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.name }} - ISBN: {{ book.isbn }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore'

export default {
  setup() {
    const books = ref([])

    const fetchBooks = async () => {
      try {
        console.log('try fetching books')
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1000),
          orderBy('isbn', 'asc'), // Order by ISBN in ascending order
          limit(3) // Limit to showing only 3
        )
        const querySnapchot = await getDocs(q)
        const booksArray = []
        querySnapchot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (error) {
        console.log('Error fetching books: ', error)
      }
    }
    onMounted(() => {
      fetchBooks()
    })
    return {
      books
    }
  }
}
</script>
