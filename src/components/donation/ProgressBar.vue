<template>
  <div class="mb-2 flex flex-row">
    <p class="text-base-300 w-fit flex-shrink-0 flex-grow-0 text-sm font-medium">Progress</p>
    <p v-if="loaded" class="text-base-300 block w-full text-right text-sm font-medium">
      {{ progress }}%
    </p>
  </div>
  <div class="bg-base-900 ring-base-600 rounded-lg p-3 shadow ring-1">
    <LoadingIndicator v-if="!loaded" />
    <template v-else>
      <ProgressRoot
        v-model="progress"
        class="bg-base-700 relative mb-1 mt-1 h-7 w-full overflow-hidden rounded-lg"
      >
        <ProgressIndicator
          class="ease-[cubic-bezier(0.65, 0, 0.35, 1)] bg-accent-600 h-full w-full transition-transform duration-[660ms]"
          :style="`transform: translateX(-${100 - progress}%)`"
        />
      </ProgressRoot>
      <p>
        <em class="text-accent-500 text-lg font-bold not-italic"
          >{{ formatCurrency(moneyDonated, currency) }}
        </em>
        of {{ formatCurrency(moneyGoal, currency) }} donated.
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import LoadingIndicator from '@/components/base/LoadingIndicator.vue'
import { content } from '@/content'
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
setInterval(update, content.endpointUpdateInterval)

const progress = computed(() => {
  if (moneyDonated.value === 0 && moneyGoal.value === 0) {
    return 0
  }

  return +((moneyDonated.value / moneyGoal.value) * 100).toFixed(1)
})
</script>

<style scoped></style>
