<template>
  <div class="flex space-x-4 pt-6 pb-10 px-5 md:px-20" style="font-family: var(--font-albert)">
    <router-link to="/" class="text-[#626262] hover:text-yellow-300 font-normal">Home</router-link>
    <a class="text-black hover:text-yellow-300 font-medium">Profil</a>
  </div>

  <section class="sejarah pb-10 px-5 md:px-20">
    <div class="relative mb-8">
      <img src="/src/assets/img/banner_home.jpg" alt="Foto Poliwangi" class="w-full h-45 object-cover shadow-lg" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">PPID POLIWANGI</h1>
      </div>
    </div>
    <div class="text-justify text-gray-800 leading-relaxed space-y-6 px-4" style="font-family: var(--font-albert)">
      <div class="flex flex-col items-center justify-center gap-4 px-4 md:px-20 py-3 mb-5">
        <h2 class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)]" style="font-family: var(--font-lora)">Susunan Pejabat Pengelola Informasi Dan Dokumentasi</h2>
        <h2 class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)]" style="font-family: var(--font-lora)">Politeknik Negeri Banyuwangi</h2>
        <div class="w-40 h-1 bg-[var(--accent-yellow)] rounded-full"></div>
      </div>
      <div class="flex justify-center">
        <div class="overflow-x-auto w-full max-w-4xl p-2 bg-white">
          <div class="overflow-x-auto bg-white rounded-lg shadow border border-[var(--blue-dark)]">
            <table class="min-w-full text-left text-sm text-gray-700 border-collapse">
              <thead class="bg-[var(--blue-dark)] text-white">
                <tr>
                  <th class="p-2 border border-[var(--blue-dark)] text-center">No.</th>
                  <th class="p-2 border border-[var(--blue-dark)]">Struktur Organisasi Senat</th>
                  <th class="p-2 border border-[var(--blue-dark)]">Nama</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in strukturOrganisasi" :key="item.no">
                  <tr v-if="item.isHeader" class="bg-[var(--blue-dark)] text-white font-bold">
                    <td colspan="3" class="p-2 border border-[var(--blue-dark)] text-center">{{ item.bagian }}</td>
                  </tr>
                  <tr v-else>
                    <td class="p-2 border border-[var(--blue-dark) text-center">{{ item.no }}</td>
                    <td class="p-2 border border-[var(--blue-dark)] text-start">{{ item.bagian }}</td>
                    <td class="p-2 border border-[var(--blue-dark)] text-start">{{ item.nama }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const strukturOrganisasi = [
  { no: 1, bagian: "Atasan PPID", nama: "Direktur" },
  { no: 2, bagian: "PPID Pelaksana", nama: "Wakil Direktur Bidang Umum dan Keuangan" },
  { no: 3, bagian: "Pelayanan Informasi", nama: "", isHeader: true },
  { no: 4, bagian: "Bidang Akademik dan Kemahasiswaan", nama: "Kepala BAKPSI" },
  { no: 5, bagian: "Bidang Penelitian dan Kerjasama", nama: "Kepala PPPM" },
  { no: 6, bagian: "Bidang Keuangan, Sarana, dan Prasarana", nama: "Kasubbag Keuangan" },
  { no: 7, bagian: "Petugas Penyelesaian Sengketa", nama: "Kasubbag Umum dan Kepegawaian" },
  { no: 8, bagian: "Pengelola Informasi dan Dokumentasi", nama: "Hubungan Masyarakat" },
  { no: 9, bagian: "Pengembang PPID bagian TIK", nama: "Kepala UPT TIK" },
];
</script>
