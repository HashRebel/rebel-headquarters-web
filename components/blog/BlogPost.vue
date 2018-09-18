<template>
  <section>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <object
        :data="featuredImgPath()"
        type="image/jpg"
      >
        <img
          :src="defaultImage()"
          alt="defaultImage"
        >
      </object>
      <div v-html="$md.render(post.article)"/>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        post:{
            type: Object,
            required: true,
            validator: (post) => {
                // TODO: validate all the expected fields are pressent.
                if(post.title  && post.article){
                    return true;
                }

                return false;
            }
        }

    },
    // computed: {
    //     articlePost() {
    //         return marked(this.post.article, { sanitize: true });
    //     }
    // },
    methods: {
        featuredImgPath(){
            return process.env.cmsBaseUrl + this.post.featuredImage.path;
        },
        defaultImage(){
            const image = require('@/assets/images/beetle-profile-crop.jpg'); // TODO: pick a better default image and put in variable
            return image;
        }
    }
};
</script>
