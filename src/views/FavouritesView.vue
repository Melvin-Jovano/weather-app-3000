<template>
  <div class="mb-3" v-for="fav in favs">
    <WeatherBody :lat="Number(fav.lat)" :lon="Number(fav.lon)" />
  </div>
</template>

<script setup>
  import WeatherBody from '../components/favourites/WeatherBody.vue';
  import {ref} from 'vue';

  const favs = ref(JSON.parse(localStorage.getItem('favouriteLocations') ?? '[]'));
</script>