<template>
  <section>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.article }}</p>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        props:{
            type: Object,
            required: true,
            validator: () => {
                // TODO: validate all the expected fields are pressent.
                if(post.title  && post.article){
                    return true;
                }

                return false;
            }
        }

    },
    data() {
        return {
            // post: {
            //     title:'Placeholder for New Story',
            //     article:'#Testing my placeholder/n/nThis is a pretty dope placeholder yo!'
            // }
        };
    }
};
</script>
