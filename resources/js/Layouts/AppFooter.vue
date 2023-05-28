<template>
    <footer class="bg-footer font-cantarell z-50">
        <div class="w-full mx-auto max-w-screen-xl px-4 py-3">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-4 py-5">
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Subscribe to <span class="font-light">A6IXTH</span></h2>
                    <input class="w-full bg-footer mb-3" type="text" name="" id="" placeholder="Email address">
                    <div class="flex gap-2">
                        <input class="bg-footer" type="checkbox" name="" id="">
                        <p class="text-xs text-white">Subscribe to receive communications from A6IXTH
                            about our products and services. By subscribing, you
                            confirm you have read and accept our privacy policy</p>
                    </div>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Orders and Support</h2>
                    <ul class="text-white">
                        <li class="mb-3">Contact Us</li>
                        <li class="mb-3 flex gap-2">Track Order <i><ArrowUpRightIcon class="font-bold h-4 w-4"/></i> </li>
                        <li class="mb-3 flex gap-2">Shipping  <i><ArrowUpRightIcon class="font-bold h-4 w-4"/></i> </li>
                        <li class="mb-3 flex gap-2">FAQs  <i><ArrowUpRightIcon class="font-bold h-4 w-4"/></i> </li>
                        <li class="mb-3">Terms and Conditions</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Services</h2>
                    <ul class="text-white">
                        <li class="mb-3">Typology</li>
                        <li class="mb-3">Concierge</li>
                        <li class="mb-3">Consultations</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Enquires</h2>
                    <ul class="text-white">
                        <li class="mb-3">Press</li>
                        <li class="mb-3">Autonomy</li>
                        <li class="mb-3">Suggestions</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Our Commitment to Earth</h2>
                    <p class="text-xs text-white">All A6IXTH products and packaging are sustainably made.
                        Our Boxes and bags are made from recycled materials</p>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">About</h2>
                    <ul class="text-white">
                        <li class="mb-3">Our Story</li>
                        <li class="mb-3">Careers</li>
                        <li class="mb-3">Privacy Policy</li>
                        <li class="mb-3">Cookies Policy</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Initiatives</h2>
                    <ul class="text-white">
                        <li class="mb-3">Let's Collaborate!</li>
                        <li class="mb-3">A6IXTH Made</li>
                        <li class="mb-3">Visuals</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Social Media</h2>
                    <ul class="text-white">
                        <li class="mb-3">Instagram</li>
                        <li class="mb-3">Twitter</li>
                        <li class="mb-3">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'

export default {
    name: 'AppFooter',
    components: {
        ArrowUpRightIcon
    }
}
</script>