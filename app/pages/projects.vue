<template>
  <section>
    <NuxtLink to="/"
      class="group flex items-center justify-center max-md:flex-col-reverse max-md:gap-4 md:items-end md:justify-between">
      <div class="text-center md:text-end">
        <h1
          class="text-moss-500 font-jersey flex-1 text-[clamp(70px,5vw,200px)] leading-[clamp(40px,2.75vw,200px)] text-green-700 transition-colors group-hover:text-green-500">
          zoch.dev
        </h1>
      </div>
      <NuxtImg src="/ascii.png" class="mix-blend-multiply" height="100" alt="ASCII rendition of my profile picture" />
    </NuxtLink>
  </section>

  <section class="pt-16">
    <h2 class="font-serif text-4xl font-semibold text-olive-600">Works</h2>
    <ul class="mt-4 grid gap-2">
      <li>
        <a href="https://zaura.net" target="_blank" class="group flex justify-between gap-1">
          <strong class="font-serif text-lg">Zaura Studios</strong>
          <span
            class="font-mono text-sm text-olive-800 underline transition-colors group-hover:text-olive-600">zaura.net</span>
        </a>
        <p class="text-justify">
          This is my child project. I make resource packs for Minecraft and this
          is where I host them. Went through many iterations before I was happy
          with it. Developed with Next.js and PayloadCMS. Has Patreon (OAuth)
          auth for letting subscribed members have <em>signed</em> product
          downloads.
        </p>
      </li>

      <li>
        <a href="https://www.frisify.com/en" target="_blank" class="group flex justify-between gap-1">
          <strong class="font-serif text-lg">Frisify</strong>
          <span
            class="font-mono text-sm text-olive-800 underline transition-colors group-hover:text-olive-600">www.frisify.com</span>
        </a>
        <p class="text-justify">
          Frisify is a translation and marketing agency committed to providing
          exceptional to corporations and individuals both within and outside of
          Fryslân. Developed the website using NextJS and implemented i18n for
          English, Dutch and Frisian.
        </p>
      </li>

      <li>
        <a href="https://www.shivamzter.com" target="_blank" class="group flex justify-between gap-1">
          <strong class="font-serif text-lg">Shivamzter</strong>
          <span
            class="font-mono text-sm text-olive-800 underline transition-colors group-hover:text-olive-600">www.shivamzter.com</span>
        </a>
        <p class="text-justify">
          Projects showcase website developed using NextJS and PayloadCMS.
        </p>
      </li>
    </ul>
  </section>

  <section class="pt-16">
    <h2 class="font-serif text-4xl font-semibold text-olive-600">Projects</h2>
    <ul class="mt-4 grid gap-2">
      <li>
        <a href="https://github.com/zaurastudios/PixelToolkit" target="_blank" class="group flex justify-between gap-1">
          <strong class="font-serif text-lg">PixelToolkit</strong>
          <span
            class="font-mono text-sm text-olive-800 underline transition-colors group-hover:text-olive-600">GitHub</span>
        </a>
        <p class="text-justify">
          A <em>WIP</em> alternative to
          <a href="https://github.com/Null-MC/PixelGraph" target="_blank" rel="noreferrer noopener"
            class="font-mono text-sm text-olive-800 underline transition-colors hover:text-olive-600">
            PixelGraph</a>. Being developed with Tauri. It is an application to view (in 3D as
          well), compile and edit PBR materials for Minecraft.
        </p>
      </li>

      <li>
        <strong class="font-serif text-lg">Help@MPS</strong>
        <p class="text-justify">
          Launched a food consumption and wastage application. Used to measure
          the food usage across a campus and awards points based on the lowest
          wastage and healthiness ration. Built with Flutter and Firebase. Won
          first place in the inter-school STEM competition (2022).
        </p>
      </li>
    </ul>
  </section>
</template>


<script setup lang="ts">
useSeoMeta({
  title: "Projects | zoch.dev",
  ogTitle: "Projects | zoch.dev",
  description: "Works and projects I've done | Zoclhas's Portfolio",
  ogDescription: "Zoclhas's Portfolio",
  ogImage: "https://zoch.dev/meta.jpg",
})
</script>
