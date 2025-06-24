<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Layanan Publik</span>
    </div>
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="banner"
        alt="Banner Layanan"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Maklumat pelayanan
        </h1>
      </div>
    </div>
    <section class="">
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Maklumat Pelayanan Politeknik Negeri Banyuwangi adalah pernyataan
        tertulis yang memuat komitmen kampus untuk memberikan pelayanan yang
        berkualitas, cepat, mudah, terjangkau, dan terukur kepada seluruh
        mahasiswa, dosen, dan staf. Standar pelayanan menjadi pedoman untuk
        menilai kualitas layanan, termasuk dalam aspek transparansi,
        akuntabilitas, keterbukaan, dan keadilan.
      </p>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Civitas akademika berhak mendapatkan layanan yang sesuai dengan standar,
        seperti kepastian waktu, akses terhadap informasi akademik yang jelas,
        perlindungan dalam proses administrasi, serta hak untuk mengajukan
        keluhan jika layanan tidak sesuai harapan. Maklumat ini memastikan
        kampus melaksanakan prinsip-prinsip tata kelola yang baik, dan seluruh
        pihak dapat memantau serta mengawasi pelayanan yang diberikan.
      </p>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Maklumat ini menunjukkan keseriusan Politeknik Negeri Banyuwangi dalam
        melayani dan mendukung proses belajar mengajar secara profesional dan
        terbuka.
      </p>
    </section>
  </div>
</template>

<script setup>
import banner from "@/assets/img/bannerlayanan.png";
</script>
