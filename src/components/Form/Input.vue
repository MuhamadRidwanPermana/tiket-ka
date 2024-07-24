<script>
export default {
  props: {
    placeholder: String,
    // icon: String
  },
}
</script>

<template>
  <div class="font-Montserrat w-full h-full bg-[#fff]">
    <!-- <div class="flex w-full h-12 rounded-lg items-center bg-base-color-background border border-border-color"> -->
      <!-- <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
      </div> -->
      <select class="w-full h-full text-sm outline-none rounded-r-lg cursor-pointer bg-[#fff]">
        <option disabled selected hidden>{{ placeholder }}</option>
        <option value="bandung">Bandung</option>
        <option value="jakarta">Jakarta</option>
        <option value="sumedang">Sumedang</option>
      </select>
    <!-- </div> -->
  </div>
</template>