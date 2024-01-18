<template>
  <div
    class="ring-base-600 bg-accent-900 mb-6 w-full rounded-xl p-3 text-center font-medium shadow ring-1 sm:flex-row"
  >
    <p>{{ content.thankYouMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { content } from '@/content'
</script>

<style scoped></style>
