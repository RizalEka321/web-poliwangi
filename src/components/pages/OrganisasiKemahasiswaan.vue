<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <!-- Breadcrumb -->
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Akademik</span>
    </div>

    <!-- Banner -->
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="bannerAkademik"
        alt="Banner Akademik"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Organisasi Kemahasiswaan
        </h1>
      </div>
    </div>

    <!-- GAMBARAN UMUM -->
    <section>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]"
        style="font-family: var(--font-lora)"
      >
        Gambaran Umum
      </h2>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Organisasi kemahasiswaan intra perguruan tinggi adalah wahana dan sarana
        pengembangan diri mahasiswa ke arah perluasan wawasan dan peningkatan
        kecendekiawanan serta integritas kepribadian untuk mencapai tujuan
        pendidikan tinggi. Organisasi kemahasiswaan antar perguruan tinggi
        adalah wahana dan sarana pengembangan diri mahasiswa untuk menanamkan
        sikap ilmiah, pemahaman tentang arah profesi dan sekaligus meningkatkan
        kerjasama, serta menumbuhkan rasa persatuan dan kesatuan. Organisasi
        Kemahasiswaan terdiri dari Majelis Permusyawaratan Mahasiswa, Badan
        Eksekutif Mahasiswa, Himpunan Mahasiswa Jurusan, Unit Kegiatan Mahasiswa
        dan Forum Mahasiswa KIP Kuliah (Berdasarkan Pedoman Akademik dan
        Kemahasiswaan Tahun 2022).
      </p>
    </section>
    <section>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]"
        style="font-family: var(--font-lora)"
      >
        Daftar Organisasi Kemahasiswaan
      </h2>
      <div class="flex justify-center mt-4">
        <div class="overflow-x-auto w-full max-w-4xl">
          <table
            class="min-w-full border border-[var(--blue-dark)] text-left overflow-hidden border-collapse"
          >
            <thead
              class="bg-[var(--blue-dark)] text-white"
              style="font-family: var(--font-lora)"
            >
              <tr>
                <th class="border border-[var(--blue-dark)] p-2 w-16">No.</th>
                <th class="border border-[var(--blue-dark)] p-2">
                  Nama Organisasi Mahasiswa
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white text-gray-800"
              style="font-family: var(--font-albert)"
            >
              <tr v-for="(item, index) in organisasiMahasiswa" :key="index">
                <td class="border border-[var(--blue-dark)] p-2">
                  {{ index + 1 }}
                </td>
                <td class="border border-[var(--blue-dark)] p-2 text-start">
                  {{ item }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]"
        style="font-family: var(--font-lora)"
      >
        Program Kerja ORMAWA 2025
      </h2>
      <div class="overflow-x-auto">
        <div
          class="flex justify-end bg-[var(--blue-dark)] border-b border-gray-300 p-5 rounded-t-lg"
        >
          <div class="bg-white">
            <input
              v-model="search"
              type="text"
              placeholder="Search"
              class="border border-gray-300 rounded px-3 py-2 w-64 h-9"
            />
          </div>
        </div>

        <table
          class="w-full text-sm text-left shadow rounded-lg bg-[var(--bg-grey)]"
        >
          <thead
            class="bg-[var(--blue-dark)] text-white"
            style="font-family: var(--font-lora)"
          >
            <tr>
              <th class="px-4 py-3 w-12">No.</th>
              <th class="px-4 py-3">Nama Kegiatan</th>
              <th class="px-4 py-3">Waktu Pelaksanaan</th>
              <th class="px-4 py-3">PIC Organisasi Kemahasiswaan</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(item, index) in paginatedData" :key="index">
              <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}.
              </td>
              <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                {{ item.nama }}
              </td>
              <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                {{ item.waktu }}
              </td>
              <td class="px-4 py-3 border-b border-[var(--blue-dark)]">
                {{ item.pic }}
              </td>
            </tr>
          </tbody>
          <tfoot class="bg-[var(--blue-dark)] text-[var(--text-black)]">
            <tr>
              <td colspan="4" class="rounded-b-lg">
                <div class="flex justify-center items-center space-x-1 p-4">
                  <button
                    :disabled="currentPage === 1"
                    @click="currentPage--"
                    class="w-8 h-8 bg-[var(--bg-grey)] rounded-xl shadow hover:bg-[var(--accent-blue)] hover:text-white disabled:opacity-50 transition duration-300 ease-in-out"
                  >
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>

                  <button
                    v-for="page in totalPages"
                    :key="page"
                    @click="currentPage = page"
                    :class="[
                      'w-8 h-8 rounded-xl shadow transition duration-300 ease-in-out',
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'bg-white hover:bg-[var(--accent-blue)] hover:text-white',
                    ]"
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
    </section>
  </div>
</template>

