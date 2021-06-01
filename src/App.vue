<template>
<div>
  <!-- <Home/> -->
  <!-- <Pricing/> -->
  <!-- <About/> -->
  <!-- <Contact/> -->
  <router-view/>

</div>
</template>

<script>

export default {
  name: 'App',
 
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
.showcase-text{
    color:#36536b;
}
.dark-pink{
   color:#ba4270;
}

.body-bg{
  background-color: #EDF3F8;
}

.pts-font{
  font-family: 'PT Serif', serif;
}

.public-sans{
  font-family: 'Source Serif Pro', serif;
}
/* .public-sans{
  font-family: 'Public Sans', sans-serif
} */

.generic-bg{
    background: #1b262f;
}
.flexer{
  display: flex;
  justify-items: space-between;
  justify-items: center;
}

</style>
