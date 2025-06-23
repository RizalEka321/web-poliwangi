<template>
  <div class="flex space-x-4 pt-6 pb-10 px-5 md:px-20" style="font-family: var(--font-albert)">
    <router-link to="/" class="text-[#626262] hover:text-yellow-300 font-normal">Home</router-link>
    <a class="text-black hover:text-yellow-300 font-medium">Profil</a>
  </div>

  <section class="survey pb-10 px-5 md:px-20">
    <div class="relative mb-8">
      <img src="/src/assets/img/banner_home.jpg" alt="Foto Poliwangi" class="w-full h-45 object-cover shadow-lg" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">Survey Kepuasan Masyarakat</h1>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-5 text-justify" style="font-family: var(--font-albert)">
      <div class="flex-1 text-left" style="font-family: var(--font-albert)">
        <p class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify">
          Dalam rangka perbaikan pelayanan Politeknik Negeri Banyuwangi khususnya kepada mahasiswa, diharapkan kepada Mahasiswa Politeknik Negeri Banyuwangi untuk dapat meluangkan waktu mengisi kuisioner berikut, (Mohon isi dengan jujur,
          identitas anda akan dirahasiakan). Terima kasih.
        </p>
      </div>
      <div class="flex-1 relative">
        <img src="/src/assets/img/survey.png" alt="Foto Poliwangi" class="w-full h-70 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-600/30 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-end ps-5 pb-5" style="font-family: var(--font-albert)">
          <h1 class="text-lg md:text-xl font-bold text-white">Form Kuisioner.</h1>
          <h2 class="text-lg md:text-xl font-bold text-white underline">SURVEY KEPUASAN MASYARAKAT</h2>
        </div>
      </div>
    </div>
  </section>
</template>
