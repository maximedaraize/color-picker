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
<style lang="scss">
#app {
  .logo {
    @import url('https://fonts.googleapis.com/css2?family=Amaranth&display=swap');
    font-family: 'Amaranth', sans-serif;
    margin-right: auto;
    font-size: 48px;
    color: #18263f;
    font-weight: normal;
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
#menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;
}

#menu a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 8px;
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
