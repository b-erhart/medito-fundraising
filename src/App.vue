<template>
  <HeaderBar />
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
  <FooterBar />
</template>

<script setup lang="ts">
import DonationSection from '@/components/DonationSection.vue'
import FooterBar from '@/components/base/FooterBar.vue'
import HeaderBar from '@/components/base/HeaderBar.vue'
import QnaSection from '@/components/QnaSection.vue'
import RewardsSection from '@/components/RewardsSection.vue'
import TitleSection from '@/components/TitleSection.vue'

import { config } from '@/config'
</script>

<style scoped></style>
