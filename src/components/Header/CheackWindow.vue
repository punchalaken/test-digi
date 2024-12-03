<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import HeaderMainPC from './HeaderMainPC.vue'
import HeaderMainMobile from './HeaderMainMobile.vue'

const windowWidth = ref(window.innerWidth)

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth)
})
</script>

<template>
    <HeaderMainPC v-if="windowWidth > 900" />
    <HeaderMainMobile v-else />
</template>

<style lang="scss" scoped></style>
