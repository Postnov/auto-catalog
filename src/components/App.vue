<template>
    <div class="app">
        <Sort @filterCar="filterCar"/>
        <ListAuto
            :userCoord="userCoordinates"
            :cars="filteredCars"
            @setDistance="setDistance"/>
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
            userCoordinates: '55.7536232, 37.6199775',
            cars: Cars || [],
            filter: 'price'
        }
    },
    methods: {
        compareCar(a = 0, b = 0) {
            let prop = this.filter;

            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
        },
        filterCar(type) {
            this.filter = type;
        },
        setDistance(info) {
            this.cars.map((el) => {
                if (el.id == info.id) {
                    el.distance = parseFloat(info.distance) || 0;
                }
            })
        }
    },
    computed: {
        filteredCars() {
            return this.cars.sort(this.compareCar);
        }
    },
    mounted() {
        let filterCars = this.cars.sort(this.compareNumeric);
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

