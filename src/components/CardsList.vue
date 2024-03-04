<script>
import { store } from '../store.js';
import CardItem from './CardItem.vue';

export default {
    name: 'CardsList',

    data() {
        return {
            store,
        }
    },

    components: {
        CardItem,
    },

}

</script>

<template>

    <div v-if="store.isLoading">
        <div class="loader"></div>
    </div>

    <div v-else class="cards-container">
        
        <div class="founded-cards">
            Found {{ store.cards.length }} cards
            {{ store.isLoading }}
        </div>

        <ul>
            <CardItem
                v-for="currentCard in store.cards"
                :card="currentCard"
            >
            </CardItem>
        </ul>        

    </div>

</template>

<style lang="scss">
@use '../styles/variables' as *;

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

.cards-container {
    padding: 80px 0;
    margin: 0 auto;

    width: 1000px;

    .founded-cards{
        padding: 25px 15px;
        
        font-weight: bold;

        color: white;
        background-color: #212529;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        gap: $cardsGap;
    }

}

</style>