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
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">Visi Dan Misi</h1>
      </div>
    </div>
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
</template>
