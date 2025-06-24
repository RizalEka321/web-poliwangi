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
        <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora)">SENAT</h1>
      </div>
    </div>
    <section class="senat">
      <div class="text-justify text-gray-800 leading-relaxed space-y-6" style="font-family: var(--font-albert)">
        <div>
          <p>Senat merupakan organ yang menjalankan fungsi pertimbangan dan pengawasan akademik dengan rincian tugas Senat sebagai berikut:</p>
          <ul class="list-decimal list-inside mt-2 ms-4 space-y-1">
            <li>Memberikan pertimbangan dalam penetapan norma akademik yang diusulkan Direktur.</li>
            <li>Memberikan pertimbangan dalam penetapan kode etik civitas akademika yang diusulkan Direktur.</li>
            <li>Mengawasi penerapan norma akademik dan kode etik civitas akademika.</li>
            <li>
              Memberikan pertimbangan terhadap ketentuan akademik yang diusulkan Direktur mengenai kurikulum program studi, persyaratan akademik untuk pemberian gelar akademik dan persyaratan akademik untuk pemberian penghargaan akademik.
            </li>
            <li>Mengawasi kebijakan dan pelaksanaan kebijakan akademik Direktur.</li>
            <li>Mengawasi penerapan ketentuan akademik sebagaimana dimaksud pada poin 4.</li>
            <li>Mengawasi kebijakan dan pelaksanaan penjaminan mutu perguruan tinggi mengacu pada Standar Nasional Pendidikan.</li>
            <li>
              Mengawasi dan mengevaluasi pencapaian proses pembelajaran, penelitian, dan pengabdian kepada masyarakat dengan mengacu pada tolok ukur yang ditetapkan dalam rencana strategis, dan menyarankan usulan perbaikan kepada Direktur.
            </li>
            <li>Mengawasi pelaksanaan kebebasan akademik, kebebasan mimbar akademik, dan otonomi keilmuan.</li>
            <li>Mengawasi pelaksanaan tata tertib akademik.</li>
            <li>Mengawasi pelaksanaan kebijakan penilaian kinerja dosen.</li>
            <li>Memberi persetujuan pemberian atau pencabutan gelar dan penghargaan akademik.</li>
            <li>Memberikan pertimbangan kepada Direktur dalam pengangkatan pembantu Direktur.</li>
            <li>Merekomendasikan sanksi terhadap pelanggaran norma, etika, dan peraturan akademik oleh civitas akademika kepada Direktur.</li>
          </ul>
        </div>
        <div class="text-justify text-gray-800 leading-relaxed space-y-6" style="font-family: var(--font-albert)">
          <div class="text-center" style="font-family: var(--font-lora)">
            <h1 class="text-2xl font-bold text-[var(--blue-dark)]">Struktur Organisasi Anggota Senat</h1>
            <h2 class="text-2xl font-semibold text-[var(--blue-dark)]">Politeknik Negeri Banyuwangi</h2>
          </div>
          <div>
            <p>
              <span class="font-bold">Anggota Senat Politeknik Negeri Banyuwangi</span>
              terdiri atas:
            </p>
            <ol class="list-decimal list-inside ml-5 space-y-2">
              <li>Anggota <i>ex officio</i> yang terdiri dari Direktur, Wakil Direktur, Ketua Unit P3M, Ketua Unit P2M, Ketua Jurusan.</li>
              <li>Satu (1) orang wakil dosen dari setiap Program Studi.</li>
            </ol>
          </div>
          <div>
            <p>
              Anggota Senat yang berasal dari wakil dosen dari setiap Jurusan/Program Studi dipilih di antara dosen berdasarkan suara terbanyak dan diusulkan kepada Direktur oleh Ketua Jurusan/Koordinator Program Studi untuk ditetapkan
              sebagai anggota Senat. Pertimbangan jumlah anggota Senat yang berasal dari wakil dosen diajukan berdasarkan keterwakilan program studi/jurusan pada kepengurusan Senat.
            </p>
          </div>
          <div>
            <p>
              Ketua dan Sekretaris Senat dipilih di antara anggota. Pemilihan Ketua Senat dilakukan dalam rapat Senat yang diselenggarakan khusus. Rapat pemilihan Ketua Senat dipimpin oleh Ketua Senat periode sebelumnya dan dihadiri oleh
              seluruh anggota Senat terpilih.
            </p>
            <p>
              Pimpinan rapat menjaring paling sedikit 3 (tiga) nama calon Ketua Senat dari anggota Senat yang hadir. Pemilihan Ketua Senat dilakukan melalui pemungutan suara. Setiap anggota Senat memiliki hak 1 (satu) suara. Ketua Senat
              terpilih adalah calon yang memperoleh suara terbanyak dan ditetapkan oleh Direktur. Ketua Senat terpilih menunjuk salah satu anggota Senat sebagai Sekretaris Senat dan menentukan Ketua dan Sekretaris pada Komisi Bidang Kerja
              Senat. Ketentuan lebih lanjut mengenai persyaratan dan tata cara pemilihan Ketua Senat diatur dalam Peraturan Senat.
            </p>
          </div>
          <div>
            <p>Struktur Organisasi Senat Politeknik Negeri Banyuwangi Periode 2022-2026 berdasarkan Surat Keputusan Direktur Politeknik Negeri Banyuwangi Nomor 4096/PL36/KP/2023 adalah sebagai berikut:</p>
          </div>
          <div class="flex justify-center">
            <div class="overflow-x-auto w-full max-w-4xl">
              <table class="min-w-full border-collapse text-center" style="font-family: var(--font-lora)">
                <thead class="bg-[var(--blue-dark)] text-white">
                  <tr>
                    <th class="border border-[var(--blue-dark)] p-2">No.</th>
                    <th class="border border-[var(--blue-dark)] p-2">Struktur Organisasi Senat</th>
                    <th class="border border-[var(--blue-dark)] p-2">Nama</th>
                  </tr>
                </thead>
                <tbody class="bg-white text-gray-800">
                  <tr v-for="item in dataSenat" :key="item.no">
                    <td class="border border-[var(--blue-dark)] p-2">
                      {{ item.no }}
                    </td>
                    <td class="border border-[var(--blue-dark)] p-2 text-start">
                      {{ item.jabatan }}
                    </td>
                    <td class="border border-[var(--blue-dark)] p-2 text-start">
                      {{ item.nama }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const dataSenat = [
  { no: 1, jabatan: "Ketua", nama: "Khairul Muzaka, S.T., M.Eng-Res." },
  { no: 2, jabatan: "Sekretaris", nama: "Dianni Yusuf, S.Kom., M.Kom." },
  {
    no: 3,
    jabatan: "Ketua Komisi I Bidang Akademik",
    nama: "Mohammad Abdul Wahid, S.T., M.T.",
  },
  { no: 4, jabatan: "Anggota", nama: "Abdul Rohman, S.T., M.T." },
  { no: 5, jabatan: "Anggota", nama: "Kurniawan Muhammad Nur, S.ST., M.M." },
  { no: 6, jabatan: "Anggota", nama: "Ika Yuniwati, S.Pd., M.Si." },
  { no: 7, jabatan: "Anggota", nama: "Enes Ariyanto Sandi, S.T., M.M." },
  { no: 8, jabatan: "Anggota", nama: "Adetiya Prananda Putra, S.ST., M.M." },
  { no: 9, jabatan: "Anggota", nama: "I Wayan Suardinata, S.Kom., M.T." },
  {
    no: 10,
    jabatan: "Ketua Komisi II Bidang Sumber Daya Manusia",
    nama: "Masetya Mukti, S.ST., M.M.",
  },
  { no: 11, jabatan: "Anggota", nama: "M. Shofi’ul Amin, S.T., M.T." },
  { no: 12, jabatan: "Anggota", nama: "Devit Suwardiyanto, S.Si., M.T." },
  { no: 13, jabatan: "Anggota", nama: "Wahyu Naris Wari, S.T., M.T." },
  { no: 14, jabatan: "Anggota", nama: "Ardito Atmaka Aji, S.ST., M.M." },
  { no: 15, jabatan: "Anggota", nama: "Sefri Ton, S.ST., M.M." },
  {
    no: 16,
    jabatan: "Ketua Komisi III Bidang Penelitian dan Pengabdian Kepada Masyarakat",
    nama: "Halil, S.Pd., M.ST.",
  },
  { no: 17, jabatan: "Anggota", nama: "Endi Sailul Haq, S.T., M.Kom." },
  { no: 18, jabatan: "Anggota", nama: "Mirza Ghulam Rifqi, S.T., M.ST." },
  {
    no: 19,
    jabatan: "Anggota",
    nama: "Mohamad Dimyati Ayatullah, S.T., M.Kom.",
  },
  { no: 20, jabatan: "Anggota", nama: "Chairul Anam, S.T., M.T." },
  { no: 21, jabatan: "Anggota", nama: "Jemi Cahya Adi Wijaya, S.E., M.M." },
];

import banner from "@/assets/img/bannerprofil.png";
</script>
