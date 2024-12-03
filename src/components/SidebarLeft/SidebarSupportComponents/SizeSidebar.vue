<script setup>
import BrandCheckbox from './SidebarBrands/BrandCheckbox.vue'
const attributesObjects = [
    { id: 21, value: 'Атрибут' },
    { id: 22, value: 'Атрибут' },
    { id: 23, value: 'Атрибут' },
    { id: 24, value: 'Атрибут' },
    { id: 25, value: 'Атрибут' },
    { id: 26, value: 'Атрибут' },
    { id: 27, value: 'Атрибут' },
    { id: 28, value: 'Атрибут' },
    { id: 29, value: 'Атрибут' }
]
</script>

<template>
    <div class="sibar__size-wrapper">
        <div class="size__title">Размер</div>
        <div class="brand__attributes">
            <BrandCheckbox
                v-for="item in attributesObjects"
                :key="item.id"
                :id="item.id"
                :value="item.value"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sibar__size-wrapper {
    width: 100%;
    max-height: 216px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .size__title {
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
    }

    .brand__attributes {
        width: 100%;
        max-height: 180px;

        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--scrollbar-sideebar);
            border-radius: 10px;
        }
    }
}
</style>
