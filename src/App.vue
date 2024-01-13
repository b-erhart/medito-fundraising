<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue'
import ProgressSection from '@/components/ProgressSection.vue'
import QnaSection from '@/components/QnaSection.vue'

import Divider from 'primevue/divider'

import { config } from '@/config'
</script>

<template>
  <header class="card">
    <TitleSection title="Our Fundrasing Campaign"
      shortDescription="This is just a simple exemple for a fundraising campaign. It doesn't really do anything, except showing how a campaign might look.">
    </TitleSection>
    <ProgressSection :moneyRaised="70" :moneyGoal="150" currencySymbol="$" />
  </header>
  <Divider />
  <main>
    <QnaSection :config="config" />
  </main>
</template>

<style scoped>
header,
main,
footer {
  max-width: 768px;
  margin: 0 auto;
}
</style>
