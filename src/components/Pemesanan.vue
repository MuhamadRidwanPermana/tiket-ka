<script>
import Tittle from '@/components/Form/Tittle.vue'
import FormPemesanan from '@/components/Form/FormPemesanan.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Tittle, FormPemesanan, Footer
  }
}
</script>
<template>
  <div class="lg:w-1/2 min-h-[calc(100vh-64px)] w-full relative">
    <Tittle />
    <FormPemesanan />
    <Footer />
  </div>
</template>