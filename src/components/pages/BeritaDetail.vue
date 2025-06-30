<template>
  <div
    v-if="berita"
    class="px-6 md:px-20 py-10 space-y-10 font-[var(--font-albert)]"
  >
    <div class="text-sm text-[var(--text-gray)] flex items-center gap-1">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="text-[var(--accent-yellow)]">›</span>
      <router-link
        to="/berita"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Berita</router-link
      >
    </div>
    <div class="flex flex-col lg:flex-row gap-10">
      <section class="flex-1">
        <h1
          class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-2"
          style="font-family: var(--font-lora)"
        >
          {{ berita.title }}
        </h1>
        <div
          class="text-sm text-[var(--text-gray)] flex items-center flex-wrap gap-4 mb-6"
        >
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-calendar-days text-[var(--accent-yellow)] hover:text-yellow-500"
            ></i>
            {{ berita.date }}
          </span>
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-tags text-[var(--accent-yellow)] hover:text-yellow-500"
            ></i>
            {{ berita.kategori }}
          </span>
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-user text-[var(--accent-yellow)] hover:text-yellow-500"
            ></i>
            Oleh : Humas POLIWANGI
          </span>
        </div>

        <div class="w-full mb-6">
          <img
            :src="berita.image"
            class="w-full max-w-4xl mx-auto object-cover rounded-lg shadow"
            alt="Foto Berita"
          />
        </div>

        <div
          class="text-justify text-[var(--text-gray)] leading-relaxed space-y-4 max-w-4xl mx-auto"
          style="font-family: var(--font-albert)"
          v-html="berita.content"
        ></div>
      </section>

      <!-- Berita Terbaru -->
      <aside class="w-full lg:w-[30%]">
        <h2
          class="text-lg font-bold border-l-4 border-[var(--accent-yellow)] pl-2 mb-4 text-[var(--blue-dark)]"
        >
          Berita Terbaru
        </h2>
        <ul class="space-y-5 text-[var(--blue-dark)]">
          <li
            v-for="item in beritaTerbaru"
            :key="item.slug"
            class="border-b border-[var(--blue-medium)] pb-3"
          >
            <router-link
              :to="`/berita/${item.slug}`"
              class="hover:underline hover:text-[var(--accent-yellow)] font-semibold"
              style="font-family: var(--font-lora)"
            >
              {{ item.title }}
            </router-link>
            <p class="text-xs text-[var(--text-gray)] mt-1">{{ item.date }}</p>
          </li>
        </ul>
      </aside>
    </div>
  </div>

  <div v-else class="px-6 md:px-20 py-10">
    <p class="text-center text-red-500 font-semibold">Berita tidak ditemukan</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";

const route = useRoute();
const slug = ref(route.params.slug);

