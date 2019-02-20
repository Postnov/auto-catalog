<template>
    <div class="app">
        <Sort />
        <ListAuto />
    </div>
</template>


<script>
import Sort from './Sort.vue';
import ListAuto from './ListAuto.vue';

export default {
    name: 'App',
    components: {
        ListAuto,
        Sort
    }
}
</script>

<style>

</style>

