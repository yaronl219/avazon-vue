<template>
  <section class="about">
    <main>
    <h1>Built with <span>Vue</span> by Yaron Lipshitz</h1>
    <p>Built as an exercise to get better acquainted with Vue.js and Firebase</p>
    </main>
    <div class="tools">
      <h3>Tools Used</h3>
      <ul>
        <li>Vue 2</li>
        <li>Vue-x</li>
        <li>Vuetify</li>
        <li>Firebase</li>
        <li>Google Books API</li>
        <li>SCSS (Styled components)</li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about {
  padding: 1rem;
}

.tools {
  margin-top: 1rem;
  ul {
    list-style: none;
  }
  li {
    &:hover {
      cursor: pointer;
      color: #42b983;
    }
  }
}
</style>