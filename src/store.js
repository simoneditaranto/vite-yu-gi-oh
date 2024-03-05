import { reactive } from 'vue';

export const store = reactive({

    // questo oggetto è come se fosse un data() condiviso da tutti i componenti della mia app
    cards: [],

    isLoading: true,

    // salvo in una variabile il valore della select
    userChoice: '',

    // salvo in una variabile il numero di cards trovate in base alla ricerca
    cardsFounded: 0,

});