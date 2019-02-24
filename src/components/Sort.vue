<template>
    <div class="sort">
         <span class="sort__title">Сортировать:</span>
         <label class="sort__input-item" >
            <input
                @change="$emit('filterCar', 'price')"
                checked
                class="sort__input"
                type="radio"
                name="sort"
                value="price">
            <span class="sort__label">По цене</span>
         </label>

         <label class="sort__input-item">
            <input
                @change="$emit('filterCar', 'distance')"
                class="sort__input"
                type="radio"
                name="sort"
                value="distance">
            <span class="sort__label">По удаленности</span>
         </label>
    </div>
</template>

<script>
export default {
  name: 'Sort',
};
</script>

<style>
    .sort {
        padding: 20px 0;
    }

    .sort__title {
        margin-right: 20px;
    }

    .sort__input-item {
        margin-right: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
    }

    .sort__input {
        margin-right: 5px;
    }

    @media only screen and (max-width: 430px) {
        .sort {
            text-align: center;
            width: 100%;
        }
        .sort__title {
            width: 100%;
            display: block;
            margin-bottom: 15px;
        }
    }
</style>
