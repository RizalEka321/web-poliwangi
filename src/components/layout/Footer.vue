<template>
  <footer class="bg-[var(--blue-dark)] text-white font-[var(--font-albert)]">
    <div
      class="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-6 gap-6 text-sm"
    >
      <div class="col-span-2 flex">
        <div class="flex items-start space-x-4">
          <img
            src="/src/assets/icon/logo.png"
            alt="Logo Poliwangi"
            class="h-20 w-auto"
          />

          <div>
            <h1 class="text-lg" style="font-family: var(--font-playfair)">
              POLITEKNIK NEGERI
            </h1>
            <h2
              class="text-2xl -mt-1"
              style="font-family: var(--font-playfair)"
            >
              BANYUWANGI
            </h2>

            <p class="text-sm mt-2 leading-snug font-[var(--font-albert)]">
              Jalan Raya Jember KM 13 Banyuwangi 68461, <br />
              Jawa Timur – Indonesia
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 uppercase">PROFIL</h3>
        <ul class="space-y-1 leading-6">
          <li>
            <router-link
              to="/sejarah-singkat-poliwangi"
              class="hover:text-[var(--accent-yellow)]"
              >Sejarah Poliwangi</router-link
            >
          </li>
          <li>
            <router-link
              to="/visi-misi"
              class="hover:text-[var(--accent-yellow)]"
              >Visi & Misi</router-link
            >
          </li>
          <li>
            <router-link to="/senat" class="hover:text-[var(--accent-yellow)]"
              >Senat</router-link
            >
          </li>
          <li>
            <router-link
              to="/sistem-pendidikan"
              class="hover:text-[var(--accent-yellow)]"
              >Sistem Pendidikan</router-link
            >
          </li>
          <li>
            <router-link
              to="/kehidupan-kampus"
              class="hover:text-[var(--accent-yellow)]"
              >Kehidupan Kampus</router-link
            >
          </li>
          <li>
            <router-link
              to="/kerjasama-poliwangi"
              class="hover:text-[var(--accent-yellow)]"
              >Kerjasama Poliwangi</router-link
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3 uppercase">LAYANAN PUBLIK</h3>
        <ul class="space-y-1 leading-6">
          <li>
            <router-link
              to="/peraturan-akademik"
              class="hover:text-[var(--accent-yellow)]"
              >Peraturan Akademik</router-link
            >
          </li>
          <li>
            <router-link to="/ppid" class="hover:text-[var(--accent-yellow)]"
              >PPID Poliwangi</router-link
            >
          </li>
          <li>
            <router-link to="/snbp" class="hover:text-[var(--accent-yellow)]"
              >Jalur Masuk</router-link
            >
          </li>
          <li>
            <router-link
              to="/pengaduan"
              class="hover:text-[var(--accent-yellow)]"
              >Pengaduan Poliwangi</router-link
            >
          </li>
          <li>
            <router-link
              to="/survey-kepuasan"
              class="hover:text-[var(--accent-yellow)]"
            >
              Survey Kepuasan <br />
              Masyarakat
            </router-link>
          </li>
        </ul>
      </div>

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

      <div>
        <h3 class="font-semibold mb-3 uppercase">MEDIA SOSIAL</h3>
        <div class="flex items-center space-x-4 text-xl mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=100064255200160"
            target="_blank"
          >
            <i class="fab fa-facebook hover:text-[var(--accent-yellow)]"></i>
          </a>
          <a href="https://www.instagram.com/poliwangi_jinggo/" target="_blank">
            <i class="fab fa-instagram hover:text-[var(--accent-yellow)]"></i>
          </a>
          <a href="https://www.youtube.com/@POLIWANGITV" target="_blank">
            <i class="fab fa-youtube hover:text-[var(--accent-yellow)]"></i>
          </a>
          <a href="https://www.tiktok.com/@poliwangi" target="_blank">
            <i class="fab fa-tiktok hover:text-[var(--accent-yellow)]"></i>
          </a>
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

    <div
      class="text-left text-[var(--text-black)] text-sm py-3 px-6"
      style="
        background-color: var(--accent-yellow);
        font-family: var(--font-albert);
      "
    >
      Copyright © 2024 POLITEKNIK NEGERI BANYUWANGI
    </div>
  </footer>
</template>
