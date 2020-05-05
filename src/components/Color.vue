<template>
  <div class="main">
    <nav class="searchbar">
      <form action>
        <input class="search" type="text" placeholder="Search" v-model="keyword" />
        <label>{{ computedProducts.length }} colors</label>
      </form>
    </nav>

    <div class="card_container">
      <div class="card" v-for="(product, index) in computedProducts" :key="index">
        <div
          v-bind:style="{ background: product.hex }"
          class="background"
          v-clipboard:copy="product.hex"
          v-on:click="alertDisplay"
        ></div>
        <span class="badge" v-if="isHidden">copied</span>
        <p>{{ product.name }}</p>
        <p>{{ product.hex }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      colors: '',
      sortBy: 'name',
      keyword: '',
      typeOfFood: 'fruit',
      message: 'text',
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
          color: 'red',
          hex: '#c53121',
          typeOfFood: 'fruit'
        },
        {
          name: 'apple (green)',
          color: 'green',
          hex: '#71ba07',
          typeOfFood: 'fruit'
        },
        {
          name: 'apple (yellow)',
          color: 'yellow',
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
      ]
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
  },
  methods: {
    alertDisplay() {
      // $swal function calls SweetAlert into the application with the specified configuration.
      this.$swal({
        position: 'top-end',
        text: 'Copied !',
        showConfirmButton: false,
        timer: 1000,
        width: '120px',
        padding: ' 12px 16px',
        popup: 'fade-in',
        backdrop: false,
        background: '#434554'
        // timerProgressBar: true,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swal2-content {
  color: red !important;
}

.card_container {
  display: grid;
  justify-content: center;
  width: calc(100vw - 64px);
  grid-gap: 0 32px;
  grid-template-columns: repeat(1, 240px);

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 120px);
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 120px);
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(6, 120px);
  }

  @media (min-width: 1250px) {
    grid-template-columns: repeat(8, 120px);
  }
}

.card {
  width: 100%;
  margin-bottom: 32px;

  .background {
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }

  .background {
    width: 120px;
    height: 100px;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(161, 170, 175, 0.1),
      0 6px 6px rgba(144, 150, 153, 0.4);
    cursor: pointer;
    transition: 0.333s ease-in-out;

    &:hover {
      box-shadow: none;
    }

    @media (max-width: 479px) {
      width: 240px;
      height: 200px;
    }
  }
}

nav {
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 128px;

  input {
    height: 32px;
    width: 320px;
    border-radius: 8px;
    border: 1px solid tomato;
    padding: 4px 16px;
    font-size: 18px;
    background: #f3f3f4;
    border: 1px solid transparent;
    transition: 0.222s ease-in;

    &:hover,
    &:focus {
      background: transparent;
      border: 1px solid #f3f3f4;
      box-shadow: 0 0 0 4px rgba(234, 76, 137, 0.1);
    }
  }

  label {
    font-weight: normal;
    display: block;
    color: #999999;
    text-align: left;
    margin-top: 16px;
    @media (min-width: 480px) {
      margin-top: 0;
      width: 100px;
      margin-left: 8px;
    }
  }

  form {
    display: flex;
    width: 400px;
    flex-direction: column;
    @media (min-width: 480px) {
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
