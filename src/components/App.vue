<template>
    <div class="app">
        <Sort />
        <ListAuto :cars="cars"/>
    </div>
</template>


<script>
import Cars from '../assets/cars.js';
import Sort from './Sort.vue';
import ListAuto from './ListAuto.vue';

export default {
    name: 'App',
    data() {
        return {
            cars: Cars || []
        }
    },
    components: {
        ListAuto,
        Sort
    }
}
</script>

<style>
body {
    background-color: #f4f5f7;
    font-size: 16px;
    font-family: Arial, serif;
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
}

.app {
    max-width: 1170px;
    margin: 0 auto
}

img {
    max-width: 100%;
}
</style>

