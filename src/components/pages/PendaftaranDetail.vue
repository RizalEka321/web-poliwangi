<template>
  <div
    v-if="event"
    class="px-6 md:px-20 py-10 space-y-10 font-[var(--font-albert)]"
  >
    <div
      class="text-sm text-[var(--text-gray)] flex items-center gap-1 font-[var(--font-albert)]"
    >
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">
        Berita Pendaftaran</span
      >
    </div>

    <div class="flex flex-col lg:flex-row gap-10">
      <section class="flex-1">
        <h1
          class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-2 font-[var(--font-lora)]"
          style="font-family: var(--font-lora)"
        >
          {{ event.title }}
        </h1>
        <div
          class="text-sm text-[var(--text-gray)] flex items-center flex-wrap gap-4 mb-6 font-[var(--font-albert)]"
        >
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-calendar-days text-[var(--accent-yellow)]"
            ></i>
            {{ event.date }}
          </span>
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-tags text-[var(--accent-yellow)]"></i>
            Pendaftaran
          </span>
        </div>

        <!-- Gambar Event -->
        <div class="w-full mb-6">
          <img
            :src="event.image"
            class="w-full max-w-xl mx-auto object-cover rounded-lg shadow"
            alt="Foto Event"
          />
        </div>

        <div
          class="text-justify text-[var(--text-gray)] leading-relaxed space-y-4 max-w-4xl mx-auto font-[var(--font-albert)]"
          v-html="event.content"
        ></div>
      </section>

      <aside class="w-full lg:w-[30%]">
        <h2
          class="text-lg font-semibold border-l-4 border-[var(--accent-yellow)] pl-2 mb-4 text-[var(--blue-dark)]"
          style="font-family: var(--font-lora)"
        >
          Berita Pendaftaran Terbaru
        </h2>
        <ul class="space-y-5 text-[var(--blue-dark)]">
          <li
            v-for="item in recentRegistration"
            :key="item.slug"
            class="border-b border-[var(--blue-medium)] pb-3"
          >
            <router-link
              :to="`/pendaftaran/${item.slug}`"
              class="hover:underline hover:text-[var(--accent-yellow)] font-semibold"
              style="font-family: var(--font-albert)"
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
    <p class="text-center text-red-500 font-semibold font-[var(--font-albert)]">
      Berita pendaftaran tidak ditemukan
    </p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch, computed, onMounted } from "vue";
import axios from "axios";

const route = useRoute();
const slug = ref(route.params.slug);

const registrationData = ref([]);
const event = ref(null);
const recentRegistration = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=1&_embed"
    );
    const data = response.data.map((post) => {
      let image = "/src/assets/img/default.jpg";
      if (
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0] &&
        post._embedded["wp:featuredmedia"][0].source_url
      ) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
      }

      return {
        title: post.title.rendered,
        slug: post.slug,
        date: new Date(post.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        content: post.content.rendered,
        image,
      };
    });

    registrationData.value = data;
    event.value = registrationData.value.find((e) => e.slug === slug.value);
    recentRegistration.value = registrationData.value
      .filter((item) => item.slug !== slug.value)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
  } catch (err) {
    console.error("Gagal mengambil data detail pendaftaran:", err);
  }
});

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    event.value = registrationData.value.find((e) => e.slug === newSlug);
    recentRegistration.value = registrationData.value
      .filter((item) => item.slug !== newSlug)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
  }
);
</script>
