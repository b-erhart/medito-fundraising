<script setup lang="ts">
import type { Config } from '@/config'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Button from 'primevue/button'
import InlineMessage from 'primevue/inlinemessage'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { validate } from 'email-validator'
import { computed, ref } from 'vue'

defineProps<{ config: Config }>()
const email = ref("")
const questionsMessage = ref("")
const questionsSubmitted = ref(false)

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
  <section>
    <h2>Q&A</h2>
    <Accordion :multiple="true">
      <AccordionTab v-for="(qnaEntry, index) in config.qnaSection.qnas" :key="index" :header="qnaEntry.question">
        {{ qnaEntry.answer }}
      </AccordionTab>
      <AccordionTab v-if="config.qnaSection.contactForm.enabled" :header="config.qnaSection.contactForm.heading">
        <form v-if="!questionsSubmitted" class="questions-form">
          <div class="labelled-input">
            <label for="email-address">Email address</label>
            <span class="p-input-icon-right">
              <InputText id="email-address" v-model="email" type="email" placeholder="yourname@example.org"
                :class="emailIsValid ? '' : 'p-invalid'" style="width: 100%;" />
              <i v-if="emailIsValid" class="pi pi-check" style="color: var(--green-500);" />
              <i v-else class="pi pi-times" style="color: var(--red-200);" />
            </span>
          </div>
          <div class="labelled-input">
            <label for="questions">Your questions</label>
            <Textarea id="questions" v-model="questionsMessage" placeholder="Tell us about your questions here..."
              autoResize rows="6" :class="questionIsValid ? '' : 'p-invalid'" />
          </div>
          <Button :onClick="() => onQuestionFormSubmission()" style="width: fit-content; margin-left: auto"
            :disabled="!emailIsValid || !questionIsValid">Submit</Button>
        </form>
        <InlineMessage v-else severity="success">Thank you for your message. We will get back to you as soon as
          we can.</InlineMessage>
      </AccordionTab>
    </Accordion>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.questions-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.labelled-input {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.p-inputtextarea {
  width: 100%;
}

/* fix PrimeVUE bug where the icon of the accordion tab is displayed too small if the header  
text is too long */
:deep(.p-accordion-header-action svg) {
  min-width: 1rem;
}
</style>
