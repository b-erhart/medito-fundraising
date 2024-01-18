<template>
  <div v-if="submitted" class="text-accent-500 m-[1px] mb-3 flex flex-row items-center gap-2">
    <p>Message sent. Thank you for your questions - we will get back to you as soon as we can.</p>
  </div>
  <template v-else>
    <div class="text-base-300 mb-3 flex flex-col">
      <label>Email address*</label>
      <input
        v-model="email"
        placeholder="..."
        class="bg-base-800 ring-base-600 focus:ring-base-200 form-input m-[1px] mt-1 rounded-md border-none shadow ring-1 md:w-1/2"
        :class="
          emailIsValid || email === ''
            ? 'ring-base-600 focus:ring-base-200'
            : 'ring-red-500 focus:ring-red-200'
        "
      />
      <span v-if="!emailIsValid && email !== ''" class="text-sm text-red-500"
        >Invalid email address</span
      >
    </div>
    <div class="text-base-300 mb-3 flex flex-col">
      <label>Your questions*</label>
      <textarea
        v-model="questionsMessage"
        ref="questionsTextarea"
        placeholder="Dear medito team, ..."
        class="scrollbar-hidden bg-base-800 ring-base-600 focus:ring-base-200 form-textarea m-[1px] mt-1 resize-none rounded-md border-none shadow ring-1"
        :class="
          questionIsValid || questionsMessage === ''
            ? 'ring-base-600 focus:ring-base-200'
            : 'ring-red-500 focus:ring-red-300'
        "
      />
      <span v-if="!questionIsValid && questionsMessage !== ''" class="text-sm text-red-500"
        >Question is too short</span
      >
    </div>
    <button
      :disabled="!emailIsValid || !questionIsValid"
      @click="submit()"
      class="disabled:text-base-400 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-900 relative mb-3 mt-2 h-10 w-full rounded-lg border-none px-3 md:w-fit"
    >
      Send message
    </button>
  </template>
</template>

<script setup lang="ts">
import { sendQuestions } from '@/endpoints'
import { useTextareaAutosize } from '@vueuse/core'
import { validate } from 'email-validator'
import { computed, ref } from 'vue'

const email = ref('')
const { textarea: questionsTextarea, input: questionsMessage } = useTextareaAutosize()
const submitted = ref(false)

if (!questionsMessage.value) {
  questionsMessage.value = ''
}

const emailIsValid = computed(() => {
  return validate(email.value)
})

const questionIsValid = computed(() => {
  return questionsMessage.value.length > 10
})

function submit() {
  submitted.value = true
  sendQuestions(email.value, questionsMessage.value)
}
</script>

<style scoped></style>
