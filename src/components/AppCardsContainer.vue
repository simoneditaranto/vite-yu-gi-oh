<script>
import CardsList from './CardsList.vue';

export default {
    name: 'AppCardsContainer',

    data() {
        return {
           

        }
    },

    components: {
        CardsList,
    }
}

</script>

<template>
    
    <div class="container">

        <CardsList></CardsList>
        
    </div>

</template>

<style lang="scss">

.container{
    width: 1200px;

    margin: 0 auto;

    background-color: white;
}

</style>