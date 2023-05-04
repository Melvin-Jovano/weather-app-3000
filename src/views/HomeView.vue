<template>
  <WeatherHeader :key="store.weatherHeaderKey" />
</template>

<script setup>
  import WeatherHeader from '@/components/home/WeatherHeader.vue';
  import {homeStores} from '@/stores/home';

  const store = homeStores();
</script>