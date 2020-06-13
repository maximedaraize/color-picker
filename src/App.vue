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
  },
  metaInfo: {
    title: 'TASTY COLORS'
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'description',
      content: 'Copy to your clipboard the tastiest color'
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
}
</script>
<style lang="css">
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 8px;
}

a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 32px;
}

.swal2-content {
  color: white !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
