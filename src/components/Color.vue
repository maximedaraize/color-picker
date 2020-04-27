<template>
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
            v-bind:style="{ background: products.hex }"
            class="background"
          ></div>

          <p>{{ product.name }}</p>
          <p>{{ product.hex }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Color',
  data() {
    return {
      colors: [],
      typeOfFood: [],
      products: [
        {
          name: 'banana',
          color: 'yellow',
          hex: '#f4d560',
          typeOfFood: 'fruit'
        },
        {
          name: 'orange',
          color: 'orange',
          hex: '#ef9439',
          typeOfFood: 'fruit'
        },
        {
          name: 'strawberry',
          color: 'red',
          hex: '#f9340e',
          typeOfFood: 'fruit'
        },
        {
          name: 'raspberry',
          color: 'red',
          hex: '#f0455e',
          typeOfFood: 'fruit'
        },
        {
          name: 'blackberry',
          color: 'purple',
          hex: '#434554',
          typeOfFood: 'fruit'
        },
        { name: 'mango', color: 'orange', hex: '#eda907', typeOfFood: 'fruit' },
        {
          name: 'apple (red)',
          red: 'yellow',
          hex: '#c53121',
          typeOfFood: 'fruit'
        },
        {
          name: 'apple (green)',
          green: 'yellow',
          hex: '#71ba07',
          typeOfFood: 'fruit'
        },
        {
          name: 'apple (yellow)',
          yellow: 'yellow',
          hex: '#fbd333',
          typeOfFood: 'fruit'
        },
        { name: 'cherry', color: 'red', hex: '#7f0006', typeOfFood: 'fruit' },
        {
          name: 'watermelon',
          color: 'pink',
          hex: '#e96452',
          typeOfFood: 'fruit'
        },
        {
          name: 'coconut',
          color: 'white',
          hex: '#dddeda',
          typeOfFood: 'fruit'
        },
        { name: 'kiwi', color: 'green', hex: '#a3c24a', typeOfFood: 'fruit' }
      ],
      sortBy: 'name',
      keyword: ''
    }
  },
  computed: {
    computedProducts: function() {
      return this.products
        .filter(item => {
          return (
            (this.keyword.length === 0 || item.name.includes(this.keyword)) &&
            (this.colors.length === 0 || this.colors.includes(item.color)) &&
            (this.typeOfFood.length === 0 ||
              this.typeOfFood.includes(item.typeOfFood))
          )
        })
        .sort((a, b) => {
          return a[this.sortBy]
            .toString()
            .localeCompare(b[this.sortBy].toString())
        })
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
