<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: flex-end;
  padding: 32px 0;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 8px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 32px;
}
</style>