const beritalList = [
  {
    image: "/src/assets/img/berita_1.png",
    title: "Mahasiswa Poliwangi Raih Juara Nasional",
    date: "24 Juni 2025",
    slug: "mahasiswa-poliwangi-raih-juara-nasional",
    kategori: "Prestasi",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Prestasi membanggakan diraih oleh mahasiswa Poliwangi dalam ajang kompetisi tingkat nasional bidang teknologi. Tim berhasil mengembangkan sistem monitoring lingkungan berbasis AI secara real-time.</p>
        <p>Sistem ini memantau kualitas udara, suhu, kelembapan, dan kebisingan, mendukung program smart city serta peringatan dini bencana.</p>
        <p>Rektor menyampaikan apresiasi dan tim juga memperoleh kesempatan program inkubasi startup serta program pertukaran riset ke Jepang.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pengumuman Pendaftaran Beasiswa 2025",
    date: "23 Juni 2025",
    slug: "pengumuman-pendaftaran-beasiswa-2025",
    kategori: "Pengumuman",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Poliwangi resmi membuka pendaftaran Beasiswa 2025. Program ini diberikan bagi mahasiswa berprestasi dan kurang mampu secara finansial.</p>
        <p>Proses pendaftaran dilakukan secara online dengan melampirkan dokumen persyaratan yang telah ditentukan.</p>
        <p>Informasi lengkap tersedia di website resmi kampus dan bagian kemahasiswaan.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_3.png",
    title: "Seminar Nasional Kewirausahaan Digital",
    date: "22 Juni 2025",
    slug: "seminar-nasional-kewirausahaan-digital",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Seminar menghadirkan pembicara startup nasional membahas pengembangan bisnis digital di era industri 4.0.</p>
        <p>Mahasiswa antusias mengikuti sesi pengembangan model bisnis berbasis teknologi digital.</p>
        <p>Poliwangi terus mendukung pengembangan kewirausahaan mahasiswa melalui kegiatan serupa.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_4.png",
    title: "Kerjasama Poliwangi dengan Industri Lokal",
    date: "21 Juni 2025",
    slug: "kerjasama-poliwangi-dengan-industri-lokal",
    kategori: "Kampus",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Penandatanganan MoU dilakukan dengan perusahaan lokal guna memperkuat link and match antara kampus dan dunia industri.</p>
        <p>Kerjasama ini meliputi magang industri, pengembangan kurikulum, serta peluang riset kolaboratif.</p>
        <p>Langkah ini diharapkan meningkatkan daya saing lulusan Poliwangi di dunia kerja.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Workshop Desain Grafis untuk Mahasiswa",
    date: "20 Juni 2025",
    slug: "workshop-desain-grafis-untuk-mahasiswa",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Mahasiswa mengikuti pelatihan desain grafis bersama praktisi industri kreatif.</p>
        <p>Materi mencakup penggunaan software desain populer dan strategi visual branding.</p>
        <p>Workshop ini memperkaya keterampilan mahasiswa di bidang industri kreatif.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Kuliah Umum Kecerdasan Buatan",
    date: "19 Juni 2025",
    slug: "kuliah-umum-kecerdasan-buatan",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Kuliah umum AI membahas tren terbaru pengembangan kecerdasan buatan dan implementasi di industri.</p>
        <p>Pembicara menyampaikan potensi dan tantangan etika penggunaan AI di masa depan.</p>
        <p>Poliwangi menargetkan penguatan kompetensi mahasiswa di bidang teknologi AI.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pengabdian Masyarakat di Desa Binaan",
    date: "18 Juni 2025",
    slug: "pengabdian-masyarakat-di-desa-binaan",
    kategori: "Kampus",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Poliwangi melaksanakan pengabdian masyarakat di desa mitra sebagai bagian Tri Dharma Perguruan Tinggi.</p>
        <p>Program meliputi pelatihan teknologi tepat guna, edukasi kesehatan, dan pembinaan UMKM desa.</p>
        <p>Program ini menjadi sarana mahasiswa menerapkan ilmu secara nyata ke masyarakat.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Penerimaan Mahasiswa Baru Jalur Mandiri",
    date: "17 Juni 2025",
    slug: "penerimaan-mahasiswa-baru-jalur-mandiri",
    kategori: "Pengumuman",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Pendaftaran mahasiswa baru jalur Mandiri Poliwangi tahun akademik 2025/2026 resmi dibuka.</p>
        <p>Jalur ini memberikan kesempatan tambahan bagi calon mahasiswa yang tidak lolos jalur nasional.</p>
        <p>Pendaftaran dilakukan secara online melalui website resmi PMB Poliwangi.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Lomba Karya Tulis Ilmiah Nasional",
    date: "16 Juni 2025",
    slug: "lomba-karya-tulis-ilmiah-nasional",
    kategori: "Prestasi",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Tim mahasiswa Poliwangi kembali mengukir prestasi dengan meraih juara dalam lomba Karya Tulis Ilmiah Nasional.</p>
        <p>Karya mereka mengangkat topik pengembangan teknologi tepat guna untuk pengolahan limbah industri rumah tangga.</p>
        <p>Karya ini diapresiasi juri karena solusi aplikatif dan berorientasi lingkungan.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title: "Pelatihan Kewirausahaan Mahasiswa Baru",
    date: "15 Juni 2025",
    slug: "pelatihan-kewirausahaan-mahasiswa-baru",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Program pelatihan kewirausahaan diberikan kepada mahasiswa baru sebagai bekal menghadapi dunia bisnis.</p>
        <p>Materi meliputi pengembangan ide usaha, strategi pemasaran digital, serta pengelolaan keuangan bisnis pemula.</p>
        <p>Kegiatan ini diharapkan memupuk semangat entrepreneur sejak dini.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_2.png",
    title:
      "Workshop Kewirausahaan Mahasiswa Poliwangi untuk Mengembangkan Potensi Bisnis Mahasiswa",
    date: "18 Juni 2025",
    slug: "workshop-kewirausahaan-mahasiswa-poliwangi-untuk-mengembangkan-potensi-bisnis-mahasiswa",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Mahasiswa Poliwangi mengikuti workshop intensif kewirausahaan yang menghadirkan praktisi bisnis nasional.</p>
        <p>Peserta mendapatkan pelatihan mengenai perencanaan bisnis, strategi pemasaran digital, manajemen keuangan, serta pengembangan ide kreatif dalam membangun usaha.</p>
        <p>Kegiatan ini diharapkan mampu menumbuhkan jiwa entrepreneur di kalangan mahasiswa sejak dini.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_3.png",
    title:
      "Kunjungan Industri Mahasiswa Teknik Poliwangi ke PT XYZ untuk Mendalami Proses Produksi",
    date: "15 Juni 2025",
    slug: "kunjungan-industri-mahasiswa-teknik-poliwangi-ke-pt-xyz-untuk-mendalami-proses-produksi",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Mahasiswa Teknik Poliwangi melakukan kunjungan industri ke PT XYZ yang bergerak di bidang manufaktur otomotif modern.</p>
        <p>Selama kunjungan, mahasiswa diajak melihat langsung proses produksi, sistem quality control, serta pemanfaatan teknologi robotik di lini perakitan.</p>
        <p>Kegiatan ini menjadi pengalaman berharga bagi mahasiswa untuk memahami dunia industri secara nyata.</p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/berita_4.png",
    title:
      "Sosialisasi Program Magang Industri Bagi Mahasiswa Poliwangi Sebelum Lulus",
    date: "10 Juni 2025",
    slug: "sosialisasi-program-magang-industri-bagi-mahasiswa-poliwangi-sebelum-lulus",
    kategori: "Akademik",
    tahun: 2025,
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>Poliwangi menggelar sosialisasi program magang industri untuk mahasiswa tingkat akhir.</p>
        <p>Program ini memberikan pemahaman seputar prosedur magang, pembekalan soft skill, hingga tips adaptasi budaya kerja di industri.</p>
        <p>Melalui program ini, diharapkan mahasiswa lebih siap menghadapi tantangan dunia kerja setelah lulus.</p>
      </div>
    `,
  },
];

const berita = ref(beritalList.find((item) => item.slug === slug.value));

const beritaTerbaru = computed(() =>
  beritalList
    .filter((item) => item.slug !== slug.value)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
);

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    berita.value = beritalList.find((item) => item.slug === newSlug);
  }
);
</script>
