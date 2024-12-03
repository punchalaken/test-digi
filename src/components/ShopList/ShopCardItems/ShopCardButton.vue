<script setup>
defineProps(['isStock'])
</script>

<template>
    <button
        @click.prevent="addToBasket"
        type="button"
        class="shop__button"
        :class="isStock ? 'isStock' : 'notStock'"
    >
        <span v-if="isStock">Купить</span>
        <span v-else>Сообщить о поступлении</span>
    </button>
</template>

<style lang="scss" scoped>
.shop__button {
    border-radius: 4px;

    font-weight: 700;

    transition: 0.2s background-color ease;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: var(--focus-color-blue);
        }
    }

    &:active {
        background-color: var(--active-color-blue);
    }

    &.notStock {
        height: 38px;

        color: var(--irrelevant-info);

        border: 1px solid var(--irrelevant-info);

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                background-color: rgb(235, 235, 235);
            }

            &:active {
                background-color: rgb(155, 155, 155);
            }
        }
    }

    &.isStock {
        max-width: 75px;
        width: 100%;

        padding: 0.75rem 1rem;
        border: 1px solid var(--main-color-blue);

        color: var(--main-color-blue);
    }
}
</style>
