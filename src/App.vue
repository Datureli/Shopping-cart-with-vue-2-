<template>
  <div>
    <NavigationMobile v-if="mobileView" />
    <Navigation v-else />
    <header>
      <h1 @click="navigateTo('products')">V<span>egeislan</span>d</h1>
 
      <button @click="navigateTo('cart')">
        {{ counter }}

        <img src="./assets/shopping-basket.png" />
      </button>
    </header>
    <Navbar />
    <div v-if="page === 'cart'">
      <Cart v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>
    <div v-if="page === 'products'">
      <Products @addItemToCart="addItemToCart" />
    </div>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";
export default {
  data() {
    return {
      page: "products",
      cart: [],
      product: true,
      counter: 0,
    };
  },
  methods: {
    sumTotal() {
      return this.product.quantity * this.product.cost
    },

    addItemToCart(product) {
      if (product.quantity === 0) {
        this.counter += 1;
        product.quantity += 1;
        this.cart.push(product);
      } else {
        this.counter += 1;
        product.quantity += 1;
      }
    },
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page) {
      this.page = page;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  components: { Products, Cart },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  max-width: 100%;
  overflow-x: hidden;
  text-decoration: none;
}
.products {
  text-align: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 100px;
}
.products button {
  padding: 10px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}
header {
  height: 90px;
  box-shadow: 2px 2px 5px blue;
  background-color: green;
  text-align: right;
  font-size: 30px;

  img {
    width: 70px;
    height: 70px;
    transition: 0.2s;
  }
  button {
    padding: 10px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    color: red;
    background-color: green;

    &:hover {
      filter: contrast(150%);
    }
  }
  h1 {
    float: left;
    margin: 18px 20px auto;
    display: flex;
    cursor: pointer;
    font-weight: 900;
  }
  span {
    color: rgb(43, 197, 43);
    border-bottom: 1px solid green;
    padding-bottom: 4px;
  }
}
</style>
