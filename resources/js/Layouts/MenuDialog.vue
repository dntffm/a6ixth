<template>
    <!-- Menu sidebar -->
    <aside
        :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-black/40 backdrop-blur-md'} h-screen overflow-y-hidden w-full lg:w-1/3 fixed top-0 ${show ? 'left-0' : '-left-full lg:-left-1/2'} z-50 duration-300 p-5`">
        <div class="px-3 md:px-10 pt-7 flex flex-col justify-between w-full h-full">
            <button @click="$emit('close', false)">
                <XMarkIcon class="w-7 h-7 text-white" />
            </button>
            <div class="mt-8 flex flex-col h-full justify-between">
                <ul class="font-neuton text-[#FFFEF2]/50">
                    <li class="text-5xl mb-2 cursor-pointer" @click="toggleChildMenu">
                        <div :class="`relative menu-header pb-4 border-b-2 ${active ? 'text-white border-white' : 'border-[#FFFEF2]/50 text-[#FFFEF2]/50'} hover:text-white hover:border-white`">
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
                    
                    <li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">About</a></li>
                    <li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">Faces</a></li>
                    <li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">Typology</a></li>
                    <li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">Autonomy</a></li>
                    <li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2 block md:hidden">
                        <a :href="route('discover.index')">
                            Search
                        </a>
                    </li>

                </ul>
                <div class="w-full">
                    <ul class="flex gap-4 md:gap-16 text-xs lg:text-sm font-cantarell border-t border-white py-2">
                        <li class="text-[#FFFEF2]/50 hover:text-white ">
                            <a href="mailto:communications@asixth.com">
                                Contact
                            </a>
                        </li>
                        <li class="text-[#FFFEF2]/50 hover:text-white "> <a href="#">Careers</a></li>
                        <!-- <li class="text-[#FFFEF2]/50 hover:text-white "> <a href="#">Autonomy</a></li> -->
                        <li class="after:content-['\00AE'] after:top-[2px] after:absolute relative text-[#FFFEF2]/50 hover:text-white"><a href="">True Specialty</a></li>
                        <li class="text-[#FFFEF2]/50 hover:text-white "> <a href="#">FAQs</a></li>
                    </ul>
                </div>
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
    const menuItem = document.getElementsByClassName('menu-item')[0]
    console.log(menuItem);
    menuItem.classList.toggle('hidden')
    
}

</script>