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
              <span class="text-sm">Day {{ i }}</span>
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
                :src="activity?.Image"
                :alt="`Activity ${index + 1}`"
                class="w-full h-64 object-cover transition-transform duration-300 cursor-pointer"
                @click="openModal(activity)"
              />
              <div class="p-6">
                <h3 class="text-2xl font-semibold text-[#E2E8F0] mb-3">
                  Day {{ index + 1 }}
                </h3>
                <p class="text-[#E2E8F0] leading-relaxed text-justify">
                  {{ activity.Description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"
    >
      <div
        class="bg-gray-700 p-4 rounded-lg max-w-lg w-full relative overflow-y-auto max-h-[80vh] mt-10"
      >
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-white z-50"
        >
          <X />
        </button>
        <div class="flex justify-center items-center">
          <img
            :src="modalImage?.Image"
            :alt="modalImage?.Description"
            class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </div>
        <p class="mt-4 text-gray-300 text-justify">
          {{ modalImage?.Description }}
        </p>
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
import { X } from "lucide-vue-next";
import School from "../assets/images/ZSNHSLogo.png";
import Day1 from "./assets/images/Day1.jpg";
import Day2 from "./assets/images/Day2.jpg";
import Day3 from "./assets/images/Day3.jpg";
import Day4 from "./assets/images/Day4.jpg";
import Day5 from "./assets/images/Day5.jpg";
import Day6 from "./assets/images/Day6.jpg";
import Day7 from "./assets/images/Day7.jpg";


const currentActivity = ref(1);
const activities = ref([
  {
    Image: Day1,
    Description:
      "February 26 our first day of immersion and began when we left school around 8 AM, heading to the Barangay Lumbia for our immersion program. The morning air was cool as we rode motorcycles through the streets, eager for the tasks ahead. Upon arrival, the Barangay secretary greeted us and gave a brief orientation about our responsibilities and goals. She outlined the areas where we would assist, explaining the different departments and our specific roles.\n\nAfter the orientation, we were assigned tasks, each of us focusing on a specific area. The secretary emphasized the importance of teamwork and contributing meaningfully to the community.\n\nBy nearly 4 PM, we were ready for our first physical task. We gathered cleaning supplies and went to the second floor of the Barangay building, which hadn't been cleaned in a while. We got to work, sweeping. Working together, the space quickly became cleaner and more organized.\n\nOnce the cleaning was done, we signed out, marking the completion of our task for the day. It felt rewarding to see the immediate results of our efforts, and we left with a sense of pride in our contribution.",
  },
  {
    Image: Day2,
    Description:
      "We visited our assigned area, the SLP Store Barangay Assembly located in Fisher Ville. Our first task was to organize the store. We worked together to sort through the items, ensuring everything was in its proper place. Although it was a easy task, we worked efficiently and successfully completed it. Sometimes we got bored because the tasks weren't many. Overall, it was a fulfilling day, and we felt a strong sense of accomplishment and pride in our contributions to SLP.",
  },
  {
    Image: Day3,
    Description:
      "Day 3 was similar to our previous days. In the morning, we were tasked with cleaning trash on the backyard. We worked together to ensure the area was spotless. However, in the afternoon, we had nothing to do and just sat around because the owner of the store had yet to order us to clean. It was a relatively uneventful day, but we remained ready to assist whenever needed.",
  },
  {
    Image: Day4,
    Description: "On March 4, our fourth day of immersion, we began by visiting the barangay secretary to request a transfer to the daycare center located beside SMC Main. After securing permission, we proceeded to the daycare and introduced ourselves to the teacher in charge. Initially, we were unsure of our tasks as the teacher had not yet assigned us specific responsibilities. This gave us time to observe the environment and interact with the children, which was both heartwarming and enlightening. In the afternoon, the teacher finally gave us our first task: cleaning the outside area and the backyard of the daycare.While it was physically demanding, it felt rewarding to contribute to maintaining a clean and safe space for the children.After completing the task, we took a group photo with the teacher as part of our sign- out process.This day taught me the importance of adaptability, patience, and teamwork, as we navigated through uncertainty and worked together to fulfill our responsibilities.It also highlighted the value of community service and the impact of small actions in creating a positive environment for others.",
  },
  {
    Image: Day5,
    Description: "On the fifth day of our immersion, the teacher assigned us a more interactive and engaging task: leading and teaching the children. This was a meaningful experience as we had the opportunity to connect with the kids on a deeper level. We sang songs like Baby Shark and other fun, educational tunes, which brought joy to the children and created a lively atmosphere. Seeing their smiles and enthusiasm was incredibly rewarding and reminded me of the importance of creativity and energy when working with young learners. In the afternoon, the teacher tasked us with planting and watering plants.While it was a different kind of responsibility compared to the morning, it was equally fulfilling.This activity taught me the value of caring for the environment and contributing to the upkeep of the daycare’s surroundings.It also reinforced the idea that every task, no matter how small, plays a part in creating a nurturing space for the children. Overall, Day 5 was a blend of fun, responsibility, and learning.It highlighted the importance of adaptability, teamwork, and the joy of serving others, whether through teaching, singing, or caring for the environment.This day deepened my appreciation for the role of educators and community workers in shaping a positive and supportive environment for children.",
  },
  {
    Image: Day6,
      Description: "On March 6, our sixth day of immersion, we temporarily transferred to the health center as the daycare teacher had a meeting or event to attend. This change of location allowed us to experience a different aspect of community service. Upon arriving at the Lumbia Health Center, we immediately began our tasks, which primarily involved cleaning the floors and mapping. These activities, though seemingly simple, were essential in maintaining a clean and organized environment for the health center’s staff and visitors. In the afternoon, we continued with cleaning and mapping, ensuring that the health center remained orderly and functional.While the work was repetitive, it taught me the importance of diligence and attention to detail, especially in a setting where cleanliness and organization are crucial for health and safety. This day highlighted the value of flexibility and adaptability, as we seamlessly transitioned from the daycare to the health center.It also reinforced the idea that every role, no matter how small, contributes to the overall functioning of a community.Serving at the health center gave me a deeper appreciation for the hard work and dedication of healthcare workers and support staff who ensure that these facilities run smoothly.Overall, it was a humbling and insightful experience.",
  },
  {
    Image: Day7,
      Description: "Todays immersion activity was all about teamwork, responsibility, and maintaining cleanliness. Our tasks included cleaning cabinets, transferring the plate holder, wiping plates with rugs, and cleaning leaves outside. At first, these tasks seemed simple, but I quickly realized the importance of organization and attention to detail. While cleaning the cabinet, I saw how proper arrangement helps maintain order.Transferring the plate holder required coordination, reminding me that even small tasks require teamwork.Cleaning the plates and using rugs taught me patience and the value of keeping things neat.Finally, sweeping the leaves outside made me appreciate the effort needed to maintain a clean and pleasant environment. Overall, today’s experience reinforced the importance of cleanliness and discipline.It may not have been a technical task, but it showed me that every responsibility, no matter how small, contributes to a better workplace.",
  },
  {
    Image: School,
    Description: "Day 8 Description",
  },
  {
    Image: School,
    Description: "Day 9 Description",
  },
  {
    Image: School,
    Description: "Day 10 Description",
  },
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

const isModalOpen = ref(false);
const modalImage = ref(null);

const openModal = (activity) => {
  modalImage.value = activity;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalImage.value = null;
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

/* Center the modal */
.fixed.inset-0 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
