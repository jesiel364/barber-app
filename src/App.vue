<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '/src/components/Navbar.vue'




</script>

<template>
 
  <header >

    
  <Navbar />
  </header>

  <RouterView />
  
</template>

<style>
.container{
  /* width: 100%; */
}
</style>
