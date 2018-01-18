<template>
  <v-app id="app">
    <header-navbar></header-navbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer id="footer" light app class="pa-4">
      <p>&copy; Copyright 2018 - Riski N Putra</p>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar'
export default {
  name: 'app',
  components: {
    'header-navbar': HeaderNavbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
