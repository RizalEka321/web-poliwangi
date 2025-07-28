<template>
  <section class="banner-home relative w-full h-[500px] md:h-[600px]">
    <img
      src="/src/assets/img/banner_home.jpg"
      alt="banner"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
    ></div>
    <div
      class="absolute inset-0 flex items-center text-white z-10 px-4 md:px-20"
      style="font-family: var(--font-albert)"
    >
      <div class="max-w-4xl">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2">
          Wujudkan Masa Depan Gemilang Bersama Poliwangi
        </h2>
        <h3
          class="text-lg sm:text-2xl md:text-4xl font-bold text-[#FFD166] mb-2"
        >
          Terbaik, Berkualitas dan Berpengalaman
        </h3>
        <p class="text-base sm:text-lg md:text-2xl">
          Pendidikan terbaik yang mempersiapkan Anda langsung siap bersaing di
          dunia kerja!
        </p>
      </div>
    </div>
  </section>

  <section
    class="profile-home px-4 py-16 md:px-20 flex flex-col md:flex-row items-center gap-10"
  >
    <div class="flex-1 text-left" style="font-family: var(--font-albert)">
      <h2
        class="text-2xl md:text-2xl font-bold mb-4 text-[var(--text-black)]"
        style="font-family: var(--font-playfair)"
      >
        POLITEKNIK NEGERI BANYUWANGI
      </h2>
      <p
        class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify"
      >
        Poliwangi adalah perguruan tinggi vokasi yang berkomitmen mencetak
        lulusan unggul dan siap kerja. Dengan kurikulum berbasis industri serta
        didukung fasilitas modern, kami membekali mahasiswa dengan keterampilan
        praktis yang relevan dengan dunia kerja.
      </p>
      <p
        class="text-base md:text-sm text-[var(--text-black)] mb-4 text-justify"
      >
        <span class="font-bold">Mengapa Poliwangi?</span> Dengan pendidikan
        berbasis industri, Poliwangi menawarkan kurikulum yang selaras dengan
        dunia kerja, didukung oleh dosen berpengalaman, peluang karier luas bagi
        lulusan, serta fasilitas modern seperti laboratorium dan ruang belajar
        yang menunjang kreativitas.
      </p>
      <p class="text-base md:text-sm text-[var(--text-black)] text-justify">
        Bersama Poliwangi, raih masa depan cerah dengan pendidikan yang
        berorientasi pada keterampilan dan inovasi!
      </p>
    </div>
    <div class="flex-1">
      <div class="w-full aspect-video rounded overflow-hidden">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/iDuOpMl9aUA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

  <section class="info-registration py-16">
    <div
      class="flex items-center gap-4 px-4 md:px-20 py-3 mb-5 bg-[var(--accent-yellow)] text-white"
    >
      <img
        src="/src/assets/icon/danger.svg"
        alt="icon-danger"
        class="w-10 h-10 invert"
      />
      <h2
        class="text-2xl md:text-2xl font-bold"
        style="font-family: var(--font-lora)"
      >
        INFORMASI PENDAFTARAN
      </h2>
    </div>

    <div ref="cardContainer" class="overflow-x-hidden py-3 px-4 md:px-20">
      <div
        class="flex space-x-8 transition-transform duration-500"
        :style="{
          transform: `translateX(-${
            currentPageIndex * itemsPerPage * (cardWidth + 32)
          }px)`,
        }"
      >
        <router-link
          :to="`/pendaftaran/${item.slug}`"
          v-for="(item, index) in registrationData"
          :key="index"
          class="relative bg-white rounded-lg shadow-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 transition hover:shadow-xl overflow-hidden block"
        >
          <img
            :src="item.image"
            alt=""
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
          ></div>
          <div
            class="relative z-10 p-4 text-white flex flex-col justify-end h-full text-justify"
          >
            <h5 class="text-base font-bold">{{ item.title }}</h5>
            <p class="text-xs mb-3 truncate">{{ item.description }}</p>
            <hr />
            <div class="flex justify-between items-center text-xs mt-2">
              <p>
                <i class="fa-solid fa-calendar-days me-2"></i>
                {{
                  new Date(item.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                }}
              </p>

              <span class="font-semibold hover:text-yellow-400"
                >Read More <i class="fa-solid fa-arrow-right ms-2"></i
              ></span>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Pagination - tampilkan hanya jika ada lebih dari 1 halaman -->
    <div
      v-if="totalPages > 1"
      class="flex justify-center items-center mt-10 space-x-2"
    >
      <button
        class="w-10 h-10 rounded-xl bg-[#E0E0E0] shadow font-bold hover:bg-[var(--accent-blue)] hover:text-white transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        @click="prevPage"
        :disabled="currentPageIndex === 0"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="w-10 h-10 rounded-xl shadow font-bold transition duration-300 ease-in-out"
        :class="
          currentPageIndex === page - 1
            ? 'bg-[var(--accent-blue)] text-white'
            : 'bg-[#E0E0E0] text-[var(--text-black)] hover:bg-[var(--accent-blue)] hover:text-white'
        "
        @click="goToPage(page - 1)"
      >
        {{ page }}
      </button>

      <button
        class="w-10 h-10 rounded-xl bg-[#E0E0E0] shadow font-bold hover:bg-[var(--accent-blue)] hover:text-white transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        @click="nextPage"
        :disabled="currentPageIndex === totalPages - 1"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </section>

  <section class="news">
    <div
      class="flex flex-col items-center justify-center gap-4 px-4 md:px-20 py-3 mb-5"
    >
      <h2
        class="text-2xl md:text-2xl font-bold text-[var(--accent-yellow)]"
        style="font-family: var(--font-lora)"
      >
        <span class="text-[var(--blue-dark)]">Berita Terkini</span> POLIWANGI
      </h2>
      <div class="w-20 h-1 bg-[var(--accent-yellow)] rounded-full"></div>
    </div>

    <div class="px-4 mb-5 md:px-20 flex flex-col md:flex-row gap-10">
      <div class="flex-1" v-if="beritaList.length">
        <router-link
          :to="`/berita/${beritaList[0].slug}`"
          class="bg-white overflow-hidden cursor-pointer"
        >
          <img
            :src="beritaList[0].image"
            alt="Berita Utama"
            class="w-full h-75 object-cover"
          />
          <div class="py-3">
            <h3
              class="text-xl font-bold text-[var(--text-black)] mb-2 text-justify hover:text-yellow-400"
            >
              {{ beritaList[0].title }}
            </h3>
            <div class="flex items-center text-sm text-[var(--text-black)]">
              <p>
                <i class="fa-solid fa-calendar-days me-2"></i
                >{{ formatDate(beritaList[0].date) }}
              </p>
              <span class="mx-2">|</span>
              <p><i class="fa-solid fa-tags me-2"></i>Berita</p>
            </div>
            <p
              class="text-[var(--text-black)] mb-4 text-justify"
              v-html="beritaList[0].description"
            ></p>
          </div>
        </router-link>
      </div>

      <div class="flex-1 space-y-1">
        <div
          v-for="(item, index) in beritaList.slice(1, 4)"
          :key="index"
          class="bg-white p-2 flex gap-4 items-stretch cursor-pointer"
        >
          <router-link
            :to="`/berita/${item.slug}`"
            class="flex gap-4 items-stretch w-full"
          >
            <img
              :src="item.image"
              alt="Thumbnail"
              class="w-[120px] object-cover"
            />
            <div class="flex-1">
              <h4
                class="font-bold text-[var(--text-black)] mb-1 text-justify leading-[1.3rem] hover:text-yellow-400"
              >
                {{ item.title }}
              </h4>
              <div class="flex items-center text-sm text-[var(--text-black)]">
                <p>
                  <i class="fa-solid fa-calendar-days me-2"></i
                  >{{ formatDate(item.date) }}
                </p>
                <span class="mx-2">|</span>
                <p><i class="fa-solid fa-tags me-2"></i>Berita</p>
              </div>
              <p
                class="text-sm text-justify leading-[1.2rem]"
                v-html="item.description"
              ></p>
            </div>
          </router-link>
        </div>
        <div class="flex justify-end">
          <router-link to="/berita" class="font-semibold hover:text-yellow-400">
            Berita Lainnya<i class="fa-solid fa-circle-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="event py-15">
    <div
      class="flex flex-col items-center justify-center gap-4 px-4 md:px-20 py-3 mb-5"
    >
      <h2
        class="text-2xl md:text-2xl font-bold text-[var(--blue-dark)]"
        style="font-family: var(--font-lora)"
      >
        Event
      </h2>
      <div class="w-15 h-1 bg-[var(--accent-yellow)] rounded-full"></div>
    </div>

    <!-- Container dengan scroll horizontal -->
    <div class="px-4 md:px-20 relative">
      <!-- Navigation Buttons -->
      <button
        @click="scrollLeft"
        class="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
        :class="{ 'opacity-50 cursor-not-allowed': !canScrollLeft }"
        :disabled="!canScrollLeft"
      >
        <i class="fa-solid fa-chevron-left text-gray-700"></i>
      </button>

      <button
        @click="scrollRight"
        class="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
        :class="{ 'opacity-50 cursor-not-allowed': !canScrollRight }"
        :disabled="!canScrollRight"
      >
        <i class="fa-solid fa-chevron-right text-gray-700"></i>
      </button>

      <div
        ref="eventContainer"
        class="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style="scroll-behavior: smooth"
        @scroll="updateScrollButtons"
      >
        <div
          v-for="(item, index) in eventList"
          :key="index"
          class="bg-white overflow-hidden cursor-pointer flex-shrink-0 w-[300px]"
        >
          <router-link :to="`/event/${item.slug}`" class="block">
            <div class="h-70 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="py-2">
              <div
                class="flex justify-between items-center text-sm font-semibold text-[var(--text-black)] mb-1"
              >
                <p>Event</p>
                <p>
                  {{
                    new Date(item.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  }}
                </p>
              </div>
              <hr />
              <h3
                class="font-semibold text-base mb-2 text-[var(--text-black)] leading-[1.3rem] text-justify hover:text-yellow-400"
              >
                {{ item.title }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="service relative w-full h-[400px] md:h-[500px] my-20">
    <img
      src="/src/assets/img/perpus.png"
      alt="banner"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-900 via-blue-600/30 to-transparent"
    ></div>
    <div class="absolute inset-0">
      <div
        class="flex items-center justify-center text-white z-10 px-4 md:px-20 py-15"
      >
        <h2
          class="text-4xl md:text-4xl font-black text-white"
          style="font-family: var(--font-lora)"
        >
          Layanan Digital
        </h2>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 md:px-20"
      >
        <a
          v-for="(item, index) in serviceList"
          :key="index"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white overflow-hidden rounded-lg cursor-pointer hover:shadow transition block"
        >
          <div class="p-4 flex flex-col items-center text-[var(--blue-dark)]">
            <i :class="[item.icon, 'text-5xl', 'mb-3']"></i>
            <h3
              class="font-semibold text-base leading-[1.3rem] text-center hover:text-[var(--accent-yellow)]"
            >
              {{ item.title }}
            </h3>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section class="partnert">
    <div
      class="flex flex-col items-center justify-center gap-4 px-4 md:px-20 py-3 mb-5"
    >
      <h2
        class="text-3xl md:text-4xl font-black text-[var(--text-black)]"
        style="font-family: var(--font-lora)"
      >
        International Partners
      </h2>
      <div class="w-15 h-1 bg-[var(--accent-yellow)] rounded-full"></div>
    </div>
    <div class="flex flex-wrap justify-center gap-6 mb-8">
      <img
        v-for="(img, index) in topPartners"
        :key="'top-' + index"
        :src="img"
        class="h-[40px] md:h-[50px] object-contain"
      />
    </div>

    <div class="flex flex-wrap justify-center gap-6">
      <img
        v-for="(img, index) in bottomPartners"
        :key="'bottom-' + index"
        :src="img"
        class="h-[60px] md:h-[80px] object-contain"
      />
    </div>
  </section>

  <section class="faq max-w-4xl mx-auto py-20 px-4">
    <h2
      class="text-3xl md:text-4xl font-black text-center text-[var(--text-black)] mb-4"
      style="font-family: var(--font-lora)"
    >
      Frequently Asked Question
    </h2>
    <div
      class="w-16 h-1 bg-[var(--accent-yellow)] mx-auto mb-6 rounded-full"
    ></div>
    <p
      class="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-[var(--font-albert)]"
    >
      Temukan jawaban atas berbagai pertanyaan seputar program studi, proses
      pendaftaran, biaya kuliah, fasilitas kampus, dan informasi penting
      lainnya. Kami telah merangkum jawaban secara ringkas dan jelas untuk
      membantu Anda mendapatkan informasi dengan mudah. Jika masih ada
      pertanyaan, jangan ragu untuk menghubungi kami!
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
            background:
              'linear-gradient(90deg, #0085DE 0%, #005E9D 43%, #004878 85%)',
          }"
        >
          {{ faq.question }}
          <span class="text-xl">
            <i
              :class="activeIndex === index ? 'fas fa-minus' : 'fas fa-plus'"
            ></i>
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
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";

const registrationData = ref([]);
const currentPageIndex = ref(0);
const itemsPerPage = ref(1); // items per page (akan dihitung berdasarkan lebar container)
const totalPages = ref(1);
const cardContainer = ref(null);
const cardWidth = ref(320); // default card width (md:w-80 = 320px)

// Function untuk menghitung jumlah items per page berdasarkan lebar container
const calculateItemsPerPage = () => {
  if (!cardContainer.value) return;

  const containerWidth = cardContainer.value.offsetWidth;
  const cardWidthWithGap = cardWidth.value + 32; // card width + gap (space-x-8 = 32px)

  // Hitung berapa card yang bisa muat dalam satu halaman
  const itemsCanFit = Math.floor(containerWidth / cardWidthWithGap);
  itemsPerPage.value = Math.max(1, itemsCanFit); // minimal 1 item

  // Hitung total pages berdasarkan items per page
  totalPages.value = Math.ceil(
    registrationData.value.length / itemsPerPage.value
  );

  console.log("Container width:", containerWidth);
  console.log("Items per page:", itemsPerPage.value);
  console.log("Total items:", registrationData.value.length);
  console.log("Total pages:", totalPages.value);
};

// Function untuk update card width berdasarkan breakpoint
const updateCardWidth = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    // md breakpoint
    cardWidth.value = 320; // w-80 = 320px
  } else if (screenWidth >= 640) {
    // sm breakpoint
    cardWidth.value = 288; // w-72 = 288px
  } else {
    cardWidth.value = 240; // w-60 = 240px
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=1&_embed"
    );

    registrationData.value = response.data.map((post) => {
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
        description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
        image: image,
        slug: post.slug,
        date: post.date,
      };
    });

    // Wait for DOM to be updated
    await nextTick();

    // Update card width based on screen size
    updateCardWidth();

    // Calculate pagination setelah data dimuat dan DOM ter-render
    setTimeout(() => {
      calculateItemsPerPage();
    }, 200);
  } catch (error) {
    console.error("Gagal mengambil data pendaftaran:", error);
  }
});

