<template>
   <div class="body-bg">
       <Header/>
      <div class="absolute -top-44 right-0 overflow-hidden z-indexer">
            <img class="relative md:-top-96 -top-36 -right-32" src="./assets/shared/desktop/bg-pattern-circle.svg">
        </div>

        <div class="xl:w-7/12 sm:w-10/12 mx-auto">
            <h1 class="lg:w-9/12 w-11/12 sm:text-5xl text-4xl lg:text-left md:mx-0 mx-auto text-center font-semibold tracking-wide showcase-text public-sans mt-16">
            We empower innovators by delivering access to the financial system
            </h1>
        </div>

        <div class="xl:w-7/12 w-11/12 mx-auto pt-20 md:text-left text-center">

            <div class="flex md:flex-row flex-col mb-12">
                <div class="w-11/12 font-semibold showcase-text public-sans text-3xl">
                    <h3 class="pb-5">Our Vision</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>Our main goal is to build beautiful consumer experiences along with developer-friendly
                    infrastructure. The result is an intelligent tool that gives everyone the ability to create
                    amazing products that solve big problems. We are deeply focused on democratizing financial
                    services through technology.</p>
                </div>
            </div>

            <div class="flex md:flex-row flex-col">
                <div class="md:w-9/12 w-11/12 font-semibold showcase-text public-sans text-3xl">
                    <h3 class="pb-5">Our Business</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>At the core of our platform is the technical infrastructure APIs that connect consumers.
                Our innovative product provides key insights for businesses and individuals, as well as
                robust reporting for traditional financial institutions and developers.</p>
                </div>
            </div>

        
        </div>

        <div class="relative body-bg w-full" style="z-index:2">

            <div class="absolute top-0 left-0 overflow-hidden" style="z-index:-1;">
                <img class="relative sm:-top-0 top-20 sm:-left-96 -left-60" src="./assets/shared/desktop/bg-pattern-circle.svg">
            </div>

            <img class="pt-40 w-full"  src="./assets/about/desktop/image-team-members.jpg" alt="team members">
        </div>
    
        <!--stats area-->
        <div class="lg:w-9/12 w-11/12 mx-auto sm:text-left text-center pt-20 flex sm:flex-row flex-col justify-between items-center">

            <div class="sm:w-3/12 w-full">
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
                    <p class="showcase-text public-sans text-base">Team Members</p>
                    <h1 class="text-6xl dark-pink showcase-text public-sans font-semibold mx-auto">300+</h1>
                <div class="mb-6 mt-3 border-b-2 border-gray-400 sm:block hidden"></div>
            </div>

            <div class="sm:w-3/12 w-full sm:py-0 py-10">
                <div class="mb-6 mt-3 border-b-2 border-gray-400 sm:block hidden"></div>
                    <p class="showcase-text public-sans text-base">Offices in US</p>
                    <h1 class="text-6xl dark-pink showcase-text public-sans font-semibold mx-auto">3</h1>
                <div class="mb-6 mt-3 border-b-2 border-gray-400 sm:block hidden"></div>
            </div>

            <div class="lg:w-3/12 sm:w-4/12 w-full">
                <div class="mb-6 mt-3 border-b-2 border-gray-400 sm:block hidden"></div>
                    <p class="showcase-text public-sans text-base">Transactions analyzed</p>
                    <h1 class="text-6xl dark-pink showcase-text public-sans font-semibold mx-auto">10M+</h1>
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
            </div>

        </div>


        <div class="xl:w-7/12 w-11/12 mx-auto pt-20 md:text-left text-center">

            <div class="flex md:flex-row flex-col mb-12">
                <div class="w-11/12 font-semibold showcase-text public-sans text-3xl">
                    <h3 class="pb-5">The Culture</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>We strongly believe there's always an opportunity to learn from each other outside of
                       day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups.
                       We always value cross-team collaboration and diversity of thought, no matter the job title.
                    </p>
                </div>
            </div>

            <div class="flex md:flex-row flex-col">
                <div class="md:w-6/12 w-11/12 font-semibold showcase-text public-sans text-3xl">
                    <h3 class="pb-5">The People</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>We're all passionate about building a more efficient and inclusive financial infrastructure
                       together. At PayAPI, we have diverse backgrounds and skills.
                    </p>
                </div>
            </div>

        
        </div>


        <div class="flex sm:flex-row flex-col justify-between items-center xl:w-9/12 w-11/12 py-24 mx-auto">
            <h1 class="sm:text-3xl text-4xl font-medium showcase-text sm:pb-0 pb-6">Ready to start?</h1>
            <div class="sm:w-6/12 w-full">
                <Mailform/>
            </div>
        </div>

        <Footer/>

   </div>
</template>


<script>
import Header from './components/Header.vue'
import Mailform from './components/Mailform.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Mailform,
    Footer
  }
}
</script>

<style>


.faded-off{
    opacity: 0.5;
    margin-left: 30px;
    color: #36536b;
    font-weight: 500;
}
</style>
