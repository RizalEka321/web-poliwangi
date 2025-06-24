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
          Kehidupan Kampus
        </h1>
      </div>
    </div>
    <div
      class="text-justify leading-relaxed space-y-6"
      style="font-family: var(--font-albert)"
    >
      <div class="mx-auto">
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left bg-[var(--bg-grey)] shadow rounded-lg"
          >
            <thead class="bg-[var(--blue-dark)] text-white">
              <tr>
                <th class="px-4 py-3 w-12 rounded-tl-lg">No.</th>
                <th class="px-4 py-3">Nama Berkas</th>
                <th class="px-4 py-3 w-32 rounded-tr-lg">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 font-semibold">
              <tr v-for="item in dokumen" :key="item.no">
                <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                  {{ item.no }}.
                </td>
                <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                  {{ item.nama }}
                </td>
                <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                  <button
                    class="bg-[var(--blue-dark)] hover:bg-blue-600 text-white px-4 py-1 rounded flex items-center justify-center w-full"
                  >
                    <i class="fa-solid fa-file-arrow-down me-2"></i>Unduh
                  </button>
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
  </div>
</template>
<script setup>
const dokumen = [
  { no: 1, nama: "Kegiatan Kemahasiswaan 2019" },
  { no: 2, nama: "Kegiatan Kemahasiswaan 2020" },
  { no: 3, nama: "Kegiatan Kemahasiswaan 2021" },
  { no: 4, nama: "Kegiatan Kemahasiswaan 2022" },
  { no: 5, nama: "Kegiatan Kemahasiswaan 2023" },
  { no: 6, nama: "Kegiatan Kemahasiswaan 2024" },
];

import bannerAkademik from "@/assets/img/bannerakademik.png";
</script>
