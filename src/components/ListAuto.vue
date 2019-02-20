<template>
    <ul class="list-auto">
        <li class="list-auto__item">
            <ItemAuto />
        </li>
    </ul>
</template>

<script>
import ItemAuto from './ItemAuto.vue';

export default {
    name: 'ListAuto',
    components: {
        ItemAuto
    }
}
</script>

<style>
.list-auto > * { min-width: 0; }

.list-auto {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    grid-gap: 20px 1.5%;
    list-style: none;
}

</style>

