<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Profil</span>
    </div>
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="banner"
        alt="Banner Profil"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Bagan Struktur Organisasi Poliwangi
        </h1>
      </div>
    </div>

    <section class="organisasi">
      <div
        class="text-justify text-gray-800 leading-relaxed space-y-6"
        style="font-family: var(--font-albert)"
      >
        <img
          src="/src/assets/img/struktur_poliwangi.png"
          alt="Foto Struktur"
          class="w-full object-cover border-3 border-[var(--blue-dark)] rounded-xl"
        />
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/banner_home.jpg";
</script>
