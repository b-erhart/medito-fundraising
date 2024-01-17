<template>
  <form>
    <div class="mb-3 flex flex-col text-gray-300">
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
    <div class="mb-3 flex flex-col text-gray-300">
      <label>Your questions*</label>
      <textarea
        v-model="questionsMessage"
        ref="questionsTextarea"
        placeholder="Dear medito team, ..."
        class="scrollbar-hidden form-textarea m-[1px] mt-1 resize-none rounded-md border-none bg-gray-800 shadow ring-1 ring-gray-600 focus:ring-gray-200"
        :class="
          questionIsValid || questionsMessage === ''
            ? 'ring-gray-600 focus:ring-gray-200'
            : 'ring-red-500 focus:ring-red-300'
        "
      />
      <span v-if="!questionIsValid && questionsMessage !== ''" class="text-sm text-red-500"
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
</template>

<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'
import { validate } from 'email-validator'
import { computed, ref } from 'vue'

const email = ref('')
const { textarea: questionsTextarea, input: questionsMessage } = useTextareaAutosize()
const questionsSubmitted = ref(false)

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

<style scoped></style>
