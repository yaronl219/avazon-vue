<template>
  <div>
    <router-view />
    <div class="book-app-container">
      <h1>Books</h1>
      <div class="book-app-controls">
        <BookFilter @filtered="setFilter" />
        <div class="add-book-btn-container">
          <v-fab-transition>
            <v-btn @click="onAddBook()" fab small dark>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </div>
      </div>
      <div class="book-grid">
        <BookPreview v-for="book in booksToShow" :key="book.id" :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
// import { bookService } from "../services/bookService";
import BookFilter from "../components/BookFilter";
import BookPreview from "../components/BookPreview";

// import {dbService} from "../services/dbService"

export default {
  data() {
    return {
      books: null,
      filterBy: "",
    };
  },
  async created() {
    this.loadBooks();
  },
  methods: {
    setFilter(filterBy) {
      this.$store.commit({ type: "setFilter", filterBy });
    },
    async loadBooks() {
      this.$store.dispatch({ type: "loadBooks" });
    },
    onAddBook() {
      this.$router.push("/books/add");
    },
  },
  components: {
    BookFilter,
    BookPreview,
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.book-app-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-app-controls {
  display: flex;
  width: 100%;
}

.filter-container {
  margin-bottom: 2rem;
  width: 100%;
  margin-right: 2rem;
}

.book-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-template-rows: 1fr;
  column-gap: 1rem;
  row-gap: 1.5rem;
  grid-template-rows: 1fr;
}

.book-preview-container {
  padding: 0.5rem;
  box-shadow: 0px 0px 0.25rem rgba(29, 29, 29, 0.3);
  border-radius: 0.25rem;
  
}
</style>