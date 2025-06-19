<template>
  <section class="banner-home relative w-full h-[500px] md:h-[600px]">
    <img src="/src/assets/img/banner_home.jpg" alt="banner" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="absolute inset-0 flex items-center text-white z-10 px-4 md:px-20" style="font-family: var(--font-albert)">
      <div class="max-w-4xl">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2">Wujudkan Masa Depan Gemilang Bersama Poliwangi</h2>
        <h3 class="text-lg sm:text-2xl md:text-4xl font-bold text-[#FFD166] mb-2">Terbaik, Berkualitas dan Berpengalaman</h3>
        <p class="text-base sm:text-lg md:text-2xl">Pendidikan terbaik yang mempersiapkan Anda langsung siap bersaing di dunia kerja!</p>
      </div>
    </div>
  </section>
  <section class="profile-home px-4 py-16 md:px-20 flex flex-col md:flex-row items-center gap-10">
    <div class="flex-1 text-left" style="font-family: var(--font-albert)">
      <h2 class="text-2xl md:text-2xl font-bold mb-4 text-[var(--text-black)]" style="font-family: var(--font-playfair)">POLITEKNIK NEGERI BANYUWANGI</h2>
      <p class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify">
        Poliwangi adalah perguruan tinggi vokasi yang berkomitmen mencetak lulusan unggul dan siap kerja. Dengan kurikulum berbasis industri serta didukung fasilitas modern, kami membekali mahasiswa dengan keterampilan praktis yang relevan
        dengan dunia kerja.
      </p>
      <p class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify">
        <span class="font-bold">Mengapa Poliwangi?</span> Dengan pendidikan berbasis industri, Poliwangi menawarkan kurikulum yang selaras dengan dunia kerja, didukung oleh dosen berpengalaman, peluang karier luas bagi lulusan, serta
        fasilitas modern seperti laboratorium dan ruang belajar yang menunjang kreativitas.
      </p>
      <p class="text-base md:text-sm text-[var(--text-black)] text-justify">Bersama Poliwangi, raih masa depan cerah dengan pendidikan yang berorientasi pada keterampilan dan inovasi!</p>
    </div>
    <div class="flex-1">
      <div class="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/ID_VIDEO_KAMU"
          title="Profil Poliwangi"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </section>
  <section class="info-registration py-16">
    <div class="flex items-center gap-4 px-4 md:px-20 py-3 mb-5 bg-[var(--accent-yellow)] text-white">
      <img src="/src/assets/icon/danger.svg" alt="icon-danger" class="w-10 h-10 invert" />
      <h2 class="text-2xl md:text-2xl font-bold" style="font-family: var(--font-lora)">INFORMASI PENDAFTARAN</h2>
    </div>
    <div ref="cardContainer" class="overflow-x-hidden py-3 px-4 md:px-20">
      <div class="flex space-x-6 transition-transform duration-500" :style="{ transform: `translateX(-${currentPageIndex * pageWidth}px)` }">
        <div v-for="(item, index) in registrationData" :key="index" class="relative bg-white rounded-lg shadow-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 transition hover:shadow-xl overflow-hidden">
          <img src="/src/assets/img/banner_home.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="relative z-10 p-4 text-white flex flex-col justify-end h-full">
            <h3 class="text-base font-bold">{{ item.title }}</h3>
            <p class="text-xs mb-3 text-justify">{{ item.description }}</p>
            <hr />
            <div class="flex justify-between items-center text-xs mt-2">
              <p>21 Maret 2002</p>
              <router-link :to="item.link" class="font-semibold hover:text-yellow-400">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-10 space-x-2">
      <button class="w-10 h-10 rounded bg-[#E0E0E0] shadow font-bold hover:bg-[var(--accent-blue)] hover:text-white" @click="prevPage" :disabled="currentPageIndex === 0">‹</button>
      <button
        v-for="page in totalPages"
        :key="page"
        class="w-10 h-10 rounded shadow font-bold"
        :class="currentPageIndex === page - 1 ? 'bg-[var(--accent-blue)] text-white' : 'bg-[#E0E0E0] text-[var(--text-black)] hover:bg-[var(--accent-blue)] hover:text-white'"
        @click="goToPage(page - 1)"
      >
        {{ page }}
      </button>
      <button class="w-10 h-10 rounded bg-[#E0E0E0] shadow font-bold hover:bg-[var(--accent-blue)] hover:text-white" @click="nextPage" :disabled="currentPageIndex === totalPages - 1">›</button>
    </div>
  </section>
  <section class="news">
    <div class="flex flex-col items-center justify-center gap-4 px-4 md:px-20 py-3 mb-5">
      <h2 class="text-2xl md:text-2xl font-bold text-[var(--accent-yellow)]" style="font-family: var(--font-lora)"><span class="text-[var(--blue-dark)]">Berita Terkini</span> POLIWANGI</h2>
      <div class="w-20 h-1 bg-[var(--accent-yellow)] rounded-full"></div>
    </div>

    <div class="px-4 mb-5 md:px-20 flex flex-col md:flex-row gap-10">
      <!-- Berita Utama (kiri) -->
      <div class="flex-1">
        <div class="bg-white overflow-hidden cursor-pointer">
          <img src="/src/assets/img/banner_home.jpg" alt="Berita Utama" class="w-full h-60 object-cover" />
          <div class="py-3">
            <h3 class="text-xl font-bold text-[var(--text-black)] mb-2 text-justify hover:text-yellow-400">Sosialisasi Program Magang Industri Bagi Mahasiswa Poliwangi Sebelum Lulus ke Dunia Kerja</h3>
            <div class="flex items-center text-sm text-[var(--text-black)]">
              <p>21 Maret 2002</p>
              <span class="mx-2">|</span>
              <p>Berita</p>
            </div>
            <p class="text-[var(--text-black)] mb-4 text-justify">Ringkasan singkat dari berita utama yang sedang tampil di sini. Konten berita utama biasanya berisi highlight terkini dari Poliwangi.</p>
          </div>
        </div>
      </div>

      <!-- List Berita (kanan) -->
      <div class="flex-1 space-y-1">
        <div v-for="(item, index) in beritaList" :key="index" class="bg-white p-2 flex gap-4 items-stretch cursor-pointer">
          <img src="/src/assets/img/banner_home.jpg" alt="Thumbnail" class="w-[120px] object-cover" />
          <div class="flex-1">
            <h4 class="font-bold text-[var(--text-black)] mb-1 text-justify leading-[1.3rem] hover:text-yellow-400">{{ item.title }}</h4>
            <div class="flex items-center text-sm text-[var(--text-black)]">
              <p>{{ item.date }}</p>
              <span class="mx-2">|</span>
              <p>Berita</p>
            </div>
            <p class="text-sm text-justify leading-[1.2rem]">{{ item.description }}</p>
          </div>
        </div>
        <div class="flex justify-end">
          <router-link to="/berita" class="font-semibold hover:text-yellow-400">Berita Lainnya</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="event my-10">
    <div class="flex flex-col items-center justify-center gap-4 px-4 md:px-20 py-3 mb-5">
      <h2 class="text-2xl md:text-2xl font-bold text-[var(--blue-dark)]" style="font-family: var(--font-lora)">Event</h2>
      <div class="w-15 h-1 bg-[var(--accent-yellow)] rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-20">
      <div v-for="(item, index) in eventList" :key="index" class="bg-white overflow-hidden cursor-pointer">
        <!-- Gambar -->
        <div class="h-48 overflow-hidden">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
        </div>

        <!-- Teks -->
        <div class="py-2">
          <div class="flex justify-between items-center text-sm font-semibold text-[var(--text-black)] mb-1">
            <p>Event</p>
            <p>{{ item.date }}</p>
          </div>
          <hr />
          <h3 class="font-semibold text-base mb-2 text-[var(--text-black)] leading-[1.3rem] text-justify hover:text-yellow-400">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="service relative w-full h-[400px] md:h-[500px] my-20">
    <img src="/src/assets/img/banner_home.jpg" alt="banner" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
    <div class="absolute inset-0">
      <div class="flex items-center justify-center text-white z-10 px-4 md:px-20 py-15">
        <h2 class="text-4xl md:text-4xl font-bold text-white" style="font-family: var(--font-lora)">Layanan Digital</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 md:px-20">
        <div v-for="(item, index) in serviceList" :key="index" class="bg-white overflow-hidden rounded-lg cursor-pointer">
          <div class="p-4 flex flex-col items-center">
            <img :src="item.image" alt="" class="w-15 h-15 object-contain mb-3 invert-[10%] sepia-[30%] saturate-[500%] hue-rotate-[190deg] brightness-[90%] contrast-[100%]" />
            <h3 class="font-semibold text-base text-[var(--blue-dark)] leading-[1.3rem] text-center hover:text-yellow-400">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted, nextTick } from "vue";

