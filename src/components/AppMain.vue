<script>
import AppCardsContainer from './AppCardsContainer.vue';


export default {
    name: 'AppMain',

    components: {
        AppCardsContainer,
    }
}
</script>

<template>

    <main id="main-container">

        <select name="cards-list" id="cards-list">
            <option value="alien">Alien</option>
            <option value="monster">Monster</option>
        </select>

        <AppCardsContainer></AppCardsContainer>

    </main>

</template>

<style lang="scss">
@use '../styles/variables' as *;

#main-container {
    background-color: $primaryColor;
}

</style>