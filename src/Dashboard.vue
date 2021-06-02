<template>
    <div class="w-full body-bg">

        <div class="py-5 bar-top">

            <div class="flex justify-between md:w-9/12 w-full px-6 mx-auto items-center">
                <div>
                    <router-link to="/"><img src="./assets/shared/desktop/logo-footer.svg"></router-link>
                </div>

                <div class="text-white text-xl public-sans">Welcome {{ firstName }}</div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'Dashboard',

        data() {
        return {
               
             firstName: ""
            }
        },

    
         mounted() {

             fetch('http://localhost:3000/body/1 ') 
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