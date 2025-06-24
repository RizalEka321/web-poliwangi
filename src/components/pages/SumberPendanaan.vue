<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium"
        >Riset & Pengabdian</span
      >
    </div>
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="bannerAkademik"
        alt="Banner Riset & Pendanaan"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Sumber Pendanaan
        </h1>
      </div>
    </div>
    <section class="">
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Guna mewujudkan riset berlandaskan road map topik riset unggulan dan
        riset nasional yang tercantum pada RIP Politeknik Negeri Banyuwangi.
        Pelaksanaan program penelitian dan pengabdian di Politeknik Neger
        Banyuwangi ditopang oleh berbagai sumber. Di antaranya adalah sebagai
        berikut:
      </p>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)] mt-5"
        style="font-family: var(--font-albert)"
      >
        <li>Dana DIPA Politeknik Negeri Banyuwangi</li>
        <li>Dana DRPM KemristekDikti</li>
        <li>
          Dana riset kompetitif nasional yang berasal dari Riset Nasional Dit.
          Litabmas Dikti
        </li>
        <li>Hibah Penelitian Kerjasama Pemerintah Kabupaten Banyuwangi</li>
        <li>Kerja sama lainnya</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import bannerAkademik from "@/assets/img/bannerrisetpendanaan.jpeg";
</script>
