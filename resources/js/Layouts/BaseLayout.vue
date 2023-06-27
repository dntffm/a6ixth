<template>
    <AppHeader class="bg-background border-b border-gray-400 font-cantarell text-gray-400"/>
    <main class="bg-background">
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