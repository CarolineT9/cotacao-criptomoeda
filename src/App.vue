<script setup>
import Alerta from './components/Alerta.vue';
import { ref, reactive, computed } from 'vue';
import Spiner from './components/Spiner.vue';
import useCripto from './composables/useCripto';
import Cotacao from './components/Cotacao.vue';
const { moedas, criptomoedas, carregando, cotacao, obterCotacao, mostrarresult } = useCripto()


const error = ref('')
const cotar = reactive({
  moeda: '',
  criptomoeda: ''
})


const cotarCripto = () => {
  //validar
  if (Object.values(cotar).includes('')) {
    error.value = 'Todos os fields são obrigatórios...'
    return
  }
  error.value = ''
  obterCotacao(cotar)
}

  ;
</script>

<template>
  <div class="container">
    <h1 class="title">Cotação de <span>Criptomoedas</span></h1>
    <div class="content">
      <Alerta v-if="error">{{ error }}</Alerta>
      <form class="form" @submit.prevent="cotarCripto">
        <div class="field">
          <label for="moeda">Moeda:</label>
          <select id="moeda" v-model="cotar.moeda">
            <option value="">--Seleciona--</option>
            <option v-for="moeda in moedas" :key="moeda.codigo" :value="moeda.codigo">{{ moeda.texto }}</option>
          </select>
        </div>
        <div class="field">
          <label for="cripto">Criptomoeda:</label>
          <select id="cripto" v-model="cotar.criptomoeda">
            <option value="">--Seleciona--</option>
            <option v-for="criptomoeda in criptomoedas" :key="criptomoeda.CoinInfo.Name"
              :value="criptomoeda.CoinInfo.Name">{{ criptomoeda.CoinInfo.FullName }}</option>
          </select>
        </div>
        <input type="submit" value="Cotação" />
      </form>

      <Spiner v-if="carregando" />
      <Cotacao :cotacao="cotacao" v-if="mostrarresult" />
    </div>

  </div>

</template>
