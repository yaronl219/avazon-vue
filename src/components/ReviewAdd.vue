<template>
<div class="add-review-container">
  <h3>Add a review</h3>
  <form @submit.prevent="submit">
    <input v-model="username" type="text" placeholder="Your name" />
    <input type="date" @change="setReadAt" :value="readAtDate" />
    <v-rating
      hover
      length="5"
      size="24"
      v-model="rating"
    ></v-rating>
    <textarea v-model="reviewContent" placeholder="Full review" />
    <button class="submit-btn" type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      username: "",
      readAt: Date.now(),
      reviewContent: "",
    };
  },
  computed: {
    readAtDate() {
      // covnert timestamp to date
      const readAt = new Date(this.readAt);
      const year = readAt.getFullYear();
      const month = readAt.getMonth() + 1;
      const day = readAt.getDate();

      return `${year}-${month}-${day}`;
    },
  },
  methods: {
    setReadAt(ev) {
      const splitDate = ev.target.value.split("-");
      const year = splitDate[0];
      const month = splitDate[1] - 1;
      const day = splitDate[2];
      const timestamp = new Date(year, month, day);
      this.readAt = timestamp.getTime();
    },
    submit() {
      const review = {
        rating: this.rating,
        username: this.username,
        readAt: this.readAt,
        reviewContent: this.reviewContent,
      };
      this.$emit('new-review',review)
    },
  },
};
</script>

<style lang="scss" scoped>
.add-review-container {
  width: 100%;
  max-width: 700px;
  background-color: rgba(29,29,29,0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}
  form {
    display: flex;
  flex-direction: column;
  }
  input,
  textarea {
    border: 1px solid rgba(29,29,29,0.9);
    padding: 0.25rem;
    margin-bottom: 0.25rem;
  }
  textarea {
    min-height: 6rem;
  }

</style>