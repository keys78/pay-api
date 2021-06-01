<template>
  
    <header class="body-bg">

        <section class=" w-9/12 mx-auto pt-7 flex justify-between items-center" style="z-index: 2;">
            <div class="w-5/12 flex justify-between items-center">

                <div>
                    <router-link to="/"><img src="../assets/shared/desktop/logo.svg" alt="payapi icon"></router-link>
                </div>

                <router-link to="/pricing"><h1>Pricing</h1></router-link>
                <router-link to="/about"><h1>About</h1></router-link>
                <router-link to="/contact"><h1>Contact</h1></router-link>
           
            </div>

            <router-link  style="z-index: 9999;" to="/signup"><div class="cursor-pointer py-3 px-6 button-color hover:opacity-70 rounded-3xl z-indexer">
                Schedule a demo
            </div></router-link>

        </section>


    </header>
</template>

<script>

export default {
  name: 'Header',
  components: {
 
  }
}
</script>

<style scoped>
    .z-indexer{
        z-index: 99999999999999999;
    }

    .button-color{
        color:#fbfcfe;
        background:#ba4270;
    }

    h1{
        color:#6c8294;
        cursor: pointer;
        font-weight: 500;
    }
    h1:hover{
        color: #000;
    }


</style>
