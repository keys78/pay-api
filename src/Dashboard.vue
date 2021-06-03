<template>
    <div class="w-full h-screen body-bg">

        <div class="py-5 bar-top">

            <div class="flex justify-between md:w-9/12 w-full px-6 mx-auto items-center">
                <div>
                    <router-link to="/"><img src="./assets/shared/desktop/logo-footer.svg"></router-link>
                </div>

                <div class="text-white text-xl public-sans font-medium text-gray-200">Welcome {{ firstName }} </div>
            </div>
        </div>

        <div class="w-7/12 mx-auto p-20">
        
        <img class="mx-auto" src="./assets/shared/desktop/payet.png"/>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'Dashboard',

        data() {
        return {
             firstName: "",
             id: 1,
            }
        },

    
         mounted() {

             fetch('http://localhost:3000/body/' + this.id) 
            .then(res => {
                return res.json();
                })
            .then(data => {
            console.log(data.firstName)
            this.firstName = data.firstName
            
            })
    },

}
</script>

<style scoped>
    .bar-top{
    background:#36536b;
}



</style>