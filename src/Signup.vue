<template>
    <div class="body-bg">

        <div>
            <div class="w-9/12 mx-auto pt-8">
                <router-link to="/"><img src="./assets/shared/desktop/logo.svg" alt="payapi icon"></router-link>
            </div>
        </div>

        <div class="absolute top-0 right-0 overflow-hidden z-indexer">
            <img class="relative -top-48 -right-40" src="./assets/shared/desktop/bg-pattern-circle.svg">
        </div>

        <div class="w-5/12 mx-auto mt-16">
                <h1 class="text-center text-3xl showcase-text public-sans pb-5">Sign In Here</h1>
        <form>
            <input v-model="Firstus" type="text" placeholder="First Name" class="form-input" @blur="handleBlur">
                <p class="text-red-500 text-base font-semibold" v-if="firstNameError">{{ firstNameError }}</p>
                <input v-model="Lastus" type="text" placeholder="Last Name" class="form-input" @blur="handleLastBlur">
                <p class="text-red-500 text-base font-semibold" v-if="lastNameError">{{ lastNameError }}</p>
               <input v-model="Mailus" type="email" placeholder="Email" class="form-input" @blur="handleMailBlur">
                 <p class="text-red-500 text-base font-semibold" v-if="mailError">{{ mailError }}</p>
                 <input v-model="Phonus" type="text" placeholder="Phone" class="form-input"  @blur="handlePhoneBlur">
                <p class="text-red-500 text-base font-semibold" v-if="phoneError">{{ phoneError }}</p>
                <label for="Checkbox" class="text-base showcase-text public-sans flex items-center gap-4 pt-4">
                     <input type="checkbox" v-model="terms" class="checky">
                    I agree to terms and policies
                </label>

                <Button :disabled="isDisabled" type="submit" text="Submit" class="my-4" :class="{'disable-submit': isDisabled}"/>

        </form>
        </div>
        <Footer class="mt-52"/>


    </div>
</template>

<script>
import Button from './components/Button.vue'
import Footer from './components/Footer.vue'

export default {
    name:"Signup",
    components: {
        Button,
        Footer
    },

     data() {
    return {
        terms: false,

       firstNameError: '',
       Firstus: '',
       firstNameErrorMessage: 'This Field can\'t be empty',

       lastNameError: '',
       Lastus: '',
       lastNameErrorMessage: 'This Field can\'t be empty',

       mailError: '',
       Mailus: '',
       mailErrorMessage: 'Please input a vaild email address',

       phoneError: '',
       Phonus: '',
       phoneErrorMessage: 'Fill out this field correctly',
    }
  },

  methods: {
    handleBlur() { 
     this.firstNameError = this.Firstus.length > 1 ? '' : this.firstNameErrorMessage
     },

    handleLastBlur() { 
     this.lastNameError = this.Lastus.length > 1 ? '' : this.lastNameErrorMessage
     },

     handleMailBlur() { 
     this.mailError = this.Mailus.length > 5 ? '' : this.mailErrorMessage
     },

     handlePhoneBlur() { 
     this.phoneError = this.Phonus.length > 5 ? '' : this.phoneErrorMessage
     },
    
  },
   computed:{
      isDisabled: function(){
          return this.Firstus.length > 1 ? false : true, this.Lastus.length > 1 ? false : true, this.Mailus.length > 5 ? false : true, this.Phonus.length > 5 ? false : true, !this.terms
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
</style>