// Handle window resize
const handleResize = () => {
  updateCardWidth();
  calculateItemsPerPage();

  // Reset to first page if current page exceeds new total pages
  if (currentPageIndex.value >= totalPages.value) {
    currentPageIndex.value = 0;
  }
};

// Add resize listener
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

// Cleanup resize listener
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const prevPage = () => {
  if (currentPageIndex.value > 0) {
    currentPageIndex.value--;
  }
};

const nextPage = () => {
  if (currentPageIndex.value < totalPages.value - 1) {
    currentPageIndex.value++;
  }
};

const goToPage = (page) => {
  if (page >= 0 && page < totalPages.value) {
    currentPageIndex.value = page;
  }
};

// Berita
const beritaList = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=6&_embed"
    );
    beritaList.value = response.data.map((post) => {
      const image =
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/src/assets/img/default.jpg";
      const excerpt =
        post.excerpt?.rendered.replace(/<[^>]*>?/gm, "").slice(0, 150) + "...";
      return {
        image: image,
        slug: post.slug,
        title: post.title.rendered,
        date: post.date,
        description: excerpt,
      };
    });
  } catch (error) {
    console.error("Gagal memuat data berita:", error);
  }
});

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Event
const eventList = ref([]);
const eventContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost/webcoba/wp-json/wp/v2/posts?categories=7&_embed"
    );
    eventList.value = response.data.map((post) => {
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
        image: image,
        title: post.title.rendered,
        date: post.date,
        slug: post.slug,
      };
    });

    setTimeout(() => {
      updateScrollButtons();
    }, 100);
  } catch (error) {
    console.error("Gagal mengambil data event:", error);
  }
});

