<template>
  <div class="book-preview-container">
    <div class="icon-container">
      <v-fab-transition>
        <v-btn @click.stop="removeBook" fab dark x-small>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
    <div @click="selectBook" class="book-preview">
      <div class="book-title">
        <h4>{{ book.title }}</h4>
      </div>
      <div class="book-img-container">
        <div v-if="book.isOnSale" class="sale-container">SALE</div>
        <img :src="book.thumbnail" />
      </div>
      <div class="book-price" :class="bookPrice">${{ book.listPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  computed: {
    bookLength() {
      if (this.book.pageCount < 100) return "Light Reading";
      if (this.book.pageCount < 500) return "Decent Reading";
      return "Long Reading";
    },
    bookAge() {
      const currYear = new Date().getFullYear();
      const bookAge = currYear - this.book.publishedDate;
      if (bookAge > 10) return "Vetern Book";
      if (bookAge < 1) return "New!";
      return "";
    },
    bookPrice() {
      const bookPrice = this.book.listPrice.amount;
      if (bookPrice > 150) return "book-red";
      if (bookPrice < 20) return "book-green";
      return "";
    },
  },
  methods: {
    removeBook() {
      this.$store.dispatch({ type: "removeBook", bookId: this.book.id });
    },
    selectBook() {
      this.$router.push(`book/${this.book.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.book-preview-container {
  cursor: pointer;
  position: relative;
  
  &:hover {
    transition: 0.18s;
    background-color: rgba(29, 29, 29, 0.1);
  }
}
.icon-container {
  position: absolute;
  right: 0px;
  top: 0px;
  transform: translate(50%, -50%);
}
.book-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  text-align: center;
}
.book-img-container {
  position: relative;
  flex-grow: 1;
  .sale-container {
    position: absolute;
    background-color: #42b983;
    color: white;
    padding: 0.2rem 1rem;
    top: 1rem;
    right: 0px;
  }
  img {
    width: 100%;
  }
}
.book-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  // display: grid;
  // grid-template-rows: 1.25rem 1fr 1.25rem;
}
.book-price {
  text-align: center;
}
</style>