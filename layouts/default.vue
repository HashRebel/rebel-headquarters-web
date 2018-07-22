<template>
  <div id="app">
    <main-header/>
    <nuxt/>
    <main-footer/>
  </div>
</template>

<script>
import header from '@/components/HamburgerMenu.vue';
import footer from '@/components/Footer.vue';

export default {
  components: {
    mainFooter: footer,
    mainHeader: header
  }
}
</script>


<style lang="scss">
#app {
  overflow:hidden
}
</style>
