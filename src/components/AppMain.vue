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

        <AppCardsContainer></AppCardsContainer>

    </main>

</template>

<style lang="scss">
@use '../styles/variables' as *;

#main-container {
    background-color: $primaryColor;

}

</style>