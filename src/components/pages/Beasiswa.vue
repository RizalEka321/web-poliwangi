<template>
    <div class="px-6 md:px-20 py-10 space-y-10">
        <!-- Breadcrumb -->
        <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
            <router-link to="/" class="hover:underline hover:text-[var(--accent-blue)]">Home</router-link>
            <span class="mx-1 text-[var(--accent-yellow)]">›</span>
            <span class="text-[var(--text-black)] font-medium">Akademik</span>
        </div>

        <!-- Banner -->
        <div class="relative w-full max-w-[1364px] h-[301px] mx-auto overflow-hidden">
            <img
                :src="bannerAkademik"
                alt="Banner Akademik"
                class="object-cover w-full h-full"
            />
            <div class="absolute inset-0 flex items-center pl-10">
                <h1 class="text-3xl md:text-5xl font-bold text-white" style="font-family: var(--font-lora);">
                Beasiswa
                </h1>
            </div>
        </div>

        <section>
            <h2 class="text-xl font-bold mb-2 border-b-2 border-[var(--accent-yellow)] inline-block text-[var(--blue-dark)]" style="font-family: var(--font-lora);">
                Beasiswa BIDIKMISI
            </h2>
            <img 
                :src="logobidikmisi" 
                alt="logo bidikmisi" 
                class="mx-auto w-[537px] h-[239px]"
            />
            <p class="text-justify text-[var(--text-black)]" style="font-family: var(--font-albert);">
                Bidikmisi adalah bantuan biaya pendidikan dari pemerintah bagi lulusan Sekolah Menengah Atas (SMA) atau sederajat yang memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi. 
                Bidikmisi bertujuan untuk meningkatkan akses dan kesempatan belajar di perguruan tinggi; meningkatkan prestasi mahasiswa; menjamin keberlangsungan studi mahasiswa dengan tepat waktu; dan melahirkan lulusan yang mandiri, produktif serta memiliki kepedulian sosial sehingga mampu berperan dalam upaya pemutusan mata rantai kemiskinan dan pemberdayaan masyarakat. 
                Penerima Bidikmisi adalah siswa SMA atau sederajat yang akan lulus pada tahun berjalan atau lulus 1 (satu) tahun sebelumnya yang memiliki potensi akademik baik  tetapi memiliki keterbatasan ekonomi yang didukung bukti dokumen yang sah dan lulus seleksi penerimaan mahasiswa baru pada perguruan tinggi.  
                Keterbatasan ekonomi dibuktikan dengan kepemilikan Kartu Indonesia Pintar (KIP) atau pendapatan kotor gabungan orang tua/wali sebesar Rp4.000.000,00 (empat juta rupiah) atau pendapatan kotor gabungan orang tua/wali dibagi jumlah anggota keluarga maksimal Rp750.000,00 (tujuh ratus lima puluh ribu rupiah). Calon penerima bidikmisi wajib terdaftar pada sistem Bidikmisi dengan memasukkan NPSN dan NISN yang valid.
            </p>
            <h3 class="font-bold text-[var(--text-black)] mt-6" style="font-family: var(--font-albert);">Dasar Hukum</h3>
            <ul class="list-decimal list-outside pl-5 space-y-1 text-justify text-[var(--text-black)]" style="font-family: var(--font-albert);">
                <li>
                Undang – Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi (Lembaran Negara Republik Indonesia Tahun 2012 Nomor 158, tambahan Lembaran Negara Republik Indonesia Nomor 336);
                </li>
                <li>
                    Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi (Lembaran Negara Republik Indonesia Tahun 2014 Nomor 16, Tambahan Lembaran Negara Republik Indonesia Nomor 5500);
                </li>
                <li>
                    Peraturan Menteri Riset, Teknologi dan Pendidikan Tinggi Nomor 6 Tahun 2019 tentang Bantuan Biaya Pendidikan Bagi Mahasiswa Miskin Berprestasi (Berita Negara Republik Indonesia Tahun 2019 Nomor 78).
                </li>
            </ul>
            <img 
                :src="alurbidikmisi" 
                alt="alur bidikmisi" 
                class="mx-auto mt-7"
            />
        </section>
    </div>
</template>

<script setup>
import logobidikmisi from '@/assets/img/bidikmisi.png'
import alurbidikmisi from '@/assets/img/alurbidikmisi.png'
import bannerAkademik from '@/assets/img/bannerakademik.png'
</script>