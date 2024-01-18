<template>
  <section class="bg-base-800 ring-base-600 flex flex-col gap-6 rounded-xl p-6 shadow ring-1">
    <div>
      <ProgressBar />
    </div>
    <div>
      <LatestDonations />
    </div>
    <div>
      <DonationForm :paymentLinks="paymentLinks" />
    </div>
    <div>
      <p class="text-base-300 mb-2 text-sm font-medium">Rewards</p>
      <p class="mb-0 mt-0">
        Check out the <a href="#rewards">rewards</a> you can receive for donating.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import DonationForm from '@/components/donation/DonationForm.vue'
import LatestDonations from '@/components/donation/LatestDonations.vue'
import ProgressBar from '@/components/donation/ProgressBar.vue'
import { content } from '@/content'

const paymentLinks = content.donationSection.paymentLinks
</script>

<style scoped></style>
