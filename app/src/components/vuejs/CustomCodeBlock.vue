<script lang="ts" setup>
import type { SupportedLanguage } from '@/types/index';
import { codeToHtml } from 'shiki';
import { cssVariables } from 'src/config/shikiconfig';
import { onMounted, ref } from 'vue';

const codeHtml = ref()

const props = defineProps<{
    code: string,
    lang: SupportedLanguage
}>()

onMounted(async () => {
    try {
        codeHtml.value = await codeToHtml(props.code, {
            lang: props.lang,
            theme: cssVariables
        })
    } catch (error) {
        console.error(error)
    }
})
</script>
<template>
    <figure v-html="codeHtml" data-code-snippet role="region" aria-label="codeblock region" />
</template>