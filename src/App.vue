<template>
  <div id="app">
    <rebel-headquarters-home></rebel-headquarters-home>
    <rebel-headquarters-body></rebel-headquarters-body>
    <rebel-headquarters-footer></rebel-headquarters-footer> -->
  </div>
</template>

<style lang="scss">
    // TODO: move all the loading to each componant. I want each component to
    // only load the css that is needed for that component that way we are not
    // loading the entire CSS hierarchy for every page.
    @import './assets/stylesheets/main.scss';
</style>

<script>
  import Home from "~/components/Header.vue";
  import Body from "~/components/BrandBanner.vue";
  import Footer from "~/components/Footer.vue";

  export default {
    components: {
      rebelHeadquartersHome: Home,
      rebelHeadquartersBody: Body,
      rebelHeadquartersFooter: Footer
    }
  }
</script>

// TODO: create resume page.
