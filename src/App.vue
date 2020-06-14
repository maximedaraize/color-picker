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
}

body {
  margin: 32px;
}

/* * {
  outline: 1px solid red;
} */
</style>
