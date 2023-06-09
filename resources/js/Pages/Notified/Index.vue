<template>
    <section class="flex flex-col h-screen">
        <AppHeader class="bg-background border-b border-gray-400 font-cantarell text-gray-400" />

        <div class="flex flex-grow">
            <div class="w-screen lg:w-1/2 bg-background">
                <div class="w-4/5 pl-10 md:pr-16 py-10 font-cantarell">
                    <h1 class="font-averia text-6xl text-[#706B59] mb-5">AHAUS TRUCK</h1>
                    <input v-model="email" class="w-full bg-background border-black mb-4 text-xl p-4 font-cantarell" type="text"
                        name="" id="" placeholder="Enter Your Name" />
                    <input v-model="email" class="w-full bg-background border-black mb-4 text-xl p-4 font-cantarell " type="text"
                        name="" id="" placeholder="Enter Your Email" />
                    <p class="text-sm text-black my-4 before:content['*']">*By completing this form you are signing up to
                        receive ASIXTH
                        related emails, and can unsubscribe at any time.</p>
                    <AsixthBlackButton class="w-full md:w-1/4">Submit</AsixthBlackButton>
                </div>
            </div>
            <div class="w-1/2 relative bg-[#F8F3DF] hidden lg:flex lg:justify-center lg:items-center">
                <img src="/img/ahaus-upgrade.png" alt="Ahaus Truck" class="absolute right-0 w-3/5">
            </div>
        </div>
    </section>
</template>

<script setup>
import AppHeader from '../../Layouts/AppHeader.vue';
import AsixthBlackButton from '../../Components/AsixthBlackButton.vue'

</script>