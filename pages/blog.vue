<template>
  <div>
    <blog-feed></blog-feed>
  </div>
</template>

<script>
  import BlogFeed from "@/components/blog/BlogFeed.vue";

  export default {
    scrollToTop: true,
    head () {
      return {

      }
    },
    components: {
      blogFeed: BlogFeed
    }
  }
</script>
