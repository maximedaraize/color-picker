<template>
  <div class="card">
    <div class="color-container"></div>
    <p class="color-value">#FF0000</p>
  </div>
</template>

<script>
export default {
  name: "Color"
};
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  outline: 1px solid red;
  height: 160px;
  width: 140px;
  background: yellow;
  border: 10px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    display: inline-block;
    background: white;
    width: 100%;
    margin-bottom: 0;
    padding: 10px 0 0 0;
    text-transform: uppercase;
  }
}
</style>