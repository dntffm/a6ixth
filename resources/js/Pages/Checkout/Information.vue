<template>
    <section class="flex flex-col h-screen">
        <AppHeader class="bg-background border-b border-gray-400 font-cantarell text-gray-400" />

        <div class="flex flex-grow">
            <div class="w-3/4 bg-background">
                <div class="pl-10 pr-16 py-10 font-cantarell">
                    <h1 class="font-neuton text-6xl text-black">Check out with <span class="font-bebas font-bold">ASIXTH</span></h1>
                    <p class="my-5">
                        Where would you like your order sent?
                    </p>

                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-4">
                            <input class="w-[20%] bg-background border-black mb-4 text-xl p-4 font-cantarell" type="text"
                                name="" id="" placeholder="Enter Your Name" />
                            <input class="w-[40%] bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                            <input class="w-[40%] bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <input class="w-full bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                        </div>
                        <div class="flex flex-row gap-4 mb-4">
                            <input class="w-full bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <input class="w-[50%] bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                            <input class="w-[50%] bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <input class="w-full bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <input class="w-[25%] bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                            <input class="w-[75%] bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                                name="" id="" placeholder="Enter Your Email" />
                        </div>
                    </div>

                    <AsixthBlackButton class="w-1/2">Continue to shipping details</AsixthBlackButton>
                </div>
            </div>
            <div class="w-1/2 bg-[#F8F3DF] flex justify-center items-center">
                <img src="/img/ahaus.png" alt="Ahaus Truck">
            </div>
        </div>
    </section>
</template>

<script setup>
import AppHeader from '../../Layouts/AppHeader.vue';
import AsixthBlackButton from '../../Components/AsixthBlackButton.vue'

</script>
