<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/books">Books</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 13rem;
  margin-left: 0.25rem;
  height: 2rem;
  align-items: center;
  font-size: 1.25rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    &:hover {
      color: #2b7956;
      .router-link-exact-active {
        color: #42b983;

      }
    }
  }
}
</style>