<template>
    <div id="cadService" class="container p-3 mx-auto">


        <div id="form" class="card bg-dark text-light p-3 mb-3 mx-auto">
            <h1 class='text-center'>Cadastro de Serviços</h1>
            <img class="img-fluid mx-auto m-2" id='logo' src="/src/assets/barber.png" />
            <form @submit.prevent='addServico'>

                <label for="servicoNome">Serviço</label>
                <input v-model="servicoNome" type="text" id="servicoNome" class="form-control mb-3"
                    placeholder="Ex: Corte Masculino">

                <label for="servicoValor">Valor</label>
                <input v-model="servicoValor" type="text" id="servicoValor" class="form-control mb-3"
                    placeholder="Ex: R$20,00">

                <label for="servicoTempo">Tempo</label>
                <select v-model="servicoTempo" id="servicoTempo" class="form-control mb-3"
                    placeholder="Ex: Corte Masculino">
                    <option :disabled="true"><strong>Duração</strong></option>
                    <option>10min</option>
                    <option>15min</option>
                    <option>20min</option>
                    <option>25min</option>
                    <option>30min</option>
                    <option>1hora</option>
                </select>

                <button type='submit' class="btn btn-success">&plus; Adicionar</button>
            </form>
        </div>

        <div id="serviceCard" class="card bg-dark text-light p-3  ">
            <div>
                <p><strong>Serviço</strong></p>
                <p><strong>Valor</strong></p>
                <p><strong>Tempo</strong></p>
                <hr>
            </div>

            
            <div v-for="servico in servicosLista" id="item">
                <p><strong>{{ servico.servico }}</strong></p>
                <p><strong>{{ servico.valor }}</strong></p>
                <p><strong>{{ servico.tempo }}</strong></p>
                <button @click="deleteServico(servico.id)" class="btn btn-danger"><i class="fas fa-cut"></i></button>
                <hr>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const servicosLista = ref([
    //     {
    //     servico: 'Corte Masculino',
    //     valor: 'R$20,00',
    //     tempo: '25min'
    // },

]
)

// adionar servico
const addServico = () => {
    let servicos = []
    const servico = {
        servico: servicoNome.value,
        valor: servicoValor.value,
        tempo: servicoTempo.value,
        id: uuidv4()
    }
    servicos.push(servico)
    servicosLista.value.unshift(servico)
    servicoNome.value = ''
    servicoValor.value = ''
    servicoTempo.value = ''
}

// Deletar servico 
const deleteServico = id => {
    servicosLista.value = servicosLista.value.filter(servico => servico.id !== id)

}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Gloock&display=swap');
#form,
#serviceCard {
    max-width: 500px;
    margin: 0 auto;
    /* background-color: #282828; */
}

h1 {
    font-size: 32px;
    font-family: 'Gloock', sans-serif;
}

label {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
}

#logo {
    width: 100px;
    height: 100px;
}


</style>