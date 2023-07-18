<template>
    <AuthDialog :dark="true" @close="$e => showAuthBar = $e" :show="showAuthBar"/>
    <CartDialog :dark="true" @close="$e => showCartBar = $e"  :show="showCartBar"/>
    <MenuDialog :dark="true" @close="$e => showLeftSideBar = $e" :show="showLeftSideBar"/>

    <header v-bind="$attrs">
        <div class="w-full py-5">
            <div class="grid grid-cols-3 px-6 md:px-10 py-5">
                <button class="w-7" @click="showLeftSideBar = true">
                    <Bars3Icon class="w-7 h-7 " />
                </button>
                <a class="group" href="/">
                    <h1 class="h-[35px] hidden group-hover:block text-center mx-auto text-4xl font-bebas">ASIXTH</h1>
                    <img class="block group-hover:hidden w-[20px] mx-auto" src="/img/asixth.png" alt="logo">
                    <!-- <img class="visible group-hover:invisible w-[20px] mx-auto" src="/img/asixth.png" alt="logo">
                    <h1 class="invisible group-hover:visible mx-auto">ASIXTH</h1> -->
                </a>
                <div class="justify-center items-center gap-6 md:gap-7 ml-auto flex">
                    <a :href="route('discover.index')" class="text-medium" href="">
                        <span class="hidden md:block">Search</span>
                    </a>

                    <button @click="showAuthBar = true">
                        <img src="/icon/user-dark.svg" class="w-5"/>
                    </button>
                    <button @click="showCartBar = true">
                        <img src="/icon/cart-dark.svg" class="w-5"/>
                    </button>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { Bars3Icon, UserIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import AuthDialog from './AuthDialog.vue';
import MenuDialog from './MenuDialog.vue';
import CartDialog from './CartDialog.vue';

export default {
    inheritAttrs: true,
    name: 'AppHeader',
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    components: {
        Bars3Icon, UserIcon, ShoppingBagIcon, XMarkIcon,
        AuthDialog, MenuDialog, CartDialog
    },
    data() {
        return {
            showLeftSideBar: false,
            showAuthBar: false,
            showCartBar: false
        }
    },
    watch: {
        showLeftSideBar: {
            handler: function(newValue) {
                this.stopScrolling(newValue)
            },
            deep: true
        },
        showAuthBar: {
            handler: function(newValue) {
                this.stopScrolling(newValue)
            },
            deep: true
        }
    },
    methods: {
        stopScrolling(sidebarActive) {
            if(sidebarActive) {
                document.body.classList.remove('overflow-initial')
                document.body.classList.add('overflow-hidden')
            } else {
                document.body.classList.add('overflow-initial')
                document.body.classList.remove('overflow-hidden')
            }
        }
    }
}
</script>
