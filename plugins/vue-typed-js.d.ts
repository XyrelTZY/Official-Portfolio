import VueTypedJs from "vue-typed-js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTypedJs);
});
