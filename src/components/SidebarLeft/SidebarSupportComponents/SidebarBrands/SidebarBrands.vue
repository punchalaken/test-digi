<script setup>
import BrandAttributes from './BrandAttributes.vue'
import BrandName from './BrandName.vue'
import BrandSearchPonel from './BrandSearchPonel.vue'
</script>

<template>
    <div class="brand__container">
        <BrandName />
        <BrandSearchPonel />
        <BrandAttributes />
    </div>
</template>

<style lang="scss" scoped>
.brand__container {
    width: 100%;
    max-height: 268px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
