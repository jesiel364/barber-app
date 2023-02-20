<script setup>
import { RouterLink, RouterView } from 'vue-router'




</script>

<template>
 
  <header >
  

    <div class="wrapper">
         <nav class='m-3'>
        <RouterLink class='me-2'  to="/">Inicio</RouterLink>
        <RouterLink class='me-2' to="/servicos">Serviços</RouterLink>
        <RouterLink class='me-2' to="/agendar">Agendamento</RouterLink>
        <RouterLink  to="/login">Login</RouterLink>
      </nav>
   
  </div>
  </header>

  <RouterView />
  
</template>

<style scoped>
  nav{
  font-family: 'Poppins', sans-serif;
  /* background-color: #363636; */
  /* padding: 20px; */
}
</style>
