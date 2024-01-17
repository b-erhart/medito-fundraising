<template>
  <div class="rounded-lg bg-gray-900 p-3 shadow ring-1 ring-gray-600">
    <LoadingIndicator v-if="!loaded" />
    <template v-else>
      <p v-if="latestDonations.length === 0">No donations yet.</p>
      <template v-else>
        <template v-for="(donation, index) in latestDonations" :key="JSON.stringify(donation)">
          <p class="break-words">
            <span class="font-medium text-green-500">{{
              formatCurrency(donation.amount, donation.currency)
            }}</span>
            by
            {{ donation.name }}
            <span class="text-gray-400">· {{ moment(donation.time).fromNow() }}</span>
          </p>
          <hr v-if="index !== latestDonations.length - 1" class="border-1 my-2 border-gray-600" />
        </template>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { getLatestDonations, type Donation } from '@/endpoints'
import { formatCurrency } from '@/modules/format'
import LoadingIndicator from '@/components/base/LoadingIndicator.vue'
import moment from 'moment'
import { ref, type Ref } from 'vue'

const loaded = ref(false)
const latestDonations: Ref<Donation[]> = ref([])

async function update() {
  const updatedLatestDonations = await getLatestDonations()

  latestDonations.value = updatedLatestDonations
    .sort((a, b) => b.time.getTime() - a.time.getTime())
    .slice(0, 3)

  loaded.value = true
}

update()
setInterval(update, 5000)
</script>

<style scoped></style>
