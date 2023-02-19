<script setup>
flatpickr("input[type=datetime-local]", {enableTime: false,
    dateFormat: "Y-m-d H:i",});
</script>

<template>
    <h1 class='text-center mb-5'>
        AGENDAMENTO
    </h1>

    <div class='mx-auto m-3 mb-5' id='info'>
        <p>SEG a SEX - <strong>9h ás 19h</strong></p>
        <p>SÁB - <strong>9h ás 19h</strong></p>
        <p><strong>Domingo - FECHADO</strong></p>
    </div>

    <form class='mx-auto m-3 mb-5' id='datepicker'> 
        <input class='form-control' type="datetime-local" placeholder="Selecione o dia para o seu atendimento"/>

    </form>

    <div class='mx-auto' id='confirmar'>
        <a href='/confirmacao'><button type="button" class="btn btn-success btn-rounded">Confirmar Agendamento</button></a>
    </div>
</template>

<style scoped>
h1{
    color: #00c279;
    font-family: 'Gloock', serif;
   
}

#info{
    max-width: 300px;
    color: yellow;     
            }

#confirmar{
    width: 200px;
}
</style>