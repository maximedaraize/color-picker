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
/*GLOBAL STYLES*/
:root {
  --color-primary: #18263f;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
}

a {
  text-decoration: none;
  display: inline;
  position: relative;
  overflow: hidden;
}

a::after {
  content: '';
  position: absolute;
  z-index: -1;
  right: 0;
  width: 0;
  bottom: -2px;
  background: #000;
  height: 2px;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

a:hover:after,
a:focus:after,
a:active:after {
  left: 0;
  right: auto;
  width: 100%;
}

body {
  margin: 32px;
}
</style>
