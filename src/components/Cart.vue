<template>
  <div>
    <div v-if="cart.length < 1">
      <h1>Your shopping cart is empty!</h1>
      <img src="../assets/original.jpg" />
    </div>

    <div v-if="cart.length > 0" class="parametrs">
      <h2>Zdjęcie</h2>
      <h2>Nazwa</h2>
      <h2>Cena</h2>
      <h2>Ilość</h2>
    </div>
    <div class="products">
      <div v-for="product in cart" :key="product" class="productUnderline">
        <img :src="product.image" />
        <h3>{{ product.name }}</h3>
        <h3>{{ product.cost }}</h3>

        <button class="plusMinus" @click="increment(product)">+</button>
        <p>{{ product.quantity }}</p>
        <button class="plusMinus" @click="decrement(product)">-</button>

        <button @click="removeItemFromCart(product)" id="trashbutton">
          <img src="../assets/trash.png" id="trash" />
        </button>
      </div>

      <div class="totalPrice">Total price: {{ sumTotals }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart", "counter"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
    increment(product) {
      product.quantity = product.quantity === 10 ? 10 : product.quantity + 1;
    },
    decrement(product) {
      product.quantity = product.quantity === 1 ? 1 : product.quantity - 1;
    },
  },
  computed: {
    sumTotals() {
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].cost * this.cart[index].quantity;
      }
      return t.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  margin-right: 150px;
  margin-left: 150px;
  flex-direction: column;

  img {
    width: 50px;
    height: 50px;
    padding: 5px;
  }

  h3,
  img,
  div {
    margin-right: auto;
    margin-left: 28px;
    font-size: 35px;
  }

  .productUnderline {
    width: 95%;
    height: 70px;
    display: flex;
    padding: 20px;
    border-bottom: 1px solid grey;
  }
}
.parametrs {
  width: 79%;
  display: flex;
  padding: 10px;
  justify-content: center;
  margin: auto;
  border-bottom: 3px solid black;

  h2 {
    margin-left: 60px;
    width: 19%;
  }
}

.plusMinus {
  background: none;
  border: none;
}
#trash {
  margin-bottom: 50px;
  background: none;
  width: 50px;
  height: 50px;
}
#trashbutton {
  background: none;
  border: none;

  &:hover {
    filter: contrast(50%);
  }
}

@media screen and (max-width: 545px) {
  .parametrs {
    width: 95%;
    padding: 15px;

    h2 {
      font-size: 20px;
      margin-left: 25px;
    }
  }
  .products {
    margin-right: 0px;
    margin-left: 0px;

    h3,
    img,
    div {
      margin-right: auto;
      margin-left: auto;
      font-size: 20px;
    }
  }
  #trash {
    width: 40px;
    height: 40px;
  }
}
@media only screen and (min-width: 546px) and (max-width: 800px) {
  .parametrs {
    width: 95%;
  }
  .products {
    margin-right: 0px;
    line-height: 60px;
    margin-left: 0px;

    h3,
    img,
    div {
      margin-right: auto;
      margin-left: auto;
      font-size: 20px;
    }
    h3 {
      margin-top: 15px;
    }
  }
  #trash {
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
  }
}
@media only screen and (min-width: 801px) and (max-width: 1100px) {
  .products {
    line-height: 60px;

    h3,
    img,
    div {
      font-size: 25px;
    }
    h3 {
      margin-top: 15px;
    }
  }
}
</style>
