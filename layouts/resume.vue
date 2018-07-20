<template>
  <div id="resume">
    <nuxt/>
    <img src="~/assets/images/beetle-profile-crop.jpg">
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
#resume{
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 1148px;
}
</style>
