<template>
  <div>
    <div v-if="cart.length < 1" class="misio">
      <h1>Your shopping cart is empty!</h1>
      <img src="../assets/original.jpg" />
    </div>

    <div v-if="cart.length > 0" class="parametrs">
      <h1>Zdjęcie</h1>
      <h1>Nazwa</h1>
      <h1>Cena</h1>
      <h1>Ilość</h1>
    </div>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index" class="misiowy">
        <img :src="product.image" />
        <h3>{{ product.name }}</h3>
        <h3>{{ product.cost }}</h3>
        
          <button class="plusMinus" @click="increment(product)">+</button>
          <p>{{ product.quantity }}</p>
          <button class="plusMinus" @click="decrement(product)">-</button>
        

        <button v-on:click="removeItemFromCart(product)" id="trashbutton">
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
  data() {
    return {};
  },
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
.totalPrice {
  margin-top: 20px;
}
.misio {
  text-align: center;
  h1 {
    font-size: 100px;
    text-align: center;
    margin-top: 30px;
  }
  img {
    width: 250px;
    height: 250px;
  }
}
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
  h3 {
    width: 10%;
  }

  .misiowy {
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
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 3px solid black;

  h1 {
    margin-left: 30px;
    margin-right: auto;
  }
}
button {
  height: 50px;
  width: 45px;
  padding: 0;
}
.plusMinus {
  color: black;
  text-align: center;
  justify-content: center;
  background: none;
  line-height: 5px;
  border: none;
}
#trash {
  margin-bottom: 50px;
  background: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#trashbutton {
  background: none;
  border: none;
  padding: 0;

  &:hover {
    filter: contrast(50%);
  }
}
.totalPrice {
  margin-top: 50px;
}
@media screen and (max-width: 545px) {
.misio {
  text-align: center;
  h1 {
    font-size: 45px;
  }
}
.parametrs {
  width: 90%;
  padding: 15px;

  h1 {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 18px;
    line-height: 10px;
  }
}
.products {
  margin-right: 0px;
  flex-direction: column;
  line-height: 40px;
  margin-left: 0px;
  

  img {
    width: 50px;
    height: 48px;
    margin-left: 20px;
  }

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

  .misiowy {
    width: 95%;
    height: 70px;
    padding: 20px;
  }
}
#trash {
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
}
.incrementDecrement {

  button {
    font-size: 20px;
  }
}
}
@media only screen and (min-width: 546px) and (max-width: 800px)  {
.parametrs {
  width: 90%;
  padding: 15px;

  h1 {
    font-size: 20px;
    margin-left: 20px;
    margin-right: auto;
    line-height: 10px;
  }
}
.products {
  margin-right: 0px;
  flex-direction: column;
  line-height: 60px;
  margin-left: 0px;
  

  img {
    width: 50px;
    height: 48px;
    margin-left: 20px;
  }

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

  .misiowy {
    width: 95%;
    height: 70px;
    padding: 20px;
  }
}
#trash {
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
}
.incrementDecrement {

  button {
    font-size: 20px;
  }
}
}
@media only screen and (min-width: 801px) and (max-width: 1100px)  {
  .parametrs {
    width: 60%;
  h1 {
    margin-left: 20px;
    font-size: 25px;
  }
}
.products {

  flex-direction: column;
  line-height: 60px;
  

  img {
    width: 50px;
    height: 50px;
  }

  h3,
  img,
  div {
    margin-right: auto;
    margin-left: auto;
    font-size: 25px;
  }
  h3 {
    margin-top: 15px;
  }

  .misiowy {
    width: 95%;
    height: 70px;
    padding: 20px;
  }
}
#trash {
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
}
.incrementDecrement {

  button {
    font-size: 20px;
  }
}
}
</style>
