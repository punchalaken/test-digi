<script setup></script>

<template>
    <div class="shop__price">
        <div class="shop__now">5 990 ₽</div>
        <div class="shop__old">6 990 ₽</div>
    </div>
</template>

<style lang="scss" scoped>
.shop__price {
    max-width: 102px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    .shop__now {
        font-weight: 700;
        font-size: 16px;
    }

    .shop__old {
        font-size: 12px;
        color: var(--irrelevant-info);
        text-decoration: line-through;
    }
}
</style>
