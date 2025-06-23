<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Profil</span>
    </div>
    <section class="sambutan">
      <div class="mb-4">
        <h1 class="text-2xl md:text-4xl font-black text-[var(--blue-dark)]" style="font-family: var(--font-lora)">Sambutan Direktur</h1>
      </div>
      <div class="relative mb-8">
        <img src="/src/assets/img/sambutan.png" alt="Foto Direktur Poliwangi" class="w-full object-cover shadow-lg" />
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-600/30 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-end pb-10" style="font-family: var(--font-lora)">
          <h1 class="text-xl md:text-3xl font-bold text-white text-center">Ir. M. Shofi’ul Amin, S.T., M.T.</h1>
          <h2 class="text-xl md:text-3xl text-white text-center mt-2">Direktur Politeknik Negeri Banyuwangi</h2>
        </div>
      </div>
      <div class="text-justify text-gray-800 leading-relaxed">
        <p class="mb-4" style="font-family: var(--font-albert)">
          Poliwangi telah menjadi perguruan tinggi yang memberikan lulusan terbaiknya kepada bangsa dan negara. Capaian itu kita syukuri dengan mengamati lulusan banyak berkiprah di berbagai sektor industri dan instansi di tanah air ini.
          Poliwangi yang bertekad menjadi Technopreneurs Politeknik yang berwawasan Global telah menentukan arah untuk mendorong mahasiswa untuk menjadi Technopreneurs dengan menciptakan berbagai inovasi berdasarkan mata kuliah yang
          ditempuh sehingga bermanfaat bagi masyarakat. Memiliki wawasan untuk bisa berperan aktif baik secara nasional maupun internasional dengan inisiasi menjalin hubungan dengan berbagai perguruan tinggi di luar negeri.
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/banner_home.jpg";
</script>
