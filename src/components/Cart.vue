<template>
  <b-container>
    <div v-if="cart.length < 1">
      <h1>Your shopping cart is empty!</h1>
      <img src="../assets/original.jpg" />
    </div>

    <div class="products">
      <div v-if="cart.length > 0" class="parametrs">
        <h2>Zdjęcie</h2>
        <h2>Nazwa</h2>
        <h2>Cena</h2>
        <h2>Ilość</h2>
      </div>
      <div v-for="product in cart" :key="product" class="productUnderline">
        <img :src="product.image" />
        <h3>{{ product.name }}</h3>
        <h3>{{ product.cost }}</h3>
        <div style="display: flex; margin-left: 50px;">
          <button class="plusMinus" @click="increment(product)">+</button>
          <h3>{{ product.quantity }}</h3>
          <button class="plusMinus" @click="decrement(product)">-</button>
        </div>

        <button @click="removeItemFromCart(product)" id="trashbutton">
          <img src="../assets/trash.png" id="trash" class="photo" />
        </button>
      </div>

      <div class="totalPrice">Total price: {{ sumTotals }}$</div>
    </div>
  </b-container>
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
  width: 55%;
  justify-content: center;
  margin: auto;

  img {
    width: 70px;
    height: 50px;
  }
  .photo {
    width: 40px;
    height: 40px;
  }

  h3 {
    margin: auto;
  }

  .productUnderline {
    border-bottom: 1px solid grey;
  }
}
.productUnderline,
.parametrs {
  display: flex;
  padding: 5px;
}
.parametrs {
  border-bottom: 3px solid black;

  h2 {
    width: 27%;
    font-size: 20px;
  }
}

.plusMinus,
#trashbutton,
#trash {
  background: none;
  border: none;
}
#trashbutton {
  margin-left: 25px;
  margin-right: 25px;
  &:hover {
    filter: contrast(50%);
  }
}
@media only screen and (max-width: 545px) {
  .parametrs {
    width: 95%;
  }
  .products {
    width: 92%;
  }
}

@media only screen and (min-width: 546px) and (max-width: 1200px) {
  .parametrs {
    width: 95%;
  }
  .products {
    width: 92%;
  }
}
</style>
