<template>
  <div class="min-h-screen">
    <div class="relative">
      <div class="container mx-auto px-4">
        <div
          class="flex items-center justify-between py-4"
          id="AnimationTopToBottom"
        >
          <!-- Left Pagination Button -->
          <button
            @click="prevPage"
            class="px-4 py-2 rounded-lg bg-green-400 md:mr-4 hidden lg:block md:block text-white transition-colors duration-300"
            :disabled="currentPage === 1"
          >
            <span class="text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </button>

          <!-- Activity Buttons (Paginated) -->
          <div class="flex overflow-x-auto whitespace-nowrap space-x-4">
            <button
              v-for="i in paginatedActivities"
              :key="i"
              @click="scrollToActivity(i)"
              class="min-w-[170px] px-8 py-2 rounded-lg hidden lg:block md:block transition-colors duration-300 transform focus:outline-none text-[#E2E8F0] bg-gray-800 border-[1.px] border-gray-400 items-center justify-center space-x-2"
              :class="{ 'bg-gray-500 text-[#E2E8F0]': currentActivity === i }"
            >
              <span class="text-sm">Activity {{ i }}</span>
            </button>
          </div>

          <!-- Right Pagination Button -->
          <button
            @click="nextPage"
            class="px-4 py-2 rounded-md bg-green-400 md:ml-4 hidden lg:block md:block text-white transition-colors duration-300"
            :disabled="currentPage === totalPages"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Activities Container -->
    <div class="container mx-auto p-6 -mt-10 lg:mt-0 md:mt-0">
      <div class="space-y-16">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          :id="`activity-${index + 1}`"
          class="AnimationLeftToRight flex flex-col md:flex-row items-center gap-8"
          :class="{
            'md:flex-row-reverse': (index + 1) % 2 === 0,
          }"
        >
          <div class="w-full md:w-1/2 group transition-transform duration-300">
            <div class="rounded-xl shadow-lg overflow-hidden">
              <img
                :src="activity?.image"
                :alt="`Activity ${index + 1}`"
                class="w-full h-64 object-cover transition-transform duration-300"
              />
              <div class="p-6">
                <h3 class="text-2xl font-semibold text-[#E2E8F0] mb-3">
                  Activity {{ index + 1 }}
                </h3>
                <p class="text-[#E2E8F0] leading-relaxed">
                  {{ activity.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Navigation for Mobile -->
    <div
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden p-2 z-40 text-black"
    >
      <div class="flex items-center space-x-2">
        <button @click="scrollToPrevious" :disabled="currentActivity === 1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-[#e2e8f0]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span class="px-5 text-center w-24 py-2 text-[#e2e8f0] rounded-lg"
          >{{ currentActivity }} / 12</span
        >
        <button @click="scrollToNext" :disabled="currentActivity === 12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-[#e2e8f0]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import School from "../assets/images/ZSNHSLogo.png";

const currentActivity = ref(1);
const activities = ref([
  { image: School, description: "Activity 1 Description" },
  { image: School, description: "Activity 2 Description" },
  { image: School, description: "Activity 3 Description" },
  { image: School, description: "Activity 4 Description" },
  { image: School, description: "Activity 5 Description" },
  { image: School, description: "Activity 6 Description" },
  { image: School, description: "Activity 7 Description" },
  { image: School, description: "Activity 8 Description" },
  { image: School, description: "Activity 9 Description" },
  { image: School, description: "Activity 10 Description" },
  { image: School, description: "Activity 11 Description" },
  { image: School, description: "Activity 12 Description" },
]);

const activitiesPerPage = 6;
const currentPage = ref(1);

const totalPages = Math.ceil(activities.value.length / activitiesPerPage);

const paginatedActivities = computed(() => {
  const start = (currentPage.value - 1) * activitiesPerPage;
  const end = start + activitiesPerPage;
  return activities.value
    .slice(start, end)
    .map((_, index) => start + index + 1);
});

const scrollToActivity = (index) => {
  const element = document.getElementById(`activity-${index}`);
  if (element) {
    const offset = 150;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
    currentActivity.value = index;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
};

const scrollToPrevious = () => {
  if (currentActivity.value > 1) {
    scrollToActivity(currentActivity.value - 1);
  }
};

const scrollToNext = () => {
  if (currentActivity.value < 12) {
    scrollToActivity(currentActivity.value + 1);
  }
};
</script>

<style scoped>
nav div::-webkit-scrollbar {
  display: none;
}

nav div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html {
  scroll-behavior: smooth;
}

.fixed {
  z-index: 40;
}

@media (hover: none) {
  .hover\:scale-105 {
    transform: none !important;
  }
}

/* Ensure full width for pagination controls */
.container {
  width: 100%;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Animation */
#AnimationRightToLeft {
  animation: right-to-left 1s ease-in-out !important;
}

@keyframes right-to-left {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

#AnimationTopToBottom {
  animation: top-to-bottom 1s ease-in-out !important;
}

@keyframes top-to-bottom {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.AnimationLeftToRight {
  animation: left-to-right 1s ease-in-out !important;
}

@keyframes left-to-right {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
