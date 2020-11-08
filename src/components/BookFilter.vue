<template>
  <section class="filter-container">
    <input @input="setFilter" v-model="filterBy.txt" placeholder="Search book"/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
      setFilter() {
          this.$emit('filtered',this.filterBy.txt)
      }
  }
};
</script>

<style lang="scss" scoped>


input {
  width: 100%;
  font-size: 1.5rem;
  border: 1px solid rgba(29,29,29,0.8);
  border-radius: 0.5rem;
  padding: 0.25rem;
}
</style>