<script setup>
import SidebarLeft from '@/components/SidebarLeft/SidebarLeft.vue'
import ShopListComponent from '@/components/ShopList/ShopListComponent.vue'
import CheackWindow from '@/components/Header/CheackWindow.vue'
</script>

<template>
    <div class="container">
        <CheackWindow />
        <main class="main">
            <SidebarLeft />
            <ShopListComponent />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1720px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .main {
        width: 100%;

        margin-top: 1.5rem;

        display: flex;
        gap: 2.25rem;

        font-family: 'PT Sans', sans-serif;
        font-size: 14px;
    }
}
</style>
