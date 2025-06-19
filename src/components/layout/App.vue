<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow p-4">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default { components: { Navbar, Footer } };
</script>
