<template>
  <div>
  
  <div class="rounded-3xl shadow w-10/12 bg-white md:block hidden">
            <form class="flex justify-between items-center">
                <input type="email" placeholder="Enter email address" class="w-full font-medium focus:outline-none text-base px-4 py-2 rounded-3xl"/>
                <input type="submit" value="Schedule a demo" class="text-base py-3 px-6 button-color cursor-pointer hover:opacity-70 rounded-3xl"/>
            </form>
    </div>
  <div class="md:hidden block">
            <form>
                <input type="email" placeholder="Enter email address" class="mb-3 w-full font-medium focus:outline-none text-base px-4 py-2 rounded-3xl"/>
                <input type="submit" value="Schedule a demo" class="w-full text-base py-3 px-6 button-color cursor-pointer hover:opacity-70 rounded-3xl"/>
            </form>
    </div>

  
  </div>
</template>

<script>

export default {
  name: 'Mailform',
 
}
</script>

<style scoped>
   .button-color{
    color:#fbfcfe;
    background:#ba4270;
}
</style>
