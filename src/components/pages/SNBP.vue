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
          SNBP
        </h1>
      </div>
    </div>
    <section>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Pendaftaran Seleksi Nasional Masuk Politeknik Negeri (SNBP) Politeknik
        Negeri Banyuwangi tahun 2025 telah dibuka mulai tanggal 06–31 Januari
        2025 (Registrasi Akun SNPMB Sekolah) dan 13 Januari – 18 Februari 2025.
        Pendaftaran dilakukan secara online melalui laman
        <a
          href="https://portal-snpmb.bppp.kemdikbud.go.id"
          target="_blank"
          class="text-[var(--accent-blue)] hover:underline"
        >
          portal-snpmb.bppp.kemdikbud.go.id
        </a>
      </p>
      <img
        :src="postersnbp"
        alt="Poster SNBP"
        class="mx-auto w-auto h-[700px] mt-5"
      />
      <p
        class="text-justify text-[var(--text-black)] mt-5"
        style="font-family: var(--font-albert)"
      >
        Pada tahun 2025, Politeknik Negeri Banyuwangi memiliki 5 bidang keilmuan
        serta membuka 18 program studi dimana terdapat satu Program Studi
        Diploma 3 (D3) dan empat belas Program Studi Sarjana Terapan (S1
        Terapan) , diantaranya:
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
        </ul>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          Serta Program Studi Baru: :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-black)]"
          style="font-family: var(--font-albert)"
        >
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
        <p
          class="text-justify text-[var(--text-black)] mt-5"
          style="font-family: var(--font-albert)"
        >
          Setiap siswa dapat memilih dua program studi dari satu atau dua PTN
          dan Jika memilih satu program studi, dan siswa dapat memilih PTN yang
          berada di provinsi mana pun serta jika memilih dua program studi,
          salah satu program studi harus berada di PTN pada provinsi yang sama
          dengan SMA/MA/SMK asalnya.
        </p>
        <p
          class="text-justify text-[var(--text-black)] mt-5"
          style="font-family: var(--font-albert)"
        >
          Untuk informasi lebih lanjut mengenai Pendaftaran Mahasiswa Baru dan
          informasi seputar program studi di Politeknik Negeri Banyuwangi, anda
          dapat apat mengunjungi media sosial Instagram @poliwangi_jinggo serta
          informasi umum terkait SNBP bisa dicek pada link<a
            href="https://portal-snpmb.bppp.kemdikbud.go.id"
            target="_blank"
            class="text-[var(--accent-blue)] hover:underline"
          >
            https://snpmb.bppp.kemdikbud.go.id/snbp/informasi-umum
          </a>
          atau menghubungi call center Politeknik Negeri Banyuwangi di nomor
          0823-3274-8132.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import postersnbp from "@/assets/img/snbp.png";
import bannerpendaftaran from "@/assets/img/bannerpendaftaran.png";
</script>
