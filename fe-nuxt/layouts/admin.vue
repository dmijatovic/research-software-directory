<template>
  <v-app>
    <AdminSidebar />
    <AdminHeader />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AdminHeader from './AdminHeader.vue'
import AdminSidebar from './AdminSidebar.vue'
import Footer from './Footer.vue'
export default Vue.extend({
  name: 'Admin',
  components: {
    AdminSidebar,
    AdminHeader,
    Footer
  }
})
</script>
<style scoped>

</style>
