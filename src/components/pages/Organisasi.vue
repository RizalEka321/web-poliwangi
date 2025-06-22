<template>
  <div class="flex space-x-4 pt-6 pb-10 px-5 md:px-20" style="font-family: var(--font-albert)">
    <router-link to="/" class="text-[#626262] hover:text-yellow-300 font-normal">Home</router-link>
    <a class="text-black hover:text-yellow-300 font-medium">Profil</a>
  </div>

  <section class="organisasi pb-10 px-5 md:px-20">
    <div class="relative mb-8">
      <img src="/src/assets/img/banner_home.jpg" alt="Foto Poliwangi" class="w-full h-45 object-cover shadow-lg" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">Bagan Struktur Organisasi Poliwangi</h1>
      </div>
    </div>
    <div class="text-justify text-gray-800 leading-relaxed space-y-6" style="font-family: var(--font-albert)">
      <img src="/src/assets/img/struktur_poliwangi.png" alt="Foto Struktur" class="w-full object-cover border-3 border-[var(--blue-dark)] rounded-xl" />
    </div>
  </section>
</template>
