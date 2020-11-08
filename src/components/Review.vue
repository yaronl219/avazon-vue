<template>
  <div class="book-review">
    <div class="review-author">
      {{ review.username }}
    </div>
    <div class="review-data">Read at: {{ readAt }}</div>
    <v-rating :value="review.rating" readonly />
    <div class="full-review">
      {{ review.reviewContent }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["review"],
  computed: {
    readAt() {
      const readAt = new Date(this.review.readAt);
      return readAt.toDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
.book-review {
  padding: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(29,29,29,0.5);
  min-height: 10rem;
  border-radius: 0.5rem;
}
.review-author {
  font-weight: 500;
}
</style>
