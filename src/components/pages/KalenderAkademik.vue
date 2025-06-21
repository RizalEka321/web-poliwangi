<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <!-- Breadcrumb -->
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Akademik</span>
    </div>

    <!-- Banner -->
    <div class="relative w-full h-64 md:h-80 overflow-hidden">
      <img :src="bannerAkademik" alt="Banner Akademik" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-opacity-60 flex items-center ml-20">
        <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora);">
          Kalender Akademik
        </h1>
      </div>
    </div>

    <!-- GAMBARAN UMUM -->
    <section>
      <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
        Gambaran Umum
      </h2>
      <p class="text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
        Kalender Akademik adalah Uraian jadwal pelaksanaan kegiatan Akademik yang akan di laksanakan oleh seluruh sivitas akademik di perguruan tinggi, yang berisi Pengaturan jadwal Penerimaan Mahasiswa Baru, Program Pengenalan Kampus, Her Registrasi, Perkuliahan dan Ujian, Tugas Akhir atau Proyek Akhir, Yudisium dan Wisuda.
        <br /><br />
        Jadwal Kegiatan pada Kalender Akademik ditetapkan berdasarkan Keputusan Direktur Politeknik Negeri Banyuwangi setelah memperolah pertimbangan dan Senat Politeknik Negeri Banyuwangi.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
        Dasar Hukum
      </h2>
      <p class="text-justify text-[var(--text-gray)] mb-2" style="font-family: var(--font-albert);">
        Penyusunan Kalender Akademik didasarkan pada beberapa peraturan pokok antara lain:
      </p>
      <ul class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
        <li>
          Undang-undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi (Lembaran Negara Republik Indonesia Tahun 2012 Nomor 158 dan Tambahan Lembaran Negara Republik Indonesia Nomor 5336);
        </li>
        <li>
          Peraturan Pemerintah Nomor 32 Tahun 2013 Tentang Standar Nasional Pendidikan (Lembaran Negara Republik Indonesia Tahun 2013 Nomor 71 dan Tambahan Lembaran Negara Republik Indonesia Nomor 5410);
        </li>
        <li>
          Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi (Lembaran Negara Republik Indonesia Tahun 2014 Nomor 16 dan Tambahan Lembaran Negara Republik Indonesia Nomor 5500);
        </li>
        <li>
          Peraturan Menteri Riset Teknologi dan Pendidikan Tinggi No. 44 Tahun 2015 tentang Standar Nasional Pendidikan Tinggi (Berita Negara Republik Indonesia Tahun 2015 Nomor 1952).
        </li>
      </ul>
</section>


    <!-- TUJUAN DAN MANFAAT -->
    <section>
      <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
        Tujuan dan Manfaat
      </h2>
      <p class="mb-2 text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
        Dengan ditetapkannya Kalender Akademik di harapkan dapat memberikan jadwal yang tepat pada setiap kegiatan akademik dengan jangka waktu yang telah di tetapkan. Oleh karena itu pembuatan Kalender Akademik memiliki maksud dan tujuan :
      </p>
      <ol class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
        <li>Memberikan informasi jadwal pelaksanaan kegiatan akademik kepada Mahasiswa selama menempuh pendidikan di Poliwangi.</li>
        <li>Memberikan informasi kapan jadwal pelaksanaan kegiatan akademik kepada Dosen dan karyawan sehingga dapat mempersiapkan menyusun kegiatan akademik sesuai dengan jadwal.</li>
      </ol>
      <p class="text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
        
Sedangkan manfaat dari kalender akademik dapat menghindari keterlambatan atau jadwal bentrok dalam pelaksaanaan kegiatan akademik, mahasiswa dapat menjadikan Kalender Akademik pedoman dalam pelaksanaan kegiatan akademik, sehingga kegiatan akedemik dapat berjalan dengan lancar sesuai dengan jadwal yang telah di tentukan.
      </p>
    </section>

    <!-- GAMBAR KALENDER -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
      <img :src="kalenderGanjil" alt="Kalender Akademik Ganjil" class="rounded-lg shadow-lg" />
      <img :src="kalenderGenap" alt="Kalender Akademik Genap" class="rounded-lg shadow-lg" />
    </section>
  </div>
</template>

<script setup>
import kalenderGanjil from '@/assets/img/kalenderganjil.png'
import kalenderGenap from '@/assets/img/kalendergenap.png'
import bannerAkademik from '@/assets/img/bannerakademik.png'
</script>
