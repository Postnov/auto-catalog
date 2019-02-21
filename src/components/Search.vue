<template>
    <div class="search">
        <input
            type="text"
            class="search__input"
            placeholder="Поиск по авто, названию, адресу, городу филиала"
            @keyup="$emit('searchCar', query)"
            v-model="query">
    </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            query: ''
        }
    }
}
</script>

<style>
.search__input {
    padding: 10px;
    background-color: #fff;
    outline: none;
    color: #555;
    width: 450px;
    font-size: 14px;
    max-width: 100%;
}
</style>

