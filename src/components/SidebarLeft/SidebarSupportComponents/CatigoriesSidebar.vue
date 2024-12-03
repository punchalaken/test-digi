<script setup></script>

<template>
    <ul class="carigories__main">
        <li class="carigories__item">
            <span>Название категории</span>
            <span class="carigories__number">3</span>
        </li>
        <li class="carigories__item">
            <span>Название категории</span>
            <span class="carigories__number">3</span>
        </li>
        <li class="carigories__item">
            <span>Название категории</span>
            <span class="carigories__number">3</span>
        </li>
        <li class="carigories__item">
            <span>Название категории</span>
            <span class="carigories__number">3</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.carigories__main {
    .carigories__item {
        width: 100%;
        height: 30px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-left: 2rem;
        padding-right: 1rem;

        cursor: pointer;

        &:first-child {
            padding-left: 0.5rem;
        }

        .carigories__number {
            color: var(--irrelevant-info);
        }

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                background-color: var(--hover-catigories-sidevar);
            }
        }

        &:active {
            background-color: var(--active-color-blue);
        }
    }
}
</style>
