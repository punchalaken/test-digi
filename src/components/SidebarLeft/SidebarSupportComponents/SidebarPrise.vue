<script setup></script>

<template>
    <div class="sidevar__price">
        <span class="price__title">Цена</span>
        <div class="sidebar__options">
            <div class="price__box">
                <span>от</span>
                <input type="number" class="price__value" />
            </div>
            <div class="underline"></div>
            <div class="price__box">
                <span>до</span>
                <input type="number" class="price__value" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidevar__price {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .price__title {
        height: 20px;

        font-weight: 700;
    }

    .sidebar__options {
        height: 36px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .price__box {
            width: 119px;
            height: 100%;

            padding-left: 0.5rem;

            display: flex;
            align-items: center;
            gap: 0.33rem;

            border-radius: 4px;
            border: 1px solid var(--border-sidebar);

            color: var(--irrelevant-info);
        }

        .price__value {
            width: 100%;

            border: none;

            outline: none;
            box-shadow: none;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }

    .underline {
        width: 10px;
        height: 1px;
 
        background-color: var(--border-sidebar);
    }
}
</style>
