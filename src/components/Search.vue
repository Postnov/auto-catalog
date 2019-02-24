<template>
    <div class="search">
        <input
            type="text"
            class="search__input"
            placeholder="Поиск по авто, названию, адресу, городу филиала"
            @keyup="$emit('searchCar', $event.target.value)">
    </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style>
.search {
    width: 100%;
    max-width: 450px;
}
.search__input {
    padding: 10px;
    background-color: #fff;
    outline: none;
    color: #555;
    width: 100%;
    font-size: 14px;
}
</style>
