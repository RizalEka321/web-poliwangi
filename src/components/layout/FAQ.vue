<template>
    <section class="max-w-4xl mx-auto py-20 px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 font-[var(--font-playfair)]">
        Frequently Asked Question
      </h2>
      <div class="w-16 h-1 bg-[var(--button-yellow)] mx-auto mb-6 rounded-full"></div>
      <p class="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-[var(--font-albert)]">
        Temukan jawaban atas berbagai pertanyaan seputar program studi, proses pendaftaran, biaya kuliah, fasilitas kampus, dan informasi penting lainnya. Kami telah merangkum jawaban secara ringkas dan jelas untuk membantu Anda mendapatkan informasi dengan mudah. Jika masih ada pertanyaan, jangan ragu untuk menghubungi kami!
      </p>
  
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-lg overflow-hidden shadow"
        >
          <button
            @click="toggle(index)"
            class="w-full text-left px-6 py-4 text-white font-medium flex justify-between items-center focus:outline-none transition-all duration-300"
            :style="{
              background: 'linear-gradient(90deg, #0085DE 0%, #005E9D 43%, #004878 85%)'
            }"
          >
            {{ faq.question }}
            <span class="text-xl">
              {{ activeIndex === index ? '−' : '+' }}
            </span>
          </button>
          <div
            v-if="activeIndex === index"
            class="bg-gray-100 px-6 py-4 text-sm text-black leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    import { ref } from 'vue'

    const activeIndex = ref(null)

    function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
    }

    const faqs = [
    {
        question: 'Apa saja program studi yang tersedia di Poliwangi?',
        answer:
        'Poliwangi menawarkan berbagai program studi, termasuk Teknologi Informasi, Teknik Mesin, Teknik Sipil, Teknologi Pengolahan Hasil Laut, Manajemen Bisnis, dan lainnya. Setiap program dirancang untuk memenuhi kebutuhan dunia kerja dan memberikan keterampilan praktis kepada mahasiswa.',
    },
    {
        question: 'Bagaimana cara mendaftar di Poliwangi?',
        answer:
        'Pendaftaran dapat dilakukan secara online melalui situs resmi Poliwangi dengan mengikuti tahapan dan persyaratan yang ditentukan.',
    },
    {
        question: 'Apakah Poliwangi menerima jalur prestasi?',
        answer:
        'Ya, Poliwangi menerima calon mahasiswa melalui jalur prestasi akademik dan non-akademik sesuai ketentuan yang berlaku.',
    },
    {
        question: 'Bagaimana sistem perkuliahan di Poliwangi?',
        answer:
        'Perkuliahan di Poliwangi menggabungkan teori dan praktik, dengan dukungan fasilitas laboratorium dan dosen berpengalaman.',
    },
    {
        question: 'Apakah Poliwangi memiliki organisasi mahasiswa atau komunitas?',
        answer:
        'Poliwangi memiliki berbagai organisasi dan komunitas mahasiswa yang aktif dalam kegiatan akademik maupun non-akademik.',
    },
    ]
</script>

  
  <style scoped>
  /* Font Playfair dan Albert Sans harus sudah diatur di global CSS */
  </style>
  