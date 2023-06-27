<template>
    <BaseLayout>

        <Head title="About Us" />

        <div class="p-10 font-cantarell px-4">
            <section class="relative flex flex-col justify-center items-center mt-52">
                <div class="w-full h-[300px] lg:w-[700px] lg:h-[500px] bg-gray-300"></div>
                <div class="text-2xl lg:text-6xl absolute top-36 lg:w-1/2 text-center font-bold">Eight years long affair
                    with Coffee & Friendship.</div>
                <p class="mt-6 text-base lg:text-2xl font-bold my-10 text-center">Armaan, Troy & Abu story of creating
                    ASIXTH</p>

            </section>

            <section class="flex flex-col justify-center items-center mt-4 lg:mt-10 text-base md:text-2xl text-center font-bold lg:w-1/2 m-auto">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>
                <p class="mb-10">2018</p>
                <p>The story starts at with
                    <span class="inline-flex items-baseline">
                        <img src="/img/coffee-1.jpeg" class="w-10 h-10 self-center rounded-full" alt="">
                    </span>
                    Abubakarr traveling to London, Dubai, and Costa Rica
                </p>
                <p class="mt-10">In Costa Rica he witnesses a COE competition
                    and discovered that this was how high quality
                    coffee was determined</p>

            </section>

            <section class="flex flex-col justify-center items-center mt-10 text-base md:text-2xl text-center font-bold lg:w-1/2 m-auto">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>
                <p>2019</p>
                <p>Abu decided he wanted to replicate
                    COE quality and process without charging
                    customers the exuberant price</p>

            </section>

            <section class="flex flex-col items-center mt-4">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>
                <p class="text-base md:text-2xl font-bold">2020</p>

                <div class="flex flex-col lg:flex-row items-center mt-6">
                    <div class="w-full h-[300px] lg:w-[400px] lg:h-[400px] bg-gray-300 ml-auto">
                    </div>
                    <div class="mt-4 lg:w-1/2 lg:ml-auto">
                        <p class="text-base md:text-2xl font-bold">Abu decided to join OnDeck Catalyst
                            to help him push forward the idea and
                            it was there he met <span class="inline-flex items-baseline">
                                <img src="/img/coffee-1.jpeg" class="w-10 h-10 self-center rounded-full" alt="">
                            </span> <span class="underline">Armaan</span>.</p>
                    </div>
                </div>
            </section>

            <section class="flex flex-col justify-center items-center mt-10 text-base md:text-2xl text-center font-bold lg:w-1/2 m-auto">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>
                <p>2022</p>
                <p class="mt-4">Abu held a NYC Tech Event for food and beverage startups
                    and invited Armaan to come. Post event, Abu shared the
                    idea over dinner and Armaan was onboard </p>

            </section>
            <section class="flex flex-col justify-center items-center mt-10 text-base md:text-2xl text-center font-bold lg:w-1/2 m-auto">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>
                <div class="w-full h-[300px] lg:w-[400px] lg:h-[400px] bg-gray-300">
                </div>
                <p class="mt-4">They got to laying out the basic foundation and realized content and education was key in
                    bringing True
                    Speciality coffee too all</p>
            </section>

            <section class="flex flex-col justify-center items-center mt-10 text-base md:text-2xl text-center font-bold lg:w-1/2 m-auto">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>

                <p>Abu knew the right guy to help!
                    <span class="inline-flex items-baseline">
                                <img src="/img/coffee-1.jpeg" class="w-10 h-10 self-center rounded-full" alt="">
                            </span> <span class="underline">Troy</span> and Abu have been friends for 8yrs+
                    and Troy had spent those years in marketing and content</p>

                <div class="border-r border-black h-32 my-10"></div>

                <p>Overall Problem:
                    People have no idea
                    how quality is determined
                    in coffee but yet pay
                    ridiculous prices for their ignorance</p>
            </section>
            <section class="flex flex-col justify-center items-center mt-10 text-base md:text-2xl text-center font-bold lg:w-1/2 m-auto">
                <div class="border-r border-black h-32 mb-4 lg:my-10"></div>
                <p>2023</p>
                <p class="mt-4">ASIXTH was born with the concept
                    of bringing Cup of Excellence quality
                    and process to a much larger scale while educating consumers on affordability, typology, and quality of
                    coffee</p>
                <div class="mt-6 w-full h-[300px] lg:w-full lg:h-[400px] bg-gray-300">
                </div>
            </section>

            <section class="flex flex-col justify-center items-center mt-10 text-2xl">
                <div class="rounded-sm border-l-4 border-t-4 border-black p-2 rotate-45"></div>
                <div class="border-r-4 border-black h-32 -mt-5"></div>
                <button class="mt-4 text-sm font-bold" @click.prevent="scrollToUp">BACK TO TOP</button>
            </section>
        </div>

    </BaseLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import BaseLayout from '@/Layouts/BaseLayout.vue';

function scrollToUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style>
html {
    scroll-behavior: smooth;
}</style>