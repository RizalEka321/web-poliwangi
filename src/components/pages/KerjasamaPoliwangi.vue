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
        <h1 class="text-3xl md:text-5xl font-bold text-white text-center mb-2">Kerjasama</h1>
        <h2 class="text-3xl md:text-5xl font-bold text-white text-center">Politeknik Negeri Banyuwangi</h2>
      </div>
    </div>
    <section class="kerjasama">
      <div class="text-justify leading-relaxed space-y-6" style="font-family: var(--font-albert)">
        <div class="flex flex-col justify-center gap-4 mb-4">
          <h2 class="text-xl md:text-2xl font-bold text-[var(--blue-dark)]" style="font-family: var(--font-lora)">Rekapitulasi Kerjasama Politeknik Banyuwangi 2025</h2>
        </div>
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-end bg-[var(--blue-dark)] border-b border-gray-300 p-5 rounded-t-lg">
            <div class="bg-white">
              <input v-model="search" type="text" placeholder="Search" class="border border-gray-300 rounded px-3 py-2 w-64 h-9" />
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left shadow rounded-lg bg-[var(--bg-grey)]">
              <thead class="bg-[var(--blue-dark)] text-white" style="font-family: var(--font-lora)">
                <tr>
                  <th class="px-4 py-3 w-12">No.</th>
                  <th class="px-4 py-3">Nama Instansi</th>
                  <th class="px-4 py-3">Jenis Kegiatan</th>
                  <th class="px-4 py-3">Mulai</th>
                  <th class="px-4 py-3">Berakhir</th>
                  <th class="px-4 py-3">Bentuk Kerjasama</th>
                  <th class="px-4 py-3">Jenis Kerjasama</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="item in paginatedData" :key="item.no">
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">{{ item.no }}.</td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.instansi }}
                  </td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.kegiatan }}
                  </td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.mulai }}
                  </td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.berakhir }}
                  </td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.bentuk }}
                  </td>
                  <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                    {{ item.jenis }}
                  </td>
                </tr>
              </tbody>
              <tfoot class="bg-[var(--blue-dark)] text-[var(--text-black)]">
                <tr>
                  <td colspan="7" class="rounded-b-lg">
                    <div class="flex justify-center items-center space-x-1 p-4">
                      <button :disabled="currentPage === 1" @click="currentPage--" class="w-8 h-8 bg-[var(--bg-grey)] rounded-xl shadow hover:bg-[var(--accent-blue)] hover:text-white disabled:opacity-50 transition duration-300 ease-in-out">
                        <i class="fa-solid fa-chevron-left"></i>
                      </button>

                      <button
                        v-for="page in totalPages"
                        :key="page"
                        @click="currentPage = page"
                        :class="['w-8 h-8 rounded-xl shadow transition duration-300 ease-in-out', currentPage === page ? 'bg-blue-500 text-white' : 'bg-white hover:bg-[var(--accent-blue)] hover:text-white']"
                      >
                        {{ page }}
                      </button>

                      <button
                        :disabled="currentPage === totalPages"
                        @click="currentPage++"
                        class="w-8 h-8 bg-[var(--bg-grey)] rounded-xl shadow hover:bg-[var(--accent-blue)] hover:text-white disabled:opacity-50 transition duration-300 ease-in-out"
                      >
                        <i class="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </td>
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
import { ref, computed } from "vue";
const kerjasama = [
  {
    no: 1,
    instansi: "PT. Bumi Suksesindo (BSI)",
    kegiatan: "Kerjasama bidang penelitian dan pengabdian kepada masyarakat, peningkatan kualitas sumber daya manusia, dan kerja praktek/magang kerja industri mahasiswa.",
    mulai: "2 Juni 2022",
    berakhir: "2 Juni 2027",
    bentuk: "Tri dharma perguruan tinggi, Pengembangan iptek, Magang Kerja Industri, Beasiswa pendidikan mahasiswa.",
    jenis: "Industri Dalam Negeri",
  },
  {
    no: 2,
    instansi: "Badan Pusat Statistik Banyuwangi",
    kegiatan: "Penyediaan, Pemanfaatan, serta Pengembangan Data dan Informasi Statistik dalam Rangka Penyelenggaraan Tri Dharma Perguruan Tinggi.",
    mulai: "15 Februari 2024",
    berakhir: "15 Februari 2027",
    bentuk: "Pemanfaatan data statistik melalui Pojok Statistik Poliwangi, Magang Kerja, pelatihan statistik bagi mahasiswa.",
    jenis: "Instansi Dalam Negeri",
  },
  {
    no: 3,
    instansi: "Pemerintah Kabupaten Banyuwangi",
    kegiatan: "Peningkatan Pembangunan Daerah dan Peningkatan Kualitas Sumber Daya Manusia melalui Tridharma Perguruan Tinggi.",
    mulai: "17 Mei 2022",
    berakhir: "17 Mei 2025",
    bentuk: "Bantuan operasional lembaga, bantuan beasiswa kepada mahasiswa, dan pengembangan IPTEKS.",
    jenis: "Instansi Dalam Negeri",
  },
  {
    no: 4,
    instansi: "Dinas perikanan Kabupaten Banyuwangi",
    kegiatan: "Kerjasama dalam bidang implementasi tri dharma perguruan tinggi dan peningkatan kualitas sumber daya manusia.",
    mulai: "1 Maret 2024",
    berakhir: "1 Maret 2029",
    bentuk: "Penyesuaian kurikulum, penggunaan sarana dan prasarana praktek mahasiswa, pemanfaatan tenaga ahli sebagai dosen tamu.",
    jenis: "Instansi Dalam Negeri",
  },
  {
    no: 5,
    instansi: "Laguna Redang Island Resort",
    kegiatan: "Kerjasama pelaksanaan kerja praktik / magang industri di Malaysia",
    mulai: "1 Januari 2025",
    berakhir: "31 Desember 2026",
    bentuk: "Mengirimkan mahasiswa poliwangi untuk pelaksanaan magang kerja praktek di Malaysia selama 6 bulan/ semester",
    jenis: "Industri Luar Negeri",
  },
  {
    no: 6,
    instansi: "International Talent Circulation Base (Taiwan–Indonesia)",
    kegiatan: "Kerjasama dalam Pertukaran pelajar, pertukaran fakultas, program akademik khusus jangka pendek, pengembangan staf, dan joint research.",
    mulai: "13 Desember 2023",
    berakhir: "13 Desember 2028",
    bentuk: "Menyalurkan beasiswa studi lanjut di Taiwan kepada mahasiswa, dan bekerjasama dengan industri Taiwan menyerap lulusan baru.",
    jenis: "Instansi Dalam Negeri",
  },
  {
    no: 7,
    instansi: "El Hotel Royale Banyuwangi",
    kegiatan: "Kerjasama dalam bidang Implementasi Tri Dharma Perguruan Tinggi, Peningkatan Kualitas Sumber Daya Manusia, dan Penyerapan lulusan.",
    mulai: "9 November 2022",
    berakhir: "9 November 2027",
    bentuk: "Penyerapan lulusan, pemanfaatan tenaga ahli dalam perkuliahan, penggunaan sarana dan prasarana.",
    jenis: "Industri Dalam Negeri",
  },
];

// Search
const search = ref("");
const filteredData = computed(() => {
  if (!search.value) return kerjasama;
  return kerjasama.filter((item) => Object.values(item).some((val) => String(val).toLowerCase().includes(search.value.toLowerCase())));
});

// Pagination
const perPage = 5;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(filteredData.value.length / perPage));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredData.value.slice(start, start + perPage);
});

import banner from "@/assets/img/bannerprofil.png";
</script>
