<script setup>

</script>

<template>
  <div id="landing" class='pt-5'>
    <img class="img-fluid mx-auto m-2" id='logo' src="/src/assets/barber.png" />
    <h1 id="logo-title" class="text-center text-light mt-3 ">YDA JEAN - BARBER SHOP</h1>

    <RouterLink class="mx-auto m-3 mt-5" to="/login"> <button id="bt-land" type="button"
        class="btn btn-warning btn-rounded p-3">Cortar cabelo</button></RouterLink>
  </div>
</template>

<style scoped>
#landing {
  /* width: 100%; */

  display: flex;
  flex-direction: column;

}
</style>
