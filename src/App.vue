<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DashBoard from './components/DashBoard.vue'


</script>

<template>
 
  <header >
  

    <div class="wrapper">
         <nav class='m-3'>
        <RouterLink  to="/">Inicio</RouterLink>
        <RouterLink class='m-2' to="/dashboard">Serviços</RouterLink>
        <RouterLink to="/agendar">Agendamento</RouterLink>
      </nav>
   
  </div>
  </header>

  <RouterView />
  
</template>

<style scoped>
  nav{
  font-family: 'Poppins', sans-serif;
}
</style>
