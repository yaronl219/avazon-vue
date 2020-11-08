<template>
  <div id="app">
    <div class="app-bar">
      <div class="logo-container">
        <img src="./assets/avazon_logo.svg" alt="logo" />
      </div>
      <navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@import "./assets/styles/global";



.app-bar {
  background-color: #EAEAEA;
  display: flex;
  padding: 0.375rem 1rem;
  justify-content: space-between;
  .logo-container {
    img {
      height: 2rem;
    }
  }
}
</style>
