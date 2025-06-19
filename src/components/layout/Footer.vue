<template>
  <footer class="bg-[#00487C] text-white">
    <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
      <!-- Logo dan Alamat -->
      <div>
        <img src="/src/assets/icon/logo.png" alt="Logo Poliwangi" class="h-16 mb-4" />
        <p>POLITEKNIK NEGERI BANYUWANGI</p>
        <p class="mt-2">Jalan Raya Jember KM 13 Banyuwangi 68461,</p>
        <p>Jawa Timur – Indonesia</p>
      </div>

      <!-- Profil -->
      <div>
        <h3 class="font-semibold mb-2">PROFIL</h3>
        <ul class="space-y-1">
          <li>Sejarah Poliwangi</li>
          <li>Visi & Misi</li>
          <li>Senat</li>
          <li>Sistem Pendidikan</li>
          <li>Kehidupan Kampus</li>
          <li>Kerjasama Poliwangi</li>
        </ul>
      </div>

      <!-- Layanan Publik -->
      <div>
        <h3 class="font-semibold mb-2">LAYANAN PUBLIK</h3>
        <ul class="space-y-1">
          <li>Peraturan Akademik</li>
          <li>PPID Poliwangi</li>
          <li>Jalur Masuk</li>
          <li>Pengaduan Poliwangi</li>
          <li>Survey Kepuasan Masyarakat</li>
        </ul>
      </div>

      <!-- Jurusan -->
      <div>
        <h3 class="font-semibold mb-2">JURUSAN</h3>
        <ul class="space-y-1">
          <li>Bisnis dan Informatika</li>
          <li>Teknik Sipil</li>
          <li>Teknik Mesin</li>
          <li>Pertanian</li>
          <li>Pariwisata</li>
        </ul>
      </div>

      <!-- Media Sosial -->
      <div>
        <h3 class="font-semibold mb-2">MEDIA SOSIAL</h3>
        <div class="flex items-center space-x-3 mb-4 text-2xl">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-tiktok"></i>
        </div>
        <p class="flex items-center space-x-2">
          <i class="fas fa-envelope"></i>
          <span>poliwangi@poliwangi.ac.id<br />humas@poliwangi.ac.id</span>
        </p>
        <p class="flex items-center space-x-2 mt-2">
          <i class="fas fa-phone"></i>
          <span>+62 (0333) 636780</span>
        </p>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-yellow-300 text-center text-black text-sm py-3">
      Copyright © 2024 POLITEKNIK NEGERI BANYUWANGI
    </div>
  </footer>
</template>

<script setup>
// Tidak ada logika JS untuk saat ini
</script>

<style scoped>
/* Tambahkan font awesome jika belum */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>