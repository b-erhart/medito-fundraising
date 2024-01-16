<script setup lang="ts">
const props = defineProps<{ title: string; shortDescription: string }>()
</script>

<template>
  <div class="heading">
    <h1 class="mb-5 text-center text-3xl font-bold md:text-left">{{ props.title }}</h1>
    <p>{{ shortDescription }}</p>
  </div>
</template>

<style scoped></style>
