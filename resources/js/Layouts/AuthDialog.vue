<template>
    <!-- Auth sidebar -->
    <OnClickOutside @trigger="$emit('close', false)">
        <aside
            :class="`${dark ? 'bg-[#1E1E1E] text-white' : 'bg-black/40 backdrop-blur-md text-white'} w-full lg:w-1/3 vfh md:h-screen fixed top-0 ${show ? 'right-0' : '-right-full lg:-right-1/2'} z-50 font-neuton duration-300 p-5`">
            <div class="md:px-10 md:py-10" v-if="menu === 'phone' && $page.props.user == null">
                <button @click="$emit('close', false)">
                    <XMarkIcon class="w-7 h-7 " />
                </button>
                <div class="mt-4 md:mt-10 mb-10">
                    <h2 class="text-2xl md:text-2xl mb-4">Create Your Account</h2>
                    <p class="text-sm md:text-base font-cantarell mb-4">We’ll send you magic code to login in via phone</p>

                    <div class="flex">
                        <select v-model="country_code"
                            class="bg-transparent text-white placeholder-white w-1/3 border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white"
                            name="" id="">
                            <option value="+1" selected="selected">+1</option>
                            <option value="+44">+44</option>
                            <option value="+26">+26</option>
                            <option value="+33">+33</option>
                            <option value="+49">+49</option>
                            <option value="+82">+82</option>
                            <option value="+62">+62</option>
                        </select>
                        <input v-model="phone_number"
                            :class="`${dark ? 'text-white' : 'text-white placeholder-white'} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`"
                            type="number" name="" id="" placeholder="000-000-0000" />
                    </div>
                    <button
                        @click="login"
                        :disabled="phone_number === '' || sendingOtp"
                        class="disabled:cursor-not-allowed cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-14 md:h-14 w-1/2 md:w-1/3 m-auto transition hover:duration-100">
                        Continue
                    </button>

                </div>

                <div>
                    <h3 class="font-neuton text-2xl mb-4">What About a Password?</h3>
                    <p class="font-cantarell text-sm">Enter your phone number and we'll text you a magic code.
                        Use a phone number you have access to securely.</p>
                </div>

                <div class="my-8">
                    <hr class="w-full border-white border-1 m-auto" />
                </div>
                <div>
                    <h3 class="font-neuton text-2xl mb-4">Already Have an Account ?</h3>
                    <p class="font-cantarell text-sm">Provide your phone number above and enter the magic code that
                        we'll send to your device- you'll be logged into your  account.</p>
                </div>
            </div>
            <div class="md:px-10 md:py-10" v-else-if="menu === 'otp' && $page.props.user == null">
                <button @click="$emit('close', false)">
                    <XMarkIcon class="w-7 h-7 " />
                </button>
                <div class="mt-4 md:mt-10 mb-10">
                    <h2 class="text-2xl md:text-2xl mb-4">Confirm Your Magic Code</h2>
                    <p class="text-base font-cantarell mb-4">We've texted a magic code to {{country_code+''+phone_number }}
                        Enter the code we've sent to your device to login or signup.</p>

                    <div class="grid grid-cols-6 gap-2">

                        <input v-for="i in 6"
                            @keyup="handleOTPKeyboard($event, i)"
                            @input="handleOTPForm($event, i)"
                            :class="`${dark ? 'text-white' : 'text-white'} w-full bg-transparent mb-4 text-xl p-4 font-cantarell ${$page.props.errors && $page.props.errors.otp ? 'border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white'} rounded-md text-center`"
                            type="number"
                            :id="'otp-' + i"
                            min="0"
                            max="9" />
                    </div>

                    <p class="text-red-600 mb-4 font-cantarell" v-if="$page.props.errors && $page.props.errors.otp">You’ve enter wrong code , <span @click="login" class="text-white underline font-bold cursor-pointer">Resend Again</span></p>

                    <button @click="exchange"
                        :disabled="otp.length < 6 || verifyingOtp"
                        class="disabled:cursor-not-allowed cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-14 md:h-14 w-1/2 md:w-1/3 m-auto transition hover:duration-100">
                        Verify now
                    </button>
                </div>
            </div>
            <div class="md:px-10 md:py-10" v-else-if="menu === 'name' && $page.props.user != null">
                <button @click="$emit('close', false)">
                    <XMarkIcon class="w-7 h-7 " />
                </button>
                <div class="mt-10 mb-10">
                    <h2 class="text-2xl mb-4">What Should We Call You?</h2>
                    <p class="text-base font-cantarell mb-4">Enter your full name, first and last. We will address you by
                        the name you provide for all ASIXTH matters</p>

                    <input v-model="name"
                        :class="`${dark ? 'text-white' : 'text-white placeholder-white'} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`"
                        type="text" name="" id="" placeholder="Enter your name" />
                    <button @click="setupProfile"
                        class="bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-14 md:h-14 w-full md:w-1/3 m-auto transition hover:duration-100">
                        Let's Go
                    </button>
                </div>
            </div>
            <div class="md:px-10 md:py-10" v-else>
                <button @click="$emit('close', false)">
                    <XMarkIcon class="w-7 h-7 " />
                </button>
                <div class="mt-10 mb-10">
                    <h2 class="text-2xl mb-4">Hello, <br />{{ profileName || $page.props.user.userprof.name }}</h2>
                    <a :href="route('logout')" class="text-base font-cantarell mb-4 text-white hover:underline hover:text-red-600">Log Out</a>
                </div>
            </div>
        </aside>
    </OnClickOutside>
