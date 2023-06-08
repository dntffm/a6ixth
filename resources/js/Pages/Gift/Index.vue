<script setup>
import AppHeader from '../../Layouts/AppHeader.vue';
import AsixthBlackButton from '../../Components/AsixthBlackButton.vue'
import { ClipboardIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

let envelopeOpen = ref(false)
let showCoupon = ref(false)

function spillCoupon() {
    console.log('copp');
    envelopeOpen.value = !envelopeOpen
    setTimeout(() => {
        showCoupon.value = true
    }, 500)
}

function copyCodeToClipboard() {
    let redeemcode = document.getElementById('redeem_code')
    console.log(redeemcode.textContent);
    
    navigator.clipboard.writeText(redeemcode.value)
}

</script>

<template>
    <section class="flex flex-col h-screen">
        <AppHeader class="bg-background border-b border-gray-400 font-cantarell text-gray-400" />

        <div class="w-full bg-background flex flex-grow">
            <Transition v-if="showCoupon">
                <div class="w-full lg:w-1/4 m-auto">
                    <div class="p-5 bg-[#D9D9D9] flex flex-col gap-4 justify-center items-center rounded-lg">
                        <div class="bg-black w-full h-[200px] rounded-lg"></div>
                        <p class="text-[#63686E]">Giftcard Value</p>
                        <p class="text-xl font-bold tracking-wider">FREE COFFEE BEANS</p>
    
                        <p class="text-[#63686E]">Giftcard Code</p>
                        <div class="flex flex-row w-full border-dashed border border-[#757575] text-black font-bold p-5 rounded-lg">
                            <span class="self-center ml-auto" id="redeem_code">
                                qwertyufghjk23bnnnnngri
                            </span>
                            <ClipboardIcon @click="copyCodeToClipboard" class="text-[#757575] w-7 h-7 ml-auto"/>
                        </div>
    
                        <AsixthBlackButton class="rounded-lg w-full">Redeem My Voucher</AsixthBlackButton>
                    </div>
                </div>
            </Transition>
            <div class="flex flex-col justify-center items-center text-center lg:w-1/2 m-auto" v-else>
                <div class="envelope-container mt-10 mb-10">
                    <input v-model="envelopeOpen" id="flap" type="checkbox" disabled>
                    <label class="flap" for="flap"></label>
                    <div class="envelope-back"></div>
                    <div class="card flex flex-col">
                        <div class="black w-full"></div>
                        <small>Giftcard Value</small>
                        <p>FREE COFFEE BEANS</p>
    
                        <p>Giftcard Code</p>
                        <div>
                            qwertyufghjk23bnnnnngri
                        </div>
    
                        <AsixthBlackButton>Redeem My Voucher</AsixthBlackButton>
                    </div>
                    <div class="card-front"></div>
                </div>
                <h1 class="text-4xl font-neuton mb-10">You’ve received A Gift</h1>
                <p class="font-cantarell mb-10">Wow, congratulations! It appears that you've received a delightful surprise
                    from
                    your coffee companions. Let's unveil the contents and prepare to be amazed by what awaits you.</p>
    
                <AsixthBlackButton @click="spillCoupon" class="w-[400px] py-4 px-6">Click to reveal the
                    gift</AsixthBlackButton>
            </div>
    
        </div>
    </section>
</template>

<style>
input#flap {
    display: none;
}

.envelope-container {
    position: relative;
}

.envelope-back {
    position: relative;
    width: 320px;
    height: 200px;
    background-color: #9E9797;
}

.card {
    position: absolute;
    width: 300px;
    height: 180px;
    background-color: white;
    top: 10px;
    left: 10px;
    transition: .3s;
    z-index: 1;
    cursor: pointer;
}

.card-front {
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 100px solid #a29b9b;
    border-left: 160px solid transparent;
    border-right: 160px solid transparent;
    top: 100px;
    left: 0;
    z-index: 3;
}

.card-front:before,
.card-front:after {
    content: "";
    position: absolute;
    border-bottom: 100px solid transparent;
    border-top: 100px solid transparent;
    height: 0;
    width: 0;
}

.card-front:before {
    border-left: 161px solid transparent;
    border-right: 161px solid #a29b9b;
    top: -100px;
    left: -162px;
}

.card-front:after {
    border-right: 161px solid transparent;
    border-left: 161px solid #A3A1A1;
    top: -100px;
    left: -160px;
}

.flap {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 110px solid #9E9797;
    border-left: 160px solid transparent;
    border-right: 160px solid transparent;
    top: 0;
    left: 0;
    cursor: pointer;
    transition: .3s;
    transform-origin: top;
    z-index: 4;
}

#flap:checked+.flap {
    transform: rotateX(180deg);
}

#flap:checked~.card-front {
    z-index: 7;
}

#flap:checked~.card {
    z-index: 4;
    transform: translateY(-60px);
}
</style>