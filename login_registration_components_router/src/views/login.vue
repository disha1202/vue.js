<template>

    <div class="login">
        <form>
           <div class="email">

             <label for="email">E-mail </label>

             <input  v-model="email" type="email">

           </div>

           <div class="password">
           
             <label for="password">Password </label>

             <input  v-model="password" type="password">

           </div>

           <button @click.prevent="login" type="submit">Login</button>

        </form>
        <div>
            Don't have an account?
            <router-link to= "/register">Register</router-link>
        </div>
       

    </div>

</template>
<script>
import axios from 'axios';
// import main  from "@/main.js"
export default {
    name:"Login",
    data(){
        return {
            email:'',
            password:'',
            users:[],
        }
    },
    methods:{
       
       login(){
    axios.get('https://login-register-60f4f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').then(response => {
      console.log(response.data);
      const users = [];
    for(const id in response.data){
        users.push({
          id:id,
          email:response.data[id].email,
          password:response.data[id].password,

        });
        console.log(users);
        
    }
    this.users = users;
     const loggedUser = this.users.find(user => {
       if(user.email === this.email &&
       user.password === this.password){
         return true;
       }
     });
     console.log(loggedUser);
    if( loggedUser !== undefined){
       alert('login successful');
     }
     else{
       alert("no such user");
     }
    } );
  
    }
}
}
</script>
<style scoped>
.login{
    margin:  auto;
}
.password, .email{
    padding: 20px;
}
button{
    margin-bottom: 10px;
}
</style>