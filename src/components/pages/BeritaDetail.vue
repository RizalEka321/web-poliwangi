<template>
  <div
    v-if="berita"
    class="px-6 md:px-20 py-10 space-y-10 font-[var(--font-albert)]"
  >
    <div class="text-sm text-[var(--text-gray)] flex items-center gap-1">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="text-[var(--accent-yellow)]">›</span>
      <router-link
        to="/berita"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Berita</router-link
      >
    </div>
    <div class="flex flex-col lg:flex-row gap-10">
      <section class="flex-1">
        <h1
          class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-2"
          style="font-family: var(--font-lora)"
        >
          {{ berita.title }}
        </h1>
        <div
          class="text-sm text-[var(--text-gray)] flex items-center flex-wrap gap-4 mb-6"
        >
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-calendar-days text-[var(--accent-yellow)] hover:text-yellow-500"
            ></i>
            {{ berita.date }}
          </span>
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-tags text-[var(--accent-yellow)] hover:text-yellow-500"
            ></i>
            {{ berita.kategori }}
          </span>
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-user text-[var(--accent-yellow)] hover:text-yellow-500"
            ></i>
            Oleh : Humas POLIWANGI
          </span>
        </div>

        <div class="w-full mb-6">
          <img
            :src="berita.image"
            class="w-full max-w-4xl mx-auto object-cover rounded-lg shadow"
            alt="Foto Berita"
          />
        </div>

        <div
          class="text-justify text-[var(--text-gray)] leading-relaxed space-y-4 max-w-4xl mx-auto"
          style="font-family: var(--font-albert)"
          v-html="berita.content"
        ></div>
      </section>

      <!-- Berita Terbaru -->
      <aside class="w-full lg:w-[30%]">
        <h2
          class="text-lg font-bold border-l-4 border-[var(--accent-yellow)] pl-2 mb-4 text-[var(--blue-dark)]"
        >
          Berita Terbaru
        </h2>
        <ul class="space-y-5 text-[var(--blue-dark)]">
          <li
            v-for="item in beritaTerbaru"
            :key="item.slug"
            class="border-b border-[var(--blue-medium)] pb-3"
          >
            <router-link
              :to="`/berita/${item.slug}`"
              class="hover:underline hover:text-[var(--accent-yellow)] font-semibold"
              style="font-family: var(--font-lora)"
            >
              {{ item.title }}
            </router-link>
            <p class="text-xs text-[var(--text-gray)] mt-1">{{ item.date }}</p>
          </li>
        </ul>
      </aside>
    </div>
  </div>

  <div v-else class="px-6 md:px-20 py-10">
    <p class="text-center text-red-500 font-semibold">Berita tidak ditemukan</p>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const slug = ref(route.params.slug);
const berita = ref(null);
const beritaTerbaru = ref([]);

const fetchBerita = async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=6&_embed"
    );
    const posts = response.data;

    // Temukan berita berdasarkan slug
    const found = posts.find((post) => post.slug === slug.value);
    if (found) {
      berita.value = {
        title: found.title.rendered,
        date: new Date(found.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        slug: found.slug,
        kategori: found._embedded["wp:term"]?.[0]?.[0]?.name || "Berita",
        image: found._embedded["wp:featuredmedia"]?.[0]?.source_url || "",
        content: found.content.rendered,
      };
    } else {
      berita.value = null;
    }

    // Berita terbaru (selain yang sedang dibuka)
    beritaTerbaru.value = posts
      .filter((post) => post.slug !== slug.value)
      .slice(0, 5)
      .map((post) => ({
        title: post.title.rendered,
        date: new Date(post.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        slug: post.slug,
      }));
  } catch (error) {
    console.error("Gagal memuat data berita:", error);
  }
};

onMounted(fetchBerita);

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    fetchBerita();
  }
);
</script>
