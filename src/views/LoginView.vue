<script>
export default {
  data() {
    return {
      selected: ''
    }
  }
}
</script>

<template>

    <div class='card p-5'>
  <span> Escolhido: {{ selected }}</span>
  <select v-model="selected">
    <option disabled value="">Escolha o corte</option>
    <option>Degradê</option>
    <option>Social</option>
    <option>Raspado</option>
  </select>
  </div>


</template>