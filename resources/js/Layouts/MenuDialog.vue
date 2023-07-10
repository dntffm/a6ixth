<template>
    <!-- Menu sidebar -->
    <OnClickOutside @trigger="$emit('close', false)">
        <aside
            id="menubar"
            :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-black/40 backdrop-blur-md'} vfh md:h-screen w-full lg:w-1/3 fixed top-0 ${show ? 'left-0' : '-left-full lg:-left-1/2'} z-50 duration-300 p-5`">
             <div class="px-3 md:px-10 pt-7 flex flex-col justify-between w-full h-full" v-if="menu === null">
                <button @click="$emit('close', false)">
                    <XMarkIcon class="w-7 h-7 text-white" />
                </button>

                <div class="mt-8 flex flex-col h-full justify-between pb-0">
                    <ul class="font-neuton text-[#FFFEF2]/50">
                        <li class="text-4xl mb-2 cursor-pointer" @click="toggleChildMenu" v-if="searchActive === false">
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
                                <li @click="menu = 'shop'" class="text-3xl py-2 mb-2 hover:text-white">Commons</li>
                                <li @click="menu = 'shop'" class="text-3xl py-2 mb-2 hover:text-white">Heritage</li>
                                <li @click="menu = 'shop'" class="text-3xl py-2 mb-2 hover:text-white">Fractions</li>
                                <li @click="menu = 'shop'" class="text-3xl py-2 mb-2 hover:text-white">Pillar</li>
                                <li @click="menu = 'shop'" class="text-3xl py-2 mb-2 hover:text-white">Purpose</li>
                            </ul>
                        </li>

                        <!-- <li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-4xl py-2 mb-2"><a :href="route('about.index')">About</a></li> -->
                        <li @click="menu = 'about'" class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-4xl py-2 mb-2" v-if="searchActive === false"><a>About</a></li>
                        <li @click="menu = 'true'" class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-4xl py-2 mb-2" v-if="searchActive === false"><a>True Specialty</a></li>
                        <li @click="router.get(route('faces.index'))" class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-4xl py-2 mb-2" v-if="searchActive === false"><a :href="route('faces.index')">Faces</a></li>
                        <li @click="menu = 'typology'" class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-4xl py-2 mb-2 flex justify-between items-center" v-if="searchActive === false">
                            <a>Typology</a>
                            <!-- <div class="text-xs bg-transparent border border-white rounded-full w-20 text-center">Coming Soon</div> -->
                        </li>
                        <OnClickOutside @trigger="searchActive = false">
                            <li class="flex items-center mt-10 cursor-pointer hover:text-white hover:border-white text-xl py-2 mb-2 md:hidden relative">
                                <input
                                    @focus="searchActive = true"
                                    v-model="searchQuery"
                                    class="border-b border-b-[#FFFEF2]/50 border-transparent px-0 focus:border-transparent focus:border-b-white focus:ring-0 outline-none outline-0 w-full placeholder:text-[#FFFEF2]/50 placeholder:text-xl text-xl font-cantarell bg-transparent"
                                    type="text"
                                    placeholder="Search For"
                                >
                                <ArrowRightIcon @click="search" class="absolute right-0 w-6 h-6 ml-auto"/>
                            </li>
                        </OnClickOutside>

                    </ul>
                    <div class="w-full" v-if="searchActive === false">
                        <ul class="flex flex-row justify-between items-center text-xs lg:text-sm font-cantarell border-t border-white py-2">
                            <li class="text-[#FFFEF2]/50 hover:text-white ">
                                <a :href="route('contact.index')">
                                    Contact
                                </a>
                            </li>
                            <li class="text-[#FFFEF2]/50 hover:text-white "> <a :href="route('careers.index')">Careers</a></li>
                            <li class="text-[#FFFEF2]/50 hover:text-white "> <a :href="route('autonomy.index')">Autonomy</a></li>
                            <li class="text-[#FFFEF2]/50 hover:text-white"><a href="https://a6ixth-careers.notion.site/Future-of-Coffee-fc9b2b9157db44e78f640f24843cf301?pvs=4" target="_blank">Blogs</a></li>
                            <li class="text-[#FFFEF2]/50 hover:text-white "> <a href="faq">FAQs</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="text-white flex flex-col justify-center items-center gap-6 text-center h-full m-auto w-full md:w-2/4 lg:w-1/2" v-else>
                <h1 class="font-neuton text-2xl" v-html="contents[menu].title"></h1>
                <p class="font-cantarell text-sm" v-html="contents[menu].desc"></p>
                <a @click="menu = null"
                    class="cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold py-3 px-6 font-cantarell transition hover:duration-100">
                    Return Back
                </a>
            </div>
        </aside>
    </OnClickOutside>
</template>



<script setup>
import { XMarkIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';
import { router } from '@inertiajs/vue3';

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

let windowSize = screen.width
let active = ref(false)
let menu = ref(null)
let searchQuery = ref(null)
let searchActive = ref(false)
let contents = ref({
    about: {
        title: 'About Us :  <span class="font-bebas">ASIXTH</span>',
        desc: `ASIXTH is building the new standard for quality in the coffee space. We are making it easier for consumers to differentiate high quality coffee.
            <br/><br/>
            We are a company building experiences that allows you to acknowledge the sixth sense of being present and what better way to do so than through coffee. The name blends A + SIXTH together.
            <br/><br/>
            We experience life using our five senses but we fail to acknowledge that sixth sense of “being present.” We are building a world where people are aware and present in everything they do.`
    },
    typology: {
        title: 'Cultivating Typology',
        desc: 'Typology allows you to determine what coffee region, roast type, price, brew and more that you prefer. For a unique coffee experience both inside and outside our brand'
    },
    true: {
        title: 'True Specialty Coffee',
        desc: 'True Specialty is a consumer quality mark that evaluates and verifies that the coffee has achieved either Cup of Excellence status or equivalent.<br/><br/> True Specialty Coffee is coffee that has been graded meticulously, sourced intentionally, farmed sustainably, roasted precisely, and priced affordably '
    },
    shop: {
        title: 'Curating Offerings',
        desc: 'We curate our offerrings base on the seasonal availability of coffee. Allowing ultra-quality from cultivation to cup '
    }
})

onMounted(() => {

})

function toggleChildMenu(e) {
    active.value = !active.value
    const menuItem = document.getElementsByClassName('menu-item')[0]
    console.log(menuItem);
    menuItem.classList.toggle('hidden')

}

function search() {
    router.get(route('discover.index', {
        search: searchQuery.value
    }))
}
</script>
