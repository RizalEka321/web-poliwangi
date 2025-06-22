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
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center">Sistem Pendidikan</h1>
      </div>
    </div>
    <div class="text-justify text-gray-800 leading-relaxed space-y-6 px-4" style="font-family: var(--font-albert)">
      <div>
        <p>
          Politeknik Negeri Banyuwangi merupakan salah satu perguruan tinggi yang menyelenggarakan pendidikan dengan berbasis vokasi atau keahlian. Menurut UU No 12 Tahun 2012 tentang Pendidikan Tinggi bahwa Pendidikan vokasi merupakan
          Pendidikan Tinggi program diploma yang menyiapkan mahasiswa untuk pekerjaan dengan keahlian terapan tertentu sampai program sarjana terapan bahkan dapat dikembangkan sampai program magister terapan atau pun program doktor terapan.
          Ciri khas sistem pendidikan politeknik adalah perkuliahan yang menggunakan sistem paket dengan porsi praktikum atau praktek yang lebih besar dibandingkan teori agar lulusannya siap kerja. Selain itu sistem pendidikan ini juga
          didukung oleh oleh metoda dan materi pembelajaran yang sesuai, meliputi bidang hard skill dan soft skill.
        </p>
      </div>
      <div class="flex justify-center">
        <img src="/src/assets/img/banner_home.jpg" alt="Foto Poliwangi" class="w-150 h-60 object-cover" />
      </div>
      <div>
        <p>
          Dan Politeknik Negeri Banyuwang menerapkan sistem pendidikan dengan proporsi praktek 60% dan teori 40% mulai dari jenjang Diploma III dan Sarjana Terapan. Disamping itu guna menjamin tercapainya tujuan pembelajaran maka diterapkan
          ukuran kelas kecil dengan jumlah maksimal 30 mahasiswa perkelas.itu serta sarana Laboraturium penunjang yang memadahi bagi peningkatan skill atau keterampilan mahasiswa. Penekanan di bidang soft skill diarahkan untuk mencapai
          karakter kejujuran, innovasi, job maker dan networking. Karakter tersebut selalu dikembangkan, karena telah terbukti dapat menunjang keberhasilan mahasiswa dalam menghadapi tantangan zaman.
        </p>
        <p>
          Politeknik Negeri Banyuwangi juga menjalin kerjasama dengan perusahaan-perusahaan swasta, pemerintah ataupun BUMN untuk menempa mahasiswa dalam program praktik kerja dan magang industri. Sehingga lulusan Politeknik Negeri
          Banyuwangi diharapkan dapat belajar secara langsung dari praktisi atau dunia industri. Dan mahasiswa yang telah menyelesaikan pendidikannya akan mendapatkan gelar Ahli Madya yang disingkat A.Md. untuk program Diploma III,
          sedangkan untuk lulusan program Diploma Empat adalah Sarjana Sains Terapan yang disingkat S.ST.
        </p>
      </div>
    </div>
  </section>
</template>
