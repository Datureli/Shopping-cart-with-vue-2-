<template>
  <b-row>
    <b-container>
      <div class="products" >
        <div v-for="(product, index) in products" :key="index">
          <b-col
            id="ramka"
            style="margin: 10px 0px 5px 0px;
                  background: whitesmoke;
                  display: flex;
                  width: 375px;
                  height: 160px;"
          >
            <img
              :src="product.image"
              style="width: 135px;
                   height: 135px;
                   margin: 15px auto;
                   display: column;"
            />
            <b-col>
              <b-col
                style="display: grid;
                      margin: 20px 10px auto"
              >
                <h3>{{ product.name }}</h3>
                <div class="cost">{{ product.cost }}</div>
                <b-button size="sm" @click="addItemToCart(product)"   >Add to cart</b-button>
         
              </b-col>
            </b-col>
          </b-col>
        </div>
      </div>
   
    </b-container>
    <b-container>
      <b-row> </b-row>
    </b-container>
  </b-row>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          quantity: 0,
          name: "Tomato",
          cost: "2.50",
          image: require("../assets/tomato.jpg"),
          id: 231,
        },
        {
          quantity: 0,
          name: "Apple",
          cost: "0.99",
          image: require("../assets/appe.jpg"),
          id: 421
        },
        {
          quantity: 0,
          name: "Grapes",
          cost: "3.21",
          image: require("../assets/grapes.jpg"),
          id: 2116
        },
        {
          quantity: 0,
          name: "Onion",
          cost: "6.22",
          image: require("../assets/onion.jpg"),
          id: 631
        },
      ],
      cartItems: [],
    };
  },
  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    },
  },
  computed: {
              sumQuantity() {
     let t = 0;
     for (let index = 0; index < this.cart.length; index++ ) {
        t += this.cart[index].quantity
     }
     return t
     
  },
  }
};
</script>

<style scoped>
#ramka {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.products {
  text-align: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 160px;
}
.products button {
  padding: 10px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}
@media (max-width: 690px) {
.products {
  display: grid;
  grid-template-columns: none;
  margin-left: 30px;
  margin-right: auto;
}
}
@media only screen and (min-width: 691px) and (max-width: 1100px)  {

.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px 0px;
}
.products button {
  padding: 10px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}
}
</style>
