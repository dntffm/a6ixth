<template>
    <main class="flex w-full vfh md:h-screen bg-[url('/img/faces.jpeg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute top-0 left-0 w-screen h-screen text-white gap-6 bg-black/40 backdrop-blur-md z-50 flex flex-col items-center justify-center p-16 md:p-4 text-center" v-if="gainAccessIsFinish">
            <h1 class="font-neuton text-2xl md:text-2xl">All Set, Thank You!!</h1>
            <p class="font-cantarell text-sm md:text-sm w-64">We will reach out to you soon!</p>
            <a
                href="/"
                class="flex items-center cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold p-6 h-14 md:h-14 font-cantarell transition hover:duration-100">
                Back to Homepage
            </a>
        </div>
        <div class="flex bg-black/60 vfh md:h-screen w-screen absolute"></div>
        <div class="flex bg-black/50 backdrop-blur-md vfh md:h-screen w-screen absolute z-20 transition ease-in-out delay-150 duration-300" v-if="showForm">
            <div class="text-white my-auto mx-auto md:mr-36 md:mb-36 w-full md:w-1/2 lg:w-1/4 p-4 font-cantarell">
                <OnClickOutside @trigger="close">
                    <input
                        v-model="email"
                        @keypress="submitFace"
                        class="w-full border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white mb-4 text-xl p-4 font-cantarell bg-transparent"
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter Your Email"
                        required
                    />
                    <p class="text-sm text-white my-4">We release episodes on a bi-weekly cycle. You just missed our most recent drop. Do not worry, enter your email and we will personally deliver it directly to your email and notify you on all future faces drops</p>
                    <button
                    :disabled="email === ''"
                    @click="storeInfoFaces"
                        class="disabled:cursor-not-allowed cursor-pointer bg-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-14 w-1/2 m-auto transition hover:duration-100">Submit</button>
                </OnClickOutside>
            </div>
        </div>
        <AppHeaderTransparent class="fixed bg-transparent w-full text-white font-cantarell z-10" />

        <button @click.prevent="showForm = true" class="play w-10 h-10 rounded-full flex items-center justify-center mx-auto my-auto z-10">
            <img src="/img/play.png" alt="play" class="w-6">
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
import { useForm } from '@inertiajs/vue3';
import { OnClickOutside } from '@vueuse/components';
import { ref } from 'vue';

let showForm = ref(false)
let email = ref('')
let gainAccessIsFinish = ref(false)

function close() {
    showForm.value = false
}

function storeInfoFaces(){
    console.log(email);
    const form = useForm({
        email: email.value
    })

    form.post(route('faces.submit'), {
        onFinish: () => {
            gainAccessIsFinish.value = true
        }
    })
}

function submitFace(e) {
    if(e.key === "Enter") storeInfoFaces()
}
</script>

<style>
.play {
    animation: shadow-pulse 1s infinite;
}

.play:hover {
    animation: none;
    background-color: transparent;
}
@keyframes shadow-pulse
{
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);
  }
}
</style>
