<template>
    <input
        class="w-full text-xl p-4 font-cantarell bg-transparent"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>