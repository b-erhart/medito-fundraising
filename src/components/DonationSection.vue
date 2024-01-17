<template>
  <section class="flex flex-col gap-6 rounded-xl bg-gray-800 p-6 shadow ring-1 ring-gray-600">
    <div>
      <div class="mb-2 flex flex-row">
        <h3 class="w-fit flex-shrink-0 flex-grow-0 text-sm font-medium text-gray-300">Progress</h3>
        <span class="block w-full text-right text-sm font-medium text-gray-300"
          >{{ progress }}%</span
        >
      </div>
      <ProgressBar :moneyRaised="moneyRaised" :moneyGoal="moneyGoal" currency="USD" />
    </div>
    <div>
      <h3 class="mb-2 text-sm font-medium text-gray-300">Latest Donations</h3>
      <LatestDonations />
    </div>
    <div>
      <h3 class="mb-2 text-sm font-medium text-gray-300">Donate</h3>
      <DonationForm :paymentLinks="paymentLinks" />
    </div>
    <div>
      <h3 class="mb-2 text-sm font-medium text-gray-300">Rewards</h3>
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
import { computed, ref } from 'vue'

const props = defineProps<{
  moneyRaised: number
  moneyGoal: number
  currencySymbol: string
  paymentLinks: { currencyDescription: string; url: URL }[]
}>()

const progress = computed(() => +((props.moneyRaised / props.moneyGoal) * 100).toFixed(1))
</script>

<style scoped></style>
