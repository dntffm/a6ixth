<template>
    <main class="w-full vfh md:h-screen">
        <div class="w-full h-full bg-black/60 backdrop-blur-md z-20 absolute transition duration-150" @click="showRedeemForm = false"
            v-if="showRedeemForm"></div>
        <AppHeaderTransparent class="fixed bg-transparent w-full text-white font-cantarell z-10" />

        <img :src="images[activeImage]" alt="" class="w-full h-full object-cover transition duration-300 brightness-75">

        <div class="absolute bottom-24 md:bottom-36 w-full">
            <div class="flex flex-col lg:grid lg:grid-cols-3 gap-2 w-full">
                <div class="text-center col-start-2">
                    <h1
                        class="text-[#E1DCC7] text-5xl md:text-7xl font-averia mb-4 after:content-['\00AE'] after:text-base md:after:text-xl after:absolute after:top-2 md:after:top-5">
                        True Specialty</h1>
                    <p class="text-base md:text-xl text-white font-cantarell md:p-0">For those who seek the rare and exceptional</p>
                </div>
                <button @click="showRedeemForm = true"
                    class="border border-white text-white hover:bg-white hover:text-black font-bold font-cantarell h-16 md:h-20 w-1/2 mt-4 md:mt-8 m-auto transition hover:duration-100"
                    v-if="!showRedeemForm">
                    Gain Access Now
                </button>
            </div>
        </div>
        <Transition name="swipe">
            <section class="absolute p-4 bottom-0 lg:right-16 lg:bottom-16 z-50 font-cantarell w-full md:w-[500px]"
                v-if="showRedeemForm">
                <p v-if="$attrs.errors.gainAccessFormNull" class="mb-2 text-sm text-red-500">Please complete form below</p>
                <input v-model="name"
                    :class="`w-full ${$attrs.errors.gainAccessFormNull ? 'border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white'} mb-4 text-xl p-4 font-cantarell bg-transparent`"
                    type="text" name="" id="" placeholder="Enter Your Name" required/>
                <input v-model="email"
                    :class="`w-full ${$attrs.errors.gainAccessFormNull ? 'border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white'} mb-4 text-xl p-4 font-cantarell bg-transparent`"
                    type="text" name="" id="" placeholder="Enter Your Email" required/>
                <p class="text-sm text-white my-4 before:content['*']">*By completing this form you are signing up to receive ASIXTH
related emails, and can unsubscribe at any time.</p>
                <button
                :disabled="name === '' && email === ''"
                @click="gainAccess"
                    class="disabled:cursor-not-allowed cursor-pointer bg-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-20 w-1/2 m-auto transition hover:duration-100">Gain Full Access</button>
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
            redeemCode: '',
            activeImage: 0,
            name: '',
            email: '',
            images: [
                '/img/coffee-1.jpeg',
                '/img/coffee-2.jpeg',
                '/img/coffee-3.jpeg',
            ]
        }
    },
    created() {
        setInterval(() => {
            this.activeImage = (this.activeImage + 1) % this.images.length
        }, 30000);
    },
    methods: {
        redeem() {
            console.log(this.emailRedeem);
            const form = useForm({
                email: this.emailRedeem,
                code: this.redeemCode
            })

            form.post(route('redeem.gift'), {
                onSuccess: () => {
                    console.log();
                }
            })
        },
        gainAccess() {  
            const form = useForm({
                email: this.email,
                name: this.name
            })

            form.post(route('gain.access'), {
                onSuccess: () => {
                    this.name = ''
                    this.email = ''
                    alert('Your information has been saved!')
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