<template>
  <div>
    <header>
      <h1 @click="navigateTo('products')">V<span>egeislan</span>d</h1>
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
      product: true,
    };
  },
  methods: {
    addItemToCart(product) {
      if (product.quantity === 0) {
        product.quantity += 1;
        this.cart.push(product);
      } else {
        product.quantity += 1;
      }
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
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].quantity;
      }
      return t;
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
  box-shadow: 2px 2px 5px rgb(0, 255, 42);
  background-color: green;
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
    padding-bottom:n4px;
  }
}
</style>
