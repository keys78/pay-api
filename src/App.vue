<template>
  <Home/>


</template>

<script>
import Home from './Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

.keep {
    --dark-pink: #ba4270;
    --link-water-white: #fbfcfe;
    --san-juan-blue: #36536b;
    --mirage-blue: #1b262f;
    --charm-pink: #da6d97;
    --light-san-juan-blue: #6c8294;
}

.body-bg{
  background-color: #EDF3F8;
}

.pts-font{
  font-family: 'PT Serif', serif;
}

.public-sans{
  font-family: 'Public Sans', sans-serif
}

.generic-bg{
    background: #1b262f;
}
.flexer{
  display: flex;
  justify-items: space-between;
  justify-items: center;
}
</style>
