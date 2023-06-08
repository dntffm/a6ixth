<template>
    <main class="w-full h-screen">
        <div class="w-screen h-screen bg-black/60 z-20 absolute transition duration-150" @click="showRedeemForm = false"
            v-if="showRedeemForm"></div>
        <AppHeaderTransparent class="fixed bg-transparent w-full text-white font-cantarell" />

        <img src="/img/coffee-1.jpeg" alt="" class="w-full h-screen object-cover">

        <div class="absolute bottom-36 w-full">
            <div class="flex flex-col lg:grid lg:grid-cols-3 gap-2 w-full">
                <div class="text-center col-start-2">
                    <h1
                        class="text-[#E1DCC7] text-7xl font-averia mb-4 after:content-['\00AE'] after:text-xl after:absolute after:top-3">
                        True Specialty</h1>
                    <p class="text-xl text-white font-cantarell">For those who seek the rare and exceptional</p>
                </div>
                <button @click="showRedeemForm = true"
                    class="border border-white text-white hover:bg-white hover:text-black font-bold font-cantarell h-20 w-1/2 m-auto transition hover:duration-100"
                    v-if="!showRedeemForm">
                    Redeem Voucher
                </button>
            </div>
        </div>
        {{ $attrs.errors.email ? '1' : '0' }}
        <Transition name="swipe">
            <section class="absolute p-4 bottom-0 lg:right-16 lg:bottom-16 z-50 font-cantarell w-full md:w-[500px]"
                v-if="showRedeemForm">
                <input v-model="redeemCode"
                    :class="`w-full ${$attrs.errors.email ? 'border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white text-white placeholder-white focus:border-white'} mb-4 text-xl p-4 font-cantarell bg-transparent`"
                    type="text" name="" id="" placeholder="Enter Your Code" />
                <input v-model="emailRedeem"
                    :class="`w-full ${$attrs.errors.code ? 'border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white text-white placeholder-white focus:border-white'} mb-4 text-xl p-4 font-cantarell bg-transparent`"
                    type="text" name="" id="" placeholder="Enter Your Email" />
                <p class="text-sm text-white my-4 before:content['*']">*Only members who visited our truck are able to
                    access further.
                    Get notified on our next AHAUS location launch here</p>
                <button @click.prevent="redeem"
                    class="bg-black text-white hover:bg-white hover:text-black font-bold font-cantarell h-20 w-1/2 m-auto transition hover:duration-100">Submit</button>
            </section>
        </Transition>

    </main>
</template>

<script>
import AppHeaderTransparent from '../../Layouts/AppHeaderTransparent.vue';
import { useForm } from '@inertiajs/vue3';

export default {
    name: 'Landing',
    components: {
        AppHeaderTransparent
    },
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            showLeftSideBar: false,
            showAuthBar: false,
            showRedeemForm: false,
            emailRedeem: '',
            redeemCode: ''
        }
    },
    methods: {
        redeem() {
            const form = useForm({
                email: this.emailRedeem,
                code: this.redeemCode
            })

            form.post(route('redeem.gift'), {
                onSuccess: () => {
                    console.log();
                }
            })
        }
    }
}
</script>


<style>
.swipe-enter-active {
    transition: all 0.5s ease-out;
}

.swipe-enter-from,
.swipe-leave-to {
    transform: translateX(50px);
    opacity: 0;
}
</style>