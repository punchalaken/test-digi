<script setup>
import ShopCardButton from './ShopCardItems/ShopCardButton.vue'
import ShopCardImage from './ShopCardItems/ShopCardImage.vue'
import ShopCardName from './ShopCardItems/ShopCardName.vue'
import ShopCardPrice from './ShopCardItems/ShopCardPrice.vue'

const inStockObject = [
    { id: 0, isStock: true },
    { id: 1, isStock: true },
    { id: 2, isStock: true },
    { id: 3, isStock: true },
    { id: 4, isStock: true },
    { id: 5, isStock: true },
    { id: 6, isStock: true },
    { id: 7, isStock: true },
    { id: 8, isStock: true },
    { id: 9, isStock: true },
    { id: 10, isStock: true },
    { id: 11, isStock: true },
    { id: 12, isStock: true },
    { id: 13, isStock: true },
    { id: 14, isStock: true },
    { id: 15, isStock: false }
]
</script>

<template>
    <div class="shop__list">
        <a href="#" class="shop__item" v-for="item in inStockObject" :key="item.id">
            <ShopCardImage />
            <ShopCardName />
            <ShopCardPrice />
            <ShopCardButton :is-stock="item.isStock" />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.shop__list {
    max-width: 1404px;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .shop__item {
        max-width: 333px;
        width: 100%;
        max-height: 356px;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
