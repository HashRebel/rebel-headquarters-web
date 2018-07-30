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
      <p>{{ post.article }}</p>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        post:{
            type: Object,
            required: true,
            validator: (value) => {
                // TODO: validate all the expected fields are pressent.
                if(value.title  && value.article){
                    return true;
                }

                return false;
            }
        }

    },
    methods: {
        featuredImgPath(){
            return process.env.cockpitBaseUrl + this.post.featuredImage.path;
        },
        defaultImage(){
            const image = require('@/assets/images/beetle-profile-crop.jpg'); // TODO: pick a better default image and put in variable
            return image;
        }
    }
};
</script>
