<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  moneyRaised: number
  moneyGoal: number
  currencySymbol: string
}>()

const collectionPercentage = computed(
  () => +((moneyRaisedAnimated.value / props.moneyGoal) * 100).toFixed(1)
)

let moneyRaisedAnimated = ref(0)
onMounted(() => {
  let interval = setInterval(() => {
    if (moneyRaisedAnimated.value !== props.moneyRaised) {
      moneyRaisedAnimated.value = props.moneyRaised
    } else {
      clearInterval(interval)
    }
  }, 10)
})
</script>

<template>
  <section>
    <ProgressBar :value="collectionPercentage"></ProgressBar>
    <p>{{ currencySymbol }}{{ moneyRaised }} / {{ currencySymbol }}{{ moneyGoal }} raised</p>
    <Button severity="warning" size="large">Donate</Button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* adjust progress bar size */
.p-progressbar {
  width: 100%;
  height: 2.5rem;
}

/* change progress bar color */
/* :deep(.p-progressbar .p-progressbar-value) {
  background-color: green;
} */
</style>
