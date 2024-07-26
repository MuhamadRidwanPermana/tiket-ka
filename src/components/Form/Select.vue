<script>
import { ref } from 'vue';

import { Select } from 'ant-design-vue';

const options = ref([
  {
    value: 'sumedang',
    label: 'Sumedang',
  },
  {
    value: 'bandung',
    label: 'Bandung',
  },
  {
    value: 'jakarta',
    label: 'Jakarta',
  },
]);
const handleChangeOption = value => {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
};

export default {
  props: {
    placeholder: String
  },
  components: {
    ASelect: Select
  },
  data() {
    return {
      handleChangeOption,
      options
    }
  }
}
</script>

<template>
  <div class="font-Montserrat w-full h-full bg-[#fff]">
    <a-select label-in-value show-search :options="options" @change="handleChangeOption" :placeholder="placeholder"
      class="font-Montserrat text-text-disabled-dark text-sm w-full h-full rounded-r-lg cursor-pointer bg-[#fff]">
    </a-select>
  </div>
</template>