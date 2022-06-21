<template>
  <b-container>
    <div class="products">
      <div v-for="product in products" :key="product">
        <b-col class="ramka">
          <img :src="product.image" />
          <b-col style="margin: 20px 10px auto">
            <h3>{{ product.name }}</h3>
            <div class="cost">{{ product.cost }}</div>
            <b-button @click="addItemToCart(product)">Add to cart</b-button>
          </b-col>
        </b-col>
      </div>
    </div>
  </b-container>
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
        },
        {
          quantity: 0,
          name: "Apple",
          cost: "0.99",
          image: require("../assets/appe.jpg"),
        },
        {
          quantity: 0,
          name: "Grapes",
          cost: "3.21",
          image: require("../assets/grapes.jpg"),
        },
        {
          quantity: 0,
          name: "Onion",
          cost: "6.22",
          image: require("../assets/onion.jpg"),
        },
      ],
    };
  },
  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    },
  },

};
</script>

<style lang="scss" scoped>
.ramka {
  margin: 10px 0px 5px 0px;
  display: flex;
  width: 375px;
  height: 160px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
  width: 155px;
  height: 135px;
  margin: 15px auto;
}
.products {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 160px;
}

@media (max-width: 690px) {
  .products {
    grid-template-columns: none;
    margin-left: 30px;
    margin-right: auto;
  }
}
@media only screen and (min-width: 691px) and (max-width: 1100px) {
  .products {
    grid-template-columns: 1fr 1fr;
    margin: 40px 0px;
  }
}
</style>
