<template>
  <footer
    class="bg-gray-800 text-[#E2E8F0] rounded-t-[3rem] py-8 transition-all duration-500"
  >
    <div class="container mx-auto px-4">
      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-6 mb-4">
        <a
          href="https://facebook.com"
          aria-activedescendant=""
          target="_blank"
          class="hover:text-blue-600"
        >
          <svg
            class="w-7 h-7 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351c0 .73.595 1.325 1.325 1.325h11.495v-9.294h-3.12v-3.622h3.12V8.41c0-4.154 2.474-6.48 6.213-6.48 1.802 0 3.344.134 3.785.197v4.428h-2.557c-2.003 0-2.47.953-2.47 2.386v3.1h4.473l-.58 3.622h-3.893v9.294h7.627c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          target="_blank"
          class="hover:text-blue-700"
        >
          <svg
            class="w-7 h-7 text-blue-500 mt-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          aria-label="GitHub"
          class="hover:text-gray-500"
        >
          <svg
            class="w-7 h-7 text-[#E2E8F0]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
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

<script lang="ts">
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
