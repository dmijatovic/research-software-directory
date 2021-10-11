<template>
  <section>
    <h4>Login</h4>
    <input v-model="username" type="text" placeholder="User name">
    <input v-model="password" type="password" placeholder="Password">

    <button @click="login">
      Login
    </button>

    <button @click="github">
      Github
    </button>
    <button @click="gitlab">
      GitLab
    </button>
    <button @click="google">
      Google
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('Login to this')
    },
    github () {
      console.log('Github login')
      this.$auth.loginWith('github')
    },
    gitlab () {
      console.log('login with gitlab')
    },
    google () {
      console.log('login with google')
      this.$auth.loginWith('google')
    }
  }
})
</script>
