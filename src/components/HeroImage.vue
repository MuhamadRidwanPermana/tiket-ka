<script>
import { img_kreta } from "@/utils/Images.vue";

export default {
  data() {
    return {
      img_kreta
    };
  },
};
</script>

<template lang="">
  <div class="w-full h-full">
    <div class="relative bg-gradient-to-t from-[#000] to-primary">
      <div class="relative bg-cover bg-center w-full min-h-[calc(100vh-64px)] " :style="{ backgroundImage: `url(${img_kreta})` }">
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000] w-full h-1/2 mt-auto">
          <div class="absolute inset-x-0 bottom-0 flex gap-3 items-center justify-start text-text-primary-light font-Montserrat p-5">
            <div class="flex justify-center items-center bg-text-disabled-light w-10 h-10 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill w-5 h-5 text-text-primary-light" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </div>
            <div class="flex flex-col text-text-primary-light">
              <h1 class="text-sm font-bold">Stasiun Malang Kota Baru</h1>
              <h2 class="text-xs">Malang, Jawa Timur</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="">
  
</style>