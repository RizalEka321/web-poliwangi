<template>
  <nav class="navbar bg-blue-700 text-white px-10 py-2 flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <router-link to="/" class="flex items-center space-x-3">
        <img src="/src/assets/icon/logo.png" alt="Logo" class="w-10 h-10 object-contain" />
        <div class="leading-none">
          <h1 class="text-sm">POLITEKNIK NEGERI</h1>
          <h2 class="text-lg -mt-1">BANYUWANGI</h2>
        </div>
      </router-link>
    </div>

    <div class="space-x-5 text-xs">
      <router-link to="/" class="hover:text-gray-300">PROFIL</router-link>
      <router-link to="/" class="hover:text-gray-300">AKADEMIK</router-link>
      <router-link to="/about" class="hover:text-gray-300">PENDAFTARAN</router-link>
      <router-link to="/about" class="hover:text-gray-300">RISET & PENGABDIAN</router-link>
      <router-link to="/about" class="hover:text-gray-300">LAYANAN PUBLIK</router-link>
    </div>
  </nav>
</template>
