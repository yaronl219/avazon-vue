<template>
  <section class="home">
    <div class="header-title">
      <h1>Welcome to avazon</h1>
      
    </div>
    <div class="featured-container">
      <h2>Featured Books</h2>
      <div class="carousel-container">
        <v-carousel
          v-model="slide"
          height="max-content"
          hide-delimiter-background
          hide-delimiters
        >
          <div class="inner-carousel">
            <template v-for="(book, idx) in booksToShow">
              <v-carousel-item :key="idx">
                <book-minified :key="book.id" :book="book"></book-minified>
              </v-carousel-item>
            </template>
          </div>
        </v-carousel>
      </div>
    </div>
  </section>
</template>

<script>
// import BookPreview from "../components/BookPreview.vue";
import BookMinified from "../components/BookMinified.vue";

export default {
  name: "Home",
  data() {
    return {
      slide: 0,
    };
  },
  components: {
    BookMinified,
    // BookPreview,
  },
  async created() {
    this.loadBooks();
  },
  computed: {
    booksToShow() {
      const booksToShow = this.$store.getters.booksToShow;
      if (!booksToShow) return [];
      return booksToShow.filter((book) => book.isOnSale);
      // return this.$store.getters.booksToShow
    },
  },
  methods: {
    async loadBooks() {
      this.$store.dispatch({ type: "loadBooks" });
    },
  },
};
</script>

<style lang="scss">
.home {
  padding: 1rem;
  h1 {
    font-size: 200%;
    margin-bottom: 2px;
  }
}

.carousel-container {
  
  // width: 800px;
  .v-window__next {
    right: 0px;
  }
}
</style>