<template>
  <section>
    <v-flex xs12>
        <v-card>
          <v-card-text>
            <img :src="profile.image" alt="">
            <p>{{profile.username}}</p>
          </v-card-text>
        </v-card>
    </v-flex>
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
