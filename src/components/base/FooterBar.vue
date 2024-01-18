<template>
  <footer class="border-base-700 mt-8 h-fit flex-shrink-0 flex-grow-0 border-t px-4 py-3">
    <div class="flex flex-col items-center gap-3 text-center md:mx-auto md:max-w-screen-lg">
      <a href="https://meditofoundation.org/" class="w-fit text-center">meditofoundation.org</a>
      <p v-html="content.footerText" class="text-base-300 text-center text-sm"></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { content } from '@/content'
</script>

<style scoped></style>
