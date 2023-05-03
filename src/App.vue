<template>
  <Navbar />

  <div class="container py-3 d-flex">
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue';
</script>