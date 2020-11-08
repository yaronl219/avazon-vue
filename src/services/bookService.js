let gBooks = []


import { dbService } from './dbService'


export const bookService = {
    getAllBooks,
    getById,
    addBook,
    setBooks,
    getGoogleBooks,
    updateBook,
    removeBook
}



function setBooks(newBooks) {
    gBooks = newBooks
}

function getById(bookId) {
    return new Promise(resolve => {
        getAllBooks()
            .then(books => {
                // console.log(books)
                resolve(books.find(book => book.id === bookId))
            })
    })
}

async function getAllBooks() {
    if (!gBooks.length) {
        await dbService.connectDB()
    }

    return [...gBooks]
}

async function addBook(book) {

    const books = await dbService.addBook(book)

    return books
}

async function removeBook(bookId) {
    const books = gBooks.filter(book => book.id !== bookId)
    dbService.setBooks(books)
    return books

}

async function getGoogleBooks(keyword) {
    // if (!keyword) return Promise.resolve()
    const content = await fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${keyword}&maxResults=40`)
    let data = await content.json()
    data = data.items.filter(book => book.volumeInfo.saleInfo?.saleability !== 'NOT_FOR_SALE')
    return data
}

async function updateBook(book) {
    const books = await getAllBooks()

    const bookIdx = books.findIndex(currBook => currBook.id === book.id)
    books[bookIdx] = book
    await dbService.updateDB(books)
    return book
}