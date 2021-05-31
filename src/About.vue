<template>
   <div class="body-bg">
       <Header/>
       <div class="absolute -top-44 right-0 overflow-hidden z-indexer">
        <img class="relative -top-96 -right-32" src="./assets/shared/desktop/bg-pattern-circle.svg">
    </div>

        <div class="w-7/12 mx-auto">
            <h1 class="w-9/12 text-5xl font-semibold tracking-wide showcase-text public-sans mt-16">
            We empower innovators by delivering access to the financial system
            </h1>
        </div>

        <div class="w-7/12 mx-auto pt-20">

            <div class="flex mb-12">
                <div class="w-11/12 font-semibold showcase-text public-sans text-3xl">
                    <h3>Our Vision</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>Our main goal is to build beautiful consumer experiences along with developer-friendly
                    infrastructure. The result is an intelligent tool that gives everyone the ability to create
                    amazing products that solve big problems. We are deeply focused on democratizing financial
                    services through technology.</p>
                </div>
            </div>

            <div class="flex">
                <div class="w-9/12 font-semibold showcase-text public-sans text-3xl">
                    <h3>Our Business</h3>
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
                <img class="relative -top-0 -left-96" src="./assets/shared/desktop/bg-pattern-circle.svg">
            </div>

            <img class="pt-40 w-full"  src="./assets/about/desktop/image-team-members.jpg" alt="team members">
        </div>
    
        <!--stats area-->
        <div class="w-9/12 mx-auto pt-20 flex justify-between items-center">

            <div class="w-3/12">
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
                    <p class="showcase-text public-sans text-base">Team Members</p>
                    <h1 class="text-6xl dark-pink showcase-text public-sans font-semibold mx-auto">300+</h1>
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
            </div>

            <div class="w-3/12">
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
                    <p class="showcase-text public-sans text-base">Offices in US</p>
                    <h1 class="text-6xl dark-pink showcase-text public-sans font-semibold mx-auto">3</h1>
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
            </div>

            <div class="w-3/12">
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
                    <p class="showcase-text public-sans text-base">Transactions analyzed</p>
                    <h1 class="text-6xl dark-pink showcase-text public-sans font-semibold mx-auto">10M+</h1>
                <div class="mb-6 mt-3 border-b-2 border-gray-400"></div>
            </div>

        </div>


        <div class="w-7/12 mx-auto pt-20">

            <div class="flex mb-12">
                <div class="w-11/12 font-semibold showcase-text public-sans text-3xl">
                    <h3>The Culture</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>We strongly believe there's always an opportunity to learn from each other outside of
                       day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups.
                       We always value cross-team collaboration and diversity of thought, no matter the job title.
                    </p>
                </div>
            </div>

            <div class="flex">
                <div class="w-6/12 font-semibold showcase-text public-sans text-3xl">
                    <h3>The People</h3>
                </div>
                <div class="showcase-text public-sans">
                    <p>We're all passionate about building a more efficient and inclusive financial infrastructure
                       together. At PayAPI, we have diverse backgrounds and skills.
                    </p>
                </div>
            </div>

        
        </div>


        <div class="flex justify-between items-center w-9/12 py-28 mx-auto">
            <h1 class="text-3xl font-medium showcase-text">Ready to start?</h1>
            <div class="w-6/12">
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
