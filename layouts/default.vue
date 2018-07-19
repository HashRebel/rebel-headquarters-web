<template>
  <div id="app">
    <nuxt/>
    <main-footer/>
  </div>
</template>

<script>
import footer from "@/components/Footer.vue"

export default {
  components: {
    mainFooter: footer
  }
}
</script>


<style lang="scss">
#app {
  overflow:hidden
}
</style>
