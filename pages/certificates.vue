<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(certificate, index) in certificates"
        :key="index"
        class="bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div @click="openModal(certificate.image)" class="cursor-pointer">
          <img
            :src="certificate.image"
            alt="certificate"
            class="w-full h-48 object-cover rounded-t-lg outline-none border-none"
          />
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold">{{ certificate.title }}</h2>
          <p class="mt-2 text-gray-300">{{ certificate.description }}</p>
        </div>
      </div>
    </div>
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        class="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full modal-content"
      >
        <button
          @click="closeModal"
          class="text-gray-700 py-1 px-2 rounded-md float-right"
        >
          <X />
        </button>
        <img :src="modalImage" alt="certificate" class="w-full h-auto mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { X } from "lucide-vue-next";
import WebDev from "./assets/images/WebDevelopment.jpg";
import SQL from "./assets/images/SQL.jpg";
import NCII from "./assets/images/NCII.jpg";

const certificates = [
  {
    title: "Web Development Certification",
    description:
      "Received on January 3, 2025. This certification covers various aspects of web development including HTML, CSS, JavaScript, and modern frameworks.",
    image: WebDev,
  },
  {
    title: "Introduction to SQL Certification",
    description:
      "Received on January 6, 2025. This certification demonstrates proficiency in SQL, including database design, querying, and optimization techniques.",
    image: SQL,
  },
  {
    title: "NCII Certification",
    description:
      "Received on January 17, 2025. This certification focuses on technical skills and competencies required for various industries.",
    image: NCII,
  },
];

const isModalOpen = ref(false);
const modalImage = ref("");

const openModal = (image) => {
  modalImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalImage.value = "";
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.modal-content {
  max-height: 500px; /* Adjust the height as needed */
  overflow-y: auto; /* Add scroll if content overflows */
}
</style>
