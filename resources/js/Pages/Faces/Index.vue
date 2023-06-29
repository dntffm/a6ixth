<template>
    <main class="flex w-full h-screen bg-[url('/img/faces.jpeg')] bg-center bg-no-repeat bg-cover">
        <div class="flex bg-black/60 h-screen w-screen absolute"></div>
        <div class="flex bg-black/50 backdrop-blur-md h-screen w-screen absolute z-20 transition ease-in-out delay-150 duration-300" v-if="showForm">
            <div class="text-white text-6xl ml-auto mt-auto md:mr-36 md:mb-36 w-full md:w-1/2 lg:w-1/4 p-4 font-cantarell">
                <OnClickOutside @trigger="close">
                    <input 
                        v-model="email"
                        class="w-full border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white mb-4 text-xl p-4 font-cantarell bg-transparent"
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Enter Your Email" 
                        required
                    />
                </OnClickOutside>
                <p class="text-sm text-white my-4">We release episodes on a bi-weekly cycle. You just missed our most recent drop. Do not worry, enter your email and we will personally deliver it directly to your email and notify you on all future faces drops</p>
            </div>
        </div>
        <AppHeaderTransparent class="fixed bg-transparent w-full text-white font-cantarell z-10" />

        <button @click.prevent="showForm = true" class="mx-auto my-auto z-10">
            <img src="/img/play.png" alt="play">
        </button>
        
        <div class="absolute bottom-24 md:bottom-36 w-full px-4">
            <div class="flex flex-col items-center justify-center gap-2">
                <h1
                    class="text-[#E1DCC7] text-5xl md:text-7xl font-averia mb-4 md:after:top-5">
                    Faces</h1>
                <p class="text-base md:text-xl text-white font-cantarell md:p-0 text-center md:w-1/2">Coffee lovers bare many faces. This is
                    our collection of their stories and how coffee influences
                    their lives, craft, and hobbies</p>
            </div>
        </div>


    </main>
</template>

<script setup>
import AppHeaderTransparent from '@/Layouts/AppHeaderTransparent.vue';
import { OnClickOutside } from '@vueuse/components';
import { ref } from 'vue';

let showForm = ref(false)

function close() {
    showForm.value = false
}
</script>