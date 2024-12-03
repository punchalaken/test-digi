<script setup></script>

<template>
    <div class="shop__symbol">
        <span class="shop__brand">Беренд</span>
        <span class="shop__name"
            >Полное название товара в несколько строк для вида с обрывом в конце. Название вмещает 2
            строк, а потом обрывается
        </span>
    </div>
</template>

<style lang="scss" scoped>
.shop__symbol {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .shop__brand {
        color: var(--irrelevant-info);
    }

    .shop__name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        line-height: 16px;
        word-wrap: break-word;
        
        transition: 0.2s color ease;

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                color: var(--hover-name-card);
            }
        }
    }
}
</style>
