<template>
  <div class="book-minified">
    <div class="book-details-container">
      <div  @click="clickBook" class="book-img">
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
          <div v-if="!isMinified">
            <p>{{ book.description }}</p>
            <small @click="toggleDescription">Read Less</small>
          </div>
          <div v-else>
            <p>{{ descriptionMinified }}</p>
            <small
              v-if="book.description.length > 420"
              @click="toggleDescription"
              >Read More</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  data() {
    return {
      isMinified: true,
    };
  },
  computed: {
    descriptionMinified() {
      const length = this.book.description.length;
      const maxLength = 420;
      if (length > maxLength) {
        let description = this.book.description.substring(0, maxLength);
        description += "...";
        return description;
      }
      return this.book.description;
    },
  },
  methods: {
    toggleDescription() {
      this.isMinified = !this.isMinified;
    },
    clickBook() {
      this.$router.push(`book/${this.book.id}`);
    },
  },
};
</script>

<style lang="scss">
.book-minified {
  color: rgba(29, 29, 29, 1);
  width: 100%;
  height: 100%;
}

.book-details-container {
  flex-grow: 1;
  margin: 0 auto;
  max-width: 700px;
  // display: grid;
  // gap: 1rem;
  // grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  display: flex;
  flex-wrap: wrap;
}
.home {
  .book-details {
    max-width: 500px;
    transition: 0.2s;
    margin-left: 1rem;
    small {
      color: #42b983;
      cursor: pointer;
    }
  }
  .book-img {
    cursor: pointer;
    // flex-basis: 20rem;
    // margin-right: 1rem;
    margin: 0 auto;
    flex-grow: 1;
    max-width: 20rem;
    display: flex;
    justify-items: center;
    img {
      width: 100%;
    }
  }
}
</style>