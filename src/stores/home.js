import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const homeStores = defineStore('homeStores', () => {
  const weatherHeaderKey = ref(1);
  const filter = ref(null);
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
    filter,
    dataWeatherHeader
  }
})
