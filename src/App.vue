<script>
// per importare axios (dopo essere stato installato)
import axios from 'axios';

// importo lo store
import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

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
      // console.log(this.store.cards[5].card_images[0].image_url_small);
      // test
    })

  },

  components: {
    AppHeader,
    AppMain,
  },


}

</script>

<template>
  
  <AppHeader></AppHeader>

  <AppMain></AppMain>

</template>

<style>

</style>
