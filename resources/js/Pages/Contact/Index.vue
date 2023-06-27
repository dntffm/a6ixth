<template>
    <BaseLayout>

        <Head title="Careers" />

        <section class="px-4 py-8 md:px-8 md:py-10">
            <h1 class="text-2xl md:text-4xl font-neuton mb-4">Contact <span class="font-bebas">ASIXTH</span></h1>
            <p class="font-cantarell text-black/70 text-sm leading-loose">
                We are here to assist with all your needs and requests
            </p>

            <div class="mt-4 flex flex-col gap-2 md:gap-5 md:w-[60%]">
                <div class="w-full border-black/70 border px-4 py-3 flex items-center" v-for="i in 3">
                    <div class="w-[85%]">
                        <h3 class="font-neuton text-lg mb-2">Typology Consultation</h3>
                        <div class="flex items-center">
                            <p class="font-cantarell text-sm text-black/70 leading-loose">For personalized advice, we invite
                                you to arrange a video
                                appointment with an ASIXTH consultant</p>
                        </div>
                    </div>
                    <div class="w-[15%]">
                        <ArrowRightIcon class="w-6 h-6 text-gray-400 font-bold m-auto" />
                    </div>
                </div>
            </div>
        </section>
    </BaseLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
</script>