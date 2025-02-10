<script setup lang="ts">
import { ref } from "vue";

const responseMessage = ref({ type: "", message: "" });

async function submit(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch("/api/subscribe", {
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    if (data.message) {
        responseMessage.value = { type: data.type, message: data.message }
    }
}
</script>
<template>
    <form @submit="submit" class="w-full max-w-2xl flex flex-col gap-y2 relative">
        <input type="email" name="email" id="email" placeholder="johndoe@gmail.com"
            class="px5 py3 md-py2.5 rd-xl b b-border bg-gray200/70 dark-bg-gray800/30 text-fg outline-transparent focus-outline focus-outline-gray200 dark-focus-outline-gray800 flex-1 text-sm"
            required />
        <button
            class="absolute top-1 right-1 md-top-0 md-right-0 md-relative px4 md-w-full rd-lg md-rd-xl h9 flex items-center justify-center outline-offset-2 bg-gradient-to-t from-gray200 to-gray100 dark-from-gray900 dark-to-gray800 b b-gray200/80 dark-b-gray800/90 text-sm text-fg-subtitle"
            aria-label="subscribe to news letter">
            Subscribe
        </button>
        <span v-if="responseMessage.type === 'info'" class="absolute left-0 top-full text-info700 dark-text-info500">
            {{ responseMessage.message }}
        </span>
        <span v-if="responseMessage.type === 'success'"
            class="absolute left-0 top-full text-success700 dark-text-success500">
            {{ responseMessage.message }}
        </span>
        <span v-if="responseMessage.type === 'error'" class="absolute left-0 top-full text-danger700 dark-text-danger500">
            {{ responseMessage.message }}
        </span>
    </form>
</template>