<template>
  <div class="mb-2 flex flex-row">
    <p class="w-fit flex-shrink-0 flex-grow-0 text-sm font-medium text-gray-300">Progress</p>
    <p class="block w-full text-right text-sm font-medium text-gray-300">{{ progress }}%</p>
  </div>
  <div class="rounded-lg bg-gray-900 p-3 shadow ring-1 ring-gray-600">
    <LoadingIndicator v-if="!loaded" />
    <template v-else>
      <ProgressRoot
        v-model="progress"
        class="relative mb-1 mt-1 h-7 w-full overflow-hidden rounded-lg bg-gray-700"
      >
        <ProgressIndicator
          class="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-green-600 transition-transform duration-[660ms]"
          :style="`transform: translateX(-${100 - progress}%)`"
        />
      </ProgressRoot>
      <p>
        <em class="text-lg font-bold not-italic text-green-500"
          >{{ formatCurrency(moneyDonated, currency) }}
        </em>
        of {{ formatCurrency(moneyGoal, currency) }} donated.
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import LoadingIndicator from '@/components/base/LoadingIndicator.vue'
import { getFinancialDetails } from '@/endpoints'
import { formatCurrency } from '@/modules/format'
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { computed, ref } from 'vue'

const loaded = ref(false)
const currency = ref('')
const moneyGoal = ref(0)
const moneyDonated = ref(0)

async function update() {
  const financialDetails = await getFinancialDetails()

  currency.value = financialDetails.currency
  moneyGoal.value = financialDetails.moneyGoal
  moneyDonated.value = financialDetails.moneyDonated
  loaded.value = true
}

update()
setInterval(update, 5000)

const progress = computed(() => {
  if (moneyDonated.value === 0 && moneyGoal.value === 0) {
    return 0
  }

  return +((moneyDonated.value / moneyGoal.value) * 100).toFixed(1)
})
</script>

<style scoped></style>
