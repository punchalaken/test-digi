<script setup></script>

<template>
    <div class="brand__ponel">
        <img src="/src/assets/images/brand-search.svg" alt="Поиск по бренду" />
        <input type="text" placeholder="Поиск" class="brand__input" />
    </div>
</template>

<style lang="scss" scoped>
.brand__ponel {
    width: 100%;
    height: 36px;

    padding: 10px 12px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: 4px;
    border: 1px solid var(--border-sidebar);

    .brand__input {
        width: 100%;

        border: none;
        outline: none;
        box-shadow: none;
    }
}
</style>
