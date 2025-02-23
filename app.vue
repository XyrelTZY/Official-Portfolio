<template>
  <div class="bg-black text-neon-green min-h-screen">
    <Loading v-if="isLoading" />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import Loading from "../components/loading.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});

useHead({
  title: "Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Nuxt.js + Vite + Tailwind CSS + Vue 3 + TypeScript + PWA + SSR + i18n",
    },
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

div {
  /* font-family: "Roboto", serif; */
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-family: "Pacifico", cursive, "Dancing Script", sans-serif;
}
:root {
  --neon-green: #39ff14;
}

.bg-black {
  background: #0f172a !important; /* Default Theme Color */
  color: #e2e8f0 !important; /* Default Font Color */
}

.text-neon-green {
  color: var(--neon-green);
}
</style>
