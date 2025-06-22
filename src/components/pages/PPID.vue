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
          <table class="min-w-full text-center border-collapse" style="font-family: var(--font-lora)">
            <thead class="bg-[var(--blue-dark)] text-white">
              <tr>
                <th class="p-2 border border-[var(--blue-dark)]">No.</th>
                <th class="p-2 border border-[var(--blue-dark)]">Struktur Organisasi Senat</th>
                <th class="p-2 border border-[var(--blue-dark)]">Nama</th>
              </tr>
            </thead>
            <tbody class="text-gray-800">
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">1</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Atasan PPID</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Direktur</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">2</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">PPID Pelaksana</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Wakil Direktur Bidang Umum dan Keuangan</td>
              </tr>
              <tr class="bg-[var(--blue-dark)] text-white font-bold">
                <td colspan="3" class="p-2 border border-[var(--blue-dark)] text-center">Pelayanan Informasi</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">3</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Bidang Akademik dan Kemahasiswaan</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Kepala BAKPSI</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">4</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Bidang Penelitian dan Kerjasama</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Kepala PPPM</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">5</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Bidang Keuangan, Sarana, dan Prasarana</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Kasubbag Keuangan</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">6</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Petugas Penyelesaian Sengketa</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Kasubbag Umum dan Kepegawaian</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">7</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Pengelola Informasi dan Dokumentasi</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Hubungan Masyarakat</td>
              </tr>
              <tr>
                <td class="p-2 border border-[var(--blue-dark)]">8</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Pengembang PPID bagian TIK</td>
                <td class="p-2 border border-[var(--blue-dark)] text-start">Kepala UPT TIK</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
