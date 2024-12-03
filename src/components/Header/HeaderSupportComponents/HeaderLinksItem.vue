<script setup>
defineProps(['navItem'])
</script>

<template>
    <li class="header__nav-item">
        <a href="#">{{ navItem }}</a>
    </li>
</template>

<style lang="scss" scoped>
.header__nav-item {
    color: #393939;
    transition: 0.2s color ease;

    white-space: nowrap;

    &:active {
        color: var(--active-color-blue);
    }
}
</style>
