<template>
  <div>
    <div v-if="cart.length < 1" class="misio"> 
    <h1>Your shopping cart is empty!</h1>
    <img src="../assets/original.jpg">
    </div>
  
    <div v-if="cart.length > 0" class="parametrs">
      <h1>Zdjęcie</h1>
      <h1>Nazwa</h1>
      <h1>Cena</h1>
      <h1>Ilość </h1>
      </div>

        <div class="products">
      <div v-for="(product, index) in cart" :key="index" class="misiowy">
        <img :src="product.image" />
        <h3>{{product.name}}</h3>
        <div>{{product.cost}}</div>
        <button @click="increment()"></button>
        <p>{{ product.quantity} }</p>
       
     
        <div class="incrementDecrement">
  
        </div>
        <button v-on:click="removeItemFromCart(product)" id="trashbutton">
          <img src="../assets/trash-2199630-1834393.png" id="trash">
         </button>
         
 
      </div>
      
      <div v-for="(product,index) in cart" :key="index" class="totalPrice">
        <div>{{ sumTotal(product) | currency}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
    data: () => {
    return { 
      quantity: 0
    };
  },
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
    sumTotal(product) {
     return product.quantity * product.cost 
     
    },
    increment() {
      this.product.quantity++
    }
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.totalPrice {
  margin-top: 50px;
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
  flex-direction: column;
  text-align: center;
  justify-content: center;


  img {
    width: 50px;
    height: 50px;
  }

    h3,img,div {
    margin-right: auto;
    margin-left: auto;
    font-size: 35px;    
  }

  .misiowy {  
  width: 85%;
  height: 70px;
  display: flex;
  padding: 15px;
  text-align: center;
  justify-content: center;
  border-bottom: 1px solid grey;
  }
}
.parametrs {
  width: 85%;
  display: flex;
  padding: 15px;
  margin-left: auto;
  margin-right: auto; 
  text-align: center;
  justify-content: center;
  border-bottom: 3px solid black;
  
  h1 {
    margin-left: 34px;
    margin-right: auto;
  }

}
.incrementDecrement {
  display: flex;
  justify-content: center;
  align-items: center;
  

  button {
    height: 50px;
    width: 45px;
    margin: 5px;
    color: black;
    padding: 0;
  }
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
  padding: 0;


  &:hover {
    filter: contrast(50%);
  }
}
</style>