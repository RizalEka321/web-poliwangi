<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Layanan Publik</span>
    </div>
    <div class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden">
      <img :src="banner" alt="Banner" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-3xl md:text-5xl font-bold text-white text-center">Survey Kepuasan Masyarakat</h1>
      </div>
    </div>
    <section class="survey">
      <div class="flex flex-col md:flex-row gap-5 text-justify" style="font-family: var(--font-albert)">
        <div class="flex-1 text-left" style="font-family: var(--font-albert)">
          <p class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify">
            Dalam rangka perbaikan pelayanan Politeknik Negeri Banyuwangi khususnya kepada mahasiswa, diharapkan kepada Mahasiswa Politeknik Negeri Banyuwangi untuk dapat meluangkan waktu mengisi kuisioner berikut, (Mohon isi dengan jujur,
            identitas anda akan dirahasiakan). Terima kasih.
          </p>
        </div>
        <div class="flex-1 relative">
          <img :src="banner" alt="Foto Poliwangi" class="w-full h-70 object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-600/30 to-transparent"></div>
          <div class="absolute inset-0 flex flex-col justify-end ps-5 pb-5" style="font-family: var(--font-albert)">
            <h1 class="text-lg md:text-xl font-bold text-white">Form Kuisioner.</h1>
            <h2 class="text-lg md:text-xl font-bold text-white underline">SURVEY KEPUASAN MASYARAKAT</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/banner_home.jpg";
</script>