</template>

<script setup>
const menu_constants = {
    'PHONE': 'phone',
    'OTP': 'otp',
    'NAME': 'name'
}

import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { OnClickOutside } from '@vueuse/components';

let email = ref('')
let phone_number = ref('')
let otp = ref([])
let menu = ref('phone')
let country_code = ref('+1')
let name = ref('')
let profileName = localStorage.getItem('name')
let sendingOtp = ref(false)
let verifyingOtp = ref(false)

defineProps({
    dark: {
        type: Boolean,
        default: false
    },
    show: {
        type: Boolean,
        default: false
    },
    errors: {
        type: Object
    }
})

function handleOTPKeyboard(e, i) {
    if(e.key === "Backspace" && i > 1) {
        const curr = document.getElementById(`otp-${i-1}`)
        curr.focus()
        curr.value = null
    }
}

function handleOTPForm(e, i) {
    otp.value[i] = e.data
    const curr = document.getElementById(`otp-${i}`)
    curr.value = e.data

    if (i > 0 && i < 6) {
        const next = document.getElementById(`otp-${i + 1}`)

        next.focus()
    }
}

function login() {
    sendingOtp.value = true
    otp.value = []
    const form = useForm({
        //email: email.value,
        phone_number: country_code.value + '' + phone_number.value,
    })

    form.post(route('login'), {
        onSuccess: () => {
            //email.value = ''
            sendingOtp.value = false
            menu.value = 'otp'
        }
    })
}

function exchange() {
    verifyingOtp.value = true
    const form = useForm({
        phone_number: country_code.value + '' + phone_number.value,
        code: otp.value.join('')
    })

    if (form.code.length < 6) {
        for (let index = 1; index <= 6; index++) {
            if (!otp.value[index]) {
                const elem = document.getElementById(`otp-${index}`)
                console.log(elem);
                elem.focus()
                break
            }
        }
    } else {
        form.post(route('exchange'), {
            onSuccess: (res) => {
                verifyingOtp.value = false
                if(res.props.user.userprof.name === null) menu.value = 'name'
                else menu.value = null
            },
            onError: () => {
                verifyingOtp.value = false
            }
        })
    }
    //verifyingOtp.value = false
}

function setupProfile() {
    const form = useForm({
        phone_number: country_code.value + '' + phone_number.value,
        name: name.value
    })
    form.post(route('account.setup'), {
        onSuccess: () => {
            menu.value = null
            location.reload()
        }
    })
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
    /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance: textfield;
    /* Firefox */
}
</style>
