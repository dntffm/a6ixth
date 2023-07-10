<template>
    <AppHeader class="bg-background font-cantarell text-black"/>
    <main class="bg-background flex flex-col">
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
