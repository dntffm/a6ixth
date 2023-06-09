<template>
    <AuthDialog :dark="true" @close="$e => showAuthBar = $e" :show="showAuthBar"/>    
    <CartDialog :dark="true" @close="$e => showCartBar = $e"  :show="showCartBar"/>
    <MenuDialog :dark="true" @close="$e => showLeftSideBar = $e" :show="showLeftSideBar"/>
    
    <header v-bind="$attrs">
        <div class="w-full px-5">
            <div class="grid grid-cols-3 px-10 py-5">
                <button @click="showLeftSideBar = true">
                    <Bars3Icon class="w-7 h-7 " />
                </button>
                <a href="/">
                    <img class="w-[20px] mx-auto" src="/img/a6ixth.png" alt="logo">
                </a>
                <div class="justify-center items-center gap-6 ml-auto hidden lg:flex md:flex">
                    <a :href="route('discover.index')" class=" text-xl" href="">Search</a>

                    <button @click="showAuthBar = true">
                        <img src="/icon/auth-dark.png" class="w-5 " />
                    </button>
                    <button @click="showCartBar = true">
                        <img src="/icon/cart-dark.png" class="w-5 " />
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
    }
}
</script>