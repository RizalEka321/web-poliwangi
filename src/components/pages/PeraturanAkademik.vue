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
            Peraturan Akademik
          </h1>
        </div>
      </div>
  
      <!-- GAMBARAN UMUM -->
      <section>
        <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
          Gambaran Umum
        </h2>
        <p class="text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
            Peraturan akademik dan kemahasiswaan adalah seperangkat aturan yang 
            harus dipatuhi dan dilaksanakan oleh seluruh sivitas akademik di perguruan tinggi yang terkait dalam pelaksanaan rencana kerja bidang kurikulum dan kegiatan pembelajaran dan kemahasiswaan  
            yang disusun untuk satu tahun akademik. Peraturan akademik dan kemahasiswaan Poliwangi ditetapkan berdasarkan Keputusan Direktur Politeknik Negeri Banyuwangi setelah memperoleh pertimbangan dan Senat Politeknik Negeri Banyuwangi. 
            Peraturan Akademik dan Kemahasiswaan Poliwangi memuat ketentuan umum, visi dan misi organisasi, tata tertib, administrasi dan keuangan, ketentuan akademik, dan ketentuan bidang kemahasiswaan.
        </p>
      </section>
  
      <section>
        <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
          Dasar Hukum
        </h2>
        <p class="text-justify text-[var(--text-gray)] mb-2" style="font-family: var(--font-albert);">
            Penyusunan peraturan akademik dan kemahasiswaan didasarkan pada beberapa peraturan pokok antara lain :
            <br>
            Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi (Lembaran Negara Republik Indonesia Tahun 2012 Nomor 158 dan Tambahan Lembaran Negara Republik Indonesia Nomor 5336);
        </p>
        <ul class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
          <li>
            Peraturan Pemerintah Nomor 32 Tahun 2013 Tentang Standar Nasional Pendidikan (Lembaran Negara Republik Indonesia  Tahun 2013 Nomor 71dan Tambahan Lembaran Negara Republik Indonesia Nomor 5410);
          </li>
          <li>
            Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi (Lembaran Negara Republik Indonesia Tahun 2014 Nomor 16, Tambahan Lembaran Negara Republik Indonesia Nomor 5500);
          </li>
          <li>
            Peratuaran Menteri Riset Teknologi dan Pendidikan Tinggi No. 44 Tahun 2015 tentang Standar Nasional Pendidikan Tinggi (Berita Negara Republik Indonesia Tahun 2015 Nomor 1952).
          </li>
        </ul>
  </section>
  
  
      <!-- TUJUAN DAN MANFAAT -->
      <section>
        <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
          Tujuan dan Manfaat
        </h2>
        <p class="mb-2 text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
            Dengan ditetapkannya peraturan akademik dan kemahasiswaan diharapkan dapat dijadikan pedoman dasar seluruh civitas akademika Politeknik Negeri Banyuwangi.Oleh karena itu penyusunan peraturan akademik dan kemahasiswaan memiliki maksud dan tujuan :
        </p>
        <ol class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
          <li>Mengatur penyelenggaraan pendidikan dan pembelajaran,</li>
          <li>Mengatur kegiatan intra dan ekstra kurikuler mahhasiswa.</li>
          <li>Memberikan arah yang jelas terhadap seluruh kegiatan yang dilaksanakan didalam kampus dan kegiatan yang berhubungan dengan penyelenggaraan pendidikan di Poliwangi.</li>
        </ol>
        <br>
        <p class="text-justify text-[var(--text-gray)]" style="font-family: var(--font-albert);">
          Sedangkan manfaat yang diperoleh dari penyusunan peraturan akademik dan kemahasiswaan dapat dijadikan dasar bagi seluruh sivitas kademika untuk melaksanakan kegiatan pendidikan, pembelajaran dan kemahasiswaan.
        </p>
      </section>
    </div>
  </template>
  
  <script setup>
 import bannerAkademik from '@/assets/img/bannerakademik.png'
  </script>
  