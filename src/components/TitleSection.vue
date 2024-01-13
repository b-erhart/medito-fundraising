<script setup lang="ts">
const props = defineProps<{ title: string; shortDescription: string }>()
</script>

<template>
  <div class="heading">
    <h1>{{ props.title }}</h1>
    <p class="short-description">{{ shortDescription }}</p>
  </div>
</template>

<style scoped>
.heading {
  margin-bottom: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 0.7rem;
}

.short-description {
  text-align: center;
  font-size: 1.1rem;
}
</style>
