<template>
    <div class="px-6 md:px-20 py-10 space-y-10">
      <!-- Breadcrumb -->
      <div class="text-sm text-[var(--text-gray)]" style="font-family: var(--font-albert);">
        <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
        <span class="mx-1 text-[var(--accent-yellow)]">›</span>
        <span class="text-[var(--text-black)] font-medium">Kehidupan Kampus</span>
      </div>
  
      <div class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden">
            <img
                :src="bannerAkademik"
                alt="Banner Akademik"
                class="object-cover w-full h-full"
            />
            <div class="absolute inset-0 flex items-center pl-10">
                <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora);">
                Kehidupan Kampus
                </h1>
            </div>
      </div>

      <!-- Judul -->
      <p class="text-[var(--text-gray)] text-justify" style="font-family: var(--font-albert);">
        Intip kegiatan dan suasana seru di lingkungan kampus Politeknik Negeri Banyuwangi melalui unggahan Instagram kami. 
        Berikut adalah cuplikan aktivitas yang memperlihatkan semangat, prestasi, dan kreativitas mahasiswa.
      </p>
  
      <!-- Instagram Feed (Elfsight) -->
      <div class="w-full mt-8">
        <div class="elfsight-app-1fcf953f-045f-4b3d-9558-96430cab7f53" data-elfsight-app-lazy></div>
      </div>
    </div>
  </template>
  
  <script setup>
  // tidak ada script tambahan yang diperlukan
  </script>
  
  <!-- Tambahkan script Elfsight secara global di file HTML utama -->
  <!-- atau bisa gunakan ini jika tidak mau mengubah index.html -->
  <!-- Tapi ini akan dipanggil hanya jika halaman ini dibuka -->
  <script>
    if (typeof window !== 'undefined') {
      const elfsightScript = document.createElement('script')
      elfsightScript.src = 'https://static.elfsight.com/platform/platform.js'
      elfsightScript.async = true
      document.head.appendChild(elfsightScript)
    }

    import bannerAkademik from '@/assets/img/bannerakademik.png'
  </script>
  