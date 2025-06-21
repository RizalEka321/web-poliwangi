<template>
    <div class="px-6 md:px-20 py-10 space-y-10">
      <!-- Breadcrumb -->
      <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
        <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
        <span class="mx-1 text-[var(--accent-yellow)]">›</span>
        <span class="text-[var(--text-black)] font-medium">Akademik</span>
      </div>
  
      <!-- Banner -->
      <div class="relative w-full h-64 md:h-80 overflow-hidden">
        <img :src="bannerAkademik" alt="Banner Akademik" class="object-cover w-full h-full" />
        <div class="absolute inset-0 bg-opacity-60 flex items-center ml-20">
          <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora);">
            Peraturan Akademik
          </h1>
        </div>
      </div>

      <section class="">
      <img :src="biayapendidikan" alt="Biaya Pendidikan" class=" shadow-lg" />
    </section>
    </div>
</template>

<script setup>
 import bannerAkademik from '@/assets/img/bannerakademik.png'
 import biayapendidikan from '@/assets/img/biayapend.png'
</script>