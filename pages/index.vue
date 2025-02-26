<template>
  <div>
    <!-- Hero Section -->
    <section
      class="min-h-screen flex flex-col lg:flex-row justify-center items-center text-center lg:text-left w-full h-full relative overflow-hidden -mb-10 lg:-mt-[5rem]"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(#4f46e5 0.5px, transparent 0.5px);
            background-size: 24px 24px;
          "
        ></div>
      </div>

      <div class="flex-1 p-6 lg:p-10 z-10">
        <h1
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 lg:whitespace-nowrap"
          id="AnimationLeftToRight"
        >
          Hi, <span class="text-[#E2E8F0] ml-1">I am Xyrel D. Tenefrancia</span>
        </h1>
        <h1
          class="text-base lg:text-3xl text-green-500 mt-4 !text-green-400 overflow-hidden whitespace-nowrap"
          id="AnimationLeftToRight"
        >
          <span class="typing-text"></span>
        </h1>

        <!-- About Me Description -->
        <p
          class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4 text-[#E2E8F0] max-w-2xl text-justify leading-relaxed sm:leading-normal"
          id="AnimationLeftToRight"
        >
          I am a passionate
          <span class="underline decoration-green-500"
            >Fullstack Web Developer</span
          >
          with expertise in building scalable and user-friendly web
          applications. My skill set spans both frontend and backend
          development, allowing me to deliver end-to-end solutions. I specialize
          in modern frameworks like
          <span class="underline decoration-green-500">Vue.js</span>,
          <span class="underline decoration-green-500">Nuxt.js</span>, and
          <span class="underline decoration-green-500">Node.js</span>, and I am
          always eager to learn and adapt to new technologies.
        </p>

        <!-- Call to Action Buttons -->
        <div class="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <NuxtLink
            to="/about"
            id="AnimationTopToBottom"
            class="px-6 py-2 lg:px-8 lg:py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg transition-colors duration-300 transform text-sm lg:text-base"
          >
            About Me
          </NuxtLink>
          <button
            @click="RedirectToResume"
            id="AnimationTopToBottom"
            class="px-6 py-2 lg:px-8 lg:py-3 border-2 border-green-600 text-green-400 rounded-lg transition-colors duration-300 transform text-sm lg:text-base"
          >
            My Resume
          </button>
          <button
            @click="ApplicationForm"
            id="AnimationTopToBottom"
            class="lg:hidden md:hidden px-6 py-2 lg:px-8 lg:py-3 border-2 border-green-600 text-green-400 rounded-lg transition-colors duration-300 transform text-sm lg:text-base"
          >
            Application Form
          </button>
          <button
            @click="RequestForm"
            id="AnimationTopToBottom"
            class="lg:hidden md:hidden px-6 py-2 lg:px-8 lg:py-3 border-2 border-green-600 text-green-400 rounded-lg transition-colors duration-300 transform text-sm lg:text-base"
          >
            Request Form
          </button>
          <button
            @click="EndorsementLetter"
            id="AnimationTopToBottom"
            class="lg:hidden md:hidden px-6 py-2 lg:px-8 lg:py-3 border-2 border-green-600 text-green-400 rounded-lg transition-colors duration-300 transform text-sm lg:text-base"
          >
            Endorsement Letter
          </button>
        </div>

        <!-- Social Links -->
        <div class="mt-8 flex gap-6 justify-center lg:justify-start">
          <a
            href="https://github.com/XyrelTZY/"
            id="AnimationTopToBottom"
            target="_blank"
            class="hover:text-green-600 transform hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
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
          <a
            href="#"
            id="AnimationTopToBottom"
            target="_blank"
            class="text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
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
            href="https://www.facebook.com/Xyrel.Hshs"
            id="AnimationTopToBottom"
            target="_blank"
            class="text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
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
        </div>
      </div>

      <div
        class="relative flex-1 flex justify-center items-center w-full h-full mt-8 lg:mt-0"
      >
        <div
          class="absolute w-48 h-48 lg:w-96 lg:h-96 border-2 border-green-500 rounded-full animate-border-move"
        ></div>
        <img
          src="../assets/images/Xyrel.jpg"
          alt="XyrelTzy"
          class="w-56 h-56 lg:w-96 lg:h-96 mb-10 lg:mb-0 md:mb-0 object-cover transform transition-transform duration-300 rounded-full animate-profile-move border-2 border-green-500"
        />
      </div>
    </section>

    <!-- Skills Tree Section -->
    <section class="min-h-screen px-4 py-12 lg:py-16 relative">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-16 reveal-item !text-[#E2E8F0]"
        >
          Tech Stack
          <div class="w-44 h-1 bg-green-400 mx-auto mt-4"></div>
        </h2>

        <!-- Skills Tree -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-1"
          ></div>

          <!-- Frontend Skills -->
          <div class="skill-card reveal-item !bg-gray-600 rounded-md">
            <div
              class="relative z-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-gray-600"
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
              <h3 class="text-xl font-semibold text-center mb-4 text-green-400">
                Frontend
              </h3>
              <ul class="space-y-3">
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >Vue 3 / Nuxt 3 / Angular</span
                  >
                  <div class="skill-bar" data-level="90"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >Javascript / TypeScript</span
                  >
                  <div class="skill-bar" data-level="85"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >Tailwind CSS / SCSS</span
                  >
                  <div class="skill-bar" data-level="80"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >HTML 5 / CSS 3</span
                  >
                  <div class="skill-bar" data-level="90"></div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="skill-card reveal-item delay-200 !bg-gray-600 rounded-md">
            <div
              class="relative z-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-16 h-16 bg-green-400 rounded-md flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-gray-600"
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
              <h3 class="text-xl font-semibold text-center mb-4 text-green-400">
                Backend
              </h3>
              <ul class="space-y-3">
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >Node.js / Express.js</span
                  >
                  <div class="skill-bar" data-level="60"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >C Sharp / ASP.NET Core</span
                  >
                  <div class="skill-bar" data-level="20"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]"
                    >MySQL / PostgreSQL</span
                  >
                  <div class="skill-bar" data-level="45"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]">RESTful APIs</span>
                  <div class="skill-bar" data-level="60"></div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="skill-card reveal-item delay-400 !bg-gray-600 rounded-md">
            <div
              class="relative z-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                class="w-16 h-16 bg-green-400 rounded-md flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-gray-600"
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
              <h3 class="text-xl font-semibold text-center mb-4 text-green-400">
                Tools & Others
              </h3>
              <ul class="space-y-3">
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]">Git / GitHub</span>
                  <div class="skill-bar" data-level="90"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]">Docker</span>
                  <div class="skill-bar" data-level="10"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]">CI/CD</span>
                  <div class="skill-bar" data-level="15"></div>
                </li>
                <li class="skill-item">
                  <span class="skill-label !text-[#E2E8F0]">AWS</span>
                  <div class="skill-bar" data-level="15"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

