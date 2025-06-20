import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/pages/Home.vue"),
  },
  // Profil
  {
    path: "/sambutan-direktur",
    name: "Sambutan Direktur",
    component: () => import("../components/pages/SambutanDirektur.vue"),
  },
  {
    path: "/sejarah-poliwangi",
    name: "Sejarah Poliwangi",
    component: () => import("../components/pages/SejarahPoliwangi.vue"),
  },
  {
    path: "/visi-misi",
    name: "Visi Misi",
    component: () => import("../components/pages/VisiMisi.vue"),
  },
  {
    path: "/sakip",
    name: "SAKIP",
    component: () => import("../components/pages/Sakip.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/pages/About.vue"),
  },
  {
    path: "/senat",
    name: "Senat",
    component: () => import("../components/pages/Senat.vue"),
  },
  {
    path: "/organisai-poliwangi",
    name: "Organisasi Poliwangi",
    component: () => import("../components/pages/Organisasi.vue"),
  },
  {
    path: "/sistem-pendidikan",
    name: "Sistem Pendidikan",
    component: () => import("../components/pages/SistemPendidikan.vue"),
  },
  {
    path: "/kerjasama-poliwangi",
    name: "Kerjasama Poliwangi",
    component: () => import("../components/pages/KerjasamaPoliwangi.vue"),
  },
  // Akademik
  {
    path: "/kalender-akademik",
    name: "Kalender Akademik",
    component: () => import("../components/pages/KalenderAkademik.vue"),
  },
  {
    path: "/peraturan-akademik",
    name: "Peraturan Akademik",
    component: () => import("../components/pages/PeraturanAkademik.vue"),
  },
  {
    path: "/beasiswa",
    name: "Beasiswa",
    component: () => import("../components/pages/Beasiswa.vue"),
  },
  {
    path: "/biaya-pendidikan",
    name: "Biaya Pendidikan",
    component: () => import("../components/pages/BiayaPendidikan.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
