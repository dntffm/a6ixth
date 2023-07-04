<template>
    <section class="bg-black h-screen w-screen text-white flex flex-col justify-center items-center gap-6 text-center">
        <h1 class="font-neuton text-2xl md:text-2xl">{{ title }}</h1>
        <p class="font-cantarell text-sm md:text-sm w-64">{{ description }}</p>
        <a
            href="/"
            class="cursor-pointer bg-white border border-white text-black h-14 flex items-center hover:bg-black hover:text-white font-bold p-6 font-cantarell transition hover:duration-100">
            Back to Homepage
        </a>
    </section>
</template>

<script>

export default {
    props: {
        status: {
            type: Number,
            default: 404
        }
    },
    computed: {
        title() {
            return {
                404: '404 Page Not Found'
            }[this.status]
        },
        description() {
            return {
                404: 'Looks like nothing is here. We have not quite brewed this section yet, come back again later'
            }[this.status]
        },
    }
}
</script>
