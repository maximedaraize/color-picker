<template>
<<<<<<< HEAD
  <div class="main">
    <nav>
      All:
      <input
        type="radio"
        v-model="colors"
        value="red, black, brown, orange, green, purple, yellow"
      />
      Red:
      <input type="radio" v-model="colors" value="red" />
      yellow:
      <input type="radio" v-model="colors" value="yellow" />
    </nav>
    <nav class="secondary">
      <input
        class="search"
        type="text"
        placeholder="recherche"
        v-model="keyword"
      />

      <strong>Size:</strong>
      fruit:
      <input type="radio" v-model="sort" value="fruit" />
      veggies:
      <input type="radio" v-model="sort" value="veggies" />

      <select v-model="sortBy">
        <option value="name">Product Name</option>
        <option value="color">Color</option>
        <option value="typeOfFood">typeOfFood</option>
      </select>
    </nav>
    <div>
      <h3>Total {{ computedProducts.length }} Products</h3>
      <div class="card_container">
        <div
          class="card"
          v-for="(product, index) in computedProducts"
          :key="index"
        >
          <div
            v-bind:style="{ background: product.hex }"
            class="background"
          ></div>

          <p>{{ product.name }}</p>
          <p>{{ product.hex }}</p>
        </div>
=======
  <div class="container">
    <div class="controls">
      <button
        @click.prevent="colorsCategory=['fruit', 'candy']; activeLink('btn-all');"
        :class="{active: activeId == 'btn-all'}"
      >all</button>
      <button
        @click="colorsCategory=['fruit']; activeLink('btn-fruits');; "
        :class="{active: activeId == 'btn-fruits'}"
      >fruits</button>
      <button
        @click="colorsCategory=['candy']; activeLink('btn-veggies');"
        :class="{active: activeId == 'btn-veggies'}"
      >veggies</button>
    </div>
    <div class="layout">
      <div v-for="color in filterByCategory" :key="color.name" class="card">
        <div v-bind:style="{ background: color.hex }" class="color-container"></div>
        <p class="color-value">{{ color.name }}</p>
        <p class="color-value">{{ color.hex }}</p>
>>>>>>> parent of 30755be... add filter logic
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Color',
  data() {
    return {
      isActive: false,
      colorsCategory: ['fruit', 'veggies'],
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
  },
  computed: {
    filterByCategory: function() {
      var colorsCategory = this.colorsCategory

      return this.colors.filter(function(color) {
        return colorsCategory.indexOf(color.category) >= 0
      })
    }
  },
  methods: {
    activeLink(linkIdent) {
      this.activeId = this.activeId === linkIdent ? null : linkIdent
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.controls {
  display: flex;
  justify-content: center;

  button {
    font-size: 1rem;
    color: navy;
    background: white;
    border: 1px solid navy;
    border-radius: 4px;
    margin: 1rem;
    padding: 6px 24px;
    transition: 0.25s ease-in;

    &.active {
      color: white;
      border: 1px solid navy;
      background: navy;
    }
  }
}

.card {
  box-sizing: border-box;
  height: 200px;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;

  p {
    font-size: 0.8rem;
    display: inline-block;
    background: white;
    width: 100%;
    padding-top: 4px;
    margin: 0;
    text-transform: uppercase;

    &:last-child {
      padding-top: 0;
    }
  }

  .color-container {
    height: 100%;
    border-radius: 8px;
  }
}
</style>
