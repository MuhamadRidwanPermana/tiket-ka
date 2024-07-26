<script>
import { ref } from 'vue';

import { DatePicker } from 'ant-design-vue';

import Tittle from '@/components/Form/Tittle.vue'
import Select from '@/components/Form/Select.vue'
import Button from '@/components/Form/Button.vue'
import CardInputPenumpang from '@/components/Card/CardInputPenumpang.vue'

import { IconBus, IconDate, IconUser, IconPlus, IconMinus, IconClose, IconChevronDown } from '@/utils/Index.js'

// Date
const dateValue = ref();
const dateFormat = ['DD - MM - YYYY', 'DD - MM - YY'];
const onChangeDate = (date, dateString) => {
  console.log(date, dateString); // 2022-08-01
};

export default {
  components: {
    Tittle, Select, Button, IconBus, IconDate, IconUser, IconPlus, IconMinus, IconClose, IconChevronDown, CardInputPenumpang,
    ADatePicker: DatePicker
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

      // Date
      dateFormat,
      dateValue,
      onChangeDate,
    }
  }
}
</script>

<template lang="">

  <div class="relative flex flex-col gap-5 lg:px-16 md:px-10 px-5">
    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconBus />
      </div>
      <Select placeholder="Stasiun Awal" class="py-2 text-text-disabled-dark bg-[#fff]"/>
      <div class="w-fit h-full flex items-center px-2 rounded-l-lg cursor-pointer">
        <IconChevronDown />
      </div>
    </div>

    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconBus />
      </div>
      <Select placeholder="Stasiun Tujuan" class="py-2 text-text-disabled-dark bg-[#fff]"/>
      <div class="w-fit h-full flex items-center px-2 rounded-l-lg cursor-pointer">
        <IconChevronDown />
      </div>
    </div>

    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconDate />
      </div>
      <a-date-picker v-model:value="dateValue" @change="onChangeDate" :format="dateFormat" placeholder="Tanggal Keberangkatan" class="font-Montserrat text-text-disabled-dark w-full h-full text-sm rounded-r-lg cursor-pointer bg-[#fff]" />
      <div class="w-fit h-full flex items-center px-2 rounded-l-lg cursor-pointer">
        <IconChevronDown />
      </div>
    </div>

    <div class="flex w-full h-12 rounded-lg items-center border border-border-color bg-[#fff]" @click="toggle = !toggle">
      <div class="w-fit h-full flex items-center px-4 bg-border-color rounded-l-lg">
        <IconUser />
      </div>
      <p class="font-Montserrat flex items-center w-full h-full text-text-disabled-dark bg-[#fff] text-sm outline-none rounded-r-lg mx-3 cursor-pointer" id="jml_penumpang">{{ (totalPenumpang() ? totalPenumpang() : "Jumlah Penumpang") }}</p>
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

.ant-picker, .ant-select-selector {
  border: none !important;
  box-shadow: none !important;
}

.ant-picker-input input, .ant-select-selection-item, .ant-select-selection-placeholder {
  font-family: 'Montserrat', sans-serif;
  color: #6c717a !important;
  cursor: pointer !important;
}

.ant-picker-suffix {
  color: #6c717a !important;
}

.ant-picker-suffix svg, .ant-select-arrow {
  display: none !important;
}
</style>