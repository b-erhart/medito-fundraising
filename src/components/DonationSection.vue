<script setup lang="ts">
import Card from 'primevue/card'
import { ref } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import { type Config } from '@/config'

defineProps<{ config: Config }>()
</script>

<template>
  <section>
    <h2>Rewards</h2>
    <div class="rewards">
      <Card v-for="reward in config.rewardsSection.rewards" :key="reward.title">
        <template #title>{{ reward.title }}</template>
        <template #content>
          {{ config.rewardsSection.currencySymbol }} {{ reward.amount }}
        </template>
        <template #footer>
          {{ reward.description }}
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.rewards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

:deep(.p-card) {
  max-width: 15rem;
}

:deep(.p-card-body) {
  text-align: center;
}

:deep(.p-card-content) {
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-color);
}
</style>
