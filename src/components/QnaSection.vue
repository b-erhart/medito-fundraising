<template>
  <section class="mb-12">
    <h2 class="mb-3 text-center text-2xl font-bold md:text-left">Q&A</h2>
    <AccordionRoot type="multiple" class="flex flex-col">
      <template v-for="qnaEntry in qnas" :key="JSON.stringify(qnaEntry)">
        <AccordionItem :value="qnaEntry.question" class="border-base-600 border-b">
          <AccordionHeader>
            <AccordionTrigger
              class="trigger flex w-full flex-row items-center gap-3 py-3 hover:underline"
            >
              <span class="w-full text-left font-medium">{{ qnaEntry.question }}</span>
              <Icon icon="radix-icons:chevron-down" class="animate-icon flex-none text-xl" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="animate-content overflow-hidden">
            <p class="text-base-300 pb-3">{{ qnaEntry.answer }}</p>
          </AccordionContent>
        </AccordionItem>
      </template>
      <AccordionItem :value="`questions-form-${qnas.length}`" class="border-base-600 border-b">
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
            <QuestionsForm />
          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </section>
</template>

<script setup lang="ts">
import QuestionsForm from '@/components/qna/QuestionsForm.vue'
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { content } from '@/content'

const qnas = content.qnaSection.qnas
</script>

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
