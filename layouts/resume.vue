<template>
  <div id="resume">
    <nuxt/>
    <img src="~/assets/images/beetle-profile-crop.jpg">
    <main-footer/>
  </div>
</template>

<script>
export default {
    scrollToTop: true,
    components: {
        mainFooter: footer
    }
};
</script>


<style lang="scss">
#resume{
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 1148px;
}
</style>
