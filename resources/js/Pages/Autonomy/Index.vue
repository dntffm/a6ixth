<template>
    <BaseLayout>

        <Head title="Autonomy" />

        <div class="px-4 py-8 md:px-8 md:py-10 md:h-screen">
            <h1 class="text-2xl md:text-4xl font-neuton mb-4">Autonomy</h1>
            <p class="font-cantarell text-black/70 text-sm leading-loose">
                We are expanding and looking for roasters to partner
                with. Join our growing networkof skilled artisan
                roasters who care about brining True Speciality®
                quality coffee to all
            </p>

            <section class="mt-4">
                <div class="grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 lg:w-5/6 gap-2 md:gap-5">
                    <InputText v-model="form.name" class="focus:ring-black focus:ring-1 focus:ring-offset-black focus:border-black"
                        placeholder="Enter Your Name" />
                    <InputText v-model="form.email" class="focus:ring-black focus:ring-1 focus:ring-offset-black focus:border-black"
                        placeholder="Enter Your Email Address" />
                    <InputText v-model="form.business_name" class="focus:ring-black focus:ring-1 focus:ring-offset-black focus:border-black"
                        placeholder="Enter Your Business Name" />
                    <div class="relative">
                        <OnClickOutside @trigger="showOptions = false">
                            <InputText id="locationInput" v-model="search" class="focus:ring-black focus:ring-1 focus:ring-offset-black focus:border-black"
                            placeholder="Where Are You Located" v-if="showOptions"/>
                            <button
                                :class="`flex items-center text-left p-4 text-xl ${showOptions ? 'text-black border-black' : 'text-black/50 border-black/50'} border bg-transparent w-full h-full font-cantarell`"
                                @click="show" v-else>
                                {{ form.state ? form.state : 'Where Are You Located ?' }}
                                <ChevronDownIcon class="ml-auto w-5 h-5" v-if="!showOptions" />
                                <ChevronUpIcon class="ml-auto w-5 h-5" v-else />
                            </button>
                            
                            <div class="md:absolute border-black border border-t-0 bg-transparent w-full" v-if="showOptions">
                                <div class="max-h-[120px] overflow-y-scroll">
                                    <div @click="chooseState(state)"
                                        class="hover:bg-[#433F32] hover:text-white cursor-pointer p-4 font-cantarell"
                                        v-for="state in states">{{ state }}</div>
                                </div>
                            </div>
                        </OnClickOutside>
                    </div>
                </div>
                <AsixthBlackButton @click="submit" class="w-3/4 md:w-1/4 lg:w-1/6 mt-4 h-14 md:h-16">Submit Autonomy</AsixthBlackButton>
            </section>

            <section class="mt-10 grid grid-cols-1 md:grid-cols-2">
                <div class="py-4 md:pr-10 border-b-black border-b md:border-b-0 md:border-r md:border-r-black">
                    <h2 class="text-2xl font-neuton mb-4">What Are the Requirements? </h2>
                    <p class="font-cantarell text-black/70 text-sm leading-loose">
                        We have an extensive process but for the basic level
                        of partnership you will need a Loring roasting
                        machine, loading dock ,and at least 5 years or more
                        experience roasting.
                    </p>
                </div>

                <div class="py-4 md:px-10">
                    <h2 class="text-2xl font-neuton mb-4">Why should I Join?</h2>
                    <p class="font-cantarell text-black/70 text-sm leading-loose">
                        If you have 2-4hrs down time in your roasting cycle
                        and want to join the movement in bringing True
                        Specialty coffee to all
                    </p>
                </div>
            </section>
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/Layouts/BaseLayout.vue';
import InputText from '@/Components/Asixth/InputText.vue';
import AsixthBlackButton from '@/Components/AsixthBlackButton.vue'
import Dropdown from '../../Components/Asixth/Dropdown.vue';
import { OnClickOutside } from '@vueuse/components';

import { Head, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
let showOptions = ref(false)
let search = ref('')

let form = useForm({
    'name': null,
    'business_name': null,
    'email': null,
    'state': null
})

function show() {
    showOptions.value = !showOptions.value
    let inp = document.getElementById('locationInput')
    console.log(inp);
}
let location = ref('')
let statesRaw = ref([
"Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"District of Columbia",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"
]);

let states = ref([
"Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"District of Columbia",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"
]);
watch(search, (newValue, oldValue) => {
    let newStates = statesRaw.value.filter(item => item.toLowerCase().indexOf(newValue) > -1)
    states.value = newStates
})

function chooseState(state) {
    showOptions.value = false
    form.state = state
}

function submit() {
    form.post(route('autonomy.submit'), {
        onFinish: () => {
            alert('Autonomy has been submitted')
            form.reset()
        }
    })
}
</script>