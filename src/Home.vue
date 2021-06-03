<template>

  <div class="body-bg" style="z-index:4;">
    <Header/>
    <div class="absolute top-0 right-0 overflow-hidden z-indexer">
        <img class="relative md:-top-48 sm:-top-56 w-full -top-52 md:-right-40" src="./assets/shared/desktop/bg-pattern-circle.svg">
    </div>
    <section class="flex lg:flex-row flex-col-reverse justify-between items-center xl:w-9/12 w-11/12 mx-auto">

        <div class="lg:w-full w-10/12 lg:text-left text-center mx-auto md:text-5xl text-4xl font-medium pts showcase-text">
            <h1>Start building with our APIs for absolutely free.</h1>
            <Mailform class="mt-10"/>  
            <p class="mt-3 text-gray-500 pts text-base ml-6 ">Have any questions? <router-link class="underline" to="/contact">Contact us</router-link></p>
        </div>

          <div class="lg:w-full md:w-6/12 sm:w-9/12 w-11/12 mx-auto" style="z-index:9;">
            <img class="mx-auto lg:-mr-6 -mr-5" src="./assets/home/desktop/illustration-phone-mockup.svg" alt="phone mockup">
        </div>
    </section>

    <!--selected companies-->
    <section class="w-full generic-bg py-20 mt-8 relative">
        <div class="absolute -top-0 left-0 overflow-hidden z-indexer">
             <img class="relative md:-top-96 -top-72 md:-left-96" src="./assets/shared/desktop/bg-pattern-circle.svg">
        </div>

        <div class="flex items-around lg:flex-row flex-col-reverse justify-between text-white xl:w-9/12 w-11/12 mx-auto pt-10 public-sans">
            <div class="lg:w-5/12 md:w-7/12 w-10/12 lg:mx-0 mx-auto lg:text-left text-center lg:pt-0 pt-16">
                <h2 class="text-4xl">Who we work with</h2>
                <p class="my-6 opacity-80 public-sans">
                    Today, millions of people around the world have successfully connected
                    their accounts to apps they love using our API. We provide developers
                    with the tools they need to create easy and accessible experiences
                    for their users.
                </p>
                <button class="buttono focus:outline-none public-sans text-lg py-2 border-2 w-4/12 cursor-pointer border-white rounded-3xl">
                    About us
                </button>
            </div>

            <div class="grid grid-cols-3 gap-8 items-center">
                <img class="" src="./assets/shared/desktop/tesla.svg" alt="enterprise logos">
                <img class="" src="./assets/shared/desktop/microsoft.svg" alt="enterprise logos">
                <img class="" src="./assets/shared/desktop/hewlett-packard.svg" alt="enterprise logos">
                <img class="" src="./assets/shared/desktop/oracle.svg" alt="enterprise logos">
                <img class="" src="./assets/shared/desktop/google.svg" alt="enterprise logos">
                <img class="" src="./assets/shared/desktop/nvidia.svg" alt="enterprise logos">

            </div>

        </div>

    </section>

    <!---easy to implent--->
    <section class="body-bg pt-20 w-full">
        <div class="lg:w-9/12 w-11/12 mx-auto lg:flex-row flex-col flex justify-between items-center mb-10">

            <div class="lg:w-full md:w-6/12 sm:w-9/12 w-11/12 mx-auto">
                <img src="./assets/home/desktop/illustration-easy-to-implement.svg" alt="easy to implement">
            </div>

            <div>
                <h1 class="text-3xl font-medium showcase-text lg:text-left text-center">Easy to implement</h1>
                 <p class="text-sm light-text lg:w-9/12 lg:text-left text-center w-full font-semibold public-sans mt-2">
                    Our API comes with just a few lines of code. You’ll be up and running in
                    no time. We built our documentation page to integrate payments functionality
                    with ease.
                </p>
            </div>

        </div>


        <div class="relative lg:pb-40 pb-20">
            <div class="lg:w-9/12 mx-auto relative lg:flex-row flex-col-reverse flex justify-between items-center pt-16">

                <div>
                    <h1 class="text-3xl font-medium showcase-text lg:text-left text-center">Simple UI & UX</h1>
                    <p class="text-sm light-text w-11/12 font-semibold public-sans mt-2 lg:text-left text-center">
                        Our pre-built form is easy to integrate in your app or website’s checkout
                        flow and designed to optimize conversion.
                    </p>
                </div>


                <div class="lg:w-full md:w-6/12 sm:w-9/12 w-11/12 mx-auto simple-ui">
                    <img src="./assets/home/desktop/illustration-simple-ui.svg" alt="phone mockup">
                </div>

                
            </div>
                <div class="absolute top-0 right-0 overflow-hidden z-indexer">
                    <img class="relative -top-0 -right-72" src="./assets/shared/desktop/bg-pattern-circle.svg">
            </div>
        </div>
    </section>
    
    <section class="body-bg">
         <div class="flex justify-between md:flex-row flex-col gap-10 items-center xl:w-9/12 w-11/12 py-20 mx-auto">
            <div class="w-full">
                <img class="mx-auto" src="./assets/home/desktop/icon-personal-finances.svg" alt="finances icon">
                <h2 class="text-xl font-medium pt-4 showcase-text text-center ">Personal Finances</h2>
                <p class="text-sm light-text text-center font-semibold text-center public-sans mt-2">
                    Consolidate financial data from multiple sources and categorize transactions up to
                    2 years of history. Analyze reports to reconcile activities in your account.
                </p>
            </div>

            <div class="w-full">
                <img class="mx-auto" src="./assets/home/desktop/icon-banking-and-coverage.svg" alt="finances icon">
                <h2 class="text-xl font-medium pt-4 showcase-text text-center ">Banking & Coverage</h2>
                <p class="text-sm light-text text-center font-semibold text-center public-sans mt-2">
                    With our platform, you can speed up account onboarding and support ongoing payments
                    for checking, savings, credit card, and brokerage accounts.
                </p>
            </div>
            <div class="w-full">
                <img class="mx-auto" src="./assets/home/desktop/icon-consumer-payments.svg" alt="finances icon">
                <h2 class="text-xl font-medium pt-4 showcase-text text-center ">Consumer Payments</h2>
                <p class="text-sm light-text text-center font-semibold text-center public-sans mt-2">
                    It’s easier to set up secure bank payments with us through a flow designed with the
                    user experience in mind. Customers could instantly authenticate their account.
                </p>
            </div>

        </div>


         <div class="flex sm:flex-row flex-col justify-between items-center xl:w-9/12 w-11/12 py-16 mx-auto">
            <h1 class="sm:text-3xl text-4xl font-medium showcase-text sm:pb-0 pb-6">Ready to start?</h1>
            <div class="sm:w-6/12 w-full">
                <Mailform/>
            </div>
         </div>

    </section>
    <Footer/>
   







  </div>
</template>

<script>
import Header from './components/Header.vue'
import Mailform from './components/Mailform.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Mailform,
    Footer
  }
}
</script>

<style>

.z-indexer{
    z-index:1
    }
.buttono{
    transform: scale(0.98);
}
.light-text{
    color:#6c8294;
}
.simple-ui{
    z-index: 99;
}

</style>
