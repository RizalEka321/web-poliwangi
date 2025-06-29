<template>
  <div v-if="event" class="px-6 md:px-20 py-10 space-y-10 font-[var(--font-albert)]">
    <!-- Breadcrumb -->
    <div class="text-sm text-[var(--text-gray)] flex items-center gap-1">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Event</span>
    </div>

    <!-- Konten Utama -->
    <div class="flex flex-col lg:flex-row gap-10">
      <!-- Event Detail -->
      <section class="flex-1">
        <h1 class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-2" style="font-family: var(--font-lora)">
          {{ event.title }}
        </h1>
        <div class="text-sm text-[var(--text-gray)] flex items-center flex-wrap gap-4 mb-6">
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-calendar-days text-[var(--accent-yellow)]"></i>
            {{ event.date }}
          </span>
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-tags text-[var(--accent-yellow)]"></i>
            Event
          </span>
        </div>

        <!-- Gambar Event -->
        <div class="w-full mb-6">
          <img :src="event.imageDetail" class="w-full max-w-xl mx-auto object-cover rounded-lg shadow" :alt="event.title" />
          <p class="text-sm text-center text-[var(--text-gray)] mt-2">
            {{ event.caption }}
          </p>
        </div>

        <!-- Isi Konten -->
        <div class="text-justify text-[var(--text-gray)] leading-relaxed space-y-4 max-w-4xl mx-auto" style="font-family: var(--font-albert)" v-html="event.content"></div>
      </section>

      <!-- Event Terbaru -->
      <aside class="w-full lg:w-[30%]">
        <h2 class="text-lg font-bold border-l-4 border-[var(--accent-yellow)] pl-2 mb-4 text-[var(--blue-dark)]">Event Terbaru</h2>
        <ul class="space-y-5 text-[var(--blue-dark)]">
          <li v-for="item in eventLainnya" :key="item.slug" class="border-b border-[var(--blue-medium)] pb-3">
            <router-link :to="`/event/${item.slug}`" class="hover:underline hover:text-[var(--accent-yellow)] font-semibold" style="font-family: var(--font-lora)">
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
    <p class="text-center text-red-500 font-semibold">Event tidak ditemukan</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, computed, watch } from "vue";

const route = useRoute();
const router = useRouter();
const slug = ref(route.params.slug);
const eventList = [
  {
    image: "/src/assets/img/event_1.png",
    title: "Pendaftaran Jalur Seleksi Mandiri Politeknik Negeri Banyuwangi Tahun 2025 Telah Dibuka!",
    date: "13 June 2025",
    slug: "pendaftaran-mandiri-2025-telah-dibuka",
    content: `<p>Halo #SobatBranggo, kemarin banyak yang bertanya kapan Jalur Mandiri Poliwangi dibuka. Nah, sekarang Jalur Mandiri Poliwangi telah dibuka! Untuk kamu yang masih belum mendapatkan kesempatan menjadi bagian dari Poliwangi yuk segera daftarkan dirimu sekarang juga. Informasi lebih lanjut dapat dilihat di flayer yaaa!</p>
    <p>Untuk Link Pendatarannya dapat kamu akses pada laman berikut:
<br> https://pmb.poliwangi.ac.id/ atau Scan QR Code diatas</p>
<p>Jika ada pertanyaan kamu dapat menghubungi Helpdesk Poliwangi di email:
<br> pmb@poliwangi.ac.id dan akpsi@poliwangi.ac.id</p>
<p>Serta Call Center Poliwangi:
<br> 0823 3274 8132 – WhatsApp Only</p>`,
    imageDetail: "/src/assets/img/event_1.png",
    caption: "Suasana pendaftaran UTBK-SNBT di Poliwangi",
  },
  {
    image: "/src/assets/img/event_2.png",
    title: "Eksplorasi Pojok Statistik: Wadah Literasi Data untuk Semua Akademisi",
    date: "27 Februari",
    slug: "eksplorasi-pojok-statistik-wadah-literasi-data-untuk-semua-akademisi",
    content: `<p>Politeknik Negeri Banyuwangi mengadakan kegiatan "Eksplorasi Pojok Statistik: Wadah Literasi Data untuk Semua Akademisi" sebagai bentuk sosialisasi pemanfaatan Pojok Statistik sebagai sumber informasi dan pencarian data statistik. Kegiatan ini akan diselenggarakan secara daring melalui Zoom pada hari Kamis, 27 Februari 2025 pukul 13.00 – 15.00 WIB, dengan menghadirkan Yeni Setyowati, S.Si., M.Si., selaku Statistisi Ahli Madya dan Ketua Tim RB ZI dan EPSS BPS Kabupaten Banyuwangi, sebagai pemateri. Bagi sivitas akademika yang ingin mengikuti kegiatan ini, dapat melakukan pendaftaran melalui tautan [https://bit.ly/PendaftaranSosialisasiPojokStatistik](https://bit.ly/PendaftaranSosialisasiPojokStatistik), dan mengikuti kegiatan melalui Zoom di [https://bit.ly/EkplorasiPojokStatistik2025](https://bit.ly/EkplorasiPojokStatistik2025). Jangan lewatkan kesempatan untuk mendapatkan informasi lebih lengkap terkait pemanfaatan Pojok Statistik dalam mendukung kegiatan akademik dan penelitian!
</p>`,
    imageDetail: "/src/assets/img/event_2.png",
    caption: "Suasana kegiatan Eksplorasi Pojok Statistik di Poliwangi",
  },
];
const event = ref(eventList.find((e) => e.slug === slug.value));

const eventLainnya = computed(() => eventList.filter((e) => e.slug !== slug.value).slice(0, 5));

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    event.value = eventList.find((e) => e.slug === newSlug);
  }
);
</script>
