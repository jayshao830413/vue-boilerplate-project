<template>
  <div id="wrapper">
    <Navbar></Navbar>
    <!-- main view -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/header/header'
export default {
  components: { Navbar },
  data() {
    return {

    }
  }
}
</script>

<style lang="sass">
</style>
