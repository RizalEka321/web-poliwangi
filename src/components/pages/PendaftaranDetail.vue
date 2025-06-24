<template>
  <div class="px-6 md:px-20 py-10 space-y-10" v-if="event">
    <div class="text-sm text-gray-500">
      <router-link to="/" class="hover:underline hover:text-blue-600">Home</router-link>
      <span class="mx-1 text-yellow-500">›</span>
      <a class="hover:underline hover:text-blue-600">Pendaftaran</a>
      <span class="mx-1 text-yellow-500">›</span>
      <span class="font-medium text-black">{{ event.title }}</span>
    </div>

    <section class="event">
      <div class="mb-5 space-y-2">
        <h1 class="text-3xl font-bold text-black">{{ event.title }}</h1>
        <p class="text-sm text-gray-500 flex items-center flex-wrap gap-3">
          <span class="flex items-center"><i class="fa-solid fa-calendar-days me-2"></i> {{ event.date }}</span>
          <span class="flex items-center"><i class="fa-solid fa-tags me-2"></i> Event</span>
        </p>
      </div>

      <div v-html="event.content"></div>
    </section>
  </div>

  <div v-else class="px-6 py-10 text-center text-gray-500">Event tidak ditemukan.</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const slug = route.params.slug;

const registrationData = [
  {
    image: "/src/assets/img/utbk_snbt.png",
    title: "Pilihan Program Studi Politeknik Negeri Banyuwangi",
    date: "15 Januari 2025",
    slug: "pilihan-program-studi-politeknik-negeri-banyuwangi",
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>
          Politeknik Negeri Banyuwangi membuka pendaftaran Program Studi untuk Jalur UTBK-SNBT 2025. Program studi yang tersedia telah disesuaikan dengan kebutuhan industri dan perkembangan teknologi terkini.
        </p>
        <p>
          Berikut beberapa program studi unggulan yang dapat dipilih oleh calon mahasiswa:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Teknik Informatika</li>
          <li>Teknik Mesin</li>
          <li>Teknik Sipil</li>
          <li>Manajemen Bisnis Pariwisata</li>
          <li>Teknologi Pengolahan Hasil Ternak</li>
          <li>Bahasa Inggris untuk Komunikasi Bisnis dan Profesional</li>
        </ul>
        <p>
          Seluruh program studi dilengkapi dengan fasilitas laboratorium, dosen profesional, serta peluang magang di industri mitra baik dalam maupun luar negeri.
        </p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/kipk.png",
    title: "PENGUMUMAN HASIL SELEKSI MAHASISWA BARU",
    date: "9 Juli 2024",
    slug: "pengumuman-hasil-seleksi-mahasiswa-baru",
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>
          Berdasarkan hasil seleksi Tim Pengelola Beasiswa Kartu Indonesia Pintar Kuliah (KIPK), berikut diumumkan nama-nama calon mahasiswa baru yang dinyatakan lulus seleksi dan berhak menerima bantuan biaya pendidikan.
        </p>
        <p>
          Kami ucapkan selamat kepada seluruh peserta yang lulus. Bagi peserta yang belum berhasil, tetap semangat dan terus berusaha di kesempatan berikutnya.
        </p>
        <p>
          Informasi lengkap daftar nama penerima dan jadwal registrasi ulang dapat diakses melalui website resmi Poliwangi atau langsung ke bagian akademik kampus.
        </p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/presentasesnbt.png",
    title: "Pengumuman Jumlah Pendaftar SNBP 2025",
    date: "10 Maret 2025",
    slug: "pengumuman-jumlah-pendaftar-snbp-2025",
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>
          Politeknik Negeri Banyuwangi mengucapkan terima kasih atas partisipasi siswa-siswi dari seluruh Indonesia yang telah mendaftar melalui jalur SNBP 2025.
        </p>
        <p>
          Tercatat peningkatan jumlah pendaftar yang signifikan dibandingkan tahun sebelumnya. Hal ini menunjukkan kepercayaan masyarakat terhadap kualitas pendidikan yang diselenggarakan oleh Poliwangi.
        </p>
        <p>
          Proses seleksi administrasi akan segera dilakukan, dan hasil kelulusan akan diumumkan sesuai jadwal resmi dari Kementerian Pendidikan.
        </p>
      </div>
    `,
  },
  {
    image: "/src/assets/img/utbk_snbt.png",
    title: "Pengumuman PMDK",
    date: "18 Maret 2025",
    slug: "pengumuman-pmdk",
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>
          Penerimaan Mahasiswa Baru melalui Jalur PMDK diperuntukkan bagi siswa berprestasi dari sekolah mitra yang telah bekerjasama dengan Poliwangi.
        </p>
        <p>
          Proses seleksi didasarkan pada prestasi akademik, non-akademik, serta rekomendasi sekolah. Calon mahasiswa yang dinyatakan lulus PMDK mendapatkan kesempatan langsung untuk menjadi bagian dari keluarga besar Poliwangi tanpa mengikuti tes seleksi nasional.
        </p>
        <p>
          Selamat bagi seluruh peserta yang berhasil lolos seleksi PMDK tahun ini!
        </p>
      </div>
    `,
  },
];

const event = ref(registrationData.find((e) => e.slug === slug));
</script>
