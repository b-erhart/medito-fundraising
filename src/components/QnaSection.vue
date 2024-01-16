<script setup lang="ts">
import type { Config } from '@/config'
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { useTextareaAutosize } from '@vueuse/core'
import { validate } from 'email-validator'
import { computed, ref } from 'vue'

defineProps<{ config: Config }>()
const email = ref('')
const { textarea: questionsTextarea, input: questionsMessage } = useTextareaAutosize()
const questionsSubmitted = ref(false)

const spamCheck = { a: Math.floor(10 * Math.random()), b: Math.floor(10 * Math.random()) }
const spamCheckInput = ref('')

if (!questionsMessage.value) {
  questionsMessage.value = ''
}

const emailIsValid = computed(() => {
  return validate(email.value)
})

const questionIsValid = computed(() => {
  return questionsMessage.value.length > 10
})

function onQuestionFormSubmission() {
  questionsSubmitted.value = true

  // send off the questions to an API endpoint
}
</script>

<template>
  <section class="mb-12">
    <h2 class="mb-3 text-center text-2xl font-bold md:text-left">Q&A</h2>
    <AccordionRoot type="multiple" class="flex flex-col">
      <template v-for="(qnaEntry, index) in config.qnaSection.qnas" :key="index">
        <AccordionItem :value="`${index}`" class="border-b border-gray-600">
          <AccordionHeader>
            <AccordionTrigger
              class="trigger flex w-full flex-row items-center gap-3 py-3 hover:underline"
            >
              <span class="w-full text-left font-medium">{{ qnaEntry.question }}</span>
              <Icon icon="radix-icons:chevron-down" class="animate-icon flex-none text-xl" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="animate-content overflow-hidden">
            <p class="pb-3 text-gray-300">{{ qnaEntry.answer }}</p>
          </AccordionContent>
        </AccordionItem>
      </template>
      <AccordionItem :value="`${config.qnaSection.qnas.length}`" class="border-b border-gray-600">
        <AccordionHeader>
          <AccordionTrigger
            class="trigger flex w-full flex-row items-center gap-3 py-3 hover:underline"
          >
            <span class="w-full text-left font-medium">Any more questions?</span>
            <Icon icon="radix-icons:chevron-down" class="animate-icon flex-none text-xl" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="animate-content overflow-hidden">
          <div>
            <form>
              <div class="mb-3 flex flex-col text-gray-200">
                <label>Email address*</label>
                <input
                  v-model="email"
                  placeholder="..."
                  class="form-input m-[1px] mt-1 rounded-md border-none bg-gray-800 shadow ring-1 ring-gray-600 focus:ring-gray-200 md:w-1/2"
                  :class="
                    emailIsValid || email === ''
                      ? 'ring-gray-600 focus:ring-gray-200'
                      : 'ring-red-500 focus:ring-red-200'
                  "
                />
                <span v-if="!emailIsValid && email !== ''" class="text-sm text-red-500"
                  >Invalid email address</span
                >
              </div>
              <div class="mb-3 flex flex-col text-gray-200">
                <label>Your questions*</label>
                <textarea
                  v-model="questionsMessage"
                  ref="questionsTextarea"
                  placeholder="Dear medito team, ..."
                  class="form-textarea scrollbar-hidden m-[1px] mt-1 resize-none rounded-md border-none bg-gray-800 shadow ring-1 ring-gray-600 focus:ring-gray-200"
                  :class="
                    questionIsValid || questionsMessage === ''
                      ? 'ring-gray-600 focus:ring-gray-200'
                      : 'ring-red-500 focus:ring-red-300'
                  "
                />
                <span
                  v-if="!questionIsValid && questionsMessage !== ''"
                  class="text-sm text-red-500"
                  >Question is too short</span
                >
              </div>
              <button
                :disabled="!emailIsValid || !questionIsValid"
                type="submit"
                class="relative mb-3 mt-2 h-10 w-full rounded-lg border-none bg-green-600 px-3 hover:bg-green-700 disabled:bg-green-900 disabled:text-gray-400 md:w-fit"
              >
                Send message
              </button>
            </form>
          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </section>
</template>

<style scoped>
.animate-content[data-state='open'] {
  animation: slideDown 300ms;
}
.animate-content[data-state='closed'] {
  animation: slideUp 300ms;
}

.animate-icon {
  color: var(--grass-10);
  transition: transform 300ms;
}
.trigger[data-state='open'] > .animate-icon {
  transform: rotate(180deg);
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
