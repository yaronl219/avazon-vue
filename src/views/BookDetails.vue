<template>
  <section v-if="book">
    <button class="back-btn" @click="onBack()">Back</button>
    <div class="book-details-container">
      <div class="book-img">
        <img :src="book.thumbnail" />
      </div>
      <div class="book-details">
        <div class="book-title">
          <h2>{{ book.title }}</h2>
        </div>

        <div class="book-price">
          <span>${{ book.listPrice }}</span>
        </div>
        <div class="book-description">
          <p v-bind:style="{maxHeight:descriptionHeight}" >{{ book.description }}</p>
        </div>
      </div>
    </div>
    <div class="reviews-container">
      <review-add @new-review="addReview" />
      <div v-if="book.reviews" class="book-reviews-container">
        <review
          v-for="(review, index) in book.reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>
  </section>
  <section v-else>Loading...</section>
</template>

<script>
import ReviewAdd from "../components/ReviewAdd.vue";
import Review from "../components/Review.vue";
import { bookService } from "../services/bookService";

export default {
  async created() {
this.getBook()
  },
  data() {
    return {
      book: null,
      descriptionHeight: '20rem'
    };
  },
  components: {
    ReviewAdd,
    Review,
  },
  computed: {

  },
  methods: {
    async getBook() {
    const { id } = this.$route.params;
    this.book = await bookService.getById(id);
    },
    async addReview(review) {
      if (!this.book.reviews) this.book.reviews = [];
      this.book.reviews.push(review);
      await bookService.updateBook(this.book);
      this.getBook()
    },
    onBack() {
      this.$router.back()
    }
  },
};
</script>

<style lang="scss" scoped>
.back-btn {
  align-self: flex-start;
  background-color: rgba(29,29,29,0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.125rem;
  border: 1px solid rgba(29,29,29,1);
  &::before {
    content: "< ";
  }
  &:hover {
    background-color: rgba(29,29,29,0.35);
    transition: 0.2s;
  }
}

section {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
}
.book-details-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
  max-width: 700px;
}

.book-img {
  padding: 0.5rem;
  
  img {
    width: 100%;
  }
}

.book-price {
  order: 3;
  font-size: 1.4rem;
}

.book-details {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.book-description {
  order: 2;
  flex-grow: 1;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.reviews-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.book-reviews-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(13rem,1fr));
  gap: 0.5rem;
  grid-template-rows: 1fr;
}
</style>