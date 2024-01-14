<script setup lang="ts">
import Card from 'primevue/card';
import { ref } from 'vue'
import { loadStripe } from '@stripe/stripe-js';
import { type Config } from '@/config';

defineProps<{ config: Config }>()
const stripeLoadingError = ref(false)
loadStripe('pk_test_51OYHBIJJl04K5Yc1QNDw6mdeVmcfgdPy7CYJucDQ3s7Rk0HzpfW7GXS5Wly6DsC1saeh6YQ7mafj16jGDAjhsmKe00QdND2QSt').then(async (stripe) => {
  if (!stripe) {
    stripeLoadingError.value = true
    return
  }

  const sessionFetchResponse = await fetch(new URL('https://api.stripe.com/v1/checkout/sessions'), {
    method: 'POST',
  })

  stripe.redirectToCheckout

  const stripeCheckout = await stripe.initEmbeddedCheckout({
    clientSecret: ''
  })
})
</script>

<template>
  <section>
    <h2>Donate</h2>
    <Card>
      <template #content>placeholder</template>
    </Card>
    <h3>Rewards</h3>
    <div class="rewards">
      <Card v-for="reward in config.donationSection.rewards" :key="reward.title">
        <template #title>{{ reward.title }}</template>
        <template #content>
          {{ config.donationSection.currencySymbol }} {{ reward.amount }}
        </template>
        <template #footer>
          {{ reward.description }}
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.rewards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* @media screen and (min-width: 576px) {
  .rewards {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 768px) {
  .rewards {
    grid-template-columns: 1fr 1fr 1fr;
  }
} */

:deep(.p-card) {
  max-width: 15rem;
}

:deep(.p-card-body) {
  text-align: center;
}

:deep(.p-card-content) {
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-color);
}
</style>