<template>
  <section>
    <div
      class="flex items-center justify-center max-md:flex-col-reverse max-md:gap-4 md:items-end md:justify-between"
    >
      <div class="text-center md:text-end">
        <h1
          class="text-moss-500 font-jersey flex-1 text-[clamp(70px,5vw,200px)] leading-[clamp(40px,2.75vw,200px)] text-green-700"
        >
          zoch.dev
        </h1>
        <p class="font-serif text-lg">Student, Software Engineer</p>
      </div>
      <NuxtImg src="/ascii.png" class="mix-blend-multiply" height="400" />
    </div>

    <p class="mt-4">
      A Computer Science undergraduate specialising in web development and
      texture/material art (showcased at
      <a
        href="https://zaura.net"
        target="_blank"
        class="text-olive-800 underline transition-colors hover:text-olive-600"
        >zaura.net</a
      >). I am passionate about exploring new fields and enjoying along the way.
      <NuxtLink
        to="/projects"
        class="text-olive-800 underline transition-colors hover:text-olive-600"
        >Learn more about my projects</NuxtLink
      >
    </p>
    <p class="mt-2">The technologies I am comfortable working with:</p>
    <ul class="flex flex-wrap gap-2">
      <li v-for="skill in skills" :key="skill" class="rounded bg-amber-100 p-1">
        {{ skill }}
      </li>
    </ul>
    <p class="mt-2">
      Outside of programming, I do
      <NuxtLink
        to="/photography"
        class="text-olive-800 underline transition-colors hover:text-olive-600"
      >
        photography</NuxtLink
      >
      and talking walks at obnoxious times. A huge Tokein nerd.
    </p>
  </section>
</template>

<script setup>
const skills = [
  "Rust",
  "TypeScript",
  "Python",
  "S/CSS",
  "Next.js",
  "Nuxt",
  "Tauri",
  "PayloadCMS",
  "TailwindCSS",
];
</script>
