<template>
    <transition name="slide-down">
        <aside :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-black/25 backdrop-blur-md'} w-full h-1/4 fixed ${show ? 'top-0' : '-top-1/4'} duration-300 left-0 z-50`">
            <div class="px-10 py-7">
                <button @click="$emit('close', false)">
                    <XMarkIcon class="w-7 h-7 text-white" />
                </button>
                <div class="mt-6">
                    <p class="font-cantarell text-white">You have no Item(s) in your cart. Please add an item to your cart</p>
                </div>
            </div>
        </aside>
    </transition>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { watch } from 'vue';

const props = defineProps({
    dark: {
        type: Boolean,
        default: false
    },
    show: {
        type: Boolean,
        default: false
    }
})

watch(() => props.show, () => {
    console.log(props.show);
})
</script>

<style>
    .slide-down-enter-form {
        transform: translateX(0%);
    }
</style>