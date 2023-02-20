<script setup>
import Search from '../components/Search.vue'
import Perfil from '../components/Perfil.vue'

var servicos = [{
  nome: 'Corte Degradê',
  pic: "/src/assets/degrade.png"
} ,
{
  nome: 'Social',
  pic: '/src/assets/social.png' 
},
{
  nome: 'Raspado',
  pic: '/src/assets/raspado.png'} ,
{
  nome: 'Descolorir',
  pic: '/src/assets/descolorir.png' 
,}]

let user_name= 'Jesiel'


</script>

<template>
  <div id='main' class='container'>
    
    <div class='p-2'></div>
    <Search />
    <div id='perfil' class="mx-auto m-4">
      <a href='#'><div id='user-img'>
        <img  class="img-fluid" src="/src/assets/user.png"/></div></a>
        <div id='user-name'>
        <p >
          Olá, <strong>{{user_name}}</strong>
        </p></div>
        
    </div>

    <hr class='pb-2 mx-auto' >

    <div class='mx-auto pb-2' id='label'><p>Serviços</p></div>
    <div class='mx-auto' id='cat-container'>
    
      <div class=' ' id='category'>
      
        <div class='item' v-for="item in servicos" :key="item.nome">
        <a href='#'><img  class='img-category' :src='item.pic'></a>
        <p class=''>{{ item.nome }}</p>
      </div>
        

      </div>

    </div>

    <hr class='mx-auto mt-3' >

    <div id="bt-agendar" class="m-3 mx-auto">
      <RouterLink  to="/agendar"> <button  type="button" class="btn btn-primary btn-rounded p-3">Fazer agendamento</button></RouterLink>
    </div>



<div class='p-3'></div></div>
</template>

