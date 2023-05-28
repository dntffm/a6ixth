<template>
    <header class="bg-background font-cantarell border-b border-gray-400">
        <div class="w-full p-5">
            <div class="grid grid-cols-3">
                <button>
                    <Bars3Icon class="w-7 h-7 text-gray-400" />
                </button>
                <img class="w-[25px] mx-auto" src="img/a6ixth.png" alt="logo">
                <div class="justify-center items-center gap-6 ml-auto hidden lg:flex md:flex">
                    <a :href="route('discover.index')" class="text-gray-400" href="">Search</a>

                    <div class="flex items-center space-x-4"  v-if="user != null">
                        <img class="w-10 h-10 rounded-full" :src="user.picture" alt="">
                        <div class="font-medium">
                            <div class="text-black">{{ user.nickname }}</div>
                            <a :href="route('logout')" class="text-sm text-red-500">Sign out</a>
                        </div>
                    </div>
                    
                    <a :href="route('login')" v-else>
                        <UserIcon class="w-7 h-7 text-gray-400" />
                    </a>
                    <button>
                        <ShoppingBagIcon class="w-7 h-7 text-gray-400" />
                    </button>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { Bars3Icon, UserIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'AppHeader',
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    components: {
        Bars3Icon, UserIcon, ShoppingBagIcon
    },
    data() {}
}
</script>