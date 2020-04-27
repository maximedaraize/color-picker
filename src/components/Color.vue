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
      <input class="search" type="text" placeholder="recherche" v-model="keyword" />

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
      <h3>Total {{computedProducts.length}} Products</h3>
      <div class="card_container">
        <div class="card" v-for="(product, index) in computedProducts" :key="index">
          <div v-bind:style="{ background: product.hex }" class="background"></div>

          <p>{{product.name}}</p>
          <p>{{product.hex}}</p>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'HelloWorld',
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

<style lang="css" scoped>
.card_container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.card {
  width: 200px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

nav.secondary {
  width: 100%;
  display: flex;
  align-items: center;
}

.background {
  width: 120px;
  height: 100px;
  border-radius: 4px;
}

input.search {
  margin-right: auto;
}

input {
  margin: 0 16px;
}

p {
  margin: 0;
}
</style>