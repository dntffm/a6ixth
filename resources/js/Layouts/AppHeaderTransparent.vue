<template>
    <AuthDialog @close="$e => showAuthBar = $e" :show="showAuthBar"/>
    <CartDialog :class="`${showCartBar ? 'visible' : 'invisible'}`" @close="$e => showCartBar = $e" :show="showCartBar"/>
    <MenuDialog @close="$e => showLeftSideBar = $e" :show="showLeftSideBar"/>

    <header v-bind="$attrs">
        <div class="w-full py-5">
            <div class="grid grid-cols-3 px-6 md:px-10 py-5">
                <button @click="showLeftSideBar = true">
                    <Bars3Icon class="w-7 h-7 " />
                </button>
                <a class="group" href="/">
                    <h1 class="h-[35px] hidden group-hover:block text-center mx-auto text-2xl font-bebas transition duration-100">ASIXTH</h1>
                    <img class="block group-hover:hidden w-[20px] mx-auto" src="/img/a6ixth-white.png" alt="logo">
                </a>
                <div class="justify-center items-center gap-8 md:gap-8 ml-auto flex">
                    <a :href="route('discover.index')" class="text-medium" href="">
                        <span class="hidden md:block">Search</span>
                    </a>

                    <button @click="showAuthBar = true">
                        <img src="icon/user-white.svg" class="w-5"/>
                    </button>
                    <button @click="showCartBar = true">
                        <img src="icon/cart-white.svg" class="w-5"/>
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
    name: 'AppHeaderTransparent',
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
    methods: {
        showCart() {
            console.log();
        }
    },
    data() {
        return {
            showLeftSideBar: false,
            showAuthBar: false,
            showCartBar: false
        }
    },
}
</script>
