<template>
  <section>
    <h1 class="mb-5 text-center text-3xl font-bold md:text-left">{{ title }}</h1>
    <p v-html="description" class="text"></p>
  </section>
</template>

<script setup lang="ts">
import { config } from '@/config'

const title = config.titleSection.title
const description = config.titleSection.description
</script>

<style scoped></style>
