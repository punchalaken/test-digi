<script setup></script>

<template>
    <header class="header__search">
        <img
            class="header__search-go-back"
            src="/src/assets/images/back-arrow.svg"
            alt="Вернуться назад"
        />
        <div class="header__search-wrapper">
            <input class="header__search-input" type="text" placeholder="Найти" />
            <img src="/src/assets/images/close-search-ponel.svg" alt="Закрыть поисковое окно" />
            <button class="header__search-button" type="button">Найти</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header__search {
    width: 100%;
    max-width: 500px;
    height: 53px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding-bottom: 6px;

    font-family: 'PT Sans', sans-serif;

    .header__search-wrapper {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 1rem;

        padding-bottom: 6px;

        border-bottom: 1px solid var(--border-sidebar);

        .header__search-input {
            width: 100%;

            outline: none;
            border: none;
        }

        .header__search-button {
            width: 75px;
            height: 38px;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: var(--checkbox-hober-sidebar);
            border-radius: 5px;
            border: none;

            color: white;

            transition: 0.2s background-color ease;

            &:active {
                background-color: var(--hover-name-card);
            }
        }
    }
}
</style>
