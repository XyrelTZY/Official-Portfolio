<template>
  <footer
    class="bg-gray-800 text-[#E2E8F0] rounded-t-[3rem] py-8 transition-all duration-500"
  >
    <div class="container mx-auto px-4">
      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-6 mb-4">
        <a
          href="https://twitter.com"
          target="_blank"
          class="hover:text-blue-400"
        >
          <LucideTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          class="hover:text-blue-600"
        >
          <LucideFacebook />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          class="hover:text-blue-700"
        >
          <LucideLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          class="hover:text-gray-500"
        >
          <LucideGithub />
        </a>
      </div>
      <!-- Copyright Section -->
      <div class="text-center text-sm">
        <p>
          &copy; {{ new Date().getFullYear() }} Xyrel D. Tenefrancia. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  LucideTwitter,
  LucideFacebook,
  LucideLinkedin,
  LucideGithub,
} from "lucide-vue-next";
</script>

<style scoped>
footer a {
  transition: color 0.3s;
}
</style>
