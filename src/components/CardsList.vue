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
    
    <div class="cards-container">
        
        <div class="founded-cards">
            Found {{ store.cards.length }} cards
        </div>

        <ul>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>


        </ul>        

    </div>

</template>

<style lang="scss">
@use '../styles/variables' as *;

.cards-container {
    margin: 0 auto;

    width: 1000px;

    ul{
        display: flex;
        flex-wrap: wrap;
        gap: $cardsGap;
    }

}

</style>