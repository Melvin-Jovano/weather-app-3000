<template>
    <div class="mt-3 d-flex container">
        <div class="flex-fill row container p-0">
            <div 
            class="col px-2"
            v-for="(i, index) in data"
            :key="index"
            >
                <div class="d-flex flex-column align-items-center p-2" style="background-color: lightslategray; border-radius: 5%;">
                    <div class="d-flex flex-column align-items-center text-white">
                        <h3>
                            Wednesday
                        </h3>
                        <span style="font-size: 13px;">
                            23, September 2024
                        </span>
                    </div>
                    <div 
                    class="d-flex justify-content-center align-items-center my-3" 
                    style="width: 100px; height: 100px; background-color: #49adf9; border-radius: 50%;"
                    >
                        <img src="/images/cloudyDayIcon.png" alt="" width="70" height="70" style="pointer-events: none;">
                    </div>
                    <div class="d-flex flex-column align-items-center text-white">
                        <span style="font-size: 20px;">
                            27°c
                        </span>
                        <h5>
                            Thunderstorm
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const data = [1,2,3,4,5,6,7]
</script>