<template>
    <div>
        {{ user }}
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: null
        }
    }
}
</script>