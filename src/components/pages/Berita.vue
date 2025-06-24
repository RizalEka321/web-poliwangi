<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Berita</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="md:col-span-2 space-y-6">
        <div v-if="paginatedBerita.length === 0" class="text-center text-gray-500">Tidak ada berita ditemukan.</div>
        <div v-for="(item, index) in paginatedBerita" :key="index" class="bg-white shadow hover:shadow-lg flex flex-col md:flex-row">
          <img :src="item.image" class="w-full md:w-60 h-48 md:h-48 object-cover" />
          <div class="p-4 flex flex-col justify-between">
            <div>
              <h3 class="font-semibold text-xl text-[var(--text-black)] hover:text-[var(--accent-blue)]">
                {{ item.title }}
              </h3>
              <p class="text-sm text-[var(--text-gray)] mb-2">{{ item.date }}</p>
              <p class="text-sm text-justify text-[var(--text-gray)]">{{ item.summary }}</p>
            </div>
            <router-link :to="`/berita/${item.slug}`" class="text-[var(--accent-blue)] font-semibold text-sm hover:underline mt-3"> Baca selengkapnya</router-link>
          </div>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center items-center space-x-4 mt-6">
          <button @click="currentPage--" :disabled="currentPage === 1" class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer">Previous</button>
          <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>
          <button @click="currentPage++" :disabled="currentPage === totalPages" class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer">Next</button>
        </div>
      </div>
      <div class="space-y-8">
        <div>
          <h4 class="font-semibold text-lg mb-3 text-[var(--text-black)]">Kategori</h4>
          <ul class="space-y-2">
            <li v-for="kategori in kategoriList" :key="kategori" :class="['cursor-pointer', selectedKategori === kategori ? 'text-[var(--accent-blue)] font-semibold' : 'text-[var(--text-gray)]']" @click="selectedKategori = kategori">
              {{ kategori }}
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-3 text-[var(--text-black)]">Tahun</h4>
          <ul class="space-y-2">
            <li v-for="tahun in tahunList" :key="tahun" :class="['cursor-pointer', selectedTahun === tahun ? 'text-[var(--accent-blue)] font-semibold' : 'text-[var(--text-gray)]']" @click="selectedTahun = tahun">
              {{ tahun }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const beritaList = ref([
  {
    image: "/src/assets/img/berita_1.png",
    title: "Mahasiswa Poliwangi Raih Juara Nasional",
    date: "24 Juni 2025",
    summary: "Prestasi membanggakan diraih mahasiswa Poliwangi dalam ajang kompetisi tingkat nasional bidang teknologi.",
    kategori: "Prestasi",
    tahun: 2025,
    slug: "mahasiswa-poliwangi-raih-juara-nasional",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pengumuman Pendaftaran Beasiswa 2025",
    date: "23 Juni 2025",
    summary: "Informasi penting terkait pembukaan pendaftaran beasiswa untuk tahun ajaran 2025.",
    kategori: "Pengumuman",
    tahun: 2025,
    slug: "pengumuman-pendaftaran-beasiswa-2025",
  },
  {
    image: "/src/assets/img/berita_3.png",
    title: "Seminar Nasional Kewirausahaan Digital",
    date: "22 Juni 2025",
    summary: "Seminar menghadirkan pembicara dari startup digital nasional untuk mahasiswa kampus.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "seminar-nasional-kewirausahaan-digital",
  },
  {
    image: "/src/assets/img/berita_4.png",
    title: "Kerjasama Poliwangi dengan Industri Lokal",
    date: "21 Juni 2025",
    summary: "Penandatanganan MoU antara Poliwangi dan perusahaan lokal untuk peningkatan kompetensi.",
    kategori: "Kampus",
    tahun: 2025,
    slug: "kerjasama-poliwangi-dengan-industri-lokal",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Workshop Desain Grafis untuk Mahasiswa",
    date: "20 Juni 2025",
    summary: "Pelatihan desain grafis bersama profesional industri kreatif untuk mahasiswa.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "workshop-desain-grafis-untuk-mahasiswa",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Kuliah Umum Kecerdasan Buatan",
    date: "19 Juni 2025",
    summary: "Kuliah umum membahas perkembangan terbaru AI dan penerapannya di industri.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "kuliah-umum-kecerdasan-buatan",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pengabdian Masyarakat di Desa Binaan",
    date: "18 Juni 2025",
    summary: "Mahasiswa dan dosen melaksanakan pengabdian masyarakat di desa sekitar kampus.",
    kategori: "Kampus",
    tahun: 2025,
    slug: "pengabdian-masyarakat-di-desa-binaan",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Penerimaan Mahasiswa Baru Jalur Mandiri",
    date: "17 Juni 2025",
    summary: "Pengumuman pendaftaran mahasiswa baru jalur mandiri tahun akademik 2025/2026.",
    kategori: "Pengumuman",
    tahun: 2025,
    slug: "penerimaan-mahasiswa-baru-jalur-mandiri",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Lomba Karya Tulis Ilmiah Nasional",
    date: "16 Juni 2025",
    summary: "Mahasiswa Poliwangi raih juara dalam lomba karya tulis ilmiah nasional.",
    kategori: "Prestasi",
    tahun: 2025,
    slug: "lomba-karya-tulis-ilmiah-nasional",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pelatihan Kewirausahaan Mahasiswa Baru",
    date: "15 Juni 2025",
    summary: "Program pelatihan kewirausahaan bagi mahasiswa baru sebagai bekal bisnis masa depan.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "pelatihan-kewirausahaan-mahasiswa-baru",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Program Magang Industri ke Jepang Dibuka",
    date: "14 Juni 2025",
    summary: "Kesempatan bagi mahasiswa mengikuti program magang industri di Jepang.",
    kategori: "Pengumuman",
    tahun: 2025,
    slug: "program-magang-industri-ke-jepang-dibuka",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Dosen Poliwangi Terbitkan Buku Baru",
    date: "13 Juni 2025",
    summary: "Dosen Poliwangi meluncurkan buku baru tentang pengembangan sistem informasi.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "dosen-poliwangi-terbitkan-buku-baru",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Bakti Sosial Lingkungan Kampus",
    date: "12 Juni 2025",
    summary: "Bakti sosial mahasiswa dalam rangka menjaga kebersihan lingkungan kampus.",
    kategori: "Kampus",
    tahun: 2025,
    slug: "bakti-sosial-lingkungan-kampus",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Tim Robotika Poliwangi Lolos Nasional",
    date: "11 Juni 2025",
    summary: "Tim Robotika Poliwangi berhasil lolos ke tingkat nasional setelah seleksi ketat.",
    kategori: "Prestasi",
    tahun: 2025,
    slug: "tim-robotika-poliwangi-lolos-nasional",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Akreditasi Program Studi Naik",
    date: "10 Juni 2025",
    summary: "Beberapa program studi Poliwangi sukses meningkatkan status akreditasinya tahun ini.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "akreditasi-program-studi-naik",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Festival Seni Budaya Kampus",
    date: "09 Juni 2025",
    summary: "Festival seni budaya menghadirkan pertunjukan seni tradisional dan modern.",
    kategori: "Event",
    tahun: 2025,
    slug: "festival-seni-budaya-kampus",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Peresmian Lab Multimedia Baru",
    date: "08 Juni 2025",
    summary: "Laboratorium multimedia terbaru dengan fasilitas modern resmi digunakan.",
    kategori: "Kampus",
    tahun: 2025,
    slug: "peresmian-lab-multimedia-baru",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pelatihan Soft Skill Mahasiswa Akhir",
    date: "07 Juni 2025",
    summary: "Mahasiswa akhir mengikuti pelatihan soft skill untuk persiapan kerja.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "pelatihan-soft-skill-mahasiswa-akhir",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Webinar Internasional Teknologi Pangan",
    date: "06 Juni 2025",
    summary: "Webinar internasional membahas inovasi teknologi pangan modern.",
    kategori: "Akademik",
    tahun: 2025,
    slug: "webinar-internasional-teknologi-pangan",
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Wisuda Poliwangi Tahun 2025",
    date: "05 Juni 2025",
    summary: "Prosesi wisuda Poliwangi 2025 sukses berlangsung meriah.",
    kategori: "Event",
    tahun: 2025,
    slug: "wisuda-poliwangi-tahun-2025",
  },
]);

// Filter
const kategoriList = ref(["Semua", "Pengumuman", "Akademik", "Kampus", "Prestasi", "Event"]);
const tahunList = ref(["Semua", 2025]);

const selectedKategori = ref("Semua");
const selectedTahun = ref("Semua");

const filteredBerita = computed(() => {
  return beritaList.value.filter((item) => {
    const matchKategori = selectedKategori.value === "Semua" || item.kategori === selectedKategori.value;
    const matchTahun = selectedTahun.value === "Semua" || item.tahun === selectedTahun.value;
    return matchKategori && matchTahun;
  });
});

// Pagination
const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() => Math.ceil(filteredBerita.value.length / itemsPerPage));

const paginatedBerita = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredBerita.value.slice(start, start + itemsPerPage);
});

watch([selectedKategori, selectedTahun], () => {
  currentPage.value = 1;
});
</script>
