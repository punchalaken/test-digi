<script setup></script>

<template>
    <div class="sidebar__name">
        <span class="sidebar__name-title">Бренд</span>
        <span class="sidebar__name-button">Очистить</span>
    </div>
</template>

<style lang="scss" scoped>
.sidebar__name {
    display: flex;
    justify-content: space-between;

    .sidebar__name-title {
        font-weight: 700;
    }

    .sidebar__name-button {
        color: var(--irrelevant-info);
        text-decoration: underline;

        cursor: pointer;

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                color: #707070;
            }
        }

        &:active {
            color: var(--active-color-blue);
        }
    }
}
</style>
