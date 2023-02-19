<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DashBoard from './components/DashBoard.vue'
</script>

<template>
 
  <header>
  

    <div class="wrapper">
         <nav>
        <RouterLink to="/">Landing</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
   
  </div>
  </header>

  <RouterView />
  
</template>

<style scoped>

</style>
