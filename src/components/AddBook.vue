<template>
  <div class="add-book-container">
    <div @click="onBackDropClick()" class="backdrop">
      <div @click.stop class="content-container">
        <div class="close-container">
          <v-icon @click="exitAddBook()">mdi-close</v-icon>
        </div>
        <div class="content-title">
          <h2>Add new book</h2>
        </div>
        <h4>Search a book from Google Books</h4>
        <div class="search-container">
          <input
            type="text"
            v-model="query"
            @input="querySelections"
            placeholder="Search Google books"
          />
          <div v-if="googleBooks.length && query.length" class="book-options-modal">
            <ul>
              <li
                v-for="book in googleBooks"
                :key="book.id"
                @click="selectGoogleBook(book)"
              >
                {{ book.volumeInfo.title }}
              </li>
            </ul>
          </div>
        </div>
        <div class="add-book-form">
          <div class="add-book-manually-title" v-if="!query">
            <h4>Or add it manually</h4>
          </div>
          <form @submit.prevent="addBook">
            <div class="book-form-field-container">
              <label for="book-title">Book Title</label>
              <input
                id="book-title"
                v-model="book.title"
                required
                type="text"
                placeholder="Book title"
              />
            </div>
            <div class="book-form-field-container">
              <label for="book-author">Book Author</label>
              <input
                id="book-author"
                v-model="book.author"
                required
                type="text"
                placeholder="Book Author"
              />
            </div>
            <div class="book-form-field-container">
              <label for="page-count">Page Count</label>
              <input
                id="page-count"
                v-model="book.pageCount"
                required
                type="number"
                placeholder="Page count"
              />
            </div>
            <div class="book-form-field-container">
              <label for="book-price">Book Price</label>
              <input
                id="book-price"
                v-model="book.listPrice"
                required
                type="number"
                placeholder="Page count"
              />
            </div>
            <div class="book-form-field-container">
              <label for="sale-checkbox">On Sale</label>
              <input
                id="sale-checkbox"
                type="checkbox"
                v-model="book.isOnSale"
              />
            </div>
            <div class="book-form-field-container">
              <label for="book-thumbnail">Book Image URL</label>
              <input
                id="book-thumbnail"
                v-model="book.thumbnail"
                required
                type="url"
                placeholder="Image url"
              />
            </div>
            <div class="book-form-field-container">
              <label for="publish-date">Publish Year</label>
              <input
                id="publish-date"
                v-model="book.publishedAt"
                required
                type="number"
                placeholder="Publish year"
              />
            </div>
            <div class="book-form-field-container">
              <textarea
                v-model="book.description"
                placeholder="Book Description"
              />
            </div>
            <button class="submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bookService } from "../services/bookService";



export default {
  data() {
    return {
      googleBooks: [],
      loading: false,
      search: null,
      query: "",
      book: {
        title: "",
        author: "",
        pageCount: "",
        isOnSale: false,
        thumbnail: null,
        listPrice: 0,
        description: "",
        publishedAt: new Date().getFullYear(),
      },
    };
  },
  computed: {
    googleBookTitles() {
      if (!this.googleBooks.length) return [];
      const bookTitles = this.googleBooks.map((book) => book.volumeInfo.title);
      
      return bookTitles;
    },
  },
  methods: {
    async querySelections(ev) {
      
      this.loading = true;
      const receivedBooks = await bookService.getGoogleBooks(ev.target.value);
      this.googleBooks = receivedBooks;
      this.loading = false;
    },
    async addBook() {
      // bookService.addGoogleBook(this.book);
      this.$store.dispatch({type: "addBook", book:this.book})
      this.exitAddBook()
    },
    selectGoogleBook(gBook) {
      this.googleBooks = [];
      
      const bookInfo = gBook.volumeInfo;
      if (bookInfo.authors) this.book.author = bookInfo.authors[0];
      if (bookInfo.imageLinks.thumbnail)
        this.book.thumbnail = bookInfo.imageLinks.thumbnail;
      if (bookInfo.title) this.book.title = bookInfo.title;
      if (bookInfo.description) this.book.description = bookInfo.description;
      if (bookInfo.pageCount) this.book.pageCount = bookInfo.pageCount;
      if (bookInfo.publishedDate)
        this.book.publishedAt = bookInfo.publishedDate;
    },
    exitAddBook() {
      this.$router.push('/books');
    },
    onBackDropClick() {
      this.exitAddBook();
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  background-color: rgba(29, 29, 29, 0.7);
  top: 0px;
  height: 100vh;
  overflow: scroll;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  z-index: 9;
}

.content-container {
  
  
  position: relative;
  padding: 2rem;
  // height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(29, 29, 29, 0.5);
}

.close-container {
  position: absolute;
  right: 1px;
  top: 1px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  &:hover {
    background-color: rgba(29, 29, 29, 0.1);
    transition: 0.2s;
  }
}
.search-container {
  width: 100%;
  position: relative;
  input {
    width: 100%;
    outline: 0px;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
  }
}
.book-options-modal {
  position: absolute;
  padding: 0.25rem 0.5rem;

  width: 100%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 6px 6px rgba(29, 29, 29, 0.5);
  height: 11rem;
  overflow: scroll;
  ul {
    list-style: none;
    li {
      cursor: pointer;
    }
  }
}

.add-book-manually-title {
  margin-bottom: 0.5rem;
}
.add-book-form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.book-form-field-container {
  bottom: 0px;
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  textarea {
    height: 5rem;
    resize: none;
  }
  textarea,
  input {
    border: 1px solid rgb(29, 29, 29);
    flex-grow: 1;
  }
  label {
    flex-grow: 2;
    margin-right: 0.25rem;
  }
}
</style>