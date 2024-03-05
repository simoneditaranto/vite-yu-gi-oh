<script>
// per importare axios (dopo essere stato installato)
import axios from 'axios';

// importo lo store
import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import SelectItem from './components/SelectItem.vue'

export default {

  data() {
    return {
      
      // dichiaro lo store, utilizzabile nel mio componente
      store,

    }
  },

  // spazio di codice che viene eseguito appena l'applicazione viene lanciata
  created() {

    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
    .then(res => {
      this.store.cards = res.data.data;
      
      // console.log(store.isLoading); // test
      store.isLoading = false;
      // console.log(store.isLoading); // test

    })

  },

  components: {
    AppHeader,
    AppMain,
    SelectItem,
  },


}

</script>

<template>
  
  <AppHeader></AppHeader>

  <SelectItem></SelectItem>
  
  <AppMain></AppMain>

</template>

<style lang="scss">


</style>
