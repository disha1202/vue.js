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

           <button @click="login" type="submit">Login</button>

        </form>
        <div>
            Don't have an account?
            <router-link to= "/register">Register</router-link>
        </div>
       

    </div>

</template>
<script>
// import main  from "@/main.js"
export default {
    name:"Login",
    data(){
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        login:function(){
             if(this.email==="dishatalreja1202@gmail.com" && this.password==="disha12"){
            alert("Login successful");
        }
        else{
            alert("No such user");
        }
        console.log("Login successful");
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