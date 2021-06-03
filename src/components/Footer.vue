<template>
  
  <footer style="z-index:0;" class="generic-bg md:h-32 h-auto w-full relative overflow-hidden py-6">
      

    <div class="xl:w-9/12 w-11/12 mx-auto flex md:flex-row flex-col justify-between items-center">

        <div class="lg:w-5/12 w-7/12 flex md:flex-row flex-col  justify-between items-center">
            <div>
                <router-link to="/"><img src="../assets/shared/desktop/logo-footer.svg" alt="payapi icon"></router-link>
            </div>

                <router-link to="/pricing"><h1 class="py-5">Pricing</h1></router-link>
                <router-link to="/about"><h1>About</h1></router-link>
                <router-link to="/contact"><h1 class="py-5">Contact</h1></router-link>
        </div>

        <div class="md:w-2/12 w-3/12 flex justify-between items-center">
            <img class="cursor-pointer" src="../assets/shared/desktop/facebook.svg" alt="social icons">
            <img class="cursor-pointer" src="../assets/shared/desktop/twitter.svg" alt="social icons">
            <img class="cursor-pointer" src="../assets/shared/desktop/linkedin.svg" alt="social icons">
        </div>

    </div>

     <div class="absolute top-0 right-0 overflow-hidden" style="z-index:-1">
             <img class="relative -top-16 left-80" src="../assets/shared/desktop/bg-pattern-circle.svg">
        </div>

            <h6 class="text-white text-center border-t border-gray-600 mt-3">Figma design by <a class="text-blue-300" href="frontendmentor.io">Frontendmentor</a> | Coded by <a class="text-blue-300" href="https://twitter.com/Emmy31087589">Em_codes</a></h6>
  </footer>
  
</template>

<script>

export default {
  name: 'Footer',
 
}
</script>

<style scoped>
    h1{
        color:#fbfcfe;
        cursor: pointer;
        font-weight: 500;
    }
</style>
