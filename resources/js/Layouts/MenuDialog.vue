<template>
    <!-- Menu sidebar -->
    <aside
        :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-black/40 backdrop-blur-md'} h-screen overflow-y-hidden w-full lg:w-1/2 fixed top-0 ${show ? 'left-0' : '-left-full lg:-left-1/2'} z-50 duration-300 p-5`">
        <div class="px-10 py-7 flex flex-col justify-between w-full">
            <button @click="$emit('close', false)">
                <XMarkIcon class="w-7 h-7 text-white" />
            </button>
            <div class="mt-8">
                <ul class="font-neuton text-white">
                    <li class="text-5xl mb-2 cursor-pointer" @click="toggleChildMenu">
                        <div class="relative menu-header pb-4 border-b-2 border-white">
                            <span>Shop</span>
                            <span class="absolute right-0 bottom-2">
                                <svg v-if="active" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
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
                    <li>
                        <a href="mailto:communications@asixth.com">
                            Contact
                        </a>
                    </li>
                    <li> <a href="#">Careers</a></li>
                    <li> <a href="#">Autonomy</a></li>
                    <li class="after:content-['\00AE']">True Specialty</li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

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

let active = ref(false)

function toggleChildMenu(e) {
    active.value = !active.value
    const menuItem = e.target.parentElement.parentElement.querySelector('.menu-item')
    menuItem.classList.toggle('hidden')
    console.log();
}

</script>