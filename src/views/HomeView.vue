<template>
  <div 
  class="d-flex container" 
  :class="{
    'bgNight' : data.currentWeather.is_day == 0
  }" 
  style="color: white;" 
  :style="{backgroundColor : data.weatherColor }"
  >
    <div class="d-flex justify-content-center align-items-center" style="width: 250px; height: 250px;">
      <img :src="'/images/' + data.weatherImg" alt="" width="180" height="180" style="pointer-events: none;">
    </div>
    <div class="d-flex flex-column justify-content-between flex-fill">
      <div class="d-flex mt-5">
        <IconLocation/>
        <h3 class="ms-1 mb-3" style="font-weight: 400;">
          {{ data.location || "Location" }}
        </h3>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column mb-5">
          <h1>
            {{ data.weather || "Weather" }}
          </h1>
          <h4>
            {{ Math.round(Number(data.currentWeather.temperature)) || "-" }}°c
          </h4>
        </div>
        <div class="d-flex flex-row align-items-end mb-4 me-4">
          <div class="d-flex flex-row align-items-center ms-3 me-5">
            <IconWind/>
            <div class="ms-2 d-flex flex-column justify-content-center">
              <h5 class="m-0">
                {{ data.currentWeather.windspeed || "-" }} 
                <span style="font-size: small;">
                  Km/h
                </span>
              </h5>
              <span style="font-size: small; font-weight: 500;">
                Wind Speed
              </span>
            </div>
          </div>
          <div class="d-flex flex-row align-items-center ms-4 me-5">
            <IconHumidity/>
            <div class="ms-2 d-flex flex-column justify-content-center">
              <h5 class="m-0">
                {{ data.humidity || "-" }} %
              </h5>
              <span style="font-size: small; font-weight: 500;">
                Humidity
              </span>
            </div>
          </div>
          <div class="d-flex flex-row align-items-center ms-4 me-5">
            <IconUV/>
            <div class="ms-2 d-flex flex-column justify-content-center">
              <h5 class="m-0">
                {{ data.uv || "-" }}
              </h5>
              <span style="font-size: small; font-weight: 500;">
                UV Index
              </span>
            </div>
          </div>
          <div class="d-flex flex-row align-items-center ms-4 me-5">
            <IconPressure/>
            <div class="ms-2 d-flex flex-column justify-content-center">
              <h5 class="m-0">
                {{ data.pressure || "-" }}
                <span style="font-size: small;">
                  hPa
                </span>
              </h5>
              <span style="font-size: small; font-weight: 500;">
                Air Pressure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import IconLocation from '../components/icons/IconLocation.vue';
  import IconWind from '../components/icons/IconWind.vue';
  import IconHumidity from '../components/icons/IconHumidity.vue';
  import IconUV from '../components/icons/IconUV.vue';
  import IconPressure from '../components/icons/IconPressure.vue';
  import axios from 'axios';
  import { reactive } from 'vue';

  const data = reactive(
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

  function setWeather(val){
    if(data.currentWeather.is_day == 0){
      if(val == 0 || val == 1){
        data.weather = "Clear"
        data.weatherImg = "moonIcon.png"
        data.weatherColor = "#11316a"
      }

      else if(val == 2 || val == 3){
        data.weather = "Cloudy"
        data.weatherImg = "cloudyNightIcon.png"
        data.weatherColor = "#1c1d4b"
      }

      else if(val == 45 || val == 48){
        data.weather = "Foggy"
        data.weatherImg = "foggyNightIcon.png"
        data.weatherColor = "#778899"
      }
    }

    else if(data.currentWeather.is_day == 1){
      if(val == 0 || val == 1){
        data.weather = "Clear"
        data.weatherImg = "sunIcon.png"
        data.weatherColor = "#11316a"
      }

      else if(val == 2 || val == 3){
        data.weather = "Cloudy"
        data.weatherImg = "cloudyDayIcon.png"
        data.weatherColor = "#1c1d4b"
      }

      else if(val == 45 || val == 48){
        data.weather = "Foggy"
        data.weatherImg = "foggyDayIcon.png"
        data.weatherColor = "#778899"
      }
    }

    if(val == 51 || val == 53 || val == 55 || val == 56 || val == 57){
      data.weather = "Drizzle"
      data.weatherImg = "drizzleIcon.png"
      data.weatherColor = "#3f7cd7"
    }

    else if(val == 61 || val == 63 || val == 65 || val == 66 || val == 67 || val == 80 || val == 81 || val == 82 || val == 85 || val == 86){
      data.weather = "Rain"
      data.weatherImg = "rainIcon.png"
      data.weatherColor = "#01487e"
    }

    else if(val == 71 || val == 73 || val == 75 || val == 77){
      data.weather = "Snow"
      data.weatherImg = "snowIcon.png"
      data.weatherColor = "#6bb5da"
    }

    else if(val == 95 || val == 96 || val == 99){
      data.weather = "Thunderstorm"
      data.weatherImg = "thunderstormIcon.png"
      data.weatherColor = "#6840a3"
    }
  }
  
  async function getData(lat, long){
    try {
      const weatherData = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,uv_index,is_day,pressure_msl&current_weather=true&forecast_days=1&timezone=Asia%2FBangkok`
        )
        const currentIdx = weatherData.data.hourly.time.indexOf(weatherData.data.current_weather.time)

        data.currentWeather = weatherData.data.current_weather;

        data.humidity = weatherData.data.hourly.relativehumidity_2m[currentIdx];

        data.uv = weatherData.data.hourly.uv_index[currentIdx];

        data.pressure = weatherData.data.hourly.pressure_msl[currentIdx];

        setWeather(weatherData.data.current_weather.weathercode)
      } catch (error) {
        console.log(error)
      }
    }

  async function getLocationName(lat, long){
    try {
      const location = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`
      )
      data.location = location.data.address.city + ", " + location.data.address.country
    } catch (error) {
      console.log(error)
    }
  }
  getData(-6.21, 106.85)
  getLocationName(-6.21, 106.85)
</script>