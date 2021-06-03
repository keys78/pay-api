<template>
  
    <header class="body-bg">

        <section class=" xl:w-9/12 w-11/12 mx-auto pt-7 flex justify-between items-center" style="z-index: 2;">
            <div class="lg:w-5/12 w-7/12 flex justify-between items-center">

                <div>
                    <router-link to="/"><img src="../assets/shared/desktop/logo.svg" alt="payapi icon"></router-link>
                </div>

                <router-link class="md:block hidden" to="/pricing"><h1>Pricing</h1></router-link>
                <router-link class="md:block hidden" to="/about"><h1>About</h1></router-link>
                <router-link class="md:block hidden" to="/contact"><h1>Contact</h1></router-link>
           
            </div>

            <router-link  class="md:block hidden"  style="z-index: 9999;" to="/signup"><div class="cursor-pointer py-3 px-6 button-color hover:opacity-70 rounded-3xl">
                Schedule a demo
            </div></router-link>
            
            <div @click="toggleBar" style="z-index: 9999;" class="anim md:hidden block">
                <h1 v-if="!showSideBar"><i class="text-3xl fas fa-bars"></i></h1>
            </div>

        </section>

        <div v-if="showSideBar" class="anim w-full pt-20 p-4 fixed h-screen top-0 sidebarStyle text-center" style="z-index: 99999999999;">
            <div class="absolute top-0 right-0 overflow-hidden" style="z-index:-9;">
                <img class="relative -right-40" src="../assets/shared/desktop/bg-pattern-circle.svg">
            </div>

            <div class="absolute bottom-0 left-0 overflow-hidden" style="z-index:-9;">
                <img class="relative -left-40" src="../assets/shared/desktop/bg-pattern-circle.svg">
            </div>

            <div @click="toggleBar" style="z-index: 9999;" class="absolute top-8 right-7">
                <h1 v-if="showSideBar"><i class="text-3xl text-red-400 hover:text-red-300 font-thin fas fa-times"></i></h1>
            </div>

            <router-link to="/pricing"><h2>Pricing</h2></router-link>
            <router-link  to="/about"><h2 class="py-4">About</h2></router-link>
            <router-link to="/contact"><h2>Contact</h2></router-link>

             <div class="my-6 mt-3 border-b-2 border-gray-400"></div>

            <router-link style="z-index: 9999;" to="/signup"><div class="mt-10 cursor-pointer py-3 px-6 button-color hover:opacity-70 rounded-3xl">
                Schedule a demo
            </div></router-link>

        </div>

        

    </header>
</template>

<script>

export default {
  name: 'Header',
  components: {
 
  },
  data() {
      return{
          showSideBar: false
      }
  },
  methods: {
      toggleBar() {
          this.showSideBar = !this.showSideBar
      }
  }
}
</script>

<style scoped>
  
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

    .sidebarStyle{
    background: #1b262f;;
    color:rgb(216, 216, 216)
    }

    h2{
        color:whitesmoke;
        font-size: 18px;
        transition: all linear 0.2s;
    }
    h2:hover{
        padding-left:12px;
        transition: all linear 0.2s;
        color:rgb(139, 155, 165)
    }

    .anim{
        transition: all linear 0.7s;
    }

</style>
