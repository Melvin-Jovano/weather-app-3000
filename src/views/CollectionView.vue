<template>
  <div class="overflow-auto" style="height:85vh">
    <div class="mb-3" v-for="fav in favs">
      <WeatherHeader :lat="Number(fav.lat)" :lon="Number(fav.lon)" />
    </div>
  </div>
</template>

<script setup>
  import WeatherHeader from '../components/favourites/WeatherHeader.vue';
  import { useRoute } from 'vue-router';
  import {ref} from 'vue';

  const route = useRoute();
  const favs = ref([]);

  favs.value = JSON.parse(window.atob(route.params.code));
</script>