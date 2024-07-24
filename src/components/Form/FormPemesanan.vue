<script>
import Tittle from '@/components/Form/Tittle.vue'
import Input from '@/components/Form/Input.vue'
import Button from '@/components/Form/Button.vue'
import CardInputPenumpang from '@/components/Card/CardInputPenumpang.vue'

import { IconBus, IconDate, IconUser, IconPlus, IconMinus, IconClose, IconChevronDown } from '@/utils/Index.js'

export default {
  components: {
    Tittle, Input, Button, IconBus, IconDate, IconUser, IconPlus, IconMinus, IconClose, IconChevronDown, CardInputPenumpang
  },
  methods: {
    addPenumpangDewasa() {
      this.jml_penumpang_dewasa = Math.min(this.jml_penumpang_dewasa + 1, 10);
    },
    addPenumpangBayi() {
      this.jml_penumpang_bayi = Math.min(this.jml_penumpang_bayi + 1, 10);
    },
    removePenumpangDewasa() {
      this.jml_penumpang_dewasa = Math.max(0, this.jml_penumpang_dewasa - 1);
    },
    removePenumpangBayi() {
      this.jml_penumpang_bayi = Math.max(0, this.jml_penumpang_bayi - 1);
    },
    totalPenumpang() {
      return this.jml_penumpang_dewasa + this.jml_penumpang_bayi
    }
  },
  data() {
    return {
      toggle: false,
      jml_penumpang_dewasa: 0,
      jml_penumpang_bayi: 0,
    }
  },
}
</script>

<template lang="">

  <div class="relative flex flex-col gap-5 lg:px-16 md:px-10 px-5">
    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconBus />
      </div>
      <Input placeholder="Stasiun Awal" class="mx-2 text-text-disabled-dark bg-[#fff]"/>
    </div>

    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconBus />
      </div>
      <Input placeholder="Stasiun Tujuan" class="mx-2 text-text-disabled-dark bg-[#fff]"/>
    </div>

    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconDate />
      </div>
      <input placeholder="Tanggal Keberangkatan" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" class="font-Montserrat text-primary textbox-n w-full h-full text-sm outline-none rounded-r-lg mx-2 cursor-pointer bg-[#fff]">
    </div>
    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]" @click="toggle = !toggle">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconUser />
      </div>
      <p class="font-Montserrat flex items-center w-full h-full text-text-disabled-dark bg-[#fff] text-sm outline-none rounded-r-lg mx-2 cursor-pointer" id="jml_penumpang">{{ (totalPenumpang() ? totalPenumpang() : "Jumlah Penumpang") }}</p>
      <div class="w-fit h-full flex items-center px-2 rounded-l-lg cursor-pointer">
        <IconChevronDown />
      </div>
    </div>
    
    <CardInputPenumpang class="card absolute w-full left-0 bottom-0" v-show='toggle' @addPenumpangDewasa="addPenumpangDewasa" @addPenumpangBayi="addPenumpangBayi" @removePenumpangDewasa="removePenumpangDewasa" @removePenumpangBayi="removePenumpangBayi" :jml_penumpang_dewasa="jml_penumpang_dewasa" :jml_penumpang_bayi="jml_penumpang_bayi" />
    
    <Button title="Cari Kereta" class="bg-primary text-text-primary-light" />
    <Button title="Cek Kode Booking" class="bg-primary bg-opacity-20 text-primary" />
  </div>
    
</template>

<style lang="css">
.card {
  margin-top: 200px !important;
}

Input::placeholder {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6c717a !important;
}
</style>