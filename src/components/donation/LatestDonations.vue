<template>
  <p class="text-base-300 mb-2 text-sm font-medium">Latest Donations</p>
  <div class="bg-base-900 ring-base-600 rounded-lg p-3 shadow ring-1">
    <LoadingIndicator v-if="!loaded" />
    <template v-else>
      <p v-if="latestDonations.length === 0">No donations yet.</p>
      <template v-else>
        <template v-for="(donation, index) in latestDonations" :key="JSON.stringify(donation)">
          <p class="break-words">
            <span class="text-accent-500 font-medium">{{
              formatCurrency(donation.amount, donation.currency)
            }}</span>
            by
            {{ donation.name }}
            <span class="text-base-400">· {{ moment(donation.time).fromNow() }}</span>
          </p>
          <hr v-if="index !== latestDonations.length - 1" class="border-1 border-base-600 my-2" />
        </template>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { getLatestDonations } from '@/endpoints'
import type { Donation } from '@/modules/interfaces'
import { formatCurrency } from '@/modules/format'
import LoadingIndicator from '@/components/base/LoadingIndicator.vue'
import moment from 'moment'
import { ref, type Ref } from 'vue'
import { content } from '@/content'

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
setInterval(update, content.endpointUpdateInterval)
</script>

<style scoped></style>
