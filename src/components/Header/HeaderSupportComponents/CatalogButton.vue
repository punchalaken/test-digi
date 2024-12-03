<script setup></script>

<template>
    <button type="button" class="header__catalog">Каталог</button>
</template>

<style lang="scss" scoped>
.header__catalog {
    width: 104px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--border-header-blue);
    transition: background-color 0.2s ease;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: var(--focus-color-blue);
        }
    }

    &:active {
        background-color: var(--active-color-blue);
    }
}
</style>
