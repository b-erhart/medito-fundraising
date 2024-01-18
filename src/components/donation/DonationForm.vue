<template>
  <p class="text-base-300 mb-2 text-sm font-medium">Donate</p>
  <form :action="paymentUrl" class="flex w-full flex-col gap-3 sm:flex-row">
    <div class="relative w-full">
      <div class="bg-donate-glow absolute inset-0 rounded-lg blur-sm"></div>
      <button
        type="submit"
        class="bg-donate-default hover:bg-donate-hover relative h-10 w-full rounded-lg border-none px-3"
      >
        Donate
      </button>
    </div>
    <SelectRoot
      v-model="paymentUrl"
      :required="true"
      aria-label="Select donation currency"
      name="currency"
    >
      <SelectTrigger
        class="ring-base-600 flex h-10 w-full flex-shrink-0 flex-grow-0 flex-row items-center gap-2 rounded-lg px-3 shadow ring-1 sm:w-fit sm:min-w-32"
        aria-label="Open donation currency selection"
      >
        <SelectValue placeholder="Select currency..." class="flex-1 text-left" />
        <Icon icon="radix-icons:chevron-down" class="flex-shrink-0 flex-grow-0 text-xl" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          :avoidCollisions="true"
          class="bg-base-700 ring-base-600 rounded-lg p-3 px-3 shadow ring-1 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
        >
          <SelectScrollUpButton
            class="bg-base-700 flex h-fit cursor-default items-center justify-center"
          >
            <Icon icon="radix-icons:chevron-up" />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectItem
              v-for="paymentLink in paymentLinks"
              :key="JSON.stringify(paymentLink)"
              :value="paymentLink.url"
              class="data-[highlighted]:bg-base-800 data-[disabled]:text-base-400 data-[highlighted]:text-base-300 relative my-1 flex cursor-pointer select-none flex-row items-center gap-1 rounded-md p-2 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
              :class="
                paymentLink.url === paymentUrl
                  ? 'bg-base-900 data-[highlighted]:bg-base-900 font-bold'
                  : ''
              "
            >
              <SelectItemText>
                {{ paymentLink.currencyDescription }}
              </SelectItemText>
            </SelectItem>
          </SelectViewport>
          <SelectScrollDownButton
            class="bg-base-700 flex h-fit cursor-default items-center justify-center"
          >
            <Icon icon="radix-icons:chevron-down" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </form>
</template>

<script setup lang="ts">
import {
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps<{
  paymentLinks: { currencyDescription: string; url: string }[]
}>()

const paymentUrl = ref(props.paymentLinks[0].url)
</script>

<style></style>
