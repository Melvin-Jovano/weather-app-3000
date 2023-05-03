<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <form class="d-flex dropdown" @submit.prevent="findCities()">
          <input @keyup="findCities()" v-model="city" class="form-control me-2 form-control-sm small" type="search" placeholder="Tokyo, Seoul..." aria-label="Search">
          
          <button v-if="isLoading" class="bg-transparent border-0">
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>

          <ul v-if="cities.length > 0" class="dropdown-menu show" aria-labelledby="dropdownMenu2" data-bs-popper="static">
            <li v-for="city in cities">
              <button @click="selectCity(city)" class="dropdown-item" type="button">{{city.display_name}}</button>
            </li>
          </ul>
        </form>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <form class="d-flex">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
            <label class="form-check-label small" for="flexSwitchCheckChecked">Dark mode</label>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import axios from 'axios';
  import {ref} from 'vue';

  const cities = ref([]);
  const isLoading = ref(false);
  const city = ref('');
  const timeoutId = ref(null);
  const selectedCity = ref(null);
  
  async function findCities() {
    try {
      cities.value = [];

      if (timeoutId.value) {
        clearTimeout(timeoutId.value);
      }

      if(city.value.length > 0) {
        timeoutId.value = setTimeout(async () => {
          isLoading.value = true;
          const getCities = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&city=${city.value}`);
          cities.value = getCities.data;
          isLoading.value = false;
        }, 500);
      }
    } catch (error) {
      isLoading.value = false;
    }
  }

  function selectCity({display_name, lon, lat}) {
    try {
      selectedCity.value = {
        display_name, 
        lon, 
        lat
      };
      cities.value = [];
      city.value = display_name;
    } catch (error) {
      console.error(error);
    }
  }
</script>