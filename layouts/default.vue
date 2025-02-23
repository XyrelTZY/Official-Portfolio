<template>
  <div class="font-sans antialiased">
    <header
      :class="[
        'fixed top-0 left-0 w-full transition-all duration-500 z-50 !border-b border-gray-700',
        isScrolled
          ? 'bg-[#0F172A] backdrop-blur-md shadow-lg '
          : 'bg-[#0F172A] ',
        'h-20 flex items-center',
      ]"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <img
              src="../assets/images/ZSNHSLogo.png"
              alt="ZSNHS"
              class="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span
              class="text-2xl !text-green-400 bg-clip-text text-transparent"
            >
              Portfolio
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav
            class="hidden md:flex items-center justify-center flex-1 space-x-8"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="relative py-2 text-[#E2E8F0] group"
              :class="{ 'text-green-400': isActive(link.to) }"
            >
              <span class="relative z-10">{{ link.text }}</span>
              <!-- Add pseudo-elements here -->
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 transition-transform duration-300"
                :class="{ 'scale-x-100': isActive(link.to) }"
              ></span>
            </NuxtLink>
          </nav>
          <a
            href="/applicationform/ApplicationForm.pdf"
            target="_blank"
            class="px-6 py-2 w-38 rounded-full invisible lg:visible md:visible bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          >
            Application Form
          </a>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:invisible relative w-10 h-10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div
              class="absolute inset-0 flex flex-col justify-center items-center"
            >
              <span
                :class="[
                  'w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 transform',
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '',
                ]"
              ></span>
              <span
                :class="[
                  'w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 mt-1.5',
                  isMenuOpen ? 'opacity-0' : '',
                ]"
              ></span>
              <span
                :class="[
                  'w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 mt-1.5 transform',
                  isMenuOpen
                    ? '-rotate-45 -translate-y-1.5 -top-1 relative'
                    : '',
                ]"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation -->
    <div
      :class="[
        'fixed inset-x-0 top-20 z-40 transform transition-transform duration-300 md:hidden',
        isMenuOpen ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'shadow-lg' : '',
      ]"
    >
      <nav class="bg-[#0F172A]">
        <div class="container mx-auto py-5 -mt-3">
          <div class="space-y-2">
            <NuxtLink
              v-for="link in mobileLinks"
              :key="link.to"
              :to="link.to"
              class="block px-4 py-1 rounded-xl transition-all duration-300 flex gap-2"
              :class="isActive(link.to) ? 'text-green-400' : 'text-gray-400'"
              @click="closeMenu"
            >
              <component
                :is="link.icon"
                :class="
                  isActive(link.to)
                    ? 'bg-green-400 text-gray-700 p-1 rounded'
                    : 'border-[1.5px] p-1 rounded-md text-gray-400 border-gray-500'
                "
              />
              {{ link.text }}
            </NuxtLink>
            <a
              href="/resume/XyrelResume.pdf"
              target="_blank"
              class="block px-4 py-3 hidden text-center rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              @click="closeMenu"
            >
              Application Form
            </a>
          </div>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <main
      :class="[
        'pt-20 min-h-screen',
        { 'max-h-screen overflow-hidden': isMenuOpen },
      ]"
    >
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/footer.vue";
import { Home, Info, BookOpen } from "lucide-vue-next";

const route = useRoute();
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/preface", text: "Preface" },
];

const mobileLinks = [
  { to: "/", text: "Home", icon: Home },
  { to: "/about", text: "About", icon: Info },
  { to: "/preface", text: "Preface", icon: BookOpen },
];

const isActive = (path: any) => route.path === path;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
nav .group {
  position: relative;
}

nav .group::before,
nav .group::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #10b981;
  width: 0%;
  transition: all 0.3s ease;
}

nav .group::before {
  left: 50%;
  transform: translateX(-50%);
}

nav .group::after {
  right: 50%;
  transform: translateX(50%);
}

nav .group:hover::before,
nav .group:hover::after {
  width: 100%;
}
</style>
