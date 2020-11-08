import {bookService} from '../../services/bookService'


export default {
    state: {
        books: null,
        bookFilterBy: ''
    },
    getters: {
        booksToShow(state) {
            const books = state.books
            if (!state.bookFilterBy) return books
            return books?.filter((book) => book.title.toLowerCase().includes(state.bookFilterBy.toLowerCase()))
        }
    },
    mutations: {
        setBooks(state,{books}) {
            state.books = books
        },
        setFilter(state,{filterBy}) {
            state.bookFilterBy = filterBy
        }
    },
    actions: {
        async loadBooks(context) {
            
            const books = await bookService.getAllBooks()
            context.commit({ type: 'setBooks', books })
        },
        async removeBook(context,action) {
            const books = await bookService.removeBook(action.bookId)
            context.commit({ type: 'setBooks', books })
        },
        async addBook(context,action) {
            const books = await bookService.addBook(action.book)
            context.commit({ type: 'setBooks', books })
        }
    }
}