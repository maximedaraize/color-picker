<template>
  <div id="menu">
    <router-link to="/" class="logo">tasty colors</router-link>
    <router-link to="/about">About</router-link>
    <!-- <a href="https://github.com/maximedaraize" target="_blank">github</a> -->
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Amaranth&display=swap');
.logo {
  font-family: 'Amaranth', sans-serif;
  margin-right: auto;
  font-size: 48px;
  color: var(--color-primary);
  font-weight: normal;
  padding-left: 0;
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
</style>
