<template>
  <div :key="favouritesStore.weatherHeaderKey">
    <div class="mb-3" v-for="fav in favs">
      <WeatherHeader :lat="Number(fav.lat)" :lon="Number(fav.lon)" />
    </div>
  </div>
</template>

<script setup>
  import WeatherHeader from '../components/favourites/WeatherHeader.vue';
  import {ref} from 'vue';
  import { favouritesStores } from '../stores/favourites';

  const favouritesStore = favouritesStores();
  const favs = ref(JSON.parse(localStorage.getItem('favouriteLocations') ?? '[]'));
</script>