<template>
  <v-toolbar light>
      <v-toolbar-title id="title">Mpritter</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down" style="padding-top:10px;">
        <div v-for="item in menuItems" :key="item.title">
          <v-btn flat :to="item.route"><v-icon>{{item.icon}}</v-icon>&nbsp;<b>{{item.title}}</b></v-btn>
        </div>
        <div>
          <v-btn flat @click="logout()" v-show="show"><v-icon>lock</v-icon>&nbsp;<b>Logout</b></v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.show = true
    }
  },
  computed: {
    menuItems () {
      if (localStorage.getItem('token')) {
        let items = [
          { icon: 'home', title: 'Home', route: '/' },
          { icon: 'add_circle', title: 'Add Post', route: '/post' }
        ]
        return items
      } else {
        let items = [
          { icon: 'home', title: 'Home', route: '/' },
          { icon: 'face', title: 'Signup', route: '/signup' },
          { icon: 'lock_open', title: 'Signin', route: '/signin' }
        ]
        return items
      }
    }
  }
}
</script>

<style>

</style>
