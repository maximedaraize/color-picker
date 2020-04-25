<template>
  <div class="home">
    <Color></Color>
  </div>
</template>

<script>
// @ is an alias to /src
import Color from '@/components/Color.vue'

export default {
  name: 'Home',
  components: {
    Color
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
</style>