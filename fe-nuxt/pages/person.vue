<template>
  <section>
    <h2>Person page title</h2>
    <pre>
    {{ JSON.stringify(auth,null,2) }}
  </pre>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['auth'])
  },
  mounted () {
    console.log(this.$auth)
    console.log(this.$store.state.auth)
  }
})
</script>
