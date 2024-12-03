<script setup>
import CatigoriesSidebar from './SidebarSupportComponents/CatigoriesSidebar.vue'
import SidebarBrands from './SidebarSupportComponents/SidebarBrands/SidebarBrands.vue'
import SidebarPrise from './SidebarSupportComponents/SidebarPrise.vue'
import SizeSidebar from './SidebarSupportComponents/SizeSidebar.vue'
</script>

<template>
    <section class="sidebar">
        <CatigoriesSidebar />
        <SidebarPrise />
        <SidebarBrands />
        <SizeSidebar />
    </section>
</template>

<style lang="scss" scoped>
.sidebar {
    min-width: 280px;
    height: 760px;

    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    @media screen and (max-width: 900px) {
        display: none;
    }
}
</style>
