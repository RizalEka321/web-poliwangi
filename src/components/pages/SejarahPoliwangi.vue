<template>
  <div class="flex space-x-4 pt-6 pb-10 px-5 md:px-20" style="font-family: var(--font-albert)">
    <router-link to="/" class="text-[#626262] hover:text-yellow-300 font-normal">Home</router-link>
    <router-link class="text-black hover:text-yellow-300 font-medium">Profil</router-link>
  </div>

  <section class="sejarah pb-10 px-5 md:px-20">
    <div class="relative mb-8">
      <img src="/src/assets/img/banner_home.jpg" alt="Foto Direktur Poliwangi" class="w-full h-45 object-cover shadow-lg" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">Sejarah Poliwangi</h1>
      </div>
    </div>
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
      <div class="my-5">
        <img src="/src/assets/img/banner_home.jpg" alt="Foto Direktur Poliwangi" class="w-full h-70 object-cover shadow-lg" />
      </div>
      <div class="timeline space-y-8">
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
</template>
