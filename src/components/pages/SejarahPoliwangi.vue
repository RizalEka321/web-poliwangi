<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Profil</span>
    </div>
    <div class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden">
      <img :src="banner" alt="Banner Profil" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora)">Sejarah Poliwangi</h1>
      </div>
    </div>
    <section class="sejarah">
      <div class="text-justify text-gray-800 leading-relaxed" style="font-family: var(--font-albert)">
        <div class="timeline space-y-4">
          <div class="item bg-white">
            <h2 class="text-xl font-semibold">2003 - 2004</h2>
            <ul class="list-disc list-outside mt-2 ms-4 text-gray-700">
              <li>Pemerintah Kabupaten Banyuwangi mulai merencanakan pendirian Perguruan Tinggi Negeri.</li>
              <li>Kepala Dinas Pendidikan Banyuwangi membentuk tim kajian melalui surat tugas No. 800/392/429.102/2003.</li>
            </ul>
          </div>
          <div class="item bg-white">
            <h2 class="text-xl font-semibold">2006</h2>
            <ul class="list-disc list-outside mt-2 ms-4 text-gray-700">
              <li>Bupati Banyuwangi membentuk Tim Perintis dan Tim Teknis Pendirian Politeknik melalui SK No. 188/223/Kep/429.012/2006 dan SK No. 188/224/Kep/429.012/2006.</li>
              <li>Rencana pendirian politeknik terhenti karena adanya larangan dari Ditjen Dikti terkait pendirian Perguruan Tinggi baru.</li>
            </ul>
          </div>
        </div>
        <div class="relative w-full max-w-[1359px] h-[474px] mx-auto overflow-hidden mt-5">
          <img :src="sejarahpoliwangi" alt="Foto" class="object-cover w-full h-full shadow-lg" />
        </div>
        <div class="timeline space-y-8 mt-6">
          <div class="item bg-white">
            <h2 class="text-xl font-semibold">2007</h2>
            <ul class="list-disc list-outside mt-2 ms-4 text-gray-700">
              <li>8 Mei: BAPPEDA Banyuwangi mengumpulkan Tim Perintis untuk mengevaluasi pendirian politeknik dan menyusun rencana studi banding ke Politeknik Kediri.</li>
              <li>27 Juni: Tim Pemkab Banyuwangi melakukan konsultasi ke Ditjen Dikti, mendapatkan arahan untuk mengusulkan alih status dari Akademi ke Politeknik.</li>
              <li>Reformasi Yayasan: Yayasan Pendidikan Rempeg Jagapati diubah menjadi Yayasan Pendidikan Pemkab Banyuwangi untuk mempercepat pendirian politeknik.</li>
              <li>12 September: Ditjen Dikti memberikan kesempatan bagi Pemda Banyuwangi untuk menyelenggarakan Politeknik baru pada tahun 2008 melalui surat No. 2303/D2.2/2007.</li>
              <li>24-25 September: Pemda Banyuwangi mengirimkan tim ke Workshop Penyusunan Proposal Pendirian Politeknik Baru Batch II di Bandung.</li>
            </ul>
          </div>
          <div class="item bg-white">
            <h2 class="text-xl font-semibold">2008</h2>
            <ul class="list-disc list-outside mt-2 ms-4 text-gray-700">
              <li>Tim Task Force dibentuk untuk menyusun proposal pendirian Politeknik Daerah Banyuwangi.</li>
              <li>Awalnya diusulkan tiga jurusan: Teknik Mesin, Teknik Informatika, dan Analis Kesehatan.</li>
              <li>Setelah diskusi dengan Bupati, jurusan Analis Kesehatan diganti dengan Teknik Sipil, sehingga ditetapkan tiga jurusan awal:</li>
              <ul class="list-alpha list-outside ml-5">
                <li>Teknik Mesin</li>
                <li>Teknik Informatika</li>
                <li>Teknik Sipil</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import sejarahpoliwangi from "@/assets/img/sejarahpoliwangi.png";
import banner from "@/assets/img/bannerprofil.png";
</script>
