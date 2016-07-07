<template>
  <div id="wrapper">
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
export default {
  components: { AppNavbar, AppFooter },
  data() {
    return {

    }
  }
}
</script>

<style lang="sass">
  @import '../src/assets/stylesheets/app.scss'
</style>
