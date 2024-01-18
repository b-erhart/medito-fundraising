<template>
  <section id="rewards">
    <h2 class="mb-3 text-center text-2xl font-bold sm:text-left">Rewards</h2>
    <div class="flex flex-col gap-5">
      <template v-for="reward in rewards" :key="JSON.stringify(reward)">
        <div
          class="bg-base-800 ring-base-600 flex flex-col gap-3 rounded-xl p-6 shadow ring-1 sm:flex-row sm:gap-6"
        >
          <div
            class="sm:border-base-600 flex w-full flex-shrink-0 flex-grow-0 items-center sm:h-auto sm:w-[20%] sm:border-r"
          >
            <p class="text-accent-500 w-full text-center text-2xl font-bold">
              {{ reward.amount }}
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-center text-lg font-medium sm:text-left">{{ reward.title }}</h3>
            <p class="text-base-300 text-center sm:text-left">{{ reward.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { content } from '@/content'

const rewards = content.rewardsSection.rewards
</script>

<style scoped></style>
