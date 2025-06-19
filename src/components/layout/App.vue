<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow p-4">
      <router-view />
      <faq />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import faq from './FAQ.vue'
import Footer from "./Footer.vue";

export default { components: { Navbar, faq, Footer } };
</script>