const registrationData = [
  {
    title: "SNBP",
    description: "Pendaftaran Seleksi Nasional Berdasarkan Prestasi (SNBP) merupakan jalur seleksi penerimaan mahasiswa baru berdasarkan capaian akademik siswa selama di sekolah, dengan memperhatikan prestasi lain yang relevan.",
    link: "/snbp",
    date: "15 Januari 2025",
  },
  {
    title: "UTBK - SNBT",
    description: "Ujian Tulis Berbasis Komputer - Seleksi Nasional Berdasarkan Tes (UTBK-SNBT) adalah seleksi nasional berdasarkan hasil tes tertulis yang diselenggarakan secara terpusat dengan sistem komputerisasi.",
    link: "/utbk-snbt",
    date: "20 Februari 2025",
  },
  {
    title: "Mandiri",
    description: "Jalur Mandiri memberikan kesempatan kepada calon mahasiswa untuk mendaftar secara langsung ke Poliwangi dengan mempertimbangkan hasil tes mandiri yang diselenggarakan kampus.",
    link: "/mandiri",
    date: "10 Maret 2025",
  },
  {
    title: "PMDK",
    description: "Penerimaan Mahasiswa Baru melalui Jalur PMDK diperuntukkan bagi siswa berprestasi dari sekolah mitra yang telah bekerjasama dengan Poliwangi.",
    link: "/pmdk",
    date: "18 Maret 2025",
  },
  {
    title: "KIP Kuliah",
    description: "Kartu Indonesia Pintar (KIP) Kuliah memberikan bantuan biaya pendidikan bagi siswa dari keluarga kurang mampu untuk melanjutkan pendidikan ke jenjang perguruan tinggi.",
    link: "/kip-kuliah",
    date: "25 Maret 2025",
  },
  {
    title: "Alih Jenjang",
    description: "Program Alih Jenjang memungkinkan lulusan D3 atau sarjana terapan untuk melanjutkan pendidikan ke jenjang yang lebih tinggi dengan pengakuan beberapa mata kuliah yang telah diambil.",
    link: "/alih-jenjang",
    date: "1 April 2025",
  },
  {
    title: "Program Internasional",
    description: "Program Internasional memberikan kesempatan kepada mahasiswa untuk mengikuti program pembelajaran dan pertukaran mahasiswa dengan kampus-kampus mitra di luar negeri.",
    link: "/internasional",
    date: "10 April 2025",
  },
  {
    title: "Profesi",
    description: "Program Profesi dirancang untuk menyiapkan lulusan yang memiliki sertifikasi keahlian profesional sesuai dengan standar industri dan dunia kerja.",
    link: "/profesi",
    date: "18 April 2025",
  },
  {
    title: "Transfer Kredit",
    description: "Program Transfer Kredit memungkinkan mahasiswa memindahkan sebagian mata kuliah dari perguruan tinggi asal ke Poliwangi, sehingga mempersingkat masa studi.",
    link: "/transfer-kredit",
    date: "25 April 2025",
  },
  {
    title: "Beasiswa Lain",
    description: "Berbagai jenis beasiswa tersedia di Poliwangi untuk mendukung mahasiswa berprestasi maupun yang membutuhkan bantuan biaya pendidikan.",
    link: "/beasiswa-lain",
    date: "1 Mei 2025",
  },
];

