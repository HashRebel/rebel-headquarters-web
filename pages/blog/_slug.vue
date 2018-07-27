<template>
  <section v-if="post">
    <blog-post :post="post"/>
  </section>
</template>

<script>
import blogNav from '@/components/blog/BlogNav.vue';
import blogPost from '@/components/blog/BlogPost.vue';
import cmsApi from '@/plugins/cmsApi.js';

export default {
    components: {
        blogNav,
        blogPost
    },
    async asyncData({ params }) {
        const test = await cmsApi.getPostBySlug(params.slug);
        // eslint-disable-next-line
        console.log('*************** Cockpit data', test);
        return test;
    },
    // data() {
    //     return {
    //         post: {
    //             title:'Placeholder for New Story',
    //             article:'#Testing my placeholder/n/nThis is a pretty dope placeholder yo!'
    //         }
    //     };
    // }
};
</script>
