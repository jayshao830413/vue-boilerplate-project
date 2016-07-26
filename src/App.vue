<template>
  <div id="app">
    <app-navbar></app-navbar>
    <!-- main view -->
    <router-view>
    </router-view>
    <app-footer><app-footer>
  </div>
</template>

<script>
import AppNavbar from './components/header/header'
import AppFooter from './components/footer/footer'
import Auth from './services/auth/index.js'
import store from './vuex/store'
export default {
  components: { AppNavbar, AppFooter },
  store: store,
  data() {
    return {
      isLoggedIn: false,
    }
  },
  computed: {
    auth: function () {
      return Auth
    }
  },
  ready() {
  }
}
</script>

<style lang="scss">
  @import '../src/assets/stylesheets/app.scss';
  #app {
    height: 100%;
    max-height: 100%;
  }
</style>
