<template>
    <section class="flex flex-col h-screen">
        <AppHeader class="bg-background border-b border-gray-400 font-cantarell text-gray-400" />

        <div class="flex flex-grow">
            <div class="w-full bg-background flex items-center justify-center text-center md:justify-start md:text-left">
                <div class="p-5 md:pl-10 md:pr-16 py-10 font-neuton lg:w-1/2">
                    <h1 class="text-6xl text-black">Thank You</h1>
                    <p class="my-5 text-xl font-cantarell text-black/50">
                        We are excited to have you as ASIXTH of this beautiful story we are brewing. Your order is on the way!
                    </p>
                    <AsixthBlackButton @click="backHome" class="w-full lg:w-1/4">Back to Home</AsixthBlackButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AppHeader from '../../Layouts/AppHeader.vue';
import AsixthBlackButton from '../../Components/AsixthBlackButton.vue'
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';

function backHome() {
    router.get('/')
}

</script>
