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
        <h1 class="text-3xl md:text-5xl font-bold text-white text-center">Pengaduan POLIWANGI</h1>
      </div>
    </div>
    <section class="pengaduan">
      <div class="text-justify text-gray-800 leading-relaxed space-y-6 px-15 mb-40" style="font-family: var(--font-albert)">
        <div>
          <p>
            Segala bentuk penyalahgunaan wewenang, hambatan dalam pelayanan kepada civitas akademika, dan/atau dugaan tindak pidana korupsi, kolusi dan nepotisme di lingkungan civitas akademika Politeknik Negeri Banyuwangi silahkan
            dilaporkan melalui email <span class="underline text-[var(--blue-dark)] font-bold">pengaduan@poliwangi.ac.id</span> atau melalui aplikasi <span class="underline text-[var(--blue-dark)] font-bold">lapor.poliwangi.ac.id</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/banner_home.jpg";
</script>
