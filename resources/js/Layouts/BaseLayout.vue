<template>
    <AppHeader class="bg-background font-cantarell text-[#81868B]"/>
    <main class="bg-background flex flex-col h-full">
        <slot></slot>
    </main>

    <!-- <AppFooter/> -->
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
    name: 'BaseLayout',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>