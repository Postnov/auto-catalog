<template>
    <div class="list-auto">
            <masonry
                :cols="{default: 4, 1000: 3, 700: 2, 480: 1}"
                :gutter="30"
                v-if="cars.length"
                class="list-auto__list"
            >

            <li class="list-auto__item" v-for="car in cars" :key="car.id">
                <ItemAuto
                    :style="{ minHeight: minHeight + 'px' }"
                    ref="auto"
                    :car="car"
                    :userCoord="userCoord"
                    @setDistance="setDistance"/>
            </li>


            </masonry>

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
  data() {
    return {
      minHeight: 0,
    };
  },
  methods: {
    setDistance(info) {
      this.$emit('setDistance', info);
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      const elements = this.$refs.auto || {};
      const elHeight = elements.map(el => el.$el.offsetHeight);
      const minHeight = Math.max.apply(null, elHeight);

      this.minHeight = minHeight;
    });
  },
  components: {
    ItemAuto,
  },
};
</script>

<style>
.list-auto {
  margin-top: 20px;
}
.list-auto__list > * {
  min-width: 0;
}

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

@media (max-width: 979px) {
  .list-auto__list {
    grid-template-columns: repeat(3, 1fr);
  }
}


@media (max-width: 768px) {
  .list-auto__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .list-auto__list {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
