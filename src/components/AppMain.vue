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

        <div class="select">
            <select name="cards-list" id="cards-list">
                <option value="alien">Alien</option>
                <option value="monster">Monster</option>
            </select>
        </div>

        <AppCardsContainer></AppCardsContainer>

    </main>

</template>

<style lang="scss">
@use '../styles/variables' as *;

#main-container {
    background-color: $primaryColor;

    .select{
        padding: 20px 0;
        margin: 0 auto;

        width: 80%;

        select{
            padding: 12px 5px;

            width: 15%;

            color: black;
            border-color: white;
            border-radius: 6px;
            
            background-color: white;
        }
    }
}

</style>