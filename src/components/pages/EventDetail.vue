<template>
  <div
    v-if="event"
    class="px-6 md:px-20 py-10 space-y-10 font-[var(--font-albert)]"
  >
    <div class="text-sm text-[var(--text-gray)] flex items-center gap-1">
      <router-link
        to="/"
        class="hover:underline hover:text-[var(--accent-blue)]"
        >Home</router-link
      >
      <span class="text-[var(--accent-yellow)]">›</span>
      <span class="text-[var(--text-black)] font-medium">Event</span>
    </div>

    <div class="flex flex-col lg:flex-row gap-10">
      <section class="flex-1">
        <h1
          class="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-2"
          style="font-family: var(--font-lora)"
        >
          {{ event.title }}
        </h1>
        <div
          class="text-sm text-[var(--text-gray)] flex items-center flex-wrap gap-4 mb-6"
        >
          <span class="flex items-center gap-2">
            <i
              class="fa-solid fa-calendar-days text-[var(--accent-yellow)]"
            ></i>
            {{
              new Date(event.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </span>
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-tags text-[var(--accent-yellow)]"></i>
            Event
          </span>
        </div>

        <div class="w-full mb-6">
          <img
            :src="event.imageDetail"
            class="w-full max-w-xl mx-auto object-cover rounded-lg shadow"
            :alt="event.title"
          />
          <p
            class="text-sm text-center text-[var(--text-gray)] mt-2"
            v-html="event.caption"
          ></p>
        </div>

        <div
          class="text-justify text-[var(--text-gray)] leading-relaxed space-y-4 max-w-4xl mx-auto"
          style="font-family: var(--font-albert)"
          v-html="event.content"
        ></div>
      </section>

      <aside class="w-full lg:w-[30%]">
        <h2
          class="text-lg font-bold border-l-4 border-[var(--accent-yellow)] pl-2 mb-4 text-[var(--blue-dark)]"
          style="font-family: var(--font-lora)"
        >
          Event Terbaru
        </h2>
        <ul class="space-y-5 text-[var(--blue-dark)]">
          <li
            v-for="item in eventLainnya"
            :key="item.slug"
            class="border-b border-[var(--blue-medium)] pb-3"
          >
            <router-link
              :to="`/event/${item.slug}`"
              class="hover:underline hover:text-[var(--accent-yellow)] font-semibold"
              style="font-family: var(--font-albert)"
            >
              {{ item.title }}
            </router-link>
            <p class="text-xs text-[var(--text-gray)] mt-1">
              {{
                new Date(item.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              }}
            </p>
          </li>
        </ul>
      </aside>
    </div>
  </div>

  <div v-else class="px-6 md:px-20 py-10">
    <p class="text-center text-red-500 font-semibold">Event tidak ditemukan</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";

const route = useRoute();
const slug = ref(route.params.slug);
const event = ref(null);
const allEvents = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=7&_embed"
    );
    allEvents.value = response.data.map((post) => {
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
        image,
        imageDetail: image,
        title: post.title.rendered,
        date: post.date,
        slug: post.slug,
        content: post.content.rendered,
        caption: post._embedded["wp:featuredmedia"][0]?.caption?.rendered || "",
      };
    });
    event.value = allEvents.value.find((e) => e.slug === slug.value);
  } catch (error) {
    console.error("Gagal memuat detail event:", error);
  }
});

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    event.value = allEvents.value.find((e) => e.slug === newSlug);
  }
);

const eventLainnya = computed(() => {
  return allEvents.value.filter((e) => e.slug !== slug.value).slice(0, 5);
});
</script>
