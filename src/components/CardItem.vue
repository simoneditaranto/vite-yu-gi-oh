<script>

export default {
    name: 'CardItem',

    props: {
        card: Object,
    },    
}

</script>

<template>

    <li class="card">
        <div class="card-image">
            <img :src="card.card_images[0].image_url_small" :alt="card.name">
        </div>

        <div class="card-info">
            <div class="card-name">
                {{ card.name }}
            </div>

            <div class="card-type">
                {{ card.archetype }}
            </div>
        </div>

    </li>

</template>

<style lang="scss">
@use '../styles/variables' as *;

.card {
    width: calc(100% / 5 - $cardsGap / 5 * 4);

    background-color: $primaryColor;

    .card-image{
        img{
            width: 100%;
        }
    }

    .card-info{
        padding: 25px 20px;
        
        text-align: center;

        .card-name {
            color: white;
    
            text-transform: uppercase;

            margin-bottom: 15px;
        }

    }


}

</style>