<script setup>
import Search from '../components/Search.vue'
import Perfil from '../components/Perfil.vue'
</script>

<template>
  <div id='main' class=''>
    
    <div class='p-2'></div>
    <Search />
    <div id='perfil' class="mx-auto m-4">
      <div id='user-img'>
        <img  class="img-fluid" src="/src/assets/user.png"/></div>
        <div id='user-name'>
        <p>
          Hi, James
        </p></div>
        
    </div>

    <hr class='pb-2 mx-auto' >

    <div class='mx-auto pb-2' id='label'><p>Serviços</p></div>
    <div class='mx-auto' id='cat-container'>
    
      <div class=' ' id='category'>
      <div class='item'>
        <img  class='img-category' src='/src/assets/social.png'>
        <p class=''>Corte Social</p>
      </div>
      <!-- <div class='m-3'></div> -->
<br>

      
      <div class='item'>
        <img  class='img-category' src='/src/assets/degrade.png'>
        <p class=''>Corte Degradê</p>
      </div

      ></div>

      <div class=' ' id='category-2'>
      <div class='item'>
        <img  class='img-category img-fluid' src='/src/assets/raspado.png'>
        <p class=''>Corte Raspado</p>
      </div>
      <div class='item'>
        <img  class='img-category img-fluid' src='/src/assets/descolorir.png'>
        <p class=''>Descolorir</p>
      </div>
    
    </div>

    </div>

    <div class="mx-auto">
    <RouterLink  to="/agendar"> <button id="bt-agendar" type="button" class="btn btn-warning btn-rounded p-3">Fazer agendamento</button></RouterLink>
</div></div>
</template>

