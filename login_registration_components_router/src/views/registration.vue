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

           <button @click="register" type="submit">Register</button>

        </form>
        <div>
            Already have an account?
            <router-link to= "/login">Login</router-link>
        </div>
     </div>         
</template>

<script>
export default {
    data(){
        return {
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
      register:function() {
           localStorage.setItem('name',this.name);
            localStorage.setItem('email',this.email);
            localStorage.setItem('password',this.password);
           console.log( window.localStorage);
           alert("Registration Successful");
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