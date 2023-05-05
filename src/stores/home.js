import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const homeStores = defineStore('homeStores', () => {
  const weatherHeaderKey = ref(1);
  const filter = ref(null);
  const unit = ref("");
  const dataWeatherHeader = reactive(
    {
        "location" : "",
        "currentWeather" : {},
        "humidity" : "",
        "uv" : "",
        "pressure" : "",
        "weather" : "",
        "weatherImg" : "",
        "weatherColor" : "grey",
        "unitSymbol" : ""
    }
  );

  const data7Days = []
  const dataWeather7Days = {
      "temp" : "",
      "weather" : "",
      "weatherImg" : "",
      "weatherColor" : "",
      "day" : "",
      "date" : "",
      "unit" : ""
    }

  return {
    weatherHeaderKey,
    filter,
    unit,
    dataWeatherHeader,
    data7Days,
    dataWeather7Days
  }
})
