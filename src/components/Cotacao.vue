
<script setup>
const props  = defineProps({
    
    cotacao:{
        type: Object,
        required: true

} })
</script>

<template>
   <div class="container-result">
        <h2>Cotação</h2>
        <div class="result">
          <img :src="'https://cryptocompare.com/' + cotacao.IMAGEURL" alt="imagem cripto">
          <div>
            <p>Preço: <span>{{ cotacao.PRICE }}</span></p>
            <p>Preço mais alto do dia: <span>{{ cotacao.HIGHDAY }}</span></p>
            <p>Preço mais baixo do dia: <span>{{ cotacao.LOWDAY }}</span></p>
            <p>Variação últimas 24 horas: <span>{{ cotacao.CHANGEPCTDAY }}%</span></p>
            <p>Ultima atualização: <span>{{ cotacao.LASTUPDATE }}</span></p>
          </div>
        </div>
      </div>
</template>