const cardContainer = ref(null);
const cardWidth = 320 + 24;
const cardsPerPage = 3;
const pageWidth = cardWidth * cardsPerPage;
const totalPages = computed(() => Math.ceil(registrationData.length / cardsPerPage));
const currentPageIndex = ref(0);

function goToPage(page) {
  currentPageIndex.value = page;
}

function prevPage() {
  if (currentPageIndex.value > 0) {
    currentPageIndex.value--;
  }
}

function nextPage() {
  if (currentPageIndex.value < totalPages.value - 1) {
    currentPageIndex.value++;
  }
}

// Berita
const beritaList = [
  {
    title: "Workshop Kewirausahaan Mahasiswa Poliwangi untuk Mengembangkan Potensi Bisnis Mahasiswa",
    date: "18 Juni 2025",
    description: "Mahasiswa Poliwangi mengikuti workshop intensif mengenai pengembangan bisnis, perencanaan usaha, serta strategi.",
  },
  {
    title: "Kunjungan Industri Mahasiswa Teknik Poliwangi ke PT XYZ untuk Mendalami Proses Produksi Modern",
    date: "15 Juni 2025",
    description: "Mahasiswa jurusan Teknik melakukan kunjungan ke PT XYZ untuk mempelajari penerapan teknologi modern dalam lini produksi.",
  },
  {
    title: "Sosialisasi Program Magang Industri Bagi Mahasiswa Poliwangi Sebelum Lulus ke Dunia Kerja",
    date: "10 Juni 2025",
    description: "Poliwangi mengadakan sosialisasi program magang industri guna memberikan wawasan praktis dan meningkatkan kesiapan kerja.",
  },
];

