<template>
  <div v-if="event" class="px-6 md:px-20 py-10 space-y-10 font-[var(--font-albert)]">
    <div class="text-sm text-[var(--text-gray)] flex items-center gap-1 font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium"> Berita Pendaftaran</span>
    </div>

    <div class="flex flex-col lg:flex-row gap-10">
      <section class="flex-1">
        <h1 class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-2 font-[var(--font-lora)]" style="font-family: var(--font-lora)">
          {{ event.title }}
        </h1>
        <div class="text-sm text-[var(--text-gray)] flex items-center flex-wrap gap-4 mb-6 font-[var(--font-albert)]">
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-calendar-days text-[var(--accent-yellow)]"></i>
            {{ event.date }}
          </span>
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-tags text-[var(--accent-yellow)]"></i>
            Pendaftaran
          </span>
        </div>

        <!-- Gambar Event -->
        <div class="w-full mb-6">
          <img :src="event.image" class="w-full max-w-xl mx-auto object-cover rounded-lg shadow" alt="Foto Event" />
        </div>

        <!-- Isi Konten -->
        <div class="text-justify text-[var(--text-gray)] leading-relaxed space-y-4 max-w-4xl mx-auto font-[var(--font-albert)]" v-html="event.content"></div>
      </section>

      <!-- Pendaftaran Terbaru -->
      <aside class="w-full lg:w-[30%]">
        <h2 class="text-lg font-semibold border-l-4 border-[var(--accent-yellow)] pl-2 mb-4 text-[var(--blue-dark)]" style="font-family: var(--font-lora)">Berita Pendaftaran Terbaru</h2>
        <ul class="space-y-5 text-[var(--blue-dark)]">
          <li v-for="item in recentRegistration" :key="item.slug" class="border-b border-[var(--blue-medium)] pb-3">
            <router-link :to="`/pendaftaran/${item.slug}`" class="hover:underline hover:text-[var(--accent-yellow)] font-semibold" style="font-family: var(--font-lora)">
              {{ item.title }}
            </router-link>
            <p class="text-xs text-[var(--text-gray)] mt-1">{{ item.date }}</p>
          </li>
        </ul>
      </aside>
    </div>
  </div>

  <!-- Jika Tidak Ada Event -->
  <div v-else class="px-6 md:px-20 py-10">
    <p class="text-center text-red-500 font-semibold font-[var(--font-albert)]">Berita pendaftaran tidak ditemukan</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";

const route = useRoute();
const slug = ref(route.params.slug);

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

const event = ref(registrationData.find((e) => e.slug === slug.value));

const recentRegistration = computed(() => {
  return registrationData
    .filter((item) => item.slug !== slug.value)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
});

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    event.value = registrationData.find((e) => e.slug === newSlug);
  }
);
</script>
