<template>
    <div class="item-auto auto">
        <header class="auto__header">
            <img src="https://183024.selcdn.ru/vwgr_available_cars/volkswagen/touareg_cr/touareg_cr/touareg_cr_status/suv/2T2T/1.png" alt="" class="auto__img">
            <p class="auto__title">Новый Touareg</p>
            <p class="auto__price">5 541 000 ₽</p>
        </header>
        <div class="auto__body">
            <ul class="auto__features">
                <li class="auto__feature">Литые диски</li>
                <li class="auto__feature">Светодиодные фары</li>
                <li class="auto__feature">Кожаные сидения</li>
                <li class="auto__feature">Электропривод сидений</li>
                <li class="auto__feature">Память сидений</li>
                <li class="auto__feature">2х-зонный климат контроль</li>
            </ul>
            <span class="auto__show-more">еще 6 особенностей</span>
        </div>
        <div class="auto__footer">
            <svg class="auto__loc-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="evenodd">
                    <path d="m249.1 82c54.4 0 113.1 33.7 114.9 124.2 0 78.4-88.8 175.8-109.7 198.5-1.7 1.8-6.9 1.8-8.7 0-20.8-20.9-109.6-118.4-109.6-198.5 0-90.5 57.8-124.2 113.1-124.2zm0.8 148.8c19.9 0 36-16.1 36-35.9s-16.1-35.9-36-35.9-36 16.1-36 35.9 16.1 35.9 36 35.9z"/>
                </g>
            </svg>
            <a href="http://www.volkswagen-kuntsevo.ru" class="auto__address">
                <span>ТЦ Кунцево Москва ул. Горбунова, 29</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemAuto'
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
