<template>
  <div class="bg d-flex container">
    <IconSunny/>
    <div class="d-flex flex-column justify-content-center">
      <h1>
        Sunny
      </h1>
      <h4>
        100&deg;C
      </h4>
    </div>
    <div class="d-flex flex-row align-items-end mb-4">
      <div class="d-flex flex-row align-items-center ms-5 me-5">
        <IconWind/>
        <div class="ms-2 d-flex flex-column justify-content-center">
          <h5 class="m-0">
            100 
            <span style="font-size: small;">
              Km/h
            </span>
          </h5>
          <span style="font-size: small; font-weight: 500;">
            Wind Speed
          </span>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center ms-5 me-5">
        <IconHumidity/>
        <div class="ms-2 d-flex flex-column justify-content-center">
          <h5 class="m-0">
            100 %
          </h5>
          <span style="font-size: small; font-weight: 500;">
            Humidity
          </span>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center ms-5 me-5">
        <IconUV/>
        <div class="ms-2 d-flex flex-column justify-content-center">
          <h5 class="m-0">
            8.7
          </h5>
          <span style="font-size: small; font-weight: 500;">
            UV Index
          </span>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center ms-5 me-5">
        <IconPressure/>
        <div class="ms-2 d-flex flex-column justify-content-center">
          <h5 class="m-0">
            1009.1 
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
</template>

<style>
.bg{
  background-color: lightskyblue;
}
</style>

<script setup>
  import IconSunny from '../components/icons/IconSunny.vue';
  import IconRain from '../components/icons/IconRain.vue';
  import IconWind from '../components/icons/IconWind.vue';
  import IconHumidity from '../components/icons/IconHumidity.vue';
  import IconUV from '../components/icons/IconUV.vue';
  import IconPressure from '../components/icons/IconPressure.vue';
</script>