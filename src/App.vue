<script setup lang="ts">
import DonationSection from '@/components/DonationSection.vue'
import QnaSection from '@/components/QnaSection.vue'
import RewardsSection from '@/components/RewardsSection.vue'
import TitleSection from '@/components/TitleSection.vue'

import { config } from '@/config'
</script>

<template>
  <header
    class="mb-8 flex h-16 flex-shrink-0 flex-grow-0 flex-row items-center justify-center gap-2 border-b border-b-gray-700"
  >
    <img src="@/assets/medito-logo.png" alt="Medito logo" class="h-12" />
    <div class="flex flex-col align-middle">
      <span class="text-2xl font-bold">medito</span>
      <h1 class="gap -mt-2 text-sm">FUNDRAISER</h1>
    </div>
  </header>
  <main class="p-4 md:mx-auto md:max-w-screen-lg">
    <div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
      <TitleSection
        :title="config.titleSection.title"
        :shortDescription="config.titleSection.shortDescription"
      >
      </TitleSection>
      <DonationSection
        :moneyRaised="7000.43"
        :moneyGoal="15000"
        currencySymbol="$"
        :paymentLinks="config.donationSection.paymentLinks"
      />
    </div>
    <QnaSection :config="config" />
    <RewardsSection :config="config" />
  </main>
  <footer class="mt-8 h-fit flex-shrink-0 flex-grow-0 border-t border-gray-700 px-4 py-3">
    <div class="flex flex-col items-center gap-3 text-center md:mx-auto md:max-w-screen-lg">
      <a
        href="https://meditofoundation.org/"
        class="w-fit text-green-500 underline hover:text-green-600"
        >meditofoundation.org</a
      >
      <p class="text-center text-sm text-gray-300">
        Medito Foundation or in Dutch, Stichting Medito Non-profit organisation registered in the
        Netherlands 🇳🇱 hi@meditofoundation.org - KvK-nummer: 75284251 - RSIN: 860222627
      </p>
    </div>
  </footer>
</template>

<style></style>
