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
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-3xl md:text-5xl font-bold text-white text-center mb-2">SAKIP</h1>
        <h2 class="text-2xl md:text-4xl font-bold text-white text-center">(Sistem Akuntabilitas Kinerja Instansi Pemerintah)</h2>
      </div>
    </div>
    <section class="sakip">
      <div class="text-justify leading-relaxed space-y-6" style="font-family: var(--font-albert)">
        <div class="mx-auto">
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left bg-[var(--bg-grey)] shadow rounded-lg">
              <thead class="bg-[var(--blue-dark)] text-white">
                <tr>
                  <th class="px-4 py-3 w-12 rounded-tl-lg">No.</th>
                  <th class="px-4 py-3">Nama Berkas</th>
                  <th class="px-4 py-3 w-32 rounded-tr-lg">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 font-semibold">
                <tr v-for="item in dokumen" :key="item.no">
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">{{ item.no }}.</td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.nama }}
                  </td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    <button class="bg-[var(--blue-dark)] hover:bg-blue-600 text-white px-4 py-1 rounded flex items-center justify-center w-full"><i class="fa-solid fa-file-arrow-down me-2"></i>Unduh</button>
                  </td>
                </tr>
              </tbody>
              <tfoot class="bg-[var(--blue-dark)] text-white">
                <tr>
                  <td class="h-12 rounded-b-lg" colspan="3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const dokumen = [
  { no: 1, nama: "RENCANA STRATEGIS POLIWANGI Tahun 2020–2024" },
  { no: 2, nama: "RENCANA AKSI Tahun 2024" },
  { no: 3, nama: "RENCANA AKSI Tahun 2023" },
  { no: 4, nama: "PERJANJIAN KINERJA Tahun 2024" },
  { no: 5, nama: "PERJANJIAN KINERJA Tahun 2023" },
  { no: 6, nama: "PERJANJIAN KINERJA Tahun 2022" },
  { no: 7, nama: "PERJANJIAN KINERJA Tahun 2021" },
  { no: 8, nama: "LAPORAN KINERJA POLIWANGI Tahun 2024" },
  { no: 9, nama: "LAPORAN KINERJA POLIWANGI Tahun 2023" },
  { no: 10, nama: "LAPORAN KINERJA POLIWANGI Tahun 2022" },
  { no: 11, nama: "LAPORAN KINERJA POLIWANGI Tahun 2021" },
  { no: 12, nama: "LAPORAN KINERJA POLIWANGI Tahun 2020" },
  { no: 13, nama: "LAPORAN KINERJA POLIWANGI Tahun 2019" },
  { no: 14, nama: "LAPORAN KINERJA POLIWANGI Tahun 2018" },
];

import banner from "@/assets/img/bannerprofil.png";
</script>
