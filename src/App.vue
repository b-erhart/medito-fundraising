<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue'
import ProgressSection from '@/components/ProgressSection.vue'
import QnaSection from '@/components/QnaSection.vue'
import DonationSection from '@/components/DonationSection.vue'

import Divider from 'primevue/divider'

import { config } from '@/config'
</script>

<template>
  <header class="card">
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
  </header>
  <Divider />
  <main>
    <QnaSection :config="config" />
    <Divider />
    <DonationSection :config="config" />
  </main>
</template>

<style>
body {
  background-color: var(--surface-ground);
}

header,
main,
footer {
  max-width: 768px;
  margin: 0 auto;
}
</style>
