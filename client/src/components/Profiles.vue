<template>
  <section>
    <h1>{{profile}}</h1>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  created () {
    this.getProfile()
  },
  computed: {
    ...mapState([
      'profile'
    ])
  },
  methods: {
    ...mapActions([
      'getProfile'
    ])
  }
}
</script>

<style>

</style>
