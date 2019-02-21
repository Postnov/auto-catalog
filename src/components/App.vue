<template>
    <div class="app">
        <div class="app__top-panel">
            <Sort @filterCar="filterCar"/>
            <Search @searchCar="searchCar"/>
        </div>
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
import Search from './Search.vue';

export default {
    name: 'App',
    data() {
        return {
            userCoordinates: '55.7536232, 37.6199775',
            cars: Cars || [],
            filter: 'price',
            query: ''
        }
    },
    methods: {
        filterCar(type) {
            this.filter = type;
        },
        setDistance(info) {
            this.cars.map((el) => {
                if (el.id == info.id) {
                    el.distance = parseFloat(info.distance) || 0;
                }
            })
        },
        searchCar(query) { this.query = query;}
    },
    computed: {
        filteredCars() {
            return this.cars
                    .sort((a, b) => a[this.filter] - b[this.filter])
                    .filter((el) => {
                        let {model_name, kit_name, dealer: {city, address, name}} = el;
                        let fullStr = '';

                        if (model_name) fullStr += model_name;
                        if(kit_name) fullStr    += kit_name;
                        if(city) fullStr        += city;
                        if(address) fullStr     += address;
                        if(name) fullStr        += name;

                        return fullStr.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
                    });
        }
    },
    components: {
        ListAuto,
        Sort,
        Search
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

.app__top-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

img {
    max-width: 100%;
}
</style>

