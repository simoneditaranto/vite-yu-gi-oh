<script>
// importare l'api

export default {
    name: 'CardItem',
}

</script>

<template>

    <li class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg" alt="">
        </div>

        <div class="card-info">
            <div class="card-name">
                "a" cell breeding device
            </div>

            <div class="card-type">
                Alien
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