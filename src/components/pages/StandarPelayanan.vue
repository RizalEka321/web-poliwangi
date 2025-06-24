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
          Standar Pelayanan Publik
        </h1>
      </div>
    </div>
    <section class="pelayanan">
      <div
        class="text-justify leading-relaxed space-y-6"
        style="font-family: var(--font-albert)"
      >
        <div class="mx-auto">
          <div class="overflow-x-auto">
            <table
              class="w-full text-sm text-left bg-[var(--bg-grey)] shadow rounded-lg"
            >
              <thead
                class="bg-[var(--blue-dark)] text-white"
                style="font-family: var(--font-lora)"
              >
                <tr>
                  <th class="px-4 py-3 w-12 text-cente rounded-tl-lg">No.</th>
                  <th class="px-4 py-3">Nama Berkas</th>
                  <th class="px-4 py-3 w-32 rounded-tr-lg">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 font-semibold">
                <tr v-for="item in layanan" :key="item.no">
                  <td
                    class="px-4 py-3 border-b border-[var(--blue-dark)] text-center"
                  >
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
    </section>
  </div>
</template>
<script setup>
const layanan = [
  { no: 1, nama: "Pelayanan–Pendaftaran Maba Jalur PMDK" },
  { no: 2, nama: "Pelayanan–Pendaftaran Maba UMPN dan Jalur Mandiri" },
  { no: 3, nama: "Pelayanan–Registrasi Mahasiswa Baru" },
  { no: 4, nama: "Pelayanan–Penurunan UKT" },
  { no: 5, nama: "Pelayanan–Surat Keterangan Masih Kuliah" },
  { no: 6, nama: "Pelayanan–Aktivasi Mahasiswa Setelah Cuti" },
  {
    no: 7,
    nama: "Pelayanan–Keikutsertaan UTS UAS bagi mendapat surat peringatan",
  },
  { no: 8, nama: "Pelayanan–Pelaksanaan UTS UAS" },
  {
    no: 9,
    nama: "Pelayanan–Keikutsertaan UTS UAS bagi mendapat surat peringatan",
  },
  { no: 10, nama: "Pelayanan–Yudisium2" },
  { no: 11, nama: "Pelayanan–Legalisir Ijasah dan Transkrip Nilai" },
  { no: 12, nama: "Pelayanan–Wisuda" },
  { no: 13, nama: "Pelayanan–Kerja Praktek" },
  { no: 14, nama: "Pelayanan–Penerimaan Beasiswa" },
  { no: 15, nama: "Pelayanan–Penghentian Beasiswa" },
  { no: 16, nama: "Pelayanan–Pembuatan KTM Hilang Rusak" },
  { no: 17, nama: "Pelayanan–Program PKM" },
  { no: 18, nama: "Pelayanan–Kegiatan Kewirausahaan Mahasiswa" },
  { no: 19, nama: "Pelayanan–Pendanaan Kegiatan Mahasiswa 2" },
  { no: 20, nama: "Pelayanan–Pelaporan Pertanggungjawaban Kegiatan Mahasiswa" },
];

import banner from "@/assets/img/bannerlayanan.png";
</script>
