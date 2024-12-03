<script setup></script>

<template>
    <div class="shop__image">
        <div class="shop__name">
            <span>Хит продаж</span>
            <img src="/src/assets//images/fire.svg" alt="Хит продаж" />
            <img
                class="shop__cube"
                src="/src/assets/images/cube-shop-card.svg"
                alt="Картинка товара"
            />
        </div>
        <div class="shop__discount">25%</div>
    </div>
</template>

<style lang="scss" scoped>
.shop__image {
    width: 100%;
    height: 200px;

    padding: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    background-color: var(--background-shop-card);

    .shop__name {
        width: 112px;
        height: 32px;

        padding: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;

        background-color: white;
    }

    .shop__discount {
        width: 48px;
        height: 26px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--main-color-blue);
        color: white;

        border-radius: 4px;
    }

    .shop__cube {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
