<template>
  <section>
    <blog-post :post="post"/>
  </section>
</template>

<script>
import blogNav from '@/components/blog/BlogNav.vue';
import blogPost from '@/components/blog/BlogPost.vue';
import { cockpit } from '@/plugins/axios.js';

export default {
    components: {
        blogNav,
        blogPost
    },
    async asyncData(context) {
        // eslint-disable-next-line
        console.log('*****************************');
        // eslint-disable-next-line
        console.log('*** process.env.cockpitApiKey:', process.env.cockpitApiKey);

        try {
            const { data } = await cockpit.post('/collections/get/posts?token=${process.env.cockpitApiKey}', {
                slug: $route.params.slug
            });
        }
        catch(error) {
            console.log('*** This is what comes back from axio:', error);
        }

        console.log('*** This is what comes back from axio:', res);
        return { post: data };
    }
};
</script>
