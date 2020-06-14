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
      </form>
      <label>{{ computedProducts.length }} colors</label>
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
          hex: '#AA2831',
          typeOfFood: 'fruit'
        },
        {
          name: 'lemon',
          color: 'yellow',
          hex: '#F1D40D',
          typeOfFood: 'fruit'
        },
        {
          name: 'lime',
          color: 'green',
          hex: '#4C8A01',
          typeOfFood: 'fruit'
        },
        {
          name: 'grapefruit',
          color: 'pink',
          hex: '#e74b3e',
          typeOfFood: 'fruit'
        },
        {
          name: 'blueberry',
          color: 'blue',
          hex: '#313F58',
          typeOfFood: 'fruit'
        },
        {
          name: 'pineapple',
          color: 'yellow',
          hex: '#FFBC17',
          typeOfFood: 'fruit'
        },
        {
          name: 'peach',
          color: 'orange',
          hex: '#ED8750',
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
          hex: '#EDE9E5',
          typeOfFood: 'fruit'
        },
        {
          name: 'rhubarb',
          color: 'red',
          hex: '#D91A2C',
          typeOfFood: 'fruit'
        },
        {
          name: 'prunes',
          color: 'blue',
          hex: '#2B303E',
          typeOfFood: 'fruit'
        },
        {
          name: 'pomegranate',
          color: 'red',
          hex: '#C82007',
          typeOfFood: 'fruit'
        },
        {
          name: 'prickly pear',
          color: 'red',
          hex: '#E92857',
          typeOfFood: 'fruit'
        },
        {
          name: 'bartlett',
          color: 'yellow',
          hex: '#DBC65D',
          typeOfFood: 'fruit'
        },
        {
          name: 'papaya',
          color: 'orange',
          hex: '#FC5209',
          typeOfFood: 'fruit'
        },
        {
          name: 'olives',
          color: 'green',
          hex: '#858719',
          typeOfFood: 'fruit'
        },
        {
          name: 'elderberry',
          color: 'blue',
          hex: '#111110',
          typeOfFood: 'fruit'
        },
        {
          name: 'cranberry',
          color: 'red',
          hex: '#CC0111',
          typeOfFood: 'fruit'
        },
        {
          name: 'cantaloupe',
          color: 'orange',
          hex: '#E7863A',
          typeOfFood: 'fruit'
        },
        {
          name: 'plantain',
          color: 'yellow',
          hex: '#F1B83D',
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
        showConfirmButton: false,
        timer: 1000,
        width: '120px',
        padding: ' 12px 16px',
        popup: 'fade-in',
        backdrop: false,
        background: '#fff',
        timerProgressBar: false,
        html: '<span style="color:#18263f; font-family: Roboto;">Copied!<span>'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
//filter section
nav {
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 64px;
  display: grid;
  justify-content: center;
  width: calc(100vw - 64px);
  grid-gap: 0 32px;
  grid-template-columns: repeat(1, 320px);
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

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 32px;
    width: 100%;
    border-radius: 8px;
    padding: 4px 16px;
    font-size: 18px;
    background: #f3f3f4;
    border: 1px solid transparent;
    transition: 0.222s ease-in;

    &:hover {
      background: transparent;
      border: 1px solid #f3f3f4;
      box-shadow: 0 0 0 4px rgba(#18263f, 0.1);
    }
  }

  label {
    font-weight: normal;
    display: block;
    color: #999999;
    text-align: left;
    width: 100%;
    margin-top: 10px;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
}

//grid
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
  border-radius: 4px;
  box-shadow: 10px 10px 27px #e1e1e3, -5px -5px 13px #ffffff;

  @media (min-width: 560px) {
    box-shadow: 10px 10px 27px #e1e1e3, -15px -15px 27px #ffffff;
  }

  .background {
    width: 100%;
    height: 120px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

// HEX value hover card
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
  width: 100%;
  height: 120px;
  color: #fff;
  padding: 0 !important;
}

//name and copy section
.color-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    padding: 16px 16px;
  }
}

//card name
.color-name {
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
}

//copy button
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
</style>
