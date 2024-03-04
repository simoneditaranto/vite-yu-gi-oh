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

      isLoading: true,

    }
  },

  // spazio di codice che viene eseguito appena l'applicazione viene lanciata
  created() {

    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0')
    .then(res => {
      this.store.cards = res.data.data;
      // console.log(this.store.cards)
      // console.log(this.store.cards[5].card_images[0].image_url_small);
      // test
      this.isLoading = false;

    })

  },

  components: {
    AppHeader,
    AppMain,
  },


}

</script>

<template>


  <div class="loader" v-if="isLoading">
    
  </div>
  <div v-else>
  
    <AppHeader></AppHeader>

    <AppMain></AppMain>

  </div>

</template>

<style lang="scss">

/* fonte loader 'https://cssloaders.github.io/' */
.loader {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 48px;
  height: 48px;
  border: 5px solid orange;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
} 

</style>
