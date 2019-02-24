<template>
    <div class="item-auto auto" v-if="car">
        <header class="auto__header">
            <img
                v-if="car.images"
                :src="car.images"
                :alt="`Изображение авто: ${car.model_name}`"
                class="auto__img">
            <p
                v-if="car.model_name"
                class="auto__title">{{ car.model_name }} {{ car.kit_name || null }}</p>
            <p
                v-if="car.price"
                class="auto__price">{{ (+car.price).toLocaleString() }} ₽</p>
        </header>
        <div
            class="auto__body"
            v-if="car.features">

            <ul
                class="auto__features"
                >

                <li
                    :key="index + feature"
                    v-for="(feature , index) in orderedFeatures"
                    class="auto__feature"> {{ feature }}</li>
            </ul>

            <span
                v-if="!showAll && car.features.length > 3"
                @click="showAll = true;"
                class="auto__show-more">еще {{ car.features.length - 3 }} {{ formattedWord }}</span>

            <span
                v-if="showAll"
                @click="showAll = false;"
                class="auto__show-more">скрыть</span>
        </div>

        <div class="auto__footer">
            <svg class="auto__loc-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="evenodd">
                    <path d="m249.1 82c54.4 0 113.1 33.7 114.9 124.2 0
                    78.4-88.8 175.8-109.7 198.5-1.7 1.8-6.9 1.8-8.7
                    0-20.8-20.9-109.6-118.4-109.6-198.5 0-90.5 57.8-124.2
                    113.1-124.2zm0.8 148.8c19.9 0 36-16.1 36-35.9s-16.1-35.9-36-35.9-36
                    16.1-36 35.9 16.1 35.9 36 35.9z"/>
                </g>
            </svg>
            <a
                v-if="car.dealer.url"
                :href="car.dealer.url"
                target="_blank"
                class="auto__address">
                <span>{{dealerAddress}}</span>
            </a>
            <span v-else class="auto__address">{{dealerAddress}}</span>

        </div>
    </div>
</template>

<script>
import getNumEnding from '../utils/getNumEnding';
import getDistance from '../utils/getDistance';


export default {
  name: 'ItemAuto',
  props: ['car', 'userCoord'],
  data() {
    return {
      showAll: false,
    };
  },
  methods: {},
  computed: {
    formattedWord() {
      const lengthFeatures = this.car.features.length - 3;

      return getNumEnding(lengthFeatures,
        ['особенность', 'особенности', 'особеностей']);
    },
    orderedFeatures() {
      const { features } = this.car;

      return (this.showAll) ? features : features.slice(0, 3);
    },
    distanceBetween() {
      const { latitude: dLat, longitude: dLon } = this.car.dealer;
      const [uLat, uLon] = this.userCoord.split(',');

      if (dLat && dLon) {
        const res = getDistance(dLat, dLon, uLat, uLon);

        if (res) return res.toFixed(1);
        return 0;
      }
      return 0;
    },
    dealerAddress() {
      const { name, address, city } = this.car.dealer;
      const distance = this.distanceBetween;
      let res = '';

      if (distance) res += `${distance} км, `;
      if (name) res += `${name}, `;
      if (city) res += `${city}, `;
      if (address) res += `${address}, `;

      return res;
    },
  },
  mounted() {
    this.$emit('setDistance', { distance: this.distanceBetween, id: this.car.id });
  },
};
</script>

<style>
.auto {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 0 0;
    margin-bottom: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
}

.auto__header {
    padding: 0 14px;
}

.auto__title,
.auto__price {
    font-size: 19px;
    font-weight: bold;
    margin: 0;
}

.auto__title {
    color: #299bd7;
}

.auto__price {
    color: #000;
    margin-top: 10px;
}

.auto__body {
    padding: 10px 14px 15px;
    flex-grow: 1;
}

.auto__features {
    color: #a7a8ac;
    list-style: disc;
    padding-left: 20px;
    font-size: 14px;
}

.auto__feature {
    padding: 3px 0;
}

.auto__show-more {
    color: #299bd7;
    margin-top: 5px;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
}

.auto__footer {
    padding: 12px 14px;
    border-top: 1px solid #dfe0e2;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.auto__loc-icon {
    width: 23px;
    height: 23px;
    fill: #bec2c5;
}

.auto__address {
    font-size: 13px;
    color: #299bd7;
    max-width: calc(100% - 23px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
}
</style>
