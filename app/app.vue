<template>

  <Body class="bg-amber-50 font-sans antialiased">
    <main class="mx-auto min-h-screen max-w-3xl px-4 py-16 pb-32 md:py-32">
      <NuxtPage />
    </main>
    <NuxtRouteAnnouncer />
  </Body>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: "zoch.dev",
  description: "Zoclhas's Portfolio",
  ogDescription: "Zoclhas's Portfolio",
  ogImage: "https://zoch.dev/meta.jpg",

  themeColor: "#4e5635",
})
</script>
