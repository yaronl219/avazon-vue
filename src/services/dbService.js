import * as firebase from 'firebase/app'
import "firebase/database";
import { bookService } from './bookService'

const firebaseConfig = {
    apiKey: "AIzaSyA-sOW0VF8l4TB7EOK8VoPnjAvq13fMQmU",
    authDomain: "vue-books-15296.firebaseapp.com",
    databaseURL: "https://vue-books-15296.firebaseio.com",
    projectId: "vue-books-15296",
    storageBucket: "vue-books-15296.appspot.com",
    messagingSenderId: "737900929723",
    appId: "1:737900929723:web:fff48e9c0af2cef4b67f9e",
    measurementId: "G-M17NB38HKH"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()


export const dbService = {
    connectDB,
    addBook,
    updateDB,
    setBooks
}

async function connectDB() {
    console.log('getting books')
    return new Promise(resolve => {
        const books = database.ref('/')
        books.on('value', function (snapshot) {
            let receivedBooks = snapshot.val()
            bookService.setBooks(receivedBooks)
            resolve(true)
        })
    })
}

async function updateDB(books) {
    await database.ref(`/`).set(books)
    return books
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

async function setBooks(books) {
    updateDB(books)
}

async function addBook(book) {

    book.id = _makeId(8)

    const books = await bookService.getAllBooks()

    books.push(book)

    await updateDB(books)
    return books
}