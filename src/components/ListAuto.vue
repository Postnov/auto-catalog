<template>
    <div class="list-auto">
        <ul v-if="cars.length" class="list-auto__list">
            <li class="list-auto__item" v-for="car in cars" :key="car.id">
                <ItemAuto
                    :car="car"
                    :userCoord="userCoord"
                    @setDistance="setDistance"/>
            </li>
        </ul>

        <p v-else class="list-auto__empty">
            По вашему запросу автомобили не найдены. Измените или очистите запрос.
        </p>
    </div>
</template>

<script>
import ItemAuto from './ItemAuto.vue';

export default {
    name: 'ListAuto',
    props: ['cars', 'userCoord'],
    methods: {
        setDistance(info) {
            this.$emit('setDistance', info);
        }
    },
    components: {
        ItemAuto
    }
}
</script>

<style>
.list-auto__list > * { min-width: 0; }

.list-auto__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    grid-gap: 20px 1.5%;
    list-style: none;
}

.list-auto__empty {
    margin-top: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #888;
}

</style>

