<template>
  <header>
    <h1>Header</h1>
    <nav>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/person">
        Person
      </NuxtLink>
      <NuxtLink to="/software">
        Software
      </NuxtLink>
      <NuxtLink
        v-if="!auth.loggedIn"
        to="/login"
      >
        Login
      </NuxtLink>
    </nav>
    <div v-if="auth.loggedIn" class="avatar">
      <img :src="auth.user.avatar_url" :alt="auth.user.name" :title="auth.user.name">
      <button @click="logout">
        Logout
      </button>
    </div>
  </header>
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
<style scoped>
header{
  display:flex;
  justify-content: space-between;
  justify-items: center;
  padding: 1rem 4rem;
}
nav{
  display: flex;
  align-items: center;
}
a{
  padding: 0 1rem;
}

.avatar{
  width: 4rem;
  height: 4rem;
}

img{
  width: 4rem;
  overflow: hidden;
  border-radius: 50%;
}
</style>
