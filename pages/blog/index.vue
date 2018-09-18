<template>
  <div>
    <blog-feed/>
  </div>
</template>

<script>
import blogFeed from '@/components/blog/BlogFeed.vue';

export default {
    scrollToTop: true,
    head() {
        return {};
    },
    components: {
        blogFeed
    }
};
</script>
