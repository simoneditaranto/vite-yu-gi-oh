<script>
import { store } from '../store.js';

export default {
    name: 'AppCardsContainer',

    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    
    <p>Elementi in pagina: {{ store.cards.length }}</p>
    <ul>
        <li v-for="currentCard in store.cards">
            {{ currentCard.name }}
        </li>
    </ul>

</template>

<style lang="scss">

</style>