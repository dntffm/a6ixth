<template>
    <BaseLayout>

        <Head title="Careers" />

        <section class="px-4 py-8 md:px-8 md:py-10 md:h-screen">
            <h1 class="text-2xl md:text-4xl font-neuton mb-4">Become <span class="font-bebas">ASIXTH</span></h1>
            <p class="font-cantarell text-black/70 text-sm leading-loose">
                We current hiring for these roles. Join us in bringing
                better quality standards to the coffee industry
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
                            <ArrowRightIcon class="w-6 h-6 text-gray-400 font-bold m-auto"/>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </BaseLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

let contents = [
    {
        title: 'Founding Engineer',
        desc: 'We are seeking a talented and experienced founding software engineer to join our team and revolutionize the coffee industry',
        link: 'https://asixth-careers.notion.site/Founding-Engineer-3c97af41d92546acbfc0da8dc11f3f2b?pvs=4'
    },
    {
        title: 'Customer Relations',
        desc: 'As a key member of our company, you will be responsible for building and nurturing strong relationships with our customers, ensuring their satisfaction and loyalty',
        link: 'https://asixth-careers.notion.site/Customer-Relations-3742c7e741134c0a9bed0aa57ddf9428?pvs=4'
    },
    {
        title: 'Create Your own Role',
        desc: 'We are always looking for talent individuals to join our team. If you believe you have a unique way to help us please reach out to communications@asixth.com',
        link: 'https://asixth-careers.notion.site/Create-Your-Own-Role-430b5ad80f8442e3a0846c53fc93f9d5?pvs=4'
    },
]
</script>
