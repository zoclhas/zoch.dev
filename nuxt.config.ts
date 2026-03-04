import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [
      // @ts-ignore Not sure why this is throwing an error
      tailwindcss(),
    ],
  },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image"],
  app: {
    head: { title: "zoch.dev" },
  },
  fonts: {
    families: [
      { name: "Jersey 25", provider: "google" },
      { name: "Lilex", provider: "google" },
      { name: "Red Rose", provider: "google" },
      { name: "IBM Plex Sans", provider: "google" },
    ],
  },
});