// Event
const eventList = [
  {
    title: "Seminar Nasional Kewirausahaan: Membangun Start-Up",
    date: "21 Maret 2025",
    image: "/src/assets/img/banner_home.jpg",
  },
  {
    title: "Kompetisi Inovasi Teknologi Mahasiswa Poliwangi",
    date: "21 Maret 2025",
    image: "/src/assets/img/banner_home.jpg",
  },
  {
    title: "Job Fair Poliwangi 2025: Peluang Karir dari Perusahaan",
    date: "21 Maret 2025",
    image: "/src/assets/img/banner_home.jpg",
  },
  {
    title: "Workshop Desain Multimedia Interaktif untuk Konten Digital",
    date: "21 Maret 2025",
    image: "/src/assets/img/banner_home.jpg",
  },
  {
    title: "Pelatihan Softskill Mahasiswa: Leadership, Komunikasi",
    date: "21 Maret 2025",
    image: "/src/assets/img/banner_home.jpg",
  },
  {
    title: "Festival Budaya Poliwangi: Merajut Keberagaman dalam Kebersamaan",
    date: "21 Maret 2025",
    image: "/src/assets/img/banner_home.jpg",
  },
];

// Service
const serviceList = [
  {
    title: "Learning Management System",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "E-Library",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "Sistem Informasi Terpadu",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "Lapor POLIWANGI",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "Mirror",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "Job Placement Center",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "PMB",
    image: "/src/assets/icon/danger.svg",
  },
  {
    title: "P3M",
    image: "/src/assets/icon/danger.svg",
  },
];
</script>
