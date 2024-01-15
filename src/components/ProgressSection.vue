<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  moneyRaised: number
  moneyGoal: number
  currencySymbol: string
  paymentLinks: { currencyDescription: string; url: URL }[]
}>()

const paymentUrl = ref(props.paymentLinks[0].url.href)

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
    <p>
      <em class="money-raised">{{ currencySymbol }}{{ moneyRaised }}</em> out of
      <em class="money-goal">{{ currencySymbol }}{{ moneyGoal }}</em> raised
    </p>
    <form :action="paymentUrl" target="_blank">
      <Button
        type="submit"
        severity="warning"
        size="large"
        label="Donate"
        onclick="window.open(paymentUrl, '_blank')"
        class="donate"
      />
    </form>
    <p class="currency-selection">
      any amount you'd like in
      <Dropdown
        v-model="paymentUrl"
        :options="paymentLinks"
        :option-value="(pl) => pl.url.href"
        :option-label="(pl) => pl.currencyDescription"
      />
      .
    </p>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.donate {
  margin-top: 2rem;
}

.currency-selection {
  text-align: center;
}

/* adjust progress bar size */
.p-progressbar {
  width: 100%;
  height: 2.5rem;
}

.p-button {
  box-shadow: 0 0 1rem 0.3rem hsla(27, 100%, 76%, 0.669);
}
</style>
