import { ref, onMounted, computed } from "vue";

export default function useCripto() {
  const criptomoedas = ref([]);
  const moedas = ref([
    { codigo: "USD", texto: "Dolar de Estados Unidos" },
    { codigo: "BRL", texto: "Real brasileiro" },
    { codigo: "EUR", texto: "Euro" },
    { codigo: "GBP", texto: "Libra Esterlina" },
  ]);
  const cotacao = ref({});
  const carregando = ref(false);

  onMounted(() => {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
    fetch(url)
      .then((resposta) => resposta.json())
      .then(({ Data }) => (criptomoedas.value = Data));
  });
  const obterCotacao = async (cotar) => {
    carregando.value = true;
    cotacao.value = {};

    try {
      const { moeda, criptomoeda } = cotar;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoeda}&tsyms=${moeda}`;

      const resposta = await fetch(url);
      const data = await resposta.json();

      cotacao.value = data.DISPLAY[criptomoeda][moeda];
    } catch (error) {
      console.log(error);
    } finally {
      carregando.value = false;
    }
  };
  const mostrarresult = computed(() => {
    return Object.values(cotacao.value).length > 0;
  });

  return {
    moedas,
    criptomoedas,
    carregando,
    cotacao,
    obterCotacao,
    mostrarresult,
  };
}
