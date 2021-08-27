<template>
 <random-products
v-for="product in products"
:key='product.id'
:source="product.image"
:title="product.title"
:price="product.price"
:details="product.description"
 ></random-products>
</template>

<script>

import RandomProducts from './components/RandomProducts.vue';
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return{
   products:[]
    }
   
  },
  
  components: {
  
    RandomProducts
  },
  
  beforeMount(){
// fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(data=>{
//               console.log(data);
//               this.products = data;
              
//             });
axios.get('https://fakestoreapi.com/products?limit=5').then(response => {
  this.products = response.data;
  console.log(response.data);
});
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
