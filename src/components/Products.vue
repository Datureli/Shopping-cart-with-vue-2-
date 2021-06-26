<template>
  <b-row>
    <b-container>
      <div class="products" >
        <div v-for="(product, index) in products" :key="index">
       
          <b-col
            cols="4"
            sm="auto"
            size="lg"
            id="ramka"
            style="margin: 10px 10px 10px 20px;
                  background: whitesmoke;
                  display: flex;
                  width: 375px;
                  height: 160px;
                  margin: 0;"
          >
            <img
              :src="product.image"
              style="width: 120px;
                   height: 120px;
                   margin: 0;
                   display: column;"
            />
            <b-col>
              <b-col
                style="display: grid;
                      margin: 20px 10px auto"
              >
                <h3>{{ product.name }}</h3>
                <div class="cost">{{ product.cost }}</div>
                {{ product.quantity }}
                <b-button size="sm" @click="addItemToCart(product)"
                  >Add to cart</b-button>
              
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
};
</script>

<style scoped>
.container {
  width: 46%;
  height: 370px;
  margin-top: 15px;
  display: flex;
}
#ramka {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
