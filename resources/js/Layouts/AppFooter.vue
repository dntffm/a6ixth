<template>
    <footer class="relative bg-footer font-cantarell">
        <div class="w-full mx-auto px-4 py-3">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-4 py-5">
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Subscribe to <span
                            class="font-light">ASIXTH</span></h2>
                    <input class="w-full bg-footer mb-3" type="text" name="" id="" placeholder="Email address">
                    <div class="flex gap-2">
                        <input class="bg-footer" type="checkbox" name="" id="">
                        <p class="text-xs text-white">Subscribe to receive communications from ASIXTH
                            about our products and services. By subscribing, you
                            confirm you have read and accept our privacy policy</p>
                    </div>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Orders and Support</h2>
                    <ul class="text-white">
                        <li class="mb-3 hover:underline">
                            <a class="" href="mailto:communications@asixth.com">
                                Contact Us
                            </a>
                        </li>
                        <li class="mb-3 flex gap-2">Track Order <i>
                                <ArrowUpRightIcon class="font-bold h-4 w-4" />
                            </i> </li>
                        <li class="mb-3 flex gap-2">Shipping <i>
                                <ArrowUpRightIcon class="font-bold h-4 w-4" />
                            </i> </li>
                        <li class="mb-3 flex gap-2">FAQs <i>
                                <ArrowUpRightIcon class="font-bold h-4 w-4" />
                            </i> </li>
                        <li class="mb-3 hover:underline"> <a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Services</h2>
                    <ul class="text-white">
                        <li class="mb-3 hover:underline"> <a href="#">Typology</a></li>
                        <li class="mb-3 hover:underline"> <a href="#">Concierge</a></li>
                        <li class="mb-3 hover:underline"> <a href="#">Consultations</a></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Enquires</h2>
                    <ul class="text-white">
                        <li class="mb-3 hover:underline"> <a href="#">Press</a> </li>
                        <li class="mb-3 hover:underline"> <a href="#">Autonomy</a> </li>
                        <li class="mb-3 hover:underline"> <a href="#">Suggestions</a> </li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Our Commitment to Earth</h2>
                    <p class="text-xs text-white">All ASIXTH products and packaging are sustainably made.
                        Our Boxes and bags are made from recycled materials</p>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">About</h2>
                    <ul class="text-white">
                        <li class="mb-3 hover:underline"> <a href="#">Our Story</a> </li>
                        <li class="mb-3 hover:underline"> <a href="#">Careers</a> </li>
                        <li class="mb-3 hover:underline"> <a href="#">Privacy Policy</a> </li>
                        <li class="mb-3 hover:underline"> <a href="#">Cookies Policy</a> </li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Initiatives</h2>
                    <ul class="text-white">
                        <li class="mb-3"> <a href="#">Let's Collaborate!</a></li>
                        <li class="mb-3"> <a href="#">ASIXTH Made</a> </li>
                        <li class="mb-3"> <a href="#">Visuals</a></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-white font-bold mb-4 border-white border-b py-3">Social Media</h2>
                    <ul class="text-white">
                        <li class="mb-3"> <a href="#">Instagram</a> </li>
                        <li class="mb-3"> <a href="#">Twitter</a> </li>
                        <li class="mb-3"> <a href="#">LinkedIn</a></li>
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