<script setup>
const organisasiMahasiswa = [
  "Majelis Permusyawaratan Mahasiswa",
  "Badan Eksekutif Mahasiswa",
  "Himpunan Mahasiswa Jurusan Teknik Sipil",
  "Himpunan Mahasiswa Jurusan Teknik Mesin",
  "Himpunan Mahasiswa Jurusan Bisnis dan Informatika",
  "Himpunan Mahasiswa Jurusan Pertanian",
  "Himpunan Mahasiswa Jurusan Pariwisata",
  "Unit Kegiatan Mahasiswa Gema Seni dan Budaya Poliwangi",
  "Unit Kegiatan Mahasiswa Ikatan Mahasiswa Muslim",
  "Unit Kegiatan Mahasiswa Jurnalistik, Pers, Media Center dan Duta Mahasiswa",
  "Unit Kegiatan Mahasiswa Kewirausahaan",
  "Unit Kegiatan Mahasiswa Korps Sukarela",
  "Unit Kegiatan Mahasiswa Mahasiswa Penggiat Alam",
  "Unit Kegiatan Mahasiswa Riset, Pengabdian dan Bahasa",
  "Unit Kegiatan Mahasiswa Olahraga",
  "Unit Kegiatan Mahasiswa Racana Prabu Tawang Alun – Sritanjung",
  "Unit Kegiatan Mahasiswa Resimen Mahasiswa",
  "Forum Komunikasi Mahasiswa Bidikmisi/Kartu Indonesia Pintar Kuliah Poliwangi",
];

import { ref, computed } from "vue";

const search = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;

const kegiatan = ref([
  {
    nama: "Bina Mental Jasmani Angkatan 12",
    waktu: "13 - 14 Februari",
    pic: "UKM Resimen Mahasiswa",
  },
  {
    nama: "Civil Building Innovation",
    waktu: "14 - 16 Februari",
    pic: "Himpunan Mahasiswa Jurusan Teknik Sipil",
  },
  {
    nama: "Pemilihan Duta Kampus",
    waktu: "21 Februari - 22 Maret",
    pic: "UKM Jurnalistik, Pers, Media Center dan Duta Mahasiswa",
  },
  {
    nama: "Apel Mahasiswa Beasiswa KIPK-BBP",
    waktu: "22 Februari",
    pic: "Forum Komunikasi Mahasiswa Bidikmisi/KIP Kuliah Poliwangi",
  },
  {
    nama: "Pelatihan Manajemen Kerja",
    waktu: "22 Februari",
    pic: "Himpunan Mahasiswa Jurusan Bisnis dan Informatika",
  },
  {
    nama: "Pelatihan Jurnalistik Tingkat Dasar",
    waktu: "22 Februari",
    pic: "UKM Jurnalistik, Pers, Media Center dan Duta Mahasiswa",
  },
  {
    nama: "Simtudduror dan Pelatihan SBI",
    waktu: "27 Februari - 27 November",
    pic: "UKM Ikatan Mahasiswa Muslim",
  },
  {
    nama: "Warna-Warni Ramadhan",
    waktu: "5 - 21 Maret",
    pic: "UKM Ikatan Mahasiswa Muslim",
  },
  {
    nama: "Donor Darah Sukarela Ke-29",
    waktu: "6 Maret",
    pic: "UKM Korps Sukarela",
  },
  {
    nama: "Workshop Tiktok Affiliate",
    waktu: "8 Maret",
    pic: "Himpunan Mahasiswa Jurusan Pertanian",
  },
  {
    nama: "Danus Corner",
    waktu: "10 Maret",
    pic: "UKM Jurnalistik, Pers, Media Center dan Duta Mahasiswa",
  },
  {
    nama: "Forbimwangi Goes To School",
    waktu: "11 - 12 Maret",
    pic: "Forum Komunikasi Mahasiswa Bidikmisi/Kartu Indonesia Pintar Kuliah Poliwangi",
  },
  {
    nama: "Kombi (Kompetisi Internal Mahasiswa Bisnis dan Informatika)",
    waktu: "11 Maret - 11 Mei",
    pic: "Himpunan Mahasiswa Jurusan Bisnis dan Informatika",
  },
  {
    nama: "Workshop Desain Grafis",
    waktu: "15 Maret",
    pic: "Forum Komunikasi Mahasiswa Bidikmisi/Kartu Indonesia Pintar Kuliah Poliwangi",
  },
  { nama: "Eksplorasi Batik", waktu: "15 Maret", pic: "UKM Kewirausahaan" },
  {
    nama: "Sosialisasi UUD KM",
    waktu: "15 Maret",
    pic: "Majelis Permusyawaratan Mahasiswa",
  },
  {
    nama: "Menggali Bakat Kepariwisataan (Explore Tourism Talent)",
    waktu: "21 - 22 Maret",
    pic: "Himpunan Mahasiswa Jurusan Pariwisata",
  },
  {
    nama: "Pelatihan Multimedia Basic",
    waktu: "21 Maret",
    pic: "UKM Jurnalistik, Pers, Media Center dan Duta Mahasiswa",
  },
  {
    nama: "Workshop Linkedin",
    waktu: "22 Maret",
    pic: "Himpunan Mahasiswa Jurusan Pertanian",
  },
  {
    nama: "Kajian Syiar",
    waktu: "14 April - 17 November",
    pic: "UKM Ikatan Mahasiswa Muslim",
  },
]);

// Filter
const filteredData = computed(() =>
  kegiatan.value.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.value.toLowerCase()) ||
      item.waktu.toLowerCase().includes(search.value.toLowerCase()) ||
      item.pic.toLowerCase().includes(search.value.toLowerCase())
  )
);

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / itemsPerPage);
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredData.value.slice(start, end);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
import bannerAkademik from "@/assets/img/bannerakademik.png";
</script>
