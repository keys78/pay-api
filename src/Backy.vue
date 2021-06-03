<template>
<div>
  <!-- <Home/> -->
  <!-- <Pricing/> -->
  <!-- <About/> -->
  <Contact/>

</div>
</template>

<script>
// import Home from './Home.vue'
// import Pricing from './Pricing.vue'
// import About from './About.vue'
import Contact from './Contact.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // Pricing,
    // About,
    Contact
  }
}
</script>

<style>

.keep {
    --dark-pink: #ba4270;
    --link-water-white: #fbfcfe;
    --san-juan-blue: #36536b;
    --mirage-blue: #1b262f;
    --charm-pink: #da6d97;
    --light-san-juan-blue: #6c8294;
}
.showcase-text{
    color:#36536b;
}
.dark-pink{
   color:#ba4270;
}

.body-bg{
  background-color: #EDF3F8;
}

.pts-font{
  font-family: 'PT Serif', serif;
}

.public-sans{
  font-family: 'Source Serif Pro', serif;
}
/* .public-sans{
  font-family: 'Public Sans', sans-serif
} */

.generic-bg{
    background: #1b262f;
}
.flexer{
  display: flex;
  justify-items: space-between;
  justify-items: center;
}

 /* <div class="md:absolute top-20 right-40 w-full">
        <img class="" src="./assets/home/desktop/illustration-phone-mockup.svg" alt="phone mockup">
    </div>

    <div class="md:w-4/12 w-11/12 md:text-6xl sm:text-5xl text-4xl font-medium  pts md:ml-48 ml-12 md:mt-36 mt-96 showcase-text">
        <h1 class="pt-60">Start building with our APIs for absolutely free.</h1>
        <Mailform class="mt-10"/>  
        <p class="mt-3 text-gray-500 pts text-base ml-6 ">Have any questions? <router-link class="underline" to="/contact">Contact us</router-link></p>
    </div>


</style> */
