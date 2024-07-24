<script setup>
import Navigation from '@/components/Navigation.vue'
import HeroImage from '@/components/HeroImage.vue'
import Pemesanan from '@/components/Pemesanan.vue'
</script>

<template>
  <Navigation />
  <div class="flex w-full h-full">
    <HeroImage class="lg:block hidden" />
    <Pemesanan />
  </div>
</template>