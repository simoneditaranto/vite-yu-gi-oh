<script>
import axios from 'axios';

export default {
    name: 'SelectItem',

    data() {
        return {
            archetypesList: [],
        }
    },

    // effettuo una chiamata api al lancio del programma che mi restituisce
    // tutti gli archetype
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(res => {
            this.archetypesList = res.data;
            // console.log(this.archetypesList);
            // test
        })
    },

}

</script>

<template>

    <div class="select">
        <select name="cards-list" id="cards-list">
            <option 
                v-for="currentArchetype in archetypesList"
                :value="currentArchetype.archetype_name"
            >
                {{ currentArchetype.archetype_name }}
            </option>
        </select>
    </div>

</template>

<style lang="scss">

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

</style>