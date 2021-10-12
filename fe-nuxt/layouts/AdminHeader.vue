<template>
  <v-app-bar app>
    <h1>App bar</h1>
    <NuxtLink
      v-if="!auth.loggedIn"
      to="/login"
    >
      Login
    </NuxtLink>
    <v-avatar>
      <img :src="auth.user.avatar_url" :alt="auth.user.name" :title="auth.user.name">
    </v-avatar>
    <button @click="logout">
      Logout
    </button>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'Header',
  computed: {
    ...mapState(['auth'])
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
})
</script>
