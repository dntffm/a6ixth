<template>
    <section class="flex flex-col h-screen">
        <AppHeader class="bg-background border-b border-gray-400 font-cantarell text-gray-400" />

        <div class="flex flex-col lg:flex-grow">
            <div class="w-full lg:w-3/4 bg-background">
                <div class="p-5 lg:pl-10 lg:pr-16 py-10 font-cantarell">
                    <h1 class="font-neuton text-6xl text-black">Check out with <span
                            class="font-bebas font-bold">ASIXTH</span></h1>
                    <p class="my-5">
                        Where would you like your order sent?
                    </p>

                    <div class="flex flex-col gap-2 font-cantarell">
                        <div class="flex flex-row gap-4">
                            <select class="bg-background p-4 w-[20%] border-black mb-4 focus:ring-offset-black focus:ring-black focus:border-black" name="" id="">
                                <option value="">Mr.</option>
                                <option value="">Mrs.</option>
                                <option value="">Ms.</option>
                            </select>
                            <input class="w-[40%] bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black" type="text"
                                name="" id="" placeholder="First name" />
                            <input class="w-[40%] bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black" type="text"
                                name="" id="" placeholder="Last name" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <select class="w-full bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black"
                                name="" id="" selected="">
                                <option value="" disabled selected>Country/Region</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div class="flex flex-row gap-4 mb-4">
                            <input class="w-full bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black" type="text"
                                name="" id="" placeholder="Address" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <input class="w-[50%] bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black" type="text"
                                name="" id="" placeholder="City" />
                                <select class="w-full bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black"
                                name="" id="" selected="">
                                <option value="" disabled selected>State/Provinces</option>
                                <option>New mexico</option>
                            </select>
                        </div>
                        <div class="flex flex-row gap-4">
                            <input class="w-full bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black" type="text"
                                name="" id="" placeholder="Zipcode" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <select class="w-full bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black"
                                name="" id="" selected="">
                                <option value="" disabled selected>Country Code</option>
                                <option>+1</option>
                            </select>
                            <input class="w-[75%] bg-background border-black mb-4 text-xl p-4 focus:ring-offset-black focus:ring-black focus:border-black" type="text"
                                name="" id="" placeholder="Phone number" />
                        </div>
                    </div>

                    <AsixthBlackButton @click="nextPage" class="w-full lg:w-1/2">Continue to shipping details</AsixthBlackButton>
                </div>
            </div>
            <div class="w-full lg:w-1/2 bg-[#F8F3DF] flex justify-center items-center">
                <div class="relative w-full lg:w-1/2">
                    <div class="p-5">
                        <img class="w-full m-auto mb-3" src="/img/sample-product.png" alt="product">
                        <p class="font-neuton text-2xl mb-2">Series No. 000</p>
                        <p class="font-cantarell text-gray-600">Thanks for attending our AHAUS launch
                            Enjoy this crafted gift of 10oz coffee on us</p>
                    </div>
                    <button
                            class="absolute bg-black w-full text-white font-cantarell font-bold p-5">FREE</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AppHeader from '../../Layouts/AppHeader.vue';
import AsixthBlackButton from '../../Components/AsixthBlackButton.vue'
import { router } from '@inertiajs/vue3';

function nextPage() {
    router.get(route('checkout.payment.details'))
}

</script>
