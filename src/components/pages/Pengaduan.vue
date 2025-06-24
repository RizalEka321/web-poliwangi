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
        alt="Banner Riset & Pendanaan"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Pengaduan Poliwangi
        </h1>
      </div>
    </div>
    <section class="pengaduan">
      <div
        class="text-justify text-gray-800 leading-relaxed space-y-6 px-15 mb-40"
        style="font-family: var(--font-albert)"
      >
        <div>
          <p>
            Segala bentuk penyalahgunaan wewenang, hambatan dalam pelayanan
            kepada civitas akademika, dan/atau dugaan tindak pidana korupsi,
            kolusi dan nepotisme di lingkungan civitas akademika Politeknik
            Negeri Banyuwangi silahkan dilaporkan melalui email
            <a
              href="mailto:pengaduan@poliwangi.ac.id"
              target="_blank"
              class="text-[var(--accent-blue)] hover:underline"
            >
              pengaduan@poliwangi.ac.id
            </a>
            atau melalui aplikasi
            <a
              href="https://lapor.poliwangi.ac.id/index.php"
              target="_blank"
              class="text-[var(--accent-blue)] hover:underline"
            >
              lapor.poliwangi.ac.id
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/bannerlayanan.png";
</script>
