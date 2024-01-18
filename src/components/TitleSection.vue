<template>
  <section>
    <h1 class="mb-5 text-center text-3xl font-bold md:text-left">{{ title }}</h1>
    <p v-html="description" class="text"></p>
  </section>
</template>

<script setup lang="ts">
import { content } from '@/content'

const title = content.titleSection.title
const description = content.titleSection.description
</script>

<style scoped></style>
