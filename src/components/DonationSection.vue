<template>
  <section class="flex flex-col gap-6 rounded-xl bg-gray-800 p-6 shadow ring-1 ring-gray-600">
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
      <p class="mb-2 text-sm font-medium text-gray-300">Rewards</p>
      <p class="mb-0 mt-0">
        Check out the
        <a href="#rewards" class="text-green-500 underline hover:text-green-600">rewards</a> you can
        receive for donating.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import DonationForm from '@/components/donation/DonationForm.vue'
import LatestDonations from '@/components/donation/LatestDonations.vue'
import ProgressBar from '@/components/donation/ProgressBar.vue'
import { config } from '@/config'
import { ref } from 'vue'

const paymentLinks = ref(config.donationSection.paymentLinks)
</script>

<style scoped></style>
