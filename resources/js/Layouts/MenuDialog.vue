<template>
    <!-- Menu sidebar -->
    <aside :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-black/40 backdrop-blur-md'} h-screen overflow-y-hidden w-full lg:w-1/2 fixed top-0 ${show ? 'left-0' : '-left-1/2'} z-50 duration-300 p-5`">
        <div class="px-10 py-7 flex flex-col justify-between w-full">
            <button @click="$emit('close', false)">
                <XMarkIcon class="w-7 h-7 text-white" />
            </button>
            <div class="mt-8">
                <ul class="font-neuton text-white">
                    <li @click="toggleChildMenu" class="text-5xl mb-2">
                        <div class="relative menu-header pb-4 border-b-2 border-white">
                            <span>Shop</span>
                            <span class="absolute right-0 bottom-2 cursor-pointer">
                                <MinusIcon class="w-7 h-7"/>
                                <PlusIcon class="w-7 h-7"/>
                            </span>
                        </div>

                        <ul class="menu-item hidden">
                            <li class="text-3xl py-2 mb-2">Commons</li>
                            <li class="text-3xl py-2 mb-2">Heritage</li>
                            <li class="text-3xl py-2 mb-2">Fractions</li>
                            <li class="text-3xl py-2 mb-2">Pillar</li>
                            <li class="text-3xl py-2 mb-2">Purpose</li>
                        </ul>
                    </li>
                    <li class="border-b-2 border-white text-5xl py-2 mb-2">About</li>
                    <li class="border-b-2 border-white text-5xl py-2 mb-2">Faces</li>
                    <li class="border-b-2 border-white text-5xl py-2 mb-2">Typology</li>
                </ul>
            </div>

            <div class="absolute bottom-0 w-[90%]">
                <ul class="flex gap-8 text-white text-sm lg:text-xl font-cantarell border-t border-white py-2">
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Autonomy</li>
                    <li class="after:content-['\00AE']">True Specialty</li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/vue/24/outline'

defineProps({
    dark: {
        type: Boolean,
        default: false
    },
    show: {
        type: Boolean,
        default: false
    }
})

function toggleChildMenu(e) {
    const menuItem = e.target.parentElement.parentElement.querySelector('.menu-item')
    menuItem.classList.toggle('hidden')
    console.log();
}

</script>