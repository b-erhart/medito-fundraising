<script setup lang="ts">
import { type Config } from '@/config'

defineProps<{ config: Config }>()
</script>

<template>
  <section id="rewards">
    <h2 class="mb-3 text-center text-2xl font-bold sm:text-left">Rewards</h2>
    <div class="flex flex-col gap-6">
      <template v-for="(reward, index) in config.rewardsSection.rewards" :key="index">
        <div
          class="flex flex-col gap-3 rounded-xl bg-gray-800 p-6 shadow ring-1 ring-gray-600 sm:flex-row sm:gap-6"
        >
          <div
            class="flex w-full flex-shrink-0 flex-grow-0 items-center sm:h-auto sm:w-[20%] sm:border-r sm:border-gray-600"
          >
            <p class="w-full text-center text-2xl font-bold text-green-500">
              {{ config.rewardsSection.currencySymbol }}{{ reward.amount }}
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-center text-lg font-medium sm:text-left">{{ reward.title }}</h3>
            <p class="text-center text-gray-200 sm:text-left">{{ reward.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped></style>
