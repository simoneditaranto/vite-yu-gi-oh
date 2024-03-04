<script>

export default{

    name: 'AppHeader',

}

</script>

<template>

    <header>

        <img src="https://www.yugioh-world.com/wp-content/uploads/2016/12/yugioh_logo_full.png" alt="">

        <h1>Yu - Gi - Oh Api</h1>

    </header>

</template>

<style lang="scss">

header{
    display: flex;
    align-items: center;
    gap: 30px;

    padding: 30px;

    img {
        width: 100px;
    }

    h1{
        font-size: 2.5em;
        font-weight: 400;
    }

}

</style>