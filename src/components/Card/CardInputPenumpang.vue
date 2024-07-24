<script>

import { IconPlus, IconMinus, IconClose } from '@/utils/Index.js'

export default {
  components: {
    IconPlus,
    IconMinus,
    IconClose
  },
  props: {
    title: String,
    description: String,
    jml_penumpang_dewasa: Number,
    jml_penumpang_bayi: Number,
  },
  
  data() {
    return {
      toggle: false
    }
  }
}
</script>

<template>
  <div class="card lg:px-16 px-5 w-full h-fit">
    <div
      class="font-Montserrat w-full h-auto rounded-lg items-center bg-bg-primary border border-border-color shadow-md"
      v-show='!toggle'>
      <header class="w-full h-full flex pt-4 pb-2 px-4 justify-between border-b-2 border-border-color">
        <h1 class="font-semibold">Jumlah Penumpang</h1>
        <span class="w-fit h-full p-1 cursor-pointer">
          <IconClose @click="toggle = !toggle" />
        </span>
      </header>

      <body class="w-full h-full">
        <div class="w-full h-full flex items-center justify-between px-4 py-3 border-b-2 border-border-color">
          <div>
            <h2 class="font-semibold text-primary">Dewasa</h2>
            <h3 class="text-xs">Usia 4+</h3>
          </div>
          <div class="flex gap-5 items-center justify-center">
            <IconMinus @click="$emit('removePenumpangDewasa')"/>
            <h5 class="font-Montserrat font-semibold bg-text-primary-light">{{ jml_penumpang_dewasa }}</h5>
            <IconPlus @click="$emit('addPenumpangDewasa')"/>
          </div>
        </div>
        <div class="w-full h-full flex items-center justify-between px-4 py-3 border-b-2 border-border-color">
          <div>
            <h2 class="font-semibold text-primary">Bayi</h2>
            <h3 class="text-xs">Usia 0-3</h3>
          </div>
          <div class="flex gap-5 items-center justify-center">
            <IconMinus @click="$emit('removePenumpangBayi')"/>
            <h5 class="font-Montserrat font-semibold bg-text-primary-light">{{ jml_penumpang_bayi }}</h5>
            <IconPlus @click="$emit('addPenumpangBayi')"/>
          </div>
        </div>
      </body>
      <footer class="w-full px-4">
        <button class="font-Montserrat text-right font-bold w-full h-12 rounded-lg cursor-pointer" @click="toggle = !toggle">
          Selesai
        </button>
      </footer>
    </div>
  </div>
</template>

<style>
.card {
  margin-bottom: -105px;
}
</style>