<script>
// per importare axios (dopo essere stato installato)
import axios from 'axios';

// importo lo store
import { store } from './store.js';

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
      this.store.cards = res.data;
      console.log(this.store)
    })

  },

  components: {

  },


}

</script>

<template>
  <h1>Yu-gi-oh API</h1>
</template>

<style>

</style>
