<template>
     <div class="register">
        <form>

            <div class="name">

             <label for="name">Name </label>

             <input  v-model="name" type="text">

           </div>

           <div class="email">

             <label for="email">E-mail </label>

             <input  v-model="email" type="email">

           </div>

           <div class="password">
           
             <label for="password">Password </label>

             <input  v-model="password" type="password">

           </div>

           <button @click.prevent="register" type="submit">Register</button>

        </form>
        <div>
            Already have an account?
            <router-link to= "/login">Login</router-link>
        </div>
     </div>         
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
     register(){
      axios.post('https://login-register-60f4f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',{
        name:this.name,
        email:this.email,
        password:this.password,
      });
alert("Registration Successful");
      this.name ="";
      this.email="";
      this.password="";
    }
    }
}
</script>

<style scoped>
.register{
    margin: auto;
}
.name, .email, .password{
    padding: 20px;
}
button{
    margin-bottom: 10px;
}
</style>