<template>
  
  <footer class="generic-bg h-20 w-full relative overflow-hidden py-6">
       <div class="absolute top-0 right-0 overflow-hidden z-indexer">
             <img class="relative -top-16 left-80" src="../assets/shared/desktop/bg-pattern-circle.svg">
        </div>

    <div class="w-9/12 mx-auto flex justify-between items-center">

        <div class="w-5/12 flex justify-between items-center">
            <div>
                <img src="../assets/shared/desktop/logo-footer.svg">
            </div>

                <router-link to="/pricing"><h1>Pricing</h1></router-link>
                <router-link to="/about"><h1>About</h1></router-link>
                <router-link to="/contact"><h1>Contact</h1></router-link>
        </div>

        <div class="w-2/12 flex justify-between items-center">
            <img class="cursor-pointer" src="../assets/shared/desktop/facebook.svg" alt="social icons">
            <img class="cursor-pointer" src="../assets/shared/desktop/twitter.svg" alt="social icons">
            <img class="cursor-pointer" src="../assets/shared/desktop/linkedin.svg" alt="social icons">
        </div>

    </div>

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
