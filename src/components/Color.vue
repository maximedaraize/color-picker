<template>
  <div class="layout">
    <div v-for="color in colors" :key="color.name" class="card">
      <div v-bind:style="{ background: color.hex }" class="color-container"></div>
      <p class="color-value">{{color.name}}</p>
      <p class="color-value">{{color.hex}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Color',
  data() {
    return {
      colors: [
        { name: 'banana', hex: '#f4d560', category: 'fruit' },
        { name: 'orange', hex: '#ef9439', category: 'fruit' },
        { name: 'strawberry', hex: '#f9340e', category: 'fruit' },
        { name: 'raspberry', hex: '#f0455e', category: 'fruit' },
        { name: 'blackberry', hex: '#434554', category: 'fruit' },
        { name: 'mango', hex: '#eda907', category: 'fruit' },
        { name: 'apple (red)', hex: '#c53121', category: 'fruit' },
        { name: 'apple (green)', hex: '#71ba07', category: 'fruit' },
        { name: 'apple (yellow)', hex: '#fbd333', category: 'fruit' },
        { name: 'cherry', hex: '#7f0006', category: 'fruit' },
        { name: 'watermelon', hex: '#e96452', category: 'fruit' },
        { name: 'coconut', hex: '#dddeda', category: 'fruit' },
        { name: 'kiwi', hex: '#a3c24a', category: 'fruit' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.card {
  box-sizing: border-box;
  outline: 1px solid rgba(black, 0.3);
  height: 200px;
  width: 160px;
  border: 10px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;

  p {
    display: inline-block;
    background: white;
    width: 100%;
    padding-top: 10px;
    margin: 0;
    text-transform: uppercase;
  }

  .color-container {
    height: 100%;
  }
}
</style>