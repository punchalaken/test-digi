<script setup>
import BrandCheckbox from './BrandCheckbox.vue'

const attributesObjects = [
    { id: 0, value: 'Атрибут' },
    { id: 1, value: 'Атрибут' },
    { id: 2, value: 'Атрибут' },
    { id: 3, value: 'Атрибут' },
    { id: 4, value: 'Атрибут' },
    { id: 5, value: 'Атрибут' },
    { id: 6, value: 'Атрибут' },
    { id: 7, value: 'Атрибут' },
    { id: 8, value: 'Атрибут' },
    { id: 9, value: 'Атрибут' },
    { id: 10, value: 'Атрибут' },
    { id: 11, value: 'Атрибут' },
    { id: 12, value: 'Атрибут' },
    { id: 13, value: 'Атрибут' },
    { id: 14, value: 'Атрибут' },
    { id: 15, value: 'Атрибут' },
    { id: 16, value: 'Атрибут' },
    { id: 17, value: 'Атрибут' },
    { id: 18, value: 'Атрибут' },
    { id: 19, value: 'Атрибут' },
    { id: 20, value: 'Атрибут' }
]
</script>

<template>
    <div class="brand__attributes">
        <BrandCheckbox
            v-for="item in attributesObjects"
            :key="item.id"
            :id="item.id"
            :value="item.value"
        />
    </div>
</template>

<style lang="scss" scoped>
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
</style>
