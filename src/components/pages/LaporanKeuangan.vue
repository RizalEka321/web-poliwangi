<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Profil</span>
    </div>
    <div class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden">
      <img :src="banner" alt="Banner Profil" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora)">Laporan Keuangan</h1>
      </div>
    </div>

    <section class="">
      <p class="text-justify text-[var(--text-black)]" style="font-family: var(--font-albert)">
        Laporan keuangan Politeknik Negeri Banyuwangi disusun berdasarkan sistem pengendalian intern yang memadai, dan isinya telah menyajikan informasi pelaksanaan anggaran dan posisi keuangan secara layak sesuai dengan Standar Akuntansi
        Pemerintahan. Yang terdiri dari:
      </p>
      <ul class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)] mt-5" style="font-family: var(--font-albert)">
        <li>Laporan realisasi anggaran</li>
        <li>Neraca</li>
        <li>Laporan Operasional</li>
        <li>Laporan Perubahan ekuitas</li>
        <li>Catatan atas laporan keuangan</li>
      </ul>
      <p class="text-justify text-[var(--text-black)] mt-5" style="font-family: var(--font-albert)">
        Laporan Keuangan Politeknik Negeri Banyuwangi disusun tiap semester dan triwulan dengan mengacu pada Peraturan Pemerintah Nomor 71 Tahun 2010 tentang Standar Akuntansi Pemerintah dan Kaidah-kaidah Pengelolaan Keuangan yang Sehat
        dalam Pemerintahan. Laporan Keuangan Politeknik Negeri Banyuwangi telah disusun dan disajikan dengan basis akrual sehingga akan mampu menyajikan informasi keuangan yang transparan, akurat dan akuntabel.
      </p>
    </section>
  </div>
</template>

<script setup>
import banner from "@/assets/img/bannerprofil.png";
</script>
