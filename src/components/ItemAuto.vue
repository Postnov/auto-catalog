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
                class="auto__title">{{ car.model_name }}</p>
            <p
                v-if="car.price"
                class="auto__price">{{ (+car.price).toLocaleString() }} ₽</p>
        </header>
        <div
            class="auto__body"
            v-if="car.features">

            <ul
                class="auto__features"
                v-for="(feature , index) in orderedFeatures"
                :key="index + feature">

                <li class="auto__feature"> {{ feature }}</li>
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
                    <path d="m249.1 82c54.4 0 113.1 33.7 114.9 124.2 0 78.4-88.8 175.8-109.7 198.5-1.7 1.8-6.9 1.8-8.7 0-20.8-20.9-109.6-118.4-109.6-198.5 0-90.5 57.8-124.2 113.1-124.2zm0.8 148.8c19.9 0 36-16.1 36-35.9s-16.1-35.9-36-35.9-36 16.1-36 35.9 16.1 35.9 36 35.9z"/>
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
export default {
    name: 'ItemAuto',
    props: ['car', 'userCoord'],
    data() {
        return {
            showAll: false,
        }
    },
    methods: {
        toggleShow() {
            if (showItems == false) {
                this.showItems = this.car.features.length;
            } else if (showItems == true) {
                this.showItems = 3;
            }
        },
        getNumEnding(number, endingArray) {
            var number = number % 100;
            if (number>=11 && number<=19) {
                var ending = endingArray[2];
            }
            else {
                var i = number % 10;
                switch (i) {
                    case (1): ending = endingArray[0]; break;
                    case (2):
                    case (3):
                    case (4): ending = endingArray[1]; break;
                    default: ending = endingArray[2];
                }
            }
            return ending;
        },

        deg2rad(deg) {
            return deg * (Math.PI/180)
        },

        getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
            var dLon = this.deg2rad(lon2-lon1);
            var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c; // Distance in km
            return d;
        },


    },
    computed: {
        formattedWord() {
            let lengthFeatures = this.car.features.length - 3;
            return this.getNumEnding(lengthFeatures, ['особенность','особенности', 'особеностей'])
        },
        orderedFeatures() {
            let features = this.car.features;
            if (this.showAll === false) {
                return features.slice(0, 3);
            }else if (this.showAll === true) {
                return features;
            }
        },
        distanceBetween() {
            let {latitude:dLat, longitude:dLon } = this.car.dealer;
            let uLat = this.userCoord.split(',')[0];
            let uLon = this.userCoord.split(',')[1];

            if (dLat && dLon) {
                let res = this.getDistanceFromLatLonInKm(dLat, dLon, uLat, uLon);

                if (res) {
                    return res.toFixed(1);
                }
            }
        },
        dealerAddress() {
            let { name, address, city } = this.car.dealer;
            let distance = this.distanceBetween || false;

            if (distance)
                return `${distance} км., ${name}, ${city},${address}`;
            else
                return `${name}, ${city}, ${address}`;
        }
    },
    mounted() {
        this.$emit('setDistance', {distance: this.distanceBetween, id: this.car.id});
    }
}
</script>

<style>
.auto {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 0 0;
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
