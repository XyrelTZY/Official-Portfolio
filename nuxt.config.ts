// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  components: true,

  css: ["./assets/styles/global.css"],

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  image: {
    inject: true,
    quality: 80,
    dir: "assets/images",
    densities: [1, 2, 3],
    format: ["webp", "jpg", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
