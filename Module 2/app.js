var app = new Vue({
    el:'#app',
    data:{
        registerPage:true,
        loginPage:false,
        seen:false,
        name:'',
        email:'',
        password:'',
        message:''
    },
    methods:{
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
})