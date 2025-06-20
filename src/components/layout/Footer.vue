<template>
  <footer class="bg-[var(--blue-dark)] text-white font-[var(--font-albert)]">
    <div class="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-6 gap-6 text-sm">
      <!-- Logo dan Alamat -->
      <div class="col-span-2 flex items-start space-x-2">
        <img src="/src/assets/icon/logo.png" alt="Logo Poliwangi" class="h-13" />
        <div>
          <h1 class="text-xs" style="font-family: var(--font-playfair)">POLITEKNIK NEGERI</h1>
          <h2 class="text-lg -mt-1" style="font-family: var(--font-playfair)">BANYUWANGI</h2>
          <p class="mt-3 leading-5">Jalan Raya Jember KM 13<br />Banyuwangi 68461,<br />Jawa Timur – Indonesia</p>
        </div>
      </div>

      <!-- Profil -->
      <div>
        <h3 class="font-semibold mb-3 uppercase">PROFIL</h3>
        <ul class="space-y-1 leading-6">
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
        <h3 class="font-semibold mb-3 uppercase">LAYANAN PUBLIK</h3>
        <ul class="space-y-1 leading-6">
          <li>Peraturan Akademik</li>
          <li>PPID Poliwangi</li>
          <li>Jalur Masuk</li>
          <li>Pengaduan Poliwangi</li>
          <li>Survey Kepuasan <br />Masyarakat</li>
        </ul>
      </div>

      <!-- Jurusan -->
      <div>
        <h3 class="font-semibold mb-3 uppercase">JURUSAN</h3>
        <ul class="space-y-1 leading-6">
          <li>Bisnis dan Informatika</li>
          <li>Teknik Sipil</li>
          <li>Teknik Mesin</li>
          <li>Pertanian</li>
          <li>Pariwisata</li>
        </ul>
      </div>

      <!-- Media Sosial -->
      <div>
        <h3 class="font-semibold mb-3 uppercase">MEDIA SOSIAL</h3>
        <div class="flex items-center space-x-4 text-xl mb-4">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-tiktok"></i>
        </div>
        <div class="flex items-start mb-2">
          <i class="fas fa-envelope mt-1 mr-2"></i>
          <div class="leading-5">
            <p>poliwangi@poliwangi.ac.id</p>
            <p>humas@poliwangi.ac.id</p>
          </div>
        </div>
        <div class="flex items-center">
          <i class="fas fa-phone mr-2"></i>
          <span>+62 (0333) 636780</span>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-left text-[var(--text-black)] text-sm py-3 px-6" style="background-color: var(--accent-yellow); font-family: var(--font-albert)">Copyright © 2024 POLITEKNIK NEGERI BANYUWANGI</div>
  </footer>
</template>
