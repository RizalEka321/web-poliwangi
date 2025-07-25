<template>
  <div class="px-6 md:px-20 py-10 space-y-10">
    <div class="text-sm text-[var(--text-gray)] font-[var(--font-albert)]">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="mx-1 text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Berita</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="md:col-span-2 space-y-6">
        <div
          v-if="paginatedBerita.length === 0"
          class="text-center text-gray-500"
        >
          Tidak ada berita ditemukan.
        </div>
        <div
          v-for="(item, index) in paginatedBerita"
          :key="index"
          class="bg-white shadow hover:shadow-lg flex flex-col md:flex-row"
        >
          <img
            :src="item.image"
            class="w-full md:w-60 h-48 md:h-48 object-cover"
          />
          <div class="p-4 flex flex-col justify-between">
            <div>
              <h3
                class="font-semibold text-xl text-[var(--text-black)] hover:text-[var(--accent-blue)]"
              >
                {{ item.title }}
              </h3>
              <p class="text-sm text-[var(--text-gray)] mb-2">
                {{ item.date }}
              </p>
              <p
                class="text-sm text-justify text-[var(--text-gray)] line-clamp-1"
                v-html="item.summary"
              ></p>
            </div>
            <router-link
              :to="`/berita/${item.slug}`"
              class="text-[var(--accent-blue)] font-semibold text-sm hover:underline mt-3"
            >
              Baca selengkapnya</router-link
            >
          </div>
        </div>
        <div
          v-if="totalPages > 1"
          class="flex justify-center items-center space-x-4 mt-6"
        >
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
      <div class="space-y-8">
        <div>
          <h4 class="font-semibold text-lg mb-3 text-[var(--text-black)]">
            Kategori
          </h4>
          <ul class="space-y-2">
            <li
              v-for="kategori in kategoriList"
              :key="kategori"
              :class="[
                'cursor-pointer',
                selectedKategori === kategori
                  ? 'text-[var(--accent-blue)] font-semibold'
                  : 'text-[var(--text-gray)]',
              ]"
              @click="selectedKategori = kategori"
            >
              {{ kategori }}
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-3 text-[var(--text-black)]">
            Tahun
          </h4>
          <ul class="space-y-2">
            <li
              v-for="tahun in tahunList"
              :key="tahun"
              :class="[
                'cursor-pointer',
                selectedTahun === tahun
                  ? 'text-[var(--accent-blue)] font-semibold'
                  : 'text-[var(--text-gray)]',
              ]"
              @click="selectedTahun = tahun"
            >
              {{ tahun }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";

const beritaList = ref([]);
const kategoriList = ref(["Semua"]);
const tahunList = ref(["Semua"]);

const selectedKategori = ref("Semua");
const selectedTahun = ref("Semua");
const currentPage = ref(1);
const itemsPerPage = 5;

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=6&_embed"
    );
    const data = response.data.map((post) => {
      const image =
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/src/assets/img/default.jpg";
      const caption =
        post._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered || "";
      const date = new Date(post.date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      return {
        image: image,
        title: post.title.rendered,
        date: date,
        summary: post.excerpt.rendered,
        kategori:
          post.yoast_head_json?.schema?.["@graph"]?.find(
            (x) => x["@type"] === "Article"
          )?.articleSection || "Lainnya",
        tahun: new Date(post.date).getFullYear(),
        slug: post.slug,
      };
    });

    beritaList.value = data;

    const kategoriSet = new Set(data.map((item) => item.kategori));
    kategoriList.value = ["Semua", ...Array.from(kategoriSet)];

    const tahunSet = new Set(data.map((item) => item.tahun));
    tahunList.value = ["Semua", ...Array.from(tahunSet).sort((a, b) => b - a)];
  } catch (error) {
    console.error("Gagal mengambil data berita:", error);
  }
});

const filteredBerita = computed(() => {
  return beritaList.value.filter((item) => {
    const matchKategori =
      selectedKategori.value === "Semua" ||
      item.kategori === selectedKategori.value;
    const matchTahun =
      selectedTahun.value === "Semua" || item.tahun === selectedTahun.value;
    return matchKategori && matchTahun;
  });
});

const totalPages = computed(() =>
  Math.ceil(filteredBerita.value.length / itemsPerPage)
);

const paginatedBerita = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredBerita.value.slice(start, start + itemsPerPage);
});

watch([selectedKategori, selectedTahun], () => {
  currentPage.value = 1;
});
</script>
