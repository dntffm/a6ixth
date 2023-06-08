<template>
    <div class="min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 w-full">
        <!-- first screen -->
        <div class="w-full px-3 py-4">
            <div class="p-5 h-full flex flex-col">
                <div class="w-full lg:w-4/5">
                    <Transition name="swipe" mode="out-in" appear>
                        <div class="mb-10">
                            <h1 class="font-neuton text-6xl mb-2">Search with
                                <span id="asixth" class="font-bebas"></span>
                            </h1>
                            <p class="font-cantarell text-medium">Where would you like your order sent?</p>
                        </div>
                    </Transition>
                    <div class="relative mt-10 w-3/5">
                        <button @click="search(searchQuery)"
                            :class="`${searchQuery === '' ? 'cursor-not-allowed' : 'cursor-pointer'} absolute inset-y-0 right-0 flex items-center pr-3`"
                            :disabled="searchQuery === ''">
                            <ArrowRightIcon class="h-5 w-5 text-gray-400 font-bold" />
                        </button>
                        <input v-model="searchQuery" @focus="searchFocus" id="searchInput"
                            class="block w-full p-4 pl-10 text-sm border-b border-gray-400 bg-background outline-0"
                            placeholder="Search" required>
                    </div>
                    
                    <div class="font-cantarell text-medium mt-10" v-if="product_total > 0">
                        <h2 class=" text-medium font-cantarell mb-2 fade-item">{{ suggestions.length > 0 ? 'Did you mean :' :
                            'Suggested :' }}</h2>
                        <ul class="font-neuton text-2xl text-gray-600" v-if="suggestions.length === 0">
                            <li class="mb-2 fade-item"><button @click="search('common')">Commons</button></li>
                            <li class="mb-2 fade-item"><button @click="search('heritage')">Heritages</button></li>
                            <li class="mb-2 fade-item"><button @click="search('purpose')">Purpose</button></li>
                            <li class="mb-2 fade-item"><button @click="search('pillar')">Pillar</button></li>
                            <li class="mb-2 fade-item"><button @click="search('fraction')">Fractions</button></li>
                        </ul>

                        <ul class="font-neuton text-2xl text-gray-600" v-else>
                            <li class="mb-2" v-for="suggestion in suggestions">
                                <button @click="search(suggestion.name)">{{ suggestion.name }}</button>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
        <Transition name="swipe" mode="out in">
            <div class="bg-bone w-full flex" v-if="!searchResultHidden">
                <div class="w-full lg:w-1/2 p-5">
                    <div class="mb-3 mt-10" v-for="product in products" v-if="products.length > 0">
                        <h2 class="font-cantarell text-medium text-gray-600 mb-2">{{ product.name }}’s Series</h2>
                        <ul class="font-cantarell">
                            <li v-for="item in product.items"
                                :class="`text-xl cursor-pointer hover:text-gray-600 ${item === productItemDetail ? 'underline' : ''}`">
                                <a @click="productItemDetail = item">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-3 mt-10" v-else>
                        <h2 class="font-cantarell text-2xl text-gray-600 mb-2">
                            Unfortunately, we could not find any
                            results for your search.
                        </h2>
                        <div class="mt-10">
                            <h2 class=" text-sm font-cantarell mb-2">Suggested:</h2>
                            <ul class="font-neuton text-xl text-gray-600">
                                <li class="mb-2"><button @click="search('common')">Commons</button></li>
                                <li class="mb-2"><button @click="search('heritage')">Heritages</button></li>
                                <li class="mb-2"><button @click="search('purpose')">Purpose</button></li>
                                <li class="mb-2"><button @click="search('pillar')">Pillar</button></li>
                                <li class="mb-2"><button @click="search('fraction')">Fractions</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Transition name="swipeup" mode="out in">
                    <div class="relative w-full lg:w-1/2 h-full bg-olive overflow-hidden" v-if="productItemDetail != null">
                        <div class="p-5">
                            <img class="w-4/5 m-auto mb-3" src="img/sample-product.png" alt="product">
                            <p class="font-neuton text-2xl mb-2">{{ productItemDetail.name }}</p>
                            <p class="font-cantarell text-gray-600">{{ productItemDetail.description }} </p>
                        </div>
                        <button
                            class="absolute bg-black bottom-0 left-0 w-full text-white font-cantarell font-bold p-5">Learn
                            More</button>
                    </div>
                </Transition>
            </div>
        </Transition>
    </div>
</template>

<script>
import BaseLayout from '../../Layouts/BaseLayout.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

export default {
    layout: BaseLayout,
    components: {
        ArrowRightIcon
    },
    props: {
        products: {
            type: Object,
            default: []
        },
        product_total: {
            type: Number,
            default: null
        },
        user: {
            type: Object,
            default: {}
        },
        suggestions: {
            type: Object,
            default: []
        }
    },
    data() {
        return {
            messageHidden: true,
            searchResultHidden: true,
            searchQuery: '',
            productItemDetail: null,
            suggestionHidden: false,
            unfortune: false,
        }
    },
    methods: {
        searchFocus() {
            this.messageHidden = false
            this.suggestionHidden = false
        },
        search(keyword) {
            if (keyword != null) this.searchQuery = keyword

            this.suggestionHidden = true
            this.productItemDetail = null
            this.$inertia.get(route('discover.index'), {
                search: keyword
            }, {
                replace: false,
                preserveState: true
            })

            if(this.products.length === 0) this.unfortune = true
            this.searchResultHidden = false
        }
    },
    mounted() {
        var items = document.getElementsByClassName("fade-item");
        for (let i = 0; i < items.length; ++i) {
            setTimeout(() => {
                items[i].classList.add('fadein')
            }, i * 100)
        }

        const searchInput = document.getElementById('searchInput')

        setTimeout(() => {
            searchInput.focus()
        }, 700)
    }
}
</script>

<style>
.swipe-enter-active {
    animation: go 2s;
}

.swipeup-enter-active {
animation: up 1s;
}

#asixth:before {
    content: 'ASIXTH';
    animation: change 1.5s;
}

.fade-item {
    transition: 1s all ease-in-out;
    transform: translateX(-100%);
}

.fadein {
    animation: fadeIn 0.9s 1;
    animation-fill-mode: forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes change {
    0% {
        content: 'A6IXTH';
    }

    100% {
        content: 'ASIXTH';
    }
}

@keyframes up {
    0%{
        top: 100%;
    }

    100% {
        top: 0;
    }
}

@keyframes go {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>