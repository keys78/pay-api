<template>
    <div class="body-bg">

        <div>
            <div class="sm:w-9/12 w-11/12 mx-auto pt-8">
                <router-link to="/"><img src="./assets/shared/desktop/logo.svg" alt="payapi icon"></router-link>
            </div>
        </div>

        <div class="absolute top-0 right-0 overflow-hidden md:block hidden" >
            <img class="relative -top-96 -right-40" src="./assets/shared/desktop/bg-pattern-circle.svg">
        </div>

        <div class="lg:w-5/12 md:w-7/12 sm:w-10/12 w-11/12 mx-auto mt-12">
                <h1 class="text-center text-3xl showcase-text public-sans pb-5">Sign In Here</h1>
                 
                 <h1 v-if="alerts" class="animate__animated animate__faster animate__slideInDown text-xl text-center  text-green-500"> {{ alerts }} </h1>
                 
        <form action="" @submit.prevent="updatingDb">
            <input v-model="userDetails.firstName" type="text" placeholder="First Name" class="form-input" @blur="handleBlur">
            <p class="text-red-500 text-sm font-semibold" v-if="firstNameError">{{ firstNameError }}</p>

            <input v-model="userDetails.lastName" type="text" placeholder="Last Name" class="form-input" @blur="handleLastBlur">
            <p class="text-red-500 text-sm font-semibold" v-if="lastNameError">{{ lastNameError }}</p>

            <input v-model="userDetails.email" type="email" placeholder="Email" class="form-input" @blur="handleMailBlur">
            <p class="text-red-500 text-sm font-semibold" v-if="mailError">{{ mailError }}</p>

            <input v-model="userDetails.phone" type="text" placeholder="Phone" class="form-input"  @blur="handlePhoneBlur">
            <p class="text-red-500 text-sm font-semibold" v-if="phoneError">{{ phoneError }}</p>

            <input v-model="userDetails.password" type="password" placeholder="Password" class="form-input"  @blur="handlePassBlur">
            <p class="text-red-500 text-sm font-semibold" v-if="passError">{{ passError }}</p>

            <label for="Checkbox" class="text-base showcase-text public-sans flex items-center gap-4 pt-4">
                <input type="checkbox" v-model="terms" class="checky">
                I agree to terms and policies
            </label>

            <Button :disabled="isDisabled" type="submit" text="Submit" class="my-4" :class="{'disable-submit': isDisabled}"/>

        </form>
        </div>
        <Footer class="mt-40"/>


    </div>
</template>

<script>
import Button from './components/Button.vue'
import Footer from './components/Footer.vue'
// import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default {
    name:"Signup",
    components: {
        Button,
        Footer
    },

     data() {
    return {
        terms: false,
        userDetails: {
            firstName: "",
            lastName: "",
            email:"",
            phone:"",
            password: ""

        },

        alerts:'',
       firstNameError: '',
       firstNameErrorMessage: 'This Field can\'t be empty',

       lastNameError: '',
       lastNameErrorMessage: 'This Field can\'t be empty',

       mailError: '',
       mailErrorMessage: 'Please input a vaild email address',

       phoneError: '',
       phoneErrorMessage: 'Fill out this field correctly',

       passError: '',
       passErrorMessage: 'Password must be more than 8 characters',
    }
  },

  methods: {
    handleBlur(e) { 
     this.firstNameError = this.userDetails.firstName.length > 1 ? '' : this.firstNameErrorMessage
     this.userDetails.firstName.length > 1 ? e.target.style.border = '#929596 1px solid' : e.target.style.border = 'red 1px solid'
    //  e.target.placeholder.style.setAttribute("rfed")
     },

    handleLastBlur(e) { 
     this.lastNameError = this.userDetails.lastName.length > 1 ? '' : this.lastNameErrorMessage
     this.userDetails.lastName.length > 1 ? e.target.style.border = '#929596 1px solid' : e.target.style.border = 'red 1px solid'
     },

     handleMailBlur(e) { 
     this.mailError = this.userDetails.email.length > 5 ? '' : this.mailErrorMessage
     this.userDetails.email.length > 1 ? e.target.style.border = '#929596 1px solid' : e.target.style.border = 'red 1px solid'
     },

     handlePhoneBlur(e) { 
     this.phoneError = this.userDetails.phone.length > 5 ? '' : this.phoneErrorMessage
     this.userDetails.phone.length > 1 ? e.target.style.border = '#929596 1px solid' : e.target.style.border = 'red 1px solid'
     },
    
     handlePassBlur(e) { 
     this.passError = this.userDetails.password.length > 8 ? '' : this.passErrorMessage
     this.userDetails.password.length > 8 ? e.target.style.border = '#929596 1px solid' : e.target.style.border = 'red 1px solid'
     },


      updatingDb() {

        // axios.post('http://localhost:3000/body', {
        //     body: JSON.stringify(this.userDetails)
        // })
        // .then(res => {return res.json();})
        // .catch(e => {this.errors.push(e)})

         fetch('http://localhost:3000/body', {
                method: 'POST',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.userDetails)
            })
                .then(res => {
                return res.json();
            
            })
            .then(data => {
                console.log(data)
                this.alerts = "Signup successful"
                setInterval (() => {
                this.alerts = ""},3000)
                
                this.$router.push({ name: 'Dashboard' });
                })

       .catch(() => {
            setInterval (() => {
               this.alerts = "error, try again" 
               },4000)
        })

  },
  
  },

   computed:{
      isDisabled: function(){
          return this.terms && this.userDetails.password.length > 8 && this.userDetails.firstName.length && this.userDetails.lastName.length && this.userDetails.email.length && this.userDetails.phone.length > 2 ? false : true
        
      }
  }

}
</script>


<style scoped>
.form-input{
    padding:11px 7px;
    border:1px solid rgb(146, 149, 150);
    font-size: 16px;
    width: 100%;
    background: transparent;
    margin-bottom: 4px;
    margin-top: 10px;
    font-family: 'Source Serif Pro', serif;
    border-radius: 7px;
}
.form-input:focus{
    outline: none;
}
::placeholder{
    color:#929596;
}
.disable-submit{
    background: transparent;
    color:grey;
}
</style>