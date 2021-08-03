<template>
<div class="container" id="app">
       <button class="signIn" v-on:click="signIn">Sign In</button>
       <button class="register" v-on:click="register">register</button>
       <div v-show= "registerPage" id="register">
           <label for="name">Name</label><br>
           <input v-model="name" type="text"><br>
           <label for="e-mail">E-mail</label><br>
           <input v-model="email" type="text"><br>
           <label for="password">Password</label><br>
           <input v-model="password" type="text"><br>
           <button @click="registerSubmit" type="submit">Register</button><br>
       </div>
       <div v-show="loginPage" id="register">
      
        <label for="e-mail">E-mail</label><br>
        <input type="text"><br>
        <label for="password">Password</label><br>
        <input type="password"><br>
        <button @click="loginSubmit" type="submit">Log In</button><br>
    </div>
    <h1 v-show="seen">{{message}}</h1>



   </div>
  
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
     
        registerPage:true,
        loginPage :false,
        seen: false,
        name :'',
        email :'',
        password:'',
        message:''
    }
  },
    methods: {
        signIn: function(){
            this.loginPage = true;
            this.registerPage = false;
            this.seen= false;
        },
        register: function(){
            this.loginPage = false;
            this.registerPage = true;
            this.seen= false;
        },
        registerSubmit: function(){
            localStorage.setItem('name',this.name);
            localStorage.setItem('email',this.email);
            localStorage.setItem('password',this.password);
            this.registerPage = false;
            this.seen= true;
            this.message = "Registration Successful";
            console.log(window.localStorage)

        },

        loginSubmit: function(){
            if(localStorage.getItem('email')===this.email && localStorage.getItem('password')===this.password ){
                this.seen = true;
                this.message ="Login Successful";
                this.loginPage= false;
            }
            else{
                this.message="No such user";
                this.seen = true;
            }

        }
    
    }
}  
</script>

<style>

 .container{
  height: 400px;
  width: 25%;
  margin: auto;
  padding: 100px;
  
}
.signIn,.register{
    width: 45%;
    border: none;
    height: 40px;
    margin: 10px 0px;
    padding: 0;
    background-color: white;
    font-size: 30px;

}
.signIn:hover,.register:hover{
  border-bottom: 3px solid blue;
}

label{
    font-size:20px ;
    padding: 30px 0px;
}
.ip{
   margin: 10px 0px;
}
label{
    font-size: 25px;
}


</style>
