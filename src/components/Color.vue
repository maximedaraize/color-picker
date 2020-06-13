<template>
  <div class="main">
    <nav class="searchbar">
      <form action>
        <input
          class="search"
          type="text"
          placeholder="Search"
          v-model="keyword"
        />
        <label>{{ computedProducts.length }} colors</label>
      </form>
    </nav>

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
        <div class="color-info">
          <span class="color-name">{{ product.name }}</span>
          <span
            class="js-clipboard"
            v-clipboard:copy="product.hex"
            v-on:click="alertDisplay"
          >
            <img
              src="/img/copy.svg"
              style="width:16px;"
              alt="copy to clipboard button"
            />
            <span class="color-hex">{{ product.hex }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
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
          name: 'red delicious',
          color: 'red',
          hex: '#c53121',
          typeOfFood: 'fruit'
        },
        {
          name: 'granny smith',
          color: 'green',
          hex: '#71ba07',
          typeOfFood: 'fruit'
        },
        {
          name: 'golden delicious',
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
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 1000,
        width: '120px',
        padding: ' 12px 16px',
        popup: 'fade-in',
        backdrop: false,
        background: 'white',
        timerProgressBar: false,
        html: '<span style="color:#000">Copied!<span>'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.color-hex {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.2s ease-in;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  background: rgba(#726868, 0.2);
  width: 100%;
  height: 120px;
  color: #fff;
  padding: 0 !important;
  cursor: normal;
}

.color-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    padding: 16px 16px;
  }
}
.color-name {
  width: 100%;
  font-weight: 600;
  text-transform: capitalize;
}

.js-clipboard {
  display: flex;
  align-items: center;
  min-height: 24px;
  height: 100%;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s linear;

  &:hover {
    background: #f0f0f0;

    .color-hex {
      opacity: 1;
      cursor: normal;
    }
  }
}

.card_container {
  display: grid;
  justify-content: center;
  width: calc(100vw - 64px);
  grid-gap: 0 16px;
  grid-template-columns: repeat(2, 160px);

  @media (min-width: 560px) {
    grid-gap: 0 32px;
    grid-template-columns: repeat(2, 240px);
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 240px);
  }

  @media (min-width: 1250px) {
    grid-template-columns: repeat(4, 240px);
  }
}

.card {
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .background {
    width: 100%;
    height: 120px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:hover {
      box-shadow: none;
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
    max-width: 320px;
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
    max-width: 400px;
    flex-direction: column;
    @media (min-width: 480px) {
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
