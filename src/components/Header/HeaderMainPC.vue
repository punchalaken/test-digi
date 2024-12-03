<script setup>
import CatalogButton from './HeaderSupportComponents/CatalogButton.vue'
import HeaderLinks from './HeaderSupportComponents/HeaderLinks.vue'
import HeaderLogo from './HeaderSupportComponents/HeaderLogo.vue'
import SearchPonel from './HeaderSupportComponents/SearchPonel.vue'
</script>

<template>
    <header class="header">
        <div class="header__logo-contaier">
            <HeaderLogo />
            <CatalogButton />
        </div>
        <SearchPonel />
        <HeaderLinks />
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 72px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    font-family: 'Inter', sans-serif;

    .header__logo-contaier {
        width: 257px;
        height: 48px;

        display: flex;
        gap: 0.5rem;
    }
}
</style>