const scrollLeft = () => {
  const container = eventContainer.value;
  const scrollAmount = 320;
  container.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  const container = eventContainer.value;
  const scrollAmount = 320;
  container.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const updateScrollButtons = () => {
  const container = eventContainer.value;
  if (!container) return;

  canScrollLeft.value = container.scrollLeft > 0;
  canScrollRight.value =
    container.scrollLeft < container.scrollWidth - container.clientWidth - 1;
};

// Service
const serviceList = [
  {
    title: "Learning Management System",
    icon: "fa-solid fa-chalkboard-user",
    url: "https://lms.poliwangi.ac.id/",
  },
  {
    title: "E-Library",
    icon: "fa-solid fa-book",
    url: "https://e-library.poliwangi.ac.id/",
  },
  {
    title: "Sistem Informasi Terpadu",
    icon: "fa-solid fa-desktop",
    url: "https://sit.poliwangi.ac.id/",
  },
  {
    title: "Lapor POLIWANGI",
    icon: "fa-solid fa-comment-dots",
    url: "https://sit.poliwangi.ac.id/",
  },
  {
    title: "Mirror",
    icon: "fa-solid fa-arrows-rotate",
    url: "http://mirror.poliwangi.ac.id/",
  },
  {
    title: "Job Placement Center",
    icon: "fa-solid fa-briefcase",
    url: "https://jpc.poliwangi.ac.id/",
  },
  {
    title: "PMB",
    icon: "fa-solid fa-building-columns",
    url: "https://pmb.poliwangi.ac.id/",
  },
  {
    title: "P3M",
    icon: "fa-solid fa-microscope",
    url: "https://pmb.poliwangi.ac.id/",
  },
];

//Partner
import taiwan from "@/assets/icon/taiwan.png";
import china from "@/assets/icon/china.png";
import kosen from "@/assets/icon/kosen.png";
import atlim from "@/assets/icon/atlim.png";
import pusan from "@/assets/icon/pusan.png";
import unv1 from "@/assets/icon/unv1.png";
import unv from "@/assets/icon/unv.png";
import yangzou from "@/assets/icon/yangzou.png";

const topPartners = [taiwan, china, kosen, atlim];
const bottomPartners = [pusan, unv, yangzou, unv1];

// Faq
const activeIndex = ref(null);

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

const faqs = [
  {
    question: "Apa saja program studi yang tersedia di Poliwangi?",
    answer:
      "Poliwangi menawarkan berbagai program studi, termasuk Teknologi Informasi, Teknik Mesin, Teknik Sipil, Teknologi Pengolahan Hasil Laut, Manajemen Bisnis, dan lainnya. Setiap program dirancang untuk memenuhi kebutuhan dunia kerja dan memberikan keterampilan praktis kepada mahasiswa.",
  },
  {
    question: "Bagaimana cara mendaftar di Poliwangi?",
    answer:
      "Pendaftaran dilakukan secara online melalui situs resmi Poliwangi atau portal penerimaan mahasiswa baru seperti SNMPN dan SBMPN. Pastikan Anda memenuhi syarat pendaftaran dan mengikuti jadwal yang ditentukan.",
  },
  {
    question: "Apakah Poliwangi menerima jalur prestasi?",
    answer:
      "Ya, Poliwangi menerima mahasiswa melalui jalur prestasi seperti SNMPN (Seleksi Nasional Masuk Politeknik Negeri) dan jalur mandiri yang mempertimbangkan nilai rapor dan prestasi lainnya.",
  },
  {
    question: "Bagaimana sistem perkuliahan di Poliwangi?",
    answer:
      "Sistem perkuliahan di Poliwangi berbasis praktik dan teori, dengan proporsi lebih besar pada praktik di laboratorium, bengkel, atau lapangan. Poliwangi juga sering bekerja sama dengan industri untuk memberikan pengalaman langsung kepada mahasiswa.",
  },
  {
    question: "Apakah Poliwangi memiliki organisasi mahasiswa atau komunitas?",
    answer:
      "Tentu saja. Poliwangi memiliki berbagai organisasi mahasiswa, seperti BEM (Badan Eksekutif Mahasiswa), UKM (Unit Kegiatan Mahasiswa), dan komunitas sesuai minat dan bakat mahasiswa. Organisasi ini membantu mahasiswa mengembangkan keterampilan non-akademik.",
  },
];
</script>
