<template>
  <div class="px-6 md:px-20 py-10 space-y-10" v-if="event">
    <div class="text-sm text-gray-500">
      <router-link to="/" class="hover:underline hover:text-blue-600"
        >Home</router-link
      >
      <span class="mx-1 text-yellow-500">›</span>
      <a>Event</a>
      <span class="mx-1 text-yellow-500">›</span>
      <span class="font-medium text-black">{{ event.title }}</span>
    </div>

    <section class="event">
      <div class="mb-5 space-y-2">
        <h1 class="text-3xl font-bold text-black">{{ event.title }}</h1>
        <p class="text-sm text-gray-500 flex items-center flex-wrap gap-3">
          <span class="flex items-center"
            ><i class="fa-solid fa-calendar-days me-2"></i>
            {{ event.date }}</span
          >
          <span class="flex items-center"
            ><i class="fa-solid fa-tags me-2"></i> Event</span
          >
        </p>
      </div>

      <div v-html="event.content"></div>
    </section>
  </div>

  <div v-else class="px-6 py-10 text-center text-gray-500">
    Event tidak ditemukan.
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const slug = route.params.slug;

const eventList = [
  {
    image: "/src/assets/img/event_1.png",
    title: "Pendaftaran UTBK-SNBT 2025 Telah Dibuka!",
    date: "11 - 27 Maret",
    slug: "pendaftaran-utbk-snbt-2025-telah-dibuka",
    content: `
    <div class="text-justify text-gray-700 leading-relaxed space-y-4">
      <p>
        Pendaftaran UTBK-SNBT 2025 resmi dibuka dengan antusiasme tinggi dari seluruh calon mahasiswa di Indonesia.
      </p>

      <p>
        Politeknik Negeri Banyuwangi (Poliwangi) sebagai salah satu pusat UTBK telah menyiapkan fasilitas terbaik untuk mendukung pelaksanaan ujian sesuai standar nasional.
      </p>

      <p>
        Calon peserta diimbau untuk mempersiapkan seluruh persyaratan administrasi, termasuk pengisian biodata, dokumen akademik, serta mengikuti prosedur registrasi daring yang telah ditetapkan oleh panitia pusat.
      </p>

      <p>
        Bagi peserta yang membutuhkan bimbingan, Poliwangi juga menyediakan layanan pusat informasi UTBK yang siap membantu selama proses pendaftaran berlangsung.
      </p>

      <div class="w-full my-6 flex justify-center">
        <div class="max-w-md w-full">
          <img src="/src/assets/img/event_1.png" alt="Pendaftaran UTBK-SNBT 2025" class="rounded-lg shadow w-full object-cover" />
          <p class="text-sm text-center text-gray-500 mt-2">Suasana pendaftaran UTBK-SNBT di Poliwangi</p>
        </div>
      </div>

      <p>
        Pendaftaran akan berlangsung hingga tanggal 27 Maret, sementara pelaksanaan tes UTBK direncanakan mulai bulan Mei mendatang. Seluruh hasil ujian akan digunakan sebagai dasar seleksi nasional perguruan tinggi negeri.
      </p>

      <p>
        Poliwangi mengajak seluruh calon mahasiswa untuk memanfaatkan kesempatan ini dengan sebaik-baiknya, serta menjaga kondisi fisik dan mental dalam menghadapi seleksi penting ini.
      </p>
    </div>
  `,
    imageDetail: "/src/assets/img/event_1.png",
    caption: "Suasana pendaftaran UTBK-SNBT di Poliwangi",
  },
  {
    image: "/src/assets/img/event_2.png",
    title:
      "Eksplorasi Pojok Statistik: Wadah Literasi Data untuk Semua Akademisi",
    date: "27 Februari",
    slug: "eksplorasi-pojok-statistik-wadah-literasi-data-untuk-semua-akademisi",
    content: `
      <div class="text-justify text-gray-700 leading-relaxed space-y-4">
        <p>
          Politeknik Negeri Banyuwangi (Poliwangi) kembali menghadirkan inovasi dalam penguatan literasi data di lingkungan akademik melalui program bertajuk <strong>"Eksplorasi Pojok Statistik"</strong>. Program ini menjadi wadah strategis
          bagi seluruh sivitas akademika untuk memahami, mengeksplorasi, serta memanfaatkan data statistik secara tepat dan efektif.
        </p>

        <p>
          Kegiatan ini diinisiasi sebagai bentuk dukungan Poliwangi terhadap pentingnya penguasaan data di era digital. Melalui Pojok Statistik, mahasiswa, dosen, maupun tenaga kependidikan dapat memperoleh akses langsung ke berbagai sumber
          data resmi, seperti data dari Badan Pusat Statistik (BPS), serta dilengkapi dengan bimbingan terkait cara pengolahan dan pemanfaatannya dalam riset maupun pengambilan keputusan.
        </p>

        <p>
          Selama kegiatan berlangsung, peserta mendapatkan pembekalan materi mengenai teknik analisis statistik, visualisasi data, hingga penerapan software statistik modern. Narasumber yang dihadirkan berasal dari kalangan profesional,
          termasuk praktisi BPS dan akademisi yang berpengalaman dalam bidang pengolahan data.
        </p>

        <div class="w-full my-6 flex justify-center">
          <div class="max-w-md w-full">
            <img src="/src/assets/img/event_2.png" alt="Eksplorasi Pojok Statistik" class="rounded-lg shadow w-full object-cover" />
            <p class="text-sm text-center text-gray-500 mt-2">Suasana kegiatan Eksplorasi Pojok Statistik di Poliwangi</p>
          </div>
        </div>

        <p>
          Direktur Poliwangi menyampaikan bahwa penguatan literasi statistik merupakan langkah penting dalam meningkatkan kualitas akademik kampus. “Kemampuan membaca, memahami, dan mengolah data menjadi salah satu kompetensi esensial di
          era saat ini. Melalui Pojok Statistik ini, kami ingin memberikan ruang belajar yang aplikatif dan bermanfaat bagi seluruh civitas,” ujar beliau.
        </p>

        <p>Selain sesi pelatihan, program ini juga membuka layanan konsultasi data yang dapat dimanfaatkan oleh mahasiswa dalam penyusunan skripsi, penelitian dosen, hingga pengembangan program pengabdian masyarakat berbasis data.</p>

        <p>
          Ke depan, Poliwangi berencana memperluas kolaborasi dengan berbagai instansi pemerintah dan swasta dalam pengembangan sistem literasi data kampus berbasis digital. Diharapkan, kegiatan semacam ini tidak hanya memperkaya wawasan
          akademik, tetapi juga mempersiapkan lulusan yang adaptif terhadap perkembangan teknologi dan kebutuhan industri berbasis data.
        </p>

        <p>
          Eksplorasi Pojok Statistik ini menjadi wujud komitmen Poliwangi dalam menciptakan ekosistem pendidikan yang responsif terhadap perkembangan ilmu pengetahuan, sekaligus mendorong budaya literasi data sebagai bagian integral dalam
          proses pembelajaran.
        </p>
      </div>
    `,
    imageDetail: "/src/assets/img/event_2.png",
    caption: "Suasana kegiatan Eksplorasi Pojok Statistik di Poliwangi",
  },
];

const event = ref(eventList.find((e) => e.slug === slug));
</script>
