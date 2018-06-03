<template>
  <div id="app">
    <rebel-headquarters-home></rebel-headquarters-home>
    <rebel-headquarters-body></rebel-headquarters-body>
    <rebel-headquarters-footer></rebel-headquarters-footer>
    <!-- TODO: Add the router view back in when I understand it better  -->
    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">
    @import './assets/stylesheets/main.scss';
</style>

<script>
  import Home from "./components/Header.vue";
  import Body from "./components/BrandBanner.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {
      rebelHeadquartersHome: Home,
      rebelHeadquartersBody: Body,
      rebelHeadquartersFooter: Footer
    }
  }
</script>
