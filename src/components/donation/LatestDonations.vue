<template>
  <div class="rounded-lg bg-gray-900 p-3 shadow ring-1 ring-gray-600">
    <template v-for="(donation, index) in latestDonations" :key="index">
      <p>
        <span class="font-medium text-green-500">${{ donation.amount }}</span> by
        {{ donation.name }}
        <span class="text-gray-400">· {{ moment(donation.time).fromNow() }}</span>
      </p>
      <hr v-if="index !== latestDonations.length - 1" class="border-1 my-2 border-gray-600" />
    </template>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { ref } from 'vue'

const latestDonationsData: { name: string; amount: number; time: Date }[] = [
  {
    name: 'Ed Hocchuli',
    amount: 50,
    time: new Date(moment(Date.now()).subtract(2, 'hours').format())
  },
  {
    name: 'someone',
    amount: 10,
    time: new Date(moment(Date.now()).subtract(15, 'days').format())
  },
  {
    name: 'Taysom Hill',
    amount: 500,
    time: new Date(Date.now())
  }
]

const latestDonations = ref(latestDonationsData.sort((a, b) => b.time.getTime() - a.time.getTime()))
</script>

<style scoped></style>
