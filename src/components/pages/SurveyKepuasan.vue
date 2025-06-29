<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Layanan Publik</span>
    </div>
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="banner"
        alt="Banner Riset & Pendanaan"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Survey Kepuasan Masyarakat
        </h1>
      </div>
    </div>
    <section class="survey">
      <div
        class="flex flex-col md:flex-row gap-5 text-justify"
        style="font-family: var(--font-albert)"
      >
        <div class="flex-1 text-left" style="font-family: var(--font-albert)">
          <p
            class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify"
          >
            Dalam rangka perbaikan pelayanan Politeknik Negeri Banyuwangi
            khususnya kepada mahasiswa, diharapkan kepada Mahasiswa Politeknik
            Negeri Banyuwangi untuk dapat meluangkan waktu mengisi kuisioner
            berikut, (Mohon isi dengan jujur, identitas anda akan dirahasiakan).
            Terima kasih.
          </p>
        </div>
        <div class="flex-1 relative">
          <img
            :src="survey"
            alt="Foto Poliwangi"
            class="w-full h-70 object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-600/30 to-transparent"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-end ps-5 pb-5"
            style="font-family: var(--font-albert)"
          >
            <h1 class="text-lg md:text-xl font-bold text-white">
              Form Kuisioner.
            </h1>
            <h2 class="text-lg md:text-xl font-bold text-white underline">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0QBjAh2AnRtf9NMHqorqPT8YHGG2C-g_VBAlApR3rt2FZ0A/viewform"
                >SURVEY KEPUASAN MASYARAKAT</a
              >
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import banner from "@/assets/img/bannerlayanan.png";
import survey from "@/assets/img/survey.png";
</script>
