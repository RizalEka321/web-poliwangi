<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Profil</span>
    </div>
    <div class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden">
      <img :src="banner" alt="Banner" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-[var(--blue-dark)]/50"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center ps-10" style="font-family: var(--font-lora)">
        <h1 class="text-3xl md:text-5xl font-bold text-white text-center">Visi Dan Misi</h1>
      </div>
    </div>
    <section class="visi">
      <div class="text-justify text-gray-800 leading-relaxed space-y-6" style="font-family: var(--font-albert)">
        <h1 class="text-2xl font-bold mb-2" style="font-family: var(--font-lora)">Visi</h1>
        <div class="pl-4 border-l-4 border-[var(--blue-dark)] italic text-[#939292] font-medium">
          <p>Menjadi Institusi Pendidikan Vokasi Technopreneur Unggul dan Berdaya Saing Global dengan Mengangkat Potensi dan Kearifan Lokal.</p>
        </div>
        <h1 class="text-2xl font-bold mb-2" style="font-family: var(--font-lora)">Misi</h1>
        <div class="pl-4 border-l-4 border-[var(--blue-dark)]">
          <ul class="list-decimal ms-3 space-y-2 italic text-[#939292] font-medium">
            <li>Menyiapkan SDM Lulusan berjiwa Technopreneur yang berkeahlian vocational skills, berdaya saing global, dan mampu menghadapi disrupsi kebutuhan Dunia Usaha dan Industri.</li>
            <li>Melaksanakan penelitian dan Pengabdian Terapan kepada Masyarakat yang Inovatif, Unggul, dan bermanfaat bagi perkembangan Ipteks berbasis kearifan dan potensi lokal.</li>
            <li>Menyelenggarakan Pendidikan vokasi yang bermutu, terjangkau, relevan berbasis merdeka belajar kampus merdeka yang <i>link and match</i> industry.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/banner_home.jpg";
</script>
