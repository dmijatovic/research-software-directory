<template>
  <main>
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
export default Vue.extend({
  name: 'Default',
  components: {
    Header,
    Footer
  }
})
</script>
<style scoped>

</style>
