<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" />
      </div>
      <button type="submit">Add Book</button>
    </form>
    <button @click="updateBook">Update Book</button>
    <button @click="deleteBook">Delete Book</button>
  </div>
  <BookList />
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

import BookList from '../components/BookList.vue'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })
        isbn.value = ''
        name.value = ''
        alert('Book added successfully!')
      } catch (error) {
        console.log('Error adding book: ', error)
      }
    }

    const updateBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.empty) {
          alert('Book not found')
          return
        }

        querySnapshot.forEach(async (doc) => {
          await updateDoc(doc.ref, {
            name: name.value
          })
        })

        alert('Book updated successfully!')
      } catch (error) {
        console.log('Error updating book: ', error)
      }
    }

    const deleteBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.empty) {
          alert('Book not found')
          return
        }

        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref)
        })

        alert('Book deleted successfully!')
      } catch (error) {
        console.log('Error deleting book: ', error)
      }
    }

    return {
      isbn,
      name,
      addBook,
      updateBook,
      deleteBook
    }
  },
  components: {
    BookList
  }
}
</script>
