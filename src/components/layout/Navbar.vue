<template>
  <nav
    class="navbar bg-[var(--blue-dark)] text-white px-10 py-3 flex justify-between items-center shadow-lg sticky top-0 z-50"
  >
    <div class="flex items-center space-x-2 cursor-pointer">
      <router-link to="/" class="flex items-center space-x-2">
        <img
          src="/src/assets/icon/logo.png"
          alt="Logo"
          class="w-12 h-12 object-contain"
        />
        <div class="leading-none">
          <h1 class="text-xs" style="font-family: var(--font-playfair)">
            POLITEKNIK NEGERI
          </h1>
          <h2 class="text-lg -mt-1" style="font-family: var(--font-playfair)">
            BANYUWANGI
          </h2>
        </div>
      </router-link>
    </div>

    <!-- Menu -->
    <div
      ref="dropdownContainer"
      class="space-x-5 text-xs flex items-center relative"
    >
      <!-- DROPDOWN PROFIL -->
      <div class="relative" @click="toggleDropdown('profil')">
        <button
          class="hover:text-gray-300 flex items-center cursor-pointer cursor-pointer"
        >
          PROFIL
          <svg
            class="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-if="openDropdown === 'profil'"
          class="absolute bg-white text-black mt-2 py-2 w-50 rounded shadow-lg z-50"
        >
          <router-link
            to="/sambutan-direktur"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Sambutan Direktur</router-link
          >
          <router-link
            to="/sejarah-singkat-poliwangi"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Sejarah Singkat Poliwangi</router-link
          >
          <router-link
            to="/visi-misi"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Visi & Misi</router-link
          >
          <router-link
            to="/sakip"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >SAKIP</router-link
          >
          <router-link
            to="/laporan-keuangan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Laporan Keuangan</router-link
          >
          <router-link
            to="/senat"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Senat</router-link
          >
          <router-link
            to="/organisasi-poliwangi"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Organisasi</router-link
          >
          <router-link
            to="/sistem-pendidikan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Sistem Pendidikan</router-link
          >
          <router-link
            to="/kerjasama-poliwangi"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Kerjasama Poliwangi</router-link
          >
        </div>
      </div>

      <!-- DROPDOWN AKADEMIK -->
      <div class="relative" @click="toggleDropdown('akademik')">
        <button class="hover:text-gray-300 flex items-center cursor-pointer">
          AKADEMIK
          <svg
            class="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-if="openDropdown === 'akademik'"
          class="absolute bg-white text-black mt-2 py-2 w-54 rounded shadow-lg z-50"
        >
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('bisnis')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'bisnis'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Jurusan Bisnis & Informatika
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              v-if="openSubDropdown === 'bisnis'"
              class="absolute left-full top-0 mt-0 ml-1 bg-white text-black py-2 w-64 rounded shadow-lg z-50"
            >
              <a
                href="https://jbi.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Rekayasa Perangkat Lunak
              </a>
              <a
                href="https://trk.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Rekayasa Komputer
              </a>
              <a
                href="https://bisnisdigital.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Bisnis Digital
              </a>
            </div>
          </div>
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('sipil')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'sipil'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Jurusan Teknik Sipil
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="openSubDropdown === 'sipil'"
              class="absolute left-full top-0 mt-0 ml-1 bg-white text-black py-2 w-64 rounded shadow-lg z-50"
            >
              <a
                href="http://sipil.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                D-III Teknik Sipil
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Rekayasa Konstruksi Jalan dan Jembatan
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Rekayasa Konstruksi Bangunan Gedung
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Manajemen Konstruksi
              </a>
            </div>
          </div>
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('mesin')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'mesin'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Jurusan Teknik Mesin
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="openSubDropdown === 'mesin'"
              class="absolute left-full top-0 mt-0 ml-1 bg-white text-black py-2 w-64 rounded shadow-lg z-50"
            >
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Rekayasa Manufaktur
              </a>
              <a
                href="http://tmk.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknik Manufaktur Kapal
              </a>
            </div>
          </div>
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('pertanian')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'pertanian'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Jurusan Pertanian
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="openSubDropdown === 'pertanian'"
              class="absolute left-full top-0 mt-0 ml-1 bg-white text-black py-2 w-64 rounded shadow-lg z-50"
            >
              <a
                href="https://agb.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Agribisnis
              </a>
              <a
                href="http://tpht.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Pengolahan Hasil Ternak
              </a>
              <a
                href="https://ppa.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Pengembangan Produk Agroindustri
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Akuakultur
              </a>
              <a
                href="https://tptp.poliwangi.ac.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Teknologi Produksi Tanaman Pangan
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Terapan Teknologi Produksi Ternak
              </a>
            </div>
          </div>
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('pariwisata')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'pariwisata'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Jurusan Pariwisata
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="openSubDropdown === 'pariwisata'"
              class="absolute left-full top-0 mt-0 ml-1 bg-white text-black py-2 w-64 rounded shadow-lg z-50"
            >
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Manajemen Bisnis Pariwisata
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Destinasi Pariwisata
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Pengelolaan Perhotelan
              </a>
            </div>
          </div>
          <router-link
            to="/kalender-akademik"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Kalender Akademik</router-link
          >
          <router-link
            to="/peraturan-akademik"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Peraturan Akademik</router-link
          >
          <router-link
            to="/beasiswa"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Beasiswa</router-link
          >
          <router-link
            to="/biaya-pendidikan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Biaya Pendidikan</router-link
          >
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('mahasiswa')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'mahasiswa'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Mahasiswa
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="openSubDropdown === 'mahasiswa'"
              class="absolute left-full top-0 mt-0 ml-1 bg-white text-black py-2 w-64 rounded shadow-lg z-50"
            >
              <router-link
                to="/organisasi-kemahasiswaan"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
                >Organisasi Kemahasiswaan</router-link
              >
              <router-link
                to="/kehidupan-kampus"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
                >Kehidupan Kampus</router-link
              >
              <router-link
                to="/alumni"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
                >Alumni</router-link
              >
              <router-link
                to="/publikasi"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
                >Publikasi</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- DROPDOWN PENDAFTARAN -->
      <div class="relative" @click="toggleDropdown('pendaftaran')">
        <button class="hover:text-gray-300 flex items-center cursor-pointer">
          PENDAFTARAN
          <svg
            class="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-if="openDropdown === 'pendaftaran'"
          class="absolute bg-white text-black mt-2 py-2 w-35 rounded shadow-lg z-50"
        >
          <router-link
            to="/snbp"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >SNBP</router-link
          >
          <router-link
            to="/utbk-snbt"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >UTBK - SNBT</router-link
          >
          <router-link
            to="/mandiri"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >MANDIRI</router-link
          >
        </div>
      </div>

      <!-- DROPDOWN RISET -->
      <div class="relative" @click="toggleDropdown('riset')">
        <button class="hover:text-gray-300 flex items-center cursor-pointer">
          RISET & PENGABDIAN
          <svg
            class="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-if="openDropdown === 'riset'"
          class="absolute bg-white text-black mt-2 py-2 w-45 rounded shadow-lg z-50"
        >
          <router-link
            to="/riset-terkini"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Riset Terkini</router-link
          >
          <router-link
            to="/sumber-pendanaan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Sumber Pendanaan</router-link
          >
          <router-link
            to="/kerjasama-penelitian"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Kerjasama Penelitian</router-link
          >
        </div>
      </div>

      <!-- DROPDOWN LAYANAN PUBLIK -->
      <div class="relative" @click="toggleDropdown('layanan')">
        <button class="hover:text-gray-300 flex items-center cursor-pointer">
          LAYANAN PUBLIK
          <svg
            class="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-if="openDropdown === 'layanan'"
          class="absolute bg-white text-black mt-2 py-2 w-53 rounded shadow-lg z-50 right-0 left-auto origin-top-right"
        >
          <router-link
            to="/maklumat-pelayanan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Maklumat Pelayanan</router-link
          >
          <a
            href="https://wbk.poliwangi.ac.id/"
            rel="noopener noreferrer"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
          >
            Zona Integritas
          </a>
          <router-link
            to="/ppid"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >PPID POLIWANGI</router-link
          >
          <router-link
            to="/standar-pelayanan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Standar Pelayanan Publik</router-link
          >
          <router-link
            to="/survey-kepuasan"
            class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
            >Survey Kepuasan Masyarakat</router-link
          >
          <div class="relative">
            <button
              @click.stop="toggleSubDropdown('pengaduan')"
              class="w-full text-left px-4 py-2 flex justify-between items-center cursor-pointer"
              :class="
                openSubDropdown === 'pengaduan'
                  ? 'bg-[#004878] text-white'
                  : 'text-[#004878] hover:bg-[#004878] hover:text-white'
              "
            >
              Pengaduan
              <svg
                class="w-3 h-3 ml-2 transform rotate-270"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="openSubDropdown === 'pengaduan'"
              class="absolute right-full top-0 mt-0 mr-1 bg-white text-black py-2 w-45 rounded shadow-lg z-50"
            >
              <a
                href="https://kws.kpk.go.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                Whisleblowing
              </a>
              <router-link
                to="/pengaduan"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
                >Pengaduan Poliwangi</router-link
              >
              <a
                href="https://www.lapor.go.id/"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-[#004878] hover:bg-[#004878] hover:text-white"
              >
                SPAN Lapor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const openDropdown = ref(null);
const openSubDropdown = ref(null);
const dropdownContainer = ref(null);

function toggleDropdown(menu) {
  if (openDropdown.value === menu) {
    openDropdown.value = null;
    openSubDropdown.value = null;
  } else {
    openDropdown.value = menu;
    openSubDropdown.value = null;
  }
}

function toggleSubDropdown(subMenu) {
  if (openSubDropdown.value === subMenu) {
    openSubDropdown.value = null;
  } else {
    openSubDropdown.value = subMenu;
  }
}

function handleClickOutside(event) {
  if (
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target)
  ) {
    openDropdown.value = null;
    openSubDropdown.value = null;
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>
