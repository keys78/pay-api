<template>

  <div class="body-bg">
    <Header/>
    <div class="absolute top-0 right-0 overflow-hidden z-indexer">
        <img class="relative -top-48 -right-40" src="./assets/shared/desktop/bg-pattern-circle.svg">
    </div>
    <div class="absolute top-20 right-40">
        <img src="./assets/home/desktop/illustration-phone-mockup.svg" alt="phone mockup">
    </div>

    <div class="w-4/12 text-6xl font-medium pts ml-48 mt-36 showcase-text">
        <h1>Start building with our APIs for absolutely free.</h1>
        <Mailform class="mt-10"/>
        <p class="mt-3 text-gray-500 pts text-base ml-6">Have any questions? Contact us</p>
    </div>

    <!--selected companies-->
    <section class="w-full generic-bg py-20 mt-56 relative">
        <div class="absolute -top-0 left-0 overflow-hidden z-indexer">
             <img class="relative -top-96 -left-96" src="./assets/shared/desktop/bg-pattern-circle.svg">
        </div>

        <div class="flex items-around justify-between text-white w-9/12 mx-auto pt-10 public-sans">
            <div class="w-5/12">
                <h2 class="text-4xl">Who we work with</h2>
                <p class="my-8 opacity-80 public-sans">
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
        <div class="w-9/12 mx-auto flex justify-between items-center mb-10">

            <div class="w-full">
                <img src="./assets/home/desktop/illustration-easy-to-implement.svg" alt="easy to implement">
            </div>

            <div>
                <h1 class="text-3xl font-medium showcase-text ">Easy to implement</h1>
                 <p class="text-sm light-text w-9/12 font-semibold public-sans mt-2">
                    Our API comes with just a few lines of code. You’ll be up and running in
                    no time. We built our documentation page to integrate payments functionality
                    with ease.
                </p>
            </div>

        </div>


        <div class="relative pb-40">
            <div class="w-9/12 mx-auto relative flex justify-between items-center pt-16">

                <div>
                    <h1 class="text-3xl font-medium showcase-text">Simple UI & UX</h1>
                    <p class="text-sm light-text w-11/12 font-semibold public-sans mt-2">
                        Our pre-built form is easy to integrate in your app or website’s checkout
                        flow and designed to optimize conversion.
                    </p>
                </div>


                <div class="w-full simple-ui">
                    <img src="./assets/home/desktop/illustration-simple-ui.svg" alt="phone mockup">
                </div>

                
            </div>
                <div class="absolute top-0 right-0 overflow-hidden z-indexer">
                    <img class="relative -top-0 -right-72" src="./assets/shared/desktop/bg-pattern-circle.svg">
            </div>
        </div>
    </section>
    
    <section class="body-bg">
         <div class="flex justify-between gap-10 items-center w-9/12 py-20 mx-auto">
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


         <div class="flex justify-between items-center w-9/12 py-24 mx-auto">
            <h1 class="text-3xl font-medium showcase-text">Ready to start?</h1>
            <div class="w-6/12">
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
.showcase-text{
    color:#36536b;
}
.button-color{
    color:#fbfcfe;
    background:#ba4270;
}
.z-indexer{
    z-index:0;
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
