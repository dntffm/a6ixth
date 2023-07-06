<template>
    <BaseLayout>

        <Head title="Careers" />

        <section class="px-4 py-8 md:px-8 md:py-10 md:h-screen">
            <h1 class="text-2xl md:text-4xl font-neuton mb-4">Contact <span class="font-bebas">ASIXTH</span></h1>
            <p class="font-cantarell text-black/70 text-sm leading-loose">
                We are here to assist with all your needs and requests
            </p>

            <div class="mt-4 flex flex-col gap-2 md:gap-5 md:w-[60%]">
                <a v-for="content in contents" :href="content.link" target="_blank">
                    <div class="w-full border-black/70 border px-4 py-3 flex items-center">
                        <div class="w-[85%]">
                            <h3 class="font-neuton text-lg mb-2">{{ content.title }}</h3>
                            <div class="flex items-center">
                                <p class="font-cantarell text-sm text-black/70 leading-loose">{{ content.desc }}</p>
                            </div>
                        </div>
                        <div class="w-[15%]">
                            <ArrowRightIcon class="w-6 h-6 text-gray-400 font-bold m-auto" />
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </BaseLayout>
</template>

<script setup>
import { Head, router } from '@inertiajs/vue3';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

let contents = [
    {
        title: 'Typology Consultation',
        desc: 'For personalized advice, we invite you to arrange a video appointment with an ASIXTH consultant',
        link: 'https://calendly.com/asixth/30min'
    },
    {
        title: 'Speak with Concierge',
        desc: 'We welcome you to contacts us via live concierge hours of operation: Monday - Sunday ,24hrs EST',
        link: 'sms:+19299005608&body=Hi, Concierge'
    },
    {
        title: 'Press  Inquiries ',
        desc: 'For all press related questions and or coverage please reach out via email to press@asixth.com',
        link: 'mailto:press@asixth.com'
    },
]
</script>
