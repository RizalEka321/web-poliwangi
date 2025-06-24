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
      <span class="text-[var(--text-black)] font-medium">Pendaftaran</span>
    </div>

    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <!-- Gambar Banner -->
      <img
        :src="bannerpendaftaran"
        alt="Banner Pendaftaran"
        class="object-cover w-full h-full"
      />

      <!-- Warna Overlay Solid -->
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>

      <!-- Teks -->
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Mandiri
        </h1>
      </div>
    </div>
    <section>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Pada tahun 2025, Perguruan Tinggi Vokasi dan Politeknik Negeri
        Banyuwangi membuka tiga jalur seleksi mandiri bagi calon mahasiswa.
        Jalur tersebut meliputi:
      </p>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <b
            >Jalur Seleksi Mandiri UTBK Konsorsium Politeknik Negeri
            Se-Indonesia,</b
          >
          yaitu seleksi berbasis nilai UTBK yang dilakukan secara bersama oleh
          Politeknik Negeri di seluruh Indonesia.
        </li>
        <li>
          <b>Jalur Seleksi Mandiri Seleksi Siswa Mandiri Berprestasi (SSMB),</b>
          yang diperuntukkan bagi siswa berprestasi dengan kriteria tertentu.
        </li>
        <li>
          <b>Jalur Seleksi Mandiri UTBK Politeknik Negeri Banyuwangi,</b>
          <p>
            yaitu seleksi berbasis nilai UTBK yang diselenggarakan khusus oleh
            Politeknik Negeri Banyuwangi.
          </p>
        </li>
      </ul>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Dengan adanya tiga jalur ini, calon mahasiswa memiliki lebih banyak
        kesempatan untuk bergabung dengan Politeknik Negeri Banyuwangi sesuai
        dengan kemampuan dan prestasi mereka.
      </p>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)] mt-5"
        style="font-family: var(--font-lora)"
      >
        Jalur Seleksi Mandiri UTBK Konsorsium Politeknik Negeri Se-Indonesia
      </h2>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Seleksi Mandiri UTBK Konsorsium Politeknik Negeri Se-Indonesia adalah
        jalur penerimaan mahasiswa baru di beberapa Politeknik Negeri di
        Indonesia yang menggunakan nilai UTBK (Ujian Tulis Berbasis Komputer)
        sebagai salah satu syarat seleksinya. Jalur ini merupakan alternatif
        bagi siswa yang tidak lolos SNBP dan SNBT.
      </p>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Jalur ini diperuntukkan untuk semua program studi di Politeknik Negeri
        Banyuwangi, yaitu:
      </p>
      <div class="mt-5">
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          1. Jurusan Bisnis dan Informatika :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Teknologi Rekayasa Perangkat Lunak</li>
          <li>Sarjana Terapan Bisnis Digital</li>
          <li>Sarjana Terapan Teknologi Rekayasa Komputer</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          2. Jurusan Teknik Sipil
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>D-III Teknik Sipil</li>
          <li>
            Sarjana Terapan Teknologi Rekayasa Konstruksi Jalan dan Jembatan
          </li>
          <li>Sarjana Terapan Teknologi Rekayasa Konstruksi Bangunan Gedung</li>
          <li>Sarjana Terapan Manajemen Konstruksi</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          3. Jurusan Teknik Mesin
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Teknologi Rekayasa Manufaktur</li>
          <li>Sarjana Terapan Teknik Manufaktur Kapal</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          4. Jurusan Pariwisata :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Manajemen Bisnis Pariwisata</li>
          <li>Sarjana Terapan Destinasi Pariwisata</li>
          <li>Sarjana Terapan Pengelolaan Perhotelan</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          5. Jurusan Pertanian :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Agribisnis</li>
          <li>Sarjana Terapan Teknologi Pengolahan Hasil Ternak</li>
          <li>Sarjana Terapan Pengembangan Produk Agroindustri</li>
          <li>
            Sarjana Terapan Teknologi Budi Daya Perikanan/Teknologi Akuakultur
          </li>
          <li>Sarjana Terapan Teknologi Produksi Tanaman Pangan</li>
          <li>Sarjana Terapan Terapan Teknologi Produksi Ternak</li>
        </ul>
      </div>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Berikut jadwal Pelaksanaan Jalur Seleksi Mandiri UTBK Konsorsium
        Politeknik Negeri Se-Indonesia:
      </p>
      <ol
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <div class="flex">
            <span class="w-[280px]">Pendaftaran UTBK Konsorsium</span>
            <span>: 5 Mei – 17 Juni 2025</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="w-[280px]">Pelaksanaan Tes UTBK Konsorsium</span>
            <span>: 21 Juni 2025</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="w-[280px]">Pengumuman Hasil UTBK Konsorsium</span>
            <span>: 26 Juni 2025</span>
          </div>
        </li>
        <li>
          Registrasi/Daftar Ulang:
          <ul
            class="list-disc list-outside pl-5 space-y-1 text-[var(--text-black)]"
          >
            <li>
              <div class="flex">
                <span class="w-[260px]">Pengiriman Kelengkapan Dokumen</span>
                <span>: 04 – 09 Juli 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Verifikasi Dokumen</span>
                <span>: 04 – 11 Juli 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Pengumuman Besaran UKT</span>
                <span>: 14 Juli 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Herregistrasi</span>
                <span>: 14 – 21 Juli 2025</span>
              </div>
            </li>
          </ul>
        </li>
      </ol>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)] mt-5"
        style="font-family: var(--font-lora)"
      >
        Jalur Seleksi Mandiri Seleksi Siswa Mandiri Berprestasi (S2MB)
      </h2>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Melalui Program Seleksi Mandiri Seleksi Siswa Mandiri Berprestasi (S2MB)
        sebagai alternatif jalur masuk dalam upaya meningkatkan mutu Sumber Daya
        Manusia serta pemerataan kesempatan mendapatkan pendidikan tinggi
        vokasi, Politeknik Negeri Banyuwangi memberikan kemudahan dan kesempatan
        yang lebih luas bagi siswa-siswi lulusan SMA/SMK/MA/Sederajat yang
        Berprestasi untuk mengikuti pendidikan di Politeknik Negeri Banyuwangi.
        S2MB adalah salah satu cara untuk menjaring dan menyaring calon
        mahasiswa baru Politeknik Negeri Banyuwangi melalui seleksi prestasi
        akademik dan prestasi non akademik tanpa melalui proses ujian tes tulis.
      </p>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Jalur ini diperuntukkan untuk semua program studi di Politeknik Negeri
        Banyuwangi, yaitu:
      </p>
      <div class="mt-5">
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          1. Jurusan Bisnis dan Informatika :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Teknologi Rekayasa Perangkat Lunak</li>
          <li>Sarjana Terapan Bisnis Digital</li>
          <li>Sarjana Terapan Teknologi Rekayasa Komputer</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          2. Jurusan Teknik Sipil
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>D-III Teknik Sipil</li>
          <li>
            Sarjana Terapan Teknologi Rekayasa Konstruksi Jalan dan Jembatan
          </li>
          <li>Sarjana Terapan Teknologi Rekayasa Konstruksi Bangunan Gedung</li>
          <li>Sarjana Terapan Manajemen Konstruksi</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          3. Jurusan Teknik Mesin
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Teknologi Rekayasa Manufaktur</li>
          <li>Sarjana Terapan Teknik Manufaktur Kapal</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          4. Jurusan Pariwisata :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Manajemen Bisnis Pariwisata</li>
          <li>Sarjana Terapan Destinasi Pariwisata</li>
          <li>Sarjana Terapan Pengelolaan Perhotelan</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          5. Jurusan Pertanian :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Agribisnis</li>
          <li>Sarjana Terapan Teknologi Pengolahan Hasil Ternak</li>
          <li>Sarjana Terapan Pengembangan Produk Agroindustri</li>
          <li>
            Sarjana Terapan Teknologi Budi Daya Perikanan/Teknologi Akuakultur
          </li>
          <li>Sarjana Terapan Teknologi Produksi Tanaman Pangan</li>
          <li>Sarjana Terapan Terapan Teknologi Produksi Ternak</li>
        </ul>
      </div>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Berikut jadwal Pelaksanaan Jalur Seleksi Mandiri Seleksi Siswa Mandiri
        Berprestasi (S2MB):
      </p>
      <ol
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <div class="flex">
            <span class="w-[280px]">Pendaftaran S2MB</span>
            <span>: 3 Mei – 04 Juni 2025</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="w-[280px]"
              >Pelaksanaan Seleksi Dokumen Prestasi S2MB</span
            >
            <span>: 20 Mei – 09 Juni 2025</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="w-[280px]">Pengumuman Hasil S2MB</span>
            <span>: 10 Juni 2025</span>
          </div>
        </li>
        <li>
          Registrasi/Daftar Ulang:
          <ul
            class="list-disc list-outside pl-5 space-y-1 text-[var(--text-black)]"
          >
            <li>
              <div class="flex">
                <span class="w-[260px]">Pengiriman Kelengkapan Dokumen</span>
                <span>: 10 – 13 Juni 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Verifikasi Dokumen</span>
                <span>: 11 – 17 Juni 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Pengumuman Besaran UKT</span>
                <span>: 18 Juni 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Herregistrasi</span>
                <span>: 18 – 26 Juni 202</span>
              </div>
            </li>
          </ul>
        </li>
      </ol>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)] mt-5"
        style="font-family: var(--font-lora)"
      >
        Jalur Seleksi Mandiri UTBK Politeknik Negeri Banyuwangi
      </h2>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Politeknik Negeri Banyuwangi memberikan kesempatan terakhir untuk
        menjadi bagian dari mahasiswa Poliwangi yaitu dengan membuka jalur
        Seleksi Mandiri UTBK Politeknik Negeri Banyuwangi. Adapun Jurusan dan
        program studi yang dibuka diantaranya:
      </p>
      <div class="mt-5">
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          1. Jurusan Bisnis dan Informatika :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Teknologi Rekayasa Perangkat Lunak</li>
          <li>Sarjana Terapan Bisnis Digital</li>
          <li>Sarjana Terapan Teknologi Rekayasa Komputer</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          2. Jurusan Teknik Sipil
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>D-III Teknik Sipil</li>
          <li>
            Sarjana Terapan Teknologi Rekayasa Konstruksi Jalan dan Jembatan
          </li>
          <li>Sarjana Terapan Teknologi Rekayasa Konstruksi Bangunan Gedung</li>
          <li>Sarjana Terapan Manajemen Konstruksi</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          3. Jurusan Teknik Mesin
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Teknologi Rekayasa Manufaktur</li>
          <li>Sarjana Terapan Teknik Manufaktur Kapal</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          4. Jurusan Pariwisata :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Manajemen Bisnis Pariwisata</li>
          <li>Sarjana Terapan Destinasi Pariwisata</li>
          <li>Sarjana Terapan Pengelolaan Perhotelan</li>
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          5. Jurusan Pertanian :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
          <li>Sarjana Terapan Agribisnis</li>
          <li>Sarjana Terapan Teknologi Pengolahan Hasil Ternak</li>
          <li>Sarjana Terapan Pengembangan Produk Agroindustri</li>
          <li>
            Sarjana Terapan Teknologi Budi Daya Perikanan/Teknologi Akuakultur
          </li>
          <li>Sarjana Terapan Teknologi Produksi Tanaman Pangan</li>
          <li>Sarjana Terapan Terapan Teknologi Produksi Ternak</li>
        </ul>
      </div>
      <p
        class="text-justify text-[var(--text-black)] mt-4"
        style="font-family: var(--font-albert)"
      >
        Berikut jadwal Pelaksanaan Jalur Seleksi Mandiri UTBK Politeknik Negeri
        Banyuwangi:
      </p>
      <ol
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <div class="flex">
            <span class="w-[280px]">Pendaftaran UTBK Mandiri</span>
            <span>: 2 Juni – 10 Juli 2025</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="w-[280px]">Pelaksanaan Tes UTBK Mandiri</span>
            <span>: 12 Juli 2025</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="w-[280px]">Pengumuman Hasil UTBK Mandiri</span>
            <span>: 15 Juli 2025</span>
          </div>
        </li>
        <li>
          Registrasi/Daftar Ulang:
          <ul
            class="list-disc list-outside pl-5 space-y-1 text-[var(--text-black)]"
          >
            <li>
              <div class="flex">
                <span class="w-[260px]">Pengiriman Kelengkapan Dokumen</span>
                <span>: 15 – 20 Juli 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Verifikasi Dokumen</span>
                <span>: 16 – 22 Juli 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Pengumuman Besaran UKT</span>
                <span>: 23 Juli 2025</span>
              </div>
            </li>
            <li>
              <div class="flex">
                <span class="w-[260px]">Herregistrasi</span>
                <span>: 23 Juli – 01 Agustus 2025</span>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  </div>
</template>

<script setup>
import bannerpendaftaran from "@/assets/img/bannerpendaftaran.png";
</script>
