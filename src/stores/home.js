import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const homeStores = defineStore('homeStores', () => {
  const weatherHeaderKey = ref(1);
  const defaultLatLon = ref([-6.21, 106.85]);
  const isFilter = ref(false);
  const selectedLatLon = ref(defaultLatLon.value);
  const dataWeatherHeader = reactive(
    {
        "location" : "",
        "currentWeather" : {},
        "humidity" : "",
        "uv" : "",
        "pressure" : "",
        "weather" : "",
        "weatherImg" : "",
        "weatherColor" : "grey"
    }
);

  return {
    weatherHeaderKey,
    isFilter,
    defaultLatLon,
    selectedLatLon,
    dataWeatherHeader
  }
})
