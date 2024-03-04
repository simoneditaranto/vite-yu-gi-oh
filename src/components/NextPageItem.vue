<script>
import axios from 'axios';

import { store } from '../store.js';

export default {
    name: 'NextPageItem',

    data() {
        return {
            store,

            nextOffset: 1, 

            actualPage: 0,
        }
    },

    methods: {
        
        generateNextCards() {
            this.nextOffset = this.nextOffset + 50; 
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=${this.nextOffset}`;
        
            axios.get(url)
            .then(res => {
                this.store.cards = res.data.data;
            
                store.isLoading = false;

            })
            this.actualPage++;
            // console.log(this.nextOffset)
            // test
        },

        generatePrevCards() {
            if(this.actualPage > 0) {
                this.nextOffset = this.nextOffset - 50; 
                const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=${this.nextOffset}`;
            
                axios.get(url)
                .then(res => {
                    this.store.cards = res.data.data;
                
                    store.isLoading = false;
    
                })
                this.actualPage--;
                // console.log(this.nextOffset)
                // test

            }
        }

    },
}

</script>

<template>

    <div class="change-page">
        <div class="arrows">
            <div 
                class="prev-page" 
                v-show="actualPage > 0"
                @click="generatePrevCards()">&#8678;
            </div>
            <div class="next-page" @click="generateNextCards()">&#8680;</div>
        </div>
        <div class="actual-page">
            Pagina: {{ this.actualPage }}
        </div>
    </div>


</template>

<style lang="scss">
/* @use '../styles/variables' as *; */

.change-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .arrows{
        display: flex;
        
        .prev-page, .next-page{
            font-size: 3em;
            
            color: orange;
            
            cursor: pointer;

            &:hover{
                transform: scale(1.3);
            }
        }
    }

    .actual-page{
        margin-top: -15px;

        font-size: 1.3em;
    }


}

</style>