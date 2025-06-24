<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Akademik</span>
    </div>
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="bannerAkademik"
        alt="Banner Akademik"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Biaya Pendidikan
        </h1>
      </div>
    </div>

    <section class="">
      <img :src="biayapendidikan" alt="Biaya Pendidikan" class="shadow-lg" />
    </section>
  </div>
</template>

<script setup>
import bannerAkademik from "@/assets/img/bannerakademik.png";
import biayapendidikan from "@/assets/img/biayapend.png";
</script>
