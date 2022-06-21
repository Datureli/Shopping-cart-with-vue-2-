<template>
  <div>
    <header>
      <h1 @click="navigateTo('products')">VegeIsland</h1>
      <button @click="navigateTo('cart')">
        <p v-for="(product, id) in cart" :key="id">
          {{ sumQuantity }}
        </p>
        <img src="./assets/shopping-basket.png" />
      </button>
    </header>
    <div v-if="page === 'cart'">
      <Cart @removeItemFromCart="removeItemFromCart" :cart="cart" />
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
  components: { Products, Cart },
  data() {
    return {
      page: "products",
      cart: [],
    };
  },
  methods: {
    addItemToCart(product) {
      !product.quantity ? this.cart.push(product) && product.quantity++ : product.quantity += 1
    },
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page) {
      this.page = page;
    },
  },
  computed: {
    sumQuantity() {
      let total = 0;
      for (let index = 0; index < this.cart.length; index++) {
        total += this.cart[index].quantity;
      }
      return total;
    },
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

header {
  height: 90px;
  background-color: rgb(0, 255, 42);
  text-align: right;
  font-size: 30px;

  img {
    width: 70px;
    height: 70px;
    transition: 0.2s;
  }
  p {
    position: fixed;
  }
  button {
    width: 100;
    padding: 10px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    color: red;
    background-color: rgb(0, 255, 42);

    &:hover {
      filter: contrast(150%);
    }
  }
  h1 {
    float: left;
    color: rgb(24, 150, 24);
    margin: 18px 20px auto;
    display: flex;
    cursor: pointer;
    font-weight: 900;
  }
}
</style>
