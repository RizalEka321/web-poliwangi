<template>
  <div class="flex space-x-4 pt-6 pb-10 px-5 md:px-20" style="font-family: var(--font-albert)">
    <router-link to="/" class="text-[#626262] hover:text-yellow-300 font-normal">Home</router-link>
    <a class="text-black hover:text-yellow-300 font-medium">Profil</a>
  </div>

  <section class="sejarah pb-10 px-5 md:px-20">
    <div class="relative mb-8">
      <img src="/src/assets/img/banner_home.jpg" alt="Foto Poliwangi" class="w-full h-45 object-cover shadow-lg" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">Pengaduan POLIWANGI</h1>
      </div>
    </div>
    <div class="text-justify text-gray-800 leading-relaxed space-y-6 px-4" style="font-family: var(--font-albert)">
      <div>
        <p>
          Segala bentuk penyalahgunaan wewenang, hambatan dalam pelayanan kepada civitas akademika, dan/atau dugaan tindak pidana korupsi, kolusi dan nepotisme di lingkungan civitas akademika Politeknik Negeri Banyuwangi silahkan dilaporkan
          melalui email <span class="underline text-[var(--blue-dark)] font-bold">pengaduan@poliwangi.ac.id</span> atau melalui aplikasi <span class="underline text-[var(--blue-dark)] font-bold">lapor.poliwangi.ac.id</span>
        </p>
      </div>
    </div>
  </section>
</template>
