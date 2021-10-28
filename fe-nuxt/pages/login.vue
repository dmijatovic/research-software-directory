<template>
  <section>
    <h4>Login</h4>
    <input v-model="username" type="text" placeholder="User name">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">
      Login
    </button>

    <div>
      <v-btn @click="github">
        Github
      </v-btn>
      <v-btn @click="google">
        Google
      </v-btn>
    </div>
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
    // gitlab () {
    //   console.log('login with gitlab')
    // },
    google () {
      console.log('login with google')
      this.$auth.loginWith('google')
    }
  }
})
</script>
<style scoped>
button{
  width:50%;
  margin:1rem auto;
}
</style>
