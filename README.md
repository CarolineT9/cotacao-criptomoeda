# Sistema de Cotação de Criptomoedas

Este é um sistema de cotação de criptomoedas que permite aos usuários obter informações detalhadas sobre as 20 principais criptomoedas, com base na atividade de mercado das últimas 24 horas. Os dados podem ser exibidos em diferentes moedas: **Dólar Americano (USD)**, **Real Brasileiro (BRL)**, **Euro (EUR)** e **Libra Esterlina (GBP)**.

A aplicação utiliza a [API CryptoCompare](https://www.cryptocompare.com/) para buscar dados do mercado e fornece uma interface interativa construída com **Vue.js**.

---

## Captura de Tela

![](./public/img/image.png)

---

## Funcionalidades

- **Top 20 Criptomoedas**: Exibe as criptomoedas mais relevantes com base nas tendências atuais do mercado.
- **Seleção de Moeda**: Permite aos usuários escolher entre USD, BRL, EUR e GBP para as cotações.
- **Detalhes da Cotação**:
  - Preço atual.
  - Preço mais alto do dia.
  - Preço mais baixo do dia.
  - Variação nas últimas 24 horas.
  - Horário da última atualização.
- **Alerta de Validação**: Notifica os usuários quando campos obrigatórios não estão preenchidos.
- **Carregamento Dinâmico**: Exibe uma animação de carregamento enquanto busca dados da API.

---

## Estrutura do Projeto

### Componentes

- **`App.vue`**:  
  Componente principal da aplicação, que gerencia os outros componentes.

- **`Alerta.vue`**:  
  Exibe um alerta notificando os usuários de que todos os campos são obrigatórios para a cotação.

- **`Cotacao.vue`**:  
  Mostra os resultados da cotação, incluindo preço atual, preço mais alto, preço mais baixo, variação e última atualização.

- **`Spinner.vue`**:  
  Exibe uma animação de carregamento enquanto aguarda a resposta da API.

---

### Composables

- **`useCripto.js`**:  
  Contém a lógica da aplicação, como chamadas à API e gerenciamento de estados.

#### Funções Principais

- **`onMounted`**:  
  Busca dados iniciais da API CryptoCompare para as 20 principais criptomoedas.
- **`obterCotacao(cotar)`**:  
  Busca a cotação da criptomoeda selecionada na moeda escolhida.
- **`mostrarResultado`**:  
  Uma propriedade computada que verifica se os dados da cotação estão prontos para serem exibidos.

---

## Tecnologias Utilizadas

- **Vue.js 3**: Framework para construção da interface.
- **JavaScript**: Manipulação de lógica e dados.
- **API CryptoCompare**: Fonte de dados para informações de criptomoedas.

---

## Link

[CotaçãoCriptomoeda](https://papaya-conkies-2ee88c.netlify.app/)

---

## Autor

- **Caroline Tavares** [LinkedIn](https://www.linkedin.com/in/caroline-tavares-65150b189/)
