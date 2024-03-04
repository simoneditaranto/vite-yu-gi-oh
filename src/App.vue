<script>
// per importare axios (dopo essere stato installato)
import axios from 'axios';

// importo lo store
import { store } from './store.js';

import AppCardsContainer from './components/AppCardsContainer.vue';
import AppHeader from './components/AppHeader.vue';

export default {

  data() {
    return {
      
      // dichiaro lo store, utilizzabile nel mio componente
      store,

    }
  },

  // spazio di codice che viene eseguito appena l'applicazione viene lanciata
  created() {

    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
    .then(res => {
      this.store.cards = res.data.data;
      // console.log(this.store.cards)
      // test
    })

  },

  components: {
    AppCardsContainer,
    AppHeader,
  },


}

</script>

<template>
  
  <AppHeader></AppHeader>

  <!-- <AppCardsContainer></AppCardsContainer> -->

</template>

<style>

</style>
