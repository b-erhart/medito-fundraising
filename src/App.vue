<template>
  <HeaderBar />
  <main class="p-4 md:mx-auto md:max-w-screen-lg">
    <ThankYouPopup v-if="showSuccessMessage" />
    <div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
      <TitleSection />
      <DonationSection />
    </div>
    <QnaSection />
    <RewardsSection />
  </main>
  <FooterBar />
</template>

<script setup lang="ts">
import DonationSection from '@/components/DonationSection.vue'
import FooterBar from '@/components/base/FooterBar.vue'
import HeaderBar from '@/components/base/HeaderBar.vue'
import QnaSection from '@/components/QnaSection.vue'
import RewardsSection from '@/components/RewardsSection.vue'
import ThankYouPopup from './components/ThankYouPopup.vue'
import TitleSection from '@/components/TitleSection.vue'
import { content } from '@/content'
import { computed } from 'vue'

document.title = `Medito Fundraiser | ${content.titleSection.title}`

const showSuccessMessage = computed(() => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.has('success')
})
</script>

<style scoped></style>
