<script setup>
import HeaderLinksItem from './HeaderLinksItem.vue'

const navItems = [
    { id: 0, title: 'Информация о компании' },
    { id: 1, title: 'Контакты' },
    { id: 2, title: 'Полезные ссылки' }
]
</script>

<template>
    <ul class="header__nav">
        <HeaderLinksItem v-for="item in navItems" :key="item.id" :nav-item="item.title" />
    </ul>
</template>

<style lang="scss" scoped>
.header__nav {
    width: 400px;

    display: flex;
    gap: 20px;
    row-gap: 1;

    font-size: 14px;
    line-height: 16px;
}
</style>
