<template>
  <div class="rounded-lg bg-gray-900 p-3 shadow ring-1 ring-gray-600">
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
      <em class="text-lg font-bold not-italic text-green-500">{{ moneyRaisedFormatted }} </em>
      of {{ moneyGoalFormatted }} donated.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{ moneyRaised: number; moneyGoal: number; currency: string }>()

let moneyRaisedAnimated = ref(0)
onMounted(() => {
  let interval = setInterval(() => {
    if (moneyRaisedAnimated.value !== props.moneyRaised) {
      moneyRaisedAnimated.value = props.moneyRaised
    } else {
      clearInterval(interval)
    }
  }, 100)
})

const progress = computed(() => +((moneyRaisedAnimated.value / props.moneyGoal) * 100).toFixed(1))

const moneyRaisedFormatted = computed(() => {
  return props.moneyRaised.toLocaleString('en-us', {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 2
  })
})

const moneyGoalFormatted = computed(() => {
  return props.moneyGoal.toLocaleString('en-us', {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 2
  })
})
</script>

<style scoped></style>
