<script setup lang="ts">
import { copyToClipboard } from "@helper/copy-to-clipboard";
import { ref } from 'vue';

const { className = '', closestEl = '[data-code-block]', btnClass = '' } = defineProps<{ className?: string, closestEl?: string, btnClass?: string }>()
const copiedState = ref('')
const triggerBoxRef = ref<HTMLDivElement>();
const handleCopy = () => {
  const parentEl = triggerBoxRef.value?.closest(closestEl)
  const snippet = parentEl?.querySelector("[data-code-snippet] pre")
  if (snippet instanceof HTMLElement) {
    copyToClipboard({
      snippet,
      onCopy: () => {
        copiedState.value = 'copied'
      },
      onCopyCompleted: () => {
        copiedState.value = ''
      }
    });
  }
};

</script>
<template>
  <div ref="triggerBoxRef" class="bg-[--astro-code-color-background]" :class="className">
    <button aria-label="copy code to clipboard" :data-state="copiedState" :disabled="copiedState === 'copied'" :class="[
      'group btn btn-icon-sm rd-lg bg-[] hover-bg-gray950 dark-hover-bg-gray900 flex',
      btnClass
    ]" @click="handleCopy">
      <span aria-hidden="true" class="flex relative ease-linear">
        <span aria-hidden="true"
          class="flex i-ph-copy-simple absolute op100 scale-100 group-data-[state=copied]-op0 group-data-[state=copied]-scale-60  top-1/2 left-1/2 -translate-1/2 ease-linear duration-200" />
        <span aria-hidden="true"
          class="i-ph-check-square-offset group-data-[state=copied]-flex absolute op0 scale-60 group-data-[state=copied]-op100 group-data-[state=copied]-scale-100 top-1/2 left-1/2 -translate-1/2 ease-linear duration-200" />
      </span>
    </button>
  </div>
</template>