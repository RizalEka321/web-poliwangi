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
          UTBK-SNBT
        </h1>
      </div>
    </div>
    <section>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <b>UTBK-SNBT</b> atau dengan kepanjangan Ujian Masuk Berbasis Komputer
        Seleksi Nasional Berdasarkan Test adalah jalur seleksi nasional yang
        diselenggarakan secara bersamaan untuk menyeleksi calon mahasiswa baru
        yang ingin melanjutkan pendidikan di bidang Vokasi di Politeknik Negeri
        Banyuwangi.
      </p>
      <img
        :src="posterutbk"
        alt="Poster UTBK-SNBT"
        class="mx-auto w-auto h-[700px] mt-5"
      />
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Ketentuan Umum:
      </h3>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          Peserta SNBT hanya diperbolehkan mengikuti UTBK 2025 sebanyak satu
          kali.
        </li>
        <li>
          Hasil UTBK 2025 hanya berlaku untuk mengikuti SNBT dan penerimaan di
          PTN tahun 2025.
        </li>
        <li>
          SNBT 2025 dilakukan berdasarkan hasil UTBK 2025, ditambah portofolio
          bagi peserta yang memilih program seni dan/atau olahraga.
        </li>
        <li>
          Siswa yang telah dinyatakan lulus seleksi Jalur SNBP 2025, SNBP 2024,
          dan SNBP 2023 <b>tidak dapat mengikuti UTBK-SNBT 2025.</b>
        </li>
      </ul>
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Persyaratan Peserta:
      </h3>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          Peserta harus memiliki Akun SNPMB Siswa. Registrasi Akun SNPMB Siswa
          dapat dilakukan di
          <a
            href="https://portal-snpmb.bppp.kemdikbud.go.id/"
            target="_blank"
            class="text-[var(--accent-blue)] hover:underline"
          >
            Portal SNPMB.
          </a>
        </li>
        <li>
          Warga Negara Indonesia (WNI) yang memiliki Nomor Induk Kependudukan
          (NIK).
        </li>
        <li>
          Siswa SMA/SMK/MA Kelas 12 atau kelas terakhir pada tahun 2025, atau
          Peserta didik Paket C tahun 2025 dengan umur maksimal 25 tahun (per 1
          Juli 2025). Siswa yang belum mempunyai ijazah harus membawa surat
          keterangan siswa kelas 12 sekurang-kurangnya disertai dengan:
          <ul
            class="list-disc list-inside space-y-1 text-[var(--text-black)]"
            style="font-family: var(--font-albert)"
          >
            <li>identitas, meliputi nama, kelas, NISN dan NPSN;</li>
            <li>pas foto terbaru (berwarna);</li>
            <li>tanda tangan Kepala Sekolah/Madrasah;</li>
            <li>Stempel/cap sekolah.</li>
          </ul>
        </li>
        <li>
          Lulusan SMA/SMK/MA Sederajat tahun 2023 dan 2024, atau Lulusan Paket C
          tahun 2024 dan 2023 dengan umur maksimal 25 tahun (per 1 Juli 2025).
        </li>
        <li>
          Bagi lulusan SMA sederajat dari luar negeri harus memiliki ijazah yang
          sudah disetarakan.
        </li>
        <li>
          Bagi peserta yang memilih program studi bidang Seni dan/atau Olahraga
          wajib mengunggah portofolio.
        </li>
        <li>
          Memiliki kesehatan yang memadai sehingga tidak mengganggu kelancaran
          proses studi.
        </li>
        <li>
          Bagi peserta berkebutuhan khusus tunanetra wajib mengunggah Surat
          Pernyataan Tuna Netra.
        </li>
        <li>Membayar biaya UTBK (kecuali Peserta KIP Kuliah).</li>
      </ul>
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Materi Test:
      </h3>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <b>Tes Potensi Skolastik (TPS)</b>
          <ul
            class="list-disc list-inside space-y-1 text-[var(--text-black)]"
            style="font-family: var(--font-albert)"
          >
            <li>Penalaran Umum</li>
            <li>Pengetahuan dan Pemahaman Umum</li>
            <li>Pemahaman Bacaan dan Menulis</li>
            <li>Pengetahuan Kuantitatif</li>
          </ul>
        </li>
        <li>
          <b>Tes Literasi</b>
          <ul
            class="list-disc list-inside space-y-1 text-[var(--text-black)]"
            style="font-family: var(--font-albert)"
          >
            <li>Literasi dalam Bahasa Indonesia</li>
            <li>Literasi dalam Bahasa Inggris</li>
            <li>Penalaran Matematika</li>
          </ul>
        </li>
      </ul>
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Materi Test:
      </h3>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <b>Tes Potensi Skolastik (TPS)</b>
          <ul
            class="list-disc list-inside space-y-1 text-[var(--text-black)]"
            style="font-family: var(--font-albert)"
          >
            <li>Penalaran Umum</li>
            <li>Pengetahuan dan Pemahaman Umum</li>
            <li>Pemahaman Bacaan dan Menulis</li>
            <li>Pengetahuan Kuantitatif</li>
          </ul>
        </li>
        <li>
          <b>Tes Literasi</b>
          <ul
            class="list-disc list-inside space-y-1 text-[var(--text-black)]"
            style="font-family: var(--font-albert)"
          >
            <li>Literasi dalam Bahasa Indonesia</li>
            <li>Literasi dalam Bahasa Inggris</li>
            <li>Penalaran Matematika</li>
          </ul>
        </li>
      </ul>
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Pendaftaran UTBK-SNBT:
      </h3>
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Tahapan pendaftaran UTBK-SNBT secara umum sebagai berikut:
      </p>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          <b>Login Portal SNPMB dan Memilih Menu Pendaftaran UTBK-SNBT</b>
          <p>
            Masuk ke
            <a
              href="https://portal-snpmb.bppp.kemdikbud.go.id/"
              target="_blank"
              class="text-[var(--accent-blue)] hover:underline"
            >
              Portal SNPMB
            </a>
            menggunakan akun SNPMB
          </p>
        </li>
        <li>
          <b>Melengkapi Biodata</b>
          <p>
            Mengisi dan melengkapi biodata, unggah pas foto berwarna terbaru,
            dan verifikasi biodata serta unduh dan unggah pernyataan tunanetra
            dan/atau hambatan visual
          </p>
        </li>
        <li>
          <b>Memilih Program Studi dan Mengunggah Portofolio</b>
          <p>
            Mengunggah portofolio wajib bagi peserta yang memilih program studi
            Bidang Seni dan/atau Olahraga
          </p>
        </li>
        <li>
          <b>Memilih Pusat UTBK</b>
          <p>
            Memperoleh slip pembayaran biaya UTBK bagi peserta non pelamar KIP
            Kuliah
          </p>
        </li>
        <li>
          <b>Melakukan Pembayaran</b>
          <p>
            Lembaga dan mekanisme pembayaran akan diinformasikan lebih lanjut
          </p>
        </li>
        <li>
          <b>Mengunduh Kartu Peserta UTBK-SNBT</b>
          <p>
            Masuk ke
            <a
              href="https://portal-snpmb.bppp.kemdikbud.go.id/"
              target="_blank"
              class="text-[var(--accent-blue)] hover:underline"
            >
              Portal SNPMB </a
            >dan memilih menu pendaftaran UTBK-SNBT untuk unduh kartu peserta
            UTBK-SNBT
          </p>
        </li>
      </ul>
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
          informasi umum terkait SNBP bisa dicek pada link
          <a
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
import posterutbk from "@/assets/img/utbk.png";
import bannerpendaftaran from "@/assets/img/bannerpendaftaran.png";
</script>
