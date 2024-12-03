<script setup></script>

<template>
    <div class="header__serch-ponel">
        <img src="/src/assets/images/search.svg" alt="Поиск по запросу" />
        <input class="header__input" type="text" placeholder="Поиск по 100 000 товаров" />
    </div>
</template>

<style lang="scss" scoped>
.header__serch-ponel {
    max-width: 1015px;
    width: 100%;
    height: 48px;

    padding: 0.75rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 10px;
    border: 1px solid var(--border-header-blue);

    .header__input {
        width: 100%;

        border: none;

        &:focus {
            outline: none;
        }
    }
}
</style>
