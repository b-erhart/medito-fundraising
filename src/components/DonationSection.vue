<template>
  <section class="flex flex-col gap-6 rounded-xl bg-gray-800 p-6 shadow ring-1 ring-gray-600">
    <div>
      <div class="mb-2 flex flex-row">
        <span class="w-fit flex-shrink-0 flex-grow-0 text-sm font-medium text-gray-300"
          >Progress</span
        >
        <span class="block w-full text-right text-sm font-medium text-gray-300"
          >{{ progress }}%</span
        >
      </div>
      <ProgressBar :moneyRaised="moneyRaised" :moneyGoal="moneyGoal" currency="USD" />
    </div>
    <div>
      <span class="mb-2 text-sm font-medium text-gray-300">Latest Donations</span>
      <LatestDonations />
    </div>
    <div>
      <span class="mb-2 text-sm font-medium text-gray-300">Donate</span>
      <DonationForm :paymentLinks="paymentLinks" />
    </div>
    <div>
      <span class="mb-2 text-sm font-medium text-gray-300">Rewards</span>
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
import { computed } from 'vue'

const props = defineProps<{
  moneyRaised: number
  moneyGoal: number
  currencySymbol: string
  paymentLinks: { currencyDescription: string; url: string }[]
}>()

const progress = computed(() => +((props.moneyRaised / props.moneyGoal) * 100).toFixed(1))
</script>

<style scoped></style>
