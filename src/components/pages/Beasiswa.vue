<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Akademik</span>
    </div>
    <div
      class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden"
    >
      <img
        :src="bannerAkademik"
        alt="Banner Akademik"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-[#004878] opacity-70"></div>
      <div class="absolute inset-0 flex items-center pl-10">
        <h1
          class="text-3xl md:text-5xl font-bold text-white"
          style="font-family: var(--font-lora)"
        >
          Beasiswa
        </h1>
      </div>
    </div>

    <section>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]"
        style="font-family: var(--font-lora)"
      >
        Beasiswa BIDIKMISI
      </h2>
      <img
        :src="logobidikmisi"
        alt="logo bidikmisi"
        class="mx-auto w-[537px] h-[239px]"
      />
      <p
        class="text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        Bidikmisi adalah bantuan biaya pendidikan dari pemerintah bagi lulusan
        Sekolah Menengah Atas (SMA) atau sederajat yang memiliki potensi
        akademik baik tetapi memiliki keterbatasan ekonomi.  Bidikmisi bertujuan
        untuk meningkatkan akses dan kesempatan belajar di perguruan tinggi;
        meningkatkan prestasi mahasiswa; menjamin keberlangsungan studi
        mahasiswa dengan tepat waktu; dan melahirkan lulusan yang mandiri,
        produktif serta memiliki kepedulian sosial sehingga mampu berperan dalam
        upaya pemutusan mata rantai kemiskinan dan pemberdayaan masyarakat.
        Penerima Bidikmisi adalah siswa SMA atau sederajat yang akan lulus pada
        tahun berjalan atau lulus 1 (satu) tahun sebelumnya yang memiliki
        potensi akademik baik  tetapi memiliki keterbatasan ekonomi yang
        didukung bukti dokumen yang sah dan lulus seleksi penerimaan mahasiswa
        baru pada perguruan tinggi.   Keterbatasan ekonomi dibuktikan dengan
        kepemilikan Kartu Indonesia Pintar (KIP) atau pendapatan kotor gabungan
        orang tua/wali sebesar Rp4.000.000,00 (empat juta rupiah) atau
        pendapatan kotor gabungan orang tua/wali dibagi jumlah anggota keluarga
        maksimal Rp750.000,00 (tujuh ratus lima puluh ribu rupiah). Calon
        penerima bidikmisi wajib terdaftar pada sistem Bidikmisi dengan
        memasukkan NPSN dan NISN yang valid.
      </p>
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Dasar Hukum
      </h3>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          Undang – Undang Republik Indonesia Nomor 12 Tahun 2012 tentang
          Pendidikan Tinggi (Lembaran Negara Republik Indonesia Tahun 2012 Nomor
          158, tambahan Lembaran Negara Republik Indonesia Nomor 336);
        </li>
        <li>
          Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan
          Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi (Lembaran Negara
          Republik Indonesia Tahun 2014 Nomor 16, Tambahan Lembaran Negara
          Republik Indonesia Nomor 5500);
        </li>
        <li>
          Peraturan Menteri Riset, Teknologi dan Pendidikan Tinggi Nomor 6 Tahun
          2019 tentang Bantuan Biaya Pendidikan Bagi Mahasiswa Miskin
          Berprestasi (Berita Negara Republik Indonesia Tahun 2019 Nomor 78).
        </li>
      </ul>
      <img :src="alurbidikmisi" alt="alur bidikmisi" class="mx-auto mt-7" />
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Tahapan pendaftaran
      </h3>
      <div>
        <p
          class="font-semibold text-[var(--text-black)] mb-2"
          style="font-family: var(--font-albert)"
        >
          1. Bagi siswa :
        </p>
        <ul
          class="list-disc list-inside space-y-1 text-[var(--text-gray)]"
          style="font-family: var(--font-albert)"
        >
          <li>
            Penerima KIP dapat langsung melakukan pendaftaran secara mandiri
            pada laman Bidikmisi sampai mendapatkan KAP dan PIN (langsung ke
            poin 5).
          </li>
          <li>
            Bukan penerima KIP mendaftar ke sekolah untuk direkomendasikan.
          </li>
        </ul>
      </div>
      <div>
        <p
          class="font-semibold text-[var(--text-black)] mt-4 mb-2"
          style="font-family: var(--font-albert)"
        >
          2. Bagi sekolah :
        </p>
        <ul
          class="list-disc list-outside pl-5 space-y-1 text-justify text-[var(--text-gray)]"
          style="font-family: var(--font-albert)"
        >
          <li>
            Sudah memiliki Kode Akses Sekolah langsung merekomendasikan
            masing-masing siswa melalui laman Bidikmisi menggunakan kombinasi
            NPSN dan NISN.
          </li>
          <li>
            Belum memiliki Kode Akses Sekolah mendaftarkan diri sebagai
            institusi pemberi rekomendasi ke laman Bidikmisi dengan melampirkan
            hasil pindai (scan) (Lampiran 1 bagian persetujuan dan tanda
            tangan). Ditjen Belmawa Kemenristekdikti memverifikasi pendaftaran
            sekolah dan mengeluarkan Kode Akses Sekolah (1 x 24 jam pada hari
            dan jam kerja).
          </li>
          <li>
            Sekolah memberikan nomor pendaftaran dan kode akses kepada siswa
            yang sudah direkomendasikan.
          </li>
          <li>
            Siswa mendaftar melalui laman Bidikmisi dan menyelesaikan semua
            tahapan dalam sistem pendaftaran sampai mendapatkan KAP dan PIN.
          </li>
          <li>
            KAP dan PIN yang didapat dari sistem Bidikmisi digunakan dalam
            pendaftaran seleksi masuk perguruan tinggi.
          </li>
          <li>
            Bagi calon mahasiswa penerima Bidikmisi yang telah dinyatakan
            diterima di Perguruan Tinggi, akan dilakukan verifikasi lebih lanjut
            dan penetapan kelayakan mahasiswa penerima Bidikmisi oleh perguruan
            tinggi dengan mempertimbangkan dokumen pendukung.
          </li>
        </ul>
      </div>

      <div>
        <h3
          class="font-bold text-[var(--text-black)] mt-6"
          style="font-family: var(--font-albert)"
        >
          Tujuan dan Manfaat
        </h3>
        <ul
          class="list-[lower-alpha] list-outside pl-5 space-y-1 text-justify text-[var(--text-gray)]"
          style="font-family: var(--font-albert)"
        >
          <li>
            Meningkatkan akses dan kesempatan belajar di perguruan tinggi bagi
            mahasiswa yang tidak mampu secara ekonomi namun memiliki prestasi
            akademik yang baik.
          </li>
          <li>
            Meningkatkan prestasi mahasiswa, baik pada bidang kurikuler,
            kokurikuler, maupun ekstrakurikuler.
          </li>
          <li>Menjamin keberlangsungan studi mahasiswa dengan tepat waktu.</li>
          <li>
            Melahirkan lulusan yang mandiri, produktif, dan memiliki kepedulian
            sosial sehingga mampu berperan dalam upaya pemutusan mata rantai
            kemiskinan dan pemberdayaan masyarakat.
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h2
        class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]"
        style="font-family: var(--font-lora)"
      >
        Beasiswa PPA (Peningkatan Prestasi Akademik)
      </h2>
      <img :src="logoppa" alt="logo PPA" class="mx-auto w-[327px] h-[251px]" />
      <p
        class="text-justify text-[var(--text-black)] mt-5"
        style="font-family: var(--font-albert)"
      >
        Undang-undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional,
        Bab V pasal 12 (1.c), menyebutkan bahwa setiap peserta didik pada setiap
        satuan pendidikan berhak mendapatkan beasiswa bagi yang berprestasi yang
        orang tuanya tidak mampu membiayai pendidikannya. Pasal 12 (1.d),
        menyebutkan bahwa setiap peserta didik pada setiap satuan pendidikan
        berhak mendapatkan biaya pendidikan bagi mereka yang orang tuanya tidak
        mampu membiayai pendidikannya.Selain itu di dalamUndang-undang Nomor 12
        Tahun 2012 tentang Pendidikan Tinggidi dalam Pasal 76 Ayat (2) juga
        jelas mengamanahkan tentang pemenuhan hak mahasiswa yaitu pemerintah
        harus memberikan: (a) beasiswa kepada Mahasiswa berprestasi; (b) bantuan
        atau membebaskan biaya Pendidikan; dan/atau (c)pinjaman dana tanpa bunga
        yang wajib dilunasi setelah lulus dan/atau memperoleh pekerjaan.
        <br />
        Dijelaskan lebih lanjut di dalam penjelasan, yang dimaksud dengan
        “beasiswa” adalah dukungan biaya Pendidikanyang diberikan kepada
        Mahasiswa untuk mengikuti dan/atau menyelesaikan Pendidikan Tinggi
        berdasarkan pertimbangan utama prestasi dan/atau potensi akademik.
        Sedangkan “bantuan biaya pendidikan” adalah dukungan biaya Pendidikan
        yang diberikan kepada Mahasiswa untuk mengikuti dan/atau menyelesaikan
        Pendidikan Tinggi berdasarkan pertimbangan utama keterbatasan kemampuan
        ekonomi. <br />
        Peraturan Pemerintah Nomor 48 tahun 2008 tentang Pendanaan Pendidikan,
        Bagian Kelima, Pasal 27 ayat (1), menyebutkan bahwa Pemerintahdan
        pemerintah daerah sesuai kewenangannya memberi bantuan biaya pendidikan
        atau beasiswa kepada peserta didik yang orang tua atau walinya tidak
        mampu membiayai pendidikannya. Pasal 27 ayat (2), menyebutkan bahwa
        Pemerintah dan pemerintah daerah sesuai dengan kewenangannya dapat
        memberi beasiswa kepada peserta didik yang berprestasi. <br />
        Mengacu kepada Undang-undang dan Peraturan Pemerintah tersebut, maka
        Pemerintah melalui Direktorat Jenderal Pembelajaran dan Kemahasiswaan,
        mengupayakan pemberian beasiswa bagi mahasiswa yang berprestasi.
      </p>
      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Dasar Hukum
      </h3>
      <p
        class="text-justify text-[var(--text-black)] mb-2"
        style="font-family: var(--font-albert)"
      >
        Sebagai acuan dalam melaksanakan rekrutmen Beasiswa Peningkatan Prestasi
        Akademik (PPA) maka kegiatan ini harus didasarkan pada :
      </p>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem
          Pendidikan Nasional.
        </li>
        <li>
          Undang-undang Republik Indonesia Nomor 12 Tahun 2012 tentang
          Pendidikan Tinggi.
        </li>
        <li>
          Peraturan Pemerintah Nomor 48 Tahun 2008 tentang Pendanaan Pendidikan.
        </li>
        <li>
          Peraturan Pemerintah Nomor 4Tahun 2014tentang Penyelenggaraan
          PendidikanTinggi dan Pengelolaan Perguruan Tinggi.
        </li>
      </ul>

      <h3
        class="font-bold text-[var(--text-black)] mt-6"
        style="font-family: var(--font-albert)"
      >
        Tujuan dan Manfaat
      </h3>
      <p
        class="text-justify text-[var(--text-black)] mb-2"
        style="font-family: var(--font-albert)"
      >
        Setiap aktiftas yang dilakukan oleh seluruh sivitas akademik diharapkan
        memiliki tujuan dan manfaat bagi semua yang terlibat, penetapan
        mahasiswa penerima beasiswa PPA dilakukan dengan tujuan dan manfaat
        sebagai berikut :
      </p>
      <ul
        class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]"
        style="font-family: var(--font-albert)"
      >
        <li>
          Mendorong mahasiswa penerima untuk lebih berprestasi baik kurikuler,
          ko-kurikuler,maupun ekstrakurikulerserta memotivasi mahasiswa lain
          untuk lebih berprestasi.
        </li>
        <li>Memberikan penghargaan bagi mahasiswa yang berprestasi.</li>
        <li>
          Mengurangi jumlah mahasiswa yang putus kuliah, karena tidak mampu
          membiayai pendidikan.
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import logobidikmisi from "@/assets/img/bidikmisi.png";
import alurbidikmisi from "@/assets/img/alurbidikmisi.png";
import logoppa from "@/assets/img/ppa.png";
import bannerAkademik from "@/assets/img/bannerakademik.png";
</script>
