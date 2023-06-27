<template>
    <div class="relative">
        <button :class="`flex items-center text-left p-4 text-xl ${showOptions ? 'text-black border-black' : 'text-black/50 border-black/50'} border bg-transparent w-full h-full font-cantarell`" @click="show">
            <slot name="select">
            </slot>
            <ChevronDownIcon class="ml-auto w-5 h-5" v-if="!showOptions"/>
            <ChevronUpIcon class="ml-auto w-5 h-5" v-else/>
        </button>
        <div class="absolute border-black border border-t-0 bg-transparent w-full" v-if="showOptions">
            <slot name="options"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid';

let showOptions = ref(false)

function show() {
    showOptions.value = !showOptions.value
}
</script>