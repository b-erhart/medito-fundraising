<template>
  <section>
    <h1 class="mb-5 text-center text-3xl font-bold md:text-left">{{ title }}</h1>
    <p v-html="description" class="text"></p>
  </section>
</template>

<script setup lang="ts">
import { config } from '@/config'
import { ref } from 'vue'

const title = ref(config.titleSection.title)
const description = ref(config.titleSection.description)
</script>

<style scoped></style>
