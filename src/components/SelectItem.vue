<script>
import axios from 'axios';

import { store } from '../store.js';

export default {
    name: 'SelectItem',

    data() {
        return {
            archetypesList: [],

            store,
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
        <label for="">Select from archetype:</label>
        <select 
            name="cards-list" 
            id="cards-list" 
            v-model="this.store.userChoice"
        >
            <option value="all">Tutti</option>
            <option 
                v-for="currentArchetype in archetypesList"
                :value="currentArchetype.archetype_name"
                
            >
                {{ currentArchetype.archetype_name }}
            </option>
        </select>
        <button @click="$emit('search')">Cerca</button>
    </div>

</template>

<style lang="scss">
@use '../styles/variables' as *;

.select{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        padding: 30px 0;

        background-color: $primaryColor;
        select{
            padding: 12px 5px;

            width: 15%;

            color: black;
            border-color: black;
            border-radius: 6px;
            
            background-color: white;

        }

        button{
            padding: 0 10px;
            align-self: stretch;
        }
}

</style>