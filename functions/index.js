/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();

      // Extract the data from each document in the snapshot
      const books = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Send the books array as a response
      res.status(200).json({books});
    } catch (error) {
      console.error("Error getting books:", error.message);
      res.status(500).send("Error getting books");
    }
  });
});

exports.addCapitalisiedBook = onRequest( (req, res) => {
  cors(req, res, async () => {
    try {
      const {isbn, name} = req.body;

      // Check if data is provided
      if (!isbn || !name) {
        return res.status(400).send("ISBN and Name are required.");
      }

      // Capitalize the name
      const capitalizedName = name.toUpperCase();

      // Save to Firestore
      const booksCollection = admin.firestore().collection("books");
      await booksCollection.add({
        isbn: isbn,
        name: capitalizedName,
      });

      res.status(200).send({message: "Book added with capitalized name!"});
    } catch (error) {
      console.error("Error capitalizing book name:", error);
      res.status(500).send("Error adding book.");
    }
  });
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
