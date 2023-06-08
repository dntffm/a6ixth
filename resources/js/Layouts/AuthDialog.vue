<template>
    <!-- Auth sidebar -->
    <aside :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-background text-black'} w-full lg:w-1/2 h-screen fixed top-0 ${show ? 'right-0' : '-right-1/2'} z-50 font-neuton duration-300 p-5`">
        <div class="px-10 py-10">
            <button @click="$emit('close', false)">
                <XMarkIcon class="w-7 h-7 " />
            </button>
            <div class="mt-10 mb-10">
                <h2 class="text-4xl mb-4">Create Your Account</h2>
                <p class="text-xl font-cantarell mb-4">We’ll send you a magic link to login in via email</p>
                <input v-model="email" class="w-full bg-background border-black mb-4 text-xl p-4 font-cantarell" type="text" name="" id=""
                    placeholder="Email address" />
                <button
                    @click="login"
                    class="bg-black border border-black text-white hover:bg-white hover:text-black font-bold font-cantarell h-16 w-1/3 m-auto transition hover:duration-100">
                    Continue
                </button>

            </div>

            <div>
                <h3 class="font-neuton text-2xl mb-4">What About a Password?</h3>
                <p class="font-cantarell text-sm">We don't believe in passwords. Enter your email address and we'll email
                    you a magic link. Click that link from any device and you'll be logged in.</p>
            </div>

            <div class="my-8">
                <hr class="w-[95%] border-black m-auto" />
            </div>
            <div>
                <h3 class="font-neuton text-2xl mb-4">Already Have an Account ?</h3>
                <p class="font-cantarell text-sm">No problem. Provide your email address above and click the magic link that
                    we'll send to your email - you'll be logged into your account.</p>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

let email = ref('')

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

function login() {
    const form = useForm({
        email: email.value
    })
    
    form.post(route('login'), {
        onSuccess: () => {
            console.log();
        }
    })
    
}
</script>