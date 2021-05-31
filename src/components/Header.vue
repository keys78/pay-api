<template>
  
    <header class="body-bg">

        <section class=" w-9/12 mx-auto pt-7 flex justify-between items-center">
            <div class="w-5/12 flex justify-between items-center">

                <div>
                    <img src="../assets/shared/desktop/logo.svg" alt="payapi icon">
                </div>

                <h1>Pricing</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>

            <div class="cursor-pointer py-3 px-6 button-color hover:opacity-70 rounded-3xl z-indexer">
                Schedule a demo
            </div>

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
