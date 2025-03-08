<template>
  <div class="min-h-screen overflow-x-hidden">
    <!-- Detailed Description -->
    <div
      class="rounded-xl p-8 mb-12 flex flex-col lg:flex-row md:flex-row gap-10"
    >
        <div class="flex justify-center flex-col gap-2 mb-6" id="AnimationTopToBottom">
            <img src="../assets/images/Xyrel.jpg"
                 alt="XyrelTzy"
                 class="-mb-10 h-72 lg:w-auto md:w-auto lg:h-auto md:h-auto lg:w-auto md:w-auto lg:mb-0 md:mb-0 object-cover transform transition-transform duration-300 rounded-full animate-profile-move border-2 border-green-500" />
            <NuxtLink to="/StudentInfo/StudentInfo.docx"
                      target="_blank"
                      class="px-6 py-2 mt-10 lg:mt-0 md:mt-0 rounded-full bg-gradient-to-r text-center from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                Personal Information
            </NuxtLink>
        </div>
      <div
        class="prose dark:prose-invert max-w-none text-justify"
        id="AnimationRightToLeft"
      >
        <p class="!text-[#E2E8F0] dark:text-gray-600 leading-relaxed">
          As a Grade 12 student at Zamboanga del Sur National High School, I've
          developed a deep passion for
          <span class="underline decoration-green-500">Web Development</span>
          and <span class="underline decoration-green-500">Design</span>. My
          journey in tech began with
          <span class="underline decoration-green-500"
            >Frontend Development</span
          >, where I discovered my love for creating intuitive and visually
          appealing user interfaces. This naturally led me to explore
          <span class="underline decoration-green-500">UI/UX Design</span>,
          where I learned to balance aesthetics with functionality. I enjoy the
          challenge of designing websites that not only look visually striking
          but also offer an optimal user experience.
        </p>

        <p class="!text-[#E2E8F0] dark:text-gray-600 leading-relaxed my-6">
          My curiosity drove me to dive into
          <span class="underline decoration-green-500">Backend Development</span
          >, allowing me to build
          <span class="underline decoration-green-500"
            >Full-Stack Applications</span
          >. The more I learned about how systems and servers communicate, the
          more I appreciated the importance of a seamless connection between the
          frontend and backend. This exploration made me realize how crucial a
          robust
          <span class="underline decoration-green-500">Backend</span>
          is to ensure the reliability and scalability of a
          <span class="underline decoration-green-500">Web Application</span>. I
          believe in creating solutions that not only look good but also perform
          efficiently and provide real value to users.
        </p>

        <p class="!text-[#E2E8F0] dark:text-gray-600 leading-relaxed">
          I am particularly passionate about learning new technologies, and I
          actively keep myself updated with the latest advancements in
          <span class="underline decoration-green-500">Web Development</span>.
          My current focus is on mastering modern
          <span class="underline decoration-green-500">Web Frameworks</span>,
          exploring serverless architectures, and expanding my knowledge of
          performance optimization techniques. I'm also keen on integrating
          accessibility features to ensure that my applications are usable for
          all users, regardless of their abilities or devices.
        </p>
      </div>
    </div>

    <!-- Tech Stack Timeline with Zigzag Pattern -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-5xl mx-auto">
        <!-- Timeline Section -->
        <div class="mb-16 relative">
          <h2
            class="text-2xl font-bold !text-[#E2E8F0] dark:text-black mb-12 text-center"
          >
            My Technologies Journey
          </h2>

          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 lg:h-full md:h-full h-[63rem] w-1 bg-green-400"
          ></div>

          <!-- Timeline Items -->
          <div class="relative">
            <!-- Frontend (Right) -->
            <div class="flex flex-col md:flex-row items-center mb-24">
              <div class="hidden md:block w-1/2"></div>
              <!-- Spacer for right alignment -->
              <div
                class="bg-gray-600 absolute left-1/2 transform -translate-x-1/2 z-10"
              >
                <div
                  class="w-8 h-8 lg:bg-green-400 md:bg-green-400 lg:bg-green-400 rounded-md flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-green-400 mb-2 lg:text-gray-600 md:text-gray-600 lg:mb-0 md:mb-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-full md:w-1/2 pl-0 md:pl-8">
                <div
                  class="!bg-gray-600 dark:bg-gray-100 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <h3
                    class="text-xl font-semibold text-gray-800 dark:text-black mb-4 flex items-center"
                  >
                    <span class="text-green-400 !text-center mr-2"
                      >Frontend Development</span
                    >
                  </h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >Vue 3/ Nuxt 3
                        </span>
                        <span class="text-[#E2E8F0]">95%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 95%"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >Angular</span
                        >
                        <span class="text-[#E2E8F0]">25%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 25%"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >Javascript / TypeScript</span
                        >
                        <span class="text-[#E2E8F0]">95%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 95%"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >Tailwind / SCSS</span
                        >
                        <span class="text-[#E2E8F0]">80%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 80%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend (Left) -->
            <div class="flex flex-col md:flex-row items-center mb-24">
              <div class="w-full md:w-1/2 pr-0 md:pr-8">
                <div
                  class="!bg-gray-600 dark:bg-gray-100 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <h3
                    class="text-xl font-semibold text-gray-800 dark:text-black mb-4 flex items-center"
                  >
                    <span class="text-green-400">Backend Development</span>
                  </h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >Node.js / Express</span
                        >
                        <span class="text-[#E2E8F0]">60%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 60%"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >C Sharp /.NET Core</span
                        >
                        <span class="text-[#E2E8F0]">20%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 20%"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >MySQL / PostgreSQL</span
                        >
                        <span class="text-[#E2E8F0]">48%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 48%"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="!text-[#E2E8F0] dark:text-gray-600"
                          >RESTful APIs</span
                        >
                        <span class="text-[#E2E8F0]">49%</span>
                      </div>
                      <div
                        class="w-full bg-gray-200 dark:bg-gray-400 rounded-full h-2"
                      >
                        <div
                          class="bg-green-500 h-2 rounded-full"
                          style="width: 49%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  class="w-8 h-8 lg:bg-green-400 md:bg-green-400 lg:bg-green-400 rounded-md flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-green-400 mb-2 lg:text-gray-600 md:text-gray-600 lg:mb-0 md:mb-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
              </div>
              <div class="hidden md:block w-1/2"></div>
              <!-- Spacer for left alignment -->
            </div>

            <!-- Design & Tools (Right) -->
            <div class="flex flex-col md:flex-row items-center">
              <div class="hidden md:block w-1/2"></div>
              <!-- Spacer for right alignment -->
              <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  class="w-8 h-8 lg:bg-green-400 md:bg-green-400 lg:bg-green-400 rounded-md flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-green-400 mb-2 lg:text-gray-600 md:text-gray-600 lg:mb-0 md:mb-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-full md:w-1/2 pl-0 md:pl-8">
                <div
                  class="!bg-gray-600 dark:bg-gray-100 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <h3
                    class="text-xl font-semibold text-gray-800 dark:text-black mb-4 flex items-center"
                  >
                    <span class="text-green-400 mr-2">Design & Tools</span>
                  </h3>
                  <div class="space-y-4">
                    <div class="p-4 rounded-lg">
                      <h4 class="font-medium text-green-500 mb-2">
                        UI/UX Design
                      </h4>
                      <p class="text-sm !text-[#E2E8F0] dark:text-gray-600">
                        Proficient in creating user-centered designs with focus
                        on usability and accessibility
                      </p>
                    </div>
                    <div class="p-4 rounded-lg">
                      <h4 class="font-medium text-green-500 mb-2">
                        Web Design
                      </h4>
                      <p class="text-sm !text-[#E2E8F0] dark:text-gray-600">
                        Expert in modern web design principles, responsive
                        layouts, and design systems
                      </p>
                    </div>
                    <div class="p-4 rounded-lg">
                      <h4 class="font-medium text-green-500 mb-2">
                        Tools & Methods
                      </h4>
                      <ul
                        class="text-sm !text-[#E2E8F0] dark:text-gray-600 space-y-1"
                      >
                        <li class="flex items-center">
                          Git, VS Code, Visual Studio,
                        </li>
                        <li class="flex items-center">Figma, Adobe XD</li>
                        <li class="flex items-center">Agile, Scrum</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
@keyframes profile-move {
  0% {
    border-radius: 50% 40% 30% 20%;
  }
  25% {
    border-radius: 40% 50% 20% 30%;
  }
  50% {
    border-radius: 30% 20% 50% 40%;
  }
  75% {
    border-radius: 20% 30% 40% 50%;
  }
  100% {
    border-radius: 50% 40% 30% 20%;
  }
}

.animate-profile-move {
  animation: profile-move 5s infinite ease-in-out;
}

/* Animation */
#AnimationRightToLeft {
  animation: right-to-left 1s ease-in-out;
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
  animation: top-to-bottom 1s ease-in-out;
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

#AnimationLeftToRight {
  animation: left-to-right 1s ease-in-out;
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
