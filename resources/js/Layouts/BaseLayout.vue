<template>
    <AppHeader :user="$page.props.user"/>
    <main class="bg-background">
        <slot></slot>
    </main>

    <AppFooter/>
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