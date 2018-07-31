<template>
  <section>
    <blog-post :post="post"/>
  </section>
</template>

<script>
import blogNav from '@/components/blog/BlogNav.vue';
import blogPost from '@/components/blog/BlogPost.vue';
import CmsApi from '@/plugins/cmsApi.js';

export default {
    components: {
        blogNav,
        blogPost
    },
    async asyncData(context) {
        try {
            const cmsApi = new CmsApi(context.env.cmsBaseUrl, context.env.cmsApiKey);
            return await cmsApi.getPostBySlug(context.params.slug);
        }
        catch(error){
            // Handel error cases
            return {};
        }
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
