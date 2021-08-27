<template>
    <div class="product">
         <img class="product-img" v-bind:src="source" />
         <p>{{title}}</p>
         <p>Price :{{ price}} </p>
         <p>Product Details :{{details}}</p>
        
    </div>
</template>
<script>
export default {
    props:{
        source:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        details:{
            type:String,
            require:true
        }
    },
    data(){
        return{
          
        }
    },
   
    mounted(){
        // fetch('https://fakestoreapi.com/products?').then((response) => response.json()).then(data =>{
        //     this.source = data.image;
        //     this.title = data.title;
        //     this.price = data.price;
        //     this.details =  data.description;
        // })
        
    },
   
 }
</script>
<style scoped>
.product-img{
    height: 200px;
    width: 200px;
}

.product{
    border: 5px solid black;
    padding: 20px;
    margin: 20px;
    width: 30%;
}
</style>