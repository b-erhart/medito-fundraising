<script setup lang="ts">
import {
  ProgressIndicator,
  ProgressRoot,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  moneyRaised: number
  moneyGoal: number
  currencySymbol: string
  paymentLinks: { currencyDescription: string; url: URL }[]
}>()

const paymentUrl = ref(props.paymentLinks[0].url.href)

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
</script>

<template>
  <div class="flex flex-col gap-6 rounded-xl bg-gray-800 p-6 shadow ring-1 ring-gray-600">
    <div>
      <div class="mb-2 flex flex-row">
        <h3 class="w-fit flex-shrink-0 flex-grow-0 text-sm font-medium text-gray-200">Progress</h3>
        <span class="flex-1 text-right text-sm font-medium text-gray-200">{{ progress }}%</span>
      </div>
      <ProgressRoot
        v-model="progress"
        class="relative mb-2 mt-2 h-7 w-full overflow-hidden rounded-lg bg-gray-700"
      >
        <ProgressIndicator
          class="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-green-600 transition-transform duration-[660ms]"
          :style="`transform: translateX(-${100 - progress}%)`"
        />
      </ProgressRoot>
      <p>
        <em class="text-lg font-bold not-italic text-green-500"
          >{{
            moneyRaised.toLocaleString('en-us', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2
            })
          }}
        </em>
        of
        {{
          moneyGoal.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          })
        }}
        donated.
      </p>
    </div>
    <div>
      <h3 class="mb-2 text-sm font-medium text-gray-200">Donate</h3>
      <form :action="paymentUrl" target="_blank" class="flex w-full flex-col gap-3 sm:flex-row">
        <div class="relative w-full">
          <div class="absolute inset-0 rounded-lg bg-amber-500 blur-sm"></div>
          <button
            type="submit"
            class="relative h-10 w-full rounded-lg border-none bg-amber-600 px-3 hover:bg-amber-700"
          >
            Donate
          </button>
        </div>
        <SelectRoot v-model="paymentUrl">
          <SelectTrigger
            class="flex h-10 w-full flex-shrink-0 flex-grow-0 flex-row items-center gap-2 rounded-lg px-3 shadow ring-1 ring-gray-600 sm:w-fit"
          >
            <SelectValue placeholder="Select currency..." class="flex-1 text-left" />
            <Icon icon="radix-icons:chevron-down" class="flex-shrink-0 flex-grow-0 text-xl" />
          </SelectTrigger>
          <SelectPortal>
            <SelectContent
              class="rounded-lg bg-gray-700 p-3 px-3 shadow ring-1 ring-gray-600 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
            >
              <SelectViewport>
                <SelectItem
                  v-for="(paymentLink, index) in paymentLinks"
                  :key="index"
                  :value="paymentLink.url.href"
                  class="relative flex cursor-pointer select-none flex-row items-center gap-1 rounded-md p-2 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-800 data-[disabled]:text-gray-400 data-[highlighted]:text-gray-200 data-[highlighted]:outline-none"
                >
                  <SelectItemIndicator class="">
                    <Icon icon="radix-icons:check" />
                  </SelectItemIndicator>
                  <SelectItemText>
                    {{ paymentLink.currencyDescription }}
                  </SelectItemText>
                </SelectItem>
              </SelectViewport>
            </SelectContent>
          </SelectPortal>
        </SelectRoot>
      </form>
    </div>
    <div>
      <h3 class="mb-2 text-sm font-medium text-gray-200">Rewards</h3>
      <p class="mb-0 mt-0">
        Check out the <a href="#rewards" class="text-green-500 underline">rewards</a> you can
        receive for donating.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