onMounted(() => {
  // // Typing animation
  // const text = document.querySelector(".typing-text");
  // if (text) {
  //   text.classList.add("typing-animation");
  // }

  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");

          // Animate skill bars if they're in the skill card
          if (entry.target.classList.contains("skill-card")) {
            const skillBars = entry.target.querySelectorAll(".skill-bar");
            skillBars.forEach((bar) => {
              const level = bar.getAttribute("data-level");
              if (level) {
                (bar as HTMLElement).style.width = `${level}%`;
              }
            });
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Typewriter Logic
  const typewriter = (element: HTMLElement, text: string, delay: number) => {
    let index = 0;
    element.innerHTML = "";
    const type = () => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      }
    };
    type();
  };

  const typingTextElement = document.querySelector(".typing-text");
  if (typingTextElement) {
    const roles = [
      "Fullstack Web Developer",
      "UI/UX Designer",
      "Web Designer",
      "Software Developer",
    ];
    let roleIndex = 0;

    const typeNextRole = () => {
      typingTextElement.innerHTML = "";
      typewriter(typingTextElement as HTMLElement, roles[roleIndex], 100);
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeNextRole, roles[roleIndex].length * 150 + 1000);
    };

    typeNextRole();
  }

  document.querySelectorAll(".reveal-item").forEach((item) => {
    observer.observe(item);
  });

  // Observe all skill cards
  document.querySelectorAll(".skill-card").forEach((card) => {
    observer.observe(card);
  });
});

const RedirectToResume = () => {
  window.open("/resume/XyrelResume.pdf", "_blank");
};

const ApplicationForm = () => {
  window.open("/applicationform/ApplicationForm.pdf", "_blank");
};

const RequestForm = () => {
  window.open("/requestform/RequestForm.docx");
};

const EndorsementLetter = () => {
  window.open("/endorsementletter/EndorsementLetter.docx");
};
</script>

<style scoped>
@keyframes border-move {
  0% {
    border-radius: 50% 40% 30% 20%;
  }
  25% {
    border-radius: 20% 30% 40% 50%;
  }
  50% {
    border-radius: 30% 20% 50% 40%;
  }
  75% {
    border-radius: 40% 50% 20% 30%;
  }
  100% {
    border-radius: 50% 40% 30% 20%;
  }
}

.animate-border-move {
  animation: border-move 3s infinite ease-in-out;
}

@keyframes profile-move {
  0% {
    border-radius: 50% 40% 30% 20%;
  }
  25% {
    border-radius: 40% 50% 20% 30%;
  }
  50% {
    border-radius: 40% 35% 50% 40%;
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
/* Typing Animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-animation {
  animation: typing 3.5s steps(40, end);
  border-right: 0.15em solid transparent;
}

/* Reveal Animation */
.reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.reveal-item.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Add delay classes */
.delay-200 {
  transition-delay: 0.2s;
}

.delay-400 {
  transition-delay: 0.4s;
}

/* Skill Bars */
.skill-item {
  @apply mb-4;
}

.skill-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}

.skill-bar {
  @apply h-2 bg-green-500 rounded-full overflow-hidden relative;
}

.skill-bar::after {
  content: "";
  @apply absolute left-0 top-0 h-full bg-green-600 rounded-full;
  width: 0;
  transition: width 1s ease-out;
}

.-z-1 {
  z-index: -1;
}

/* Animation */
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
</style>
