<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue'
import ProgressSection from '@/components/ProgressSection.vue'
import QnaSection from '@/components/QnaSection.vue'
import DonationSection from '@/components/DonationSection.vue'

import { config } from '@/config'
</script>

<template>
  <header
    class="flex h-16 flex-shrink-0 flex-row items-center justify-center gap-2 border-b border-b-gray-700"
  >
    <img src="@/assets/medito-logo.png" alt="Medito logo" class="h-12" />
    <div class="flex flex-col align-middle">
      <span class="text-2xl font-bold">medito</span>
      <h1 class="gap -mt-2 text-sm">FUNDRAISER</h1>
    </div>
  </header>
  <main class="mt-8 p-4 md:mx-auto md:max-w-screen-lg">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <TitleSection
        :title="config.titleSection.title"
        :shortDescription="config.titleSection.shortDescription"
      >
      </TitleSection>
      <ProgressSection
        :moneyRaised="7000.43"
        :moneyGoal="15000"
        currencySymbol="$"
        :paymentLinks="config.donationSection.paymentLinks"
      />
    </div>
    <hr class="mb-12 mt-12 border border-gray-600" />
    <QnaSection :config="config" />
    <DonationSection :config="config" />
  </main>
</template>

<style></style>
